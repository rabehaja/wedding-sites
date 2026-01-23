import type { Meta, StoryObj } from "@storybook/react";
import { WeddingButton } from "./WeddingButton";

const meta: Meta<typeof WeddingButton> = {
  title: "Atoms/WeddingButton",
  component: WeddingButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost"],
      description: "Button visual variant",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Button size",
    },
    fullWidth: {
      control: "boolean",
      description: "Make button full width",
    },
    disabled: {
      control: "boolean",
      description: "Disable the button",
    },
  },
};

export default meta;
type Story = StoryObj<typeof WeddingButton>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "RSVP Now",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Learn More",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "View Details",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: "Full Width Button",
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <WeddingButton variant="primary">Primary</WeddingButton>
        <WeddingButton variant="secondary">Secondary</WeddingButton>
        <WeddingButton variant="ghost">Ghost</WeddingButton>
      </div>
      <div className="flex gap-4 items-center">
        <WeddingButton size="sm">Small</WeddingButton>
        <WeddingButton size="md">Medium</WeddingButton>
        <WeddingButton size="lg">Large</WeddingButton>
      </div>
    </div>
  ),
};
