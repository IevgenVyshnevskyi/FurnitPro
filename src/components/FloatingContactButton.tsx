"use client";

import { useState, useEffect, useRef } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { SiVodafone } from "react-icons/si";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import kyivstarLogo from "./../../public/images/phones/kyivstar.jpeg";
import { useTranslations } from "next-intl";

export default function FloatingContactButton() {
  const [open, setOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showButtons, setShowButtons] = useState(false);

  const t = useTranslations("FloatingContactButton");

  // Визначаємо мобільний режим
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Закриття при кліку поза блоком
  useEffect(() => {
    if (!isMobile || !open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile, open]);

  // Перемикання між текстом і іконкою
  useEffect(() => {
    const interval = setInterval(() => setShowText((prev) => !prev), 5000);
    return () => clearInterval(interval);
  }, []);

  // Анімація вібрації
  useEffect(() => {
    if (!showText) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [showText]);

  // Керування появою/зникнення кнопок
  useEffect(() => {
    if (open) {
      setShowButtons(true);
    } else {
      const timer = setTimeout(() => setShowButtons(false), 300);
      return () => clearTimeout(timer);
    }
  }, [open]);

  // Кнопки операторів
  const buttons = [
    {
      icon: <SiVodafone className="w-7 h-7" />,
      bg: "bg-red-600",
      href: "tel:+380957989094",
      label: "Vodafone",
      close: false,
    },
    {
      icon: (
        <Image
          src={kyivstarLogo}
          alt="Kyivstar"
          className="w-7 h-7 rounded-full object-cover"
        />
      ),
      bg: "bg-blue-600",
      href: "tel:+380963760986",
      label: "Kyivstar",
      close: false,
    },
  ];

  const mobileButtons = [
    ...buttons,
    {
      icon: <IoClose />,
      bg: "bg-gray-700",
      href: "#",
      label: "Close",
      close: true,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="fixed flex items-center z-50"
      style={{
        bottom: "268px",
        left: isMobile ? "16px" : "48px", // ✅ адаптивний лівий відступ
        gap: isMobile ? "6px" : "16px",
      }}
      onMouseLeave={() => !isMobile && setOpen(false)}
    >
      {/* Головна кнопка */}
      <div
        className={`w-14 h-14 rounded-full bg-purple-900 flex items-center justify-center text-white text-lg cursor-pointer transition-all duration-500 relative overflow-hidden ${
          open ? "opacity-100" : "opacity-60"
        }`}
        onClick={() => isMobile && setOpen((prev) => !prev)}
        onMouseEnter={() => !isMobile && setOpen(true)}
      >
        <span
          className={`absolute inset-0 flex items-center justify-center text-xs px-2 text-center transition-opacity duration-700 ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        >
          {t("contactButtonLabel")}
        </span>

        {!showText && (
          <div className={animate ? "vibrate-once" : ""}>
            <FaPhoneAlt className="text-2xl" />
          </div>
        )}
      </div>

      {/* Кнопки операторів */}
      {showButtons && (
        <div
          className={
            isMobile ? "flex items-center gap-2" : "flex items-center gap-4"
          }
        >
          {(isMobile ? mobileButtons : buttons).map((btn, idx) => (
            <a
              key={idx}
              href={btn.close ? "#" : btn.href}
              title={btn.label}
              onClick={(e) => {
                if (btn.close) {
                  e.preventDefault();
                  setOpen(false);
                }
              }}
              className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl cursor-pointer transform transition-all duration-300 ${btn.bg}`}
              style={{
                transitionDelay: open
                  ? `${idx * 100}ms`
                  : `${(buttons.length - idx) * 100}ms`,
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(-2rem)",
                pointerEvents: open ? "auto" : "none",
              }}
            >
              {btn.icon}
            </a>
          ))}
        </div>
      )}

      {/* Анімація вібрації */}
      <style jsx>{`
        @keyframes vibrateOnce {
          0% {
            transform: rotate(0deg);
          }
          20% {
            transform: rotate(-10deg);
          }
          40% {
            transform: rotate(10deg);
          }
          60% {
            transform: rotate(-10deg);
          }
          80% {
            transform: rotate(10deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        .vibrate-once {
          display: inline-block;
          animation: vibrateOnce 0.35s ease-in-out 1;
          transform-origin: center center;
        }
      `}</style>
    </div>
  );
}
