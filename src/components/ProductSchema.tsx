"use client";

import Script from "next/script";
import { Product } from "@/types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://furnit-pro.vercel.app";

function resolveImageUrl(image: string) {
  return image.startsWith("http") ? image : `${siteUrl}${image}`;
}

// Schema.org requires a numeric price value (e.g. "40.00"), not a string
// like "40.00 грн./шт." — extract just the number, or omit offers entirely
// if the price isn't filled in yet (e.g. a "??? грн./шт." placeholder)
function parsePrice(price: string): number | null {
  const match = price.match(/\d+(?:[.,]\d+)?/);
  if (!match) return null;
  return parseFloat(match[0].replace(",", "."));
}

export default function ProductSchema({ product }: { product: Product }) {
  const numericPrice = parsePrice(product.price);

  return (
    <Script id={`ld-product-${product.id}`} type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Product",
        name: product.name,
        image: resolveImageUrl(product.imageSrc.image),
        description: product.description,
        ...(numericPrice !== null && {
          offers: {
            "@type": "Offer",
            priceCurrency: "UAH",
            price: numericPrice,
            availability: "https://schema.org/InStock",
          },
        }),
      })}
    </Script>
  );
}
