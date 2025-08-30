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
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-3xl font-bold mb-4">Продукт не знайдено</h1>
        <Link href="/" className="text-blue-600 hover:underline">
          Повернутися на головну сторінку
        </Link>
      </div>
    );
  }
  console.log("product.imageSrc.image: ", product.imageSrc.image);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
        <img
          src={product.imageSrc.image}
          alt={product.imageAlt}
          className="w-full rounded-xl mb-6 shadow-md"
        />
        {product.imageSrc.drawing && (
          <img
            src={product.imageSrc.drawing}
            alt={product.imageAlt}
            className="w-full rounded-xl mb-6 shadow-md"
          />
        )}
        <p className="text-gray-600 mb-3">{product.imageAlt}</p>
        <p className="text-lg font-medium text-gray-900">{product.price}</p>
      </div>
    </div>
  );
}
