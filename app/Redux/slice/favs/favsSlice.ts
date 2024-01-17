'use client';

import { categories } from '@/app/common/types/types';
import { createSlice } from '@reduxjs/toolkit';

export interface IFavsData {
    products: {
        id: number;
        name: string;
        category: categories;
        availability: string;
        tag: string;
        price: number;
        discount: number;
        photo_url: string;
    }[];
}

const initialState: IFavsData = {
    products: [],
};

const favsData = createSlice({
    name: 'favsData',
    initialState,
    reducers: {
        addFavProduct: (state, action) => {
            const { id, availability, category, price, name, discount, tag, photo_url } = action.payload;
            const existingIndex = state.products.findIndex((product) => product.id === id && product.category === category);

            if (existingIndex !== -1) {
                state.products.splice(existingIndex, 1);
            } else {
                state.products.push({ name, id, availability, category, price, discount, tag, photo_url });
            }
        },
    },
});

export const { addFavProduct } = favsData.actions;

export default favsData.reducer;
