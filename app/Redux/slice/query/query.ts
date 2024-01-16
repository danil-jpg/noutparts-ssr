'use client';

import { IQuery, categories } from '@/app/common/types/types';
import { createSlice } from '@reduxjs/toolkit';

export interface IFilteredData {
    data: {
        data: [];
    };
    queryArr: IQuery[];
    type: categories | '';
}

const initialState: IFilteredData = {
    data: {
        data: [],
    },
    queryArr: [],
    type: '',
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
        setType: (state, action) => {
            state.type = action.payload as categories;
        },

        setDefaultDataAndQueryArr: (state) => {
            state.data = { data: [] };
            state.queryArr = [];
        },
    },
});

export const { setData, setQueryArr, setDefaultDataAndQueryArr, setType } = filteredData.actions;

export default filteredData.reducer;
