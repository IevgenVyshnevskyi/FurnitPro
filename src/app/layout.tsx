import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import BackgroundLayout from "@/components/BackgroundLayout";
import OrganizationSchema from "@/components/OrganizationSchema";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";

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
  // Each page appends the brand suffix to its own title (e.g. "... — FurnitPro"),
  // so we deliberately do NOT use a template here to avoid a duplicate suffix.
  title: "Фурніт-Про",
  description:
    "Магазин меблевої фурнітури із локалізацією українською, російською та англійською.",
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
    "мебельная фурнитура",
    "купить мебельную фурнитуру",
    "механизм для дивана",
    "мебельные петли",
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
      ru: `${siteUrl}/ru`,
      en: `${siteUrl}/en`,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // suppressHydrationWarning: next-themes sets the .light/.dark class on <html>
    // via an inline script before hydration — without this, React would needlessly
    // warn about a mismatch between the server and client render
    <html suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} h-full`}>
        <OrganizationSchema />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider>
            <BackgroundLayout>{children}</BackgroundLayout>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
