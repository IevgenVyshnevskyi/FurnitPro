"use client";

import { useParams } from "next/navigation";

// Schemes/links that must not get a locale prefix
const EXTERNAL_HREF_PATTERN = /^([a-z][a-z0-9+.-]*:|#)/i;

/**
 * Builds localized links for the App Router
 */
export function useLocalizedHref() {
  const { locale } = useParams<{ locale: string }>();

  return (path: string) => {
    // tel:, mailto:, http(s):, #anchor etc. — leave unchanged
    if (EXTERNAL_HREF_PATTERN.test(path)) {
      return path;
    }

    // Ensure the path always starts with "/"
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `/${locale}${cleanPath}`;
  };
}
