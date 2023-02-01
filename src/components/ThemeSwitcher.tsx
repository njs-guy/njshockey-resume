import React from "react";
import { changeTheme, updateIcons } from "../modules/changeTheme";

function ThemeSwitcher() {
	function handleClick(e: any) {
		let darkTheme = e.target.checked;

		if (darkTheme) {
			changeTheme("dark");
		} else {
			changeTheme("light");
		}

		updateIcons();
	}

	return (
		<label className="swap swap-rotate justify-self-end">
			<input
				type="checkbox"
				onClick={(e) => handleClick(e)}
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
