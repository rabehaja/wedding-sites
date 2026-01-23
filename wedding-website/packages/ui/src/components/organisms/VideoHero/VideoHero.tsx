"use client";

import { useEffect, useRef } from "react";
import "plyr/dist/plyr.css";
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<unknown>(null);

  useEffect(() => {
    // Dynamic import to avoid SSR issues with Plyr accessing document
    const initPlyr = async () => {
      if (videoRef.current && !playerRef.current) {
        const Plyr = (await import("plyr")).default;

        playerRef.current = new Plyr(videoRef.current, {
          controls: [],
          muted: true,
          autoplay: true,
          loop: { active: true },
          clickToPlay: false,
          hideControls: true,
          fullscreen: { enabled: false },
        });
      }
    };

    initPlyr();

    return () => {
      if (playerRef.current) {
        (playerRef.current as { destroy: () => void }).destroy();
      }
    };
  }, []);

  return (
    <section
      className={cn(
        "relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden",
        className
      )}
    >
      {/* Video container */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster={posterSrc}
          muted
          autoPlay
          loop
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay for better contrast */}
      <div
        className="absolute inset-0 bg-black/20 pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
