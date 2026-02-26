import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AdvisoryBannerProps {
  readonly title: ReactNode;
  readonly subtitle: string;
  readonly description: string;
  readonly links: readonly { href: string; label: string }[];
  readonly className?: string;
}

export function AdvisoryBanner({
  title,
  subtitle,
  description,
  links,
  className,
}: AdvisoryBannerProps): React.ReactElement {
  return (
    <section
      className={cn(
        "py-16 md:py-20 relative overflow-hidden",
        className
      )}
      style={{ background: "linear-gradient(135deg, #5b2875 0%, #7a3060 50%, #5b2875 100%)" }}
    >
      <div className="container max-w-4xl mx-auto px-4 text-center relative z-10">
        <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-4">
          {title}
        </h3>
        <p className="font-sans text-lg md:text-xl font-semibold text-white mb-3">
          {subtitle}
        </p>
        <p className="font-sans text-base md:text-lg text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/15 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/25 hover:bg-white/25 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#5b2875]"
            >
              {link.label}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
