import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

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

export default async function FeaturesPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "FeaturesPage" });

  const items = ["range", "quality", "wholesale", "consulting"] as const;

  return (
    <main className="container mx-auto px-4 pt-16 pb-8 sm:pt-24 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">{t("title")}</h1>
      <p className="text-gray-600 mb-8">{t("intro")}</p>

      <ul className="grid gap-4 sm:grid-cols-2">
        {items.map((key) => (
          <li
            key={key}
            className="rounded-xl bg-white p-5 shadow-md text-gray-700"
          >
            {t(`items.${key}`)}
          </li>
        ))}
      </ul>
    </main>
  );
}
