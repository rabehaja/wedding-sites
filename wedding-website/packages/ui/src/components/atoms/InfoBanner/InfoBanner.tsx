import { cn } from "../../../lib/utils";

interface InfoBannerProps {
  readonly title: string;
  readonly description: string;
  readonly variant?: "info" | "warning";
  readonly className?: string;
}

const variantStyles = {
  info: {
    container: "bg-wedding-purple-50 border-l-4 border-wedding-purple-400",
    icon: "text-wedding-purple-500",
    title: "text-wedding-purple-700",
  },
  warning: {
    container: "bg-wedding-coral-50 border-l-4 border-wedding-coral-400",
    icon: "text-wedding-coral-500",
    title: "text-wedding-coral-700",
  },
};

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

export function InfoBanner({
  title,
  description,
  variant = "info",
  className,
}: InfoBannerProps): React.ReactElement {
  const styles = variantStyles[variant];

  return (
    <div
      className={cn(
        "rounded-lg p-4",
        styles.container,
        className
      )}
      role="alert"
    >
      <div className="flex items-start gap-3">
        <InfoIcon className={cn("w-5 h-5 flex-shrink-0 mt-0.5", styles.icon)} />
        <div>
          <p className={cn("font-semibold text-sm", styles.title)}>
            {title}
          </p>
          <p className="text-sm text-wedding-neutral-600 mt-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
