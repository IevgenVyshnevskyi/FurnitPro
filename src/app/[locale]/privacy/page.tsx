import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://furnit-pro.vercel.app";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    ua: "Політика конфіденційності",
    ru: "Политика конфиденциальности",
    en: "Privacy Policy",
  };

  return {
    title: titles[locale as keyof typeof titles] ?? titles.ua,
    // Юридична сторінка без унікального маркетингового контенту — не варто конкурувати за видачу
    robots: { index: false, follow: true },
    alternates: {
      canonical: `${siteUrl}/${locale}/privacy`,
      languages: {
        uk: `${siteUrl}/ua/privacy`,
        ru: `${siteUrl}/ru/privacy`,
        en: `${siteUrl}/en/privacy`,
      },
    },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PrivacyPage" });

  const sections = ["collection", "use", "cookies", "rights"] as const;

  return (
    <main className="container mx-auto px-4 pt-16 pb-8 sm:pt-24 max-w-3xl">
      <h1 className="text-3xl font-bold mb-2 text-gray-900">{t("title")}</h1>
      <p className="text-sm text-gray-400 mb-6">{t("updated")}</p>
      <p className="text-gray-600 mb-8">{t("intro")}</p>

      <div className="space-y-6">
        {sections.map((key) => (
          <section key={key}>
            <h2 className="text-xl font-semibold mb-2 text-gray-900">
              {t(`sections.${key}Title`)}
            </h2>
            <p className="text-gray-600">{t(`sections.${key}`)}</p>
          </section>
        ))}
      </div>

      <p className="mt-8 text-gray-600">
        {t("contact")}
        <a
          href="mailto:furnitpro7@gmail.com"
          className="text-blue-600 hover:underline"
        >
          furnitpro7@gmail.com
        </a>
      </p>
    </main>
  );
}
