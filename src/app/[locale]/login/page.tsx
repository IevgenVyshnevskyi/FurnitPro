import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://furnit-pro.vercel.app";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isUa = locale === "ua";

  return {
    title: isUa ? "Вхід" : "Login",
    // Утилітарна сторінка без унікального контенту — не повинна індексуватись
    robots: { index: false, follow: true },
    alternates: {
      canonical: `${siteUrl}/${locale}/login`,
    },
  };
}

export default function LoginPage() {
  return (
    <main className="container mx-auto px-4 pt-16 pb-8 sm:pt-24">
      <h1 className="text-3xl font-bold mb-4">Вхід</h1>
      <p className="text-gray-600">Сторінка входу буде додана найближчим часом.</p>
    </main>
  );
}
