import { Typography } from "../../atoms/Typography";
import { cn } from "../../../lib/utils";

interface TimelineItemProps {
  readonly time: string;
  readonly title: string;
  readonly description?: string;
  readonly isLast?: boolean;
  readonly className?: string;
}

export function TimelineItem({
  time,
  title,
  description,
  isLast = false,
  className,
}: TimelineItemProps): React.ReactElement {
  return (
    <div className={cn("relative flex gap-6", className)}>
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-wedding-coral-400 border-4 border-wedding-coral-100 z-10" />
        {!isLast && (
          <div className="w-0.5 h-full bg-wedding-neutral-200 absolute top-4 left-[7px]" />
        )}
      </div>

      {/* Content */}
      <div className="pb-8">
        <Typography
          variant="small"
          className="text-wedding-coral-600 font-semibold uppercase tracking-wider"
        >
          {time}
        </Typography>
        <Typography variant="h4" className="mt-1">
          {title}
        </Typography>
        {description && (
          <Typography variant="body" color="muted" className="mt-2 max-w-md">
            {description}
          </Typography>
        )}
      </div>
    </div>
  );
}
