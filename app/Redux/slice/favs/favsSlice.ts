'use client';
import { categories as Icategories } from '@/app/common/types/types';
import { createSlice } from '@reduxjs/toolkit';
import { IFavsData } from '@/app/common/types/types';

const initialState: IFavsData = {
    products: [],
};

const favsData = createSlice({
    name: 'favsData',
    initialState,
    reducers: {
        addFavProduct: (state, action) => {
            const { id, availability, category, price, name, discount, photo_url } = action.payload;
            const existingIndex = state.products.findIndex((product) => product.id === id);
            if (existingIndex !== -1) {
                // Remove the product if it already exists
                state.products.splice(existingIndex, 1);
            } else {
                // Add the product if it doesn't exist
                state.products.push({ id, availability, category, price, name, discount, photo_url });
            }
        },
    },
});

export const { addFavProduct } = favsData.actions;

export default favsData.reducer;
