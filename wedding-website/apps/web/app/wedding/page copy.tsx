import { Navbar, VideoHero, ContentSection, Footer } from "@repo/ui/organisms";
import {
  Typography,
  RingsIcon,
  ChampagneIcon,
  UtensilsIcon,
  CakeIcon,
  MusicIcon,
} from "@repo/ui/atoms";
import { SectionHeader, TimelineItem } from "@repo/ui/molecules";

export default function WeddingPage(): React.ReactElement {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <VideoHero videoSrc="/videos/castle_video.mp4" />

        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Typography variant="h3" className="text-center mb-8">
                July 18, 2026 - Schedule
              </Typography>

              <ol className="mt-8" aria-label="Wedding day schedule">
                <TimelineItem
                  time="3:00 PM"
                  title="Ceremony"
                  icon={<RingsIcon />}
                  description="Our ceremony will take place in the château's enchanting garden if the weather agrees, surrounded by all our loved ones."
                />
                <TimelineItem
                  time="3:30 PM"
                  title="Cocktail Reception"
                  icon={<ChampagneIcon />}
                  description="Following the ceremony, join us on the terrace for some champagne! There will be the possibility to play some awesome games and to make some photos."
                />
                <TimelineItem
                  time="6:00 PM"
                  title="Dinner Time"
                  icon={<UtensilsIcon />}
                  description="You can enjoy the buffet from a local gourmet chef, either seated in the festive dining room inside or on one of the picnic tables outside while enjoying the sun."
                />
                <TimelineItem
                  time="8:00 PM"
                  title="Dessert Time"
                  icon={<CakeIcon />}
                  description="We will be cutting our wedding cake and you will get your piece of it! Yumm!!"
                />
                <TimelineItem
                  time="8:15 PM"
                  title="Dancing the Night Away"
                  icon={<MusicIcon />}
                  description="Lots of time for dancing and having fun! Drinks are on us!"
                  isLast
                />
              </ol>
            </div>
          </div>
        </section>

        <section className="py-16 bg-wedding-neutral-50">
          <div className="container max-w-7xl mx-auto px-4">
            <SectionHeader title="Dress Code" />
            <div className="max-w-2xl mx-auto mt-8">
              <Typography variant="body" color="muted" className="text-center">
                It is a special day, so a great occasion to dress up in a
                formal/semi-formal way. We encourage you to dress elegantly for
                this special occasion. Do not hesitate to dress in any colour or
                pattern you wish (maybe not in white).
              </Typography>
            </div>
          </div>
        </section>

        <ContentSection title="Photography">
          <Typography variant="body" color="muted" className="text-center">
            Our guests will be our photographers! Some selected guests will have
            a camera. We will be collecting all pictures that guests made via a
            QR code available at the location!
          </Typography>
          <Typography variant="body" color="muted" className="text-center mt-4">
            But be aware: There is also a photo corner for you to take some nice
            pictures!
          </Typography>
        </ContentSection>

        <section className="py-16 bg-wedding-neutral-50">
          <div className="container max-w-7xl mx-auto px-4">
            <SectionHeader title="Gifts" />
            <div className="max-w-2xl mx-auto mt-8">
              <Typography variant="body" color="muted" className="text-center">
                Your presence is truly the best gift we could ask for. But if you
                may want to give us a little something for our wedding, we would
                appreciate a gift in monetary form to save for our future plans.
              </Typography>
            </div>
          </div>
        </section>

        <ContentSection title="Questions?">
          <Typography variant="body" color="muted" className="text-center">
            Let us know via WhatsApp or via email:{" "}
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
