import { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { SiVodafone } from "react-icons/si";

export default function FloatingContactButton() {
  const [open, setOpen] = useState(false);
  const [showText, setShowText] = useState(false);

  // Періодична зміна між іконкою і текстом
  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const buttons = [
    {
      icon: <SiVodafone />,
      bg: "bg-red-600",
      href: "tel:111",
      label: "Vodafone",
    },
  ];

  return (
    <div className="fixed bottom-50 left-12 flex items-center gap-4 z-50">
      {/* Головна кнопка */}
      <div
        className={`w-14 h-14 rounded-full bg-purple-900 flex items-center justify-center text-white text-lg cursor-pointer transition-all duration-500 ${
          open ? "opacity-100" : "opacity-60"
        }`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {showText ? (
          <span className="text-center text-xs px-2">Кнопка зв'язку</span>
        ) : (
          <FaPhoneAlt className="text-2xl animate-vibrate" />
        )}
      </div>

      {/* Кнопки операторів */}
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
  );
}
