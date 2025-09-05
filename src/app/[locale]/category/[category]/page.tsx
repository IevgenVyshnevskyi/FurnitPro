"use client";

import products, { Product } from "../../../../../public/data/products";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function CategoryPage() {
  const params = useParams();
  const t = useTranslations("CategoryPage");
  const category = params.category as string;

  // Фільтруємо продукти за категорією
  const filteredProducts = products.filter((p) => p.category === category);

  return (
    <div className="bg-gray-0 min-h-screen">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 sm:py-24">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 capitalize">
          {t(`categories.${category}`)}
        </h1>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/category/${product.category}/${product.id}`}
              className="group relative rounded-2xl bg-white p-4 shadow-md transition-shadow duration-300
                         sm:hover:scale-105 sm:hover:opacity-90
                         block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  alt={product.imageAlt}
                  src={product.imageSrc.image}
                  width={500} // потрібно обовʼязково вказати width і height
                  height={500}
                  className="aspect-square w-full rounded-xl bg-gray-100 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay для великих екранів */}
                <div className="absolute inset-0 rounded-xl bg-black bg-opacity-50 opacity-0 lg:group-hover:opacity-50 transition-opacity duration-300" />

                {/* Кнопка (зникає на sm і менше) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="hidden lg:inline-block">
                    <div className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition transform scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 duration-300">
                      {/* Переглянути */} {t("view")}
                    </div>
                  </span>
                </div>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {/* {product.name} */}
                {t(`products.${product.name}`)}
              </h3>

              {/* <p className="mt-2 text-sm text-gray-600">{product.imageAlt}</p> */}
              <p className="mt-2 text-lg font-medium text-gray-900">
                {/* {product.price} */}
                {/* {t(`prices.${product.price}`)} */}
                {t(`prices.${product.name}`)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
