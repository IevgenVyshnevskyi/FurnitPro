"use client";

import Image from "next/image";

export default function BackgroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full">
      {/* Фонове зображення через <picture> */}
      <picture>
        <source
          srcSet="/images/background/bg-1920.jpg"
          media="(min-width: 1280px)"
        />
        {/* <source srcSet="/images/background/bg-1920.webp" media="(min-width: 1280px)" /> */}
        <source
          srcSet="/images/background/bg-1280.png"
          media="(min-width: 768px)"
        />

        {/*  <img
          src="/images/background/bg-768.png"
          alt="Background"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        /> */}
       </picture>
        <Image
          src="/images/background/bg-768.png"
          alt="Background"
          fill
          priority
          className="absolute inset-0 -z-10 object-cover"
          sizes="(min-width: 1280px) 1920px, (min-width: 768px) 1280px, 768px"
        />
      {/* Контент сайту */}
      <main className="relative z-10">{children}</main>
    </div>
  );
}
