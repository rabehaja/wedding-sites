"use client";

import { Navbar, PageHero, Footer, VideoHero } from "@repo/ui/organisms";
import { Typography } from "@repo/ui/atoms";
import { LocationCard, RoutePlanner } from "@repo/ui/molecules";
import { useTranslations } from "next-intl";

export default function VenuePage(): React.ReactElement {
  const t = useTranslations("venue");

  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          title={t("title")}
          subtitle={t("subtitle")}
          shape="diagonal"
        />

                <VideoHero videoSrc="/videos/castle_video.mp4" />
        

        {/* Why This Place - Personal Story */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <Typography variant="h2" className="font-serif mb-6">
                  {t.rich("whyThisPlace", {
                    this: () => <span className="font-script text-7xl">{t("this")}</span>,
                  })}
                </Typography>
                <Typography variant="body" color="muted">
                  {t("whyThisPlaceText1")}
                </Typography>
                <Typography variant="body" color="muted" className="mt-4">
                  {t("whyThisPlaceText2")}
                </Typography>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="/images/interior-castle.jpg"
                  alt="Château de Blier interior view"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About the Château */}
        <section className="py-16 bg-wedding-neutral-50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/images/chateau-interior.jpg"
                  alt="Château de Blier interior"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
              <div>
                <Typography variant="h2" className="font-serif mb-6">
                  {t.rich("aboutChateau", {
                    the: () => <span className="font-script text-7xl">{t("the")}</span>,
                  })}
                </Typography>
                <Typography variant="body" color="muted">
                  {t("aboutChateauText1")}
                </Typography>
                <Typography variant="body" color="muted" className="mt-4">
                  {t("aboutChateauText2")}
                </Typography>
              </div>
            </div>
          </div>
        </section>

        {/* Plan Your Journey */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <Typography variant="h2" className="font-serif">
                {t.rich("planYourJourney", {
                  your: () => <span className="font-script text-7xl">{t("your")}</span>,
                })}
              </Typography>
              <Typography variant="body" color="muted" className="mt-2">
                {t("planYourJourneyText")}
              </Typography>
            </div>
            <div className="max-w-xl mx-auto mt-10">
              <RoutePlanner
                destinationName="Château de Blier"
                destinationAddress="Rue Croix Henquin 6, 6997 Blier, Erezee, Belgium"
              />
            </div>
          </div>
        </section>

        {/* Getting There Options */}
        <section className="py-16 bg-wedding-neutral-50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <Typography variant="h2" className="font-serif">
                {t.rich("travelOptions", {
                  options: () => <span className="font-script text-7xl">{t("options")}</span>,
                })}
              </Typography>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10">
              {/* By Car */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-wedding-coral-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2.5-5.5C15 3.6 14.1 3 13 3H7c-1.1 0-2 .6-2.5 1.5L2 10l-2.5 1.1C.7 11.3 0 12.1 0 13v3c0 .6.4 1 1 1h2" />
                    <circle cx="7" cy="17" r="2" />
                    <path d="M9 17h6" />
                    <circle cx="17" cy="17" r="2" />
                  </svg>
                </div>
                <Typography variant="h4" className="mb-2">
                  {t("byCar")}
                </Typography>
                <Typography variant="body" color="muted">
                  {t("byCarText")}
                </Typography>
              </div>

              {/* By Train */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-wedding-coral-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="4" y="3" width="16" height="16" rx="2" />
                    <path d="M4 11h16" />
                    <path d="M12 3v8" />
                    <path d="M8 19l-2 3" />
                    <path d="M18 22l-2-3" />
                    <path d="M8 15h.01" />
                    <path d="M16 15h.01" />
                  </svg>
                </div>
                <Typography variant="h4" className="mb-2">
                  {t("byTrain")}
                </Typography>
                <Typography variant="body" color="muted">
                  {t("byTrainText")}
                </Typography>
              </div>

              {/* Car Pooling */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-wedding-coral-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <Typography variant="h4" className="mb-2">
                  {t("carPooling")}
                </Typography>
                <Typography variant="body" color="muted">
                  {t("carPoolingText")}
                </Typography>
              </div>
            </div>
          </div>
        </section>

        {/* Location Details */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <Typography variant="h2" className="font-serif">
                <span className="font-script text-7xl">{t("location")}</span>
              </Typography>
            </div>
            <div className="max-w-xl mx-auto mt-8">
              <LocationCard
                name="Château de Blier"
                address="Rue Croix Henquin 6"
                city="6997 Blier, Erezee"
                country="Belgium"
                mapUrl="https://maps.google.com/?q=Château+de+Blier+Belgium"
              />
              <Typography
                variant="small"
                color="muted"
                className="text-center mt-4"
              >
                {t("freeParking")}
              </Typography>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
