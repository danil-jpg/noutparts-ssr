import { categories } from '../common/types/types';
import qs from 'qs';
import { fetchDataFromServer } from './data';

export const makeUniqueAndLoopFunc = (obj: any, propToCompare: string | number) => {
    for (let i = 0; i < obj.data.length; i++) {
        obj.data[i].attributes.numOfOccurance = 1;
        for (let j = 0; j < i; j++) {
            if (obj.data[i].attributes[propToCompare] === obj.data[j].attributes[propToCompare]) {
                obj.data[j].attributes.numOfOccurance = obj.data[j].attributes.numOfOccurance + 1;
                obj.data.splice(i, 1);
                i = --i;
            }
        }
    }
};

export const filterItemOnclickHandler = async (
    objectsKey: string[],
    // setObjectKey: any,
    type: categories,
    el: any,
    searchKey: string
) => {
    if (!objectsKey.includes(el.attributes[searchKey])) {
        objectsKey.push(el.attributes[searchKey]);
    } else {
        const index = objectsKey.indexOf(el.attributes[searchKey]);
        objectsKey.splice(index, 1);
    }

    if (objectsKey.length) {
        const queryBuilder = qs.stringify({
            filters: {
                [searchKey]: {
                    $eq: objectsKey,
                },
            },
        });

        return await fetchDataFromServer(type, queryBuilder);
    } else {
        return [];
    }
};
