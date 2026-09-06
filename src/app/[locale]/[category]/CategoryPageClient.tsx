"use client";

import { useTranslations } from "next-intl";
import { useLocalizedHref } from "@/hooks/useLocalizedHref";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import ProductSchema from "@/components/ProductSchema";

type Props = {
  category: string;
  products: Product[];
};

export default function CategoryPageClient({
  category,
  products = [],
}: Props) {
  const t = useTranslations("CategoryPage");
  const localizeHref = useLocalizedHref();

  if (!products?.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white text-legible">{t("notFound")}</h1>
        <Link
          href={localizeHref("/")}
          className="text-blue-600 hover:underline"
        >
          {t("backToCatalog")}
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-0">
      <div className="px-4 pt-6 pb-2 mx-auto max-w-7xl sm:px-6 sm:py-24">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white capitalize text-legible">
          {t(`categories.${category}`)}
        </h1>

        {/* flex-wrap + justify-center instead of grid: when there are fewer cards
            than a row can hold, they center instead of leaving empty space on
            the right (grid-cols-N with 1fr always stretches columns to full width) */}
        <div className="flex flex-wrap justify-center gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)] xl:w-[calc(25%-0.75rem)]"
            >
              <ProductSchema product={product} />

              <Link
                href={localizeHref(`${product.category}/${product.id}`)}
                className="group relative rounded-2xl bg-white dark:bg-gray-800 p-4 shadow-md transition-shadow duration-300
                   sm:hover:scale-105 sm:hover:opacity-90
                   block flex h-full flex-col"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    alt={product.imageAlt}
                    src={product.imageSrc.image}
                    width={500}
                    height={500}
                    className="aspect-square w-full rounded-xl bg-gray-100 object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 rounded-xl bg-black bg-opacity-50 opacity-0 lg:group-hover:opacity-50 transition-opacity duration-300" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="hidden lg:inline-block">
                      <div className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition transform scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 duration-300">
                        {t("view")}
                      </div>
                    </span>
                  </div>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {product.name}
                </h3>

                <p className="mt-auto text-lg font-medium text-gray-900 dark:text-white">
                  {product.price}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
