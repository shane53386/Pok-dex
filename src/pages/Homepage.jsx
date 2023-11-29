import React, { useState, useEffect } from "react";
import pokeAPI from "../api/pokeAPI";
import logo from "../assets/logo.svg";
import CardList from "../components/CardList";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../store/PokemonReducer";
import { getSelectedType, getTypes } from "../store/TypeReducer";
import Badge from "../components/Badge";

function Homepage() {
	const dispatch = useDispatch();
	const [search, setSearch] = useState("");
	const { types, selectedType } = useSelector((state) => state.types);

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

		const fetchTypes = async () => {
			const response = await pokeAPI
				.get(`/type`)
				.catch((error) =>
					console.log(`Something went wrong. ${error}`)
				);
			console.log(response.data.results);
			setTimeout(() => {
				const res = response.data.results;
				dispatch(getTypes(res));
				dispatch(getSelectedType(res.map((type) => type.name)));
			}, 500);
		};
		fetchTypes();
	}, []);

	const typeHandler = (type) => {
		const index = selectedType.indexOf(type);
		index === -1
			? dispatch(getSelectedType([...selectedType, type]))
			: dispatch(
					getSelectedType([
						...selectedType.slice(0, index),
						...selectedType.slice(index + 1),
					])
			  );
	};

	return (
		<div className="container h-full flex flex-col justify-center items-center mx-auto py-8">
			<img className=" h-32" src={logo} alt="Pokemon Logo" />
			<div className="my-8">
				<div>
					<input
						type="text"
						placeholder="Search..."
						className="input input-bordered w-full max-w-xs"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>
				<div className="grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-10 mx-auto justify-items-center items-center gap-4 pt-4">
					{types &&
						types.map((type, index) => (
							<span
								key={index}
								className="cursor-pointer"
								onClick={() => typeHandler(type.name)}
							>
								<Badge
									value={type.name}
									type={
										selectedType.includes(type.name)
											? type.name
											: ""
									}
								/>
							</span>
						))}
				</div>
				<div className="divider" />
			</div>
			<CardList keyword={search} />
		</div>
	);
}

export default Homepage;
