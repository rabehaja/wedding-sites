import { Navbar, Footer } from "@repo/ui/organisms";
import { Typography, BackToTop } from "@repo/ui/atoms";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { locales } from "../../../../i18n/config";
import { getNavItems } from "../../../../lib/navigation";
import {
  REGION_SLUG_MAP,
  REGION_IMAGES,
  type RegionKey,
} from "../data/regions";

const REGION_SLUGS = Object.keys(REGION_SLUG_MAP);

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    REGION_SLUGS.map((region) => ({ locale, region }))
  );
}

const TRANSLATION_KEY_MAP: Record<
  RegionKey,
  { title: string; description: string }
> = {
  north: { title: "regionNorthTitle", description: "regionNorthDescription" },
  south: { title: "regionSouthTitle", description: "regionSouthDescription" },
  east: { title: "regionEastTitle", description: "regionEastDescription" },
  west: { title: "regionWestTitle", description: "regionWestDescription" },
  center: {
    title: "regionCenterTitle",
    description: "regionCenterDescription",
  },
};

interface RegionPageProps {
  readonly params: Promise<{ locale: string; region: string }>;
}

export default async function RegionPage({
  params,
}: RegionPageProps): Promise<React.ReactElement> {
  const { locale, region } = await params;
  setRequestLocale(locale);

  const regionKey = REGION_SLUG_MAP[region];
  if (!regionKey) {
    notFound();
  }

  const t = await getTranslations("planYourTrip");
  const tNav = await getTranslations("nav");
  const tFooter = await getTranslations("footer");
  const tRegionPage = await getTranslations("regionPage");

  const navItems = getNavItems(locale, tNav);
  const keys = TRANSLATION_KEY_MAP[regionKey];
  const title = t(keys.title);
  const description = t(keys.description);
  const images = REGION_IMAGES[regionKey];
  const heroImage = images[0]!;

  return (
    <>
      <Navbar
        navItems={navItems}
        rsvpItem={{ href: `/${locale}/rsvp`, label: tNav("rsvp") }}
      />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="relative h-[50vh] min-h-[400px] md:h-[60vh]">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
              <h1 className="font-thin-serif text-4xl md:text-6xl lg:text-7xl text-white">
                {title}
              </h1>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl mx-auto px-4">
            <Typography
              variant="bodyLarge"
              color="muted"
              className="text-lg md:text-xl leading-relaxed"
            >
              {description}
            </Typography>

            <div className="mt-10">
              <Link
                href={`/${locale}/plan-your-trip#map`}
                className="inline-flex items-center gap-2 text-wedding-coral-500 hover:text-wedding-coral-600 font-medium transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                {tRegionPage("backToMap")}
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 md:py-24 bg-wedding-purple-100">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <Typography variant="h3" className="font-serif mb-3">
                {tRegionPage("galleryTitle")}
              </Typography>
              <div className="h-px w-16 bg-wedding-coral-400 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div
                  key={image.src}
                  className={`relative overflow-hidden rounded-2xl ${
                    index === 0 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                >
                  <div
                    className={`relative ${
                      index === 0
                        ? "h-[300px] md:h-[500px]"
                        : "h-[250px] md:h-[240px]"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes={
                        index === 0
                          ? "(max-width: 768px) 100vw, 66vw"
                          : "(max-width: 768px) 100vw, 33vw"
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer
        weddingDate="November 14, 2026"
        navItems={[
          { href: `/${locale}`, label: tFooter("home") },
          {
            href: `/${locale}/essential-travel-tips`,
            label: tFooter("essentialTravelTips"),
          },
          {
            href: `/${locale}/plan-your-trip`,
            label: tFooter("planATour"),
          },
        ]}
      />
      <BackToTop />
    </>
  );
}
