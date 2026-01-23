"use client";

import { Typography } from "../../atoms/Typography";
import { cn } from "../../../lib/utils";

interface Highlight {
  readonly icon: React.ReactNode;
  readonly text: string;
}

interface WeekendDayCardProps {
  readonly dayName: string;
  readonly date: string;
  readonly highlights: Highlight[];
  readonly featured?: boolean;
  readonly href?: string;
  readonly className?: string;
}

export function WeekendDayCard({
  dayName,
  date,
  highlights,
  featured = false,
  href,
  className,
}: WeekendDayCardProps): React.ReactElement {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href?.startsWith("#")) {
      e.preventDefault();
      const targetId = href.slice(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const cardContent = (
    <article
      className={cn(
        "rounded-lg p-6 transition-all duration-300",
        "bg-white border border-wedding-neutral-200",
        "shadow-sm hover:shadow-md",
        featured && "ring-2 ring-wedding-coral-200 bg-wedding-coral-50/30",
        href && "cursor-pointer hover:scale-[1.02]",
        className
      )}
    >
      <div className="text-center mb-4">
        <Typography
          variant="small"
          className="text-wedding-coral-600 font-semibold uppercase tracking-widest text-xs"
        >
          {dayName}
        </Typography>
        <Typography variant="h4" className="mt-1 font-serif">
          {date}
        </Typography>
      </div>

      <div className="border-t border-wedding-neutral-200 pt-4">
        <ul className="space-y-3" aria-label={`${dayName} highlights`}>
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className="text-wedding-coral-500 w-5 h-5 flex-shrink-0 [&>svg]:w-full [&>svg]:h-full">
                {highlight.icon}
              </span>
              <Typography variant="body" className="text-sm">
                {highlight.text}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );

  if (href) {
    return (
      <a href={href} onClick={handleClick} className="block no-underline">
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
