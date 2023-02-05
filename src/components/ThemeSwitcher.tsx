import React from "react";
import { changeTheme } from "../modules/changeTheme";

function ThemeSwitcher() {
	function handleClick(e: any) {
		let theme = "";
		const darkTheme = e.target.checked;

		if (darkTheme) {
			theme = "dark";
		} else {
			theme = "light";
		}

		changeTheme(theme);
	}

	// TODO: Change swap icon to a different class
	return (
		<label className="themeSwitcher swap swap-rotate justify-self-end">
			<input
				type="checkbox"
				id="themeSwitcherCheckBox"
				onClick={(e) => {
					handleClick(e);
				}}
			/>
			<img
				className="swap-on icon h-8"
				src="../src/assets/sun.svg"
			/>
			<img
				className="swap-off icon h-8"
				src="../src/assets/moon.svg"
			/>
		</label>
	);
}

export default ThemeSwitcher;
