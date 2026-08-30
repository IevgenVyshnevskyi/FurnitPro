import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://furnit-pro.vercel.app";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isUa = locale === "ua";

  return {
    title: isUa ? "Маркетплейс" : "Marketplace",
    alternates: {
      canonical: `${siteUrl}/${locale}/marketplace`,
      languages: {
        uk: `${siteUrl}/ua/marketplace`,
        en: `${siteUrl}/en/marketplace`,
      },
    },
  };
}

export default function MarketplacePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Маркетплейс</h1>
      <p className="text-gray-600">Розділ маркетплейсу буде додано найближчим часом.</p>
    </main>
  );
}
