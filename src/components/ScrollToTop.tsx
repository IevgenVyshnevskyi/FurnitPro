import { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Визначаємо мобільний режим
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 left-12 z-50 flex ${
          isMobile ? "h-10 w-10" : "h-14 w-14"
        } items-center justify-center
        rounded-full bg-purple-900 text-white shadow-lg transition-all duration-300
        ${isVisible ? "opacity-60 scale-100" : "opacity-0 scale-0"}
        hover:opacity-100 bg-purple-900
      `}
      style={{
        left: isMobile ? "16px" : "48px", // ✅ адаптивний лівий відступ
      }}
      aria-label="Scroll to top"
    >
      <ArrowUpIcon className="h-6 w-6" />
    </button>
  );
}
