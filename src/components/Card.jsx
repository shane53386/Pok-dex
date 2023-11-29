import React, { useState, useEffect } from "react";
import Badge from "./Badge";
import { Link } from "react-router-dom";
import pokeAPI from "../api/pokeAPI";

function Card({ pokemon }) {
	const [pokemonData, setPokemonData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const response = await pokeAPI
				.get(`/pokemon/${pokemon}`)
				.catch((error) => {
					console.log(`Something went wrong. ${error}`);
				});
			setPokemonData(response.data);
		};
		fetchData();
	}, [pokemon]);

	return (
		<div>
			{pokemonData && (
				<Link to={`/pokemon/${pokemonData.name}`}>
					<div className="card w-70 hover:transition-all hover:scale-105 bg-zinc-900 shadow-xl cursor-pointer">
						<figure className="bg-slate-200 p-5">
							<img
								// className="h-60"
								src={
									pokemonData.sprites.other.home.front_default
								}
								alt={pokemonData.name}
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title capitalize">
								{pokemonData.name} #{pokemonData.id}
							</h2>
							<div className="card-actions">
								{pokemonData.types.map((type, index) => (
									<Badge key={index} type={type.type.name} />
								))}
							</div>
						</div>
					</div>
				</Link>
			)}
		</div>
	);
}

export default Card;
