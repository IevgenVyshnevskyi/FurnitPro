// src/app/[locale]/[category]/[id]/metadata.ts
import products from "@/../public/data/products";
import type { Metadata } from "next";

type Props = {
  params: {
    id: string;
    category: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = params;

   if (!category) {
    return {
      title: "Категорію не знайдено — Фурніт-Про",
      description: "Сторінка категорії не знайдена.",
    };
  }

  return {
    metadataBase: new URL("https://furnit-pro.vercel.app"),
    title: `Категорія: ${category}`,
    description: `Купити меблеву фурнітуру у категорії ${category}`,
    openGraph: {
      images: [`/og/categories/${category}.jpg`],
    },
  };
}


/* export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) {
    return {
      title: "Продукт не знайдено — Фурніт-Про",
      description: "Сторінка продукту не знайдена.",
    };
  }

  return {
    metadataBase: new URL("https://furnit-pro.vercel.app"),
    title: `${product.name} — Фурніт-Про`,
    description: product.description,
    openGraph: {
      images: [product.imageSrc.image],
    },
  }; 
}*/
