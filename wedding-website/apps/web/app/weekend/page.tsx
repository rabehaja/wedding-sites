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
            <div className="text-center mb-4">
              <Typography variant="h2" className="font-serif">
                <span className="font-script text-7xl text-wedding-purple-500">At a</span> Glance
              </Typography>
              <Typography variant="body" color="muted" className="mt-2">
                Your weekend schedule overview
              </Typography>
            </div>
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

        {/* Packlist Section */}
        <section id="packlist" className="py-16">
          <div className="container max-w-3xl mx-auto px-4">
            <SectionHeader
              title="Packlist"
              subtitle="What to bring for the weekend"
            />
            <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-wedding-neutral-700">
              <li className="flex items-start gap-3">
                <span className="text-wedding-coral-500 mt-0.5">✓</span>
                <span>Your fancy outfit</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-wedding-coral-500 mt-0.5">✓</span>
                <span>Toiletries</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-wedding-coral-500 mt-0.5">✓</span>
                <span>Change of clothes for two nights</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-wedding-coral-500 mt-0.5">✓</span>
                <span>
                  <strong>Your own towels</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-wedding-coral-500 mt-0.5">✓</span>
                <span>Contribution to Sunday's breakfast</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-wedding-coral-500 mt-0.5">✓</span>
                <span>Hiking boots (optional)</span>
              </li>
            </ul>
            <Typography
              variant="body"
              color="muted"
              className="mt-6 text-sm italic"
            >
              It might be hot! Don't forget to bring enough water for the
              weekend.
            </Typography>
          </div>
        </section>

        {/* Friday Timeline */}
        <section id="friday" className="py-16 bg-wedding-neutral-50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center">
                <Typography variant="h2" className="font-serif">
                  Friday, <span className="font-script text-7xl">July 17</span>
                </Typography>
                <Typography variant="body" color="muted" className="mt-2">
                  Arrival Day
                </Typography>
              </div>
              <Typography
                variant="body"
                color="muted"
                className="mt-4 text-center max-w-xl mx-auto"
              >
                Arrive at Chateau de Blier from 5PM onwards. We'd really
                appreciate it if you could lend us a hand to organize the venue
                — and we'll dine together afterwards!
              </Typography>
              <ol className="mt-8" aria-label="Friday schedule">
                <TimelineItem
                  time="From 5:00 PM"
                  title="Arrival & Check-in"
                  description="Check into your accommodation and take time to explore the beautiful grounds."
                  icon={<MapPinIcon />}
                />
                <TimelineItem
                  time="7:00 PM"
                  title="Welcome Drinks & Dinner"
                  description="Join us for casual drinks and dinner together. If you'd like to help prepare the castle for the wedding, we'd love the extra hands!"
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
              <div className="text-center">
                <Typography variant="h2" className="font-serif">
                  Saturday, <span className="font-script text-7xl">July 18</span>
                </Typography>
                <Typography variant="body" color="muted" className="mt-2">
                  The Wedding Day
                </Typography>
              </div>
              <Typography
                variant="body"
                color="muted"
                className="mt-4 text-center max-w-xl mx-auto"
              >
                The wedding day — let's start with brunch from 9:30 AM before
                getting ready for the festivities.
              </Typography>

              {/* Quick reference banner */}
              <div className="mt-6 mb-8 p-4 bg-wedding-coral-50/50 rounded-lg border border-wedding-coral-100">
                <a
                  href="/#info-cards"
                  className="flex items-center justify-between text-sm group"
                >
                  <span className="text-wedding-neutral-600">
                    <span className="font-medium text-wedding-neutral-700">
                      Quick reference:
                    </span>{" "}
                    Dress code, photography & gifts
                  </span>
                  <span className="text-wedding-coral-500 group-hover:text-wedding-coral-600 transition-colors">
                    View →
                  </span>
                </a>
              </div>

              <ol aria-label="Saturday schedule">
                <TimelineItem
                  time="9:30 - 11:00 AM"
                  title="Brunch"
                  description="A leisurely brunch together before getting ready for the festivities."
                  icon={<UtensilsIcon />}
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
              <div className="text-center">
                <Typography variant="h2" className="font-serif">
                  Sunday, <span className="font-script text-7xl">July 19</span>
                </Typography>
                <Typography variant="body" color="muted" className="mt-2">
                  Farewell Day
                </Typography>
              </div>
              <Typography
                variant="body"
                color="muted"
                className="mt-4 text-center max-w-xl mx-auto"
              >
                A big communal breakfast where everyone contributes — it's
                early, but we need to check out by 11 AM. It was great
                celebrating with you!
              </Typography>
              <ol className="mt-8" aria-label="Sunday schedule">
                <TimelineItem
                  time="9:00 - 10:30 AM"
                  title="Post-Wedding Breakfast"
                  description="A big communal breakfast where everyone contributes. Bring something to share!"
                  icon={<UtensilsIcon />}
                />
                <TimelineItem
                  time="11:00 AM"
                  title={<>Check-out & <span className="font-script text-6xl font-light text-wedding-purple-500">Farewell</span></>}
                  description="Time to say goodbye! If you have time afterwards, explore the region."
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
