import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	types: [],
	selectedType: [],
};

const typeSlice = createSlice({
	name: "type",
	initialState,
	reducers: {
		setTypes: (state, action) => {
			state.types = action.payload;
		},
		setSelectedType: (state, action) => {
			state.selectedType = action.payload;
		},
	},
});

export const { setTypes, setSelectedType } = typeSlice.actions;
export default typeSlice.reducer;
