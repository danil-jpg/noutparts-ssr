import { setData, setQueryArr as setQueryArrRed } from '@/app/Redux/slice/query/query';
import { IQuery, categories } from '../common/types/types';
import qs from 'qs';
import { fetchDataFromServer } from './data';
import { AppDispatch } from '../Redux/store';

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

export const filterItemOnclickHandler = async (dataToGet: IQuery[], type: categories, sort?: 'asc' | 'desc' | '', dispatch?: (func: {}) => AppDispatch) => {
    if (dataToGet.length) {
        const queryBuilderObj: any = {
            filters: {},
        };

        for (let i = 0; i < dataToGet.length; i++) {
            queryBuilderObj.filters[dataToGet[i].searchParam] = {
                $eq: [...dataToGet[i].searchParamKeys],
                $sort: [`price:${sort}`],
            };
        }

        const queryBuilder = qs.stringify(queryBuilderObj);
        const res = await fetchDataFromServer(type, queryBuilder);
        if (sort && dispatch) {
            dispatch(setData(res));
        }
        return res;
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
    'use client';
    let copy: IQuery[] = [];
    let isActive = false;
    // e.currentTarget.classList.toggle('active');

    if (!queriesArr.length) {
        setQueryArr((prev) => {
            copy = structuredClone(prev);
            copy.push({
                searchParam: searchParam,
                searchParamKeys: [el.attributes[searchParam]],
            });
            return copy;
        });
        isActive = true;
    } else {
        let numOfOccuranceCounter = 0;

        for (let i = 0; i < queriesArr.length; i++) {
            if (queriesArr[i].searchParam === searchParam) {
                numOfOccuranceCounter = 1;
                if (queriesArr[i].searchParamKeys.includes(el.attributes[searchParam]) === false) {
                    setQueryArr((prev) => {
                        copy = structuredClone(prev);
                        copy[i].searchParamKeys.push(el.attributes[searchParam]);
                        isActive = true;
                        return copy;
                    });
                } else {
                    const index = queriesArr[i].searchParamKeys.indexOf(el.attributes[searchParam]);
                    setQueryArr((prev) => {
                        copy = structuredClone(prev);
                        copy[i].searchParamKeys.splice(index, 1);
                        isActive = false;
                        return copy;
                    });
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
                isActive = true;
                return copy;
            });
        }
    }

    if (isActive) {
        e.currentTarget.classList.add('active');
    } else {
        e.currentTarget.classList.remove('active');
    }

    // let res = '';

    // await setTimeout(async () => {
    // dispatch(setQueryArrRed(copy));
    // res = await filterItemOnclickHandler(copy, type);
    // dispatch(setData(res));
    // }, 0);

    // for (let i = 0; i < copy.length; i++) {
    //     if (copy[i].searchParamKeys.includes(el.attributes.diagonale)) {
    //         e.currentTarget.classList.add('active');
    //     } else {
    //         e.currentTarget.classList.remove('active');
    //     }
    // }

    return isActive;
};

export const onSelectItemChangeHandler = async (
    queriesArr: IQuery[],
    setQueryArr: React.Dispatch<React.SetStateAction<IQuery[]>>,
    brand: string,
    dispatch: (func: {}) => AppDispatch,
    type: categories
) => {
    let copy: IQuery[] = [];

    if (!queriesArr.length) {
        setQueryArr((prev) => {
            copy = structuredClone(prev);
            copy.push({
                searchParam: 'brand',
                searchParamKeys: [brand],
            });
            return copy;
        });
    } else {
        let numOfOccuranceCounter = 0;
        for (let i = 0; i < queriesArr.length; i++) {
            if (queriesArr[i].searchParam === 'brand') {
                if (!queriesArr[i].searchParamKeys.includes(brand)) {
                    numOfOccuranceCounter = 1;
                    setQueryArr((prev) => {
                        copy = structuredClone(prev);
                        copy[i].searchParamKeys.push(brand);
                        return copy;
                    });
                }
            }
        }
        if (numOfOccuranceCounter === 0) {
            setQueryArr((prev) => {
                copy = structuredClone(prev);
                copy.push({
                    searchParam: 'brand',
                    searchParamKeys: [brand],
                });
                return copy;
            });
        }
    }

    // let res = '';

    // await setTimeout(async () => {
    //     dispatch(setQueryArrRed(copy));
    //     res = await filterItemOnclickHandler(copy, type);
    //     dispatch(setData(res));
    // }, 0);

    // return res;
};

export const onChoosenItemClickHandler = async (queriesArr: IQuery[], dispatch: (func: {}) => AppDispatch, type: categories) => {
    let res = await filterItemOnclickHandler(queriesArr, type);
    // console.log(queriesArr, res);
    return res;
};
