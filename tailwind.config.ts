import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#ecfdff",
          "100": "#d0f7fd",
          "200": "#a7edfa",
          "300": "#6bdef5",
          "400": "#27c5e9",
          "500": "#0ba8cf",
          "600": "#0c86ae",
          "700": "#116c8d",
          "800": "#175873",
          "900": "#184961",
          "950": "#051923",
        },
      },
      fontFamily: {
        saans: ["var(--font-saans)"],
        jetbrains: ["JetBrains Mono"],
      },
    },
  },
  plugins: [],
};
export default config;
