"use client";

import { cn } from "../../../lib/utils";

interface VideoHeroProps {
  readonly videoSrc: string;
  readonly posterSrc?: string;
  readonly className?: string;
}

export function VideoHero({
  videoSrc,
  posterSrc,
  className,
}: VideoHeroProps): React.ReactElement {
  return (
    <section
      className={cn(
        "relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden",
        className
      )}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        poster={posterSrc}
        muted
        autoPlay
        loop
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Dark overlay for better contrast */}
      <div
        className="absolute inset-0 bg-black/20 pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
