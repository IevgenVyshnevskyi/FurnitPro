// src/app/page.tsx
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
        <h1>{/* Ласкаво просимо на Фурніт-Про! */}</h1>
        {/* Тут можеш додати головний контент */}
      </main>
    </>
  );
}
