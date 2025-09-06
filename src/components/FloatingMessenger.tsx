"use client";

import { useState, useEffect, useRef } from "react";
import { FaCommentDots, FaTelegramPlane, FaViber } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoClose } from "react-icons/io5";

export default function FloatingMessenger() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showButtons, setShowButtons] = useState(false);

  // Перевірка ширини екрану
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Закриття при кліку поза блоком (тільки на мобільному)
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

  // Керування появою/зникнення кнопок
  useEffect(() => {
    if (open) {
      setShowButtons(true);
    } else {
      const timer = setTimeout(() => setShowButtons(false), 300);
      return () => clearTimeout(timer);
    }
  }, [open]);

  // ⚡ Динамічні розміри
  const buttonSize = isMobile ? "40px" : "56px";
  const iconSizeClass = isMobile ? "text-xl" : "text-2xl";
  const gapSize = isMobile ? "6px" : "16px";

  const buttons = [
    {
      icon: <SiGmail className={iconSizeClass} />,
      bg: "bg-red-600",
      url: "mailto:furnitpro7@gmail.com",
      close: false,
    },
    {
      icon: <FaTelegramPlane className={iconSizeClass} />,
      bg: "bg-cyan-500",
      url: "tg://resolve?phone=380987781679",
      close: false,
    },
    {
      icon: <FaViber className={iconSizeClass} />,
      bg: "bg-purple-600",
      url: "viber://chat?number=%2B380963760986",
      close: false,
    },
  ];

  // Якщо мобільний режим — додаємо кнопку ❌
  const mobileButtons = [
    ...buttons,
    {
      icon: <IoClose className={iconSizeClass} />,
      bg: "bg-gray-700",
      url: "#",
      close: true,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="fixed flex items-center z-50 transition-all duration-300"
      style={{
        bottom: isMobile ? "74px" : "88px",
        left: isMobile ? "16px" : "48px",
        gap: gapSize,
      }}
      onMouseLeave={() => !isMobile && setOpen(false)}
    >
      {/* Головна кнопка */}
      <div
        className={`rounded-full bg-purple-900 flex items-center justify-center text-white cursor-pointer transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-60"
        }`}
        style={{
          width: buttonSize,
          height: buttonSize,
          fontSize: isMobile ? "1rem" : "1.5rem",
        }}
        onClick={() => isMobile && setOpen((prev) => !prev)}
        onMouseEnter={() => !isMobile && setOpen(true)}
      >
        <FaCommentDots className={iconSizeClass} />
      </div>

      {/* Контейнер кнопок */}
      {showButtons && (
        <div className="flex items-center" style={{ gap: gapSize }}>
          {(isMobile ? mobileButtons : buttons).map((btn, idx) => (
            <a
              key={idx}
              href={btn.close ? "#" : btn.url}
              target={btn.close ? "_self" : "_blank"}
              rel="noopener noreferrer"
              onClick={(e) => {
                if (btn.close) {
                  e.preventDefault();
                  setOpen(false);
                }
              }}
              className={`rounded-full flex items-center justify-center text-white cursor-pointer transform transition-all duration-300 ${btn.bg}`}
              style={{
                width: buttonSize,
                height: buttonSize,
                transitionDelay: open
                  ? `${idx * 100}ms`
                  : `${(buttons.length - idx) * 100}ms`,
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(-2rem)",
                pointerEvents: open ? "auto" : "none",
                fontSize: isMobile ? "1rem" : "1.5rem",
              }}
            >
              {btn.icon}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
