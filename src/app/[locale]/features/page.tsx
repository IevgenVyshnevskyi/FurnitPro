import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://furnit-pro.vercel.app";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles = { ua: "Наші послуги", ru: "Наши услуги", en: "Our Services" };

  return {
    title: titles[locale as keyof typeof titles] ?? titles.ua,
    alternates: {
      canonical: `${siteUrl}/${locale}/features`,
      languages: {
        uk: `${siteUrl}/ua/features`,
        ru: `${siteUrl}/ru/features`,
        en: `${siteUrl}/en/features`,
      },
    },
  };
}

export default async function FeaturesPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "FeaturesPage" });

  const items = ["range", "quality", "wholesale", "consulting"] as const;
  const categories = ["mechanisms", "hooks", "curtains", "corners"] as const;
  const orderSteps = ["step1", "step2", "step3"] as const;

  return (
    <main className="container mx-auto px-4 pt-8 pb-8 sm:pt-24 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white text-legible">{t("title")}</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">{t("intro")}</p>

      <ul className="grid gap-4 sm:grid-cols-2">
        {items.map((key) => (
          <li
            key={key}
            className="rounded-xl bg-white dark:bg-gray-800 p-5 shadow-md text-gray-700 dark:text-gray-300"
          >
            {t(`items.${key}`)}
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-4 text-gray-900 dark:text-white text-legible">
        {t("categoriesTitle")}
      </h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {categories.map((key) => (
          <li
            key={key}
            className="rounded-xl bg-white dark:bg-gray-800 p-5 shadow-md text-gray-700 dark:text-gray-300"
          >
            {t(`categories.${key}`)}
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-4 text-gray-900 dark:text-white text-legible">
        {t("orderTitle")}
      </h2>
      <ol className="space-y-3">
        {orderSteps.map((key, idx) => (
          <li key={key} className="flex gap-3 text-gray-700 dark:text-gray-300">
            <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
              {idx + 1}
            </span>
            <span>{t(`orderSteps.${key}`)}</span>
          </li>
        ))}
      </ol>
    </main>
  );
}
