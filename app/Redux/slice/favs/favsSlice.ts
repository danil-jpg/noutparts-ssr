"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface IFavsData {
    products: Array<{
        id: number;
        name: string;
    }>;
}

const initialState: IFavsData = {
    products: [],
};

const favsData = createSlice({
    name: "favsData",
    initialState,
    reducers: {
        addFavProduct: (state, action) => {
            const { name, id } = action.payload;
            const existingIndex = state.products.findIndex(product => product.id === id);

            if (existingIndex !== -1) {
                // Remove the product if it already exists
                state.products.splice(existingIndex, 1);
            } else {
                // Add the product if it doesn't exist
                state.products.push({ name, id });
            }
        },
        removeFavProduct: (state, action) => {
            const indexToRemove = action.payload; // Assuming payload contains the index of the product to remove

            if (indexToRemove !== -1) {
                state.products.splice(indexToRemove, 1);
            }
        }
    }
});


export const { addFavProduct,removeFavProduct } = favsData.actions;

export default favsData.reducer;
