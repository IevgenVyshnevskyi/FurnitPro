/* "use client";

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
    category: "curtains",
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
    <div className="min-h-screen">
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
 */

/* "use client";

import Link from "next/link";

const categories = [
  {
    id: 0,
    category: "mechanisms",
    imageSrc: "/images/products/1.mechanism-junior-strong/item2.jpg",
    imageAlt: "Junior mechanism with rib",
  },
  {
    id: 1,
    category: "hooks",
    imageSrc: "/images/products/3.latch-large/item2.jpg",
    imageAlt: "Зачіп посилений для великих меблевих елементів.",
  },
  {
    id: 2,
    category: "curtains",
    imageSrc: "/images/products/7.hinge-large-190/item2.jpg",
    imageAlt: "Металева меблева петля для складних конструкцій.",
  },
  {
    id: 3,
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
    <div className="bg-gray-0 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Продукти</h1>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative rounded-2xl bg-white p-4 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              
              <div className="relative overflow-hidden rounded-xl">
                <img
                  alt={cat.imageAlt}
                  src={cat.imageSrc}
                  className="aspect-square w-full rounded-xl bg-gray-100 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />

                
                <div className="absolute inset-0 rounded-xl bg-black bg-opacity-50 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

                
                <div className="absolute inset-0 flex items-center justify-center">
                  <Link
                    href={`/categories/${cat.category}`}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition transform scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 duration-300"
                  >
                    Переглянути
                  </Link>
                </div>
              </div>

              
              <h3 className="mt-4 text-lg font-semibold text-gray-800 capitalize">
                {cat.category}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{cat.imageAlt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} */

"use client";

import Link from "next/link";

const categories = [
  {
    id: 0,
    category: "mechanisms",
    imageSrc: "/images/products/1.mechanism-junior-strong/item2.jpg",
    imageAlt: "Junior mechanism with rib",
  },
  {
    id: 1,
    category: "hooks",
    imageSrc: "/images/products/3.latch-large/item2.jpg",
    imageAlt: "Зачіп посилений для великих меблевих елементів.",
  },
  {
    id: 2,
    category: "curtains",
    imageSrc: "/images/products/7.hinge-large-190/item2.jpg",
    imageAlt: "Металева меблева петля для складних конструкцій.",
  },
  {
    id: 3,
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
    <div className="bg-gray-0 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Продукти</h1>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.category}`}
              className="group relative rounded-2xl bg-white p-4 shadow-md hover:shadow-xl transition-shadow duration-300
                         sm:hover:scale-105 sm:hover:opacity-90 sm:duration-300 transition-transform
                         block"
            >
              {/* Блок з картинкою */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  alt={cat.imageAlt}
                  src={cat.imageSrc}
                  className="aspect-square w-full rounded-xl bg-gray-100 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay (для великих екранів) */}
                <div className="absolute inset-0 rounded-xl bg-black bg-opacity-50 opacity-0 lg:group-hover:opacity-50 transition-opacity duration-300" />

                {/* Кнопка (зникне на sm і менше) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="hidden lg:inline-block">
                    <div className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition transform scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 duration-300">
                      Переглянути
                    </div>
                  </span>
                </div>
              </div>

              {/* Текст */}
              <h3 className="mt-4 text-lg font-semibold text-gray-800 capitalize">
                {cat.category}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{cat.imageAlt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
