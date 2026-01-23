import { Navbar, ContentSection, Footer, PageHero } from "@repo/ui/organisms";
import { Typography } from "@repo/ui/atoms";
import { SectionHeader, AccommodationCard } from "@repo/ui/molecules";

const accommodations = [
  {
    name: "Le Val de la Laisne",
    description: "Main venue accommodation with beautiful rooms on site.",
    imageSrc: "/images/accommodation-main.jpg",
    distance: "On site",
    websiteUrl: "https://levaldelaisne.be/nl/",
  },
  {
    name: "Hotel La Roche",
    description: "Comfortable hotel in the nearby town of La Roche-en-Ardenne.",
    imageSrc: "/images/accommodation-1.png",
    distance: "15 min",
  },
  {
    name: "B&B Ardennes",
    description: "Cozy bed and breakfast with local charm.",
    imageSrc: "/images/accommodation-2.png",
    distance: "10 min",
  },
  {
    name: "Camping Le Floreal",
    description: "For the adventurous guests who love nature.",
    imageSrc: "/images/accommodation-3.png",
    distance: "12 min",
  },
  {
    name: "Gite Rural",
    description: "Charming countryside cottage for groups.",
    imageSrc: "/images/accommodation-4.png",
    distance: "8 min",
  },
  {
    name: "Hotel Erezee",
    description: "Modern hotel with all amenities.",
    imageSrc: "/images/accommodation-5.png",
    distance: "20 min",
  },
];

export default function AccommodationPage(): React.ReactElement {
  return (
    <>
      <Navbar />
      <main>
                <PageHero title="Accommodation" subtitle="Where to stay during the wedding weekend" shape="diagonal" />
       

        <ContentSection>
          <Typography variant="body" color="muted" className="text-center">
            We have compiled a list of accommodation options near the venue.
            From on-site rooms to nearby hotels and B&Bs, there is something for
            everyone. We recommend booking early as it is a popular area!
          </Typography>
        </ContentSection>

        <section className="py-16 bg-wedding-neutral-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {accommodations.map((accommodation) => (
                <AccommodationCard
                  key={accommodation.name}
                  name={accommodation.name}
                  description={accommodation.description}
                  imageSrc={accommodation.imageSrc}
                  distance={accommodation.distance}
                  websiteUrl={accommodation.websiteUrl}
                />
              ))}
            </div>
          </div>
        </section>

        <ContentSection title="Need Help?">
          <Typography variant="body" color="muted" className="text-center">
            If you need assistance with accommodation bookings, please contact us
            at{" "}
            <a
              href="mailto:weddingloicandwiebke@gmail.com"
              className="text-wedding-coral-600 hover:text-wedding-coral-500"
            >
              weddingloicandwiebke@gmail.com
            </a>
          </Typography>
        </ContentSection>
      </main>
      <Footer />
    </>
  );
}
