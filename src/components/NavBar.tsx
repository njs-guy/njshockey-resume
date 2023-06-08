import React from "react";
import { NavLink } from "react-router-dom";
import { rootPath } from "../App";

function NavBar() {
	return (
		<ul className="menu menu-horizontal bg-base-200 shadow-md rounded-box object-center self-center justify-self-start">
			<li>
				<NavLink to={rootPath + "/"}>Home</NavLink>
			</li>
			<li>
				<NavLink to={rootPath + "/portfolio"}>Portfolio</NavLink>
			</li>
			<li>
				<NavLink to={rootPath + "/resume"}>Résumé</NavLink>
			</li>
		</ul>
	);
}

export default NavBar;
