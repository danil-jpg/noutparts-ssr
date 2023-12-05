'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface IFilteredData {
    data: {
        data: [];
    };
    queryArr: [];
}

const initialState: IFilteredData = {
    data: {
        data: [],
    },
    queryArr: [],
};

const filteredData = createSlice({
    name: 'filteredData',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        setQueryArr: (state, action) => {
            state.queryArr = action.payload;
        },
    },
});

export const { setData, setQueryArr } = filteredData.actions;

export default filteredData.reducer;
