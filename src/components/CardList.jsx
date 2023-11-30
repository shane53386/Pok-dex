import React, { useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage, setFilteredPokemons } from "../store/PokemonReducer";

function CardList({ keyword, itemsPerPage }) {
	const dispatch = useDispatch();
	const { pokemons, filteredPokemons, currentPage } = useSelector(
		(state) => state.pokemon
	);
	const { selectedType } = useSelector((state) => state.type);

	useEffect(() => {
		console.log(selectedType);
		const filtered = keyword
			? pokemons.filter((pokemon) => pokemon.name.includes(keyword))
			: pokemons;
		// setTimeout(() => {
			dispatch(setFilteredPokemons(filtered));
			dispatch(setCurrentPage(1));
		// }, 500);
	}, [keyword, pokemons]);

	return (
		<div className="container h-2/3 overflow-auto scroll-smooth mx-auto p-4 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-10">
			{filteredPokemons &&
				filteredPokemons
					.slice(
						(currentPage - 1) * itemsPerPage,
						currentPage * itemsPerPage
					)
					.map((pokemon, index) => (
						<Card key={index} pokemon={pokemon.name} />
					))}
		</div>
	);
}

export default CardList;
