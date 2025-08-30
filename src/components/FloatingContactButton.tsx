"use client";

import { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { SiVodafone } from "react-icons/si"; // додаємо іконку Київстар
import kyivstarLogo from "./../../public/images/phones/kyivstar.jpeg";

export default function FloatingContactButton() {
  const [open, setOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  const [animate, setAnimate] = useState(false);

  // Періодична зміна між текстом і іконкою
  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Запускаємо анімацію вібрації при появі іконки
  useEffect(() => {
    if (!showText) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [showText]);

  const buttons = [
    {
      icon: <SiVodafone />,
      bg: "bg-red-600",
      href: "tel:+380957989094",
      label: "Vodafone",
    },
    {
      /* icon: <KyivstarIcon />, */
      icon: (
        <img
          src={kyivstarLogo.src}
          alt="Kyivstar"
          className="w-7 h-7 rounded-full"
        />
      ), // JPEG замість SVG
      bg: "bg-blue-600",
      href: "tel:+380963760986",
      label: "Kyivstar",
    },
  ];

  return (
    <div
      className="fixed bottom-68 left-12 flex items-center gap-4 z-50"
      onMouseLeave={() => setOpen(false)}
    >
      {/* Головна кнопка */}
      <div
        className={`w-14 h-14 rounded-full bg-purple-900 flex items-center justify-center text-white text-lg cursor-pointer transition-all duration-500 relative overflow-hidden ${
          open ? "opacity-100" : "opacity-60"
        }`}
        onMouseEnter={() => setOpen(true)}
      >
        <span
          className={`absolute inset-0 flex items-center justify-center text-xs px-2 text-center transition-opacity duration-700 ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        >
          Кнопка зв'язку
        </span>

        {!showText && (
          <div className={animate ? "vibrate-once" : ""}>
            <FaPhoneAlt className="text-2xl" />
          </div>
        )}
      </div>

      {/* Контейнер кнопок операторів */}
      <div className="flex items-center gap-4">
        {buttons.map((btn, idx) => (
          <a
            key={idx}
            href={btn.href}
            title={btn.label}
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
