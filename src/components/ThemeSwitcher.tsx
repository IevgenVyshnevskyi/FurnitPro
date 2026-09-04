"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Laptop } from "lucide-react";

type ThemeSwitcherProps = {
  mobile?: boolean;
};

const OPTIONS = [
  { value: "light", icon: Sun, label: "Світла" },
  { value: "dark", icon: Moon, label: "Темна" },
  { value: "system", icon: Laptop, label: "Системна" },
] as const;

export default function ThemeSwitcher({ mobile = false }: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme();
  // next-themes не знає поточну тему до монтування на клієнті (щоб уникнути
  // розбіжності SSR/CSR) — до монтування нічого не рендеримо
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const containerClass = mobile
    ? "flex gap-3 justify-center items-center"
    : "hidden lg:flex items-center gap-1 rounded-full bg-white/10 p-1";

  if (!mounted) {
    // Плейсхолдер того самого розміру, щоб уникнути стрибка макета після монтування
    return <div className={containerClass} style={{ visibility: "hidden" }} aria-hidden="true" />;
  }

  return (
    <div className={containerClass}>
      {OPTIONS.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          type="button"
          onClick={() => setTheme(value)}
          aria-label={label}
          aria-pressed={theme === value}
          className={`flex items-center justify-center rounded-full p-1.5 transition-colors ${
            theme === value
              ? "bg-white text-gray-900"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <Icon className="size-4" aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}
