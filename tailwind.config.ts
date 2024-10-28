import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        "purple-2": "#8A2BE2",
        "purple-3": "#D8BFD8",
        "purple-4": "#DA70D6",

        "primary-1": "#1F1D2B",
        "primary-2": "#262837",

        "secondary-1": "#6D5ECF",

        "red-1": "#E66061",
        "blue-1": "#31A1D7",
        "gray-1": "#847F92",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
