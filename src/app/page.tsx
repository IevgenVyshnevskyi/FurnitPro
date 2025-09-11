export const metadata = {
  title: "Головна",
  description: "Фурніт-Про — магазин меблевої фурнітури онлайн.",
};

import Script from "next/script";

<Script id="ld-website" type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Фурніт-Про",
    url: "https://furnit-pro.vercel.app",
  })}
</Script>;
