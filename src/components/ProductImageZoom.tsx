"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ProductImageZoomProps {
  src: string;
  alt?: string;
}

export default function ProductImageZoom({ src, alt }: ProductImageZoomProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // --- Desktop hover zoom ---
  const [isDesktop, setIsDesktop] = useState(true);
  const [isHoverZoom, setIsHoverZoom] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });

  // --- Mobile fullscreen zoom ---
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [lastDistance, setLastDistance] = useState(0);
  const [doubleTapTime, setDoubleTapTime] = useState(0);

  useEffect(() => {
    setIsDesktop(!window.matchMedia("(pointer: coarse)").matches);
  }, []);

  // --- Hover zoom ---
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  // --- Mobile double tap ---
  const handleTouchStart = (e: React.TouchEvent) => {
    const now = Date.now();
    if (now - doubleTapTime < 300) {
      setIsFullscreen(true);
    }
    setDoubleTapTime(now);
  };

  // --- Pinch zoom / pan ---
  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const [t1, t2] = e.touches;
      const distance = Math.hypot(
        t2.clientX - t1.clientX,
        t2.clientY - t1.clientY
      );
      if (lastDistance) {
        const delta = distance / lastDistance;
        setScale((prev) => Math.min(Math.max(prev * delta, 1), 4));
      }
      setLastDistance(distance);
    } else if (e.touches.length === 1 && scale > 1) {
      const touch = e.touches[0];
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const offsetX = touch.clientX - rect.width / 2;
        const offsetY = touch.clientY - rect.height / 2;
        setTranslate({ x: offsetX / 3, y: offsetY / 3 });
      }
    }
  };

  const handleTouchEnd = () => setLastDistance(0);

  // --- Close fullscreen ---
  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsFullscreen(false);
      setScale(1);
      setTranslate({ x: 0, y: 0 });
    }
  };

  return (
    <>
      {/* Основне зображення */}
      <div
        ref={containerRef}
        className="relative w-full h-[400px] overflow-hidden rounded-xl cursor-zoom-in bg-white shadow-md"
        onMouseEnter={() => isDesktop && setIsHoverZoom(true)}
        onMouseLeave={() => isDesktop && setIsHoverZoom(false)}
        onMouseMove={(e) => isDesktop && handleMouseMove(e)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={src}
          alt={alt || "Product image"}
          fill
          className={`object-contain transition-transform duration-200 ${
            isHoverZoom && isDesktop ? "scale-150" : "scale-100"
          }`}
          style={
            isHoverZoom && isDesktop
              ? { transformOrigin: `${zoomPos.x}% ${zoomPos.y}%` }
              : {}
          }
          priority
        />
      </div>

      {/* Fullscreen Mobile Lightbox */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackgroundClick}
          >
            <div
              ref={containerRef}
              className="relative w-full h-full overflow-hidden touch-pan-y"
              style={{ touchAction: "none" }}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <Image
                src={src}
                alt={alt || "Fullscreen product image"}
                fill
                className="object-contain select-none"
                style={{
                  transform: `scale(${scale}) translate(${translate.x}px, ${translate.y}px)`,
                  transition: "transform 0.1s ease-out",
                }}
                priority
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
