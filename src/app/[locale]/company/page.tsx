import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://furnit-pro.vercel.app";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles = { ua: "Компанія", ru: "Компания", en: "Company" };

  return {
    title: titles[locale as keyof typeof titles] ?? titles.ua,
    alternates: {
      canonical: `${siteUrl}/${locale}/company`,
      languages: {
        uk: `${siteUrl}/ua/company`,
        ru: `${siteUrl}/ru/company`,
        en: `${siteUrl}/en/company`,
      },
    },
  };
}

export default async function CompanyPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CompanyPage" });

  const values = ["quality", "reliability", "partnership"] as const;
  const processSteps = ["step1", "step2", "step3", "step4"] as const;

  return (
    <main className="container mx-auto px-4 pt-8 pb-8 sm:pt-24 max-w-4xl text-legible">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{t("title")}</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">{t("intro")}</p>

      <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {t("approachTitle")}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">{t("approach")}</p>

      <ul className="grid gap-4 sm:grid-cols-3">
        {values.map((key) => (
          <li
            key={key}
            className="rounded-xl bg-white dark:bg-gray-800 p-5 shadow-md text-gray-700 dark:text-gray-300"
          >
            {t(`values.${key}`)}
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-4 text-gray-900 dark:text-white">
        {t("processTitle")}
      </h2>
      <ol className="grid gap-4 sm:grid-cols-2">
        {processSteps.map((key, idx) => (
          <li
            key={key}
            className="rounded-xl bg-white dark:bg-gray-800 p-5 shadow-md text-gray-700 dark:text-gray-300"
          >
            <div className="flex items-center gap-2 mb-1 font-semibold text-gray-900 dark:text-white">
              <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                {idx + 1}
              </span>
              {t(`process.${key}Title`)}
            </div>
            {t(`process.${key}`)}
          </li>
        ))}
      </ol>

      <h2 className="text-xl font-semibold mt-10 mb-2 text-gray-900 dark:text-white">
        {t("audienceTitle")}
      </h2>
      <p className="text-gray-600 dark:text-gray-400">{t("audience")}</p>
    </main>
  );
}
