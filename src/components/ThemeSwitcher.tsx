"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Sun, Moon, Laptop } from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center gap-2 px-3 py-2 rounded-xl border bg-white dark:bg-gray-800 shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition">
          {theme === "dark" ? (
            <Moon className="w-5 h-5 text-gray-300" />
          ) : theme === "light" ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Laptop className="w-5 h-5 text-blue-500" />
          )}
          <span className="text-sm capitalize">{theme}</span>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        className="min-w-[160px] bg-white dark:bg-gray-800 rounded-xl shadow-lg p-1"
        sideOffset={8}
      >
        <DropdownMenu.Item
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
          onClick={() => setTheme("light")}
        >
          <Sun className="w-4 h-4 text-yellow-500" /> Light
        </DropdownMenu.Item>

        <DropdownMenu.Item
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
          onClick={() => setTheme("dark")}
        >
          <Moon className="w-4 h-4 text-gray-300" /> Dark
        </DropdownMenu.Item>

        <DropdownMenu.Item
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
          onClick={() => setTheme("system")}
        >
          <Laptop className="w-4 h-4 text-blue-500" /> System
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
