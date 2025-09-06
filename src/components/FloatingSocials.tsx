"use client";

import { useState, useEffect, useRef } from "react";
import { FaShareAlt, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function FloatingSocials() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showButtons, setShowButtons] = useState(false);

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

  // ✅ Керування появою/зникнення кнопок
  useEffect(() => {
    if (open) {
      setShowButtons(true);
    } else {
      const timer = setTimeout(() => setShowButtons(false), 300);
      return () => clearTimeout(timer);
    }
  }, [open]);

  // ⚡ Динамічні розміри
  const buttonSize = isMobile ? "48px" : "56px";
  const iconSizeClass = isMobile ? "text-xl" : "text-2xl";
  const gapSize = isMobile ? "6px" : "16px";

  const socials = [
    {
      icon: <FaInstagram className={iconSizeClass} />,
      bg: "bg-pink-500",
      url: "https://www.instagram.com/FurnitPro",
      close: false,
    },
    {
      icon: <FaFacebook className={iconSizeClass} />,
      bg: "bg-blue-600",
      url: "https://www.facebook.com/profile.php?id=61578154867004",
      close: false,
    },
    {
      icon: <FaTiktok className={iconSizeClass} />,
      bg: "bg-black",
      url: "https://www.tiktok.com/@FurnitPro7",
      close: false,
    },
  ];

  // 📱 Мобільний режим — додаємо кнопку ❌
  const mobileSocials = [
    ...socials,
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
        bottom: isMobile ? "138px" : "152px",
        left: isMobile ? "16px" : "48px",
        gap: gapSize,
      }}
      onMouseLeave={() => !isMobile && setOpen(false)}
    >
      {/* 🔘 Головна кнопка */}
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
        <FaShareAlt className={iconSizeClass} />
      </div>

      {/* 📌 Контейнер кнопок */}
      {showButtons && (
        <div className="flex items-center" style={{ gap: gapSize }}>
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
              className={`rounded-full flex items-center justify-center text-white cursor-pointer transform transition-all duration-300 ${btn.bg}`}
              style={{
                width: buttonSize,
                height: buttonSize,
                transitionDelay: open
                  ? `${idx * 100}ms`
                  : `${(socials.length - idx) * 100}ms`,
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
