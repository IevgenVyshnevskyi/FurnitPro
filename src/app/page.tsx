// src/app/page.tsx
// Fallback root page — the real homepage lives at src/app/[locale]/page.tsx;
// this only serves visitors on a locale-less "/" that middleware missed.
import Script from "next/script";

export const metadata = {
  title: "Головна",
  description: "Фурніт-Про — магазин меблевої фурнітури онлайн.",
};

export default function HomePage() {
  return (
    <>
      <Script id="ld-website" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Фурніт-Про",
          url: "https://furnit-pro.vercel.app",
        })}
      </Script>

      <main>
        <h1>{/* Welcome to FurnitPro! */}</h1>
        {/* Main content can be added here */}
      </main>
    </>
  );
}
