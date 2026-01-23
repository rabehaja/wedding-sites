"use client";

import { useState } from "react";
import { Typography } from "../../atoms/Typography";
import { WeddingButton } from "../../atoms/WeddingButton";
import { cn } from "../../../lib/utils";

interface RoutePlannerProps {
  readonly destinationName: string;
  readonly destinationAddress: string;
  readonly className?: string;
}

function MapIcon(): React.ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function DirectionsIcon(): React.ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 11h18M15 7l4 4-4 4" />
    </svg>
  );
}

function ExternalLinkIcon(): React.ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15,3 21,3 21,9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export function RoutePlanner({
  destinationName,
  destinationAddress,
  className,
}: RoutePlannerProps): React.ReactElement {
  const [origin, setOrigin] = useState("");

  const encodedDestination = encodeURIComponent(destinationAddress);

  const handleGetDirections = (): void => {
    const encodedOrigin = encodeURIComponent(origin.trim());
    const url = origin.trim()
      ? `https://www.google.com/maps/dir/?api=1&origin=${encodedOrigin}&destination=${encodedDestination}`
      : `https://www.google.com/maps/dir/?api=1&destination=${encodedDestination}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleOpenInMaps = (): void => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodedDestination}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={cn(
        "bg-white rounded-xl shadow-md border border-wedding-neutral-200 p-6 md:p-8",
        className
      )}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-wedding-coral-100 rounded-full">
          <MapIcon />
        </div>
        <div>
          <Typography variant="h4" className="text-wedding-neutral-700">
            Plan Your Route
          </Typography>
          <Typography variant="small" color="muted">
            to {destinationName}
          </Typography>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="origin-input"
            className="block text-sm font-medium text-wedding-neutral-600 mb-2"
          >
            Your starting location
          </label>
          <input
            id="origin-input"
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            placeholder="Enter your address or city"
            className="w-full px-4 py-3 border border-wedding-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-purple-500 focus:border-transparent transition-all"
          />
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <WeddingButton
            variant="primary"
            onClick={handleGetDirections}
            className="flex-1 flex items-center justify-center gap-2"
          >
            <DirectionsIcon />
            Get Directions
          </WeddingButton>

          <WeddingButton
            variant="secondary"
            onClick={handleOpenInMaps}
            className="flex-1 flex items-center justify-center gap-2"
          >
            <ExternalLinkIcon />
            Open in Google Maps
          </WeddingButton>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-wedding-neutral-200">
        <Typography variant="small" color="muted" className="text-center">
          {destinationAddress}
        </Typography>
      </div>
    </div>
  );
}
