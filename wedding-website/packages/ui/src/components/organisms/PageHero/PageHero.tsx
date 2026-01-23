import { SectionHeader } from "../../molecules/SectionHeader";
import { cn } from "../../../lib/utils";

type ShapeVariant = "wave" | "curve" | "diagonal" | "peaks" | "scallop";
type HeightVariant = "sm" | "md" | "lg";

interface PageHeroProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly shape?: ShapeVariant;
  readonly height?: HeightVariant;
  readonly invertColors?: boolean;
  readonly className?: string;
}

const shapeDefinitions: Record<ShapeVariant, string> = {
  wave: "M0,0 L0,0.75 Q0.25,0.95 0.5,0.75 T1,0.75 L1,0 Z",
  curve: "M0,0 L0,0.65 Q0.5,1 1,0.65 L1,0 Z",
  diagonal: "M0,0 L0,0.7 L1,1 L1,0 Z",
  peaks: "M0,0 L0,0.6 L0.2,0.8 L0.4,0.6 L0.6,0.8 L0.8,0.6 L1,0.8 L1,0 Z",
  scallop: "M0,0 L0,0.7 Q0.125,0.9 0.25,0.7 Q0.375,0.9 0.5,0.7 Q0.625,0.9 0.75,0.7 Q0.875,0.9 1,0.7 L1,0 Z",
};

const heightStyles: Record<HeightVariant, string> = {
  sm: "min-h-[180px]",
  md: "min-h-[240px]",
  lg: "min-h-[320px]",
};

const contentPadding: Record<HeightVariant, string> = {
  sm: "pt-8 pb-16",
  md: "pt-12 pb-24",
  lg: "pt-16 pb-32",
};

export function PageHero({
  title,
  subtitle,
  shape = "wave",
  height = "md",
  invertColors = false,
  className,
}: PageHeroProps): React.ReactElement {
  const topColor = invertColors ? "bg-wedding-coral" : "bg-wedding-purple";
  const bottomColor = invertColors ? "bg-wedding-purple" : "bg-wedding-coral";
  const clipId = `pageHeroClip-${shape}-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <section
      className={cn("relative overflow-hidden", heightStyles[height], className)}
    >
      {/* Bottom color layer (visible through the shape cutout) */}
      <div className={cn("absolute inset-0", bottomColor)} aria-hidden="true" />

      {/* Top color layer with clip-path shape */}
      <div
        className={cn("relative", topColor, contentPadding[height])}
        style={{ clipPath: `url(#${clipId})` }}
      >
        {/* SVG clip-path definition */}
        <svg
          width="0"
          height="0"
          className="absolute"
          aria-hidden="true"
        >
          <defs>
            <clipPath id={clipId} clipPathUnits="objectBoundingBox">
              <path d={shapeDefinitions[shape]} />
            </clipPath>
          </defs>
        </svg>

        {/* Content */}
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <SectionHeader
            title={title}
            subtitle={subtitle}
            colorScheme="cream"
            titleClassName="font-thin-serif text-wedding-purple-600"
            subtitleClassName={cn(
              "font-script text-5xl md:text-6xl lg:text-7xl -mt-6 md:-mt-8",
              invertColors ? "text-wedding-cream" : "text-wedding-neutral-700"
            )}
          />
        </div>
      </div>
    </section>
  );
}
