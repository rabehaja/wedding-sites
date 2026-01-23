"use client";

import { WeddingImage } from "../../atoms/WeddingImage";
import { cn } from "../../../lib/utils";

interface HeroSectionProps {
  readonly coupleNames: string;
  readonly tagline?: string;
  readonly date: {
    readonly day: number;
    readonly month: string;
    readonly year: number;
  };
  readonly location: string;
  readonly imageSrc: string;
  readonly ctaHref?: string;
  readonly ctaLabel?: string;
  readonly ctaSublabel?: string;
  readonly className?: string;
}

export function HeroSection({
  coupleNames,
  date,
  location,
  imageSrc,
  className,
}: HeroSectionProps): React.ReactElement {
  return (
    <section
      className={cn("relative min-h-screen bg-wedding-coral overflow-hidden", className)}
      aria-label="Wedding hero section"
    >
      {/* Decorative floral image - top right */}
      <img
        src="/images/floral-decoration.png"
        alt=""
        className="absolute -top-10 right-0 w-64 md:w-80 lg:w-96 h-auto z-20 -rotate-50"
        aria-hidden="true"
      />

      {/* SVG clipPath definitions */}
      <svg width="0" height="0" className="absolute">
        <defs>
          {/* Left container: quarter-circle cutout in top-right corner */}
          <clipPath id="leftClip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 0,0 Q 1,0 1,1 L 1,1 L 0,1 Z" />
          </clipPath>
          {/* Right container: quarter-circle cutout in top-left corner */}
          <clipPath id="rightClip" clipPathUnits="objectBoundingBox">
            <path d="M 1,0 L 1,0 L 1,1 L 0,1 L 0,1 Q 0,0 1,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Main container with two overlapping rectangles */}
      <div className="relative w-full h-screen flex items-center">
        {/* Centered text overlay */}
        <div className="absolute top-[70px] md:top-[80px] left-0 right-0 flex justify-center z-30 pointer-events-none">
          <div className="text-center text-white [font-kerning:normal] relative">
            <p
              className="text-[6rem] md:text-[8rem] lg:text-[10rem] uppercase tracking-widest leading-[0.75] font-light text-wedding-purple"
              style={{
                fontFamily: "var(--font-thin-serif)",
              }}
            >
              WE
            </p>
            <p className="font-script text-6xl md:text-7xl lg:text-8xl font-medium absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/4 whitespace-nowrap">
              are getting married
            </p>
          </div>
        </div>

        {/* Left container - Image with quarter-circle cutout in top-right corner */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[55%] h-[70%] z-10"
          style={{
            clipPath: "url(#leftClip)",
          }}
        >
          <div className="relative w-full h-full overflow-hidden">
            <WeddingImage
              src={imageSrc}
              alt="Couple photo"
              fill
              priority
              className="object-cover object-center"
              containerClassName="w-full h-full"
            />
          </div>
        </div>

        {/* Right container - Purple background with quarter-circle cutout in top-left corner */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] h-[70%] bg-wedding-purple"
          style={{
            clipPath: "url(#rightClip)",
          }}
        >
          {/* Content inside purple container */}
          <div className="flex flex-col items-center justify-center h-full pl-[20%] pr-8 text-center">
            {/* Tagline */}
            <p className="font-script text-2xl md:text-3xl lg:text-4xl text-white mb-4">
              Join us for our wedding celebrations
            </p>

            {/* Couple Names */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-wider uppercase mb-8">
              {coupleNames}
            </h1>

            {/* Date display */}
            <div className="flex flex-col items-center text-white mb-6">
              <span className="font-script text-2xl md:text-3xl lg:text-4xl">
                {date.month.toLowerCase()}
              </span>
              <span className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-none">
                {date.day}
              </span>
              <span className="font-serif text-3xl md:text-4xl lg:text-5xl">
                {date.year}
              </span>
            </div>

            {/* Location */}
            <p className="font-serif text-lg md:text-xl text-white/90 tracking-wide">
              {location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
