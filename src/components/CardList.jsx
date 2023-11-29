import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

function CardList({ keyword }) {
	const { pokemons } = useSelector((state) => state.pokemons);
	const [filteredPokemons, setFilteredPokemons] = useState([]);

	useEffect(() => {
		const filtered = keyword
			? pokemons.filter((pokemon) => pokemon.name.includes(keyword))
			: pokemons;
		console.log(filtered);
		setFilteredPokemons(filtered);
	}, [keyword, pokemons]);

	return (
		<div className="container h-3/4 overflow-auto mx-auto p-4 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-10">
			{filteredPokemons.map((pokemon, index) => (
				<Card key={index} pokemon={pokemon.name} />
			))}
		</div>
	);
}

export default CardList;
