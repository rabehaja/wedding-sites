import type { Meta, StoryObj } from "@storybook/react";
import { SectionHeader } from "./SectionHeader";

const meta: Meta<typeof SectionHeader> = {
  title: "Molecules/SectionHeader",
  component: SectionHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    alignment: {
      control: "select",
      options: ["left", "center", "right"],
      description: "Text alignment",
    },
    showDivider: {
      control: "boolean",
      description: "Show decorative divider",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SectionHeader>;

export const Default: Story = {
  args: {
    title: "The Venue",
  },
};

export const WithSubtitle: Story = {
  args: {
    title: "The Wedding",
    subtitle: "We are looking forward to celebrating with you!",
  },
};

export const LeftAligned: Story = {
  args: {
    title: "Accommodation",
    subtitle: "Where to stay during the weekend",
    alignment: "left",
  },
};

export const WithoutDivider: Story = {
  args: {
    title: "The Weekend",
    showDivider: false,
  },
};

export const AllPages: Story = {
  render: () => (
    <div className="space-y-12">
      <SectionHeader title="The Venue" subtitle="Château de Blier, Belgium" />
      <SectionHeader title="The Wedding" subtitle="July 18, 2026" />
      <SectionHeader title="The Weekend" />
      <SectionHeader title="Accommodation" subtitle="Where to stay" />
      <SectionHeader title="The Surrounding" subtitle="Things to do" />
    </div>
  ),
};
