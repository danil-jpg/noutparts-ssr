import { ICatalogueItemRes } from '../common/types/types';

export const getCatalogueItemData = async (query: string) => {
    const data = await fetch(`http://127.0.0.1:1337/api/${query}`, {
        cache: 'force-cache',
    });

    return (await data.json()) as ICatalogueItemRes;
};
