'use server'
import axios from "axios";
import { categories } from '../common/types/types';

import { ICatalogueItemRes } from '../common/types/types';

import { ProductData } from '../common/components/Header/HeaderSearch';

export const getCatalogueItemData = async (query: string) => {
    try {
        const data = await fetch(`http://127.0.0.1:1337/api/${query}`, {
            cache: 'force-cache',
        });

        return (await data.json()) as ICatalogueItemRes;
    } catch (e) {
        console.error(e);
    }
};

export const getFilterItemData = async <T extends unknown>(query: string) => {
    try {
        const data = await fetch(`http://127.0.0.1:1337/api/${query}`, {
            cache: 'force-cache',
        });

        return (await data.json()) as T;
    } catch (e) {
        console.error(e);
    }
};

export const fetchDataFromServer = async (type: categories, query: string) => {
    try {
        const dataRow = await fetch(`http://127.0.0.1:1337/api/${type}?${query}`, {
            cache: 'no-store',
        });
        return await dataRow.json();
    } catch (e) {
        console.error(e);
    }
};


export const fetchProductNames = async (productType: string) => {
    try {
        const response = await axios.get<ProductData>(`http://127.0.0.1:1337/api/${productType === "matrix" ? "matrice" : productType === "power_supply" ? "power-supplie" : productType === "battery" ? "batterie" : productType}s/?fields[0]=name`);
        const data: ProductData = response.data;

        return  data.data || [];
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};





