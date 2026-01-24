"use client";

import { useState } from "react";
import { Navbar, PageHero, Footer } from "@repo/ui/organisms";
import { Typography } from "@repo/ui/atoms";

const ROOM_TYPES = [
  {
    id: "single",
    name: "Single Room",
    beds: 1,
    quantity: 1,
    pricePerNight: 60,
    pricePerBed: 60,
  },
  {
    id: "double",
    name: "Two-Bed Room",
    beds: 2,
    quantity: 7,
    pricePerNight: 100,
    pricePerBed: 50,
  },
  {
    id: "triple",
    name: "Three-Bed Room",
    beds: 3,
    quantity: 2,
    pricePerNight: 150,
    pricePerBed: 50,
  },
  {
    id: "quad",
    name: "Four-Bed Room",
    beds: 4,
    quantity: 8,
    pricePerNight: 160,
    pricePerBed: 40,
  },
  {
    id: "five",
    name: "Five-Bed Room",
    beds: 5,
    quantity: 1,
    pricePerNight: 200,
    pricePerBed: 40,
  },
];

const ATTENDANCE_OPTIONS = [
  {
    value: "full-weekend",
    label: "Yes, for the full weekend!",
    sub: "Friday evening to Sunday morning",
  },
  {
    value: "saturday",
    label: "Yes, but only Saturday",
    sub: "Just the wedding day",
  },
  {
    value: "no",
    label: "Unfortunately, I can't make it",
    sub: "We'll miss you!",
  },
];

const DIETARY_OPTIONS = [
  { id: "vegetarian", label: "Vegetarian" },
  { id: "vegan", label: "Vegan" },
  { id: "gluten-free", label: "Gluten-free" },
  { id: "dairy-free", label: "Dairy-free" },
  { id: "nut-allergy", label: "Nut allergy" },
  { id: "other", label: "Other (please specify)" },
];

export default function RSVPPage(): React.ReactElement {
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
      setError("Something went wrong. Please try again or contact us directly.");
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
            title="Thank You!"
            subtitle="We've received your RSVP"
            shape="wave"
          />
          <section className="py-16">
            <div className="container max-w-2xl mx-auto px-4 text-center">
              <div className="p-8 bg-wedding-purple/10 rounded-xl">
                <Typography variant="h3" className="font-serif mb-4">
                  {formData.attendance === "no" ? (
                    "We'll miss you!"
                  ) : (
                    <>See you <span className="font-script text-6xl">in</span> July!</>
                  )}
                </Typography>
                <Typography variant="body" color="muted">
                  {formData.attendance === "no"
                    ? "Thank you for letting us know. We hope to celebrate with you another time!"
                    : "We're so excited to celebrate with you at Château de Blier. We'll be in touch with more details soon!"}
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
          title="RSVP"
          subtitle="Let us know you're coming"
          shape="wave"
        />

        <section className="py-16">
          <div className="container max-w-2xl mx-auto px-4">
            {/* Deadline Banner */}
            <div className="mb-8 p-4 bg-wedding-coral-50 border border-wedding-coral-200 rounded-lg text-center">
              <p className="text-wedding-coral-600 font-medium">
                Please respond by <strong>May 15, 2026</strong>
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
                  Your Information
                </Typography>

                <div>
                  <label className="block text-sm font-medium text-wedding-neutral-700 mb-2">
                    Full Name
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
                    Email Address
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
                    Number of Guests (including yourself)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
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
                    className="w-full px-4 py-3 border border-wedding-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-purple-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Additional Guest Names - show when guestCount > 1 */}
                {formData.guestCount > 1 && (
                  <div className="space-y-3 mt-4 p-4 bg-wedding-neutral-50 rounded-lg border border-wedding-neutral-200">
                    <p className="text-sm font-medium text-wedding-neutral-700">
                      Please enter the names of your additional guests:
                    </p>
                    {Array.from({ length: formData.guestCount - 1 }).map(
                      (_, index) => (
                        <div key={index}>
                          <label className="block text-sm text-wedding-neutral-600 mb-1">
                            Guest {index + 2}
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
                            placeholder={`Full name of guest ${index + 2}`}
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
                  Will you be joining us?
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
                    Room Preference
                  </Typography>
                  <p className="text-sm text-wedding-neutral-500">
                    Choose the room type that best fits your group. Prices are
                    for 2 nights (Friday & Saturday).
                  </p>

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
                              {room.beds} bed{room.beds > 1 ? "s" : ""} ·{" "}
                              {room.quantity} available
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
                          I prefer to camp (tent/caravan)
                        </p>
                        <p className="text-sm text-wedding-neutral-500">
                          Please note: We need to verify with the owners if this
                          is possible. There may be a small additional fee.
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
                    Dietary Requirements
                  </Typography>
                  <p className="text-sm text-wedding-neutral-500">
                    Please let us know if you or your guests have any dietary
                    requirements.
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
                      placeholder="Please specify other dietary requirements..."
                      className="w-full px-4 py-3 border border-wedding-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-purple-500 focus:border-transparent transition-all"
                    />
                  )}
                </div>
              )}

              {/* Special Requests - show for all attending guests */}
              {formData.attendance && formData.attendance !== "no" && (
                <div className="space-y-4">
                  <Typography variant="h4" className="font-serif">
                    Anything else?
                  </Typography>
                  <textarea
                    rows={4}
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    placeholder="Accessibility needs, special requests, or anything else we should know..."
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
                {isSubmitting ? "Submitting..." : "Submit RSVP"}
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
