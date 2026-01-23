import type { Meta, StoryObj } from "@storybook/react";
import { CTAButton } from "./CTAButton";

const meta: Meta<typeof CTAButton> = {
  title: "Molecules/CTAButton",
  component: CTAButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof CTAButton>;

export const Default: Story = {
  args: {
    href: "/rsvp",
    label: "RSVP",
  },
};

export const WithSublabel: Story = {
  args: {
    href: "/rsvp",
    label: "RSVP",
    sublabel: "by May 15, 2026",
  },
};

export const ExternalLink: Story = {
  args: {
    href: "https://maps.google.com",
    label: "Get Directions",
    isExternal: true,
  },
};

export const OnDarkBackground: Story = {
  args: {
    href: "/rsvp",
    label: "RSVP Now",
    sublabel: "We can't wait to see you!",
  },
  decorators: [
    (Story) => (
      <div className="bg-wedding-black p-12">
        <Story />
      </div>
    ),
  ],
};
