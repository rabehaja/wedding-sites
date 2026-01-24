import type { Meta, StoryObj } from "@storybook/react";
import { ContentSection } from "./ContentSection";
import { Typography } from "../../atoms/Typography";

const meta: Meta<typeof ContentSection> = {
  title: "Organisms/ContentSection",
  component: ContentSection,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof ContentSection>;

export const TextOnly: Story = {
  args: {
    title: "About the Venue",
    children: (
      <Typography variant="body" color="muted">
        Château de Blier is a beautiful 19th-century castle nestled in the
        heart of the Belgian Ardennes. The castle features stunning gardens,
        elegant reception rooms, and breathtaking views of the surrounding
        countryside.
      </Typography>
    ),
  },
};

export const ImageLeft: Story = {
  args: {
    title: "The Castle Gardens",
    layout: "image-left",
    imageSrc: "/images/château-interior.jpg",
    imageAlt: "Château de Blier gardens",
    children: (
      <Typography variant="body" color="muted">
        Our ceremony will take place in the enchanting gardens of the castle.
        Surrounded by centuries-old trees and beautiful flower beds, you will
        witness our vows in a truly magical setting.
      </Typography>
    ),
  },
};

export const ImageRight: Story = {
  args: {
    title: "Reception Hall",
    layout: "image-right",
    imageSrc: "/images/decorative-bg.jpg",
    imageAlt: "Reception hall",
    children: (
      <Typography variant="body" color="muted">
        After the ceremony, join us in the grand reception hall for an evening
        of celebration. The hall features original chandeliers and elegant
        decor that will make our celebration truly special.
      </Typography>
    ),
  },
};
