import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Organisms/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {};

export const OnVenuePage: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/venue",
      },
    },
  },
};

export const OnWeddingPage: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/wedding",
      },
    },
  },
};
