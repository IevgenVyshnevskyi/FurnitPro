// src/app/[locale]/[category]/[id]/ProductSchema.tsx
"use client";

import Script from "next/script";

type Product = {
  name: string;
  imageSrc: {
    image: string;
    drawing?: string;
  };
  description: string;
  price: string | number;
};

export default function ProductSchema({ product }: { product: Product }) {
  return (
    <Script id="ld-product" type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Product",
        name: product.name,
        image: product.imageSrc.image,
        description: product.description,
        offers: {
          "@type": "Offer",
          priceCurrency: "UAH",
          price: product.price,
          availability: "https://schema.org/InStock",
        },
      })}
    </Script>
  );
}
