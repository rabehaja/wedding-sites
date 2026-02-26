import { Navbar, Footer, HeroSection } from "@repo/ui/organisms";
import { Typography, BackToTop, Countdown, InfoBanner } from "@repo/ui/atoms";
import { Newsletter } from "@repo/ui/molecules";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getNavItems } from "../../lib/navigation";

const MADAGASCAR_WEDDING_DATE = new Date("2026-11-14T15:00:00+03:00");

interface HomePageProps {
  readonly params: Promise<{ locale: string }>;
}

export default async function HomePage({
  params,
}: HomePageProps): Promise<React.ReactElement> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const tNav = await getTranslations("nav");
  const tFooter = await getTranslations("footer");

  return (
    <>
      <Navbar
        navItems={getNavItems(locale, tNav)}
        rsvpItem={{ href: "#rsvp", label: tNav("rsvp") }}
      />
      <main id="main-content">
        {/* Hero */}
        <section id="home">
          <HeroSection
            coupleNames="Loic & Wiebke"
            tagline={t("tagline")}
            date={{
              day: 14,
              month: t("month"),
              year: 2026,
            }}
            location={t("location")}
            locationLines={[t("locationLine1"), t("locationLine2")]}
            imageSrc="/images/hero-madagascar.jpg"
          />
        </section>

        {/* Countdown */}
        <section className="py-16 bg-gradient-to-b from-white to-wedding-neutral-50">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-wedding-coral-300" />
              <span className="text-wedding-coral-400 text-2xl" aria-hidden="true">&#9825;</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-wedding-coral-300" />
            </div>

            <Typography variant="h2" className="font-serif mb-8">
              {t.rich("countdown", {
                to: () => (
                  <span className="font-script text-5xl md:text-6xl">
                    {t("to")}
                  </span>
                ),
              })}
            </Typography>
            <Countdown targetDate={MADAGASCAR_WEDDING_DATE} />
          </div>
        </section>

        {/* Invitation — "Do you want to join us?" */}
        <section id="about" className="py-20 bg-wedding-coral-50/40">
          <div className="container max-w-3xl mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <svg
                className="w-24 h-6 text-wedding-coral-300"
                viewBox="0 0 100 24"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M0 12 Q25 12 35 12 Q45 4 50 4 Q55 4 65 12 Q75 12 100 12"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="1"
                />
              </svg>
            </div>

            <Typography
              variant="h2"
              className="font-script text-7xl md:text-8xl lg:text-9xl text-wedding-coral-600 mb-8"
            >
              {t("joinUs")}
            </Typography>
            <Typography
              variant="body"
              color="muted"
              className="text-lg leading-relaxed max-w-2xl mx-auto"
            >
              {t("introText")}
            </Typography>

            <div className="mt-10 flex justify-center items-center gap-4">
              <span className="font-script text-7xl text-wedding-neutral-600">
                Loic
              </span>
              <span className="text-wedding-coral-400 text-3xl">&</span>
              <span className="font-script text-7xl text-wedding-neutral-600">
                Wiebke
              </span>
            </div>

            <div className="flex justify-center mt-8">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-wedding-coral-300 to-transparent" />
            </div>
          </div>
        </section>

        {/* RSVP Call-to-Action */}
        <section id="rsvp" className="py-16 bg-wedding-purple-100/30">
          <div className="container max-w-2xl mx-auto px-4">
            <div className="bg-white rounded-2xl p-10 md:p-12 shadow-sm border-2 border-wedding-purple-300 text-center transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-wedding-purple-50 border-2 border-wedding-purple-200 flex items-center justify-center text-wedding-purple-500">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>

              <Typography variant="h3" className="font-serif mb-4">
                {t("rsvpTitle")}
              </Typography>
              <Typography variant="body" color="muted" className="mb-8 text-lg leading-relaxed">
                {t("rsvpText")}
              </Typography>

              <a
                href="mailto:weddingloicandwiebke@gmail.com?subject=Madagascar%20RSVP"
                className="inline-flex items-center justify-center px-8 py-4 min-w-[200px] btn-gradient text-white rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wedding-purple-500 focus-visible:ring-offset-2"
              >
                {t("rsvpButton")}
              </a>
            </div>
          </div>
        </section>

        {/* Trip Preparation Intro */}
        <section className="py-12 bg-wedding-neutral-50">
          <div className="container max-w-2xl mx-auto px-4 text-center">
            <Typography variant="body" color="muted" className="text-lg leading-relaxed italic">
              {t("tripInfoIntro")}
            </Typography>
          </div>
        </section>

        {/* Where to Stay */}
        <section id="stay" className="py-20">
          <div className="container max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <Typography variant="h3" className="font-serif mb-3">
                {t.rich("whereToStayTitle", {
                  to: () => (
                    <span className="font-script text-6xl">
                      {t("whereToStayTo")}
                    </span>
                  ),
                })}
              </Typography>
              <div className="h-px w-16 bg-wedding-coral-400 mx-auto" />
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-wedding-neutral-100 transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-wedding-coral-50 flex items-center justify-center text-wedding-coral-500 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>

              <Typography variant="body" color="muted" className="text-lg leading-relaxed mb-6">
                {t("accommodationText")}
              </Typography>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-wedding-coral-400 mt-1.5 flex-shrink-0" aria-hidden="true">&#9679;</span>
                  <Typography variant="body" color="muted">
                    {t("accommodationDates")}
                  </Typography>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-wedding-coral-400 mt-1.5 flex-shrink-0" aria-hidden="true">&#9679;</span>
                  <Typography variant="body" color="muted">
                    {t("accommodationTransfer")}
                  </Typography>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-wedding-coral-400 mt-1.5 flex-shrink-0" aria-hidden="true">&#9679;</span>
                  <Typography variant="body" color="muted">
                    {t("accommodationOptions")}
                  </Typography>
                </div>
              </div>

              <a
                href="https://www.booking.com/searchresults.html?ss=Antananarivo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-wedding-coral-500 text-white rounded-full text-sm font-medium hover:bg-wedding-coral-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wedding-coral-500 focus-visible:ring-offset-2"
              >
                {t("searchBooking")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Travel & Tours */}
        <section id="travel" className="py-20 bg-wedding-purple/5">
          <div className="container max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <Typography variant="h3" className="font-serif mb-3">
                {t("travelTitle")}
              </Typography>
              <div className="h-px w-16 bg-wedding-coral-400 mx-auto" />
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-wedding-neutral-100 transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-wedding-purple-50 flex items-center justify-center text-wedding-purple-500 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>

              <Typography variant="body" color="muted" className="text-lg leading-relaxed mb-6">
                {t("travelText")}
              </Typography>

              <InfoBanner
                title={t("deadlineTitle")}
                description={t("deadlineText")}
                variant="warning"
                className="mb-8"
              />

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-wedding-purple-400 mt-1.5 flex-shrink-0" aria-hidden="true">&#9679;</span>
                  <Typography variant="body" color="muted">
                    {t("tourOperator")}
                  </Typography>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-wedding-purple-400 mt-1.5 flex-shrink-0" aria-hidden="true">&#9679;</span>
                  <Typography variant="body" color="muted">
                    {t("tourWithGuests")}
                  </Typography>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-wedding-purple-400 mt-1.5 flex-shrink-0" aria-hidden="true">&#9679;</span>
                  <Typography variant="body" color="muted">
                    {t("bookQuickly")}
                  </Typography>
                </div>
              </div>

              <a
                href="mailto:weddingloicandwiebke@gmail.com?subject=Madagascar%20Tours"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-wedding-purple-500 text-wedding-purple-500 rounded-full text-sm font-medium hover:bg-wedding-purple-500 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wedding-purple-500 focus-visible:ring-offset-2"
              >
                {t("getInTouch")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-wedding-neutral-50">
          <div className="container max-w-xl mx-auto px-4">
            <Newsletter
              title={t("newsletterTitle")}
              subtitle={t("newsletterSubtitle")}
              placeholder={t("emailPlaceholder")}
              buttonText={t("subscribe")}
              successMessage={t("subscribeSuccess")}
              errorMessage={t("subscribeError")}
            />
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container max-w-2xl mx-auto px-4 text-center">
            <Typography variant="h3" className="font-serif mb-4">
              {t("questions")}
            </Typography>
            <Typography variant="body" color="muted" className="mb-6">
              {t("questionsText")}
            </Typography>
            <a
              href="mailto:weddingloicandwiebke@gmail.com"
              className="inline-block text-wedding-coral-600 hover:text-wedding-coral-500 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wedding-coral-500 focus-visible:ring-offset-2 rounded"
            >
              weddingloicandwiebke@gmail.com
            </a>
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
