import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { notFound, redirect } from "next/navigation";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://furnit-pro.vercel.app";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    ua: "Фурніт-Про — Меблева фурнітура",
    ru: "Фурнит-Про — Мебельная фурнитура",
    en: "FurnitPro — Furniture Hardware",
  };
  const descriptions = {
    ua: "Магазин меблевої фурнітури: механізми, петлі, зачепи та кутки з доставкою по Україні.",
    ru: "Магазин мебельной фурнитуры: механизмы, петли, крючки и уголки с доставкой по Украине.",
    en: "Furniture hardware store: mechanisms, hinges, latches and corners, delivered across Ukraine.",
  };
  const ogLocales = { ua: "uk_UA", ru: "ru_RU", en: "en_US" };

  const key = locale as keyof typeof titles;
  const title = titles[key] ?? titles.ua;
  const description = descriptions[key] ?? descriptions.ua;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        uk: `${siteUrl}/ua`,
        ru: `${siteUrl}/ru`,
        en: `${siteUrl}/en`,
      },
    },
    openGraph: {
      title,
      description,
      siteName: "Фурніт-Про",
      locale: ogLocales[key] ?? ogLocales.ua,
      type: "website",
    },
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  // Якщо URL не містить мови, перенаправляємо на українську
  if (!locale) {
    redirect("/ua");
  }

  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
