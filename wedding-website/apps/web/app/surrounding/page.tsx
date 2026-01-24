import { Navbar, Footer, PageHero } from "@repo/ui/organisms";
import { Typography, BackToTop } from "@repo/ui/atoms";

const activities = [
  {
    name: "Nearby Village",
    description:
      "Durbuy is often called the smallest city in the world and is known for its charming medieval streets along the Ourthe River in the Belgian Ardennes. It is a popular destination for outdoor activities like hiking and kayaking, as well as cozy cafés and local restaurants.",
    imageSrc: "/images/activity-1.png",
    linkText: null,
    url: null,
  },
  {
    name: "Kayaking",
    description:
      "Sail on the clear water of the Ourthe river, surrounded by the natural beauty of the Ardennes. Paddle through the breathtaking landscapes of the region, while enjoying a moment of relaxation and adventure with family and friends.",
    imageSrc: "/images/activity-2.png",
    linkText: "Adventure-valley Kayak",
    url: "https://www.adventure-valley.be/en/activities/kayak",
  },
  {
    name: "Caves of Hotton",
    description:
      "About a short drive away, these fascinating natural caves are one of Wallonia's most impressive underground systems. You can explore stalactite and stalagmite galleries — a great rainy-day activity and a striking contrast to the Ardennes' outdoor scenery.",
    imageSrc: "/images/activity-3.png",
    linkText: "Grottes de Hotton",
    url: "https://grottesdehotton.be/en/home/",
  },
  {
    name: "Treetop Parc",
    description:
      "From footbridges to cabins, discover the trail of the parc which is 200 meters long and more than 15 meters high. It allows you and your little ones to discover the forest up close!",
    imageSrc: "/images/activity-4.png",
    linkText: "Treetop Parc Chlorophylle",
    url: "https://www.parcchlorophylle.com/en-GB/",
  },
  {
    name: "Hiking Trips",
    description:
      "Go on a hiking trip in the Ardennes, where forested hills, river valleys, and scenic viewpoints create the perfect escape into nature.",
    imageSrc: "/images/activity-5.png",
    linkText: "Hiking suggestions",
    url: "https://www.alltrails.com/belgium/wallonia/liege",
  },
  {
    name: "Animal Parc",
    description:
      "This 10 ha park offers you the opportunity to observe the inhabitants of our forests in their natural habitat. You will meet a herd of fallow deer, mouflon, a herd of wild boar, wolves, lynxes, foxes, and eagle-owls...",
    imageSrc: "/images/activity-6.png",
    linkText: "Animal parc Gibier Laroche",
    url: "https://www.parc-gibier-laroche.be/",
  },
];

export default function SurroundingPage(): React.ReactElement {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          title="The Surrounding"
          subtitle="Explore the Belgian Ardennes"
          shape="wave"
        />

        {/* Intro Section with Decorative Elements */}
        <section className="py-16">
          <div className="container max-w-3xl mx-auto px-4 text-center">
            {/* Decorative flourish */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-wedding-coral-300" />
              <span className="text-wedding-coral-400 text-2xl">♡</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-wedding-coral-300" />
            </div>

            <Typography
              variant="body"
              color="muted"
              className="text-lg leading-relaxed max-w-2xl mx-auto"
            >
              The Belgian Ardennes is a beautiful region with plenty to see and
              do. Whether you love outdoor adventures, exploring caves, or
              simply enjoying the peaceful countryside, there is something for
              everyone.
            </Typography>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-16 bg-wedding-neutral-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Typography variant="h2" className="font-serif mb-3">
                Things <span className="font-script text-6xl">to</span> Do
              </Typography>
              <div className="h-px w-16 bg-wedding-coral-400 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {activities.map((activity) => (
                <article
                  key={activity.name}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-wedding-neutral-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative aspect-[4/3]">
                    <img
                      src={activity.imageSrc}
                      alt={activity.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-script text-6xl text-wedding-coral-500 mb-3">
                      {activity.name}
                    </h3>
                    <Typography
                      variant="body"
                      color="muted"
                      className="text-sm mb-4 leading-relaxed"
                    >
                      {activity.description}
                    </Typography>
                    {activity.url && activity.linkText && (
                      <a
                        href={activity.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-wedding-coral-500 hover:text-wedding-coral-600 font-medium text-sm transition-colors"
                      >
                        {activity.linkText}
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Tip Section */}
        <section className="py-12">
          <div className="container max-w-2xl mx-auto px-4 text-center">
            <div className="p-6 bg-wedding-coral-50/50 rounded-xl border border-wedding-coral-100">
              <Typography variant="h4" className="font-serif mb-2">
                Planning to explore?
              </Typography>
              <Typography variant="body" color="muted" className="text-sm">
                If you're staying for the full weekend, Sunday morning is a
                great time to visit the surrounding area before heading home!
              </Typography>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
