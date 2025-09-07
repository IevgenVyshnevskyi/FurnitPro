"use client";

import { useState } from "react";
import products from "../../../../../../public/data/products";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ProductPage() {
  const params = useParams();
  const t = useTranslations("ProductPage"); // Ініціалізуємо хук перекладів
  const category = params.category as string;
  const id = params.id as string;

  const product = products.find(
    (p) => p.category === category && p.id.toString() === id
  );

  // Масив зображень (даємо хукам доступ завжди)
  const images = product
    ? [product.imageSrc.image, product.imageSrc.drawing].filter(Boolean)
    : [];

  // Хуки завжди викликаються на верхньому рівні
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: images.length > 1,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-3xl font-bold mb-4">Продукт не знайдено</h1>
        <Link href="/" className="text-blue-600 hover:underline">
          у {t("backToCatalog")}
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-10 pb-0">
      <div className="max-w-4xl w-full text-center sm:text-left bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          {t(`products.${product.name}`)}
        </h1>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Контейнер для зображень */}
          <div className="w-full md:w-1/2">
            {images.length > 1 ? (
              // Slider для кількох зображень
              <div className="relative">
                <div
                  ref={sliderRef}
                  className="keen-slider rounded-xl shadow-md"
                >
                  {images.map((src, idx) => (
                    <div key={idx} className="keen-slider__slide">
                      <Image
                        src={src!} // TypeScript знає, що src не undefined
                        alt={product.imageAlt}
                        width={500}
                        height={500}
                        className="w-full object-cover rounded-xl"
                      />
                      {/* <img
                        src={src}
                        alt={product.imageAlt}
                        className="w-full object-cover rounded-xl"
                      /> */}
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <button
                  onClick={() => instanceRef.current?.prev()}
                  className="absolute left-3 bg-white/80 hover:bg-white text-gray-700 p-3 rounded-full shadow-md
                  top-1/2 -translate-y-1/2 transition-all"
                >
                  <FaChevronLeft />
                </button>

                <button
                  onClick={() => instanceRef.current?.next()}
                  className="absolute right-3 bg-white/80 hover:bg-white text-gray-700 p-3 rounded-full shadow-md
                  top-1/2 -translate-y-1/2 transition-all"
                >
                  <FaChevronRight />
                </button>

                {/* Dots */}
                <div className="absolute bottom-3 w-full flex justify-center gap-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => instanceRef.current?.moveToIdx(idx)}
                      className={`w-3 h-3 rounded-full transition ${
                        currentSlide === idx ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              // Якщо одна картинка, просто показуємо її
              images.length === 1 && (
                <Image
                  src={images[0]!}
                  alt={product.imageAlt}
                  width={500}
                  height={500}
                  className="w-full rounded-xl shadow-md"
                />
              )
            )}
          </div>

          {/* Інформація про продукт (стилізований блок) */}
          <div className="w-full md:w-1/2 text-center md:text-left mt-[-16] md:mt-0 p-2 md:p-4 border rounded-xl shadow-sm bg-gray-50">
            {/* Ціна */}
            <div className="pb-2 mb-2 md:pb-4 md:mb-4 border-b border-gray-200">
              <p className="text-2xl md:text-3xl font-extrabold text-blue-600">
                {t(`prices.${product.name}`)}
              </p>
            </div>

            {/* Характеристики */}
            <div className="space-y-2 md:space-y-3">
              {product.thickness && (
                <div className="flex justify-between items-center text-gray-700 text-sm md:text-base">
                  <span className="font-semibold text-gray-900">
                    {t("thickness")}:
                  </span>
                  <span>{product.thickness}</span>
                </div>
              )}

              {product.size && (
                <div className="flex justify-between items-center text-gray-700 text-sm md:text-base">
                  <span className="font-semibold text-gray-900">
                    {t("size")}:
                  </span>
                  <span>{product.size}</span>
                </div>
              )}
            </div>

            {/* Опис */}
            {product.description && (
              <div className="mt-4 md:mt-6 pt-2 md:pt-4 border-t border-gray-200">
                <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-gray-900">
                  {t("description")}
                </h3>
                <p className="text-sm md:text-base text-gray-700">
                  {t(`descriptions.${product.name}`)}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Посилання на головну */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t("backToCatalog")}
          </Link>
        </div>
      </div>
    </div>
  );
}
