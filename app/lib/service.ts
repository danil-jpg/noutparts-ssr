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

interface IObjectKey {
    searchParam: string;
    searchParamKeys: string[];
}

export const filterItemOnclickHandler = async (dataToGet: IObjectKey[], type: categories) => {
    if (dataToGet.length) {
        const queryBuilderObj: any = {
            filters: {},
        };

        for (let i = 0; i < dataToGet.length; i++) {
            queryBuilderObj.filters[dataToGet[i].searchParam] = {
                $eq: [...dataToGet[i].searchParamKeys],
            };
        }

        const queryBuilder = qs.stringify(queryBuilderObj);

        // console.log(queryBuilder);

        return await fetchDataFromServer(type, queryBuilder);
    } else {
        return [];
    }
};
