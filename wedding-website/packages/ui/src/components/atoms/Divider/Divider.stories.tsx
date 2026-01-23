import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Atoms/Divider",
  component: Divider,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "accent", "decorative"],
      description: "Divider visual style",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Divider orientation",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Accent: Story = {
  args: {
    variant: "accent",
  },
};

export const Decorative: Story = {
  args: {
    variant: "decorative",
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  decorators: [
    (Story) => (
      <div className="h-20 flex items-center">
        <Story />
      </div>
    ),
  ],
};

export const InContext: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-wedding-neutral-700">Content above the divider</p>
      <Divider variant="decorative" />
      <p className="text-wedding-neutral-700">Content below the divider</p>
    </div>
  ),
};
