import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    endpoints: (builder) => ({
        getAllProducts: builder.query<any, void>({
            query: () => 'products',
        }),
        getProduct: builder.query({
            query: (arg) => `products/search?q=${arg}`,
        }),
    }),
});

export const { useGetAllProductsQuery, useGetProductQuery } = productsApi;
