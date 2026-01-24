import type { Meta, StoryObj } from "@storybook/react";
import { TimelineItem } from "./TimelineItem";

const meta: Meta<typeof TimelineItem> = {
  title: "Molecules/TimelineItem",
  component: TimelineItem,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof TimelineItem>;

export const Default: Story = {
  args: {
    time: "3:00 PM",
    title: "Ceremony",
    description:
      "Our ceremony will take place in the château's enchanting garden if the weather agrees, surrounded by all our loved ones.",
  },
};

export const LastItem: Story = {
  args: {
    time: "8:15 PM",
    title: "Dancing the night away",
    description: "Lots of time for dancing and having fun! Drinks are on us!",
    isLast: true,
  },
};

export const WeddingSchedule: Story = {
  render: () => (
    <div className="space-y-0">
      <TimelineItem
        time="3:00 PM"
        title="Ceremony"
        description="Our ceremony will take place in the château's enchanting garden if the weather agrees, surrounded by all our loved ones."
      />
      <TimelineItem
        time="3:30 PM"
        title="Cocktail Reception"
        description="Following the ceremony, join us on the terrace for some champagne! There will be the possibility to play some awesome games and to make some photos."
      />
      <TimelineItem
        time="6:00 PM"
        title="Dinner Time"
        description="You can enjoy the buffet from a local gourmet chef, either seated in the festive dining room inside or on one of the picnic tables outside while enjoying the sun."
      />
      <TimelineItem
        time="8:00 PM"
        title="Dessert Time"
        description="We will be cutting our wedding cake and you will get your piece of it! Yumm!!"
      />
      <TimelineItem
        time="8:15 PM"
        title="Dancing the night away"
        description="Lots of time for dancing and having fun! Drinks are on us!"
        isLast
      />
    </div>
  ),
};
