import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
//import "./globals.css";
import { NextIntlClientProvider } from "next-intl";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
//import BackgroundLayout from "@/components/BackgroundLayout";
import { notFound, redirect } from "next/navigation";
//import AppBreadcrumbs from "@/components/AppBreadcrumbs";

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
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // 👈 тут Promise
}>) {
  const { locale } = await params; // 👈 обов’язково await
  // Якщо URL не містить мови, перенаправляємо на українську
  if (!locale) {
    redirect("/ua");
  }
  let messages;
  try {
    //messages = (await import(`../../messages/${locale}.json`)).default;
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    //<html /* lang={locale} */ /* lang="ua" */>

    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header />
      {/* <AppBreadcrumbs/> */}
          {/*  <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
      <main className="flex-grow">
        {/* <BackgroundLayout>{children}</BackgroundLayout> */}
        {children}
      </main>
          {/* </body> */}
      <Footer />
    </NextIntlClientProvider>

    //</html>
  );
}
