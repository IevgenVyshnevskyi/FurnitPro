"use client";

import Link from "next/link";
import FloatingMessenger from "./FloatingMessenger";
import ScrollToTop from "./ScrollToTop";
import FloatingContactButton from "./FloatingContactButton";
import FloatingSocials from "./FloatingSocials";
import { useTranslations } from "next-intl";
import { useLocalizedHref } from "@/hooks/useLocalizedHref"; // ✅ імпорт хуку

export default function Footer() {
  const t = useTranslations("Footer"); // Ініціалізуємо хук для доступу до перекладів у просторі імен "Footer"
  const localizeHref = useLocalizedHref();

  return (
    <footer className="w-full bg-gray-900 text-gray-300 mt-10">
      <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Про компанію */}
        <div>
          <h2 className="text-lg font-semibold text-white">
            {t("aboutUsTitle")}
          </h2>
          <p className="mt-2 text-sm">{t("aboutUsText")}</p>
        </div>

        {/* Швидкі посилання */}
        <div>
          <h2 className="text-lg font-semibold text-white">
            {t("quickLinksTitle")}
          </h2>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href={localizeHref("/")} className="hover:underline">
                {t("home")}
              </Link>
            </li>
            <li>
              <Link href={localizeHref("/privacy")} className="hover:underline">
                {t("privacyPolicy")}
              </Link>
            </li>
            <li>
              <Link href={localizeHref("/terms")} className="hover:underline">
                {t("termsOfUse")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Контакти */}
        <div>
          <h2 className="text-lg font-semibold text-white">
            {t("contactTitle")}
          </h2>
          <ul className="mt-2 space-y-2">
            <li>
              {t("email")}:{" "}
              <Link
                href="mailto:furnitpro7@gmail.com"
                className="hover:underline text-blue-600"
              >
                furnitpro7@gmail.com
              </Link>
            </li>

            <li>
              {t("phone")}:{" "}
              <Link
                href="tel:+380957989094"
                className="hover:underline text-blue-600"
              >
                +38 (095) 798 90 94
              </Link>
            </li>

            <li>
              Telegram:{" "}
              <Link
                href="tg://resolve?phone=380987781679"
                target="_blank"
                className="hover:underline text-blue-600"
              >
                FurnitPro
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Нижня лінія */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} FurnitPro. {t("copyright")}
      </div>
      <FloatingContactButton />
      <FloatingSocials />
      <FloatingMessenger />
      <ScrollToTop />
    </footer>
  );
}
