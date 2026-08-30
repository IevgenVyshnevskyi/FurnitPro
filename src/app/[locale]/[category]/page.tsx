import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import allProducts from "@/../public/data/products";
import { Product } from "@/types";
import CategoryPageClient from "./CategoryPageClient";

type Props = {
  params: Promise<{ locale: string; category: string }>;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://furnit-pro.vercel.app";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, locale } = await params;
  const tCategory = await getTranslations({ locale, namespace: "CategoryPage" });

  if (!tCategory.has(`categories.${category}`)) {
    return {
      title: "Категорію не знайдено — Фурніт-Про",
      description: "Сторінка категорії не знайдена.",
      robots: { index: false, follow: true },
    };
  }

  const categoryName = tCategory(`categories.${category}`);
  const title = `${categoryName} — Фурніт-Про`;
  const description = `Купити меблеву фурнітуру у категорії ${categoryName}`;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/${category}`,
      siteName: "Фурніт-Про",
      locale: locale === "ua" ? "uk_UA" : "en_US",
      type: "website",
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/${category}`,
      languages: {
        uk: `${siteUrl}/ua/${category}`,
        en: `${siteUrl}/en/${category}`,
      },
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category, locale } = await params;
  const t = await getTranslations({ locale, namespace: "ProductPage" });

  const products: Product[] = allProducts
    .filter((p) => p.category === category)
    .map((p) => ({
      ...p,
      name: t.has(`products.${p.name}`) ? t(`products.${p.name}`) : p.name,
      price: t.has(`prices.${p.name}`) ? t(`prices.${p.name}`) : p.price,
    }));

  return <CategoryPageClient products={products} category={category} />;
}
