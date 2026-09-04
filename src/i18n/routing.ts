import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["ua", "ru", "en"],

  // Used when no locale matches
  defaultLocale: "ua",

  // Завжди відкривати українську за замовчуванням, а не мову браузера відвідувача
  localeDetection: false,
});
