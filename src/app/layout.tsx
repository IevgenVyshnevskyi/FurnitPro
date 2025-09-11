import type { Metadata } from "next";
//import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
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

/* export const metadata: Metadata = {
  title: "FurnitPro",
  description: "High-quality furniture hardware",
}; */

export const metadata: Metadata = {
  title: {
    default: "Фурніт-Про", // Фурніт-Про
    template: "%s | Фурніт-Про", // Фурніт-Про
  },
  description: "Онлайн-магазин із локалізацією українською та англійською.",
  keywords: [
    "фурнітура",
    "меблі",
    "петлі",
    "напрямні",
    "магазин",
    "онлайн",
    "купити",
    "товари",
    "фурнітура",
    "джуніор механізм з ребром",
    "джуніор",
    "механізм",
    "зачіп посилений для великих меблевих елементів",
    "зачіп посилений",
    "зачіп",
    "металева меблева петля для складних конструкцій",
    "металева меблева петля",
    "металева петля",
    "меблева петля",
    "петля",
    "меблевий з’єднувальний куток 106",
    "меблевий з’єднувальний куток",
    "меблевий куток",
    "з’єднувальний куток",
    "механізм Блюз",
    "Блюз",
    "механізм ліжковий гідравлічни",
    "механізм ліжковий",
    "механізм гідравлічни",
    "механізм",
    "алігатор",
    "механізм Євро-Книжка",
    "механізм Книжка",
    "механізм Євро",
    "юніор ",
    "зачіп великий",
    "механізм Юніор",
    "зачіп середній",
    "зачіп слайдер Н-16",
    "зачіп слайдер",
    "зачіп Н-16",
    "Н-16",
    "зачіп слайдер Н-10",
    "зачіп слайдер",
    "зачіп Н-10",
    "Н-10",
    "Завіса велика 190",
    "Завіса велика",
    "Завіса 190",
    "Завіса мала",
    "Куток 106 оцинкований",
    "Куток 106",
    "Куток",
    "Куток 106 оцинкований",
    "Куток 106 оцинкований",
    "механізм ліжковий гідравлічний",
    "механізм ліжковий",
    "механізм гідравлічний",
    "меблева фурнітура",
    "купити меблевий куток",
    "петля для шафи",
    "напрямні для ящиків",
    "інтернет-магазин меблевої фурнітури",
    "фурнітура Україна",
    "купити петлю Черкаси",
    "купити напрямні Черкаси",
    "купити фурнітуру Черкаси",
    "купити зачіп Черкаси",
    "меблева фурнітура",
    "купити меблеву фурнітуру",
    "купити меблевий куток",
    "петля для шафи",
    "меблеві петлі купити",
    "напрямні для ящиків",
    "купити механізм для дивана",
    "меблева фурнітура Київ",
    "фурнітура для меблів Україна",
    "інтернет-магазин меблевої фурнітури",
    // --- Англійською ---
    "furniture hardware",
    "buy furniture fittings",
    "cabinet hinges",
    "buy drawer slides",
    "sofa bed mechanism",
    "metal furniture corner",
    "furniture hardware online store",
    "furniture accessories Ukraine",
    "hinges for furniture",
    "furniture connectors",
  ],
  authors: [{ name: "Johnny Mnemonic" }],
  openGraph: {
    title: "Фурніт-Про",
    description: "Інтернет-магазин меблевої фурнітури.",
    url: "https://furnit-pro.vercel.app", // пізніше виправити під реальний домен
    siteName: "FurntPro",
    images: [
      {
        url: "https://example.com/og/home.jpg", // або "/og/home.jpg", потрібно уточнити !!!
        width: 1200,
        height: 630,
        alt: "Фурніт-Про",
      },
    ],
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@furnitpro",
    title: "Фурніт-Про",
    description: "Інтернет-магазин меблевої фурнітури.",
    images: ["/og/home.jpg"], // або "https://example.com/og/home.jpg", потрібно уточнити !!!
  },
  alternates: {
    canonical: "https://furnit-pro.vercel.app",
    languages: {
      uk: "https://furnit-pro.vercel.app/ua",
      en: "https://furnit-pro.vercel.app/en",
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      className="light" /*  style={{color-scheme:"light"}} */ /* className="h-full" */ /* lang={locale} */ /* style={{ background: "var(--foreground)", color: "var(--background)" }} */
    >
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
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
        <NextIntlClientProvider /* locale={locale} */ /* messages={messages} */>
          <BackgroundLayout>{children}</BackgroundLayout>
          {/* <AppBreadcrumbs /> */}
        </NextIntlClientProvider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
