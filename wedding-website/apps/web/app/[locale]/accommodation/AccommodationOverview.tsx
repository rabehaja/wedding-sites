"use client";

import { Typography } from "@repo/ui/atoms";
import { useTranslations } from "next-intl";

export function AccommodationOverview(): React.ReactElement {
  const t = useTranslations("accommodation");

  const accommodationOptions = [
    {
      id: "château",
      icon: "🏰",
      title: t("theChateau"),
      description: t("stayWithUs"),
      detail: t("chateauDetail"),
    },
    {
      id: "camping",
      icon: "⛺",
      title: t("campingGlamping"),
      description: t("campingDesc"),
      detail: t("campingDetail"),
    },
    {
      id: "airbnb",
      icon: "🏠",
      title: t("holidayHomes"),
      description: t("holidayHomesDesc"),
      detail: t("holidayHomesDetail"),
    },
  ];

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
            {t.rich("whereToStay", {
              to: () => <span className="font-script text-6xl">{t("to")}</span>,
            })}
          </h2>
          <Typography variant="body" color="muted" className="mt-2">
            {t("chooseAccommodation")}
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
