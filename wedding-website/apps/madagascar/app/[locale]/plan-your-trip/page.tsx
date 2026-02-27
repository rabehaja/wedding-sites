import { Navbar, Footer } from "@repo/ui/organisms";
import { Typography, BackToTop, InfoBanner } from "@repo/ui/atoms";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { InteractiveMap } from "./components/InteractiveMap";
import { REGION_IMAGES, REGION_KEY_TO_SLUG } from "./data/regions";
import { getNavItems } from "../../../lib/navigation";

interface PlanYourTripPageProps {
  readonly params: Promise<{ locale: string }>;
}

export default async function PlanYourTripPage({
  params,
}: PlanYourTripPageProps): Promise<React.ReactElement> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("planYourTrip");
  const tNav = await getTranslations("nav");
  const tFooter = await getTranslations("footer");
  const tRegionPage = await getTranslations("regionPage");

  const navItems = getNavItems(locale, tNav);

  const regionKeys = ["north", "west", "center", "east", "south"] as const;
  const regionTitleKeys = {
    north: "regionNorthTitle",
    west: "regionWestTitle",
    center: "regionCenterTitle",
    east: "regionEastTitle",
    south: "regionSouthTitle",
  } as const;
  const regionDescKeys = {
    north: "regionNorthDescription",
    west: "regionWestDescription",
    center: "regionCenterDescription",
    east: "regionEastDescription",
    south: "regionSouthDescription",
  } as const;

  const regions = regionKeys.map((key) => ({
    key,
    title: t(regionTitleKeys[key]),
    description: t(regionDescKeys[key]),
    images: REGION_IMAGES[key],
    href: `/${locale}/plan-your-trip/${REGION_KEY_TO_SLUG[key]}`,
  }));

  return (
    <>
      <Navbar
        navItems={navItems}
        rsvpItem={{ href: `/${locale}/rsvp`, label: tNav("rsvp") }}
      />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="relative h-[70vh] min-h-[500px] md:h-[80vh]">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-wedding-neutral-50 to-white" />

            {/* Title area */}
            <div className="relative z-10 flex flex-col items-center justify-center pt-12 pb-4">
              <h1 className="font-thin-serif text-5xl md:text-7xl lg:text-8xl tracking-[0.2em] text-wedding-coral-500 text-center">
                {t("heroTitle")}
              </h1>
              <p className="font-script text-3xl md:text-5xl lg:text-6xl text-wedding-neutral-600 -mt-2 md:-mt-4">
                {t("heroSubtitle")}
              </p>
            </div>

            {/* Hero image */}
            <div className="relative w-full h-[calc(100%-160px)] md:h-[calc(100%-200px)]">
              <Image
                src="/images/plan_your_trip_banner_final.png"
                alt="Lemurs in Madagascar"
                fill
                className="object-cover object-top md:object-[center_25%]"
                priority
                sizes="100vw"
              />
            </div>
          </div>
        </section>

        {/* Plan your Adventure */}
        <section className="py-16 md:py-24">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <Typography variant="h3" className="font-serif mb-3">
                {t.rich("adventureTitle", {
                  accent: (chunks) => (
                    <span className="font-script text-6xl md:text-7xl">
                      {chunks}
                    </span>
                  ),
                })}
              </Typography>
              <div className="h-px w-16 bg-wedding-coral-400 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 — Why Visit Madagascar? */}
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-wedding-neutral-100">
                <div className="w-12 h-12 rounded-full bg-wedding-purple-50 flex items-center justify-center text-wedding-purple-500 mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <Typography variant="h3" className="font-serif mb-4">
                  {t("card1Title")}
                </Typography>
                <Typography variant="body" color="muted" className="text-lg leading-relaxed mb-6">
                  {t("paragraph1")}
                </Typography>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-wedding-purple-400 mt-1.5 flex-shrink-0" aria-hidden="true">&#9679;</span>
                    <Typography variant="body" color="muted">
                      {t("card1Bullet1")}
                    </Typography>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-wedding-purple-400 mt-1.5 flex-shrink-0" aria-hidden="true">&#9679;</span>
                    <Typography variant="body" color="muted">
                      {t("card1Bullet2")}
                    </Typography>
                  </div>
                </div>
              </div>

              {/* Card 2 — Travel Safely */}
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-wedding-neutral-100">
                <div className="w-12 h-12 rounded-full bg-wedding-purple-50 flex items-center justify-center text-wedding-purple-500 mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <Typography variant="h3" className="font-serif mb-4">
                  {t("card2Title")}
                </Typography>
                <Typography variant="body" color="muted" className="text-lg leading-relaxed mb-6">
                  {t("paragraph2")}
                </Typography>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-wedding-purple-400 mt-1.5 flex-shrink-0" aria-hidden="true">&#9679;</span>
                    <Typography variant="body" color="muted">
                      {t("card2Bullet1")}
                    </Typography>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-wedding-purple-400 mt-1.5 flex-shrink-0" aria-hidden="true">&#9679;</span>
                    <Typography variant="body" color="muted">
                      {t("card2Bullet2")}
                    </Typography>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-wedding-purple-400 mt-1.5 flex-shrink-0" aria-hidden="true">&#9679;</span>
                    <Typography variant="body" color="muted">
                      {t("card2Bullet3")}
                    </Typography>
                  </div>
                </div>
              </div>

              {/* Card 3 — Book Your Tour */}
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-wedding-neutral-100">
                <div className="w-12 h-12 rounded-full bg-wedding-coral-50 flex items-center justify-center text-wedding-coral-500 mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <Typography variant="h3" className="font-serif mb-4">
                  {t("card3Title")}
                </Typography>
                <InfoBanner
                  title={t("card3Deadline")}
                  description={t("card3DeadlineText")}
                  variant="warning"
                  className="mb-6"
                />
                <Typography variant="body" color="muted" className="text-lg leading-relaxed mb-8">
                  {t("paragraph3")}
                </Typography>
                <a
                  href={`/${locale}/rsvp`}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-wedding-coral-500 text-wedding-coral-500 rounded-full text-sm font-medium hover:bg-wedding-coral-500 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wedding-coral-500 focus-visible:ring-offset-2"
                >
                  {t("card3Cta")}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-wedding-neutral-100">
              <Typography variant="body" color="muted" className="text-lg italic">
                {t("inspirationText")}
              </Typography>
            </div>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section id="map" className="py-16 md:py-24 bg-wedding-purple-100">
          <div className="container max-w-7xl mx-auto px-4">
            <InteractiveMap
              regions={regions}
              mapAlt={t("mapAlt")}
              exploreText={t.rich("exploreMap", {
                accent: (chunks) => (
                  <span className="font-script text-6xl md:text-7xl">
                    {chunks}
                  </span>
                ),
              })}
              hintText={t("mapClickHint")}
              closeLabel={t("closeRegion")}
              learnMoreLabel={tRegionPage("learnMore")}
            />
          </div>
        </section>
      </main>
      <Footer
        weddingDate="November 14, 2026"
        navItems={[
          { href: `/${locale}`, label: tFooter("home") },
          { href: `/${locale}/essential-travel-tips`, label: tFooter("essentialTravelTips") },
          { href: `/${locale}/plan-your-trip`, label: tFooter("planATour") },
        ]}
      />
      <BackToTop />
    </>
  );
}
