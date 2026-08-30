import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

type Props = { params: Promise<{ locale: string }> };

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://furnit-pro.vercel.app";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isUa = locale === "ua";

  const title = isUa
    ? "Фурніт-Про — Меблева фурнітура: механізми, петлі, зачепи, кутки"
    : "FurnitPro — Furniture Hardware: Mechanisms, Hinges, Latches, Corners";
  const description = isUa
    ? "Купуйте якісну меблеву фурнітуру онлайн: підйомні механізми, петлі, зачепи та кутки з доставкою по Україні."
    : "Buy quality furniture hardware online: lifting mechanisms, hinges, latches and corners, delivered across Ukraine.";

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
      url: `${siteUrl}/${locale}`,
      siteName: "Фурніт-Про",
      locale: isUa ? "uk_UA" : "en_US",
      type: "website",
    },
  };
}

export default function HomePage() {
  return <HomePageClient />;
}
