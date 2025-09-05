"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type LangSwitcherProps = {
  mobile?: boolean;
};

export default function LangSwitcher({ mobile = false }: LangSwitcherProps) {
  const pathname = usePathname();

  // Визначаємо поточну мову з шляху
  const currentLang = pathname.startsWith("/en") ? "en" : "ua";

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
        href={`/ua${pathname.replace(/^\/(ua|en)/, "")}`}
        locale="ua"
        className={`${flagSizeClass} ${getFlagClass("ua")}`}
      >
        <Image
          src="/flags/ua-flag.svg"
          alt="UA"
          width={500} // потрібно обовʼязково вказати width і height
          height={500}
          className="h-full w-full"
        />
      </Link>
      <span className="text-white">|</span>
      <Link
        href={`/en${pathname.replace(/^\/(ua|en)/, "")}`}
        locale="en"
        className={`${flagSizeClass} ${getFlagClass("en")}`}
      >
        <Image
          src="/flags/uk-flag.svg"
          alt="GB"
          width={500} // потрібно обовʼязково вказати width і height
          height={500}
          className="h-full w-full"
        />
      </Link>
    </div>
  );
}
