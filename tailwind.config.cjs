/** @type {import('tailwindcss').Config} */

// const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require('daisyui')],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          fontFamily: "Roboto, Arial, Helvetica, sans",
          "base-100": "#171717",
          "base-200": "#262626",
          "base-300": "#404040",
          "base-content": "#e4e4e7",
          "primary": "#2563eb",
          "--btn-text-case": "none",
        }
      }, 
      "light"
    ],
  }
}
