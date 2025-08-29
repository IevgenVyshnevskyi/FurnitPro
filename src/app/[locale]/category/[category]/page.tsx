"use client";

import products, { Product } from "@/../data/products";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as string;

  // Фільтруємо продукти за категорією
  const filteredProducts = products.filter((p) => p.category === category);

  /* if (filteredProducts.length === 0) {
    return (
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    );
  } */

  return (
    <div className="bg-gray-0 min-h-screen">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 sm:py-24">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 capitalize">
          {category}
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
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-xl bg-gray-100 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay для великих екранів */}
                <div className="absolute inset-0 rounded-xl bg-black bg-opacity-50 opacity-0 lg:group-hover:opacity-50 transition-opacity duration-300" />

                {/* Кнопка (зникає на sm і менше) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="hidden lg:inline-block">
                    <div className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition transform scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 duration-300">
                      Переглянути
                    </div>
                  </span>
                </div>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{product.imageAlt}</p>
              <p className="mt-2 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
