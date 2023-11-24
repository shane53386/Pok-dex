import React, { useState, useEffect } from "react";
import axios from "axios";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";

function Card({ pokemon }) {
	const navigate = useNavigate();
	const [pokemonData, setPokemonData] = useState(null);

	useEffect(() => {
		const abortController = new AbortController();
		const fetchData = async () => {
			try {
				const response = await axios.get(pokemon.url, {
					signal: abortController.signal,
				});
				setPokemonData(response.data);
			} catch (error) {
				console.log(`Something went wrong. ${error}`);
			}
		};
		fetchData();
		return () => abortController.abort();
	}, []);

	return (
		<div>
			{pokemonData && (
				<div
					className="card w-80 hover:transition-all hover:scale-105 bg-zinc-900 shadow-xl cursor-pointer"
					onClick={() => navigate(`/pokemon/${pokemonData.id}`)}
				>
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
							{pokemonData.types.map((type, index) => (
								<Badge key={index} type={type.type.name} />
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Card;
