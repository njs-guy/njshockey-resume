/** @type {import('tailwindcss').Config} */

const fontFam = "Roboto, Arial, Helvetica, sans"; // Font family
const primary = "#2563eb"; // The primary color

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/typography"), require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          fontFamily: fontFam,
          "base-100": "#d4d4d4",
          "base-200": "#e5e5e5",
          "base-300": "#f5f5f5",
          "base-content": "#000000",
          "primary": primary,
          "--btn-text-case": "none",
        },
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          fontFamily: fontFam,
          "base-100": "#171717",
          "base-200": "#262626",
          "base-300": "#404040",
          "base-content": "#e4e4e7",
          "primary": primary,
          "--btn-text-case": "none",
        }
      },
    ],
    darkTheme: "dark",
  }
}
