'use client';
import React, { useEffect, useRef, useState } from 'react';
import { getFilterItemData } from '@/app/lib/data';
import { v1 } from 'uuid';
import Loading from '../../Loading/Loading';
import { filterItemOnclickHandler, makeUniqueAndLoopFunc } from '@/app/lib/service';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '@/app/Redux/store';
import { IQuery } from '@/app/common/types/types';
import { onFilterItemClickHandler } from '@/app/lib/service';
import { setData, setDefaultDataAndQueryArr, setType } from '@/app/Redux/slice/query/query';
import { setQueryArr as setQueriesArrRed } from '@/app/Redux/slice/query/query';
import TopFilter from './TopFilter/TopFilter';

let [capacity, voltage, type, color]: any = '';

export default function FilterBattery() {
    const [choosenFilterParametrs, setChoosenFilterParametrs] = useState<(string | number)[]>([]);

    const prevType = useAppSelector((state) => state.queryReducer.type);

    const selector = useAppSelector((state) => state.queryReducer.queryArr);

    const [queriesArr, setQueriesArr] = useState<IQuery[]>(prevType === 'batteries' ? selector : []);

    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const [isActive, setIsActive] = useState<boolean>(false);

    const rootRef = useRef<HTMLDivElement | null>(null);

    const substrateRef = useRef<HTMLDivElement | null>(null);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const capacityRow: any = getFilterItemData('batteries?fields[0]=capacity&sort[0]=capacity:asc');
            const voltageRow: any = getFilterItemData('batteries?fields[0]=voltage&sort[0]=voltage:asc');
            const typeRow: any = getFilterItemData('batteries?fields[0]=type&sort[0]=type:asc');
            const colorRow: any = getFilterItemData('batteries?fields[0]=color&sort[0]=color:asc');

            [capacity, voltage, type, color] = await Promise.all([capacityRow, voltageRow, typeRow, colorRow]);

            makeUniqueAndLoopFunc(capacity, 'capacity');

            makeUniqueAndLoopFunc(voltage, 'voltage');

            makeUniqueAndLoopFunc(type, 'type');

            makeUniqueAndLoopFunc(color, 'color');

            setIsLoaded(true);

            if (queriesArr.length > 0) {
                console.log('here');
                const result: { searchParam: string; searchParamKey: string[] }[] = [];

                queriesArr.forEach((el) => {
                    if (el.searchParam === 'permission') {
                        result.push({ searchParam: 'permission', searchParamKey: el.searchParamKeys });
                    } else if (el.searchParam === 'fastening') {
                        result.push({ searchParam: 'fastening', searchParamKey: el.searchParamKeys });
                    }
                });
                if (result.length > 1) {
                    capacity.data.forEach((el: { id: number; attributes: { [key: string]: string } }) => {
                        if (el.attributes.permission === result[0].searchParamKey[0]) {
                            setChoosenFilterParametrs((prev) => {
                                return [...prev, el.attributes.permission];
                            });
                        }
                    });

                    voltage.data.forEach((el: { id: number; attributes: { [key: string]: string } }) => {
                        if (el.attributes.fastening === result[1].searchParamKey[0]) {
                            setChoosenFilterParametrs((prev) => {
                                return [...prev, el.attributes.fastening];
                            });
                        }
                    });
                }
            } else {
                console.log(queriesArr.length);
            }
        };

        if (!prevType) {
            dispatch(setType('batteries'));
        } else if (prevType === 'batteries') {
            setQueriesArr(selector);
        } else {
            dispatch(setType('batteries'));
            dispatch(setDefaultDataAndQueryArr());
        }

        fetchData();

        const resetQueryArrOnReload = () => dispatch(setDefaultDataAndQueryArr());

        window.addEventListener('beforeunload', resetQueryArrOnReload);

        return () => {
            window.removeEventListener('beforeunload', resetQueryArrOnReload);
        };
    }, []);

    useEffect(() => {
        if (isActive) {
            document.body.style.overflow = 'hidden';
            substrateRef.current?.classList.add('active');
        } else {
            substrateRef.current?.classList.remove('active');
            document.body.style.overflow = 'auto';
            substrateRef.current?.classList.remove('active');
        }
    }, [isActive]);

    useEffect(() => {
        (async function () {
            const res = await filterItemOnclickHandler(queriesArr, 'batteries');

            dispatch(setData(res));
            dispatch(setQueriesArrRed(queriesArr));
        })();
    }, [queriesArr]);

    if (!isLoaded) {
        return <Loading></Loading>;
    }

    return (
        <>
            <div
                className='substrate'
                ref={substrateRef}
                onClick={() => {
                    setIsActive(false);
                }}></div>
            <div className='filter-wr'>
                <div className={clsx('filter', { active: isActive })} ref={rootRef}>
                    <p className='filter_title'>Фильтр</p>
                    <div className='filter_items'>
                        <div
                            className='filter_item'
                            onClick={(e) => {
                                e.currentTarget.classList.toggle('active');
                            }}>
                            <div
                                onClick={(e) => {
                                    if (e.currentTarget.nextElementSibling) {
                                        const sibling = e.currentTarget.nextSibling as HTMLElement;
                                        sibling.classList.toggle('active');
                                    }
                                }}>
                                <p className='filter_item__title'>Ёмкость</p>
                                <p className='filter_item__descr'>Ёмкость аккумулятора</p>
                            </div>

                            <div className='filter_item__values'>
                                <ul>
                                    {capacity.data.map((el: { id: number; attributes: { [key: string]: string } }) => (
                                        <li
                                            key={el.id}
                                            className={clsx({ active: choosenFilterParametrs.includes(el.attributes.capacity), filter_item__value: true })}
                                            onClick={(e) => {
                                                (async function () {
                                                    await onFilterItemClickHandler(queriesArr, setQueriesArr, el, 'capacity');
                                                })();
                                                if (choosenFilterParametrs.includes(el.attributes.capacity)) {
                                                    const index = choosenFilterParametrs.indexOf(el.attributes.capacity);

                                                    setChoosenFilterParametrs((prev) => {
                                                        const newList = prev.filter((el, i) => i !== index);
                                                        return newList;
                                                    });
                                                } else {
                                                    setChoosenFilterParametrs((prev) => {
                                                        return [...prev, el.attributes.capacity];
                                                    });
                                                }

                                                e.stopPropagation();
                                            }}>
                                            <>
                                                {el.attributes.capacity} <p>({el.attributes.numOfOccurance})</p>
                                            </>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div
                            className='filter_item'
                            onClick={(e) => {
                                e.currentTarget.classList.toggle('active');
                            }}>
                            <div
                                onClick={(e) => {
                                    if (e.currentTarget.nextElementSibling) {
                                        const sibling = e.currentTarget.nextSibling as HTMLElement;
                                        sibling.classList.toggle('active');
                                    }
                                }}>
                                <p className='filter_item__title'>Напряжение</p>
                                <p className='filter_item__descr'>Напряжение аккумулятора</p>
                            </div>
                            <div className='filter_item__values'>
                                <ul>
                                    {voltage.data.map((el: any) => (
                                        <li
                                            key={el.id}
                                            className={clsx({ active: choosenFilterParametrs.includes(el.attributes.voltage), filter_item__value: true })}
                                            onClick={(e) => {
                                                (async function () {
                                                    await onFilterItemClickHandler(queriesArr, setQueriesArr, el, 'voltage');
                                                })();

                                                if (choosenFilterParametrs.includes(el.attributes.voltage)) {
                                                    const index = choosenFilterParametrs.indexOf(el.attributes.voltage);
                                                    setChoosenFilterParametrs((prev) => {
                                                        const newList = prev.filter((el, i) => i !== index);
                                                        return newList;
                                                    });
                                                } else {
                                                    setChoosenFilterParametrs((prev) => {
                                                        return [...prev, el.attributes.voltage];
                                                    });
                                                }

                                                e.stopPropagation();
                                            }}>
                                            {el.attributes.voltage} v<p>({el.attributes.numOfOccurance})</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div
                            className='filter_item'
                            onClick={(e) => {
                                e.currentTarget.classList.toggle('active');
                            }}>
                            <div
                                onClick={(e) => {
                                    if (e.currentTarget.nextElementSibling) {
                                        const sibling = e.currentTarget.nextSibling as HTMLElement;
                                        sibling.classList.toggle('active');
                                    }
                                }}>
                                <p className='filter_item__title'>Tип</p>
                                <p className='filter_item__descr'>Tип аккумулятора</p>
                            </div>
                            <div className='filter_item__values'>
                                <ul>
                                    {type.data.map((el: any) => (
                                        <li
                                            key={el.id}
                                            className={clsx({ active: choosenFilterParametrs.includes(el.attributes.type), filter_item__value: true })}
                                            onClick={(e) => {
                                                (async function () {
                                                    await onFilterItemClickHandler(queriesArr, setQueriesArr, el, 'type');
                                                })();

                                                if (choosenFilterParametrs.includes(el.attributes.type)) {
                                                    const index = choosenFilterParametrs.indexOf(el.attributes.type);
                                                    setChoosenFilterParametrs((prev) => {
                                                        const newList = prev.filter((el, i) => i !== index);
                                                        return newList;
                                                    });
                                                } else {
                                                    setChoosenFilterParametrs((prev) => {
                                                        return [...prev, el.attributes.type];
                                                    });
                                                }

                                                e.stopPropagation();
                                            }}>
                                            {el.attributes.type}
                                            <p>({el.attributes.numOfOccurance})</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div
                            className='filter_item'
                            onClick={(e) => {
                                e.currentTarget.classList.toggle('active');
                            }}>
                            <div
                                onClick={(e) => {
                                    if (e.currentTarget.nextElementSibling) {
                                        const sibling = e.currentTarget.nextSibling as HTMLElement;
                                        sibling.classList.toggle('active');
                                    }
                                }}>
                                <p className='filter_item__title'>Цвет</p>
                                <p className='filter_item__descr'>Цвет аккумулятора</p>
                            </div>
                            <div className='filter_item__values'>
                                <ul>
                                    {color.data.map((el: any) => (
                                        <li
                                            key={v1()}
                                            className={clsx({ active: choosenFilterParametrs.includes(el.attributes.color), filter_item__value: true })}
                                            onClick={(e) => {
                                                (async function () {
                                                    await onFilterItemClickHandler(queriesArr, setQueriesArr, el, 'color');
                                                })();

                                                if (choosenFilterParametrs.includes(el.attributes.color)) {
                                                    const index = choosenFilterParametrs.indexOf(el.attributes.color);
                                                    setChoosenFilterParametrs((prev) => {
                                                        const newList = prev.filter((el, i) => i !== index);
                                                        return newList;
                                                    });
                                                } else {
                                                    setChoosenFilterParametrs((prev) => {
                                                        return [...prev, el.attributes.color];
                                                    });
                                                }

                                                e.stopPropagation();
                                            }}>
                                            {el.attributes.color}
                                            <p>({el.attributes.numOfOccurance})</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <TopFilter
                    queriesArr={queriesArr}
                    setQueriesArr={setQueriesArr}
                    isActive={isActive}
                    setIsActive={setIsActive}
                    substrateRef={substrateRef}
                    choosenFilterParametrs={choosenFilterParametrs}
                    setChoosenFilterParametrs={setChoosenFilterParametrs}
                    type='batteries'
                />
            </div>
        </>
    );
}
