import type { Meta, StoryObj } from "@storybook/react";
import { HeroSection } from "./HeroSection";

const meta: Meta<typeof HeroSection> = {
  title: "Organisms/HeroSection",
  component: HeroSection,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  args: {
    coupleNames: "Loic & Wiebke",
    tagline: "We are getting married",
    date: {
      day: 18,
      month: "July",
      year: 2026,
    },
    location: "Château de Blier, Belgium",
    imageSrc: "/images/hero-couple.jpg",
    ctaHref: "/rsvp",
    ctaLabel: "RSVP",
    ctaSublabel: "by May 15, 2026",
  },
};

export const WithoutCTA: Story = {
  args: {
    coupleNames: "Loic & Wiebke",
    tagline: "We are getting married",
    date: {
      day: 18,
      month: "July",
      year: 2026,
    },
    location: "Château de Blier, Belgium",
    imageSrc: "/images/hero-couple.jpg",
  },
};

export const WithoutTagline: Story = {
  args: {
    coupleNames: "Loic & Wiebke",
    date: {
      day: 18,
      month: "July",
      year: 2026,
    },
    location: "Château de Blier, Belgium",
    imageSrc: "/images/hero-couple.jpg",
    ctaHref: "/rsvp",
    ctaLabel: "RSVP Now",
  },
};
