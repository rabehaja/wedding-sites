import type { Meta, StoryObj } from "@storybook/react";
import { AccommodationCard } from "./AccommodationCard";

const meta: Meta<typeof AccommodationCard> = {
  title: "Molecules/AccommodationCard",
  component: AccommodationCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AccommodationCard>;

export const Default: Story = {
  args: {
    name: "Le Val de la Laisne",
    description: "A beautiful countryside accommodation near the venue.",
    imageSrc: "/images/accommodation-main.jpg",
    distance: "5 min",
    websiteUrl: "https://levaldelaisne.be",
  },
};

export const WithoutDescription: Story = {
  args: {
    name: "Hotel La Roche",
    imageSrc: "/images/accommodation-1.png",
    distance: "15 min",
    websiteUrl: "https://example.com",
  },
};

export const WithoutWebsite: Story = {
  args: {
    name: "Camping Nearby",
    description: "A camping option for the adventurous guests.",
    imageSrc: "/images/accommodation-2.png",
    distance: "10 min",
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
      <AccommodationCard
        name="Le Val de la Laisne"
        description="Main venue accommodation"
        imageSrc="/images/accommodation-main.jpg"
        distance="On site"
        websiteUrl="https://levaldelaisne.be"
      />
      <AccommodationCard
        name="Hotel La Roche"
        description="Comfortable hotel in nearby town"
        imageSrc="/images/accommodation-1.png"
        distance="15 min"
        websiteUrl="https://example.com"
      />
      <AccommodationCard
        name="B&B Countryside"
        description="Cozy bed and breakfast"
        imageSrc="/images/accommodation-2.png"
        distance="10 min"
      />
    </div>
  ),
  decorators: [],
};
