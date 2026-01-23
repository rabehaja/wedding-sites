import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

const config: StorybookConfig = {
  stories: [
    "../../../packages/ui/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  staticDirs: ["../public"],
  viteFinal: async (config) => {
    return {
      ...config,
      plugins: [...(config.plugins || []), tailwindcss()],
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          "next/image": path.resolve(__dirname, "./mocks/NextImage.tsx"),
          "next/link": path.resolve(__dirname, "./mocks/NextLink.tsx"),
          "next/navigation": path.resolve(__dirname, "./mocks/NextNavigation.ts"),
        },
      },
    };
  },
};

export default config;
