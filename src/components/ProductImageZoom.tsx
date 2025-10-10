"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { X } from "lucide-react";

interface ProductImageZoomProps {
  src: string;
  alt?: string;
  resetSignal?: number; // сигнал для скидання zoom при зміні слайда
}

export default function ProductImageZoom({
  src,
  alt,
  resetSignal,
}: ProductImageZoomProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [thumbnailRect, setThumbnailRect] = useState<DOMRect | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  // --- Скидання стану при зміні resetSignal ---
  useEffect(() => {
    setIsFullscreen(false);
    setImageLoaded(false);
  }, [resetSignal]);

  const handleOpen = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setThumbnailRect(rect);
    setIsFullscreen(true);
  };

  const handleClose = () => {
    setIsFullscreen(false);
    setImageLoaded(false);
  };

  return (
    <>
      {/* Thumbnail */}
      <div
        className="relative w-full h-[400px] overflow-hidden rounded-xl bg-white shadow-md cursor-zoom-in"
        onClick={handleOpen}
      >
        <Image
          src={src}
          alt={alt || "Product image"}
          fill
          className="object-contain transition-transform duration-200"
          priority
        />
      </div>

      {/* Fullscreen */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-50 text-white bg-black/40 hover:bg-black/60 p-2 rounded-full transition-all"
              aria-label="Закрити"
            >
              <X size={24} />
            </button>

            {/* Thumbnail animation */}
            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              initial={{
                x: thumbnailRect
                  ? thumbnailRect.left +
                    thumbnailRect.width / 2 -
                    window.innerWidth / 2
                  : 0,
                y: thumbnailRect
                  ? thumbnailRect.top +
                    thumbnailRect.height / 2 -
                    window.innerHeight / 2
                  : 0,
                scale: thumbnailRect
                  ? thumbnailRect.width / window.innerWidth
                  : 0.5,
              }}
              animate={{
                x: 0,
                y: 0,
                scale: 1,
                transition: { type: "spring", stiffness: 120, damping: 15 },
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                transition: { duration: 0.2 },
              }}
            >
              <TransformWrapper
                initialScale={1}
                minScale={1}
                maxScale={4}
                doubleClick={{ mode: "toggle" }}
                pinch={{ step: 0.1 }}
                wheel={{ disabled: true }}
                panning={{ velocityDisabled: true }}
              >
                <TransformComponent>
                  <div className="relative w-screen h-screen flex items-center justify-center">
                    <Image
                      src={src}
                      alt={alt || "Fullscreen product image"}
                      fill
                      className={`object-contain select-none transition-opacity duration-300 ${
                        imageLoaded ? "opacity-100" : "opacity-0"
                      }`}
                      draggable={false}
                      priority
                      onLoad={() => setImageLoaded(true)}
                    />
                  </div>
                </TransformComponent>
              </TransformWrapper>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
