"use client";

import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";
import products from "../../data/product.json"; // Ваш JSON з товарами

export default function AppBreadcrumbs() {
  const pathname = usePathname(); // наприклад "/products/sofas/1"
  const t = useTranslations("Breadcrumbs");

  const segments = pathname.split("/").filter(Boolean); // ["products", "sofas", "1"]

  return (
    <Breadcrumbs>
      {/* Перша завжди — головна */}
      <BreadcrumbItem>
        <Link href="/">{t("home")}</Link>
      </BreadcrumbItem>

      {segments.map((seg, idx) => {
        const href = "/" + segments.slice(0, idx + 1).join("/");

        let label = seg;

        // Якщо останній сегмент і число — вважаємо товаром
        const isProductId = idx === segments.length - 1 && /^\d+$/.test(seg);
        if (isProductId) {
          const product = products.find((p) => p.id.toString() === seg);
          label = product ? product.name : seg;
        } else {
          // Переклад сегментів для категорій
          label = t(seg) || seg;
        }

        return (
          <BreadcrumbItem key={idx}>
            <Link href={href}>{label}</Link>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumbs>
  );
}
