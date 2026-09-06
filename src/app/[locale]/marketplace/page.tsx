import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://furnit-pro.vercel.app";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles = { ua: "Маркетплейс", ru: "Маркетплейс", en: "Marketplace" };

  return {
    title: titles[locale as keyof typeof titles] ?? titles.ua,
    alternates: {
      canonical: `${siteUrl}/${locale}/marketplace`,
      languages: {
        uk: `${siteUrl}/ua/marketplace`,
        ru: `${siteUrl}/ru/marketplace`,
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
    <main className="container mx-auto px-4 pt-8 pb-8 sm:pt-24 max-w-4xl">
      <div className="flex items-center gap-3 mb-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t("title")}</h1>
        <span className="rounded-full bg-blue-100 dark:bg-blue-900 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300">
          {t("badge")}
        </span>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-8">{t("intro")}</p>

      <ul className="grid gap-4 sm:grid-cols-3">
        {items.map((key) => (
          <li
            key={key}
            className="rounded-xl bg-white dark:bg-gray-800 p-5 shadow-md text-gray-700 dark:text-gray-300"
          >
            {t(`items.${key}`)}
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-2 text-gray-900 dark:text-white">
        {t("whyTitle")}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">{t("why")}</p>

      <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {t("notifyTitle")}
      </h2>
      <p className="text-gray-600 dark:text-gray-400">{t("notify")}</p>
    </main>
  );
}
