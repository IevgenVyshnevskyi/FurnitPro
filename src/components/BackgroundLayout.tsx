"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

// How far the background "bleeds" past the container's top/bottom edges so
// the parallax shift doesn't reveal empty edges
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
      {/* The overflow-hidden wrapper is scoped to just the background image,
          so it doesn't interfere with position:sticky in the content below */}
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

      {/* Site content — a full-height flex column so <main className="flex-grow">
          in [locale]/layout.tsx can stretch and push the footer to the bottom
          regardless of how much content a given page has */}
      <main className="relative z-10 flex min-h-screen flex-col">{children}</main>
    </div>
  );
}
