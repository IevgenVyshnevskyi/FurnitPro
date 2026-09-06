"use client";

import { useState } from "react";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { useLocalizedHref } from "@/hooks/useLocalizedHref";
import ProductSchema from "@/components/ProductSchema";
import ProductImageZoom from "@/components/ProductImageZoom";
import { Product } from "@/types";

type Props = {
  product: Product | null;
};

export default function ProductPageClient({ product }: Props) {
  const t = useTranslations("ProductPage");
  const localizeHref = useLocalizedHref();

  const images = product
    ? [product.imageSrc.image, product.imageSrc.drawing].filter(Boolean)
    : [];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [resetZoomSignal, setResetZoomSignal] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: images.length > 1,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white text-legible">{t("productNotFound")}</h1>
        <Link
          href={localizeHref("/")}
          className="text-blue-600 hover:underline"
        >
          {t("backToCatalog")}
        </Link>
      </div>
    );
  }

  const details = [
    { label: t("thickness"), value: product.thickness },
    { label: t("size"), value: product.size },
    { label: t("type"), value: product.type },
  ].filter((d) => d.value);

  return (
    <>
      <ProductSchema product={product} />

      <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-10 pb-0">
        <div className="max-w-4xl w-full text-center sm:text-left bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            {product.name}
          </h1>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Gallery */}
            <div className="w-full md:w-1/2">
              {images.length > 1 ? (
                <div className="relative">
                  <div
                    ref={sliderRef}
                    className="keen-slider rounded-xl shadow-md"
                  >
                    {images.map((src, idx) => (
                      <div key={idx} className="keen-slider__slide">
                        <ProductImageZoom
                          src={src!}
                          alt={product.imageAlt}
                          resetSignal={resetZoomSignal}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Navigation buttons */}
                  <button
                    onClick={() => {
                      instanceRef.current?.prev();
                      setResetZoomSignal((prev) => prev + 1);
                    }}
                    className="absolute left-3 bg-white/80 hover:bg-white text-gray-700 p-3 rounded-full shadow-md top-1/2 -translate-y-1/2 transition-all"
                  >
                    <FaChevronLeft />
                  </button>

                  <button
                    onClick={() => {
                      instanceRef.current?.next();
                      setResetZoomSignal((prev) => prev + 1);
                    }}
                    className="absolute right-3 bg-white/80 hover:bg-white text-gray-700 p-3 rounded-full shadow-md top-1/2 -translate-y-1/2 transition-all"
                  >
                    <FaChevronRight />
                  </button>

                  {/* Indicators */}
                  <div className="absolute bottom-3 w-full flex justify-center gap-2">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          instanceRef.current?.moveToIdx(idx);
                          setResetZoomSignal((prev) => prev + 1);
                        }}
                        className={`w-3 h-3 rounded-full transition ${
                          currentSlide === idx ? "bg-blue-600" : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                images.length === 1 && (
                  <ProductImageZoom
                    src={images[0]!}
                    alt={product.imageAlt}
                    resetSignal={resetZoomSignal}
                  />
                )
              )}
            </div>

            {/* Info */}
            <div className="w-full md:w-1/2 text-center md:text-left mt-[-16] md:mt-0 p-2 md:p-4 border dark:border-gray-700 rounded-xl shadow-sm bg-gray-50 dark:bg-gray-900">
              <div className="pb-2 mb-2 md:pb-4 md:mb-4 border-b border-gray-200 dark:border-gray-700">
                <p className="text-2xl md:text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                  {product.price}
                </p>
              </div>

              {details.length > 0 && (
                <dl className="space-y-1 text-sm text-gray-700 dark:text-gray-300 mb-4">
                  {details.map((d) => (
                    <div
                      key={d.label}
                      className="flex justify-between md:justify-start md:gap-2"
                    >
                      <dt className="font-semibold">{d.label}:</dt>
                      <dd>{d.value}</dd>
                    </div>
                  ))}
                </dl>
              )}

              {product.description && (
                <div>
                  <p className="font-semibold text-sm text-gray-800 dark:text-gray-200 mb-1">
                    {t("description")}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {product.description}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              href={localizeHref("/")}
              className="inline-block px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t("backToCatalog")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
