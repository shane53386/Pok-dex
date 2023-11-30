import { configureStore } from "@reduxjs/toolkit";
import PokemonReducer from "./PokemonReducer";
import TypeReducer from "./TypeReducer";

export default configureStore({
	reducer: {
		pokemon: PokemonReducer,
		type: TypeReducer,
	},
});
