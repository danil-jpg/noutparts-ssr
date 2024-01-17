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

let [pin_quantity, jedec, voltage, memory_mb, frequency_mhz, memory_type]: any = '';

export default function FilterRam() {
    const [choosenFilterParametrs, setChoosenFilterParametrs] = useState<(string | number)[]>([]);

    const prevType = useAppSelector((state) => state.queryReducer.type);

    const selector = useAppSelector((state) => state.queryReducer.queryArr);

    const [queriesArr, setQueriesArr] = useState<IQuery[]>(prevType === 'rams' ? selector : []);

    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const [isActive, setIsActive] = useState<boolean>(false);

    const rootRef = useRef<HTMLDivElement | null>(null);

    const substrateRef = useRef<HTMLDivElement | null>(null);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const pin_quantityRow: any = getFilterItemData('rams?fields[0]=pin_quantity&sort[0]=pin_quantity:asc');
            const voltageRow: any = getFilterItemData('rams?fields[0]=voltage&sort[0]=voltage:asc');
            const jedecRow: any = getFilterItemData('rams?fields[0]=jedec&sort[0]=jedec:asc');
            const memory_mbRow: any = getFilterItemData('rams?fields[0]=memory_mb&sort[0]=memory_mb:asc');
            const frequency_mhzRow: any = getFilterItemData('rams?fields[0]=frequency_mhz&sort[0]=frequency_mhz:asc');
            const memory_typeRow: any = getFilterItemData('rams?fields[0]=memory_type&sort[0]=memory_type:asc');

            [pin_quantity, voltage, jedec, memory_mb, frequency_mhz, memory_type] = await Promise.all([
                pin_quantityRow,
                voltageRow,
                jedecRow,
                memory_mbRow,
                frequency_mhzRow,
                memory_typeRow,
            ]);

            makeUniqueAndLoopFunc(pin_quantity, 'pin_quantity');

            makeUniqueAndLoopFunc(voltage, 'voltage');

            makeUniqueAndLoopFunc(jedec, 'jedec');

            makeUniqueAndLoopFunc(memory_mb, 'memory_mb');

            makeUniqueAndLoopFunc(frequency_mhz, 'frequency_mhz');

            makeUniqueAndLoopFunc(memory_type, 'memory_type');

            setIsLoaded(true);

            if (queriesArr.length > 0) {
                const result: { searchParam: string; searchParamKey: string[] }[] = [];

                queriesArr.forEach((el) => {
                    if (el.searchParam === 'voltage') {
                        result.push({ searchParam: 'voltage', searchParamKey: el.searchParamKeys });
                    } else if (el.searchParam === 'jedec') {
                        result.push({ searchParam: 'jedec', searchParamKey: el.searchParamKeys });
                    }
                });
                if (result.length > 1) {
                    voltage.data.forEach((el: { id: number; attributes: { [key: string]: string } }) => {
                        if (el.attributes.voltage === result[0].searchParamKey[0]) {
                            setChoosenFilterParametrs((prev) => {
                                return [...prev, el.attributes.voltage];
                            });
                        }
                    });

                    jedec.data.forEach((el: { id: number; attributes: { [key: string]: string } }) => {
                        if (el.attributes.jedec === result[1].searchParamKey[0]) {
                            setChoosenFilterParametrs((prev) => {
                                return [...prev, el.attributes.jedec];
                            });
                        }
                    });
                }
            } else {
                console.log(queriesArr.length);
            }
        };

        if (!prevType) {
            dispatch(setType('rams'));
        } else if (prevType === 'rams') {
            setQueriesArr(selector);
        } else {
            dispatch(setType('rams'));
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
            const res = await filterItemOnclickHandler(queriesArr, 'rams');

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
                                <p className='filter_item__title'>Количество контактов</p>
                                <p className='filter_item__descr'>Количество контактов</p>
                            </div>

                            <div className='filter_item__values'>
                                <ul>
                                    {pin_quantity.data.map((el: { id: number; attributes: { [key: string]: string } }) => (
                                        <li
                                            key={el.id}
                                            className={clsx({ active: choosenFilterParametrs.includes(el.attributes.pin_quantity), filter_item__value: true })}
                                            onClick={(e) => {
                                                (async function () {
                                                    await onFilterItemClickHandler(queriesArr, setQueriesArr, el, 'pin_quantity');
                                                })();
                                                if (choosenFilterParametrs.includes(el.attributes.pin_quantity)) {
                                                    const index = choosenFilterParametrs.indexOf(el.attributes.pin_quantity);

                                                    setChoosenFilterParametrs((prev) => {
                                                        const newList = prev.filter((el, i) => i !== index);
                                                        return newList;
                                                    });
                                                } else {
                                                    setChoosenFilterParametrs((prev) => {
                                                        return [...prev, el.attributes.pin_quantity];
                                                    });
                                                }

                                                e.stopPropagation();
                                            }}>
                                            <>
                                                {el.attributes.pin_quantity} <p>({el.attributes.numOfOccurance})</p>
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
                                            {el.attributes.voltage} <p>({el.attributes.numOfOccurance})</p>
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
                                <p className='filter_item__title'>JEDEC</p>
                                <p className='filter_item__descr'>JEDEC СТАНДАРТ</p>
                            </div>
                            <div className='filter_item__values'>
                                <ul>
                                    {jedec.data.map((el: any) => (
                                        <li
                                            key={el.id}
                                            className={clsx({ active: choosenFilterParametrs.includes(el.attributes.jedec), filter_item__value: true })}
                                            onClick={(e) => {
                                                (async function () {
                                                    await onFilterItemClickHandler(queriesArr, setQueriesArr, el, 'jedec');
                                                })();

                                                if (choosenFilterParametrs.includes(el.attributes.jedec)) {
                                                    const index = choosenFilterParametrs.indexOf(el.attributes.jedec);
                                                    setChoosenFilterParametrs((prev) => {
                                                        const newList = prev.filter((el, i) => i !== index);
                                                        return newList;
                                                    });
                                                } else {
                                                    setChoosenFilterParametrs((prev) => {
                                                        return [...prev, el.attributes.jedec];
                                                    });
                                                }

                                                e.stopPropagation();
                                            }}>
                                            {el.attributes.jedec}
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
                                <p className='filter_item__title'>Объем памяти</p>
                                <p className='filter_item__descr'>Объем памяти озу</p>
                            </div>
                            <div className='filter_item__values'>
                                <ul>
                                    {memory_mb.data.map((el: any) => (
                                        <li
                                            key={v1()}
                                            className={clsx({ active: choosenFilterParametrs.includes(el.attributes.memory_mb), filter_item__value: true })}
                                            onClick={(e) => {
                                                (async function () {
                                                    await onFilterItemClickHandler(queriesArr, setQueriesArr, el, 'memory_mb');
                                                })();

                                                if (choosenFilterParametrs.includes(el.attributes.memory_mb)) {
                                                    const index = choosenFilterParametrs.indexOf(el.attributes.memory_mb);
                                                    setChoosenFilterParametrs((prev) => {
                                                        const newList = prev.filter((el, i) => i !== index);
                                                        return newList;
                                                    });
                                                } else {
                                                    setChoosenFilterParametrs((prev) => {
                                                        return [...prev, el.attributes.memory_mb];
                                                    });
                                                }

                                                e.stopPropagation();
                                            }}>
                                            {el.attributes.memory_mb}
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
                                <p className='filter_item__title'>Тактовая частота</p>
                                <p className='filter_item__descr'>Тактовая частота</p>
                            </div>
                            <div className='filter_item__values'>
                                <ul>
                                    {frequency_mhz.data.map((el: any) => (
                                        <li
                                            key={v1()}
                                            className={clsx({ active: choosenFilterParametrs.includes(el.attributes.frequency_mhz), filter_item__value: true })}
                                            onClick={(e) => {
                                                (async function () {
                                                    await onFilterItemClickHandler(queriesArr, setQueriesArr, el, 'frequency_mhz');
                                                })();

                                                if (choosenFilterParametrs.includes(el.attributes.frequency_mhz)) {
                                                    const index = choosenFilterParametrs.indexOf(el.attributes.frequency_mhz);
                                                    setChoosenFilterParametrs((prev) => {
                                                        const newList = prev.filter((el, i) => i !== index);
                                                        return newList;
                                                    });
                                                } else {
                                                    setChoosenFilterParametrs((prev) => {
                                                        return [...prev, el.attributes.frequency_mhz];
                                                    });
                                                }

                                                e.stopPropagation();
                                            }}>
                                            {el.attributes.frequency_mhz}
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
                                <p className='filter_item__title'>Объем памяти</p>
                                <p className='filter_item__descr'>Объем памяти озу</p>
                            </div>
                            <div className='filter_item__values'>
                                <ul>
                                    {memory_type.data.map((el: any) => (
                                        <li
                                            key={v1()}
                                            className={clsx({ active: choosenFilterParametrs.includes(el.attributes.memory_type), filter_item__value: true })}
                                            onClick={(e) => {
                                                (async function () {
                                                    await onFilterItemClickHandler(queriesArr, setQueriesArr, el, 'memory_type');
                                                })();

                                                if (choosenFilterParametrs.includes(el.attributes.memory_type)) {
                                                    const index = choosenFilterParametrs.indexOf(el.attributes.memory_type);
                                                    setChoosenFilterParametrs((prev) => {
                                                        const newList = prev.filter((el, i) => i !== index);
                                                        return newList;
                                                    });
                                                } else {
                                                    setChoosenFilterParametrs((prev) => {
                                                        return [...prev, el.attributes.memory_type];
                                                    });
                                                }

                                                e.stopPropagation();
                                            }}>
                                            {el.attributes.memory_type}
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
                    type='rams'
                />
            </div>
        </>
    );
}
