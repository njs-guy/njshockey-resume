export function changeTheme(theme: string) {
	const html = document.documentElement;
	html.removeAttribute("data-theme"); // remove previous theme
	html.setAttribute("data-theme", theme); // set new theme

	themeConfig(theme);
	updateIcons();
}

export function themeConfig(theme: string) {
	localStorage.setItem("theme", theme);
}

export function loadConfig() {
	const check = document.getElementById(
		"themeSwitcherCheckBox"
	) as HTMLInputElement;
	const themeConfig: string | null = localStorage.getItem("theme");

	// No setting, so do nothing.
	if (themeConfig === null) {
		return;
	}

	// Change checkbox state if necessary
	if (themeConfig === "dark") {
		check.checked = true;
	}

	changeTheme(themeConfig);
}

export function updateIcons() {
	const theme = document.documentElement.getAttribute("data-theme");
	const icons = document.getElementsByClassName("icon");

	if (theme === "light") {
		for (const icon of icons) {
			icon.classList.remove("iconDark");
		}
	}

	if (theme === "dark") {
		for (const icon of icons) {
			icon.classList.add("iconDark");
		}
	}
}
