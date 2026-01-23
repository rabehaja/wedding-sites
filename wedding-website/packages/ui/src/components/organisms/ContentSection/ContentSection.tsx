import { Typography } from "../../atoms/Typography";
import { WeddingImage } from "../../atoms/WeddingImage";
import { cn } from "../../../lib/utils";
import { type ReactNode } from "react";

type ContentSectionLayout = "text-only" | "image-left" | "image-right";

interface ContentSectionProps {
  readonly title?: string;
  readonly children: ReactNode;
  readonly imageSrc?: string;
  readonly imageAlt?: string;
  readonly layout?: ContentSectionLayout;
  readonly className?: string;
}

export function ContentSection({
  title,
  children,
  imageSrc,
  imageAlt = "",
  layout = "text-only",
  className,
}: ContentSectionProps): React.ReactElement {
  const hasImage = imageSrc && layout !== "text-only";

  return (
    <section className={cn("py-16", className)}>
      <div className="container mx-auto px-4">
        {layout === "text-only" && (
          <div className="max-w-3xl mx-auto space-y-6">
            {title && (
              <Typography variant="h2" className="text-center">
                {title}
              </Typography>
            )}
            <div className="prose prose-lg max-w-none">{children}</div>
          </div>
        )}

        {hasImage && (
          <div
            className={cn(
              "grid gap-12 items-center",
              "md:grid-cols-2"
            )}
          >
            <div
              className={cn(
                "space-y-6",
                layout === "image-right" ? "md:order-1" : "md:order-2"
              )}
            >
              {title && <Typography variant="h2">{title}</Typography>}
              <div className="space-y-4">{children}</div>
            </div>
            <div
              className={cn(
                "relative aspect-[4/3] rounded-lg overflow-hidden",
                layout === "image-right" ? "md:order-2" : "md:order-1"
              )}
            >
              <WeddingImage
                src={imageSrc}
                alt={imageAlt}
                fill
                radius="lg"
                containerClassName="h-full"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
