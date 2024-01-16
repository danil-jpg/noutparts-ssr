'use client';
import React, { useEffect, useRef, useState } from 'react';
import { getFilterItemData } from '@/app/lib/data';
import { v1 } from 'uuid';
import Loading from '../../Loading/Loading';
import { filterItemOnclickHandler, makeUniqueAndLoopFunc, onFilterItemClickHandler } from '@/app/lib/service';
import { useAppDispatch, useAppSelector } from '@/app/Redux/store';
import { IQuery } from '@/app/common/types/types';
import { setData, setDefaultDataAndQueryArr, setType } from '@/app/Redux/slice/query/query';
import { setQueryArr as setQueriesArrRed } from '@/app/Redux/slice/query/query';
import TopFilter from './TopFilter/TopFilter';
import clsx from 'clsx';

let [memory, connector, technology]: any = '';

export default function FilterHdds() {
    const [choosenFilterParametrs, setChoosenFilterParametrs] = useState<(string | number)[]>([]);

    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const selector = useAppSelector((state) => state.queryReducer.queryArr);

    const prevType = useAppSelector((state) => state.queryReducer.type);

    const [queriesArr, setQueriesArr] = useState<IQuery[]>(prevType === 'hdds' ? selector : []);

    const [isActive, setIsActive] = useState<boolean>(false);

    const rootRef = useRef<HTMLDivElement | null>(null);

    const substrateRef = useRef<HTMLDivElement | null>(null);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const memoryRow: any = getFilterItemData('hdds?fields[0]=memory_mb');
            const connectorRow: any = getFilterItemData('hdds?fields[0]=connector');
            const technologyTypeRow: any = getFilterItemData('hdds?fields[0]=technology');

            [memory, connector, technology] = await Promise.all([memoryRow, connectorRow, technologyTypeRow]);

            memory as {
                data: { id: number; attributes: { memory_mb: number; active: boolean; numOfOccurance: number } }[];
            };

            makeUniqueAndLoopFunc(memory, 'memory_mb');

            makeUniqueAndLoopFunc(connector, 'connector');

            makeUniqueAndLoopFunc(technology, 'technology');

            setIsLoaded(true);

            // нужно проверить!
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
                    memory.data.forEach((el: { id: number; attributes: { [key: string]: string } }) => {
                        if (el.attributes.memory === result[0].searchParamKey[0]) {
                            setChoosenFilterParametrs((prev) => {
                                return [...prev, el.attributes.permission];
                            });
                        }
                    });

                    connector.data.forEach((el: { id: number; attributes: { [key: string]: string } }) => {
                        if (el.attributes.connector === result[1].searchParamKey[0]) {
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
            dispatch(setType('hdds'));
        } else if (prevType === 'hdds') {
            setQueriesArr(selector);
        } else {
            dispatch(setType('hdds'));
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
            const res = await filterItemOnclickHandler(queriesArr, 'hdds');

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
                                    {memory.data.map(
                                        (el: { id: number; attributes: { memory_mb: number; active: boolean; numOfOccurance: number } }, id: number) => (
                                            <li
                                                key={el.id}
                                                className={`${choosenFilterParametrs.includes(el.attributes.memory_mb) ? 'active' : ''} filter_item__value`}
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
                                        )
                                    )}
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
                                <p className='filter_item__title'>Разьем подключения</p>
                                <p className='filter_item__descr'>Разьем подключения</p>
                            </div>
                            <div className='filter_item__values'>
                                <ul>
                                    {connector.data.map((el: any) => (
                                        <li
                                            key={el.id}
                                            className={`${choosenFilterParametrs.includes(el.attributes.connector) ? 'active' : ''} filter_item__value`}
                                            onClick={(e) => {
                                                (async function () {
                                                    await onFilterItemClickHandler(queriesArr, setQueriesArr, el, 'connector');
                                                })();

                                                if (choosenFilterParametrs.includes(el.attributes.connector)) {
                                                    const index = choosenFilterParametrs.indexOf(el.attributes.connector);
                                                    setChoosenFilterParametrs((prev) => {
                                                        const newList = prev.filter((el, i) => i !== index);
                                                        return newList;
                                                    });
                                                } else {
                                                    setChoosenFilterParametrs((prev) => {
                                                        return [...prev, el.attributes.connector];
                                                    });
                                                }

                                                e.stopPropagation();
                                            }}>
                                            {el.attributes.connector}
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
                                <p className='filter_item__title'>Tип</p>
                                <p className='filter_item__descr'>Tип аккумулятора</p>
                            </div>
                            <div className='filter_item__values'>
                                <ul>
                                    {technology.data.map((el: any) => (
                                        <li
                                            key={el.id}
                                            className={clsx({ active: choosenFilterParametrs.includes(el.attributes.technology), filter_item__value: true })}
                                            onClick={(e) => {
                                                (async function () {
                                                    await onFilterItemClickHandler(queriesArr, setQueriesArr, el, 'technology');
                                                })();

                                                if (choosenFilterParametrs.includes(el.attributes.technology)) {
                                                    const index = choosenFilterParametrs.indexOf(el.attributes.technology);
                                                    setChoosenFilterParametrs((prev) => {
                                                        const newList = prev.filter((el, i) => i !== index);
                                                        return newList;
                                                    });
                                                } else {
                                                    setChoosenFilterParametrs((prev) => {
                                                        return [...prev, el.attributes.technology];
                                                    });
                                                }
                                            }}>
                                            {el.attributes.technology}
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
                    type='hdds'
                />
            </div>
        </>
    );
}
