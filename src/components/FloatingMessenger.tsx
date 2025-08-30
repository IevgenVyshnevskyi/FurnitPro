"use client";

import { useState } from "react";
import {
  FaCommentDots,
  /* FaFacebookMessenger, */
  FaTelegramPlane,
  FaViber,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function FloatingMessenger() {
  const [open, setOpen] = useState(false);

  const buttons = [
    /* { icon: <FaFacebookMessenger />, bg: "bg-blue-500", url: "#" }, */
    {
      icon: <SiGmail />,
      bg: "bg-red-600",
      url: "mailto:furnitpro7@gmail.com", // відкриває Gmail або будь-який поштовий клієнт
    },
    {
      icon: <FaTelegramPlane />,
      bg: "bg-cyan-500",
      url: "tg://resolve?phone=380987781679",
    },
    {
      icon: <FaViber />,
      bg: "bg-purple-600",
      url: "viber://chat?number=%2B380963760986",
    },
  ];

  return (
    <div
      className="fixed bottom-32 left-12 flex items-center gap-4 z-50"
      onMouseLeave={() => setOpen(false)} // ховаємо кнопки, коли курсор покидає всю площину
    >
      {/* Головна кнопка */}
      <div
        className={`w-14 h-14 rounded-full bg-purple-900 flex items-center justify-center text-white text-2xl cursor-pointer transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-60"
        }`}
        onMouseEnter={() => setOpen(true)} // відкриваємо кнопки тільки при наведенні на головну кнопку
      >
        <FaCommentDots />
      </div>

      {/* Контейнер кнопок */}
      <div className="flex items-center gap-4">
        {buttons.map((btn, idx) => (
          <a
            key={idx}
            href={btn.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl cursor-pointer transform transition-all duration-300 ${btn.bg}`}
            style={{
              transitionDelay: open
                ? `${idx * 100}ms`
                : `${(buttons.length - idx) * 100}ms`,
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
