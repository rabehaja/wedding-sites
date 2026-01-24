"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "château", label: "The Château", icon: "🏰" },
  { id: "camping", label: "Camping", icon: "⛺" },
  { id: "airbnb", label: "Holiday Homes", icon: "🏠" },
];

export function AccommodationNav(): React.ReactElement | null {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("château");

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky nav after scrolling past 400px
      setIsSticky(window.scrollY > 400);

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionData = sections[i];
        if (!sectionData) continue;
        const section = document.getElementById(sectionData.id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionData.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isSticky) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-wedding-neutral-200 shadow-sm">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex justify-center gap-2 py-3">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(section.id)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeSection === section.id
                  ? "bg-wedding-coral-500 text-white"
                  : "text-wedding-neutral-600 hover:bg-wedding-neutral-100"
              }`}
            >
              <span className="mr-1.5">{section.icon}</span>
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
