import { Typography } from "../../atoms/Typography";
import { Divider } from "../../atoms/Divider";
import { cn } from "../../../lib/utils";

type SectionHeaderAlignment = "left" | "center" | "right";

interface SectionHeaderProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly alignment?: SectionHeaderAlignment;
  readonly showDivider?: boolean;
  readonly className?: string;
}

const alignmentStyles: Record<SectionHeaderAlignment, string> = {
  left: "text-left items-start",
  center: "text-center items-center",
  right: "text-right items-end",
};

export function SectionHeader({
  title,
  subtitle,
  alignment = "center",
  showDivider = true,
  className,
}: SectionHeaderProps): React.ReactElement {
  return (
    <header className={cn("flex flex-col gap-4", alignmentStyles[alignment], className)}>
      <Typography variant="h2" className="text-wedding-neutral-700">
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="bodyLarge" color="muted">
          {subtitle}
        </Typography>
      )}
      {showDivider && (
        <Divider
          variant="decorative"
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
