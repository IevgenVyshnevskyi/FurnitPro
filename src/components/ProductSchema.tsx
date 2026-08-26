"use client";

import Script from "next/script";
import { Product } from "@/types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

function resolveImageUrl(image: string) {
  return image.startsWith("http") ? image : `${siteUrl}${image}`;
}

export default function ProductSchema({ product }: { product: Product }) {
  return (
    <Script id={`ld-product-${product.id}`} type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Product",
        name: product.name,
        image: resolveImageUrl(product.imageSrc.image),
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
