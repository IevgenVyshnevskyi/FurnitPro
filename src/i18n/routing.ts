import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["ua", "ru", "en"],

  // Used when no locale matches
  defaultLocale: "ua",

  // Always default to Ukrainian instead of the visitor's browser language
  localeDetection: false,
});
