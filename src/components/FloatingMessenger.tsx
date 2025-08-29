import { useState } from "react";
import {
  FaCommentDots,
  FaFacebookMessenger,
  FaTelegramPlane,
  FaViber,
} from "react-icons/fa";

export default function FloatingMessenger() {
  const [open, setOpen] = useState(false);

  const buttons = [
    { icon: <FaFacebookMessenger />, bg: "bg-blue-500" },
    { icon: <FaTelegramPlane />, bg: "bg-cyan-500" },
    { icon: <FaViber />, bg: "bg-purple-600" },
  ];

  return (
    <div
      className="fixed bottom-32 left-12 flex items-center gap-4"
    >
      {/* Початкова кнопка */}
      <div
        className={`w-14 h-14 rounded-full bg-purple-900 flex items-center justify-center text-white text-2xl cursor-pointer transition-opacity duration-300 ${
          open ? "opacity-100 transition-opacity duration-300" : "opacity-60"
        }`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <FaCommentDots />
      </div>

      {/* Кнопки, що з’являються */}
      {buttons.map((btn, idx) => (
        <div
          key={idx}
          className={`w-14 h-14 rounded-full bg-purple-900 flex items-center justify-center text-white text-2xl cursor-pointer transform transition-all duration-300`}
          style={{
            transitionDelay: open
              ? `${idx * 100}ms`
              : `${(buttons.length - idx) * 100}ms`,
            opacity: open ? 1 : 0,
            transform: open ? "translateX(0)" : "translateX(-2rem)",
            backgroundColor: btn.bg.replace("bg-", ""),
          }}
        >
          {btn.icon}
        </div>
      ))}
    </div>
  );
}
