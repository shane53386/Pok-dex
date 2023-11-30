import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	pokemons: [],
	filteredPokemons: [],
	currentPage: 1,
};

const pokemonSlice = createSlice({
	name: "pokemon",
	initialState,
	reducers: {
		setPokemons: (state, action) => {
			state.pokemons = action.payload;
		},
		setFilteredPokemons: (state, action) => {
			state.filteredPokemons = action.payload;
		},
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload;
		},
	},
});

export const { setPokemons, setFilteredPokemons, setCurrentPage } =
	pokemonSlice.actions;
export default pokemonSlice.reducer;
