import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "../../../lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface WeddingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
  readonly fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-wedding-coral-400 text-white hover:bg-wedding-coral-500 focus-visible:ring-wedding-coral-400",
  secondary:
    "bg-transparent border-2 border-wedding-purple-500 text-wedding-purple-500 hover:bg-wedding-purple-50 focus-visible:ring-wedding-purple-500",
  ghost:
    "bg-transparent text-wedding-neutral-700 hover:bg-wedding-neutral-100 focus-visible:ring-wedding-neutral-400",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const WeddingButton = forwardRef<HTMLButtonElement, WeddingButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      className,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold rounded-full transition-colors duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && "w-full",
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

WeddingButton.displayName = "WeddingButton";
