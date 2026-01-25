"use client";

import { Navbar, Footer, PageHero } from "@repo/ui/organisms";
import { Typography, BackToTop, Countdown } from "@repo/ui/atoms";
import { Newsletter } from "@repo/ui/molecules";
import { useTranslations } from "next-intl";

export default function MadagascarPage(): React.ReactElement {
  const t = useTranslations("madagascar");

  // November 14th, 2026 - Madagascar wedding date
  const madagascarWeddingDate = new Date("2026-11-14T15:00:00");

  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          title={t("title")}
          subtitle={t("subtitle")}
          shape="wave"
        />

        {/* Countdown Section */}
        <section className="py-16 bg-gradient-to-b from-white to-wedding-neutral-50">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            {/* Decorative element */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-wedding-coral-300" />
              <span className="text-wedding-coral-400 text-2xl">&#9825;</span>
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
            <Countdown targetDate={madagascarWeddingDate} />
          </div>
        </section>

        {/* Coming Soon Message */}
        <section className="py-20 bg-wedding-coral-50/40">
          <div className="container max-w-3xl mx-auto px-4 text-center">
            <Typography
              variant="h2"
              className="font-script text-6xl md:text-7xl text-wedding-coral-600 mb-6"
            >
              {t("comingSoon")}
            </Typography>
            <Typography
              variant="body"
              color="muted"
              className="text-lg leading-relaxed max-w-2xl mx-auto"
            >
              {t("comingSoonText")}
            </Typography>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-wedding-purple-100/30">
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
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
