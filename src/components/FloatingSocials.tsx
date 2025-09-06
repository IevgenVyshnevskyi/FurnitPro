"use client";

import { useState, useEffect, useRef } from "react";
import { FaShareAlt, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function FloatingSocials() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showButtons, setShowButtons] = useState(false); // ✅ Новий стан для керування рендерингом

  // 📏 Перевірка ширини екрану
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ❌ Закриття при кліку поза блоком (на мобільному)
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

  // ✅ Керування анімацією появи/зникнення
  useEffect(() => {
    if (open) {
      setShowButtons(true);
    } else {
      // ⏳ Затримка видалення елементів до завершення анімації
      const timer = setTimeout(() => setShowButtons(false), 300);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const socials = [
    {
      icon: <FaInstagram />,
      bg: "bg-pink-500",
      url: "https://www.instagram.com/FurnitPro",
      close: false,
    },
    {
      icon: <FaFacebook />,
      bg: "bg-blue-600",
      url: "https://www.facebook.com/profile.php?id=61578154867004",
      close: false,
    },
    {
      icon: <FaTiktok />,
      bg: "bg-black",
      url: "https://www.tiktok.com/@FurnitPro7",
      close: false,
    },
  ];

  // 📱 Для мобільного режиму додаємо кнопку ❌
  const mobileSocials = [
    ...socials,
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
        bottom: "196px",
        left: isMobile ? "16px" : "48px", // ✅ адаптивний лівий відступ
        gap: isMobile ? "6px" : "16px",
      }}
      onMouseLeave={() => !isMobile && setOpen(false)}
    >
      {/* 🔘 Головна кнопка */}
      <div
        className={`w-14 h-14 rounded-full bg-purple-900 flex items-center justify-center text-white text-2xl cursor-pointer transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-60"
        }`}
        onClick={() => isMobile && setOpen((prev) => !prev)}
        onMouseEnter={() => !isMobile && setOpen(true)}
      >
        <FaShareAlt />
      </div>

      {/* 📌 Контейнер кнопок */}
      {showButtons && (
        <div
          className={
            isMobile ? "flex items-center gap-2" : "flex items-center gap-4"
          }
        >
          {(isMobile ? mobileSocials : socials).map((btn, idx) => (
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
                  : `${(socials.length - idx) * 100}ms`,
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
    </div>
  );
}
