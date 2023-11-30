'use server';

import { categories } from '../common/types/types';

import { ICatalogueItemRes } from '../common/types/types';

export const getCatalogueItemData = async (query: string) => {
    const data = await fetch(`http://127.0.0.1:1337/api/${query}`, {
        cache: 'force-cache',
    });

    return (await data.json()) as ICatalogueItemRes;
};

export const getFilterItemData = async <T extends unknown>(query: string) => {
    const data = await fetch(`http://127.0.0.1:1337/api/${query}`, {
        cache: 'force-cache',
    });

    return (await data.json()) as T;
};

export const fetchDataFromServer = async (type: categories, query: string) => {
    'use server';
    const dataRow = await fetch(`http://127.0.0.1:1337/api/${type}?${query}`);
    return await dataRow.json();
};
