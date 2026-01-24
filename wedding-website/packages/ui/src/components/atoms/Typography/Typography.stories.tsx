import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "Atoms/Typography",
  component: Typography,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "body", "bodyLarge", "small", "accent"],
      description: "Typography variant",
    },
    color: {
      control: "select",
      options: ["default", "muted", "purple", "coral", "white"],
      description: "Text color",
    },
    as: {
      control: "text",
      description: "Override the rendered HTML element",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Heading1: Story = {
  args: {
    variant: "h1",
    children: "Loic & Wiebke",
  },
};

export const Heading2: Story = {
  args: {
    variant: "h2",
    children: "The Venue",
  },
};

export const Heading3: Story = {
  args: {
    variant: "h3",
    children: "Château de Blier",
  },
};

export const Heading4: Story = {
  args: {
    variant: "h4",
    children: "Getting There",
  },
};

export const Body: Story = {
  args: {
    variant: "body",
    children:
      "Join us for our wedding celebration on July 18, 2026 at Château de Blier, Belgium. We are looking forward to celebrating with all our loved ones.",
  },
};

export const BodyLarge: Story = {
  args: {
    variant: "bodyLarge",
    children:
      "Join us for our wedding celebration on July 18, 2026 at Château de Blier, Belgium.",
  },
};

export const Small: Story = {
  args: {
    variant: "small",
    children: "RSVP by May 15, 2026",
  },
};

export const Accent: Story = {
  args: {
    variant: "accent",
    children: "We are getting married",
  },
};

export const PurpleColor: Story = {
  args: {
    variant: "h2",
    color: "purple",
    children: "The Wedding",
  },
};

export const CoralColor: Story = {
  args: {
    variant: "h3",
    color: "coral",
    children: "18 July 2026",
  },
};

export const WhiteOnDark: Story = {
  args: {
    variant: "h1",
    color: "white",
    children: "Loic & Wiebke",
  },
  decorators: [
    (Story) => (
      <div className="bg-wedding-black p-8">
        <Story />
      </div>
    ),
  ],
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h1">Heading 1 - Loic & Wiebke</Typography>
      <Typography variant="h2">Heading 2 - The Venue</Typography>
      <Typography variant="h3">Heading 3 - Château de Blier</Typography>
      <Typography variant="h4">Heading 4 - Getting There</Typography>
      <Typography variant="bodyLarge">Body Large - Important info</Typography>
      <Typography variant="body">Body - Regular paragraph text</Typography>
      <Typography variant="small">Small - Fine print</Typography>
      <Typography variant="accent">Accent - Decorative text</Typography>
    </div>
  ),
};
