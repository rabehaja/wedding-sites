import { Navbar, PageHero, ContentSection, Footer } from "@repo/ui/organisms";
import { Typography } from "@repo/ui/atoms";
import { SectionHeader, LocationCard } from "@repo/ui/molecules";

export default function VenuePage(): React.ReactElement {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero title="The Venue" subtitle="Chateau de Blier, Belgium" />

        <ContentSection
          title="About the Chateau"
          layout="image-right"
          imageSrc="/images/chateau-interior.jpg"
          imageAlt="Chateau de Blier interior"
        >
          <Typography variant="body" color="muted">
            Chateau de Blier is a stunning 19th-century castle nestled in the
            heart of the Belgian Ardennes. With its elegant architecture,
            beautiful gardens, and breathtaking views, it provides the perfect
            setting for our wedding celebration.
          </Typography>
          <Typography variant="body" color="muted" className="mt-4">
            The castle features grand reception halls, intimate garden spaces,
            and comfortable accommodations for our guests. We fell in love with
            this venue the moment we saw it and cannot wait to share it with you.
          </Typography>
        </ContentSection>

        <section className="py-16 bg-wedding-neutral-50">
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
            </div>
          </div>
        </section>

        <ContentSection title="How to Get There">
          <Typography variant="body" color="muted" className="text-center">
            <strong>By Car:</strong> The chateau is easily accessible by car.
            From Brussels, take the E411 highway towards Luxembourg, then exit
            at Marche-en-Famenne and follow signs to Erezee.
          </Typography>
          <Typography variant="body" color="muted" className="text-center mt-4">
            <strong>By Train:</strong> The nearest train station is
            Marche-en-Famenne. From there, you can take a taxi or we can arrange
            shuttle service.
          </Typography>
          <Typography variant="body" color="muted" className="text-center mt-4">
            <strong>Parking:</strong> Free parking is available at the venue for
            all guests.
          </Typography>
        </ContentSection>
      </main>
      <Footer />
    </>
  );
}
