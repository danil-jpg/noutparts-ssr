'use server';
import axios from 'axios';
import { IAppeal, IProduct, categories } from '../common/types/types';
import { ICatalogueItemRes } from '../common/types/types';

import { ProductData } from '../common/components/Header/HeaderSearch';

export const getCatalogueItemData = async (query: string) => {
    try {
        const data = await fetch(`https://noutparts-strapi.onrender.com/api/${query}`, {
            cache: 'force-cache',
        });

        return (await data.json()) as ICatalogueItemRes;
    } catch (e) {
        console.error(e);
    }
};

export const getFilterItemData = async <T extends unknown>(query: string | number) => {
    try {
        const data = await fetch(`https://noutparts-strapi.onrender.com/api/${query}`, {
            cache: 'force-cache',
        });

        return (await data.json()) as T;
    } catch (e) {
        console.error(e);
    }
};

export const fetchDataFromServer = async (type: categories, query: string | number) => {
    try {
        const dataRow = await fetch(`https://noutparts-strapi.onrender.com/api/${type}?populate=*&${query}`, {
            cache: 'force-cache',
        });

        return await dataRow.json();
    } catch (e) {
        console.error(e);
    }
};

const transformData = (productsData: any[], category: string): any[] => {
    return productsData.map((productData: any) => {
        const id = productData.id;
        const { name, price, discount, photo, availability, tag } = productData.attributes;

        // Assuming photo.data is an array and taking the first element
        const photoUrl = photo?.data?.[0]?.attributes?.url || '';
        return {
            id,
            name,
            price,
            discount,
            availability,
            tag,
            photo_url: photoUrl,
            category,
        };
    });
};

const transformSingleData = (productData: any, category: categories): IProduct => {
    const id = productData.id;
    const { name, price, discount, photo, availability, tag } = productData.attributes;

    // Assuming photo.data is an array and taking the first element
    const photoUrl = photo?.data?.[0]?.attributes?.url || '';

    return {
        id,
        name,
        price,
        discount,
        photo_url: photoUrl,
        category,
        availability,
        tag,
    };
};

export const fetchFeaturedProducts = async (productType: string, filterType: string): Promise<IProduct[]> => {
    'use server';
    try {
        const response = await fetch(
            `http://noutparts-strapi.onrender.com/api/${productType}/?populate[0]=photo&filters[tag][$in][0]=${filterType}&pagination[start]=0&pagination[limit]=2`,
            { cache: 'force-cache' }
        );

        const dataRow = await response.json();

        const data = dataRow;

        return transformData(data.data || [], productType);
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

export const fetchProductNames = async (productType: string) => {
    try {
        const response = await axios.get<ProductData>(`https://noutparts-strapi.onrender.com/api/${productType}/?fields[0]=name`);
        const data: ProductData = response.data;

        return data.data || [];
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

export const fetchSimilarProducts = async (productType: string): Promise<IProduct[]> => {
    'use server';
    try {
        const response = await fetch(
            `https://noutparts-strapi.onrender.com/api/${productType}/
		?populate[0]=photo
		&fields[0]=name&fields[1]=price&fields[2]=discount&fields[3]=id
        &pagination[start]=0&pagination[limit]=5`,
            { cache: 'force-cache' }
        );

        const dataRow = await response.json();

        const data = dataRow;

        return transformData(data.data || [], productType);
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

export const fetchVisitedProducts = async (productType: categories, id: number): Promise<IProduct> => {
    'use server';
    try {
        const response = await fetch(
            `https://noutparts-strapi.onrender.com/api/${productType}/${id}
		?populate[0]=photo
		&fields[0]=name&fields[1]=price&fields[2]=discount&fields[3]=id`,
            { cache: 'force-cache' }
        );

        const dataRow = await response.json();

        const data = dataRow;

        return transformSingleData(data.data || [], productType);
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            name: '',
            price: 0,
            discount: 0,
            photo_url: '',
            id: 0,
            category: '',
            tag: '',
            availability: '',
        };
    }
};

export const postAppeal = async (data: IAppeal): Promise<any> => {
    'use server';
    try {
        const response = await fetch(`https://noutparts-strapi.onrender.com/api/appeals`, {
            cache: 'force-cache',
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const dataRow = await response.json();

        console.log(dataRow);
    } catch (error) {
        console.error('Error posting data:', error);
    }
};

export const fetchProductInfo = async (productType: string, productId: number) => {
    try {
        const response = await axios.get(`https://noutparts-strapi.onrender.com/api/${productType}/${productId}?populate[0]=photo`);
        const data = response.data.data.attributes;

        // Update the state with the fetched data
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
