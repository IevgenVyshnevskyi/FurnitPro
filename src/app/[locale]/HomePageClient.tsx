"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useLocalizedHref } from "@/hooks/useLocalizedHref";

const categories = [
  {
    id: 0,
    key: "mechanisms",
    category: "mechanisms",
    imageSrc: "/images/products/1.mechanism-junior-strong/item2.jpg",
    imageAlt: "Джуніор механізм з ребром.",
  },
  {
    id: 1,
    key: "hooks",
    category: "hooks",
    imageSrc: "/images/products/3.latch-large/item2.jpg",
    imageAlt: "Зачіп посилений для великих меблевих елементів.",
  },
  {
    id: 2,
    key: "curtains",
    category: "curtains",
    imageSrc: "/images/products/7.hinge-large-190/item2.jpg",
    imageAlt: "Металева меблева петля для складних конструкцій.",
  },
  {
    id: 3,
    key: "corners",
    category: "corners",
    imageSrc: "/images/products/9.angle-106/item3.jpg",
    imageAlt: "Меблевий з’єднувальний куток 106.",
  },
];

export default function HomePageClient() {
  const t = useTranslations("HomePage");
  const localizeHref = useLocalizedHref();

  return (
    <div className="bg-gray-0">
      <div className="mx-auto max-w-7xl px-4 pt-6 pb-2 sm:px-6 sm:py-24">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-legible">{t("title")}</h1>

        {/* flex-wrap + justify-center instead of grid: 4 categories in a 3-column
            grid (lg) would otherwise leave one card alone on the left in a new row */}
        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={localizeHref(`${cat.category}`)}
              className="group relative rounded-2xl bg-white dark:bg-gray-800 p-4 shadow-md hover:shadow-xl transition-shadow duration-300
                         sm:hover:scale-105 sm:hover:opacity-90 sm:duration-300 transition-transform
                         block w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]"
            >
              {/* Image block */}
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  alt={cat.imageAlt}
                  src={cat.imageSrc}
                  width={500}
                  height={500}
                  className="aspect-square w-full rounded-xl bg-gray-100 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 rounded-xl bg-black bg-opacity-50 opacity-0 lg:group-hover:opacity-50 transition-opacity duration-300" />

                {/* Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="hidden lg:inline-block">
                    <div className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition transform scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 duration-300">
                      {t("button-title")}
                    </div>
                  </span>
                </div>
              </div>

              {/* Text */}
              <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-100 capitalize">
                {t(`categories.${cat.category}`)}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
