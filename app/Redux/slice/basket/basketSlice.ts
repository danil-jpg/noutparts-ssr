"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface IBasketData {
    products: Array<{
        id: number;
        name: string;
        price: number;
        photo_url: string;
    }>;
}

const initialState: IBasketData = {
    products: [],
};

const basketData = createSlice({
    name: "basketData",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const { photo_url, price, name, id } = action.payload;
            state.products.push({ name, price, photo_url, id });
        },
        removeProduct: (state, action) => {
            const indexToRemove = action.payload; // Assuming payload contains the index of the product to remove

            if (indexToRemove !== -1) {
                state.products.splice(indexToRemove, 1);
            }
        }
    }
});


export const { addProduct,removeProduct } = basketData.actions;

export default basketData.reducer;
