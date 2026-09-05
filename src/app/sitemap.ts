import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import products from "../../public/data/products";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://furnit-pro.vercel.app";

// Map "ua" -> "uk" for correct hreflang codes (the real ISO code for Ukrainian is "uk")
const hreflangByLocale: Record<string, string> = { ua: "uk", en: "en" };

const categories = Array.from(new Set(products.map((p) => p.category)));

function languagesFor(pathForLocale: (locale: string) => string) {
  return Object.fromEntries(
    routing.locales.map((locale) => [hreflangByLocale[locale] ?? locale, `${siteUrl}${pathForLocale(locale)}`])
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    // Locale homepage
    entries.push({
      url: `${siteUrl}/${locale}`,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: languagesFor((l) => `/${l}`) },
    });

    // Category pages
    for (const category of categories) {
      entries.push({
        url: `${siteUrl}/${locale}/${category}`,
        changeFrequency: "weekly",
        priority: 0.8,
        alternates: { languages: languagesFor((l) => `/${l}/${category}`) },
      });
    }

    // Product pages
    for (const product of products) {
      entries.push({
        url: `${siteUrl}/${locale}/${product.category}/${product.id}`,
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: {
          languages: languagesFor((l) => `/${l}/${product.category}/${product.id}`),
        },
      });
    }
  }

  return entries;
}
