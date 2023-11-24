import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../assets/logo.svg";
import CardList from "../components/CardList";
import SeachBar from "../components/SeachBar";

function Homepage() {
	const [url, setUrl] = useState(
		`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`
	);
	const [pokemonList, setPokemonList] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const abortController = new AbortController();
		const fetchData = async () => {
			try {
				setLoading(true);
				const response = await axios.get(url, {
					signal: abortController.signal,
				});
				setPokemonList(response.data);
			} catch (error) {
				console.log(`Something went wrong. ${error}`);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
		return () => abortController.abort();
	}, [url]);

	const handlePrevious = () => {
		setUrl(pokemonList.previous);
	};

	const handleNext = () => {
		setUrl(pokemonList.next);
	};

	return (
		<div className="flex flex-col">
			<img className="scale-50 h-80" src={logo} alt="Pokemon Logo" />
			{loading || pokemonList.length == 0 ? (
				<button className="btn btn-square">
					<span className="loading loading-spinner"></span>
				</button>
			) : (
				<div>
					<div className="flex flex-row justify-evenly">
						<button
							className={`btn btn-primary ${
								pokemonList.previous ? "" : "invisible"
							}`}
							onClick={handlePrevious}
						>
							Previous
						</button>
						<SeachBar />
						<button
							className={`btn btn-primary ${
								pokemonList.next ? "" : "invisible"
							}`}
							onClick={handleNext}
						>
							Next
						</button>
					</div>
					<div className="divider" />
					<CardList pokemonList={pokemonList.results} />
				</div>
			)}
		</div>
	);
}

export default Homepage;
