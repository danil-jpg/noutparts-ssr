'use client';

import { categories as Icategories } from '@/app/common/types/types';
import { createSlice } from '@reduxjs/toolkit';
import { IFavsData } from '@/app/common/types/types';

const initialState: IFavsData = {
    products: [],
    data: [],
};

const favsData = createSlice({
    name: 'favsData',
    initialState,
    reducers: {
        addFavProduct: (state, action) => {
            const { name, id, category } = action.payload;
            const existingIndex = state.products.findIndex((product) => product.id === id);
            console.log(existingIndex);
            if (existingIndex !== -1) {
                // Remove the product if it already exists
                state.products.splice(existingIndex, 1);
            } else {
                // Add the product if it doesn't exist
                state.products.push({ name, id, category });
            }
        },

        setData: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { addFavProduct } = favsData.actions;

export default favsData.reducer;
