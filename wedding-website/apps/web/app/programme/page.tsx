import { Navbar, Footer } from "@repo/ui/organisms";
import { Typography } from "@repo/ui/atoms";
import { SectionHeader, TimelineItem } from "@repo/ui/molecules";

export default function ProgrammePage(): React.ReactElement {
  return (
    <>
      <Navbar />
      <main>
        <section className="py-20 bg-wedding-neutral-50">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Weekend Programme"
              subtitle="The full schedule for our wedding weekend"
            />
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Typography variant="h2" className="text-center mb-12">
                Friday, July 17
              </Typography>

              <TimelineItem
                time="From 4:00 PM"
                title="Arrival & Check-in"
                description="Welcome to Chateau de Blier! Check into your accommodation and take time to explore the beautiful grounds and surroundings."
              />
              <TimelineItem
                time="7:00 PM"
                title="Welcome Drinks & Snacks"
                description="Join us for casual welcome drinks on the terrace. A relaxed evening to reconnect with friends and family before the big day!"
                isLast
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-wedding-neutral-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Typography variant="h2" className="text-center mb-12">
                Saturday, July 18 - Wedding Day
              </Typography>

              <TimelineItem
                time="Morning"
                title="Breakfast & Free Time"
                description="Enjoy a leisurely breakfast at the venue. The morning is free for you to relax or explore."
              />
              <TimelineItem
                time="3:00 PM"
                title="Wedding Ceremony"
                description="Our ceremony will take place in the chateau's enchanting garden (weather permitting), surrounded by all our loved ones."
              />
              <TimelineItem
                time="3:30 PM"
                title="Cocktail Reception"
                description="Following the ceremony, join us on the terrace for champagne, canapes, and games. Don't forget to take some photos!"
              />
              <TimelineItem
                time="6:00 PM"
                title="Dinner"
                description="Enjoy a delicious buffet from a local gourmet chef. Dine in the festive dining room or at the picnic tables outside."
              />
              <TimelineItem
                time="8:00 PM"
                title="Cake Cutting"
                description="Time to cut the wedding cake! Make sure you save room for a piece."
              />
              <TimelineItem
                time="8:15 PM"
                title="First Dance"
                description="Watch our first dance as a married couple, then join us on the dance floor!"
              />
              <TimelineItem
                time="8:30 PM - Late"
                title="Party Time!"
                description="Dance the night away! The bar will be open and the DJ will keep the music going. Drinks are on us!"
                isLast
              />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Typography variant="h2" className="text-center mb-12">
                Sunday, July 19
              </Typography>

              <TimelineItem
                time="10:00 AM - 12:00 PM"
                title="Farewell Brunch"
                description="Join us for a relaxed brunch to share your favorite moments from the weekend and say goodbye (for now!)."
              />
              <TimelineItem
                time="12:00 PM"
                title="Check-out & Departure"
                description="Time to head home. Safe travels, and thank you for celebrating with us!"
                isLast
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-wedding-coral-50">
          <div className="container mx-auto px-4 text-center">
            <Typography variant="h3" className="mb-4">
              Questions about the schedule?
            </Typography>
            <Typography variant="body" color="muted">
              Contact us at{" "}
              <a
                href="mailto:weddingloicandwiebke@gmail.com"
                className="text-wedding-coral-600 hover:text-wedding-coral-500"
              >
                weddingloicandwiebke@gmail.com
              </a>
            </Typography>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
