//import type { NextConfig } from "next";
//import createNextIntlPlugin from "next-intl/plugin";

//const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
//const nextConfig/* : NextConfig  */= {
/* config options here */
/* i18n: {
    locales: ["en", "ua"], // англійська та українська
    defaultLocale: "en",
  }, */
//};

//export default nextConfig;

import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* i18n: {
    locales: ["ua", "en"], // перелік мов
    defaultLocale: "ua", // мова за замовчуванням
  }, */
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
