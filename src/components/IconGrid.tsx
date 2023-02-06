import React from "react";
import SkillIcon from "./SkillIcon";

import JsIcon from "./icons/JsIcon";
import PyIcon from "./icons/PyIcon";
import VueIcon from "./icons/VueIcon";
import HtmlIcon from "./icons/HtmlIcon";
import CssIcon from "./icons/CssIcon";
import WindowsIcon from "./icons/WindowsIcon";

import ReactIcon from "./icons/ReactIcon";
import DotNetIcon from "./icons/DotNetIcon";
import MarkdownIcon from "./icons/MarkdownIcon";
import GitIcon from "./icons/GitIcon";

import LinuxIcon from "./icons/LinuxIcon";
import TailwindIcon from "./icons/TailwindIcon";
import BootstrapIcon from "./icons/Bootstrap";
import GodotIcon from "./icons/GodotIcon";

import RustIcon from "./icons/RustIcon";
import CppIcon from "./icons/CppIcon";
import DatabaseIcon from "./icons/DatabaseIcon";
import BashIcon from "./icons/BashIcon";
import UnityIcon from "./icons/UnityIcon";

// TODO: Finish converting icons
// TODO: Add Svelte

function IconGrid() {
	return (
		<span className="card-body p-5">
			<h1 className="panelHeading">What I can do</h1>
			<h2 className="prose-xl">Most Knowledgeable</h2>
			<div className="flex flex-row gap-4 flex-wrap">
				<JsIcon />
				<VueIcon />
				<HtmlIcon />
				<CssIcon />
				<RustIcon />
				<PyIcon />
				<WindowsIcon />
			</div>
			<h2 className="prose-xl">Well versed</h2>
			<div className="flex flex-row gap-4 flex-wrap">
				<LinuxIcon />
				<ReactIcon />
				<DotNetIcon />
				<GitIcon />
				<MarkdownIcon />
			</div>
			<h2 className="prose-xl">Pretty familiar</h2>
			<div className="flex flex-row gap-4 flex-wrap">
				<TailwindIcon />
				<BootstrapIcon />
				<GodotIcon />
				<UnityIcon />
				<BashIcon />
			</div>
			<h2 className="prose-xl">Want to learn more</h2>
			<div className="flex flex-row gap-4 flex-wrap">
				<CppIcon />
				<DatabaseIcon />
			</div>
		</span>
	);
}

// Text items are placeholder

export default IconGrid;
