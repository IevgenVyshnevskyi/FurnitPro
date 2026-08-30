import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import allProducts from "@/../public/data/products";
import { Product } from "@/types";
import ProductPageClient from "./ProductPageClient";

type Props = {
  params: Promise<{ locale: string; category: string; id: string }>;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://furnit-pro.vercel.app";

function findProduct(category: string, id: string) {
  return allProducts.find(
    (p) => p.category === category && p.id.toString() === id
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, id, locale } = await params;
  const product = findProduct(category, id);
  const t = await getTranslations({ locale, namespace: "ProductPage" });

  if (!product) {
    return {
      title: `${t("productNotFound")} — Фурніт-Про`,
      description: t("productNotFound"),
      robots: { index: false, follow: true },
    };
  }

  const name = t.has(`products.${product.name}`)
    ? t(`products.${product.name}`)
    : product.name;
  const description = t.has(`descriptions.${product.name}`)
    ? t(`descriptions.${product.name}`)
    : product.description;

  return {
    metadataBase: new URL(siteUrl),
    title: `${name} — Фурніт-Про`,
    description,
    openGraph: {
      title: name,
      description,
      images: [`${siteUrl}${product.imageSrc.image}`],
      url: `${siteUrl}/${locale}/${category}/${id}`,
      locale: locale === "ua" ? "uk_UA" : "en_US",
      type: "website",
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/${category}/${id}`,
      languages: {
        uk: `${siteUrl}/ua/${category}/${id}`,
        en: `${siteUrl}/en/${category}/${id}`,
      },
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { category, id, locale } = await params;
  const rawProduct = findProduct(category, id);

  if (!rawProduct) {
    return <ProductPageClient product={null} />;
  }

  const t = await getTranslations({ locale, namespace: "ProductPage" });

  const product: Product = {
    ...rawProduct,
    name: t.has(`products.${rawProduct.name}`)
      ? t(`products.${rawProduct.name}`)
      : rawProduct.name,
    price: t.has(`prices.${rawProduct.name}`)
      ? t(`prices.${rawProduct.name}`)
      : rawProduct.price,
    type: t.has(`types.${rawProduct.name}`)
      ? t(`types.${rawProduct.name}`)
      : rawProduct.type,
    description: t.has(`descriptions.${rawProduct.name}`)
      ? t(`descriptions.${rawProduct.name}`)
      : rawProduct.description,
  };

  return <ProductPageClient product={product} />;
}
