"use client";

import { categories } from "@/app/common/types/types";
import { createSlice } from "@reduxjs/toolkit";

export interface IFavsData {
	products: {
		id: number;
		name: string;
		category?: categories;
	}[];
}

const initialState: IFavsData = {
	products: []
};

const favsData = createSlice({
	name: "favsData",
	initialState,
	reducers: {
		addFavProduct: (state, action) => {
			const { name, id, category } = action.payload;
			const existingIndex = state.products.findIndex((product) => product.id === id && product.category === category);

			if (existingIndex !== -1) {
				// Remove the product if it already exists
				state.products.splice(existingIndex, 1);
			} else {
				// Add the product if it doesn't exist
				state.products.push({ name, id, category });
			}

			// state.products = [];
		},
		// removeFavProduct: (state, action) => {
		// 	const { id, category } = action.payload; // Assuming payload contains the id and type of the product to remove
		// 	const indexToRemove = state.products.findIndex((product) => product.id === id && product.category === category);

		// 	if (indexToRemove !== -1) {
		// 		state.products.splice(indexToRemove, 1);
		// 	}
		// }
	}
});

export const { addFavProduct } = favsData.actions;

export default favsData.reducer;
