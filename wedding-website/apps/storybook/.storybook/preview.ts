import type { Preview } from "@storybook/react";
import "./styles.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#000000" },
        { name: "neutral", value: "#f1f1ec" },
      ],
    },
  },
};

export default preview;
