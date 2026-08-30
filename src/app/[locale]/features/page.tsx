import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://furnit-pro.vercel.app";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isUa = locale === "ua";

  return {
    title: isUa ? "Наші послуги" : "Our Services",
    alternates: {
      canonical: `${siteUrl}/${locale}/features`,
      languages: {
        uk: `${siteUrl}/ua/features`,
        en: `${siteUrl}/en/features`,
      },
    },
  };
}

export default function FeaturesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Наші послуги</h1>
      <p className="text-gray-600">
        Ми надаємо якісну меблеву фурнітуру: механізми, петлі, зачепи та кутки для меблевого виробництва.
      </p>
    </main>
  );
}
