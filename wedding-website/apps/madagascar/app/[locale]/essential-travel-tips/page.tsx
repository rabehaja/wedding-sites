import { Navbar, Footer } from "@repo/ui/organisms";
import { Typography, BackToTop } from "@repo/ui/atoms";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { TravelTipsTabs } from "./components/TravelTipsTabs";
import { PreparationCard } from "./components/PreparationCard";
import { AdvisoryBanner } from "./components/AdvisoryBanner";

interface EssentialTravelTipsPageProps {
  readonly params: Promise<{ locale: string }>;
}

function SunIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function BanknoteIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function RoadIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  );
}

function MedicalIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  );
}

function PassportIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
    </svg>
  );
}

function StampIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
    </svg>
  );
}

function SyringeIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>
  );
}

function PillIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

export default async function EssentialTravelTipsPage({
  params,
}: EssentialTravelTipsPageProps): Promise<React.ReactElement> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("essentialTravelTips");
  const tNav = await getTranslations("nav");
  const tFooter = await getTranslations("footer");

  const travelTips = [
    {
      icon: <SunIcon />,
      title: t("climateTitle"),
      bullets: [t("climateBullet1"), t("climateBullet2"), t("climateBullet3")],
      colorScheme: "coral" as const,
    },
    {
      icon: <BanknoteIcon />,
      title: t("paymentTitle"),
      bullets: [t("paymentBullet1"), t("paymentBullet2"), t("paymentBullet3"), t("paymentBullet4")],
      colorScheme: "purple" as const,
    },
    {
      icon: <HeartIcon />,
      title: t("povertyTitle"),
      bullets: [t("povertyBullet1"), t("povertyBullet2"), t("povertyBullet3")],
      colorScheme: "coral" as const,
    },
    {
      icon: <ShieldIcon />,
      title: t("safetyTitle"),
      bullets: [t("safetyBullet1"), t("safetyBullet2"), t("safetyBullet3"), t("safetyBullet4")],
      colorScheme: "purple" as const,
    },
    {
      icon: <RoadIcon />,
      title: t("infrastructureTitle"),
      bullets: [t("infrastructureBullet1"), t("infrastructureBullet2"), t("infrastructureBullet3"), t("infrastructureBullet4")],
      colorScheme: "coral" as const,
    },
    {
      icon: <MedicalIcon />,
      title: t("healthTitle"),
      bullets: [t("healthBullet1"), t("healthBullet2"), t("healthBullet3"), t("healthBullet4"), t("healthBullet5")],
      colorScheme: "purple" as const,
    },
  ];

  const preparations = [
    {
      icon: <PassportIcon />,
      title: t("passportTitle"),
      description: t("passportDescription"),
    },
    {
      icon: <StampIcon />,
      title: t("visaTitle"),
      description: t("visaDescription"),
    },
    {
      icon: <SyringeIcon />,
      title: t("vaccinationsTitle"),
      description: t("vaccinationsDescription"),
    },
    {
      icon: <PillIcon />,
      title: t("healthPrepTitle"),
      description: t("healthPrepDescription"),
    },
  ];

  const advisoryLinks = [
    {
      href: "https://www.auswaertiges-amt.de/de/reiseundsicherheit/madagaskarsicherheit-207960",
      label: t("advisoryLinkDE"),
    },
    {
      href: "https://www.nederlandwereldwijd.nl/reisadvies/madagaskar",
      label: t("advisoryLinkNL"),
    },
  ];

  return (
    <>
      <Navbar
        navItems={[
          { href: `/${locale}`, label: tNav("home") },
          { href: `/${locale}/essential-travel-tips`, label: tNav("essentialTravelTips") },
          { href: `/${locale}/plan-your-trip`, label: tNav("planATour") },
        ]}
        rsvpItem={{ href: `/${locale}#rsvp`, label: tNav("rsvp") }}
      />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="relative min-h-[320px] md:min-h-[400px] flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-wedding-neutral-50 to-white" />
            <div className="relative z-10 flex flex-col items-center justify-center pt-12 pb-8">
              <h1 className="font-thin-serif text-5xl md:text-7xl lg:text-8xl tracking-[0.2em] text-wedding-coral-500 text-center">
                {t("heroTitle")}
              </h1>
              <p className="font-script text-3xl md:text-5xl lg:text-6xl text-wedding-neutral-600 -mt-2 md:-mt-4">
                {t("heroSubtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* What to expect */}
        <section className="py-16 md:py-24">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <Typography variant="h3" className="font-serif mb-3">
                {t.rich("whatToExpectTitle", {
                  accent: (chunks) => (
                    <span className="font-script text-5xl md:text-6xl">{chunks}</span>
                  ),
                })}
              </Typography>
              <div className="h-px w-16 bg-wedding-coral-400 mx-auto mb-8" />
              <Typography variant="bodyLarge" color="muted" className="max-w-3xl mx-auto">
                {t("whatToExpectIntro")}
              </Typography>
            </div>

            <div className="mt-12">
              <TravelTipsTabs tips={travelTips} />
            </div>
          </div>
        </section>

        {/* Inform yourself advisory banner */}
        <AdvisoryBanner
          title={t.rich("informTitle", {
            accent: (chunks) => (
              <span className="font-script text-4xl md:text-5xl">{chunks}</span>
            ),
          })}
          subtitle={t("informSubtitle")}
          description={t("informDescription")}
          links={advisoryLinks}
        />

        {/* Essential preparations */}
        <section className="py-16 md:py-24">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <Typography variant="h3" className="font-serif mb-3">
                {t.rich("preparationsTitle", {
                  accent: (chunks) => (
                    <span className="font-script text-5xl md:text-6xl">{chunks}</span>
                  ),
                })}
              </Typography>
              <div className="h-px w-16 bg-wedding-coral-400 mx-auto mb-8" />
              <Typography variant="bodyLarge" color="muted" className="max-w-2xl mx-auto">
                {t("preparationsIntro")}
              </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
              {preparations.map((prep) => (
                <PreparationCard
                  key={prep.title}
                  icon={prep.icon}
                  title={prep.title}
                  description={prep.description}
                />
              ))}
            </div>
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
