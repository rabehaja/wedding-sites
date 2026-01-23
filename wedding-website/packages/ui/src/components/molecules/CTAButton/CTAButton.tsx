import Link from "next/link";
import { Typography } from "../../atoms/Typography";
import { cn } from "../../../lib/utils";

interface CTAButtonProps {
  readonly href: string;
  readonly label: string;
  readonly sublabel?: string;
  readonly isExternal?: boolean;
  readonly className?: string;
}

export function CTAButton({
  href,
  label,
  sublabel,
  isExternal = false,
  className,
}: CTAButtonProps): React.ReactElement {
  const content = (
    <div className="flex flex-col items-center gap-1">
      <span className="font-semibold text-lg">{label}</span>
      {sublabel && (
        <Typography variant="small" className="opacity-90">
          {sublabel}
        </Typography>
      )}
    </div>
  );

  const buttonClassName = cn(
    "inline-flex items-center justify-center",
    "px-8 py-4 min-w-[200px]",
    "btn-gradient text-white",
    "rounded-full",
    "transition-all duration-300",
    "hover:scale-105",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wedding-cyan focus-visible:ring-offset-2",
    "shadow-lg hover:shadow-xl",
    className
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={buttonClassName}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={buttonClassName}>
      {content}
    </Link>
  );
}
