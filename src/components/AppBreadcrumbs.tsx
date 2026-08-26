"use client";

import { useState, useEffect, useRef } from "react";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { usePathname, useParams } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocalizedHref } from "@/hooks/useLocalizedHref";
import allProducts from "@/../public/data/products";

export default function AppBreadcrumbs() {
  const pathname = usePathname();
  const { locale } = useParams(); // "ua" або "en"
  const t = useTranslations("Breadcrumbs");
  const tProduct = useTranslations("ProductPage");
  const localizeHref = useLocalizedHref();

  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastItemRef = useRef<HTMLLIElement>(null);

  // Перевірка мобільного режиму
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Розбиваємо шлях і прибираємо перший сегмент (locale)
  let segments = pathname.split("/").filter(Boolean);
  if (segments[0] === locale) {
    segments = segments.slice(1);
  }

  // Автоматичне прокручування до останньої крихти (тільки на мобільному)
  useEffect(() => {
    if (isMobile && lastItemRef.current && containerRef.current) {
      lastItemRef.current.scrollIntoView({ behavior: "smooth", inline: "end" });
    }
  }, [segments, isMobile]);

  return (
    <div
      ref={containerRef}
      className={
        isMobile
          ? "overflow-x-auto ml-2 mb-[-30]"
          : "mx-auto max-w-2xl items-center justify-between pt-1 mb-[-60]"
      }
      style={isMobile ? { whiteSpace: "nowrap" } : undefined}
    >
      <Breadcrumbs
        className="flex flex-nowrap"
        style={isMobile ? { minWidth: "max-content" } : undefined}
      >
        {/* Головна */}
        <BreadcrumbItem>
          <Link href={localizeHref("/")}>{t("home")}</Link>
        </BreadcrumbItem>

        {/* Інші сегменти */}
        {segments.map((seg, idx) => {
          const rawHref = "/" + segments.slice(0, idx + 1).join("/");
          const href = localizeHref(rawHref); // ✅ локалізація один раз
          let label: string = seg;

          // Якщо це productId → шукаємо серед локальних товарів
          const isProductId = idx === segments.length - 1 && /^\d+$/.test(seg);
          if (isProductId) {
            const product = allProducts.find((p) => p.id.toString() === seg);
            label = product
              ? tProduct.has(`products.${product.name}`)
                ? tProduct(`products.${product.name}`)
                : product.name
              : seg;
          } else {
            // Інакше переклад сегмента
            label = t(seg, { default: seg });
          }

          const refProp =
            idx === segments.length - 1 ? { ref: lastItemRef } : {};

          return (
            <BreadcrumbItem key={`${idx}-${href}`} {...refProp}>
              <Link href={href}>{label}</Link>
            </BreadcrumbItem>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}
