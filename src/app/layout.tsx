import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import BackgroundLayout from "@/components/BackgroundLayout";
//import AppBreadcrumbs from "@/components/AppBreadcrumbs";

// ✅ Додаємо необхідні імпорти для next-intl
//import { notFound } from "next/navigation";
//import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FurnitPro",
  description: "High-quality furniture hardware",
};

export default async function RootLayout({
  children,
  /* params: { locale }, */ // ✅ Отримуємо поточну локаль з параметрів маршруту
}: Readonly<{
  children: React.ReactNode;
  /* params: { locale: string }; */
}>) {
  // ✅ Отримуємо переклади для поточної локалі на сервері
  //const messages = await getMessages({ locale });

  // ✅ Обробка випадку, коли переклади не знайдено
 /*  if (!messages) {
    notFound();
  } */

  return (
    <html className="h-full" /* lang={locale} */>
      <head>
        {/* Стандартний favicon */}
        <link rel="icon" href="/favicon.png" />
        {/* PNG favicon для кращої сумісності */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        {/* Apple Touch Icon для iOS */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        {/* Можна додати manifest для PWA */}
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} h-full`}>
        {/* ✅ Обгортаємо вміст у провайдер, передаючи переклади з сервера на клієнт */}
        <NextIntlClientProvider /* locale={locale} */ /* messages={messages} */>
          <BackgroundLayout>{children}</BackgroundLayout>
          {/* <AppBreadcrumbs /> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}