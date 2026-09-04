"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

type LangSwitcherProps = {
  mobile?: boolean;
};

const LOCALES = ["ua", "ru", "en"] as const;
type Locale = (typeof LOCALES)[number];

const FLAGS: Record<Locale, { src: string; alt: string }> = {
  ua: { src: "/flags/ua-flag.svg", alt: "UA" },
  ru: { src: "/flags/ru-flag.svg", alt: "RU" },
  en: { src: "/flags/uk-flag.svg", alt: "GB" },
};

export default function LangSwitcher({ mobile = false }: LangSwitcherProps) {
  const pathname = usePathname(); // поточний шлях
  const router = useRouter();

  const segments = pathname.split("/").filter(Boolean);
  const currentLang: Locale = (
    LOCALES as readonly string[]
  ).includes(segments[0])
    ? (segments[0] as Locale)
    : "ua";
  const restSegments = segments.slice(1).join("/"); // всі сегменти крім локалі

  // клас для контейнера
  const containerClass = mobile
    ? "flex gap-4 justify-center items-center"
    : "hidden lg:flex lg:flex-1 lg:justify-end gap-2 items-center";

  const flagSizeClass = mobile ? "h-4 w-6" : "h-5 w-8";

  const getFlagClass = (lang: Locale) =>
    currentLang === lang
      ? "opacity-100 border-2 border-white rounded"
      : "opacity-50";

  // формуємо чисті URL без повторної локалі
  const getHref = (lang: Locale) => {
    // прибираємо зайву локаль, якщо вона є
    const cleanRest = restSegments.replace(/^(ua|ru|en)\//, "");
    return `/${lang}${cleanRest ? "/" + cleanRest : ""}`;
  };

  const handleClick = (lang: Locale) => {
    const href = getHref(lang);
    router.push(href);
  };

  return (
    <div className={containerClass}>
      {LOCALES.map((lang, idx) => (
        <div key={lang} className="flex items-center gap-2">
          {idx > 0 && <span className="text-white">|</span>}
          <button
            onClick={() => handleClick(lang)}
            className={`${flagSizeClass} ${getFlagClass(lang)}`}
          >
            <Image
              src={FLAGS[lang].src}
              alt={FLAGS[lang].alt}
              width={500}
              height={500}
              className="h-full w-full"
            />
          </button>
        </div>
      ))}
    </div>
  );
}
