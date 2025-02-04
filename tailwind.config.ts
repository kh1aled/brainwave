import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        color_black:"var(--black)"
      },
        rotate: {
          '135': '135deg',
          '225': '225deg',
          '270': '270deg',
          '315': '315deg',
        },
    },
  },
  plugins: [],
} satisfies Config;
