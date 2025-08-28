"use client";

import products from "@/../data/products";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProductPage() {
  const params = useParams();
  const category = params.category as string;
  const id = params.id as string;

  const product = products.find(
    (p) => p.category === category && p.id.toString() === id
  );

  if (!product) {
    return (
      <div className="px-4 py-16 mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold mb-4">Продукт не знайдено</h1>
        <Link href="/" className="text-blue-600 hover:underline">
          Повернутися на головну
        </Link>
      </div>
    );
  }

  return (
    <div className="px-4 py-16 mx-auto max-w-7xl">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.imageSrc}
        alt={product.imageAlt}
        className="w-full max-w-md rounded-xl mb-4"
      />
      <p className="text-gray-600 mb-2">{product.imageAlt}</p>
      <p className="text-lg font-medium text-gray-900">{product.price}</p>
    </div>
  );
}
