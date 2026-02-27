import { Navbar, Footer, PageHero } from "@repo/ui/organisms";
import { BackToTop } from "@repo/ui/atoms";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getNavItems } from "../../../lib/navigation";
import { RSVPForm } from "./components/RSVPForm";

interface RSVPPageProps {
  readonly params: Promise<{ locale: string }>;
}

export default async function RSVPPage({
  params,
}: RSVPPageProps): Promise<React.ReactElement> {
  const { locale } = await params;
  setRequestLocale(locale);
  const tNav = await getTranslations("nav");
  const tFooter = await getTranslations("footer");

  return (
    <>
      <Navbar
        navItems={getNavItems(locale, tNav)}
        rsvpItem={{ href: `/${locale}/rsvp`, label: tNav("rsvp") }}
      />
      <main id="main-content">
        <PageHero
          title="RSVP"
          subtitle="Madagascar · 14 November 2026"
          shape="wave"
        />
        <RSVPForm />
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
