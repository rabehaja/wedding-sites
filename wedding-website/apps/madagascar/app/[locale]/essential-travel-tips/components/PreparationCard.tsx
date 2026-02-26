import { type ReactNode } from "react";
import { Typography } from "@repo/ui/atoms";
import { cn } from "@/lib/utils";

interface PreparationCardProps {
  readonly icon: ReactNode;
  readonly title: string;
  readonly description: string;
  readonly className?: string;
}

export function PreparationCard({
  icon,
  title,
  description,
  className,
}: PreparationCardProps): React.ReactElement {
  return (
    <div
      className={cn(
        "flex items-start gap-5 p-6 rounded-xl bg-wedding-neutral-50 border border-wedding-neutral-100",
        className
      )}
    >
      <div className="w-10 h-10 rounded-full bg-wedding-coral-50 flex items-center justify-center text-wedding-coral-500 flex-shrink-0 mt-1">
        {icon}
      </div>
      <div>
        <Typography variant="h4" className="font-serif mb-2">
          {title}
        </Typography>
        <Typography variant="body" color="muted">
          {description}
        </Typography>
      </div>
    </div>
  );
}
