import React from "react";

function Badge({ type, value }) {
	switch (type) {
		case "normal":
			return (
				<div className="badge bg-stone-400 border-transparent text-black p-3">
					normal
				</div>
			);
		case "fighting":
			return (
				<div className="badge bg-yellow-600 border-transparent text-black p-3">
					fighting
				</div>
			);
		case "flying":
			return (
				<div className="badge bg-emerald-700 border-transparent text-black p-3">
					flying
				</div>
			);
		case "poison":
			return (
				<div className="badge bg-fuchsia-800 border-transparent p-3">
					poison
				</div>
			);
		case "ground":
			return (
				<div className="badge bg-orange-900 border-transparent p-3">
					ground
				</div>
			);
		case "rock":
			return (
				<div className="badge bg-zinc-700 border-transparent p-3">
					rock
				</div>
			);
		case "bug":
			return (
				<div className="badge bg-green-800 border-transparent p-3">
					bug
				</div>
			);
		case "ghost":
			return (
				<div className="badge bg-gray-700 border-transparent p-3">
					ghost
				</div>
			);
		case "steel":
			return (
				<div className="badge bg-gray-500 border-transparent text-black p-3">
					steel
				</div>
			);
		case "fire":
			return (
				<div className="badge bg-red-700 border-transparent p-3">
					fire
				</div>
			);
		case "water":
			return (
				<div className="badge bg-blue-600 border-transparent text-black p-3">
					water
				</div>
			);
		case "grass":
			return (
				<div className="badge bg-lime-700 border-transparent p-3">
					grass
				</div>
			);
		case "electric":
			return (
				<div className="badge bg-yellow-500 border-transparent text-black p-3">
					electric
				</div>
			);
		case "psychic":
			return (
				<div className="badge bg-pink-600 border-transparent p-3">
					psychic
				</div>
			);
		case "ice":
			return (
				<div className="badge bg-blue-400 border-transparent text-black p-3">
					ice
				</div>
			);
		case "dragon":
			return (
				<div className="badge bg-red-950 border-transparent p-3">
					dragon
				</div>
			);
		case "dark":
			return (
				<div className="badge bg-gray-900 border-transparent p-3">
					dark
				</div>
			);
		case "fairy":
			return (
				<div className="badge bg-pink-300 border-transparent text-black p-3">
					fairy
				</div>
			);
		case "unknown":
			return (
				<div className="badge bg-neutral-400 border-transparent text-black p-3">
					unknown
				</div>
			);
		case "shadow":
			return (
				<div className="badge bg-slate-800 border-transparent p-3">
					shadow
				</div>
			);
		default:
			return <div className="badge badge-outline p-3">{value}</div>;
	}
}

export default Badge;
