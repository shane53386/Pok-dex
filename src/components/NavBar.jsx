import React from "react";
import { NavLink } from "react-router-dom";
import pokedex from "../assets/pokedex.png";

function NavBar() {
	return (
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<NavLink className="btn btn-ghost normal-case text-xl" to="/">
					<img src={pokedex} alt="Pokédex" />
					Pokédex
				</NavLink>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<a>Link1</a>
					</li>
					<li>
						<a>Link2</a>
					</li>
					<li>
						<a>Link3</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default NavBar;
