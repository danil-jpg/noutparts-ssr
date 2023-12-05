import { setData, setQueryArr as setQueryArrRed } from '@/app/Redux/slice/query/query';
import { IQuery, categories } from '../common/types/types';
import qs from 'qs';
import { fetchDataFromServer } from './data';
import { AppDispatch } from '../Redux/store';
import { useEffect } from 'react';

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

export const filterItemOnclickHandler = async (dataToGet: IQuery[], type: categories) => {
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

export const onFilterItemClickHandler = async (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    queriesArr: IQuery[],
    setQueryArr: React.Dispatch<React.SetStateAction<IQuery[]>>,
    dispatch: (func: {}) => AppDispatch,
    type: categories,
    el: { attributes: any },
    searchParam: string
) => {
    let copy: IQuery[] = [];
    e.currentTarget.classList.toggle('active');
    if (!queriesArr.length) {
        setQueryArr((prev) => {
            copy = structuredClone(prev);
            copy.push({
                searchParam: searchParam,
                searchParamKeys: [el.attributes[searchParam]],
            });
            dispatch(setQueryArrRed(copy));
            return copy;
        });
        // queriesArr.push({
        //     searchParam: searchParam,
        //     searchParamKeys: [el.attributes[searchParam]],
        // });
    } else {
        let numOfOccuranceCounter = 0;
        for (let i = 0; i < queriesArr.length; i++) {
            if (queriesArr[i].searchParam === searchParam) {
                numOfOccuranceCounter = 1;
                if (queriesArr[i].searchParamKeys.includes(el.attributes[searchParam]) === false) {
                    setQueryArr((prev) => {
                        copy = structuredClone(prev);
                        copy[i].searchParamKeys.push(el.attributes[searchParam]);
                        dispatch(setQueryArrRed(copy));
                        return copy;
                    });
                    // queriesArr[i].searchParamKeys.push(el.attributes[searchParam]);
                } else {
                    const index = queriesArr[i].searchParamKeys.indexOf(el.attributes[searchParam]);
                    setQueryArr((prev) => {
                        copy = structuredClone(prev);
                        copy[i].searchParamKeys.splice(index, 1);
                        dispatch(setQueryArrRed(copy));
                        return copy;
                    });
                    // queriesArr[i].searchParamKeys.splice(index, 1);
                }
            }
        }
        if (numOfOccuranceCounter === 0) {
            setQueryArr((prev) => {
                copy = structuredClone(prev);
                copy.push({
                    searchParam: searchParam,
                    searchParamKeys: [el.attributes[searchParam]],
                });
                dispatch(setQueryArrRed(copy));
                return copy;
            });
            // queriesArr.push({
            //     searchParam: searchParam,
            //     searchParamKeys: [el.attributes[searchParam]],
            // });
        }
    }
    console.log(queriesArr);
    const res = await filterItemOnclickHandler(queriesArr, type);
    return res;

    // dispatch(setData(res));
};
