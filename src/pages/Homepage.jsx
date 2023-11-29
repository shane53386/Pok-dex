import React, { useState, useEffect } from "react";
import pokeAPI from "../api/pokeAPI";
import { useDispatch } from "react-redux";
import { getPokemons } from "../store/PokemonReducer";
import logo from "../assets/logo.svg";
import CardList from "../components/CardList";

function Homepage() {
	const dispatch = useDispatch();
	const [search, setSearch] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			const response = await pokeAPI
				.get(`/pokemon?offset=0&limit=100`)
				.catch((error) => {
					console.log(`Something went wrong. ${error}`);
				});
			console.log(response.data.results);
			setTimeout(() => {
				dispatch(getPokemons(response.data.results));
			}, 500);
		};
		fetchData();
	}, []);

	return (
		<div className="flex flex-col">
			<img className="scale-50 h-60" src={logo} alt="Pokemon Logo" />
			<div>
				<div className="flex flex-row justify-evenly">
					<div>
						<input
							type="text"
							placeholder="Search..."
							className="input input-bordered w-full max-w-xs"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
					</div>
				</div>
				<div className="divider" />
			</div>
			<CardList keyword={search} />
		</div>
	);
}

export default Homepage;
