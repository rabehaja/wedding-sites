import { Navbar, PageHero, ContentSection, Footer } from "@repo/ui/organisms";
import { Typography } from "@repo/ui/atoms";
import { SectionHeader, LocationCard, RoutePlanner } from "@repo/ui/molecules";

export default function VenuePage(): React.ReactElement {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          title="The Venue"
          subtitle="Chateau de Blier, Belgium"
          shape="diagonal"
        />

        {/* Why This Place - Personal Story */}
        <ContentSection
          title="Why This Place"
          layout="image-right"
          imageSrc="/images/castle-exterior.png"
          imageAlt="Chateau de Blier exterior view"
        >
          <Typography variant="body" color="muted">
            During a trip to Belgium, we stumbled upon Chateau de Blier—and the
            moment we stepped through the gates, we felt something magical.
            There's an atmosphere here that's impossible to describe: the way
            the light filters through the ancient trees, the quiet elegance of
            the stone walls, and a sense that this place has been waiting for
            love stories like ours.
          </Typography>
          <Typography variant="body" color="muted" className="mt-4">
            We knew instantly this was where we wanted to celebrate with the
            people who matter most to us. We can't wait to share this feeling
            with you.
          </Typography>
        </ContentSection>

        {/* About the Chateau */}
        <ContentSection
          title="About the Chateau"
          layout="image-left"
          imageSrc="/images/chateau-interior.jpg"
          imageAlt="Chateau de Blier interior"
          className="bg-wedding-neutral-50"
        >
          <Typography variant="body" color="muted">
            Chateau de Blier is a 19th-century castle nestled in the heart of
            the Belgian Ardennes. With its timeless architecture, peaceful
            gardens, and sweeping views of the countryside, it offers an
            atmosphere of romance and elegance that captivated us from the first
            moment.
          </Typography>
          <Typography variant="body" color="muted" className="mt-4">
            The estate features grand reception halls for celebrating, intimate
            garden corners for quiet conversations, and comfortable
            accommodations so you can stay close to the festivities. Every
            detail of this place feels like it was designed for making memories.
          </Typography>
        </ContentSection>

        {/* Plan Your Journey */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-4">
            <SectionHeader
              title="Plan Your Journey"
              subtitle="Let us help you find your way to us"
            />
            <div className="max-w-xl mx-auto mt-10">
              <RoutePlanner
                destinationName="Chateau de Blier"
                destinationAddress="Rue Croix Henquin 6, 6997 Blier, Erezee, Belgium"
              />
            </div>
          </div>
        </section>

        {/* Getting There Options */}
        <section className="py-16 bg-wedding-neutral-50">
          <div className="container max-w-7xl mx-auto px-4">
            <SectionHeader title="Travel Options" />
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
                  By Car
                </Typography>
                <Typography variant="body" color="muted">
                  From Brussels, take the E411 towards Luxembourg. Exit at
                  Marche-en-Famenne and follow signs to Erezee. Free parking is
                  available at the venue.
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
                  By Train
                </Typography>
                <Typography variant="body" color="muted">
                  The nearest station is Marche-en-Famenne. From there, taxi
                  service is available, or we can help arrange a shuttle for
                  guests.
                </Typography>
              </div>

              {/* Shuttle Service */}
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
                    <path d="M8 6v6" />
                    <path d="M15 6v6" />
                    <path d="M2 12h19.6" />
                    <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
                    <circle cx="7" cy="18" r="2" />
                    <path d="M9 18h5" />
                    <circle cx="16" cy="18" r="2" />
                  </svg>
                </div>
                <Typography variant="h4" className="mb-2">
                  Shuttle Service
                </Typography>
                <Typography variant="body" color="muted">
                  We're arranging shuttle service from nearby accommodations.
                  Details will be shared closer to the wedding date.
                </Typography>
              </div>
            </div>
          </div>
        </section>

        {/* Location Details */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-4">
            <SectionHeader title="Location" />
            <div className="max-w-xl mx-auto mt-8">
              <LocationCard
                name="Chateau de Blier"
                address="Rue Croix Henquin 6"
                city="6997 Blier, Erezee"
                country="Belgium"
                mapUrl="https://maps.google.com/?q=Chateau+de+Blier+Belgium"
              />
              <Typography
                variant="small"
                color="muted"
                className="text-center mt-4"
              >
                Free parking is available at the venue for all guests.
              </Typography>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
