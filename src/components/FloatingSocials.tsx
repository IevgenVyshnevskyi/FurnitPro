"use client";

import { useState } from "react";
import { FaShareAlt, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

export default function FloatingSocials() {
  const [open, setOpen] = useState(false);

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

  return (
    <div
      className="fixed bottom-50 left-12 flex items-center gap-4 z-50"
      onMouseLeave={() => setOpen(false)}
    >
      {/* Головна кнопка */}
      <div
        className={`w-14 h-14 rounded-full bg-purple-900 flex items-center justify-center text-white text-2xl cursor-pointer transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-60"
        }`}
        onMouseEnter={() => setOpen(true)}
      >
        {/* Змінена іконка */}
        <FaShareAlt />
      </div>

      {/* Кнопки соцмереж */}
      <div className="flex items-center gap-4">
        {socials.map((btn, idx) => (
          <a
            key={idx}
            href={btn.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl cursor-pointer transform transition-all duration-300 ${btn.bg}`}
            style={{
              transitionDelay: open
                ? `${idx * 100}ms`
                : `${(socials.length - idx) * 100}ms`,
              opacity: open ? 1 : 0,
              transform: open ? "translateX(0)" : "translateX(-2rem)",
            }}
          >
            {btn.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
