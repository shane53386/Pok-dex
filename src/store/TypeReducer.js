import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
	types: [],
	selectedType: [],
};

const typeSlice = createSlice({
	name: "type",
	initialState,
	reducers: {
		getTypes: (state, action) => {
			state.types = action.payload;
			console.log(current(state));
		},
		getSelectedType: (state, action) => {
			state.selectedType = action.payload;
			console.log(current(state));
		},
	},
});

export const { getTypes, getSelectedType } = typeSlice.actions;
export default typeSlice.reducer;
