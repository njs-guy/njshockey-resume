import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
	return (
		<ul className="menu menu-horizontal bg-base-200 shadow-md rounded-box object-center self-center justify-self-start">
			<li>
				<NavLink to="/">Home</NavLink>
			</li>
			<li>
				<NavLink to="/portfolio">Portfolio</NavLink>
			</li>
			<li>
				<NavLink to="/resume">Résumé</NavLink>
			</li>
		</ul>
	);
}

export default NavBar;
