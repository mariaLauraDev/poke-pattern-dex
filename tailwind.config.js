/** @type {import('tailwindcss').Config} */
//https://tailwindcss.com/docs/customizing-colors
import { slate } from "tailwindcss/colors";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      sans: ["Quicksand", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: slate[500],
          50: slate[50],
          100: slate[100],
          200: slate[200],
          300: slate[300],
          400: slate[400],
          500: slate[500],
          600: slate[600],
          700: slate[700],
          800: slate[800],
          900: slate[900],
        },
      },
    },
  },
  plugins: [],
}

