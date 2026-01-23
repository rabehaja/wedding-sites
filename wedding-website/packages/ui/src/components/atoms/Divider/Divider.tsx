import { cn } from "../../../lib/utils";

type DividerVariant = "default" | "accent" | "decorative";
type DividerOrientation = "horizontal" | "vertical";
type DividerColorScheme = "dark" | "light";

interface DividerProps {
  readonly variant?: DividerVariant;
  readonly orientation?: DividerOrientation;
  readonly colorScheme?: DividerColorScheme;
  readonly className?: string;
}

const variantStyles: Record<DividerColorScheme, Record<DividerVariant, string>> = {
  dark: {
    default: "bg-wedding-neutral-200",
    accent: "bg-wedding-coral-400",
    decorative: "bg-gradient-to-r from-wedding-purple-200 via-wedding-coral-400 to-wedding-purple-200",
  },
  light: {
    default: "bg-white/30",
    accent: "bg-white/60",
    decorative: "bg-gradient-to-r from-white/20 via-white/60 to-white/20",
  },
};

export function Divider({
  variant = "default",
  orientation = "horizontal",
  colorScheme = "dark",
  className,
}: DividerProps): React.ReactElement {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        isHorizontal ? "h-px w-full" : "w-px h-full",
        variantStyles[colorScheme][variant],
        className
      )}
    />
  );
}
