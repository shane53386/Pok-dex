import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
	pokemons: [],
};

const pokemonSlice = createSlice({
	name: "pokemon",
	initialState,
	reducers: {
		getPokemons: (state, action) => {
			state.pokemons = action.payload;
			console.log(current(state));
		},
	},
});

export const { getPokemons } = pokemonSlice.actions;
export default pokemonSlice.reducer;
