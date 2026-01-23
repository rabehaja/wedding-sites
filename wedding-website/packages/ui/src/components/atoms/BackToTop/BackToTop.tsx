"use client";

import { useState, useEffect } from "react";
import { cn } from "../../../lib/utils";

interface BackToTopProps {
  readonly className?: string;
  readonly showAfter?: number;
}

export function BackToTop({
  className,
  showAfter = 300,
}: BackToTopProps): React.ReactElement | null {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > showAfter);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 z-50",
        "w-12 h-12 rounded-full",
        "bg-wedding-coral-500 text-white",
        "shadow-lg hover:shadow-xl",
        "flex items-center justify-center",
        "transition-all duration-300",
        "hover:bg-wedding-coral-600 hover:scale-110",
        "focus:outline-none focus:ring-2 focus:ring-wedding-coral-300 focus:ring-offset-2",
        className
      )}
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
