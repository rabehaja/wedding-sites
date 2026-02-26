"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";

type RegionKey = "north" | "east" | "center" | "west" | "south";

interface RegionImage {
  readonly src: string;
  readonly alt: string;
}

interface Region {
  readonly key: RegionKey;
  readonly title: string;
  readonly description: string;
  readonly images: readonly RegionImage[];
}

interface InteractiveMapProps {
  readonly regions: readonly Region[];
  readonly mapAlt: string;
  readonly exploreText: React.ReactNode;
  readonly hintText: string;
  readonly closeLabel: string;
}

/**
 * SVG polygon paths for each region of the Madagascar map.
 * Paths trace the actual island coastline on outer edges and use shared
 * internal boundary lines where regions meet.
 *
 * The viewBox is 580x800. The island outline spans roughly:
 *   Top: y≈85  Bottom: y≈715  Left: x≈125  Right: x≈462
 */
const REGION_PATHS: Record<RegionKey, string> = {
  north:
    "M 283,245 L 300,220 L 325,183 L 350,133 L 358,100 Q 380,35 399,35 Q 433,35 473,100 L 480,101 L 510,145 L 528,183 L 530,226 L 525,245 Z",
  east:
    "M 462,245 L 458,290 L 450,325 L 438,360 L 425,395 L 410,425 L 395,455 L 382,480 L 375,500 L 365,500 L 370,245 Z",
  center:
    "M 255,245 L 370,245 L 365,500 L 248,500 Z",
  west:
    "M 125,290 Q 125,245 170,245 L 255,245 L 248,500 L 125,500 Z",
  south:
    "M 130,500 L 128,550 L 130,580 L 135,610 L 142,640 L 150,670 L 160,700 L 172,720 L 185,732 L 200,735 L 220,725 L 240,705 L 260,680 L 280,650 L 300,620 L 325,585 L 345,555 L 385,500 L 248,500 Z",
};

const REGION_LABEL_POSITIONS: Record<RegionKey, { x: number; y: number }> = {
  north: { x: 385, y: 170 },
  east: { x: 418, y: 370 },
  center: { x: 310, y: 370 },
  west: { x: 185, y: 390 },
  south: { x: 255, y: 610 },
};

