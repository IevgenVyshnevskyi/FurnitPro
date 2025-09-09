import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

//import type { NextConfig } from "next";
//import createNextIntlPlugin from "next-intl/plugin";

//const withNextIntl = createNextIntlPlugin();

///** @type {import('next').NextConfig} */
//const nextConfig: NextConfig = {
/* config options here */
/* i18n: {
    locales: ["en", "ua"], // англійська та українська
    defaultLocale: "en",
  },
}; */

//module.exports = nextConfig;

//export default nextConfig;

//import { NextConfig } from "next";
//import createNextIntlPlugin from "next-intl/plugin";

//const nextConfig: NextConfig = {
/*  i18n: {
    locales: ["ua", "en"], // перелік мов
    defaultLocale: "ua", // мова за замовчуванням
  }, */
//};

//const withNextIntl = createNextIntlPlugin();
//export default withNextIntl(nextConfig);

// next-intl.config.ts
/* import { IntlConfig } from 'next-intl';

const nextConfig: IntlConfig = {
  locales: ['en', 'ua'],
  defaultLocale: 'ua',
};

export default nextConfig; */
// next-intl.config.ts
//import { IntlConfig } from "next-intl";

//export interface IntlConfig {
  // у App Router конфіг не обов'язковий
  // тут можна лише експортувати типи або налаштування messages, якщо хочеш
//}

//export default {}; // порожній об'єкт або експорт типу
