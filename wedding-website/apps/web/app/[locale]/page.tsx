"use client";

import { HeroSection, Navbar, Footer } from "@repo/ui/organisms";
import {
  Typography,
  DressCodeIcon,
  CameraIcon,
  GiftIcon,
  MapPinIcon,
  Countdown,
} from "@repo/ui/atoms";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function HomePage(): React.ReactElement {
  const t = useTranslations("home");
  const tNav = useTranslations("nav");

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Full width hero - NO container wrapper */}
        <HeroSection
          coupleNames="Loïc & Wiebke"
          tagline={t("tagline")}
          date={{
            day: 18,
            month: t("month"),
            year: 2026,
          }}
          location={t("location")}
          imageSrc="/images/hero-couple.jpg"
        />

        {/* Countdown */}
        <section className="py-16 bg-gradient-to-b from-white to-wedding-neutral-50">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            {/* Decorative element */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-wedding-coral-300" />
              <span className="text-wedding-coral-400 text-2xl">♡</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-wedding-coral-300" />
            </div>

            <Typography variant="body" color="muted" className="mb-8 text-lg">
              {t.rich("countdown", {
                to: () => <span className="font-script text-5xl">{t("to")}</span>,
              })}
            </Typography>
            <Countdown targetDate={new Date("2026-07-18T15:00:00")} />
          </div>
        </section>

        {/* Welcome Message */}
        <section className="py-20 bg-wedding-coral-50/40">
          <div className="container max-w-3xl mx-auto px-4 text-center">
            {/* Decorative flourish */}
            <div className="flex justify-center mb-6">
              <svg
                className="w-24 h-6 text-wedding-coral-300"
                viewBox="0 0 100 24"
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
              className="font-script text-8xl md:text-9xl text-wedding-coral-600 mb-6"
            >
              {t("gettingMarried")}
            </Typography>
            <Typography
              variant="body"
              color="muted"
              className="text-lg leading-relaxed max-w-2xl mx-auto"
            >
              {t("welcomeText")}
            </Typography>

            {/* Elegant signature */}
            <div className="mt-10 flex justify-center items-center gap-4">
              <span className="font-script text-7xl text-wedding-neutral-600">
                Loïc
              </span>
              <span className="text-wedding-coral-400 text-3xl">&</span>
              <span className="font-script text-7xl text-wedding-neutral-600">
                Wiebke
              </span>
            </div>

            {/* Bottom flourish */}
            <div className="flex justify-center mt-8">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-wedding-coral-300 to-transparent" />
            </div>
          </div>
        </section>

        {/* Quick Weekend Overview */}
        <section className="py-20 bg-wedding-neutral-50">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <Typography variant="h3" className="font-serif mb-3">
                {t.rich("weekendGlance", {
                  ata: () => <span className="font-script text-6xl">{t("ata")}</span>,
                })}
              </Typography>
              <div className="h-px w-16 bg-wedding-coral-400 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Friday */}
              <Link href="/weekend#friday" className="group">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-wedding-neutral-100 text-center transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                  <p className="text-wedding-coral-500 font-medium tracking-wide text-sm uppercase">
                    {t("friday")}
                  </p>
                  <p className="text-7xl font-script text-wedding-neutral-700 mt-2">
                    {t("month")} 17
                  </p>
                  <div className="mt-6 space-y-3 text-sm text-wedding-neutral-600">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-wedding-coral-400">●</span>
                      <span>5:00 PM · {t("arrival")}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-wedding-coral-400">●</span>
                      <span>7:00 PM · {t("welcomeDinner")}</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Saturday - Featured */}
              <Link href="/weekend#saturday" className="group md:-mt-4">
                <div className="bg-gradient-to-br from-wedding-coral-500 to-wedding-coral-600 rounded-2xl p-8 shadow-lg text-center text-white transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <p className="text-white/80 font-medium tracking-wide text-sm uppercase">
                    {t("saturday")}
                  </p>
                  <p className="text-7xl font-script mt-2">{t("month")} 18</p>
                  <div className="mt-3 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs font-medium">
                    <span>✨</span> {t("theWeddingDay")}
                  </div>
                  <div className="mt-6 space-y-3 text-sm text-white/90">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-white/60">●</span>
                      <span>3:00 PM · {t("ceremony")}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-white/60">●</span>
                      <span>6:00 PM · {t("dinnerParty")}</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Sunday */}
              <Link href="/weekend#sunday" className="group">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-wedding-neutral-100 text-center transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                  <p className="text-wedding-coral-500 font-medium tracking-wide text-sm uppercase">
                    {t("sunday")}
                  </p>
                  <p className="text-7xl font-script text-wedding-neutral-700 mt-2">
                    {t("month")} 19
                  </p>
                  <div className="mt-6 space-y-3 text-sm text-wedding-neutral-600">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-wedding-coral-400">●</span>
                      <span>9:00 AM · {t("breakfast")}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-wedding-coral-400">●</span>
                      <span>11:00 AM · {t("farewell")}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* View full schedule link */}
            <div className="text-center mt-10">
              <Link
                href="/weekend"
                className="inline-flex items-center gap-2 text-wedding-coral-500 hover:text-wedding-coral-600 font-medium transition-colors group"
              >
                {t("viewFullSchedule")}
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Info Cards */}
        <section id="info-cards" className="py-16">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Dress Code Card */}
              <article className="bg-white rounded-xl p-8 shadow-sm border border-wedding-neutral-100 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-wedding-coral-50 border-2 border-wedding-coral-200 flex items-center justify-center text-wedding-coral-500 [&>svg]:w-7 [&>svg]:h-7">
                  <DressCodeIcon />
                </div>
                <Typography variant="h4" className="mb-3 font-serif">
                  {t("dressCode")}
                </Typography>
                <Typography variant="body" color="muted" className="text-sm">
                  {t("dressCodeText")}
                </Typography>
              </article>

              {/* Photography Card */}
              <article className="bg-white rounded-xl p-8 shadow-sm border border-wedding-neutral-100 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-wedding-coral-50 border-2 border-wedding-coral-200 flex items-center justify-center text-wedding-coral-500 [&>svg]:w-7 [&>svg]:h-7">
                  <CameraIcon />
                </div>
                <Typography variant="h4" className="mb-3 font-serif">
                  {t("photography")}
                </Typography>
                <Typography variant="body" color="muted" className="text-sm">
                  {t("photographyText")}
                </Typography>
              </article>

              {/* Gifts Card */}
              <article className="bg-white rounded-xl p-8 shadow-sm border border-wedding-neutral-100 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-wedding-coral-50 border-2 border-wedding-coral-200 flex items-center justify-center text-wedding-coral-500 [&>svg]:w-7 [&>svg]:h-7">
                  <GiftIcon />
                </div>
                <Typography variant="h4" className="mb-3 font-serif">
                  {t("gifts")}
                </Typography>
                <Typography variant="body" color="muted" className="text-sm">
                  {t("giftsText")}
                </Typography>
              </article>

              {/* RSVP Card - Consistent style with purple accent */}
              <Link
                href="/rsvp"
                className="relative bg-white rounded-xl p-8 shadow-sm border-2 border-wedding-purple-300 text-center block group transition-all hover:shadow-md hover:border-wedding-purple-400"
              >
                {/* Deadline badge */}
                <div className="absolute top-3 right-3 bg-wedding-purple-100 text-wedding-purple-600 text-xs font-semibold px-3 py-1 rounded-full">
                  {t("byDate")}
                </div>

                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-wedding-purple-50 border-2 border-wedding-purple-200 flex items-center justify-center text-wedding-purple-500">
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <Typography variant="h4" className="mb-3 font-serif">
                  {t("rsvpCard")}
                </Typography>
                <Typography variant="body" color="muted" className="text-sm">
                  {t("rsvpCardText")}
                </Typography>
                <div className="mt-4 inline-flex items-center gap-2 text-wedding-purple-500 font-medium text-sm group-hover:gap-3 transition-all">
                  {t("respondNow")}
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Venue Preview */}
        <section className="py-16">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src="/images/accommodation-main.jpg"
                  alt="Château de Blier"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Info */}
              <div>
                <Typography variant="h3" className="font-serif mb-4">
                  {t.rich("chateauTitle", {
                    de: () => <span className="font-script text-6xl">{t("de")}</span>,
                  })}
                </Typography>
                <Typography variant="body" color="muted" className="mb-6">
                  {t("chateauDescription")}
                </Typography>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 text-wedding-coral-500 flex-shrink-0 mt-0.5 [&>svg]:w-5 [&>svg]:h-5">
                      <MapPinIcon />
                    </div>
                    <div>
                      <p className="font-medium text-wedding-neutral-700">
                        {t("address")}
                      </p>
                      <p className="text-wedding-neutral-500">
                        Blier 1, 6997 Erezée, Belgium
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/venue"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-wedding-coral-500 text-white rounded-full text-sm font-medium hover:bg-wedding-coral-600 transition-colors"
                  >
                    {t("exploreVenue")}
                  </Link>
                  <a
                    href="https://maps.google.com/?q=Blier+1,+6997+Erezée,+Belgium"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-wedding-neutral-300 text-wedding-neutral-700 rounded-full text-sm font-medium hover:bg-wedding-neutral-50 transition-colors"
                  >
                    {t("openInMaps")}
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
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting There & Accommodation */}
        <section className="py-16 bg-wedding-purple/5">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Getting There */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-wedding-coral-50 flex items-center justify-center text-wedding-coral-500 mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </div>
                <Typography variant="h4" className="font-serif mb-3">
                  {t("gettingThere")}
                </Typography>
                <div className="space-y-2 text-sm text-wedding-neutral-600">
                  <p>
                    <strong>{t("fromBrussels")}</strong> {t("fromBrusselsTime")}
                  </p>
                  <p>
                    <strong>{t("fromLiege")}</strong> {t("fromLiegeTime")}
                  </p>
                  <p>
                    <strong>{t("parking")}</strong> {t("parkingText")}
                  </p>
                </div>
                <Link
                  href="/venue#getting-there"
                  className="mt-5 inline-flex items-center gap-2 px-4 py-2 border-2 border-wedding-coral-500 text-wedding-coral-500 rounded-full font-medium text-sm hover:bg-wedding-coral-500 hover:text-white transition-colors"
                >
                  {t("getDirections")}
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>

              {/* Accommodation */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-wedding-purple-50 flex items-center justify-center text-wedding-purple-500 mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <Typography variant="h4" className="font-serif mb-3">
                  {t.rich("stayWithUs", {
                    with: () => <span className="font-script text-5xl">{t("with")}</span>,
                  })}
                </Typography>
                <div className="space-y-2 text-sm text-wedding-neutral-600">
                  <p>
                    <strong>{t("roomsAvailable")}</strong>
                  </p>
                  <p>
                    {t("fromPrice")}
                  </p>
                  <p>{t("bookRoom")}</p>
                </div>
                <Link
                  href="/accommodation"
                  className="mt-5 inline-flex items-center gap-2 px-4 py-2 border-2 border-wedding-purple-500 text-wedding-purple-500 rounded-full font-medium text-sm hover:bg-wedding-purple-500 hover:text-white transition-colors"
                >
                  {t("viewAllRooms")}
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* RSVP Reminder Section */}
        <section className="py-12 bg-wedding-purple/10">
          <div className="container max-w-2xl mx-auto px-4 text-center">
            <p className="text-wedding-purple-600 font-medium text-lg">
              {t.rich("rsvpReminder", { date: () => <strong>May 15, 2026</strong> })}
            </p>
            <Link
              href="/rsvp"
              className="mt-4 inline-flex items-center gap-2 text-wedding-purple-500 hover:text-wedding-purple-600 font-medium transition-colors"
            >
              {t("notRespondedYet")}
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-wedding-neutral-50">
          <div className="container max-w-2xl mx-auto px-4 text-center">
            <Typography variant="h3" className="font-serif mb-4">
              {t("questions")}
            </Typography>
            <Typography variant="body" color="muted" className="mb-6">
              {t("questionsText")}
            </Typography>
            <a
              href="mailto:weddingloicandwiebke@gmail.com"
              className="inline-block text-wedding-coral-600 hover:text-wedding-coral-500 font-medium transition-colors"
            >
              weddingloicandwiebke@gmail.com
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
