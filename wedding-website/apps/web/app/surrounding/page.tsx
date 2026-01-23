import { Navbar, ContentSection, Footer } from "@repo/ui/organisms";
import { Typography, WeddingImage } from "@repo/ui/atoms";
import { SectionHeader } from "@repo/ui/molecules";

const activities = [
  {
    name: "Adventure Valley Kayak",
    description: "Experience the beautiful Ourthe river by kayak.",
    imageSrc: "/images/activity-1.png",
    url: "https://www.adventure-valley.be/en/activities/kayak",
  },
  {
    name: "Grottes de Hotton",
    description: "Explore the stunning underground caves.",
    imageSrc: "/images/activity-2.png",
    url: "https://grottesdehotton.be/en/home/",
  },
  {
    name: "Parc Chlorophylle",
    description: "Treetop adventure park for all ages.",
    imageSrc: "/images/activity-3.png",
    url: "https://www.parcchlorophylle.com/en-GB/",
  },
  {
    name: "Waterfall Hiking",
    description: "Beautiful hiking trails with scenic waterfalls.",
    imageSrc: "/images/activity-4.png",
    url: "https://www.tim-tense.com/waterfall-hike-belgium/",
  },
  {
    name: "Parc Gibier La Roche",
    description: "Wildlife park with native Belgian animals.",
    imageSrc: "/images/activity-5.png",
    url: "https://www.parc-gibier-laroche.be/",
  },
  {
    name: "La Roche-en-Ardenne",
    description: "Charming town with castle ruins and local shops.",
    imageSrc: "/images/activity-6.png",
  },
];

export default function SurroundingPage(): React.ReactElement {
  return (
    <>
      <Navbar />
      <main>
        <section className="py-20 bg-wedding-neutral-50">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="The Surrounding"
              subtitle="Things to do in the Belgian Ardennes"
            />
          </div>
        </section>

        <ContentSection>
          <Typography variant="body" color="muted" className="text-center">
            The Belgian Ardennes is a beautiful region with plenty to see and do.
            Whether you love outdoor adventures, exploring caves, or simply
            enjoying the peaceful countryside, there is something for everyone.
          </Typography>
        </ContentSection>

        <section className="py-16 bg-wedding-neutral-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {activities.map((activity) => (
                <article
                  key={activity.name}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-[4/3]">
                    <WeddingImage
                      src={activity.imageSrc}
                      alt={activity.name}
                      fill
                      containerClassName="h-full"
                    />
                  </div>
                  <div className="p-4">
                    <Typography variant="h4" className="text-lg mb-2">
                      {activity.name}
                    </Typography>
                    <Typography variant="body" color="muted" className="mb-3">
                      {activity.description}
                    </Typography>
                    {activity.url && (
                      <a
                        href={activity.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-wedding-coral-600 hover:text-wedding-coral-500 font-medium"
                      >
                        Learn more
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
