import React from "react";
import SkillIcon from "./SkillIcon";

import JsIcon from "./icons/JsIcon";
import PyIcon from "./icons/PyIcon";
import VueIcon from "./icons/VueIcon";
import HtmlIcon from "./icons/HtmlIcon";
import CssIcon from "./icons/CssIcon";
import WindowsIcon from "./icons/WindowsIcon";

import DotNetIcon from "./icons/DotNetIcon";

// TODO: Finish converting icons
// TODO: Add Svelte

function IconGrid() {
	return (
		<span className="card-body p-5">
			<h1 className="panelHeading">What I can do</h1>
			<h2 className="prose-xl">Most Knowledgeable</h2>
			<div className="flex flex-row gap-4 flex-wrap">
				<JsIcon />
				<PyIcon />
				<VueIcon />
				<HtmlIcon />
				<CssIcon />
				<WindowsIcon />
			</div>
			<h2 className="prose-xl">Well versed</h2>
			<div className="flex flex-row gap-4 flex-wrap">
				<SkillIcon
					src="../src/assets/react-fa.svg"
					alt="React"
				/>
				<DotNetIcon />
				<SkillIcon
					src="../src/assets/markdown.svg"
					alt="Markdown"
				/>
				<SkillIcon
					src="../src/assets/git.svg"
					alt="Git"
				/>
			</div>
			<h2 className="prose-xl">Pretty familiar</h2>
			<div className="flex flex-row gap-4 flex-wrap">
				<SkillIcon
					src="../src/assets/linux.svg"
					alt="Linux (i use arch btw)"
				/>
				<SkillIcon
					src="../src/assets/tailwindcss.svg"
					alt="tailwindcss"
				/>
				<SkillIcon
					src="../src/assets/bootstrap.svg"
					alt="BootStrap"
				/>

				<SkillIcon
					src="../src/assets/godot.svg"
					alt="Godot"
				/>
			</div>
			<h2 className="prose-xl">Want to learn more</h2>
			<div className="flex flex-row gap-4 flex-wrap">
				<SkillIcon
					src="../src/assets/rust.svg"
					alt="Rust"
				/>
				<SkillIcon
					src="../src/assets/cpp.svg"
					alt="C++"
				/>
				<SkillIcon
					src="../src/assets/sql.svg"
					alt="SQL/SQLite/MySQL/etc."
				/>
				<SkillIcon
					src="../src/assets/bash.svg"
					alt="Bash/zsh/fish/Powershell"
				/>
				<SkillIcon
					src="../src/assets/unity.svg"
					alt="Unity"
				/>
			</div>
		</span>
	);
}

// Text items are placeholder

export default IconGrid;
