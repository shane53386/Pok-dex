import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../store/PokemonReducer";

function Pagination({ itemsPerPage }) {
	const dispatch = useDispatch();
	const { filteredPokemons, currentPage } = useSelector(
		(state) => state.pokemon
	);
	const [totalPage, setTotalPage] = useState(0);

	useEffect(() => {
		if (filteredPokemons) {
			setTotalPage(Math.ceil(filteredPokemons.length / itemsPerPage));
		}
	}, [filteredPokemons]);

	const onClickHandler = (page) => {
		dispatch(setCurrentPage(page));
	};

	return (
		<div className="mt-4 join">
			<button
				className="join-item btn"
				onClick={() => onClickHandler(1)}
				disabled={currentPage === 1}
			>
				First
			</button>
			<button
				className="join-item btn"
				onClick={() => onClickHandler(currentPage - 1)}
				disabled={currentPage === 1}
			>
				Previous
			</button>
			<button className="join-item btn ">
				{currentPage} of {totalPage}
			</button>
			<button
				className="join-item btn"
				onClick={() => onClickHandler(currentPage + 1)}
				disabled={currentPage === totalPage}
			>
				Next
			</button>
			<button
				className="join-item btn"
				onClick={() => onClickHandler(totalPage)}
				disabled={currentPage === totalPage}
			>
				Last
			</button>
		</div>
	);
}

export default Pagination;
