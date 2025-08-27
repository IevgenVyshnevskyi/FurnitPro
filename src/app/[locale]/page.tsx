"use client";

import Link from "next/link";

const categories = [
  {
    id: 1,
    category: "mechanisms",
    imageSrc: "/images/products/1.mechanism-junior-strong/item2.jpg",
    imageAlt: "Junior mechanism with rib",
  },
  {
    id: 2,
    category: "hooks",
    imageSrc: "/images/products/3.latch-large/item2.jpg",
    imageAlt: "Зачіп посилений для великих меблевих елементів.",
  },
  {
    id: 3,
    category: "curtain",
    imageSrc: "/images/products/7.hinge-large-190/item2.jpg",
    imageAlt: "Металева меблева петля для складних конструкцій.",
  },
  {
    id: 4,
    category: "corners",
    imageSrc: "/images/products/9.angle-106/item3.jpg",
    imageAlt: "Меблевий з’єднувальний куток 106.",
  },
];

export interface Categorie {
  id: number;
  category: string;
  imageSrc: string;
  imageAlt: string;
}

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Продукти</h1>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative rounded-2xl bg-white p-4 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={`/categories/${cat.category}`} className="block">
                <img
                  alt={cat.imageAlt}
                  src={cat.imageSrc}
                  className="aspect-square w-full rounded-xl bg-gray-100 object-cover group-hover:opacity-75 transition"
                />
                <h3 className="mt-4 text-lg font-semibold text-gray-800 capitalize">
                  {cat.category}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{cat.imageAlt}</p>
              </Link>

              <div className="mt-4">
                <Link
                  href={`/categories/${cat.category}`}
                  className="inline-block text-blue-600 font-medium hover:underline"
                >
                  Переглянути всі {cat.category}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
