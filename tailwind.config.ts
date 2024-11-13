import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#37c871",
        "primary-blue": "#845eee",
        "primary-yellow": "#e1b84f",
        "primary-red": "#e14f62",
        "primary-border-color": "#336647",
        "gray-color": "#537a62",
        danger: "#D10000",
        "hard-dark": "#0d1117",
        light: "#efefef",
      },
    },
  },
  plugins: [],
};
export default config;
