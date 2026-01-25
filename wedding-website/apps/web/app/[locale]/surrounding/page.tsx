"use client";

import { Navbar, Footer, PageHero } from "@repo/ui/organisms";
import { Typography, BackToTop } from "@repo/ui/atoms";
import { useTranslations } from "next-intl";

export default function SurroundingPage(): React.ReactElement {
  const t = useTranslations("surrounding");

  const activities = [
    {
      name: t("nearbyVillage"),
      description: t("nearbyVillageDesc"),
      imageSrc: "/images/activity-2.png",
      linkText: null,
      url: null,
    },
    {
      name: t("kayaking"),
      description: t("kayakingDesc"),
      imageSrc: "/images/activity-5.png",
      linkText: t("kayakingLink"),
      url: "https://www.adventure-valley.be/en/activities/kayak",
    },
    {
      name: t("cavesHotton"),
      description: t("cavesHottonDesc"),
      imageSrc: "/images/activity-4.png",
      linkText: t("cavesHottonLink"),
      url: "https://grottesdehotton.be/en/home/",
    },
    {
      name: t("treetopParc"),
      description: t("treetopParcDesc"),
      imageSrc: "/images/activity-6.png",
      linkText: t("treetopParcLink"),
      url: "https://www.parcchlorophylle.com/en-GB/",
    },
    {
      name: t("hikingTrips"),
      description: t("hikingTripsDesc"),
      imageSrc: "/images/activity-3.png",
      linkText: t("hikingTripsLink"),
      url: "https://www.alltrails.com/belgium/wallonia/liege",
    },
    {
      name: t("animalParc"),
      description: t("animalParcDesc"),
      imageSrc: "/images/activity-1.png",
      linkText: t("animalParcLink"),
      url: "https://www.parc-gibier-laroche.be/",
    },
  ];

  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          title={t("title")}
          subtitle={t("subtitle")}
          shape="wave"
        />

        {/* Intro Section with Decorative Elements */}
        <section className="py-16">
          <div className="container max-w-3xl mx-auto px-4 text-center">
            {/* Decorative flourish */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-wedding-coral-300" />
              <span className="text-wedding-coral-400 text-2xl">♡</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-wedding-coral-300" />
            </div>

            <Typography
              variant="body"
              color="muted"
              className="text-lg leading-relaxed max-w-2xl mx-auto"
            >
              {t("intro")}
            </Typography>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-16 bg-wedding-neutral-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Typography variant="h2" className="font-serif mb-3">
                {t.rich("thingsToDo", {
                  to: () => <span className="font-script text-6xl">{t("to")}</span>,
                })}
              </Typography>
              <div className="h-px w-16 bg-wedding-coral-400 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {activities.map((activity) => (
                <article
                  key={activity.name}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-wedding-neutral-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative aspect-[4/3]">
                    <img
                      src={activity.imageSrc}
                      alt={activity.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-script text-6xl text-wedding-coral-500 mb-3">
                      {activity.name}
                    </h3>
                    <Typography
                      variant="body"
                      color="muted"
                      className="text-sm mb-4 leading-relaxed"
                    >
                      {activity.description}
                    </Typography>
                    {activity.url && activity.linkText && (
                      <a
                        href={activity.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-wedding-coral-500 hover:text-wedding-coral-600 font-medium text-sm transition-colors"
                      >
                        {activity.linkText}
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Tip Section */}
        <section className="py-12">
          <div className="container max-w-2xl mx-auto px-4 text-center">
            <div className="p-6 bg-wedding-coral-50/50 rounded-xl border border-wedding-coral-100">
              <Typography variant="h4" className="font-serif mb-2">
                {t("planningToExplore")}
              </Typography>
              <Typography variant="body" color="muted" className="text-sm">
                {t("planningToExploreText")}
              </Typography>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
