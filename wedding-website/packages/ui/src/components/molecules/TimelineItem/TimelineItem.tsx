import { Typography } from "../../atoms/Typography";
import { cn } from "../../../lib/utils";

interface TimelineItemProps {
  readonly time: string;
  readonly title: React.ReactNode;
  readonly description?: string;
  readonly icon?: React.ReactNode;
  readonly isLast?: boolean;
  readonly className?: string;
}

export function TimelineItem({
  time,
  title,
  description,
  icon,
  isLast = false,
  className,
}: TimelineItemProps): React.ReactElement {
  return (
    <li
      className={cn(
        "relative flex gap-4 md:gap-5",
        "group",
        className
      )}
      aria-label={`${time} event`}
    >
      {/* Timeline line and icon/dot */}
      <div className="flex flex-col items-center">
        {icon ? (
          <div
            className={cn(
              "w-14 h-14 md:w-16 md:h-16",
              "rounded-full flex-shrink-0",
              "bg-wedding-coral-50",
              "border-2 border-wedding-coral-200",
              "flex items-center justify-center",
              "text-wedding-coral-500",
              "z-10",
              "transition-all duration-200",
              "group-hover:border-wedding-coral-300",
              "group-hover:bg-wedding-coral-100/50",
              "[&>svg]:w-7 [&>svg]:h-7 md:[&>svg]:w-8 md:[&>svg]:h-8"
            )}
          >
            {icon}
          </div>
        ) : (
          <div className="w-3 h-3 rounded-full bg-wedding-coral-300 border-2 border-wedding-coral-100 z-10 mt-1.5" />
        )}
        {!isLast && (
          <div
            className={cn(
              "absolute w-0.5",
              "bg-wedding-coral-200",
              icon
                ? "top-14 md:top-16 left-[27px] md:left-[31px] h-[calc(100%-56px)] md:h-[calc(100%-64px)]"
                : "top-3 left-[5px] h-full"
            )}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Content */}
      <div
        className={cn(
          "pb-10 md:pb-12 flex-1 max-w-lg",
          icon && "pt-3 md:pt-4",
          "transition-transform duration-200",
          "group-hover:translate-x-0.5"
        )}
      >
        <Typography
          variant="small"
          className="text-wedding-coral-600 font-semibold uppercase tracking-widest text-xs md:text-sm"
        >
          {time}
        </Typography>
        <Typography variant="h4" className="mt-2 font-serif">
          {title}
        </Typography>
        {description && (
          <Typography
            variant="body"
            color="muted"
            className="mt-3 max-w-md leading-relaxed"
          >
            {description}
          </Typography>
        )}
      </div>
    </li>
  );
}
