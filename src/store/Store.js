import { configureStore } from "@reduxjs/toolkit";
import PokemonReducer from "./PokemonReducer";
import TypeReducer from "./TypeReducer";

export default configureStore({
	reducer: {
		pokemons: PokemonReducer,
		types: TypeReducer,
	},
});
