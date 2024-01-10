'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    hdds: {
        brand: [],
        memory_mb: {
            data: [],
        },
        connector: [],
        technology: [],
    },
};

const filtersNavReducer = createSlice({
    name: 'favsData',
    initialState,
    reducers: {
        createFilterNavHdd: (state, action) => {
            state.hdds = { ...action.payload };
        },
    },
});

export const { createFilterNavHdd } = filtersNavReducer.actions;

export default filtersNavReducer.reducer;
