import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import BackgroundLayout from "@/components/BackgroundLayout";
import OrganizationSchema from "@/components/OrganizationSchema";
import { NextIntlClientProvider } from "next-intl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://furnit-pro.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  // Кожна сторінка сама додає суфікс бренду до свого title (напр. "... — Фурніт-Про"),
  // тож тут навмисно НЕ використовуємо template, щоб уникнути подвійного суфікса.
  title: "Фурніт-Про",
  description:
    "Магазин меблевої фурнітури із локалізацією українською та англійською.",
  keywords: [
    "меблева фурнітура",
    "фурнітура для меблів",
    "купити меблеву фурнітуру",
    "механізм для дивана",
    "меблеві петлі",
    "зачіп меблевий",
    "меблевий куток",
    "напрямні для ящиків",
    "інтернет-магазин меблевої фурнітури",
    "фурнітура Україна",
    "furniture hardware",
    "buy furniture fittings",
    "cabinet hinges",
    "drawer slides",
    "sofa bed mechanism",
    "metal furniture corner",
    "furniture hardware online store",
  ],
  authors: [{ name: "Ievgen Vyshnevskyi" }],
  openGraph: {
    title: "Фурніт-Про",
    description: "Магазин меблевої фурнітури.",
    url: siteUrl,
    siteName: "Фурніт-Про",
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Фурніт-Про",
    description: "Магазин меблевої фурнітури.",
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      uk: `${siteUrl}/ua`,
      en: `${siteUrl}/en`,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className="light">
      <body className={`${geistSans.variable} ${geistMono.variable} h-full`}>
        <OrganizationSchema />
        <NextIntlClientProvider>
          <BackgroundLayout>{children}</BackgroundLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
