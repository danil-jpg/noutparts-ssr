"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface IFilteredData {
	data: {
		data: [];
	};
}

const initialState: IFilteredData = {
	data: {
		data: []
	}
};

const filteredData = createSlice({
	name: "filteredData",
	initialState,
	reducers: {
		setData: (state, action) => {
			state.data = action.payload;
		}
	}
});

export const { setData } = filteredData.actions;

export default filteredData.reducer;
