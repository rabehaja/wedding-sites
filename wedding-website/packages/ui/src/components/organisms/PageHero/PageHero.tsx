import { SectionHeader } from "../../molecules/SectionHeader";
import { cn } from "../../../lib/utils";

interface PageHeroProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly className?: string;
}

export function PageHero({
  title,
  subtitle,
  className,
}: PageHeroProps): React.ReactElement {
  return (
    <section className={cn("py-20 bg-wedding-neutral-50", className)}>
      <div className="container max-w-7xl mx-auto px-4">
        <SectionHeader title={title} subtitle={subtitle} />
      </div>
    </section>
  );
}
