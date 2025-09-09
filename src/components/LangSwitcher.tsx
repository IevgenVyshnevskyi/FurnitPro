"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLocalizedHref } from "@/hooks/useLocalizedHref"; // ✅ імпорт хуку

type LangSwitcherProps = {
  mobile?: boolean;
};

export default function LangSwitcher({ mobile = false }: LangSwitcherProps) {
  const pathname = usePathname();
  const localizeHref = useLocalizedHref();

  // Визначаємо поточну мову з шляху
  const currentLang = pathname.startsWith("/en") ? "en" : "ua";

  // Прибираємо поточний префікс мови (/ua або /en)
  const basePath = pathname.replace(/^\/(ua|en)/, "");

  // Клас для контейнера
  const containerClass = mobile
    ? "flex gap-4 justify-center items-center"
    : "hidden lg:flex lg:flex-1 lg:justify-end gap-2 items-center";

  const flagSizeClass = mobile ? "h-4 w-6" : "h-5 w-8";

  const getFlagClass = (lang: string) =>
    currentLang === lang
      ? "opacity-100 border-2 border-white rounded"
      : "opacity-50";

  return (
    <div className={containerClass}>
      <Link
        //href={`/ua${basePath}`}
        href={localizeHref(`/ua${basePath}`)}
        className={`${flagSizeClass} ${getFlagClass("ua")}`}
      >
        <Image
          src="/flags/ua-flag.svg"
          alt="UA"
          width={500}
          height={500}
          className="h-full w-full"
        />
      </Link>
      <span className="text-white">|</span>
      <Link
        //href={`/en${basePath}`}
        href={localizeHref(`/en${basePath}`)}
        className={`${flagSizeClass} ${getFlagClass("en")}`}
      >
        <Image
          src="/flags/uk-flag.svg"
          alt="GB"
          width={500}
          height={500}
          className="h-full w-full"
        />
      </Link>
    </div>
  );
}
