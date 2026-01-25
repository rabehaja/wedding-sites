"use client";

import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const languages = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "de", label: "DE", flag: "🇩🇪" },
  { code: "fr", label: "FR", flag: "🇫🇷" },
];

export function LanguageSwitcher(): React.ReactElement {
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLocale = (newLocale: string) => {
    // Strip any existing locale prefix from the pathname
    const pathWithoutLocale = pathname.replace(/^\/(en|de|fr)/, "") || "/";
    // Always include locale prefix to ensure proper switching
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    // Use window.location for full page navigation to ensure middleware handles locale change
    window.location.href = newPath;
  };

  const currentLang = languages.find((l) => l.code === locale) ?? languages[0]!;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-wedding-neutral-600 hover:text-wedding-neutral-700 rounded-lg hover:bg-wedding-neutral-100 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span aria-hidden="true">{currentLang.flag}</span>
        <span>{currentLang.label}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-wedding-neutral-200 py-1 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLocale(lang.code)}
              className={`w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-wedding-neutral-50 transition-colors ${
                locale === lang.code
                  ? "text-wedding-coral-500 font-medium"
                  : "text-wedding-neutral-600"
              }`}
            >
              <span aria-hidden="true">{lang.flag}</span>
              <span>{lang.label}</span>
              {locale === lang.code && (
                <svg
                  className="w-4 h-4 ml-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
