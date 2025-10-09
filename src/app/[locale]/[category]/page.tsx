import type { Metadata } from "next";
import products from "../../../../public/data/products";
import CategoryPageClient from "./CategoryPageClient";

type Props = {
  params: { category: string; locale?: string };
};

// 🔹 Базовий URL сайту з .env
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

// ✅ Генерація метаданих на сервері
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = params.category;
  const locale = params.locale || "uk";

  const categoryProducts = products.filter((p) => p.category === category);

  if (!categoryProducts.length) {
    return {
      title: `Категорія не знайдена — Фурніт-Про`,
      description: `Сторінка категорії не знайдена`,
    };
  }

  return {
    title: `Категорія: ${category}`,
    description: `Купити меблеву фурнітуру у категорії ${category}`,
    openGraph: {
      title: `Категорія: ${category}`,
      description: `Купити меблеву фурнітуру у категорії ${category}`,
      url: `${siteUrl}/${locale}/${category}`,
      siteName: "Фурніт-Про",
      images: [
        {
          url: `${siteUrl}/og/categories/${category}.jpg`,
          width: 1200,
          height: 630,
          alt: `Категорія ${category}`,
        },
      ],
      locale: locale === "uk" ? "uk_UA" : "en_US",
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

// ✅ Server Component передає category у Client Component
export default function CategoryPage({ params }: Props) {
  return (
    <CategoryPageClient category={params.category} locale={params.locale} />
  );
}
