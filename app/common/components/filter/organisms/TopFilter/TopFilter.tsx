'use client';
import React, { useEffect, useState } from 'react';
import Select from '../../../../ui/form/select/Select';
import './TopFilter.scss';
import IconRenderer from '@/app/common/ui/Icons/IconRenderer';
import { getFilterItemData } from '@/app/lib/data';
import { useAppDispatch, useAppSelector } from '@/app/Redux/store';
import { filterItemOnclickHandler, onFilterItemClickHandler } from '@/app/lib/service';
import { IQuery, categories } from '@/app/common/types/types';
import { setData } from '@/app/Redux/slice/query/query';
import { setQueryArr as setQueriesArrRed } from '@/app/Redux/slice/query/query';
interface IBrand {
    data: [
        {
            attributes: {
                brand: string;
            };
        }
    ];
}

const TopFilter = ({ type }: { type: string }) => {
    const [queriesArr, setQueriesArr] = useState<IQuery[]>([]);
    const [brand, setBrand] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [brandArr, setBrandArr] = useState<string[]>([]);
    const [priceArr, setPriceArr] = useState<string[]>([]);

    const selector = useAppSelector((state) => state.queryReducer.queryArr);
    const dispatch = useAppDispatch();

    // const onSelectClickHandler = async () => {
    //     filterItemOnclickHandler(queriesArr, 'matrices');
    // };

    // useEffect(() => {
    //     const getData = async () => {
    //         const res = (await getFilterItemData(`matrices?fields[0]=brand&fields[1]`)) as IBrand;
    //         const formattedAns = [];
    //         for (let key in res.data) {
    //             formattedAns.push(res.data[key].attributes.brand);
    //         }
    //         setBrandArr(formattedAns);
    //     };

    //     getData();
    // }, []);

    // useEffect(() => {
    //     const deepCopy = structuredClone(selector);
    //     setQueriesArr(deepCopy);

    //     if (brand === 'Бренд') {
    //     } else {
    //         const newItem: IQuery = {
    //             searchParam: 'brand',
    //             searchParamKeys: [brand],
    //         };

    //         setQueriesArr((prev) => {
    //             for (let i = 0; i < prev.length; i++) {
    //                 if (prev[i].searchParam === 'brand') {
    //                     prev[i].searchParamKeys.push(brand);
    //                 } else if (prev[prev.length - 1].searchParam !== 'brand') {
    //                     // return [...prev, newItem];
    //                     prev.push(newItem);
    //                 }
    //             }
    //             return prev;
    //         });
    //     }
    // }, [brand]);

    // useEffect(() => {
    //     (async () => {
    //         const res = await filterItemOnclickHandler(queriesArr, 'matrices');
    //         console.log(res, queriesArr);
    //         dispatch(setQueriesArrRed(queriesArr));
    //         dispatch(setData(res));
    //     })();
    // }, [queriesArr, dispatch]);

    const RenderChoosen = () => {
        // dispatch(setQueriesArrRed());
        // console.log(selector);
        return (
            <div className='choosen-wr'>
                {/* {selector
                    ? selector.map((el: IQuery) => {
                          return el.searchParamKeys.map((el) => {
                              return (
                                  <div className='choosen' key={el}>
                                      {el}
                                  </div>
                              );
                          });
                      })
                    : []} */}
            </div>
        );
    };

    return (
        <div className='top-filter'>
            <p className='top-filter_title'>Аккумуляторы</p>
            <div className='top-filter_filters'>
                <div id='filter-menu-burger-wr' className='filter-menu-burger-wr'></div>
                <div className='select-container'>
                    <p className='select-container__title'>Выберите бренд</p>
                    <Select defValue='Бренд' arr={brandArr} setValue={setBrand} value={brand} />
                </div>
                <div className='select-container'>
                    <p className='select-container__title'>Цена</p>
                    <Select defValue='Цена' arr={['по возрастанию', 'по убыванию']} setValue={setPrice} value={price} />
                </div>
            </div>
            <div className='top-filter_filters_middle'>
                <div className='top-filters_filters_middle_btn active'>Есть на складе</div>
                <div className='top-filters_filters_middle_btn'>Скидка</div>
                <div className='top-filters_filters_middle_btn'>Новинки</div>
            </div>
            <RenderChoosen />
        </div>
    );
};

export default TopFilter;
