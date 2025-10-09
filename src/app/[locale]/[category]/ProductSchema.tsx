"use client";

import Script from "next/script";

type Product = {
  name: string;
  imageSrc: { image: string };
  description: string;
  price: number | string;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function ProductSchema({ product }: { product: Product }) {
  return (
    <Script id={`ld-product-${product.name}`} type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Product",
        name: product.name,
        image: product.imageSrc.image.startsWith("http")
          ? product.imageSrc.image
          : `${siteUrl}${product.imageSrc.image}`,
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
