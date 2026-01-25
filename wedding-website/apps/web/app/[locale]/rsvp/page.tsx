"use client";

import { useState } from "react";
import { Navbar, PageHero, Footer } from "@repo/ui/organisms";
import { Typography, InfoBanner } from "@repo/ui/atoms";
import { useTranslations } from "next-intl";

export default function RSVPPage(): React.ReactElement {
  const t = useTranslations("rsvp");

  const ROOM_TYPES = [
    {
      id: "single",
      name: t("singleRoom", { defaultValue: "Single Room" }),
      beds: 1,
      quantity: 1,
      pricePerNight: 60,
      pricePerBed: 60,
    },
    {
      id: "double",
      name: t("twoBedRoom", { defaultValue: "Two-Bed Room" }),
      beds: 2,
      quantity: 7,
      pricePerNight: 100,
      pricePerBed: 50,
    },
    {
      id: "triple",
      name: t("threeBedRoom", { defaultValue: "Three-Bed Room" }),
      beds: 3,
      quantity: 2,
      pricePerNight: 150,
      pricePerBed: 50,
    },
    {
      id: "quad",
      name: t("fourBedRoom", { defaultValue: "Four-Bed Room" }),
      beds: 4,
      quantity: 8,
      pricePerNight: 160,
      pricePerBed: 40,
    },
    {
      id: "five",
      name: t("fiveBedRoom", { defaultValue: "Five-Bed Room" }),
      beds: 5,
      quantity: 1,
      pricePerNight: 200,
      pricePerBed: 40,
    },
  ];

  const ATTENDANCE_OPTIONS = [
    {
      value: "full-weekend",
      label: t("fullWeekend"),
      sub: t("fullWeekendSub"),
    },
    {
      value: "saturday",
      label: t("saturdayOnly"),
      sub: t("saturdayOnlySub"),
    },
    {
      value: "no",
      label: t("cantMakeIt"),
      sub: t("cantMakeItSub"),
    },
  ];

  const DIETARY_OPTIONS = [
    { id: "vegetarian", label: t("vegetarian") },
    { id: "vegan", label: t("vegan") },
    { id: "gluten-free", label: t("glutenFree") },
    { id: "dairy-free", label: t("dairyFree") },
    { id: "nut-allergy", label: t("nutAllergy") },
    { id: "other", label: t("other") },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guestCount: 1,
    guestNames: [] as string[],
    attendance: "",
    roomType: "",
    camping: false,
    dietaryRequirements: [] as string[],
    dietaryOther: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const googleSheetsUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;

      // Calculate pricing
      const selectedRoom = ROOM_TYPES.find((r) => r.id === formData.roomType);
      const unitPrice = selectedRoom ? selectedRoom.pricePerNight : 0;
      const totalPrice = selectedRoom ? selectedRoom.pricePerNight * 2 : 0; // 2 nights

      if (googleSheetsUrl) {
        await fetch(googleSheetsUrl, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            unitPrice,
            totalPrice,
            timestamp: new Date().toISOString(),
          }),
        });
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error("Error submitting form:", err);
      setError(t("errorMessage"));
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show success message after submission
  if (isSubmitted) {
    return (
      <>
        <Navbar />
        <main id="main-content">
          <PageHero
            title={t("thankYou")}
            subtitle={t("receivedRsvp")}
            shape="wave"
          />
          <section className="py-16">
            <div className="container max-w-2xl mx-auto px-4 text-center">
              <div className="p-8 bg-wedding-purple/10 rounded-xl">
                <Typography variant="h3" className="font-serif mb-4">
                  {formData.attendance === "no" ? (
                    t("missYou")
                  ) : (
                    t.rich("seeYouJuly", {
                      in: () => <span className="font-script text-6xl">{t("in")}</span>,
                    })
                  )}
                </Typography>
                <Typography variant="body" color="muted">
                  {formData.attendance === "no"
                    ? t("missYouText")
                    : t("seeYouText")}
                </Typography>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          title={t("title")}
          subtitle={t("subtitle")}
          shape="wave"
        />

        <section className="py-16">
          <div className="container max-w-2xl mx-auto px-4">
            {/* Deadline Banner */}
            <div className="mb-8 p-4 bg-wedding-coral-50 border border-wedding-coral-200 rounded-lg text-center">
              <p className="text-wedding-coral-600 font-medium">
                {t.rich("respondBy", { date: () => <strong>May 15, 2026</strong> })}
              </p>
            </div>

            {error && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-center">
                <p className="text-red-600">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Guest Information */}
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
                    className="w-full px-4 py-3 border border-wedding-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-purple-500 focus:border-transparent transition-all"
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
                    className="w-full px-4 py-3 border border-wedding-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-purple-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-wedding-neutral-700 mb-2">
                    {t("guestCount")}
                  </label>
                  <select
                    required
                    value={formData.guestCount}
                    onChange={(e) => {
                      const newCount = parseInt(e.target.value) || 1;
                      const additionalGuests = Math.max(0, newCount - 1);

                      // Resize guestNames array, preserving existing names
                      const newGuestNames = [...formData.guestNames];
                      if (newGuestNames.length < additionalGuests) {
                        while (newGuestNames.length < additionalGuests) {
                          newGuestNames.push("");
                        }
                      } else {
                        newGuestNames.length = additionalGuests;
                      }

                      setFormData({
                        ...formData,
                        guestCount: newCount,
                        guestNames: newGuestNames,
                      });
                    }}
                    className="w-full px-4 py-2.5 border border-wedding-neutral-200 rounded-lg bg-white text-wedding-neutral-600 font-medium text-sm hover:bg-wedding-neutral-100 focus:outline-none focus:ring-2 focus:ring-wedding-purple-500 focus:border-transparent transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23525252%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M19%209l-7%207-7-7%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat pr-10"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Additional Guest Names - show when guestCount > 1 */}
                {formData.guestCount > 1 && (
                  <div className="space-y-3 mt-4 p-4 bg-wedding-neutral-50 rounded-lg border border-wedding-neutral-200">
                    <p className="text-sm font-medium text-wedding-neutral-700">
                      {t("additionalGuests")}
                    </p>
                    {Array.from({ length: formData.guestCount - 1 }).map(
                      (_, index) => (
                        <div key={index}>
                          <label className="block text-sm text-wedding-neutral-600 mb-1">
                            {t("guestLabel", { number: index + 2 })}
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.guestNames[index] || ""}
                            onChange={(e) => {
                              const newGuestNames = [...formData.guestNames];
                              newGuestNames[index] = e.target.value;
                              setFormData({
                                ...formData,
                                guestNames: newGuestNames,
                              });
                            }}
                            placeholder={t("guestPlaceholder", { number: index + 2 })}
                            className="w-full px-4 py-3 border border-wedding-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-purple-500 focus:border-transparent transition-all"
                          />
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>

              {/* Attendance */}
              <div className="space-y-4">
                <Typography variant="h4" className="font-serif">
                  {t("joiningUs")}
                </Typography>

                <div className="space-y-3">
                  {ATTENDANCE_OPTIONS.map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-all ${
                        formData.attendance === option.value
                          ? "border-wedding-purple-400 bg-wedding-purple-50"
                          : "border-wedding-neutral-200 hover:bg-wedding-neutral-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="attendance"
                        value={option.value}
                        checked={formData.attendance === option.value}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            attendance: e.target.value,
                            roomType: "",
                            camping: false,
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
              </div>

              {/* Room Selection - ONLY show when "full-weekend" is selected */}
              {formData.attendance === "full-weekend" && (
                <div className="space-y-4">
                  <Typography variant="h4" className="font-serif">
                    {t("roomPreference")}
                  </Typography>
                  <p className="text-sm text-wedding-neutral-500">
                    {t("roomPreferenceText")}
                  </p>

                  <InfoBanner
                    title={t("preferenceNoticeTitle")}
                    description={t("preferenceNoticeDesc")}
                    className="mt-2"
                  />

                  <div className="space-y-3">
                    {ROOM_TYPES.map((room) => (
                      <label
                        key={room.id}
                        className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-all ${
                          formData.roomType === room.id
                            ? "border-wedding-purple-400 bg-wedding-purple-50"
                            : "border-wedding-neutral-200 hover:bg-wedding-neutral-50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="room"
                            value={room.id}
                            checked={formData.roomType === room.id}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                roomType: e.target.value,
                              })
                            }
                            className="w-4 h-4 text-wedding-purple-500 focus:ring-wedding-purple-500"
                          />
                          <div>
                            <p className="font-medium text-wedding-neutral-700">
                              {room.name}
                            </p>
                            <p className="text-sm text-wedding-neutral-500">
                              {room.beds} {room.beds > 1 ? t("beds") : t("bed")} ·{" "}
                              {room.quantity} {t("available")}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-wedding-purple-600">
                            €{room.pricePerNight * 2}
                          </p>
                          <p className="text-xs text-wedding-neutral-400">
                            (€{room.pricePerBed}/bed/night)
                          </p>
                        </div>
                      </label>
                    ))}
                  </div>

                  {/* Camping Option */}
                  <div className="mt-6 p-4 bg-wedding-neutral-50 rounded-lg border border-wedding-neutral-200">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.camping}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            camping: e.target.checked,
                            roomType: e.target.checked ? "" : formData.roomType,
                          })
                        }
                        className="mt-1 w-4 h-4 text-wedding-purple-500 focus:ring-wedding-purple-500 rounded"
                      />
                      <div>
                        <p className="font-medium text-wedding-neutral-700">
                          {t("campingOption")}
                        </p>
                        <p className="text-sm text-wedding-neutral-500">
                          {t("campingOptionText")}
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              )}

              {/* Dietary Requirements - show for all attending guests */}
              {formData.attendance && formData.attendance !== "no" && (
                <div className="space-y-4">
                  <Typography variant="h4" className="font-serif">
                    {t("dietaryRequirements")}
                  </Typography>
                  <p className="text-sm text-wedding-neutral-500">
                    {t("dietaryRequirementsText")}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {DIETARY_OPTIONS.map((option) => (
                      <label
                        key={option.id}
                        className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-all ${
                          formData.dietaryRequirements.includes(option.id)
                            ? "border-wedding-purple-400 bg-wedding-purple-50"
                            : "border-wedding-neutral-200 hover:bg-wedding-neutral-50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.dietaryRequirements.includes(
                            option.id
                          )}
                          onChange={(e) => {
                            const updated = e.target.checked
                              ? [...formData.dietaryRequirements, option.id]
                              : formData.dietaryRequirements.filter(
                                  (id) => id !== option.id
                                );
                            setFormData({
                              ...formData,
                              dietaryRequirements: updated,
                            });
                          }}
                          className="w-4 h-4 text-wedding-purple-500 focus:ring-wedding-purple-500 rounded"
                        />
                        <span className="text-sm text-wedding-neutral-700">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>

                  {/* Show text input if "other" is selected */}
                  {formData.dietaryRequirements.includes("other") && (
                    <input
                      type="text"
                      value={formData.dietaryOther}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dietaryOther: e.target.value,
                        })
                      }
                      placeholder={t("otherPlaceholder")}
                      className="w-full px-4 py-3 border border-wedding-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-purple-500 focus:border-transparent transition-all"
                    />
                  )}
                </div>
              )}

              {/* Special Requests - show for all attending guests */}
              {formData.attendance && formData.attendance !== "no" && (
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
                    className="w-full px-4 py-3 border border-wedding-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-purple-500 focus:border-transparent transition-all resize-none"
                  />
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting || !formData.attendance}
                className="w-full py-4 bg-wedding-purple text-white font-medium rounded-lg hover:bg-wedding-purple-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t("submitting") : t("submit")}
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
