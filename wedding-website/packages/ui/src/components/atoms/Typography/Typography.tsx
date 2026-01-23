import { type ElementType, type ReactNode } from "react";
import { cn } from "../../../lib/utils";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body"
  | "bodyLarge"
  | "small"
  | "accent";

type TypographyColor = "default" | "muted" | "purple" | "coral" | "white";

interface TypographyProps {
  readonly variant?: TypographyVariant;
  readonly color?: TypographyColor;
  readonly as?: ElementType;
  readonly children: ReactNode;
  readonly className?: string;
}

const variantStyles: Record<TypographyVariant, string> = {
  h1: "font-serif text-5xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tight",
  h2: "font-serif text-3xl md:text-4xl lg:text-5xl font-normal leading-tight",
  h3: "font-sans text-2xl md:text-3xl font-semibold leading-snug",
  h4: "font-sans text-xl md:text-2xl font-semibold leading-snug",
  body: "font-sans text-base leading-relaxed",
  bodyLarge: "font-sans text-lg leading-relaxed",
  small: "font-sans text-sm leading-normal",
  accent: "font-serif text-xl md:text-2xl font-normal italic",
};

const colorStyles: Record<TypographyColor, string> = {
  default: "text-wedding-neutral-700",
  muted: "text-wedding-neutral-500",
  purple: "text-wedding-purple-500",
  coral: "text-wedding-coral-600",
  white: "text-white",
};

const defaultElements: Record<TypographyVariant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body: "p",
  bodyLarge: "p",
  small: "span",
  accent: "span",
};

export function Typography({
  variant = "body",
  color = "default",
  as,
  children,
  className,
}: TypographyProps): React.ReactElement {
  const Component = as ?? defaultElements[variant];

  return (
    <Component
      className={cn(variantStyles[variant], colorStyles[color], className)}
    >
      {children}
    </Component>
  );
}
