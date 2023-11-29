import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
	types: [],
};

const typeSlice = createSlice({
	name: "type",
	initialState,
	reducers: {
		getTypes: (state, action) => {
			state.types = action.payload;
      console.log(current(state));
		},
	},
});

export const { getTypes } = typeSlice.actions;
export default typeSlice.reducer;
