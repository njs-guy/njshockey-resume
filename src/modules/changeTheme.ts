export function changeTheme(theme: string) {
	const html = document.documentElement;
	html.removeAttribute("data-theme"); // remove previous theme
	html.setAttribute("data-theme", theme); // set new theme
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
