import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": "#121423",
        "primary": "#006CF4",
        "secondary": "#175CCD",
        "terniary": "#192141",
        "white": "#FFFFFF",
        "lightGrey": "#F6F6F9",
        "darkGrey": "#B0B0B0",
        "borders": "#474F71"
      }
    },
  },
  plugins: [],
};
export default config;
