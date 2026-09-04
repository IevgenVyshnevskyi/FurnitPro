import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://furnit-pro.vercel.app";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles = { ua: "Вхід", ru: "Вход", en: "Login" };

  return {
    title: titles[locale as keyof typeof titles] ?? titles.ua,
    // Утилітарна сторінка без унікального контенту — не повинна індексуватись
    robots: { index: false, follow: true },
    alternates: {
      canonical: `${siteUrl}/${locale}/login`,
    },
  };
}

export default async function LoginPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "LoginPage" });

  const benefits = ["history", "pricing", "reorder"] as const;

  return (
    <main className="container mx-auto px-4 pt-16 pb-8 sm:pt-24 max-w-3xl">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">{t("title")}</h1>
      <p className="text-gray-600 mb-8">{t("intro")}</p>

      <h2 className="text-xl font-semibold mb-4 text-gray-900">
        {t("benefitsTitle")}
      </h2>
      <ul className="grid gap-4 sm:grid-cols-3">
        {benefits.map((key) => (
          <li
            key={key}
            className="rounded-xl bg-white p-5 shadow-md text-gray-700"
          >
            {t(`benefits.${key}`)}
          </li>
        ))}
      </ul>

      <p className="mt-8 text-gray-600">{t("contact")}</p>
    </main>
  );
}
