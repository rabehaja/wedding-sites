"use client";

import { type ReactNode, useState } from "react";
import { Typography } from "@repo/ui/atoms";
import { cn } from "@/lib/utils";

interface TravelTip {
  readonly icon: ReactNode;
  readonly title: string;
  readonly bullets: readonly string[];
  readonly colorScheme: "coral" | "purple";
}

interface TravelTipsAccordionProps {
  readonly tips: readonly TravelTip[];
}

const colorMap = {
  coral: {
    iconBg: "bg-wedding-coral-50",
    iconText: "text-wedding-coral-500",
    activeBg: "bg-wedding-coral-50/50",
    bullet: "bg-wedding-coral-400",
  },
  purple: {
    iconBg: "bg-wedding-purple-50",
    iconText: "text-wedding-purple-500",
    activeBg: "bg-wedding-purple-50/50",
    bullet: "bg-wedding-purple-400",
  },
} as const;

export function TravelTipsAccordion({ tips }: TravelTipsAccordionProps): React.ReactElement {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-0 rounded-2xl border border-wedding-neutral-100 bg-white shadow-sm overflow-hidden">
      {tips.map((tip, index) => {
        const colors = colorMap[tip.colorScheme];
        const isOpen = openIndex === index;
        return (
          <div
            key={tip.title}
            className={cn(
              index > 0 && "border-t border-wedding-neutral-100"
            )}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              aria-controls={`accordion-${index}`}
              className={cn(
                "flex items-center gap-3 md:gap-4 w-full px-5 md:px-8 py-4 md:py-5 text-left cursor-pointer transition-colors",
                isOpen ? colors.activeBg : "hover:bg-wedding-neutral-50/50"
              )}
            >
              <div
                className={cn(
                  "w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center flex-shrink-0",
                  isOpen ? cn(colors.iconBg, colors.iconText) : "bg-wedding-neutral-100 text-wedding-neutral-400"
                )}
              >
                <div className="w-5 h-5 md:w-6 md:h-6 [&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6">{tip.icon}</div>
              </div>
              <span
                className={cn(
                  "text-sm md:text-base font-medium flex-1",
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
                <ul className="space-y-3 md:space-y-4 px-5 md:px-8 pb-5 md:pb-8 pt-1" role="list">
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
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Keep backward-compatible export
export { TravelTipsAccordion as TravelTipsTabs };
