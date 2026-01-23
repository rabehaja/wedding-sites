import type { Meta, StoryObj } from "@storybook/react";
import { LocationCard } from "./LocationCard";

const meta: Meta<typeof LocationCard> = {
  title: "Molecules/LocationCard",
  component: LocationCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof LocationCard>;

export const Default: Story = {
  args: {
    name: "Chateau de Blier",
    address: "Rue Croix Henquin 6",
    city: "6997 Blier, Erezee",
    country: "Belgium",
  },
};

export const WithMap: Story = {
  args: {
    name: "Chateau de Blier",
    address: "Rue Croix Henquin 6",
    city: "6997 Blier, Erezee",
    country: "Belgium",
    mapUrl: "https://maps.google.com",
  },
};

export const VenueLocation: Story = {
  args: {
    name: "Le Val de la Laisne",
    address: "Rue de la Laisne 12",
    city: "6997 Blier",
    country: "Belgium",
    mapUrl: "https://levaldelaisne.be/nl/",
  },
};
