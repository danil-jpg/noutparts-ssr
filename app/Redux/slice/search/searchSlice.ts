import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Products {
	[key: string]: string[];
}

const initialState: Products = {
	matrix: [],
	battery: [],
	hdd: [],
	keyboard: [],
	ram: [],
	"power-unit": []
};

const searchHistoryData = createSlice({
	name: "searchHistoryData",
	initialState,
	reducers: {
		addProducts: (state, action: PayloadAction<{ key: string; products: string[] }>) => {
			const { key, products } = action.payload;
			if (state[key]) {
				state[key] = [...state[key], ...products];
			}
		},
		removeProduct: (state, action) => {
			// Reset each individual key in the state object to an empty array
			Object.keys(state).forEach((key) => {
				state[key] = [];
			});

			
		}
	}
});

export const { addProducts, removeProduct } = searchHistoryData.actions;

export default searchHistoryData.reducer;
