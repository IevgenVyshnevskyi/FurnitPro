"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

// Наскільки фон "вилазить" за межі контейнера зверху/знизу, щоб паралакс-зсув
// не показував порожні краї
const PARALLAX_BLEED_PX = 150;

export default function BackgroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion
      ? [0, 0]
      : [-PARALLAX_BLEED_PX / 2, PARALLAX_BLEED_PX / 2]
  );

  return (
    <div className="relative min-h-screen w-full">
      {/* Обгортка з overflow-hidden обмежена лише фоновим зображенням,
          щоб не заважати position:sticky в контенті нижче */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute inset-x-0"
          style={{
            top: -PARALLAX_BLEED_PX,
            bottom: -PARALLAX_BLEED_PX,
            y,
          }}
        >
          <Image
            src="/images/background/bg-1920.jpg"
            alt="Background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </div>

      {/* Контент сайту */}
      <main className="relative z-10">{children}</main>
    </div>
  );
}
