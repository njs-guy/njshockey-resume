/** @type {import('tailwindcss').Config} */

const fontFam = "Roboto, Arial, Helvetica, sans"; // Font family
const primary = "#5e81ac"; // The primary color

module.exports = {
	content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: [
			{
				light: {
					...["[data-theme=light]"],
					"fontFamily": fontFam,
					"base-100": "#d8dee9",
					"base-200": "#e5e9f0",
					"base-300": "#eceff4",
					"base-content": "#2e3440",
					"primary": primary,
					"secondary": "#5e81ac",
					"--btn-text-case": "none",
				},
				dark: {
					...["[data-theme=dark]"],
					"fontFamily": fontFam,
					"base-100": "#2E3440",
					"base-200": "#3b4252",
					"base-300": "#434c5e",
					"base-content": "#d8dee9",
					"primary": primary,
					"secondary": "#88c0d0",
					"--btn-text-case": "none",
				},
			},
		],
		darkTheme: "dark",
	},
};
