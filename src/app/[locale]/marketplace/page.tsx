import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

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

export default async function MarketplacePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "MarketplacePage" });

  const items = ["catalog", "bulk", "tracking"] as const;

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex items-center gap-3 mb-4">
        <h1 className="text-3xl font-bold text-gray-900">{t("title")}</h1>
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
          {t("badge")}
        </span>
      </div>
      <p className="text-gray-600 mb-8">{t("intro")}</p>

      <ul className="grid gap-4 sm:grid-cols-3">
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
