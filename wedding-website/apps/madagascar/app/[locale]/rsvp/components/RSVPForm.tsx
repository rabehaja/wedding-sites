"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Typography } from "@repo/ui/atoms";

interface Guest {
  name: string;
  email: string;
}

type TourInterest = "" | "yes" | "not-sure" | "no";

interface FormData {
  name: string;
  email: string;
  guests: Guest[];
  dietaryRequirements: string[];
  dietaryOther: string;
  tourInterest: TourInterest;
  preferredRegions: string[];
  stayLength: string;
  travelInland: string;
  notes: string;
}

const INPUT_CLASS =
  "w-full px-4 py-3 border border-wedding-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-purple-500 focus:border-transparent transition-all";

const DIETARY_OPTIONS = [
  "vegetarian",
  "vegan",
  "glutenFree",
  "dairyFree",
  "nutAllergy",
  "other",
] as const;

const REGION_OPTIONS = [
  "regionNorth",
  "regionSouth",
  "regionEast",
  "regionWest",
  "regionCenter",
  "suggestMe",
] as const;

const STAY_LENGTH_OPTIONS = [
  "stayLessThan1Week",
  "stay1to2Weeks",
  "stay2to3Weeks",
  "stay3PlusWeeks",
] as const;

const TRAVEL_INLAND_OPTIONS = [
  "travelFewDays",
  "travelAboutAWeek",
  "travel2Weeks",
  "travelAsLong",
] as const;

