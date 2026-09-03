import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

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

export default async function CompanyPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CompanyPage" });

  const values = ["quality", "reliability", "partnership"] as const;

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">{t("title")}</h1>
      <p className="text-gray-600 mb-8">{t("intro")}</p>

      <h2 className="text-xl font-semibold mb-2 text-gray-900">
        {t("approachTitle")}
      </h2>
      <p className="text-gray-600 mb-8">{t("approach")}</p>

      <ul className="grid gap-4 sm:grid-cols-3">
        {values.map((key) => (
          <li
            key={key}
            className="rounded-xl bg-white p-5 shadow-md text-gray-700"
          >
            {t(`values.${key}`)}
          </li>
        ))}
      </ul>
    </main>
  );
}
