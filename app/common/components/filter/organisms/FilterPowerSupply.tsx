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

let [power, voltage, amperage, form_factor]: any = '';

export default function FilterPower() {
    const [choosenFilterParametrs, setChoosenFilterParametrs] = useState<(string | number)[]>([]);

    const prevType = useAppSelector((state) => state.queryReducer.type);

    const selector = useAppSelector((state) => state.queryReducer.queryArr);

    const [queriesArr, setQueriesArr] = useState<IQuery[]>(prevType === 'power-Supplies' ? selector : []);

    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const [isActive, setIsActive] = useState<boolean>(false);

    const rootRef = useRef<HTMLDivElement | null>(null);

    const substrateRef = useRef<HTMLDivElement | null>(null);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const powerRow: any = getFilterItemData('power-Supplies?fields[0]=power&sort[0]=power:asc');
            const voltageRow: any = getFilterItemData('power-Supplies?fields[0]=voltage&sort[0]=voltage:asc');
            const amperageRow: any = getFilterItemData('power-Supplies?fields[0]=amperage&sort[0]=amperage:asc');
            const form_factorRow: any = getFilterItemData('power-Supplies?fields[0]=form_factor&sort[0]=form_factor:asc');

            [power, voltage, amperage, form_factor] = await Promise.all([powerRow, voltageRow, amperageRow, form_factorRow]);

            makeUniqueAndLoopFunc(power, 'power');

            makeUniqueAndLoopFunc(voltage, 'voltage');

            makeUniqueAndLoopFunc(amperage, 'amperage');

            makeUniqueAndLoopFunc(form_factor, 'form_factor');

            setIsLoaded(true);

            // if (queriesArr.length > 0) {
            //     console.log('here');
            //     const result: { searchParam: string; searchParamKey: string[] }[] = [];

            //     queriesArr.forEach((el) => {
            //         if (el.searchParam === 'permission') {
            //             result.push({ searchParam: 'permission', searchParamKey: el.searchParamKeys });
            //         } else if (el.searchParam === 'fastening') {
            //             result.push({ searchParam: 'fastening', searchParamKey: el.searchParamKeys });
            //         }
            //     });
            //     if (result.length > 1) {
            //         power.data.forEach((el: { id: number; attributes: { [key: string]: string } }) => {
            //             if (el.attributes.permission === result[0].searchParamKey[0]) {
            //                 setChoosenFilterParametrs((prev) => {
            //                     return [...prev, el.attributes.permission];
            //                 });
            //             }
            //         });

            //         voltage.data.forEach((el: { id: number; attributes: { [key: string]: string } }) => {
            //             if (el.attributes.fastening === result[1].searchParamKey[0]) {
            //                 setChoosenFilterParametrs((prev) => {
            //                     return [...prev, el.attributes.fastening];
            //                 });
            //             }
            //         });
            //     }
            // } else {
            //     console.log(queriesArr.length);
            // }
        };

        if (!prevType) {
            dispatch(setType('power-Supplies'));
        } else if (prevType === 'power-Supplies') {
            setQueriesArr(selector);
        } else {
            dispatch(setType('power-Supplies'));
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
            const res = await filterItemOnclickHandler(queriesArr, 'power-Supplies');

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
                                    {power.data.map((el: { id: number; attributes: { [key: string]: string } }) => (
                                        <li
                                            key={el.id}
                                            className={clsx({ active: choosenFilterParametrs.includes(el.attributes.power), filter_item__value: true })}
                                            onClick={(e) => {
                                                (async function () {
                                                    await onFilterItemClickHandler(queriesArr, setQueriesArr, el, 'power');
                                                })();
                                                if (choosenFilterParametrs.includes(el.attributes.power)) {
                                                    const index = choosenFilterParametrs.indexOf(el.attributes.power);

                                                    setChoosenFilterParametrs((prev) => {
                                                        const newList = prev.filter((el, i) => i !== index);
                                                        return newList;
                                                    });
                                                } else {
                                                    setChoosenFilterParametrs((prev) => {
                                                        return [...prev, el.attributes.power];
                                                    });
                                                }

                                                e.stopPropagation();
                                            }}>
                                            <>
                                                {el.attributes.power} А-ч<p>({el.attributes.numOfOccurance})</p>
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
                                    {amperage.data.map((el: any) => (
                                        <li
                                            key={el.id}
                                            className={clsx({ active: choosenFilterParametrs.includes(el.attributes.amperage), filter_item__value: true })}
                                            onClick={(e) => {
                                                (async function () {
                                                    await onFilterItemClickHandler(queriesArr, setQueriesArr, el, 'amperage');
                                                })();

                                                if (choosenFilterParametrs.includes(el.attributes.amperage)) {
                                                    const index = choosenFilterParametrs.indexOf(el.attributes.amperage);
                                                    setChoosenFilterParametrs((prev) => {
                                                        const newList = prev.filter((el, i) => i !== index);
                                                        return newList;
                                                    });
                                                } else {
                                                    setChoosenFilterParametrs((prev) => {
                                                        return [...prev, el.attributes.amperage];
                                                    });
                                                }

                                                e.stopPropagation();
                                            }}>
                                            {el.attributes.amperage}
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
                                    {form_factor.data.map((el: any) => (
                                        <li
                                            key={v1()}
                                            className={clsx({ active: choosenFilterParametrs.includes(el.attributes.form_factor), filter_item__value: true })}
                                            onClick={(e) => {
                                                (async function () {
                                                    await onFilterItemClickHandler(queriesArr, setQueriesArr, el, 'form_factor');
                                                })();

                                                if (choosenFilterParametrs.includes(el.attributes.form_factor)) {
                                                    const index = choosenFilterParametrs.indexOf(el.attributes.form_factor);
                                                    setChoosenFilterParametrs((prev) => {
                                                        const newList = prev.filter((el, i) => i !== index);
                                                        return newList;
                                                    });
                                                } else {
                                                    setChoosenFilterParametrs((prev) => {
                                                        return [...prev, el.attributes.form_factor];
                                                    });
                                                }

                                                e.stopPropagation();
                                            }}>
                                            {el.attributes.form_factor}
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
                    type='power-Supplies'
                />
            </div>
        </>
    );
}
