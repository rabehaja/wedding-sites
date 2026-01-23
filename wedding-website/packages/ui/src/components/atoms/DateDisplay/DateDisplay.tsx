import { cn } from "../../../lib/utils";

type DateDisplayVariant = "default" | "large" | "compact";
type DateDisplayColor = "default" | "coral" | "cyan" | "purple" | "white";

interface DateDisplayProps {
  readonly day: number;
  readonly month: string;
  readonly year: number;
  readonly variant?: DateDisplayVariant;
  readonly color?: DateDisplayColor;
  readonly className?: string;
}

const variantStyles: Record<DateDisplayVariant, { container: string; day: string; month: string; year: string }> = {
  default: {
    container: "flex items-baseline gap-2",
    day: "font-serif text-4xl md:text-5xl font-normal",
    month: "font-sans text-lg md:text-xl uppercase tracking-widest",
    year: "font-sans text-lg md:text-xl",
  },
  large: {
    container: "flex items-baseline gap-3",
    day: "font-serif text-6xl md:text-7xl font-normal",
    month: "font-sans text-2xl md:text-3xl uppercase tracking-widest",
    year: "font-sans text-2xl md:text-3xl",
  },
  compact: {
    container: "flex items-baseline gap-1",
    day: "font-serif text-2xl font-normal",
    month: "font-sans text-sm uppercase tracking-wider",
    year: "font-sans text-sm",
  },
};

const colorStyles: Record<DateDisplayColor, string> = {
  default: "text-wedding-neutral-700",
  coral: "text-wedding-cyan",
  cyan: "text-wedding-cyan",
  purple: "text-wedding-purple-500",
  white: "text-white",
};

export function DateDisplay({
  day,
  month,
  year,
  variant = "default",
  color = "default",
  className,
}: DateDisplayProps): React.ReactElement {
  const styles = variantStyles[variant];

  return (
    <time
      dateTime={`${year}-${month}-${day.toString().padStart(2, "0")}`}
      className={cn(styles.container, colorStyles[color], className)}
    >
      <span className={styles.day}>{day}</span>
      <span className={styles.month}>{month}</span>
      <span className={styles.year}>{year}</span>
    </time>
  );
}
