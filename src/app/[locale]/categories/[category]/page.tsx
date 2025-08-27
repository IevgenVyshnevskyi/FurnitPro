"use client"; // додай цей рядок на початку файлу

import products, { Product } from "@/../data/products";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as string; // динамічна категорія з URL

  // Фільтруємо продукти за категорією
  const filteredProducts = products.filter((p) => p.category === category);

  if (filteredProducts.length === 0) {
    return (
      <div className="px-4 py-16 mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold mb-4">Категорія не знайдена</h1>
        <Link href="/">Повернутися на головну</Link>
      </div>
    );
  }

  return (
    <div className="bg-white px-4 py-16 mx-auto max-w-7xl">
      <h1 className="text-3xl font-bold mb-8 capitalize">{category}</h1>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {filteredProducts.map((product) => (
          <a key={product.id} href={product.href} className="group">
            <img
              alt={product.imageAlt}
              src={product.imageSrc}
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75"
            />
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              {product.price}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
