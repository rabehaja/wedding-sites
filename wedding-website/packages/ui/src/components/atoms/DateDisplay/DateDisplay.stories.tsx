import type { Meta, StoryObj } from "@storybook/react";
import { DateDisplay } from "./DateDisplay";

const meta: Meta<typeof DateDisplay> = {
  title: "Atoms/DateDisplay",
  component: DateDisplay,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "large", "compact"],
      description: "Display size variant",
    },
    color: {
      control: "select",
      options: ["default", "coral", "purple", "white"],
      description: "Text color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof DateDisplay>;

export const Default: Story = {
  args: {
    day: 18,
    month: "July",
    year: 2026,
  },
};

export const Large: Story = {
  args: {
    day: 18,
    month: "July",
    year: 2026,
    variant: "large",
  },
};

export const Compact: Story = {
  args: {
    day: 18,
    month: "July",
    year: 2026,
    variant: "compact",
  },
};

export const CoralColor: Story = {
  args: {
    day: 18,
    month: "July",
    year: 2026,
    color: "coral",
  },
};

export const PurpleColor: Story = {
  args: {
    day: 18,
    month: "July",
    year: 2026,
    color: "purple",
  },
};

export const WhiteOnDark: Story = {
  args: {
    day: 18,
    month: "July",
    year: 2026,
    variant: "large",
    color: "white",
  },
  decorators: [
    (Story) => (
      <div className="bg-wedding-black p-8">
        <Story />
      </div>
    ),
  ],
};

export const RSVPDeadline: Story = {
  args: {
    day: 15,
    month: "May",
    year: 2026,
    variant: "compact",
    color: "coral",
  },
};
