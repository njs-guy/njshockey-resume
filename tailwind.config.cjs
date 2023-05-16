/** @type {import('tailwindcss').Config} */

const primary = "#5e81ac"; // The primary color

module.exports = {
	content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: [
			{
				light: {
					...["[data-theme=light]"],
					"base-100": "#d8dee9",
					"base-200": "#e5e9f0",
					"base-300": "#eceff4",
					"base-content": "#000",
					"primary": primary,
					"secondary": "#d8dee9",
					"--btn-text-case": "none",
				},
				dark: {
					...["[data-theme=dark]"],
					"base-100": "#2E3440",
					"base-200": "#3b4252",
					"base-300": "#434c5e",
					"base-content": "#d8dee9",
					"primary": primary,
					"secondary": "#2E3440",
					"--btn-text-case": "none",
				},
			},
		],
		darkTheme: "dark",
	},
};
