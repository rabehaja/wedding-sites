import type { Meta, StoryObj } from "@storybook/react";
import { WeddingLink } from "./WeddingLink";

const meta: Meta<typeof WeddingLink> = {
  title: "Atoms/WeddingLink",
  component: WeddingLink,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "nav", "accent"],
      description: "Link visual variant",
    },
    isActive: {
      control: "boolean",
      description: "Show active state (for navigation)",
    },
    isExternal: {
      control: "boolean",
      description: "Open link in new tab",
    },
  },
};

export default meta;
type Story = StoryObj<typeof WeddingLink>;

export const Default: Story = {
  args: {
    href: "/venue",
    variant: "default",
    children: "View the venue",
  },
};

export const Navigation: Story = {
  args: {
    href: "/wedding",
    variant: "nav",
    children: "The Wedding",
  },
};

export const NavigationActive: Story = {
  args: {
    href: "/wedding",
    variant: "nav",
    isActive: true,
    children: "The Wedding",
  },
};

export const Accent: Story = {
  args: {
    href: "/rsvp",
    variant: "accent",
    children: "RSVP Now",
  },
};

export const External: Story = {
  args: {
    href: "https://maps.google.com",
    variant: "default",
    isExternal: true,
    children: "View on Google Maps",
  },
};

export const NavigationMenu: Story = {
  render: () => (
    <nav className="flex gap-6">
      <WeddingLink href="/" variant="nav" isActive>
        Home
      </WeddingLink>
      <WeddingLink href="/venue" variant="nav">
        The Venue
      </WeddingLink>
      <WeddingLink href="/wedding" variant="nav">
        The Wedding
      </WeddingLink>
      <WeddingLink href="/weekend" variant="nav">
        The Weekend
      </WeddingLink>
      <WeddingLink href="/accommodation" variant="nav">
        Accommodation
      </WeddingLink>
    </nav>
  ),
};
