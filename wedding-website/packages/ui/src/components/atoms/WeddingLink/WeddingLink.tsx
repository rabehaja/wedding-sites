import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "../../../lib/utils";

type LinkVariant = "default" | "nav" | "accent";

interface WeddingLinkProps {
  readonly href: string;
  readonly variant?: LinkVariant;
  readonly isActive?: boolean;
  readonly isExternal?: boolean;
  readonly children: ReactNode;
  readonly className?: string;
  readonly ariaLabel?: string;
}

const variantStyles: Record<LinkVariant, string> = {
  default:
    "text-wedding-purple-500 hover:text-wedding-purple-600 underline underline-offset-4",
  nav: "text-wedding-neutral-700 hover:text-wedding-coral-600 font-medium transition-colors duration-200",
  accent:
    "text-wedding-coral-600 hover:text-wedding-coral-500 font-semibold transition-colors duration-200",
};

const activeStyles = "text-wedding-coral-600";

export function WeddingLink({
  href,
  variant = "default",
  isActive = false,
  isExternal = false,
  children,
  className,
  ariaLabel,
}: WeddingLinkProps): React.ReactElement {
  const linkClassName = cn(
    "inline-flex items-center min-h-8 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wedding-purple-500 focus-visible:ring-offset-2 rounded",
    variantStyles[variant],
    isActive && activeStyles,
    className
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={linkClassName}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClassName} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
