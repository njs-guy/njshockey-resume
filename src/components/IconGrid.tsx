import React from "react";

import JsIcon from "./icons/JsIcon";
import VueIcon from "./icons/VueIcon";
import HtmlIcon from "./icons/HtmlIcon";
import CssIcon from "./icons/CssIcon";
import RustIcon from "./icons/RustIcon";
import PyIcon from "./icons/PyIcon";
import WindowsIcon from "./icons/WindowsIcon";

import LinuxIcon from "./icons/LinuxIcon";
import ReactIcon from "./icons/ReactIcon";
import DotNetIcon from "./icons/DotNetIcon";
import TailwindIcon from "./icons/TailwindIcon";
import GitIcon from "./icons/GitIcon";
import MarkdownIcon from "./icons/MarkdownIcon";

import BootstrapIcon from "./icons/Bootstrap";
import GodotIcon from "./icons/GodotIcon";
import UnityIcon from "./icons/UnityIcon";
import SvelteIcon from "./icons/SvelteIcon";
import BashIcon from "./icons/BashIcon";

import CppIcon from "./icons/CppIcon";
import JavaIcon from "./icons/JavaIcon";
import DatabaseIcon from "./icons/DatabaseIcon";

import VIcon from "./icons/VIcon";
import KotlinIcon from "./icons/KotlinIcon";
import LuaIcon from "./icons/LuaIcon";
import ZigIcon from "./icons/ZigIcon";
import WasmIcon from "./icons/WasmIcon";
import TensorFlowIcon from "./icons/TensorFlowIcon";
import FlutterIcon from "./icons/FlutterIcon";

function IconGrid() {
	return (
		<span className="card-body p-5">
			<h1 className="panelHeading">What I can do</h1>
			<h2 className="prose-xl">Most knowledgeable</h2>
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
				<SvelteIcon />
				<LinuxIcon />
				<ReactIcon />
				<DotNetIcon />
				<TailwindIcon />
				<GitIcon />
				<MarkdownIcon />
			</div>
			<h2 className="prose-xl">Pretty familiar</h2>
			<div className="flex flex-row gap-4 flex-wrap">
				<BootstrapIcon />
				<GodotIcon />
				<UnityIcon />
				<BashIcon />
			</div>
			<h2 className="prose-xl">Got the basics</h2>
			<div className="flex flex-row gap-4 flex-wrap">
				<CppIcon />
				<KotlinIcon />
				<JavaIcon />
				<FlutterIcon />
				<DatabaseIcon />
			</div>
			<h2 className="prose-xl">Don&apos;t know, but want to</h2>
			<div className="flex flex-row gap-4 flex-wrap">
				<LuaIcon />
				<ZigIcon />
				<VIcon />
				<WasmIcon />
				<TensorFlowIcon />
			</div>
		</span>
	);
}

export default IconGrid;
