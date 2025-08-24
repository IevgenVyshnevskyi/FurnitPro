"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type LangSwitcherProps = {
  mobile?: boolean; // для мобільного меню
};

export default function LangSwitcher({ mobile = false }: LangSwitcherProps) {
  const pathname = usePathname();

  // Клас для відображення на мобільному або десктопі
  const containerClass = mobile
    ? "flex gap-4 justify-center text-white"
    : "hidden lg:flex lg:flex-1 lg:justify-end gap-2 items-center text-white";
  //console.log("pathname: ", pathname);

  const flagSizeClass = mobile ? "h-6 w-4" : "text-xl";

  return (
    <div className={containerClass}>
      {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end"> */}
      <Link
        href={`/ua${pathname.replace(/^\/(ua|en)/, "")}`}
        //href={pathname}
        locale="ua"
        className={flagSizeClass}
        /* className="text-sm/6 font-semibold text-white" */
      >
        🇺🇦 {/* Українська */}
      </Link>
      {/* {" "}
      |{" "} */}
      <span className="text-white">|</span>
      <Link
        href={`/en${pathname.replace(/^\/(ua|en)/, "")}`}
        //href={pathname}
        locale="en"
        /* className="text-sm/6 font-semibold text-white" */
        className={flagSizeClass}
      >
        🇬🇧 {/* English */}
      </Link>
    </div>
  );
}
