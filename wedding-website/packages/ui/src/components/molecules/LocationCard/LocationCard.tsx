import { Typography } from "../../atoms/Typography";
import { WeddingLink } from "../../atoms/WeddingLink";
import { cn } from "../../../lib/utils";

interface LocationCardProps {
  readonly name: string;
  readonly address: string;
  readonly city: string;
  readonly country: string;
  readonly mapUrl?: string;
  readonly className?: string;
}

function MapPinIcon(): React.ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-wedding-coral-600"
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function LocationCard({
  name,
  address,
  city,
  country,
  mapUrl,
  className,
}: LocationCardProps): React.ReactElement {
  return (
    <div
      className={cn(
        "flex gap-4 p-6 bg-wedding-neutral-50 rounded-lg border border-wedding-neutral-200",
        className
      )}
    >
      <div className="flex-shrink-0 mt-1">
        <MapPinIcon />
      </div>
      <div className="flex flex-col gap-2">
        <Typography variant="h4" className="text-wedding-neutral-700">
          {name}
        </Typography>
        <address className="not-italic">
          <Typography variant="body" color="muted">
            {address}
          </Typography>
          <Typography variant="body" color="muted">
            {city}, {country}
          </Typography>
        </address>
        {mapUrl && (
          <WeddingLink href={mapUrl} isExternal variant="accent" ariaLabel={`View ${name} on map`}>
            View on map
          </WeddingLink>
        )}
      </div>
    </div>
  );
}
