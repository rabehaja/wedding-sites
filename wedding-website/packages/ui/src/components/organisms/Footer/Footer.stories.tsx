import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Organisms/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};

export const CustomContent: Story = {
  args: {
    coupleNames: "John & Jane",
    weddingDate: "December 25, 2025",
    email: "wedding@example.com",
  },
};
