"use client";

import { useState, useEffect, useRef } from "react";
import { FaCommentDots, FaTelegramPlane, FaViber } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoClose } from "react-icons/io5"; // ❌ хрестик

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

  // ✨ Керування анімацією появи/зникнення
  useEffect(() => {
    if (open) {
      setShowButtons(true);
    } else {
      const timer = setTimeout(() => setShowButtons(false), 300); // Час збігається з тривалістю transition
      return () => clearTimeout(timer);
    }
  }, [open]);

  const buttons = [
    {
      icon: <SiGmail />,
      bg: "bg-red-600",
      url: "mailto:furnitpro7@gmail.com",
      close: false,
    },
    {
      icon: <FaTelegramPlane />,
      bg: "bg-cyan-500",
      url: "tg://resolve?phone=380987781679",
      close: false,
    },
    {
      icon: <FaViber />,
      bg: "bg-purple-600",
      url: "viber://chat?number=%2B380963760986",
      close: false,
    },
  ];

  // Якщо мобільний режим — додаємо кнопку ❌
  const mobileButtons = [
    ...buttons,
    {
      icon: <IoClose />,
      bg: "bg-gray-700",
      url: "#",
      close: true,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="fixed flex items-center z-50"
      style={{
        bottom: "126px",
        left: isMobile ? "16px" : "48px", // ✅ адаптивний лівий відступ
        gap: isMobile ? "6px" : "16px",
      }}
      onMouseLeave={() => !isMobile && setOpen(false)}
    >
      {/* Головна кнопка */}
      <div
        className={`w-14 h-14 rounded-full bg-purple-900 flex items-center justify-center text-white text-2xl cursor-pointer transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-60"
        }`}
        onClick={() => isMobile && setOpen((prev) => !prev)}
        onMouseEnter={() => !isMobile && setOpen(true)}
      >
        <FaCommentDots />
      </div>

      {/* Контейнер кнопок */}
      {showButtons && (
        <div
          className={
            isMobile ? "flex items-center gap-2" : "flex items-center gap-4"
          }
        >
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
              className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl cursor-pointer transform transition-all duration-300 ${btn.bg}`}
              style={{
                transitionDelay: open
                  ? `${idx * 100}ms`
                  : `${(buttons.length - idx) * 100}ms`,
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(-2rem)",
                pointerEvents: open ? "auto" : "none",
                gap: isMobile ? "6px" : "16px",
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
