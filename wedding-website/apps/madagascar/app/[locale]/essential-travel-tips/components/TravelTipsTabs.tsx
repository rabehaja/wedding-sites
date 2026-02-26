"use client";

import { type ReactNode, useState, useCallback, useRef, useEffect } from "react";
import { Typography } from "@repo/ui/atoms";
import { cn } from "@/lib/utils";

interface TravelTip {
  readonly icon: ReactNode;
  readonly title: string;
  readonly bullets: readonly string[];
  readonly colorScheme: "coral" | "purple";
}

interface TravelTipsTabsProps {
  readonly tips: readonly TravelTip[];
}

const colorMap = {
  coral: {
    iconBg: "bg-wedding-coral-50",
    iconText: "text-wedding-coral-500",
    activeBorder: "border-wedding-coral-400",
    activeBg: "bg-wedding-coral-50/50",
    bullet: "bg-wedding-coral-400",
  },
  purple: {
    iconBg: "bg-wedding-purple-50",
    iconText: "text-wedding-purple-500",
    activeBorder: "border-wedding-purple-400",
    activeBg: "bg-wedding-purple-50/50",
    bullet: "bg-wedding-purple-400",
  },
} as const;

export function TravelTipsTabs({ tips }: TravelTipsTabsProps): React.ReactElement {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    tabRefs.current = tabRefs.current.slice(0, tips.length);
  }, [tips.length]);

  const handleTabKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      let newIndex = index;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        newIndex = (index + 1) % tips.length;
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        newIndex = (index - 1 + tips.length) % tips.length;
      } else if (e.key === "Home") {
        e.preventDefault();
        newIndex = 0;
      } else if (e.key === "End") {
        e.preventDefault();
        newIndex = tips.length - 1;
      } else {
        return;
      }
      setActiveIndex(newIndex);
      tabRefs.current[newIndex]?.focus();
    },
    [tips.length]
  );

  return (
    <>
      {/* Desktop: Vertical tabs */}
      <div className="hidden md:flex gap-0 rounded-2xl border border-wedding-neutral-100 bg-white shadow-sm overflow-hidden">
        {/* Tab list */}
        <div
          role="tablist"
          aria-orientation="vertical"
          className="flex flex-col w-56 flex-shrink-0 border-r border-wedding-neutral-100 bg-wedding-neutral-50/50"
        >
          {tips.map((tip, index) => {
            const colors = colorMap[tip.colorScheme];
            const isActive = index === activeIndex;
            return (
              <button
                key={tip.title}
                ref={(el) => { tabRefs.current[index] = el; }}
                role="tab"
                aria-selected={isActive}
                aria-controls={`tabpanel-${index}`}
                id={`tab-${index}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(e) => handleTabKeyDown(e, index)}
                className={cn(
                  "flex items-center gap-3 px-5 py-4 text-left transition-all duration-200 border-l-3",
                  isActive
                    ? cn(colors.activeBorder, colors.activeBg)
                    : "border-transparent hover:bg-wedding-neutral-50"
                )}
              >
                <div
                  className={cn(
                    "w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-colors",
                    isActive ? cn(colors.iconBg, colors.iconText) : "bg-wedding-neutral-100 text-wedding-neutral-400"
                  )}
                >
                  <div className="w-5 h-5 [&>svg]:w-5 [&>svg]:h-5">{tip.icon}</div>
                </div>
                <span
                  className={cn(
                    "font-serif text-sm font-medium transition-colors",
                    isActive ? "text-wedding-neutral-700" : "text-wedding-neutral-500"
                  )}
                >
                  {tip.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab panels */}
        {tips.map((tip, index) => {
          const colors = colorMap[tip.colorScheme];
          return (
            <div
              key={tip.title}
              role="tabpanel"
              id={`tabpanel-${index}`}
              aria-labelledby={`tab-${index}`}
              hidden={index !== activeIndex}
              className="flex-1 p-8 md:p-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center",
                    colors.iconBg,
                    colors.iconText
                  )}
                >
                  {tip.icon}
                </div>
                <Typography variant="h3" className="font-serif">
                  {tip.title}
                </Typography>
              </div>
              <ul className="space-y-4" role="list">
                {tip.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span
                      className={cn(colors.bullet, "mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full")}
                      aria-hidden="true"
                    />
                    <Typography variant="body" color="muted" className="leading-relaxed">
                      {bullet}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Mobile: Accordion */}
      <div className="md:hidden space-y-0 rounded-2xl border border-wedding-neutral-100 bg-white shadow-sm overflow-hidden">
        {tips.map((tip, index) => {
          const colors = colorMap[tip.colorScheme];
          const isOpen = mobileOpen === index;
          return (
            <div
              key={tip.title}
              className={cn(
                index > 0 && "border-t border-wedding-neutral-100"
              )}
            >
              <button
                onClick={() => setMobileOpen(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                aria-controls={`accordion-${index}`}
                className={cn(
                  "flex items-center gap-3 w-full px-5 py-4 text-left transition-colors",
                  isOpen ? colors.activeBg : "hover:bg-wedding-neutral-50/50"
                )}
              >
                <div
                  className={cn(
                    "w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0",
                    isOpen ? cn(colors.iconBg, colors.iconText) : "bg-wedding-neutral-100 text-wedding-neutral-400"
                  )}
                >
                  <div className="w-5 h-5 [&>svg]:w-5 [&>svg]:h-5">{tip.icon}</div>
                </div>
                <span
                  className={cn(
                    "font-serif text-sm font-medium flex-1",
                    isOpen ? "text-wedding-neutral-700" : "text-wedding-neutral-500"
                  )}
                >
                  {tip.title}
                </span>
                <svg
                  className={cn(
                    "w-5 h-5 text-wedding-neutral-400 transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id={`accordion-${index}`}
                className={cn(
                  "grid transition-all duration-200 ease-in-out",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <ul className="space-y-3 px-5 pb-5 pt-1" role="list">
                    {tip.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span
                          className={cn(colors.bullet, "mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full")}
                          aria-hidden="true"
                        />
                        <Typography variant="body" color="muted">
                          {bullet}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
