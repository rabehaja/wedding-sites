import Image from "next/image";
import { cn } from "../../../lib/utils";

type ImageFit = "cover" | "contain" | "fill";

interface FillImageProps {
  readonly src: string;
  readonly alt: string;
  readonly priority?: boolean;
  readonly fit?: ImageFit;
  readonly className?: string;
  readonly containerClassName?: string;
}

const fitStyles: Record<ImageFit, string> = {
  cover: "object-cover",
  contain: "object-contain",
  fill: "object-fill",
};

export function FillImage({
  src,
  alt,
  priority = false,
  fit = "cover",
  className,
  containerClassName,
}: FillImageProps): React.ReactElement {
  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        // className={cn(fitStyles[fit], className)}
      />
    </div>
  );
}
