"use client";

import { Navbar, Footer, PageHero } from "@repo/ui/organisms";
import { Typography, BackToTop, InfoBanner } from "@repo/ui/atoms";
import { AccommodationNav } from "./AccommodationNav";
import { AccommodationOverview } from "./AccommodationOverview";
import { ImageSlider } from "./ImageSlider";
import { useTranslations } from "next-intl";

const chateauImages = [
  { src: "/images/accommodation-7.png", alt: "Château interior" },
  { src: "/images/accommodation-8.png", alt: "Château bedroom" },
  { src: "/images/accommodation-1.png", alt: "Château room" },
  { src: "/images/accommodation-3.png", alt: "Château dining" },
  { src: "/images/accommodation-4.png", alt: "Château living" },
];

function BedIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12h20" />
      <path d="M2 18v-6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6" />
      <path d="M2 18v2" />
      <path d="M22 18v2" />
      <path d="M6 12v-2a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2" />
    </svg>
  );
}

export default function AccommodationPage(): React.ReactElement {
  const t = useTranslations("accommodation");

  const roomPrices = [
    { quantity: 1, type: t("singleRoom"), beds: 1, price: 60, perBed: 60 },
    { quantity: 7, type: t("twoBedRoom"), beds: 2, price: 100, perBed: 50 },
    { quantity: 2, type: t("threeBedRoom"), beds: 3, price: 150, perBed: 50 },
    { quantity: 8, type: t("fourBedRoom"), beds: 4, price: 160, perBed: 40 },
    { quantity: 1, type: t("fiveBedRoom"), beds: 5, price: 200, perBed: 40 },
  ];

  const chateauFeatures = [
    { icon: "🚿", label: t("sharedShowers"), description: t("sharedShowersDesc") },
    { icon: "🚽", label: t("sharedToilets"), description: t("sharedToiletsDesc") },
    { icon: "🛏️", label: t("sharedRooms"), description: t("sharedRoomsDesc") },
    { icon: "🌳", label: t("bigGarden"), description: t("bigGardenDesc") },
    { icon: "👨‍👩‍👧‍👦", label: t("familySpirit"), description: t("familySpiritDesc") },
    { icon: "🏰", label: t("historicRooms"), description: t("historicRoomsDesc") },
  ];

  return (
    <>
      <Navbar />
      <AccommodationNav />
      <main id="main-content">
        <PageHero
          title={t("title")}
          subtitle={t("subtitle")}
          shape="diagonal"
        />

        <AccommodationOverview />

        {/* Section 1: The Château */}
        <section id="château" className="py-16">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Text Content */}
              <div>
                <h2 className="font-script text-7xl text-wedding-coral-500 mb-6">
                  {t("theChateau")}
                </h2>
                <Typography variant="body" color="muted" className="leading-relaxed">
                  {t("chateauIntro")}
                </Typography>

                <InfoBanner
                  title={t("preferenceNoticeTitle")}
                  description={t("preferenceNoticeDesc")}
                  className="mt-4"
                />

                {/* Details of your stay - USP Cards */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-wedding-neutral-700 mb-4">
                    {t("whatToExpect")}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {chateauFeatures.map((feature) => (
                      <div
                        key={feature.label}
                        className="bg-wedding-coral-50/50 rounded-lg p-4 text-center"
                      >
                        <div className="text-2xl mb-2">{feature.icon}</div>
                        <p className="font-medium text-sm text-wedding-neutral-700">
                          {feature.label}
                        </p>
                        <p className="text-xs text-wedding-neutral-500">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-wedding-neutral-500 italic">
                    {t("roomPreferences")}
                  </p>
                </div>
              </div>

              {/* Main Image */}
              <div>
                <img
                  src="/images/accommodation-main.jpg"
                  alt="Château de Blier exterior"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>

            {/* Room Prices & Image Slider - Two Column Layout */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              {/* Left: Room Prices Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-wedding-neutral-100">
                <h3 className="text-lg font-semibold text-wedding-neutral-700 mb-6">
                  {t("roomPrices")}
                </h3>
                <div className="space-y-3">
                  {roomPrices.map((room) => (
                    <div
                      key={room.type}
                      className="flex items-center justify-between py-2 border-b border-wedding-neutral-100 last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-wedding-neutral-500 w-6">
                          {room.quantity}x
                        </span>
                        <div className="flex items-center gap-1 text-wedding-coral-400">
                          {Array.from({ length: room.beds }).map((_, i) => (
                            <BedIcon key={i} className="w-4 h-4" />
                          ))}
                        </div>
                        <span className="text-wedding-neutral-700 font-medium text-sm">
                          {room.type}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="font-semibold text-wedding-neutral-700">
                          €{room.price}
                        </span>
                        <span className="text-wedding-neutral-500 text-xs">
                          {t("perNight")}
                        </span>
                        {room.beds > 1 && (
                          <p className="text-xs text-wedding-neutral-400">
                            €{room.perBed}{t("perBed")}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-wedding-neutral-200">
                  <Typography
                    variant="body"
                    color="muted"
                    className="text-xs italic"
                  >
                    {t("campingNote")}
                  </Typography>
                </div>
              </div>

              {/* Right: Image Slider Card */}
              <div>
                <ImageSlider images={chateauImages} />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Nearby Camping/Glamping */}
        <section id="camping" className="py-16 bg-wedding-neutral-50">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Text Content */}
              <div>
                <h2 className="font-script text-6xl text-wedding-coral-500 mb-6">
                  {t("nearbyCamping")}
                </h2>
                <Typography variant="body" color="muted" className="leading-relaxed">
                  {t("nearbyCampingIntro")}
                </Typography>
                <Typography variant="body" color="muted" className="mt-4">
                  {t("consultWebpage")}{" "}
                  <a
                    href="https://levaldelaisne.be"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-wedding-coral-500 hover:text-wedding-coral-600 underline font-medium"
                  >
                    levaldelaisne
                  </a>
                </Typography>
                <Typography
                  variant="body"
                  color="muted"
                  className="mt-4 text-sm italic"
                >
                  {t("languageHelp")}
                </Typography>
              </div>

              {/* Map/Location Illustration */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-wedding-neutral-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-center">
                    <div className="text-wedding-coral-500 text-2xl mb-1">△</div>
                    <p className="text-sm font-medium text-wedding-neutral-700">
                      Domaine
                      <br />
                      Le Val d'Aisne
                    </p>
                  </div>
                  <div className="flex-1 border-t-2 border-dashed border-wedding-neutral-300 mx-4 relative">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-xs text-wedding-neutral-500">
                      450m
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="text-wedding-coral-500 text-2xl mb-1">📍</div>
                    <p className="text-sm font-medium text-wedding-neutral-700">
                      Château
                      <br />
                      de Blier
                    </p>
                  </div>
                </div>
                <p className="text-center text-sm text-wedding-neutral-500 mt-4">
                  {t("minutesWalk")}
                </p>
              </div>
            </div>

            {/* Camping Images */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <img
                src="/images/accommodation-6.png"
                alt="Camping lake view"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <img
                src="/images/accommodation-2.png"
                alt="Glamping dome"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section 3: Holiday Homes or Airbnbs */}
        <section id="airbnb" className="py-16">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="font-script text-6xl text-wedding-coral-500 mb-6 text-center">
              {t("holidayHomesTitle")}
            </h2>
            <Typography
              variant="body"
              color="muted"
              className="leading-relaxed text-center max-w-3xl mx-auto"
            >
              {t("holidayHomesIntro")}
            </Typography>

            {/* Booking Widget Cards */}
            <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Airbnb Card */}
              <a
                href="https://www.airbnb.com/s/Erezée--Belgium/homes"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 shadow-sm border border-wedding-neutral-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FF5A5F]/10 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-[#FF5A5F]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-wedding-neutral-700 mb-2">
                  {t("airbnb")}
                </h3>
                <p className="text-sm text-wedding-neutral-500 mb-4">
                  {t("airbnbDesc")}
                </p>
                <span className="inline-flex items-center gap-2 text-[#FF5A5F] font-medium text-sm group-hover:gap-3 transition-all">
                  {t("searchAirbnb")}
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
                </span>
              </a>

              {/* Booking.com Card */}
              <a
                href="https://www.booking.com/searchresults.html?ss=Erez%C3%A9e%2C+Wallonia%2C+Belgium"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 shadow-sm border border-wedding-neutral-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#003580]/10 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-[#003580]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M2.75 5A2.75 2.75 0 000 7.75v8.5A2.75 2.75 0 002.75 19h18.5A2.75 2.75 0 0024 16.25v-8.5A2.75 2.75 0 0021.25 5H2.75zM4 8.5h3.5a2 2 0 012 2v3a2 2 0 01-2 2H4V8.5zm12 7h4v-1h-4v1zm-2-3h6v-1h-6v1zm0-2h6v-1h-6v1z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-wedding-neutral-700 mb-2">
                  {t("booking")}
                </h3>
                <p className="text-sm text-wedding-neutral-500 mb-4">
                  {t("bookingDesc")}
                </p>
                <span className="inline-flex items-center gap-2 text-[#003580] font-medium text-sm group-hover:gap-3 transition-all">
                  {t("searchBooking")}
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
                </span>
              </a>

              {/* Google Maps Card */}
              <a
                href="https://www.google.com/maps/search/hotels+near+Erez%C3%A9e,+Belgium"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 shadow-sm border border-wedding-neutral-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#4285F4]/10 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-[#4285F4]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-wedding-neutral-700 mb-2">
                  {t("googleMaps")}
                </h3>
                <p className="text-sm text-wedding-neutral-500 mb-4">
                  {t("googleMapsDesc")}
                </p>
                <span className="inline-flex items-center gap-2 text-[#4285F4] font-medium text-sm group-hover:gap-3 transition-all">
                  {t("viewOnMaps")}
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
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Need Help Section */}
        <section className="py-12 bg-wedding-purple/10">
          <div className="container max-w-2xl mx-auto px-4 text-center">
            <Typography variant="h4" className="font-serif mb-3">
              {t("needHelpBooking")}
            </Typography>
            <Typography variant="body" color="muted" className="mb-4">
              {t("needHelpText")}
            </Typography>
            <a
              href="mailto:weddingloicandwiebke@gmail.com"
              className="inline-flex items-center gap-2 text-wedding-purple-500 hover:text-wedding-purple-600 font-medium transition-colors"
            >
              weddingloicandwiebke@gmail.com
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
