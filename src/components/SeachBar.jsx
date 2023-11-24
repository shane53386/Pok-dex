import React, { useState, useEffect } from "react";
import axios from "axios";

function SeachBar({ onClickHandler }) {
	const [typeList, setTypeList] = useState([]);
	const [value, setValue] = useState("");

	useEffect(() => {
		const abortController = new AbortController();
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`https://pokeapi.co/api/v2/type/`,
					{
						signal: abortController.signal,
					}
				);
				setTypeList(response.data.results.map((type) => type.name));
			} catch (error) {
				console.log(`Something went wrong. ${error}`);
			}
		};
		fetchData();
		return () => abortController.abort();
	}, []);

	return (
		<div className="join">
			<div>
				<div>
					<input
						className="input join-item"
						placeholder="Search..."
						onChange={(e) => setValue(e.target.value)}
					/>
				</div>
			</div>
			<select className="select join-item">
				<option disabled selected>
					Type
				</option>
				{typeList.map((type, index) => (
					<option key={index}>{type}</option>
				))}
			</select>
			<div className="indicator">
				<button
					className="btn join-item"
					onClick={() => onClickHandler(`https://pokeapi.co/api/v2/pokemon/${value}`)}
				>
					Search
				</button>
			</div>
		</div>
	);
}

export default SeachBar;
