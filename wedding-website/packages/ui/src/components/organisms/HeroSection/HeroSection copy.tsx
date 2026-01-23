"use client";

import { WeddingImage } from "../../atoms/WeddingImage";
import { AspectRatio } from "../../ui/aspect-ratio";
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
      className={cn("relative min-h-screen overflow-hidden", className)}
      aria-label="Wedding hero section"
    >
      {/* Layer 1: Coral background */}
      <div className="absolute inset-0 bg-wedding-coral" aria-hidden="true" />

      {/* Layer 2: Lavender shape - LARGE, from center to right edge */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[60%] h-[75vh]" aria-hidden="true">
        <svg
          viewBox="0 0 600 800"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M80,60 Q250,10 480,50 Q590,90 595,320 Q600,580 500,700 Q320,800 120,750 Q10,700 30,480 Q40,200 80,60 Z"
            fill="#E5C8E8"
          />
        </svg>
      </div>

      {/* Layer 3: Photo - LARGE, on left side, using AspectRatio */}
      <div className="absolute left-4 md:left-8 lg:left-16 top-1/2 -translate-y-1/2 w-[42%] h-[70vh]">
        {/* SVG clip path definition for arch shape */}
        <svg className="absolute" width="0" height="0">
          <defs>
            <clipPath id="photoArchMask" clipPathUnits="objectBoundingBox">
              <path d="M0.08,0.1 Q0.5,0 0.92,0.1 L0.92,0.92 Q0.5,1 0.08,0.92 Z" />
            </clipPath>
          </defs>
        </svg>
        {/* Photo container with AspectRatio and arch mask */}
        <div
          className="relative w-full h-full"
          style={{ clipPath: 'url(#photoArchMask)' }}
        >
          <AspectRatio ratio={3 / 4} className="h-full">
            <WeddingImage
              src={imageSrc}
              alt="Couple photo"
              fill
              priority
              className="object-cover object-center grayscale"
              containerClassName="h-full"
            />
          </AspectRatio>
        </div>
      </div>

      {/* Decorative flower line art - top right */}
      <div className="absolute top-4 right-4 w-40 h-40 md:w-56 md:h-56 z-20" aria-hidden="true">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <g stroke="#FAF8F5" strokeWidth="0.8" fill="none" opacity="0.8">
            {/* Main flower */}
            <g transform="translate(150, 50)">
              <path d="M0,-30 Q10,-15 0,0 Q-10,-15 0,-30" />
              <path d="M0,-30 Q10,-15 0,0 Q-10,-15 0,-30" transform="rotate(45)" />
              <path d="M0,-30 Q10,-15 0,0 Q-10,-15 0,-30" transform="rotate(90)" />
              <path d="M0,-30 Q10,-15 0,0 Q-10,-15 0,-30" transform="rotate(135)" />
              <path d="M0,-30 Q10,-15 0,0 Q-10,-15 0,-30" transform="rotate(180)" />
              <path d="M0,-30 Q10,-15 0,0 Q-10,-15 0,-30" transform="rotate(225)" />
              <path d="M0,-30 Q10,-15 0,0 Q-10,-15 0,-30" transform="rotate(270)" />
              <path d="M0,-30 Q10,-15 0,0 Q-10,-15 0,-30" transform="rotate(315)" />
              <circle cx="0" cy="0" r="6" />
            </g>
            {/* Branch */}
            <path d="M150,50 Q120,80 100,120" strokeWidth="1" />
            <path d="M125,70 Q110,65 95,75" />
            <path d="M110,95 Q125,90 135,100" />
            {/* Second flower */}
            <g transform="translate(100, 120)">
              <path d="M0,-20 Q8,-10 0,0 Q-8,-10 0,-20" />
              <path d="M0,-20 Q8,-10 0,0 Q-8,-10 0,-20" transform="rotate(72)" />
              <path d="M0,-20 Q8,-10 0,0 Q-8,-10 0,-20" transform="rotate(144)" />
              <path d="M0,-20 Q8,-10 0,0 Q-8,-10 0,-20" transform="rotate(216)" />
              <path d="M0,-20 Q8,-10 0,0 Q-8,-10 0,-20" transform="rotate(288)" />
              <circle cx="0" cy="0" r="4" />
            </g>
            {/* Small elements */}
            <path d="M100,120 Q85,145 90,170" strokeWidth="0.8" />
            <circle cx="90" cy="170" r="3" />
          </g>
        </svg>
      </div>

      {/* Layer 4: Text content - positioned with z-index above shapes */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Top section: WE and tagline */}
        <div className="text-center pt-6 md:pt-10">
          {/* WE - Large lavender text */}
          <h1 className="font-serif font-normal text-[7rem] md:text-[10rem] lg:text-[12rem] text-wedding-lavender leading-none tracking-tight">
            WE
          </h1>
          {/* are getting married - white script */}
          <p className="font-script text-2xl md:text-4xl lg:text-5xl text-white -mt-4 md:-mt-8">
            are getting married
          </p>
        </div>

        {/* Middle section: Date and location - positioned on the lavender shape */}
        <div className="flex-1 flex items-center justify-end pr-[8%] md:pr-[12%]">
          <div className="text-center">
            {/* Date display - VERTICAL layout */}
            <div className="flex flex-col items-center text-wedding-purple">
              <span className="font-serif text-6xl md:text-8xl lg:text-9xl leading-none">{date.day}</span>
              <span className="font-script text-3xl md:text-5xl lg:text-6xl -my-1 md:-my-2">
                {date.month.toLowerCase()}
              </span>
              <span className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none">
                {date.year.toString().slice(-2)}
              </span>
            </div>

            {/* Location with "at" in script */}
            <div className="mt-4 md:mt-6">
              <span className="font-script text-xl md:text-2xl lg:text-3xl text-wedding-purple">at</span>
              <p className="font-serif text-sm md:text-base lg:text-lg text-wedding-coral uppercase tracking-widest mt-1">
                {location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section: Couple names - PURPLE serif */}
        <div className="w-full pb-4 md:pb-6">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-wedding-purple text-center tracking-wider uppercase">
            {coupleNames.replace(" & ", "  &  ")}
          </h2>
        </div>
      </div>

      {/* Small decorative flower - bottom left */}
      <div className="absolute bottom-24 left-4 w-10 h-10 md:w-14 md:h-14 z-20" aria-hidden="true">
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <g stroke="#E5C8E8" strokeWidth="0.8" fill="none" opacity="0.7">
            <path d="M30,10 Q38,20 30,30 Q22,20 30,10" />
            <path d="M30,10 Q38,20 30,30 Q22,20 30,10" transform="rotate(72, 30, 30)" />
            <path d="M30,10 Q38,20 30,30 Q22,20 30,10" transform="rotate(144, 30, 30)" />
            <path d="M30,10 Q38,20 30,30 Q22,20 30,10" transform="rotate(216, 30, 30)" />
            <path d="M30,10 Q38,20 30,30 Q22,20 30,10" transform="rotate(288, 30, 30)" />
            <circle cx="30" cy="30" r="4" />
          </g>
        </svg>
      </div>
    </section>
  );
}
