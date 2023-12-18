'use client';

import { IQuery } from '@/app/common/types/types';
import { createSlice } from '@reduxjs/toolkit';

export interface IFilteredData {
    data: {
        data: [];
    };
    queryArr: IQuery[];
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
        // setOutFilterQueryArr: (state, action) => {
        //     state.queryArr = action.payload;
        // },

        setDefaultDataAndQueryArr: (state) => {
            state.data = { data: [] };
            state.queryArr = [];
        },
    },
});

export const { setData, setQueryArr, setDefaultDataAndQueryArr } = filteredData.actions;

export default filteredData.reducer;
