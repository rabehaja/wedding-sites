import { Typography } from "../../atoms/Typography";
import { WeddingLink } from "../../atoms/WeddingLink";
import { cn } from "../../../lib/utils";

interface FooterProps {
  readonly coupleNames?: string;
  readonly weddingDate?: string;
  readonly email?: string;
  readonly className?: string;
}

export function Footer({
  coupleNames = "Loic & Wiebke",
  weddingDate = "July 18, 2026",
  email = "weddingloicandwiebke@gmail.com",
  className,
}: FooterProps): React.ReactElement {
  return (
    <footer
      className={cn(
        "relative bg-wedding-neutral-700 text-white py-12 overflow-hidden",
        className
      )}
    >
      {/* Floral decoration - bottom left */}
      <img
        src="/images/floral-decoration.png"
        alt=""
        className="absolute bottom-0 left-0 w-48 md:w-64 lg:w-80 h-auto z-0 rotate-90 "
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <Typography variant="h4" as="p" color="white" className="font-serif">
            {coupleNames}
          </Typography>

          <Typography variant="body" className="text-wedding-neutral-300">
            {weddingDate}
          </Typography>

          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-4 md:gap-8">
            <WeddingLink href="/" variant="nav" className="text-wedding-neutral-200 hover:text-white">
              Home
            </WeddingLink>
            <WeddingLink href="/venue" variant="nav" className="text-wedding-neutral-200 hover:text-white">
              Venue
            </WeddingLink>
            <WeddingLink href="/wedding" variant="nav" className="text-wedding-neutral-200 hover:text-white">
              Wedding
            </WeddingLink>
            <WeddingLink href="/accommodation" variant="nav" className="text-wedding-neutral-200 hover:text-white">
              Accommodation
            </WeddingLink>
          </nav>

          <div className="pt-4 border-t border-wedding-neutral-600 w-full max-w-md">
            <Typography variant="small" className="text-wedding-neutral-400">
              Questions? Contact us at{" "}
              <WeddingLink
                href={`mailto:${email}`}
                isExternal
                className="text-wedding-coral-300 hover:text-wedding-coral-200"
              >
                {email}
              </WeddingLink>
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
