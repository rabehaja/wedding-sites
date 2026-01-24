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

export default function HomePage(): React.ReactElement {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Full width hero - NO container wrapper */}
        <HeroSection
          coupleNames="Loïc & Wiebke"
          tagline="Join us for our wedding celebrations"
          date={{
            day: 18,
            month: "July",
            year: 2026,
          }}
          location="Chateau de Blier, Belgium"
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
              Counting down <span className="font-script text-5xl">to</span> our special day
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
              We're Getting Married!
            </Typography>
            <Typography
              variant="body"
              color="muted"
              className="text-lg leading-relaxed max-w-2xl mx-auto"
            >
              After years of adventures together, we're finally making it
              official! We would be honored to have you celebrate with us at the
              beautiful Château de Blier in the heart of the Belgian Ardennes.
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
                The Weekend <span className="font-script text-6xl">at a</span> Glance
              </Typography>
              <div className="h-px w-16 bg-wedding-coral-400 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Friday */}
              <Link href="/weekend#friday" className="group">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-wedding-neutral-100 text-center transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                  <p className="text-wedding-coral-500 font-medium tracking-wide text-sm uppercase">
                    Friday
                  </p>
                  <p className="text-7xl font-script text-wedding-neutral-700 mt-2">
                    July 17
                  </p>
                  <div className="mt-6 space-y-3 text-sm text-wedding-neutral-600">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-wedding-coral-400">●</span>
                      <span>5:00 PM · Arrival</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-wedding-coral-400">●</span>
                      <span>7:00 PM · Welcome Dinner</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Saturday - Featured */}
              <Link href="/weekend#saturday" className="group md:-mt-4">
                <div className="bg-gradient-to-br from-wedding-coral-500 to-wedding-coral-600 rounded-2xl p-8 shadow-lg text-center text-white transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <p className="text-white/80 font-medium tracking-wide text-sm uppercase">
                    Saturday
                  </p>
                  <p className="text-7xl font-script mt-2">July 18</p>
                  <div className="mt-3 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs font-medium">
                    <span>✨</span> The Wedding Day
                  </div>
                  <div className="mt-6 space-y-3 text-sm text-white/90">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-white/60">●</span>
                      <span>3:00 PM · Ceremony</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-white/60">●</span>
                      <span>6:00 PM · Dinner & Party</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Sunday */}
              <Link href="/weekend#sunday" className="group">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-wedding-neutral-100 text-center transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                  <p className="text-wedding-coral-500 font-medium tracking-wide text-sm uppercase">
                    Sunday
                  </p>
                  <p className="text-7xl font-script text-wedding-neutral-700 mt-2">
                    July 19
                  </p>
                  <div className="mt-6 space-y-3 text-sm text-wedding-neutral-600">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-wedding-coral-400">●</span>
                      <span>9:00 AM · Breakfast</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-wedding-coral-400">●</span>
                      <span>11:00 AM · Farewell</span>
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
                View full weekend schedule
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
                  Dress Code
                </Typography>
                <Typography variant="body" color="muted" className="text-sm">
                  Formal or semi-formal attire. Feel free to wear any color or
                  pattern you wish — just maybe not white!
                </Typography>
              </article>

              {/* Photography Card */}
              <article className="bg-white rounded-xl p-8 shadow-sm border border-wedding-neutral-100 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-wedding-coral-50 border-2 border-wedding-coral-200 flex items-center justify-center text-wedding-coral-500 [&>svg]:w-7 [&>svg]:h-7">
                  <CameraIcon />
                </div>
                <Typography variant="h4" className="mb-3 font-serif">
                  Photography
                </Typography>
                <Typography variant="body" color="muted" className="text-sm">
                  Our guests will be our photographers! Share your pictures via
                  the QR code at the venue. There's also a fun photo corner!
                </Typography>
              </article>

              {/* Gifts Card */}
              <article className="bg-white rounded-xl p-8 shadow-sm border border-wedding-neutral-100 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-wedding-coral-50 border-2 border-wedding-coral-200 flex items-center justify-center text-wedding-coral-500 [&>svg]:w-7 [&>svg]:h-7">
                  <GiftIcon />
                </div>
                <Typography variant="h4" className="mb-3 font-serif">
                  Gifts
                </Typography>
                <Typography variant="body" color="muted" className="text-sm">
                  Your presence is the best gift! If you wish to give something,
                  we'd appreciate a contribution toward our future plans.
                </Typography>
              </article>

              {/* RSVP Card - Consistent style with purple accent */}
              <Link
                href="/rsvp"
                className="relative bg-white rounded-xl p-8 shadow-sm border-2 border-wedding-purple-300 text-center block group transition-all hover:shadow-md hover:border-wedding-purple-400"
              >
                {/* Deadline badge */}
                <div className="absolute top-3 right-3 bg-wedding-purple-100 text-wedding-purple-600 text-xs font-semibold px-3 py-1 rounded-full">
                  By May 15
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
                  RSVP
                </Typography>
                <Typography variant="body" color="muted" className="text-sm">
                  Let us know you're coming and choose your room
                </Typography>
                <div className="mt-4 inline-flex items-center gap-2 text-wedding-purple-500 font-medium text-sm group-hover:gap-3 transition-all">
                  Respond Now
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
                  Château <span className="font-script text-6xl">de</span> Blier
                </Typography>
                <Typography variant="body" color="muted" className="mb-6">
                  A charming 19th-century château nestled in the heart of the
                  Belgian Ardennes. With its beautiful gardens, rustic
                  interiors, and peaceful surroundings, it's the perfect setting
                  for our celebration.
                </Typography>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 text-wedding-coral-500 flex-shrink-0 mt-0.5 [&>svg]:w-5 [&>svg]:h-5">
                      <MapPinIcon />
                    </div>
                    <div>
                      <p className="font-medium text-wedding-neutral-700">
                        Address
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
                    Explore the Venue
                  </Link>
                  <a
                    href="https://maps.google.com/?q=Blier+1,+6997+Erezée,+Belgium"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-wedding-neutral-300 text-wedding-neutral-700 rounded-full text-sm font-medium hover:bg-wedding-neutral-50 transition-colors"
                  >
                    Open in Maps
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
                  Getting There
                </Typography>
                <div className="space-y-2 text-sm text-wedding-neutral-600">
                  <p>
                    <strong>From Brussels:</strong> ~1.5 hours by car
                  </p>
                  <p>
                    <strong>From Liège:</strong> ~45 minutes by car
                  </p>
                  <p>
                    <strong>Parking:</strong> Free on-site parking available
                  </p>
                </div>
                <Link
                  href="/venue#getting-there"
                  className="mt-5 inline-flex items-center gap-2 px-4 py-2 border-2 border-wedding-coral-500 text-wedding-coral-500 rounded-full font-medium text-sm hover:bg-wedding-coral-500 hover:text-white transition-colors"
                >
                  Get directions
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
                  Stay <span className="font-script text-5xl">With</span> Us
                </Typography>
                <div className="space-y-2 text-sm text-wedding-neutral-600">
                  <p>
                    <strong>19 rooms</strong> available on-site
                  </p>
                  <p>
                    From <strong>€40/person/night</strong>
                  </p>
                  <p>Book your room when you RSVP</p>
                </div>
                <Link
                  href="/accommodation"
                  className="mt-5 inline-flex items-center gap-2 px-4 py-2 border-2 border-wedding-purple-500 text-wedding-purple-500 rounded-full font-medium text-sm hover:bg-wedding-purple-500 hover:text-white transition-colors"
                >
                  View all rooms
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
              Don't forget to RSVP by <strong>May 15, 2026</strong>
            </p>
            <Link
              href="/rsvp"
              className="mt-4 inline-flex items-center gap-2 text-wedding-purple-500 hover:text-wedding-purple-600 font-medium transition-colors"
            >
              Haven't responded yet? Click here
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
              Questions?
            </Typography>
            <Typography variant="body" color="muted" className="mb-6">
              Feel free to reach out to us anytime
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
