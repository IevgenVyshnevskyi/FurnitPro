"use client";

import { useState, useEffect, useRef } from "react";
import { FaShareAlt, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { IoClose } from "react-icons/io5"; // ❌ хрестик

export default function FloatingSocials() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const socials = [
    {
      icon: <FaInstagram />,
      bg: "bg-pink-500",
      url: "https://www.instagram.com/FurnitPro",
    },
    {
      icon: <FaFacebook />,
      bg: "bg-blue-600",
      url: "https://www.facebook.com/profile.php?id=61578154867004",
    },
    {
      icon: <FaTiktok />,
      bg: "bg-black",
      url: "https://www.tiktok.com/@FurnitPro7",
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
      className="fixed bottom-50 left-12 flex items-center gap-4 z-50"
      onMouseLeave={() => !isMobile && setOpen(false)}
    >
      {/* 🔘 Головна кнопка */}
      <div
        className={`w-14 h-14 rounded-full bg-purple-900 flex items-center justify-center text-white text-2xl cursor-pointer transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-60"
        }`}
        onClick={() => isMobile && setOpen((prev) => !prev)} // 📱 відкриття по кліку
        onMouseEnter={() => !isMobile && setOpen(true)} // 🖱️ відкриття по hover
      >
        <FaShareAlt />
      </div>

      {/* 📌 Кнопки соцмереж */}
      <div className="flex items-center gap-4">
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
    </div>
  );
}
