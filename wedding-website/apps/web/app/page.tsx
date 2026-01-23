import { HeroSection, Navbar, Footer } from "@repo/ui/organisms";
import { FillImage } from "@repo/ui/atoms";
import Link from "next/link";

export default function HomePage(): React.ReactElement {
  return (
    <>
    <Navbar />
      <main id="main-content" className="flex justify-center">
        <div className="container max-w-7xl mx-auto">
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
  
          {/* Join us section */}
          <section className="relative py-16 px-8 md:px-16 lg:px-24 mt-12">
            {/* Section title */}
            <h2
              className="font-script text-4xl md:text-5xl lg:text-6xl text-wedding-neutral-700 mb-8"
            >
              Join us for our wedding celebrations
            </h2>

            {/* Purple bordered content box */}
            <div className="border-2 border-wedding-purple p-8 md:p-12 relative z-10 bg-white space-y-6 text-wedding-neutral-700 text-base md:text-lg leading-relaxed text-justify">
              <p>
                We are finally getting married and we are thrilled to invite you to our wedding. Join us at the magnificent Château de Blier in Erezee, Belgium on 18 July 2026 for our wedding celebration. We are looking forward to share moments filled with joy, love, and laughter with the most amazing crowd of people, creating unforgettable memories in the heart of the Ardennes.
              </p>
              <p>
                For your convenience, we assembled this website for you, so can find all the needed information regarding wedding venue, program and possible accommodations in one place.
                <br />
                Please <strong>RSVP us</strong> as soon as possible via the button below to help us plan our big day. You want to bring your partner? No problem at all. Please specify when RSVPing us .
              </p>
              <p>
                You would like to spend the whole weekend with us and stay from Friday to Sunday at the Chateau de Blier in a true family spirit? Amazing! Please indicate it while RSVIing via the button below as soon as possible.
              </p>
              <p>
                You will be missed if you cannot make it to the wedding. Once you know you, please tell us so we can take your absence into account.
              </p>
              <p>
                We are looking forward to this special day and to celebrating our love with you!
              </p>
            </div>

            {/* RSVP section */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16">
              <p
                className="text-xl md:text-2xl text-wedding-coral uppercase tracking-wider font-thin-serif"
              >
                PLEASE RSVP BY MAY 15, 2026
              </p>
              <div className="h-12 w-px bg-wedding-neutral-400 hidden md:block" />
              <Link
                href="/rsvp"
                className="bg-wedding-purple text-white px-12 py-3 text-xl uppercase tracking-wider hover:bg-wedding-purple-dark transition-colors font-thin-serif"
              >
                RSVP
              </Link>
            </div>
          </section>
        </div>



      </main>
      <Footer />
    </>
  );
}
