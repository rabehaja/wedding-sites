import { Navbar, PageHero, ContentSection, Footer } from "@repo/ui/organisms";
import { Typography } from "@repo/ui/atoms";
import { TimelineItem } from "@repo/ui/molecules";

export default function WeekendPage(): React.ReactElement {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          title="The Weekend"
          subtitle="Join us for a full weekend of celebration"
          shape="wave"
          invertColors
        />

        <ContentSection>
          <Typography variant="body" color="muted" className="text-center">
            We would love for you to join us for the entire weekend! The
            chateau and surrounding area offer plenty of opportunities for
            relaxation and fun activities.
          </Typography>
        </ContentSection>

        <section className="py-16 bg-wedding-neutral-50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Typography variant="h3" className="text-center mb-8">
                Friday, July 17
              </Typography>
              <TimelineItem
                time="From 4:00 PM"
                title="Arrival & Check-in"
                description="Arrive at the venue and check into your accommodation. Take time to explore the beautiful grounds."
              />
              <TimelineItem
                time="7:00 PM"
                title="Welcome Drinks"
                description="Join us for casual welcome drinks and snacks. A chance to catch up with old friends and make new ones!"
                isLast
              />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Typography variant="h3" className="text-center mb-8">
                Saturday, July 18
              </Typography>
              <TimelineItem
                time="Morning"
                title="Free Time"
                description="Enjoy a leisurely morning. Breakfast will be available at the venue."
              />
              <TimelineItem
                time="3:00 PM"
                title="Wedding Ceremony & Celebration"
                description="The main event! See the Wedding page for the full schedule."
              />
              <TimelineItem
                time="Late Night"
                title="Dancing & Celebration"
                description="Dance the night away until the early hours!"
                isLast
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-wedding-neutral-50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Typography variant="h3" className="text-center mb-8">
                Sunday, July 19
              </Typography>
              <TimelineItem
                time="10:00 AM"
                title="Farewell Brunch"
                description="Join us for a relaxed brunch before saying goodbye. Share your favorite moments from the weekend!"
              />
              <TimelineItem
                time="12:00 PM"
                title="Check-out"
                description="Time to say goodbye (for now!). Safe travels home."
                isLast
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
