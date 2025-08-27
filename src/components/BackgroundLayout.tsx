"use client";

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
        {/* <source srcSet="/images/background/bg-1920.webp" media="(min-width: 1280px)" />
        <source srcSet="/images/background//bg-1280.webp" media="(min-width: 768px)" /> */}
        <img
          src="/images/bg-768.webp"
          alt="Background"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
      </picture>

      {/* Контент сайту */}
      <main className="relative z-10">{children}</main>
    </div>
  );
}
