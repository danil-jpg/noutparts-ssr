"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface IBasketData {
    products: {
        category: string;
        id: number;
        name: string;
        price: number;
        photo_url: string;
    }[];
}

const initialState: IBasketData = {
    products: [],
};

const basketData = createSlice({
    name: "basketData",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const { photo_url, price, name, id , category} = action.payload;
            state.products.push({ category, name, price, photo_url, id });
        },
        removeProduct: (state, action) => {
            const indexToRemove = action.payload; // Assuming payload contains the index of the product to remove

            if (indexToRemove !== -1) {
                state.products.splice(indexToRemove, 1);
            }
        },
        removeProductByCategoryId: (state, action) => {
            const { category, id } = action.payload; // Extract category and id from payload
            const indexToRemove = state.products.findIndex(product => product.category === category && product.id === id);

            if (indexToRemove !== -1) {
                state.products.splice(indexToRemove, 1);
                console.log("🚀 ~ state.products:", state.products)
                
            }
        }
    }
});


export const { addProduct,removeProduct, removeProductByCategoryId } = basketData.actions;

export default basketData.reducer;
