import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://furnit-pro.vercel.app";

export default function OrganizationSchema() {
  return (
    <Script id="ld-organization" type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Фурніт-Про",
        url: siteUrl,
        logo: `${siteUrl}/logo/logo.png`,
        sameAs: [
          "https://www.instagram.com/FurnitPro",
          "https://www.facebook.com/profile.php?id=61578154867004",
          "https://www.tiktok.com/@FurnitPro7",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+380957989094",
            email: "furnitpro7@gmail.com",
            contactType: "customer service",
            areaServed: "UA",
            availableLanguage: ["uk", "en"],
          },
        ],
      })}
    </Script>
  );
}
