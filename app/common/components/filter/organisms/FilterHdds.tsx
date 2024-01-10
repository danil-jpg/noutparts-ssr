'use client';
import React, { FC, useEffect, useState } from 'react';
import { getFilterItemData } from '@/app/lib/data';
import { v1 } from 'uuid';
import Loading from '../../Loading/Loading';
import { filterItemOnclickHandler, makeUniqueAndLoopFunc, onFilterItemClickHandler } from '@/app/lib/service';
import { useAppDispatch, useAppSelector } from '@/app/Redux/store';
import { createFilterNavHdd } from '@/app/Redux/slice/filtersNavSlice/filtersNavSlice';
import { IQuery } from '@/app/common/types/types';
import { setData, setDefaultDataAndQueryArr, setType } from '@/app/Redux/slice/query/query';
import { setQueryArr as setQueriesArrRed } from '@/app/Redux/slice/query/query';

let [memory, connector, technology]: any = '';

export default function FilterHdds() {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const selector = useAppSelector((state) => state.queryReducer.queryArr);

    const prevType = useAppSelector((state) => state.queryReducer.type);

    const [queriesArr, setQueriesArr] = useState<IQuery[]>(prevType === 'hdds' ? selector : []);

    const filterNavHdd = useAppSelector((state) => state.filtersNavReducer.hdds);
    const dispatch = useAppDispatch();

    let memoryCopy: any = [];

    useEffect(() => {
        const fetchData = async () => {
            if (!filterNavHdd.brand?.length) {
                const memoryRow: any = getFilterItemData('hdds?fields[0]=memory_mb');
                const connectorRow: any = getFilterItemData('hdds?fields[0]=connector');
                const technologyTypeRow: any = getFilterItemData('hdds?fields[0]=technology');

                [memory, connector, technology] = await Promise.all([memoryRow, connectorRow, technologyTypeRow]);

                memory as {
                    data: { id: number; attributes: { memory_mb: number; active: boolean; numOfOccurance: number } }[];
                };

                makeUniqueAndLoopFunc(memory, 'memory_mb');
                dispatch(createFilterNavHdd({ memory_mb: memory }));

                memoryCopy = structuredClone(filterNavHdd.memory_mb);
            } else {
                memoryCopy = structuredClone(filterNavHdd.memory_mb);
            }

            // console.log({ memory: memory });

            // makeUniqueAndLoopFunc(voltage, 'battery_voltage');

            // makeUniqueAndLoopFunc(batteryType, 'battery_type');

            // makeUniqueAndLoopFunc(color, 'battery_color');
            console.log(memory);

            setIsLoaded(true);
        };

        if (!prevType) {
            dispatch(setType('hdds'));
        } else if (prevType === 'hdds') {
            setQueriesArr(selector);
        } else {
            dispatch(setType('hdds'));
            dispatch(setDefaultDataAndQueryArr());
        }

        fetchData();
    }, []);

    useEffect(() => {
        (async function () {
            const res = await filterItemOnclickHandler(queriesArr, 'hdds');

            dispatch(setData(res));
            dispatch(setQueriesArrRed(queriesArr));
        })();
    }, [queriesArr]);

    if (!isLoaded && !memoryCopy?.data?.length) {
        return <Loading></Loading>;
    }
    return (
        <div className='filter'>
            <p className='filter_title'>Фильтр</p>
            <div className='filter_items'>
                <div className='filter_item'>
                    <p className='filter_item__title'>Емкость</p>
                    <p className='filter_item__descr'>Емкость аккамулятора</p>
                    <ul className='filter_item__values'>
                        {memoryCopy.data.map((el: { id: number; attributes: { memory_mb: number; active: boolean; numOfOccurance: number } }, id: number) => (
                            <li
                                key={el.id}
                                className={`${el.attributes.active ? 'active' : ''} filter_item__value`}
                                onClick={(e) => {
                                    (async function () {
                                        await onFilterItemClickHandler(queriesArr, setQueriesArr, el, 'memory_mb');
                                    })();

                                    el.attributes.active = !el.attributes.active;
                                    dispatch(createFilterNavHdd({ memory_mb: memoryCopy }));

                                    // if (memoryCopy.data[id].attributes.active) {
                                    //     memoryCopy.data[id].attributes.active = !memoryCopy.data[id].attributes.active;
                                    //     dispatch(createFilterNavHdd({ memory_mb: memoryCopy }));
                                    // } else {
                                    //     memoryCopy.data[id].attributes.active = !memoryCopy.data[id].attributes.active;
                                    //     dispatch(createFilterNavHdd({ memory_mb: memoryCopy }));
                                    // }
                                    e.stopPropagation();
                                }}>
                                {el.attributes.memory_mb} mAh
                                <p>({el.attributes.numOfOccurance})</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
