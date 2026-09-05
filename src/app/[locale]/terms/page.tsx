import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://furnit-pro.vercel.app";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    ua: "Умови користування",
    ru: "Условия использования",
    en: "Terms of Use",
  };

  return {
    title: titles[locale as keyof typeof titles] ?? titles.ua,
    // Legal page with no unique marketing content — not worth competing for search ranking
    robots: { index: false, follow: true },
    alternates: {
      canonical: `${siteUrl}/${locale}/terms`,
      languages: {
        uk: `${siteUrl}/ua/terms`,
        ru: `${siteUrl}/ru/terms`,
        en: `${siteUrl}/en/terms`,
      },
    },
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "TermsPage" });

  const sections = ["content", "ip", "liability", "law"] as const;

  return (
    <main className="container mx-auto px-4 pt-16 pb-8 sm:pt-24 max-w-3xl">
      <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">{t("title")}</h1>
      <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">{t("updated")}</p>
      <p className="text-gray-600 dark:text-gray-400 mb-8">{t("intro")}</p>

      <div className="space-y-6">
        {sections.map((key) => (
          <section key={key}>
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {t(`sections.${key}Title`)}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">{t(`sections.${key}`)}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