export function RSVPForm(): React.ReactElement {
  const t = useTranslations("rsvp");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    guests: [],
    dietaryRequirements: [],
    dietaryOther: "",
    tourInterest: "",
    preferredRegions: [],
    stayLength: "",
    travelInland: "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const addGuest = () => {
    setFormData({
      ...formData,
      guests: [...formData.guests, { name: "", email: "" }],
    });
  };

  const removeGuest = (index: number) => {
    setFormData({
      ...formData,
      guests: formData.guests.filter((_, i) => i !== index),
    });
  };

  const updateGuest = (index: number, field: keyof Guest, value: string) => {
    const updated = formData.guests.map((guest, i) =>
      i === index ? { ...guest, [field]: value } : guest
    );
    setFormData({ ...formData, guests: updated });
  };

  const toggleDietary = (id: string) => {
    const updated = formData.dietaryRequirements.includes(id)
      ? formData.dietaryRequirements.filter((d) => d !== id)
      : [...formData.dietaryRequirements, id];
    setFormData({ ...formData, dietaryRequirements: updated });
  };

  const toggleRegion = (id: string) => {
    const updated = formData.preferredRegions.includes(id)
      ? formData.preferredRegions.filter((r) => r !== id)
      : [...formData.preferredRegions, id];
    setFormData({ ...formData, preferredRegions: updated });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const rsvpUrl = process.env.NEXT_PUBLIC_RSVP_URL;

      if (rsvpUrl) {
        const tourLabels: Record<string, string> = {
          yes: t("tourYes"),
          "not-sure": t("tourNotSure"),
          no: t("tourNo"),
        };

        const params = new URLSearchParams({
          name: formData.name,
          email: formData.email,
          guestCount: String(1 + formData.guests.length),
          guestNames: formData.guests.map((g) => g.name).join(", "),
          guestEmails: formData.guests.map((g) => g.email).join(", "),
          dietaryRequirements: formData.dietaryRequirements
            .map((key) => t(key))
            .join(", "),
          dietaryOther: formData.dietaryOther,
          tourInterest: tourLabels[formData.tourInterest] || "",
          preferredRegions: formData.preferredRegions
            .map((key) => t(key))
            .join(", "),
          stayLength: formData.stayLength ? t(formData.stayLength) : "",
          travelInland: formData.travelInland ? t(formData.travelInland) : "",
          notes: formData.notes,
          timestamp: new Date().toISOString(),
        });
        await fetch(`${rsvpUrl}?${params.toString()}`, {
          method: "POST",
          mode: "no-cors",
        });
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error("RSVP submission error:", err);
      setError(t("errorMessage"));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-16">
        <div className="container max-w-2xl mx-auto px-4 text-center">
          <div className="p-8 bg-wedding-purple-100/50 rounded-xl">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-wedding-coral-100 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-wedding-coral-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <Typography variant="h3" className="font-serif mb-4">
              {t.rich("seeYouIn", {
                in: () => (
                  <span className="font-script text-6xl">{t("in")}</span>
                ),
              })}
            </Typography>
            <Typography variant="body" color="muted">
              {t("seeYouText")}
            </Typography>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container max-w-2xl mx-auto px-4">
        {/* Deadline Banner */}
        <div className="mb-8 p-4 bg-wedding-coral-50 border border-wedding-coral-200 rounded-lg text-center">
          <p className="text-wedding-coral-600 font-medium">
            {t.rich("respondBy", {
              date: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-center">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* ── Section 1: Your Information ── */}
          <div className="space-y-4">
            <Typography variant="h4" className="font-serif">
              {t("yourInfo")}
            </Typography>

            <div>
              <label className="block text-sm font-medium text-wedding-neutral-700 mb-2">
                {t("fullName")}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={INPUT_CLASS}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-wedding-neutral-700 mb-2">
                {t("email")}
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={INPUT_CLASS}
              />
            </div>

            {/* Additional Guests */}
            {formData.guests.length > 0 && (
              <div className="space-y-4 mt-4">
                {formData.guests.map((guest, index) => (
                  <div
                    key={index}
                    className="p-4 bg-wedding-neutral-50 rounded-lg border border-wedding-neutral-200 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-wedding-neutral-700">
                        {t("guestName", { number: index + 2 }).split(" — ")[0]}
                      </p>
                      <button
                        type="button"
                        onClick={() => removeGuest(index)}
                        className="text-sm text-red-500 hover:text-red-700 transition-colors"
                      >
                        {t("removeGuest")}
                      </button>
                    </div>
                    <div>
                      <label className="block text-sm text-wedding-neutral-600 mb-1">
                        {t("guestName", { number: index + 2 })}
                      </label>
                      <input
                        type="text"
                        required
                        value={guest.name}
                        onChange={(e) =>
                          updateGuest(index, "name", e.target.value)
                        }
                        placeholder={t("guestNamePlaceholder")}
                        className={INPUT_CLASS}
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-wedding-neutral-600 mb-1">
                        {t("guestEmail", { number: index + 2 })}
                      </label>
                      <input
                        type="email"
                        required
                        value={guest.email}
                        onChange={(e) =>
                          updateGuest(index, "email", e.target.value)
                        }
                        placeholder={t("guestEmailPlaceholder")}
                        className={INPUT_CLASS}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={addGuest}
              className="flex items-center gap-2 text-sm font-medium text-wedding-purple-600 hover:text-wedding-purple-700 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              {t("addGuest")}
            </button>
          </div>

          {/* ── Section 2: Food & Dietary ── */}
          <div className="space-y-4">
            <Typography variant="h4" className="font-serif">
              {t("dietaryTitle")}
            </Typography>
            <p className="text-sm text-wedding-neutral-500">
              {t("dietaryText")}
            </p>

            <div className="grid grid-cols-2 gap-3">
              {DIETARY_OPTIONS.map((option) => (
                <label
                  key={option}
                  className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-all ${
                    formData.dietaryRequirements.includes(option)
                      ? "border-wedding-purple-400 bg-wedding-purple-50"
                      : "border-wedding-neutral-200 hover:bg-wedding-neutral-50"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.dietaryRequirements.includes(option)}
                    onChange={() => toggleDietary(option)}
                    className="w-4 h-4 text-wedding-purple-500 focus:ring-wedding-purple-500 rounded"
                  />
                  <span className="text-sm text-wedding-neutral-700">
                    {t(option)}
                  </span>
                </label>
              ))}
            </div>

            {formData.dietaryRequirements.includes("other") && (
              <input
                type="text"
                value={formData.dietaryOther}
                onChange={(e) =>
                  setFormData({ ...formData, dietaryOther: e.target.value })
                }
                placeholder={t("otherPlaceholder")}
                className={INPUT_CLASS}
              />
            )}
          </div>

          {/* ── Section 3: Tour Interest ── */}
          <div className="space-y-4">
            <Typography variant="h4" className="font-serif">
              {t("tourTitle")}
            </Typography>
            <p className="text-sm text-wedding-neutral-500">
              {t("tourText")}
            </p>

            <div className="space-y-3">
              {(
                [
                  {
                    value: "yes",
                    label: t("tourYes"),
                    sub: t("tourYesSub"),
                  },
                  {
                    value: "not-sure",
                    label: t("tourNotSure"),
                    sub: t("tourNotSureSub"),
                  },
                  {
                    value: "no",
                    label: t("tourNo"),
                    sub: t("tourNoSub"),
                  },
                ] as const
              ).map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-all ${
                    formData.tourInterest === option.value
                      ? "border-wedding-purple-400 bg-wedding-purple-50"
                      : "border-wedding-neutral-200 hover:bg-wedding-neutral-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="tourInterest"
                    value={option.value}
                    checked={formData.tourInterest === option.value}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        tourInterest: e.target.value as TourInterest,
                        ...(e.target.value === "no" && {
                          preferredRegions: [],
                          stayLength: "",
                          travelInland: "",
                        }),
                      })
                    }
                    className="w-4 h-4 text-wedding-purple-500 focus:ring-wedding-purple-500"
                  />
                  <div>
                    <p className="font-medium text-wedding-neutral-700">
                      {option.label}
                    </p>
                    <p className="text-sm text-wedding-neutral-500">
                      {option.sub}
                    </p>
                  </div>
                </label>
              ))}
            </div>

            {/* Tour sub-fields — only when "yes" or "not-sure" */}
            {(formData.tourInterest === "yes" ||
              formData.tourInterest === "not-sure") && (
              <div className="space-y-6 mt-4 p-5 bg-wedding-purple-50/50 rounded-xl border border-wedding-purple-100">
                {/* Preferred Regions */}
                <div className="space-y-3">
                  <p className="text-sm font-medium text-wedding-neutral-700">
                    {t("preferredRegions")}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {REGION_OPTIONS.map((option) => (
                      <label
                        key={option}
                        className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-all ${
                          formData.preferredRegions.includes(option)
                            ? "border-wedding-purple-400 bg-white"
                            : "border-wedding-neutral-200 bg-white/50 hover:bg-white"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.preferredRegions.includes(option)}
                          onChange={() => toggleRegion(option)}
                          className="w-4 h-4 text-wedding-purple-500 focus:ring-wedding-purple-500 rounded"
                        />
                        <span className="text-sm text-wedding-neutral-700">
                          {t(option)}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Length of Stay */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-wedding-neutral-700">
                    {t("stayLength")}
                  </label>
                  <select
                    value={formData.stayLength}
                    onChange={(e) =>
                      setFormData({ ...formData, stayLength: e.target.value })
                    }
                    className={INPUT_CLASS}
                  >
                    <option value="">—</option>
                    {STAY_LENGTH_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {t(option)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Travel Inland */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-wedding-neutral-700">
                    {t("travelInland")}
                  </label>
                  <select
                    value={formData.travelInland}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        travelInland: e.target.value,
                      })
                    }
                    className={INPUT_CLASS}
                  >
                    <option value="">—</option>
                    {TRAVEL_INLAND_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {t(option)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* ── Section 4: Anything Else ── */}
          <div className="space-y-4">
            <Typography variant="h4" className="font-serif">
              {t("anythingElse")}
            </Typography>
            <textarea
              rows={4}
              value={formData.notes}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
              placeholder={t("anythingElsePlaceholder")}
              className={`${INPUT_CLASS} resize-none`}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting || !formData.name || !formData.email}
            className="w-full py-4 btn-gradient text-white font-semibold text-lg rounded-full transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wedding-purple-500 focus-visible:ring-offset-2"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                {t("submitting")}
              </span>
            ) : (
              t("submit")
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
