import Image from "next/image";
import { cn } from "../../../lib/utils";

type ImageFit = "cover" | "contain" | "fill";
type ImageRadius = "none" | "sm" | "md" | "lg" | "full";

interface WeddingImageProps {
  readonly src: string;
  readonly alt: string;
  readonly width?: number;
  readonly height?: number;
  readonly fill?: boolean;
  readonly priority?: boolean;
  readonly fit?: ImageFit;
  readonly radius?: ImageRadius;
  readonly className?: string;
  readonly containerClassName?: string;
}

const fitStyles: Record<ImageFit, string> = {
  cover: "object-cover",
  contain: "object-contain",
  fill: "object-fill",
};

const radiusStyles: Record<ImageRadius, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

export function WeddingImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  fit = "cover",
  radius = "none",
  className,
  containerClassName,
}: WeddingImageProps): React.ReactElement {
  if (fill) {
    return (
      <div className={cn("relative overflow-hidden", containerClassName)}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={cn(fitStyles[fit], radiusStyles[radius], className)}
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 400}
      height={height ?? 300}
      priority={priority}
      className={cn(fitStyles[fit], radiusStyles[radius], className)}
    />
  );
}
