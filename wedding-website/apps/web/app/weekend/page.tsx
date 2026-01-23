import { Navbar, PageHero, ContentSection, Footer } from "@repo/ui/organisms";
import {
  Typography,
  RingsIcon,
  ChampagneIcon,
  UtensilsIcon,
  CakeIcon,
  MusicIcon,
  MapPinIcon,
  SunIcon,
  WaveIcon,
  BackToTop,
} from "@repo/ui/atoms";
import {
  TimelineItem,
  SectionHeader,
  WeekendDayCard,
} from "@repo/ui/molecules";

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
            We would love for you to join us for the entire weekend! The chateau
            and surrounding area offer plenty of opportunities for relaxation
            and fun activities.
          </Typography>
        </ContentSection>

        {/* Quick Overview Section */}
        <section className="py-12 bg-wedding-coral-50/30">
          <div className="container max-w-7xl mx-auto px-4">
            <SectionHeader
              title="At a Glance"
              subtitle="Your weekend schedule overview"
              showDivider={false}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8">
              <WeekendDayCard
                dayName="Friday"
                date="July 17"
                href="#friday"
                highlights={[
                  { icon: <MapPinIcon />, text: "Arrival & Check-in" },
                  { icon: <ChampagneIcon />, text: "Welcome Drinks" },
                ]}
              />
              <WeekendDayCard
                dayName="Saturday"
                date="July 18"
                featured
                href="#saturday"
                highlights={[
                  { icon: <SunIcon />, text: "Free Time & Breakfast" },
                  { icon: <RingsIcon />, text: "Ceremony & Reception" },
                  { icon: <MusicIcon />, text: "Dancing All Night" },
                ]}
              />
              <WeekendDayCard
                dayName="Sunday"
                date="July 19"
                href="#sunday"
                highlights={[
                  { icon: <UtensilsIcon />, text: "Farewell Brunch" },
                  { icon: <WaveIcon />, text: "Departure" },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Friday Timeline */}
        <section id="friday" className="py-16 bg-wedding-neutral-50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <SectionHeader title="Friday, July 17" subtitle="Arrival Day" />
              <ol className="mt-8" aria-label="Friday schedule">
                <TimelineItem
                  time="From 4:00 PM"
                  title="Arrival & Check-in"
                  description="Arrive at the venue and check into your accommodation. Take time to explore the beautiful grounds."
                  icon={<MapPinIcon />}
                />
                <TimelineItem
                  time="7:00 PM"
                  title="Welcome Drinks"
                  description="Join us for casual welcome drinks and snacks. A chance to catch up with old friends and make new ones!"
                  icon={<ChampagneIcon />}
                  isLast
                />
              </ol>
            </div>
          </div>
        </section>

        {/* Saturday Timeline - Full Detailed Schedule */}
        <section id="saturday" className="py-16">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <SectionHeader
                title="Saturday, July 18"
                subtitle="The Wedding Day"
              />
              <ol className="mt-8" aria-label="Saturday schedule">
                <TimelineItem
                  time="Morning"
                  title="Breakfast & Free Time"
                  description="Enjoy a leisurely breakfast at the venue. The morning is free for you to relax or explore."
                  icon={<SunIcon />}
                />
                <TimelineItem
                  time="3:00 PM"
                  title="Wedding Ceremony"
                  description="Our ceremony will take place in the chateau's enchanting garden (weather permitting), surrounded by all our loved ones."
                  icon={<RingsIcon />}
                />
                <TimelineItem
                  time="3:30 PM"
                  title="Cocktail Reception"
                  description="Following the ceremony, join us on the terrace for champagne, canapes, and games. Don't forget to take some photos!"
                  icon={<ChampagneIcon />}
                />
                <TimelineItem
                  time="6:00 PM"
                  title="Dinner"
                  description="Enjoy a delicious buffet from a local gourmet chef. Dine in the festive dining room or at the picnic tables outside."
                  icon={<UtensilsIcon />}
                />
                <TimelineItem
                  time="8:00 PM"
                  title="Cake Cutting"
                  description="Time to cut the wedding cake! Make sure you save room for a piece."
                  icon={<CakeIcon />}
                />
                <TimelineItem
                  time="8:15 PM"
                  title="First Dance & Party"
                  description="Watch our first dance, then dance the night away! The bar will be open and drinks are on us!"
                  icon={<MusicIcon />}
                  isLast
                />
              </ol>
            </div>
          </div>
        </section>

        {/* Sunday Timeline */}
        <section id="sunday" className="py-16 bg-wedding-neutral-50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <SectionHeader
                title="Sunday, July 19"
                subtitle="Farewell Day"
              />
              <ol className="mt-8" aria-label="Sunday schedule">
                <TimelineItem
                  time="10:00 AM"
                  title="Farewell Brunch"
                  description="Join us for a relaxed brunch before saying goodbye. Share your favorite moments from the weekend!"
                  icon={<UtensilsIcon />}
                />
                <TimelineItem
                  time="12:00 PM"
                  title="Check-out"
                  description="Time to say goodbye (for now!). Safe travels home."
                  icon={<WaveIcon />}
                  isLast
                />
              </ol>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
