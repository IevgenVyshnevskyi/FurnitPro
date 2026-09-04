import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

type Props = { params: Promise<{ locale: string }> };

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://furnit-pro.vercel.app";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    ua: "Фурніт-Про — Меблева фурнітура: механізми, петлі, зачепи, кутки",
    ru: "Фурнит-Про — Мебельная фурнитура: механизмы, петли, крючки, уголки",
    en: "FurnitPro — Furniture Hardware: Mechanisms, Hinges, Latches, Corners",
  };
  const descriptions = {
    ua: "Купуйте якісну меблеву фурнітуру онлайн: підйомні механізми, петлі, зачепи та кутки з доставкою по Україні.",
    ru: "Покупайте качественную мебельную фурнитуру онлайн: подъёмные механизмы, петли, крючки и уголки с доставкой по Украине.",
    en: "Buy quality furniture hardware online: lifting mechanisms, hinges, latches and corners, delivered across Ukraine.",
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
      url: `${siteUrl}/${locale}`,
      siteName: "Фурніт-Про",
      locale: ogLocales[key] ?? ogLocales.ua,
      type: "website",
    },
  };
}

export default function HomePage() {
  return <HomePageClient />;
}
