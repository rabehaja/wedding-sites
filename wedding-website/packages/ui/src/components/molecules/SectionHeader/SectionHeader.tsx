import { Typography } from "../../atoms/Typography";
import { Divider } from "../../atoms/Divider";
import { cn } from "../../../lib/utils";

type SectionHeaderAlignment = "left" | "center" | "right";
type SectionHeaderColorScheme = "dark" | "light" | "cream";

interface SectionHeaderProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly alignment?: SectionHeaderAlignment;
  readonly showDivider?: boolean;
  readonly colorScheme?: SectionHeaderColorScheme;
  readonly className?: string;
  readonly titleClassName?: string;
  readonly subtitleClassName?: string;
}

const alignmentStyles: Record<SectionHeaderAlignment, string> = {
  left: "text-left items-start",
  center: "text-center items-center",
  right: "text-right items-end",
};

const titleColorStyles: Record<SectionHeaderColorScheme, string> = {
  dark: "text-wedding-neutral-700",
  light: "text-white",
  cream: "text-wedding-cream",
};

const subtitleColorStyles: Record<SectionHeaderColorScheme, string> = {
  dark: "text-wedding-neutral-500",
  light: "text-white/80",
  cream: "text-wedding-cream/80",
};

export function SectionHeader({
  title,
  subtitle,
  alignment = "center",
  showDivider = true,
  colorScheme = "dark",
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeaderProps): React.ReactElement {
  return (
    <header className={cn("flex flex-col gap-4", alignmentStyles[alignment], className)}>
      <Typography variant="h2" className={cn(titleColorStyles[colorScheme], titleClassName)}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="bodyLarge" className={cn(subtitleColorStyles[colorScheme], subtitleClassName)}>
          {subtitle}
        </Typography>
      )}
      {showDivider && (
        <Divider
          variant="decorative"
          colorScheme={colorScheme === "cream" ? "light" : colorScheme}
          className={cn(
            "mt-2",
            alignment === "center" && "max-w-xs mx-auto",
            alignment === "left" && "max-w-xs",
            alignment === "right" && "max-w-xs ml-auto"
          )}
        />
      )}
    </header>
  );
}
