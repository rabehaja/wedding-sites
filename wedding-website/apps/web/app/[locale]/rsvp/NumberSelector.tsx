"use client";

import { useState, useRef, useEffect } from "react";

interface NumberSelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  label?: string;
}

export function NumberSelector({
  value,
  onChange,
  min = 1,
  max = 10,
  label,
}: NumberSelectorProps): React.ReactElement {
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

  const numbers = Array.from({ length: max - min + 1 }, (_, i) => min + i);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-wedding-neutral-600 hover:text-wedding-neutral-700 rounded-lg hover:bg-wedding-neutral-100 transition-colors border border-wedding-neutral-200"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span>{value}</span>
        {label && <span className="text-wedding-neutral-400">{label}</span>}
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
        <div className="absolute left-0 mt-2 w-20 max-h-48 overflow-y-auto bg-white rounded-lg shadow-lg border border-wedding-neutral-200 py-1 z-50">
          {numbers.map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => {
                onChange(num);
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-center px-4 py-2 text-sm hover:bg-wedding-neutral-50 transition-colors ${
                value === num
                  ? "text-wedding-coral-500 font-medium"
                  : "text-wedding-neutral-600"
              }`}
            >
              {num}
              {value === num && (
                <svg
                  className="w-4 h-4 ml-2"
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
