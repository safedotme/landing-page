import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "display": ["SF Pro Rounded"],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        "grey": {
          100: "#B4B5B9",
          200: "#656565",
          300: "#484848",
          400: "#242424",
          500: "#222222",
          600: "#1B191B",
          700: "#151317",
          800: "#0F0D10",
          900: "#070508"
        },
        "header": {
          100: "#F2E3E3",
          200: "#CBADB6",
          300: "#CBACB8",
        }
      },

    },
  },
  plugins: [],
} satisfies Config;
