"use client";

import { useParams } from "next/navigation";

/**
 * Формує локалізовані посилання для App Router
 */
export function useLocalizedHref() {
  const { locale } = useParams<{ locale: string }>();

  return (path: string) => {
    // Забезпечимо, щоб шлях завжди починався з "/"
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `/${locale}${cleanPath}`;
  };
}
