import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Badge from "../components/Badge";
import Stats from "../components/Stats";
import pokeAPI from "../api/pokeAPI";

function PokemonInfo() {
	const { pokemonName } = useParams();
	const [pokemonData, setPokemonData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			const response = await pokeAPI
				.get(`/pokemon/${pokemonName}`)
				.catch((error) => {
					console.log(`Something went wrong. ${error}`);
				});
			setPokemonData(response.data);
			// setTimeout(() => {
			setLoading(false);
			// }, 500);
		};
		fetchData();
	}, []);

	return (
		<div className="flex justify-center p-8">
			{loading || !pokemonData ? (
				<div>Loading...</div>
			) : (
				<div
					className="card w-3/4 lg:card-side bg-zinc-900 shadow-xl"
					style={{ height: "75vh" }}
				>
					<figure className="bg-slate-200 min-w-fit p-5">
						<img
							src={pokemonData.sprites.other.home.front_default}
							alt={pokemonData.name}
						/>
					</figure>
					<div className="card-body overflow-auto scroll-smoothy">
						<h1 className="card-title capitalize">
							{pokemonData.name} #{pokemonData.id}
							<div className="card-actions">
								{pokemonData.types.map((type, index) => (
									<Badge key={index} type={type.type.name} />
								))}
							</div>
						</h1>
						<div className="divider" />
						<div className="card-title flex snap-start">
							<div className="flex-1">
								Height: {pokemonData.height * 10} cm.
							</div>
							<div className="flex-1">
								Weight: {pokemonData.weight / 10} kg.
							</div>
						</div>
						<div className="divider" />
						<div className="snap-start">
							<div className="card-title mb-4">Moves</div>
							<div className="card-actions">
								{pokemonData.moves.map((move, index) => (
									<Badge key={index} value={move.move.name} />
								))}
							</div>
						</div>
						<div className="divider" />
						<div className="snap-start">
							<div className="card-title mb-4">Stats</div>
							<div>
								<Stats
									value={pokemonData.stats.map(
										(stat) => stat.base_stat
									)}
								/>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default PokemonInfo;
