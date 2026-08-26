"use client";

import Image from "next/image";

export default function BackgroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full">
      {/* Фонове зображення через next/image — Next сам генерує оптимізовані розміри/формати */}
      <Image
        src="/images/background/bg-1920.jpg"
        alt="Background"
        fill
        priority
        className="absolute inset-0 -z-10 object-cover"
        sizes="100vw"
      />
      {/* Контент сайту */}
      <main className="relative z-10">{children}</main>
    </div>
  );
}
