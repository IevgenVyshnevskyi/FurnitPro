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
  const isUa = locale === "ua";

  const title = isUa
    ? "Фурніт-Про — Меблева фурнітура"
    : "FurnitPro — Furniture Hardware";
  const description = isUa
    ? "Магазин меблевої фурнітури: механізми, петлі, зачепи та кутки з доставкою по Україні."
    : "Furniture hardware store: mechanisms, hinges, latches and corners, delivered across Ukraine.";

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        uk: `${siteUrl}/ua`,
        en: `${siteUrl}/en`,
      },
    },
    openGraph: {
      title,
      description,
      siteName: "Фурніт-Про",
      locale: isUa ? "uk_UA" : "en_US",
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
