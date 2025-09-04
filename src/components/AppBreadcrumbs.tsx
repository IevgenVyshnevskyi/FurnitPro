"use client";

import { useState, useEffect } from "react";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { usePathname, useParams } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface Product {
  id: number;
  name: string;
  category: string;
}

export default function AppBreadcrumbs() {
  const pathname = usePathname();
  const { locale } = useParams(); // "ua" або "en"
  const t = useTranslations("Breadcrumbs");

  const [products, setProducts] = useState<Product[]>([]);

  // Динамічне завантаження JSON за мовою
  useEffect(() => {
    fetch(`/data/product.${locale}.json`)
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch((err) => console.error("Failed to load products:", err));
  }, [locale]);

  const segments = pathname.split("/").filter(Boolean);

  return (
    <Breadcrumbs>
      {/* Перша крихта завжди "Головна" */}
      <BreadcrumbItem>
        <Link href="/">{t("home")}</Link>
      </BreadcrumbItem>

      {segments.map((seg, idx) => {
        const href = "/" + segments.slice(0, idx + 1).join("/");

        let label = seg;

        // Перевірка: останній сегмент — ID товару
        const isProductId = idx === segments.length - 1 && /^\d+$/.test(seg);
        if (isProductId) {
          const product = products.find((p) => p.id.toString() === seg);
          label = product ? product.name : seg;
        } else {
          // Переклад категорій
          label = t(seg, { default: seg });
        }

        return (
          <BreadcrumbItem key={`${idx}-${href}`}>
            <Link href={href}>{label}</Link>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumbs>
  );
}
