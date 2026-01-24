import type { Meta, StoryObj } from "@storybook/react";
import { WeddingImage } from "./WeddingImage";

const meta: Meta<typeof WeddingImage> = {
  title: "Atoms/WeddingImage",
  component: WeddingImage,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    fit: {
      control: "select",
      options: ["cover", "contain", "fill"],
      description: "How the image should fit its container",
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
      description: "Border radius of the image",
    },
    priority: {
      control: "boolean",
      description: "Priority loading for above-the-fold images",
    },
    fill: {
      control: "boolean",
      description: "Fill the parent container",
    },
  },
};

export default meta;
type Story = StoryObj<typeof WeddingImage>;

export const Default: Story = {
  args: {
    src: "/images/hero-couple.jpg",
    alt: "Loic and Wiebke",
    width: 400,
    height: 300,
  },
};

export const Rounded: Story = {
  args: {
    src: "/images/château-interior.jpg",
    alt: "Château de Blier interior",
    width: 400,
    height: 300,
    radius: "lg",
  },
};

export const Circle: Story = {
  args: {
    src: "/images/hero-couple.jpg",
    alt: "Loic and Wiebke",
    width: 200,
    height: 200,
    radius: "full",
  },
};

export const Fill: Story = {
  args: {
    src: "/images/decorative-bg.jpg",
    alt: "Decorative background",
    fill: true,
  },
  decorators: [
    (Story) => (
      <div className="w-96 h-64">
        <Story />
      </div>
    ),
  ],
};

export const Contain: Story = {
  args: {
    src: "/images/location-map.png",
    alt: "Location map",
    width: 400,
    height: 300,
    fit: "contain",
  },
  decorators: [
    (Story) => (
      <div className="bg-wedding-neutral-100 p-4">
        <Story />
      </div>
    ),
  ],
};
