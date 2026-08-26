import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { notFound, redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "FurnitPro",
  description: "High-quality furniture hardware",
  alternates: {
    languages: {
      uk: "https://furnit-pro.vercel.app/ua",
      en: "https://furnit-pro.vercel.app/en",
    },
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
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
