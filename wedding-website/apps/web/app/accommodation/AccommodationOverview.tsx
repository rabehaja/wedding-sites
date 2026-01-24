"use client";

import { Typography } from "@repo/ui/atoms";

const accommodationOptions = [
  {
    id: "château",
    icon: "🏰",
    title: "The Château",
    description: "Stay with us at the castle",
    detail: "20 rooms · From €40/person/night",
  },
  {
    id: "camping",
    icon: "⛺",
    title: "Camping & Glamping",
    description: "Nearby at Domaine Le Val de l'Aisne",
    detail: "450m away · 6 min walk",
  },
  {
    id: "airbnb",
    icon: "🏠",
    title: "Holiday Homes",
    description: "Airbnb & Booking.com options",
    detail: "More privacy · Various locations",
  },
];

export function AccommodationOverview(): React.ReactElement {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 bg-wedding-coral-50/30">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl text-wedding-neutral-700">
            Where <span className="font-script text-6xl">to</span> Stay
          </h2>
          <Typography variant="body" color="muted" className="mt-2">
            Choose the accommodation that suits you best
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {accommodationOptions.map((option) => (
            <a
              key={option.id}
              href={`#${option.id}`}
              onClick={(e) => handleClick(e, option.id)}
              className="bg-white rounded-xl p-6 shadow-sm border border-wedding-neutral-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center group"
            >
              <div className="text-4xl mb-3">{option.icon}</div>
              <h3 className="font-serif text-lg font-semibold text-wedding-neutral-700 mb-2">
                {option.title}
              </h3>
              <p className="text-sm text-wedding-neutral-500 mb-3">
                {option.description}
              </p>
              <div className="text-xs text-wedding-coral-500 font-medium">
                {option.detail}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
