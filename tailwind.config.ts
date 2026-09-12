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
        "nexiv-lime": "#C6F432",
        "nexiv-dark": "#0F1419",
        "nexiv-ink": "#111820",
        "nexiv-white": "#FFFFFF",
        "nexiv-light": "#F5F5F5",
        "nexiv-cyan": "#4DD9D9",
        "nexiv-gray": "#8A8A8A",
        "nexiv-text-dark": "#111111",
        "nexiv-text-light": "#E5E5E5",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
