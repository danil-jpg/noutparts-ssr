'use client';

import { categories } from '@/app/common/types/types';
import { createSlice } from '@reduxjs/toolkit';

export interface IHistoryProductsData {
    products: {
        id: number;
        category: categories;
    }[];
}

const initialState: IHistoryProductsData = {
    products: [],
};

const historyProductsData = createSlice({
    name: 'historyProductsData',
    initialState,
    reducers: {
        addHistoryProduct: (state, action) => {
            const { id, category} = action.payload;
            const existingIndex = state.products.findIndex((product) => product.id === id);

            if (existingIndex !== -1) {
                return;
            } else {
                // Add the product if it doesn't exist
                state.products.push({ id, category });
            }

            // state.products = [];
        },
        removeHistoryProduct: (state, action) => {
            const indexToRemove = action.payload; // Assuming payload contains the index of the product to remove

            if (indexToRemove !== -1) {
                state.products.splice(indexToRemove, 1);
            }

        }
    }
});

export const { removeHistoryProduct, addHistoryProduct } = historyProductsData.actions;

export default historyProductsData.reducer;
