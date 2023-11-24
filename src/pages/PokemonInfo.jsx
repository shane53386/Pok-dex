import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Badge from "../components/Badge";
import Stats from "../components/Stats";

function PokemonInfo() {
	const { pokemonId } = useParams();
	const [pokemonData, setPokemonData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const abortController = new AbortController();
		const fetchData = async () => {
			try {
				setLoading(true);
				const response = await axios.get(
					`https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
					{
						signal: abortController.signal,
					}
				);
				setPokemonData(response.data);
			} catch (error) {
				console.log(`Something went wrong. ${error}`);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
		return () => abortController.abort();
	}, []);

	return (
		<div className="flex justify-center p-8">
			{loading || !pokemonData ? (
				<div>Loading...</div>
			) : (
				<div
					className="card w-3/4 lg:card-side bg-zinc-900 shadow-xl"
					style={{ height: "80vh" }}
				>
					<figure className="bg-slate-200 min-w-fit p-5">
						<img
							src={pokemonData.sprites.other.home.front_default}
							alt={pokemonData.name}
						/>
					</figure>
					<div className="card-body overflow-auto scroll-smooth snap-y">
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
							<div className="card-title  mb-4">Stats</div>
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
