import React from "react";
import Card from "./Card";

function CardList({ pokemonList }) {
	return (
		<div className="container mx-auto p-8 pt-0 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
			{pokemonList.map((pokemon, index) => (
				<div key={index}>
					<Card pokemon={pokemon} />
				</div>
			))}
		</div>
	);
}

export default CardList;
