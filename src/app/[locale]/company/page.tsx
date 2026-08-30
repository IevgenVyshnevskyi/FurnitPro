import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://furnit-pro.vercel.app";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isUa = locale === "ua";

  return {
    title: isUa ? "Компанія" : "Company",
    alternates: {
      canonical: `${siteUrl}/${locale}/company`,
      languages: {
        uk: `${siteUrl}/ua/company`,
        en: `${siteUrl}/en/company`,
      },
    },
  };
}

export default function CompanyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Компанія</h1>
      <p className="text-gray-600">Інформація про компанію буде додана найближчим часом.</p>
    </main>
  );
}
