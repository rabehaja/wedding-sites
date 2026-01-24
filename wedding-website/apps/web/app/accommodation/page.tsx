import { Navbar, Footer, PageHero } from "@repo/ui/organisms";
import { Typography, BackToTop } from "@repo/ui/atoms";
import { AccommodationNav } from "./AccommodationNav";
import { AccommodationOverview } from "./AccommodationOverview";

const roomPrices = [
  { quantity: 1, type: "single room", price: 60, perBed: 60 },
  { quantity: 7, type: "two-bed room", price: 100, perBed: 50 },
  { quantity: 2, type: "three-bed room", price: 150, perBed: 50 },
  { quantity: 8, type: "four-bed room", price: 160, perBed: 40 },
  { quantity: 1, type: "five-bed room", price: 200, perBed: 40 },
];

export default function AccommodationPage(): React.ReactElement {
  return (
    <>
      <Navbar />
      <AccommodationNav />
      <main id="main-content">
        <PageHero
          title="Accommodation"
          subtitle="Where to stay during the wedding weekend"
          shape="diagonal"
        />

        <AccommodationOverview />

        {/* Section 1: The Château */}
        <section id="château" className="py-16">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Text Content */}
              <div>
                <h2 className="font-script text-7xl text-wedding-coral-500 mb-6">
                  The Château
                </h2>
                <Typography variant="body" color="muted" className="leading-relaxed">
                  Come and join us for the whole weekend at the Château from
                  Friday to Sunday with lot's of fun, joy and laughter in a true
                  family spirit. The château has a total of 20 rooms and 60 beds
                  which we will rent to our guests. If you are interested to
                  stay for two nights at the castle, let us know as soon as
                  possible. Family first, and then we operate on a
                  first-come-first-serve basis. Only want to spend one night? Do
                  let us know, we might still have room for you.
                </Typography>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-wedding-neutral-700 underline mb-4">
                    Details of your stay:
                  </h3>
                  <Typography
                    variant="body"
                    color="muted"
                    className="leading-relaxed"
                  >
                    We will all be a big family for the duration of the stay at
                    the Château, so be prepared to share a rustic and historic
                    room with a few roomies. But do not worry, we invited the
                    most amazing people, so I am sure you will get along just
                    fine! There will be shared showers on the corridor as well
                    as shared toilets, just like in a big holiday home. You can
                    indicate your preferences regarding room size and preferred
                    roomies when RSVP-ing. We will take it into account as much
                    as possible. Please see the prices below for your
                    information.
                  </Typography>
                </div>
              </div>

              {/* Main Image */}
              <div>
                <img
                  src="/images/accommodation-main.jpg"
                  alt="Château de Blier exterior"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>

            {/* Room Prices */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-wedding-neutral-100">
                <h3 className="text-lg font-semibold text-wedding-neutral-700 underline mb-4">
                  Room prices:
                </h3>
                <ul className="space-y-3">
                  {roomPrices.map((room) => (
                    <li key={room.type} className="text-wedding-neutral-600">
                      <span className="font-medium">
                        {room.quantity} x {room.type}:
                      </span>
                      <br />
                      {room.price} EUR{" "}
                      {room.quantity > 1 && `(${room.perBed} EUR per bed)`} per
                      night
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-wedding-neutral-200">
                  <Typography
                    variant="body"
                    color="muted"
                    className="text-sm italic"
                  >
                    *If you wish to camp in tents on the property (or with your
                    caravan), please let us know in advance so that we can
                    verify with the owners whether this is possible. We might
                    have to pay some extra cost, so be prepared to chip in with
                    a few euros.
                  </Typography>
                </div>
              </div>

              {/* Interior Images Grid */}
              <div className="grid grid-cols-3 gap-3">
                <img
                  src="/images/château-interior-1.jpg"
                  alt="Château interior"
                  className="rounded-lg object-cover w-full h-32"
                />
                <img
                  src="/images/château-interior-2.jpg"
                  alt="Château bedroom"
                  className="rounded-lg object-cover w-full h-32"
                />
                <img
                  src="/images/château-interior-3.jpg"
                  alt="Château room"
                  className="rounded-lg object-cover w-full h-32"
                />
                <img
                  src="/images/château-interior-4.jpg"
                  alt="Château dining"
                  className="rounded-lg object-cover w-full h-32 col-span-1"
                />
                <img
                  src="/images/château-interior-5.jpg"
                  alt="Château living"
                  className="rounded-lg object-cover w-full h-32 col-span-2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Nearby Camping/Glamping */}
        <section id="camping" className="py-16 bg-wedding-neutral-50">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Text Content */}
              <div>
                <h2 className="font-script text-6xl text-wedding-coral-500 mb-6">
                  Nearby Camping/Glamping
                </h2>
                <Typography variant="body" color="muted" className="leading-relaxed">
                  Do you prefer to stay at a more quiet place with more privacy
                  and calm? Do you like to camp with your caravan or in a tent
                  or glamp in a luxurious dome, or a safari-tent? No problem,
                  because another great and nearby accommodation possibility
                  would be the Camping place "Domaine Le Val de l'Aisne" right
                  across the wedding location, only 450m away (6 minutes by foot
                  across the street).
                </Typography>
                <Typography variant="body" color="muted" className="mt-4">
                  Please consult the webpage directly for more information:{" "}
                  <a
                    href="https://levaldelaisne.be"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-wedding-coral-500 hover:text-wedding-coral-600 underline font-medium"
                  >
                    levaldelaisne
                  </a>
                </Typography>
                <Typography
                  variant="body"
                  color="muted"
                  className="mt-4 text-sm italic"
                >
                  *Should you have difficulties with the language (NL or FR),
                  please do not hesitate to contact us to help you book your
                  place.
                </Typography>
              </div>

              {/* Map/Location Illustration */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-wedding-neutral-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-center">
                    <div className="text-wedding-coral-500 text-2xl mb-1">△</div>
                    <p className="text-sm font-medium text-wedding-neutral-700">
                      Domaine
                      <br />
                      Le Val d'Aisne
                    </p>
                  </div>
                  <div className="flex-1 border-t-2 border-dashed border-wedding-neutral-300 mx-4 relative">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-xs text-wedding-neutral-500">
                      450m
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="text-wedding-coral-500 text-2xl mb-1">📍</div>
                    <p className="text-sm font-medium text-wedding-neutral-700">
                      Château
                      <br />
                      de Blier
                    </p>
                  </div>
                </div>
                <p className="text-center text-sm text-wedding-neutral-500 mt-4">
                  6 minutes walk across the street
                </p>
              </div>
            </div>

            {/* Camping Images */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <img
                src="/images/accommodation-6.png"
                alt="Camping lake view"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <img
                src="/images/accommodation-2.png"
                alt="Glamping dome"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section 3: Holiday Homes or Airbnbs */}
        <section id="airbnb" className="py-16">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="font-script text-6xl text-wedding-coral-500 mb-6 text-center">
              Holiday homes or Airbnbs in the Region
            </h2>
            <Typography
              variant="body"
              color="muted"
              className="leading-relaxed text-center max-w-3xl mx-auto"
            >
              If you prefer to stay in a secluded holiday home with more
              privacy, you can also check the various possibilities in the Area
              via AirBnB or Booking.com. However, be aware of the distance to
              the wedding venue, it might not seem far on the map but commuting
              in the region sometimes takes more time than expected.
            </Typography>

            {/* Booking Widget Cards */}
            <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Airbnb Card */}
              <a
                href="https://www.airbnb.com/s/Erezée--Belgium/homes"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 shadow-sm border border-wedding-neutral-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FF5A5F]/10 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-[#FF5A5F]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-wedding-neutral-700 mb-2">
                  Airbnb
                </h3>
                <p className="text-sm text-wedding-neutral-500 mb-4">
                  Browse holiday homes and apartments in Erezée
                </p>
                <span className="inline-flex items-center gap-2 text-[#FF5A5F] font-medium text-sm group-hover:gap-3 transition-all">
                  Search on Airbnb
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
                </span>
              </a>

              {/* Booking.com Card */}
              <a
                href="https://www.booking.com/searchresults.html?ss=Erez%C3%A9e%2C+Wallonia%2C+Belgium"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 shadow-sm border border-wedding-neutral-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#003580]/10 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-[#003580]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M2.75 5A2.75 2.75 0 000 7.75v8.5A2.75 2.75 0 002.75 19h18.5A2.75 2.75 0 0024 16.25v-8.5A2.75 2.75 0 0021.25 5H2.75zM4 8.5h3.5a2 2 0 012 2v3a2 2 0 01-2 2H4V8.5zm12 7h4v-1h-4v1zm-2-3h6v-1h-6v1zm0-2h6v-1h-6v1z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-wedding-neutral-700 mb-2">
                  Booking.com
                </h3>
                <p className="text-sm text-wedding-neutral-500 mb-4">
                  Find hotels and B&Bs near Erezée
                </p>
                <span className="inline-flex items-center gap-2 text-[#003580] font-medium text-sm group-hover:gap-3 transition-all">
                  Search on Booking
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
                </span>
              </a>

              {/* Google Maps Card */}
              <a
                href="https://www.google.com/maps/search/hotels+near+Erez%C3%A9e,+Belgium"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 shadow-sm border border-wedding-neutral-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#4285F4]/10 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-[#4285F4]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-wedding-neutral-700 mb-2">
                  Google Maps
                </h3>
                <p className="text-sm text-wedding-neutral-500 mb-4">
                  Explore all nearby accommodations
                </p>
                <span className="inline-flex items-center gap-2 text-[#4285F4] font-medium text-sm group-hover:gap-3 transition-all">
                  View on Maps
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
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Need Help Section */}
        <section className="py-12 bg-wedding-purple/10">
          <div className="container max-w-2xl mx-auto px-4 text-center">
            <Typography variant="h4" className="font-serif mb-3">
              Need help booking?
            </Typography>
            <Typography variant="body" color="muted" className="mb-4">
              If you need assistance with accommodation bookings or have
              language difficulties, please don't hesitate to contact us.
            </Typography>
            <a
              href="mailto:weddingloicandwiebke@gmail.com"
              className="inline-flex items-center gap-2 text-wedding-purple-500 hover:text-wedding-purple-600 font-medium transition-colors"
            >
              weddingloicandwiebke@gmail.com
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
