import React, { useState, useEffect } from "react";
import pokeAPI from "../api/pokeAPI";
import logo from "../assets/logo.svg";
import CardList from "../components/CardList";
import { useDispatch, useSelector } from "react-redux";
import { setPokemons } from "../store/PokemonReducer";
import { setSelectedType, setTypes } from "../store/TypeReducer";
import Badge from "../components/Badge";
import Pagination from "../components/Pagination";

function Homepage() {
	const dispatch = useDispatch();
	const itemsPerPage = 20;
	const [search, setSearch] = useState("");
	const { types, selectedType } = useSelector((state) => state.type);

	useEffect(() => {
		const fetchData = async () => {
			const response = await pokeAPI
				.get(`/pokemon?offset=0&limit=2000`)
				.catch((error) => {
					console.log(`Something went wrong. ${error}`);
				});
			// setTimeout(() => {
				const res = response.data;
				dispatch(setPokemons(res.results));
			// }, 500);
		};
		fetchData();

		const fetchTypes = async () => {
			const response = await pokeAPI
				.get(`/type`)
				.catch((error) =>
					console.log(`Something went wrong. ${error}`)
				);
			// setTimeout(() => {
				const res = response.data.results;
				dispatch(setTypes(res));
				dispatch(setSelectedType(res.map((type) => type.name)));
			// }, 500);
		};
		fetchTypes();
	}, []);

	const typeHandler = (type) => {
		const index = selectedType.indexOf(type);
		index === -1
			? dispatch(setSelectedType([...selectedType, type]))
			: dispatch(
					setSelectedType([
						...selectedType.slice(0, index),
						...selectedType.slice(index + 1),
					])
			  );
	};

	return (
		<div className="container flex flex-col justify-center items-center mx-auto py-8">
			<img className=" h-32" src={logo} alt="Pokemon Logo" />
			<div className="h-screen">
				<div className="sticky top-4 my-8">
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
				</div>
				<CardList keyword={search} itemsPerPage={itemsPerPage} />
				<Pagination itemsPerPage={itemsPerPage} />
			</div>
		</div>
	);
}

export default Homepage;
