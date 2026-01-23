import { WeddingImage } from "../../atoms/WeddingImage";
import { Typography } from "../../atoms/Typography";
import { WeddingLink } from "../../atoms/WeddingLink";
import { cn } from "../../../lib/utils";

interface AccommodationCardProps {
  readonly name: string;
  readonly description?: string;
  readonly imageSrc: string;
  readonly distance?: string;
  readonly websiteUrl?: string;
  readonly className?: string;
}

export function AccommodationCard({
  name,
  description,
  imageSrc,
  distance,
  websiteUrl,
  className,
}: AccommodationCardProps): React.ReactElement {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-lg bg-white border border-wedding-neutral-200 shadow-sm hover:shadow-md transition-shadow duration-300",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <WeddingImage
          src={imageSrc}
          alt={name}
          fill
          className="transition-transform duration-300 group-hover:scale-105"
          containerClassName="h-full"
        />
      </div>
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-start gap-2">
          <Typography variant="h4" className="text-lg">
            {name}
          </Typography>
          {distance && (
            <Typography
              variant="small"
              className="text-wedding-coral-600 font-medium whitespace-nowrap"
            >
              {distance}
            </Typography>
          )}
        </div>
        {description && (
          <Typography variant="body" color="muted" className="line-clamp-2">
            {description}
          </Typography>
        )}
        {websiteUrl && (
          <WeddingLink
            href={websiteUrl}
            isExternal
            variant="accent"
            ariaLabel={`Visit ${name} website`}
          >
            Visit website
          </WeddingLink>
        )}
      </div>
    </article>
  );
}
