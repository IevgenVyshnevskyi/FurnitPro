"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

type LangSwitcherProps = {
  mobile?: boolean;
};

export default function LangSwitcher({ mobile = false }: LangSwitcherProps) {
  const pathname = usePathname(); // поточний шлях
  const router = useRouter();

  const segments = pathname.split("/").filter(Boolean);
  const currentLang = segments[0] === "ua" ? "ua" : "en";
  const restSegments = segments.slice(1).join("/"); // всі сегменти крім локалі

  // клас для контейнера
  const containerClass = mobile
    ? "flex gap-4 justify-center items-center"
    : "hidden lg:flex lg:flex-1 lg:justify-end gap-2 items-center";

  const flagSizeClass = mobile ? "h-4 w-6" : "h-5 w-8";

  const getFlagClass = (lang: string) =>
    currentLang === lang
      ? "opacity-100 border-2 border-white rounded"
      : "opacity-50";

  // формуємо чисті URL без повторної локалі
  const getHref = (lang: "ua" | "en") => {
    // прибираємо зайву локаль, якщо вона є
    const cleanRest = restSegments.replace(/^(ua|en)\//, "");
    return `/${lang}${cleanRest ? "/" + cleanRest : ""}`;
  };

  const handleClick = (lang: "ua" | "en") => {
    const href = getHref(lang);
    router.push(href);
  };

  return (
    <div className={containerClass}>
      <button
        onClick={() => handleClick("ua")}
        className={`${flagSizeClass} ${getFlagClass("ua")}`}
      >
        <Image
          src="/flags/ua-flag.svg"
          alt="UA"
          width={500}
          height={500}
          className="h-full w-full"
        />
      </button>
      <span className="text-white">|</span>
      <button
        onClick={() => handleClick("en")}
        className={`${flagSizeClass} ${getFlagClass("en")}`}
      >
        <Image
          src="/flags/uk-flag.svg"
          alt="GB"
          width={500}
          height={500}
          className="h-full w-full"
        />
      </button>
    </div>
  );
}