function ImageSlider({
  images,
}: {
  readonly images: readonly RegionImage[];
}): React.ReactElement {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  return (
    <div className="group relative w-full h-[280px] md:h-[320px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 80vw, 450px"
          />
        </div>
      ))}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            aria-label="Previous image"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            aria-label="Next image"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((image, i) => (
              <div
                key={image.src}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "bg-white scale-125" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function RegionCard({
  region,
}: {
  readonly region: Region;
}): React.ReactElement {
  return (
    <div
      className="rounded-2xl overflow-hidden bg-wedding-coral-500 shadow-2xl"
      role="region"
      aria-label={region.title}
    >
      <div className="px-5 pt-5 pb-3">
        <h3 className="font-thin-serif text-3xl md:text-4xl text-white">
          {region.title}
        </h3>
      </div>

      <ImageSlider images={region.images} />

      <div className="p-5">
        <p className="text-white text-sm md:text-base leading-relaxed">
          {region.description}
        </p>
      </div>
    </div>
  );
}

function CurvedArrowHint({
  text,
}: {
  readonly text: string;
}): React.ReactElement {
  return (
    <div className="absolute -top-2 right-0 translate-x-[calc(50%+1rem)] flex items-start gap-3">
      <svg
        width="80"
        height="70"
        viewBox="0 0 80 70"
        fill="none"
        className="text-wedding-coral-400 flex-shrink-0 mt-2"
      >
        <path
          d="M 72,8 Q 45,5 28,22 Q 12,40 6,58"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 3,50 L 6,60 L 14,55"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <p className="font-script text-5xl xl:text-6xl text-wedding-coral-500 max-w-[280px] leading-tight">
        {text}
      </p>
    </div>
  );
}

function MapSvgOverlay({
  activeRegion,
  getRegion,
  onClick,
  onKeyDown,
}: {
  readonly activeRegion: RegionKey | null;
  readonly getRegion: (key: RegionKey) => Region;
  readonly onClick: (key: RegionKey) => void;
  readonly onKeyDown: (e: React.KeyboardEvent, key: RegionKey) => void;
}): React.ReactElement {
  return (
    <svg
      viewBox="0 0 580 800"
      className="absolute inset-0 w-full h-full"
    >
      {(Object.entries(REGION_PATHS) as [RegionKey, string][]).map(
        ([key, path]) => {
          const isActive = activeRegion === key;
          const label = getRegion(key).title;
          const pos = REGION_LABEL_POSITIONS[key];

          return (
            <g key={key}>
              <path
                d={path}
                fill={isActive ? "rgba(255, 127, 80, 0.4)" : "rgba(255, 127, 80, 0.15)"}
                stroke={isActive ? "rgba(220, 80, 40, 0.8)" : "rgba(220, 80, 40, 0.5)"}
                strokeWidth={isActive ? "3" : "1.5"}
                strokeDasharray={isActive ? "none" : "8 4"}
                className="cursor-pointer transition-all duration-300"
                onClick={() => onClick(key)}
                role="button"
                tabIndex={0}
                aria-label={label}
                onKeyDown={(e) => onKeyDown(e, key)}
              />
              <text
                x={pos.x}
                y={pos.y}
                textAnchor="middle"
                dominantBaseline="central"
                className="pointer-events-none select-none transition-all duration-300"
                fill={isActive ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.6)"}
                fontSize={isActive ? "52" : "42"}
                fontWeight={isActive ? "700" : "600"}
                fontFamily="'Abramo', cursive"
              >
                {label}
              </text>
            </g>
          );
        }
      )}
    </svg>
  );
}

export function InteractiveMap({
  regions,
  mapAlt,
  exploreText,
  hintText,
  closeLabel,
}: InteractiveMapProps): React.ReactElement {
  const [activeRegion, setActiveRegion] = useState<RegionKey | null>(null);

  const handleRegionActivate = useCallback((key: RegionKey) => {
    setActiveRegion(key);
  }, []);

  const handleClose = useCallback(() => {
    setActiveRegion(null);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, key: RegionKey) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleRegionActivate(key);
      } else if (e.key === "Escape") {
        setActiveRegion(null);
      }
    },
    [handleRegionActivate]
  );

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveRegion(null);
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const getRegion = (key: RegionKey): Region =>
    regions.find((r) => r.key === key)!;

  return (
    <div>
      {/* Explore hint */}
      <div className="text-center mb-12">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold leading-snug text-wedding-neutral-700 mb-3">
          {exploreText}
        </h2>
        <div className="h-px w-16 bg-wedding-coral-400 mx-auto" />
      </div>

      {/* Desktop layout: centered map, slides left on click */}
      <div className="hidden lg:block relative min-h-[700px]">
        {/* Map — centered by default, left-aligned when a region is active */}
        <div
          className={`relative transition-all duration-500 ease-out w-[580px] xl:w-[680px] 2xl:w-[750px] ${
            activeRegion ? "mr-auto ml-0" : "mx-auto"
          }`}
        >
          <Image
            src="/images/madagascar_map_transparent.png"
            alt={mapAlt}
            width={580}
            height={800}
            className="w-full h-auto"
            sizes="750px"
          />
          <MapSvgOverlay
            activeRegion={activeRegion}
            getRegion={getRegion}
            onClick={handleRegionActivate}
            onKeyDown={handleKeyDown}
          />

          {/* Curved arrow hint — visible only when no region is selected */}
          <div
            className={`transition-opacity duration-300 ${
              activeRegion ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <CurvedArrowHint text={hintText} />
          </div>
        </div>

        {/* Content panel — slides in from the right */}
        <div
          className={`absolute top-0 right-0 bottom-0 flex items-center w-[42%] transition-all duration-500 ease-out ${
            activeRegion
              ? "translate-x-0 opacity-100"
              : "translate-x-[30%] opacity-0 pointer-events-none"
          }`}
        >
          <div className="relative w-full">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute -top-2 right-0 z-10 w-8 h-8 rounded-full bg-white/90 shadow-md flex items-center justify-center text-wedding-neutral-500 hover:text-wedding-neutral-800 hover:bg-white transition-colors"
              aria-label={closeLabel}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {activeRegion && <RegionCard region={getRegion(activeRegion)} />}
          </div>
        </div>
      </div>

      {/* Mobile/Tablet layout: map on top, cards stacked below */}
      <div className="lg:hidden">
        <div className="relative w-[90%] max-w-[570px] mx-auto mb-10">
          <Image
            src="/images/madagascar_map_transparent.png"
            alt={mapAlt}
            width={580}
            height={800}
            className="w-full h-auto"
            sizes="570px"
          />
          <MapSvgOverlay
            activeRegion={activeRegion}
            getRegion={getRegion}
            onClick={handleRegionActivate}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {regions.map((region) => (
            <div
              key={region.key}
              className={`transition-all duration-300 ${
                activeRegion === region.key
                  ? "ring-2 ring-wedding-coral-400 ring-offset-2 ring-offset-wedding-purple-100 rounded-2xl"
                  : activeRegion
                    ? "opacity-40"
                    : ""
              }`}
            >
              <RegionCard region={region} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
