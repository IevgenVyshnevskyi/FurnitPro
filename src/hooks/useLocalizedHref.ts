"use client";

import { useParams } from "next/navigation";

// Схеми/посилання, які не повинні отримувати префікс локалі
const EXTERNAL_HREF_PATTERN = /^([a-z][a-z0-9+.-]*:|#)/i;

/**
 * Формує локалізовані посилання для App Router
 */
export function useLocalizedHref() {
  const { locale } = useParams<{ locale: string }>();

  return (path: string) => {
    // tel:, mailto:, http(s):, #anchor тощо — залишаємо без змін
    if (EXTERNAL_HREF_PATTERN.test(path)) {
      return path;
    }

    // Забезпечимо, щоб шлях завжди починався з "/"
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `/${locale}${cleanPath}`;
  };
}
