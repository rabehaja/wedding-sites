import { cn } from "../../../lib/utils";

type DividerVariant = "default" | "accent" | "decorative";
type DividerOrientation = "horizontal" | "vertical";

interface DividerProps {
  readonly variant?: DividerVariant;
  readonly orientation?: DividerOrientation;
  readonly className?: string;
}

const variantStyles: Record<DividerVariant, string> = {
  default: "bg-wedding-neutral-200",
  accent: "bg-wedding-coral-400",
  decorative: "bg-gradient-to-r from-wedding-purple-200 via-wedding-coral-400 to-wedding-purple-200",
};

export function Divider({
  variant = "default",
  orientation = "horizontal",
  className,
}: DividerProps): React.ReactElement {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        isHorizontal ? "h-px w-full" : "w-px h-full",
        variantStyles[variant],
        className
      )}
    />
  );
}
