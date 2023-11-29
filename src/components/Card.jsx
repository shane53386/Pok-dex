import React, { useState, useEffect } from "react";
import Badge from "./Badge";
import { Link } from "react-router-dom";
import pokeAPI from "../api/pokeAPI";
import { useSelector } from "react-redux";

function Card({ pokemon }) {
	const [pokemonData, setPokemonData] = useState(null);
	const [pokemonType, setPokemonType] = useState([]);
	const { selectedType } = useSelector((state) => state.types);

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

	useEffect(() => {
		if (pokemonData) {
			setPokemonType(pokemonData.types.map((type) => type.type.name));
		}
	}, [pokemonData]);

	const typeCondition = () => {
		return selectedType.some((selected) => pokemonType.includes(selected));
	};

	if (!pokemonData || !typeCondition()) {
		return null;
	}

	return (
		<div>
			<Link to={`/pokemon/${pokemonData.name}`}>
				<div className="card hover:transition-all hover:scale-105 bg-zinc-900 shadow-xl cursor-pointer">
					<figure className="bg-slate-200 p-5">
						<img
							src={pokemonData.sprites.other.home.front_default}
							alt={pokemonData.name}
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title capitalize">
							{pokemonData.name} #{pokemonData.id}
						</h2>
						<div className="card-actions">
							{pokemonType.map((type, index) => (
								<Badge key={index} type={type} />
							))}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default Card;
