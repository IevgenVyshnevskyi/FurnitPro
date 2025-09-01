"use client";

import { useState } from "react";
import products from "@/../data/products";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ProductPage() {
  const params = useParams();
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
          Повернутися на головну сторінку
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-6">{product.name}</h1>

        {images.length > 1 ? (
          // Slider для кількох зображень
          <div className="relative">
            <div ref={sliderRef} className="keen-slider rounded-xl shadow-md">
              {images.map((src, idx) => (
                <div key={idx} className="keen-slider__slide">
                  <img
                    src={src}
                    alt={product.imageAlt}
                    className="w-full object-cover rounded-xl"
                  />
                </div>
              ))}
            </div>

            {/* Left button */}
            <button
              onClick={() => instanceRef.current?.prev()}
              className="absolute left-3 bg-white/80 hover:bg-white text-gray-700 p-3 rounded-full shadow-md
             top-1/5 sm:top-[50%] -translate-y-1/2 sm:-translate-y-0 transition-all"
            >
              <FaChevronLeft />
            </button>

            {/* Right button */}
            <button
              onClick={() => instanceRef.current?.next()}
              className="absolute right-3 bg-white/80 hover:bg-white text-gray-700 p-3 rounded-full shadow-md
             top-1/5 sm:top-[50%] -translate-y-1/2 sm:-translate-y-0 transition-all"
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
          <img
            src={images[0]}
            alt={product.imageAlt}
            className="w-full rounded-xl shadow-md"
          />
        )}

        <p className="text-gray-600 mt-6 mb-3">{product.imageAlt}</p>
        <p className="text-lg font-medium text-gray-900">{product.price}</p>
      </div>
    </div>
  );
}
