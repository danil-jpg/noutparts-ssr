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

let [diagonale, permission, fastening, fiberOpticTechnology, connector, backlightType, hashrate]: any = '';

export default function FilterMatrix() {
    const [choosenFilterParametrs, setChoosenFilterParametrs] = useState<(string | number)[]>([]);

    const selector = useAppSelector((state) => state.queryReducer.queryArr);

    const prevType = useAppSelector((state) => state.queryReducer.type);

    const [queriesArr, setQueriesArr] = useState<IQuery[]>(prevType === 'matrices' ? selector : []);

    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const [isActive, setIsActive] = useState<boolean>(false);

    const rootRef = useRef<HTMLDivElement | null>(null);

    const substrateRef = useRef<HTMLDivElement | null>(null);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const diagonaleRow: any = getFilterItemData('matrices?fields[0]=diagonale&sort[0]=diagonale:asc');
            const permissionRow: any = getFilterItemData('matrices?fields[0]=permission&sort[0]=permission:asc');
            const fasteningRow: any = getFilterItemData('matrices?fields[0]=fastening&sort[0]=fastening:asc');
            const connectorRow: any = getFilterItemData('matrices?fields[0]=connector&sort[0]=connector:asc');
            const fiberOpticTechnologyRow: any = getFilterItemData('matrices?fields[0]=fiber_optic_technology&sort[0]=fiber_optic_technology:asc');
            const backlightTypeRow: any = getFilterItemData('matrices?fields[0]=backlight_type&sort[0]=backlight_type:asc');
            const hashrateRow: any = getFilterItemData('matrices?fields[0]=hashrate&sort[0]=hashrate:asc');

            [diagonale, permission, fastening, connector, fiberOpticTechnology, backlightType, hashrate] = await Promise.all([
                diagonaleRow,
                permissionRow,
                fasteningRow,
                connectorRow,
                fiberOpticTechnologyRow,
                backlightTypeRow,
                hashrateRow,
            ]);

            makeUniqueAndLoopFunc(diagonale, 'diagonale');

            makeUniqueAndLoopFunc(permission, 'permission');

            makeUniqueAndLoopFunc(fastening, 'fastening');

            makeUniqueAndLoopFunc(connector, 'connector');

            makeUniqueAndLoopFunc(fiberOpticTechnology, 'fiber_optic_technology');

            makeUniqueAndLoopFunc(backlightType, 'backlight_type');

            makeUniqueAndLoopFunc(hashrate, 'hashrate');

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
                    permission.data.forEach((el: { id: number; attributes: { [key: string]: string } }) => {
                        if (el.attributes.permission === result[0].searchParamKey[0]) {
                            setChoosenFilterParametrs((prev) => {
                                return [...prev, el.attributes.permission];
                            });
                        }
                    });

                    fastening.data.forEach((el: { id: number; attributes: { [key: string]: string } }) => {
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
            dispatch(setType('matrices'));
        } else if (prevType === 'matrices') {
            setQueriesArr(selector);
        } else {
            dispatch(setType('matrices'));
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
            const res = await filterItemOnclickHandler(queriesArr, 'matrices');

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
                                <p className='filter_item__title'>Диагональ</p>
                                <p className='filter_item__descr'>Диагональ матрицы</p>
                            </div>

                            <div className='filter_item__values'>
                                <ul>
                                    {diagonale.data.map((el: { id: number; attributes: { [key: string]: string } }) => (
                                        <li
                                            key={el.id}
                                            className={`${choosenFilterParametrs.includes(el.attributes.diagonale) ? 'active' : ''} filter_item__value`}
                                            onClick={(e) => {
                                                (async function () {
                                                    await onFilterItemClickHandler(queriesArr, setQueriesArr, el, 'diagonale');
                                                })();

                                                if (choosenFilterParametrs.includes(el.attributes.diagonale)) {
                                                    const index = choosenFilterParametrs.indexOf(el.attributes.diagonale);

                                                    setChoosenFilterParametrs((prev) => {
                                                        const newList = prev.filter((el, i) => i !== index);
                                                        return newList;
                                                    });
                                                } else {
                                                    setChoosenFilterParametrs((prev) => {
                                                        return [...prev, el.attributes.diagonale];
                                                    });
                                                }

                                                e.stopPropagation();
                                            }}>
                                            <>
                                                {el.attributes.diagonale} <p>({el.attributes.numOfOccurance})</p>
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
                                <p className='filter_item__title'>Разрешение</p>
                                <p className='filter_item__descr'>Разрешение матрицы</p>
                            </div>
                            <div className='filter_item__values'>
                                <ul>
                                    {permission.data.map((el: any) => (
                                        <li
                                            key={el.id}
                                            className={clsx({
                                                active: choosenFilterParametrs.includes(el.attributes.permission),
                                                filter_item__value: true,
                                            })}
                                            onClick={(e) => {
                                                (async function () {
                                                    await onFilterItemClickHandler(queriesArr, setQueriesArr, el, 'permission');
                                                })();

                                                if (choosenFilterParametrs.includes(el.attributes.permission)) {
                                                    const index = choosenFilterParametrs.indexOf(el.attributes.permission);
                                                    setChoosenFilterParametrs((prev) => {
                                                        const newList = prev.filter((el, i) => i !== index);
                                                        return newList;
                                                    });
                                                } else {
                                                    setChoosenFilterParametrs((prev) => {
                                                        return [...prev, el.attributes.permission];
                                                    });
                                                }

                                                e.stopPropagation();
                                            }}>
                                            {el.attributes.permission}
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
                                <p className='filter_item__title'>Крепление</p>
                                <p className='filter_item__descr'>Tип крепления</p>
                            </div>
                            <div className='filter_item__values'>
                                <ul>
                                    {fastening.data.map((el: any) => (
                                        <li
                                            key={el.id}
                                            className={clsx({ active: choosenFilterParametrs.includes(el.attributes.fastening), filter_item__value: true })}
                                            onClick={(e) => {
                                                (async function () {
                                                    await onFilterItemClickHandler(queriesArr, setQueriesArr, el, 'fastening');
                                                })();

                                                if (choosenFilterParametrs.includes(el.attributes.fastening)) {
                                                    const index = choosenFilterParametrs.indexOf(el.attributes.fastening);
                                                    setChoosenFilterParametrs((prev) => {
                                                        const newList = prev.filter((el, i) => i !== index);
                                                        return newList;
                                                    });
                                                } else {
                                                    setChoosenFilterParametrs((prev) => {
                                                        return [...prev, el.attributes.fastening];
                                                    });
                                                }

                                                e.stopPropagation();
                                            }}>
                                            {el.attributes.fastening}
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
                                <p className='filter_item__title'>Опт. технология</p>
                                <p className='filter_item__descr'>Тип опт. технологии</p>
                            </div>
                            <div className='filter_item__values'>
                                <ul>
                                    {fiberOpticTechnology.data.map((el: any) => (
                                        <li
                                            key={v1()}
                                            className={clsx({
                                                active: choosenFilterParametrs.includes(el.attributes.fiber_optic_technology),
                                                filter_item__value: true,
                                            })}
                                            onClick={(e) => {
                                                (async function () {
                                                    await onFilterItemClickHandler(queriesArr, setQueriesArr, el, 'fiber_optic_technology');
                                                })();

                                                if (choosenFilterParametrs.includes(el.attributes.fiber_optic_technology)) {
                                                    const index = choosenFilterParametrs.indexOf(el.attributes.fiber_optic_technology);
                                                    setChoosenFilterParametrs((prev) => {
                                                        const newList = prev.filter((el, i) => i !== index);
                                                        return newList;
                                                    });
                                                } else {
                                                    setChoosenFilterParametrs((prev) => {
                                                        return [...prev, el.attributes.fiber_optic_technology];
                                                    });
                                                }

                                                e.stopPropagation();
                                            }}>
                                            {el.attributes.fiber_optic_technology}
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
                                <p className='filter_item__descr'>Цвет подсветки</p>
                            </div>
                            <div className='filter_item__values'>
                                <ul>
                                    {backlightType.data.map((el: any) => (
                                        <li
                                            key={v1()}
                                            className={clsx({
                                                active: choosenFilterParametrs.includes(el.attributes.backlight_type),
                                                filter_item__value: true,
                                            })}
                                            onClick={(e) => {
                                                (async function () {
                                                    await onFilterItemClickHandler(queriesArr, setQueriesArr, el, 'backlight_type');
                                                })();

                                                if (choosenFilterParametrs.includes(el.attributes.backlight_type)) {
                                                    const index = choosenFilterParametrs.indexOf(el.attributes.backlight_type);
                                                    setChoosenFilterParametrs((prev) => {
                                                        const newList = prev.filter((el, i) => i !== index);
                                                        return newList;
                                                    });
                                                } else {
                                                    setChoosenFilterParametrs((prev) => {
                                                        return [...prev, el.attributes.backlight_type];
                                                    });
                                                }

                                                e.stopPropagation();
                                            }}>
                                            {el.attributes.backlight_type}
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
                                <p className='filter_item__title'>Частота обнов.</p>
                                <p className='filter_item__descr'>Частота обнов.</p>
                            </div>
                            <div className='filter_item__values'>
                                <ul>
                                    {hashrate.data.map((el: any) => (
                                        <li
                                            key={v1()}
                                            className={clsx({ active: choosenFilterParametrs.includes(el.attributes.hashrate), filter_item__value: true })}
                                            onClick={(e) => {
                                                (async function () {
                                                    await onFilterItemClickHandler(queriesArr, setQueriesArr, el, 'hashrate');
                                                })();

                                                if (choosenFilterParametrs.includes(el.attributes.hashrate)) {
                                                    const index = choosenFilterParametrs.indexOf(el.attributes.hashrate);
                                                    setChoosenFilterParametrs((prev) => {
                                                        const newList = prev.filter((el, i) => i !== index);
                                                        return newList;
                                                    });
                                                } else {
                                                    setChoosenFilterParametrs((prev) => {
                                                        return [...prev, el.attributes.hashrate];
                                                    });
                                                }

                                                e.stopPropagation();
                                            }}>
                                            {el.attributes.hashrate}
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
                    type='matrices'
                />
            </div>
        </>
    );
}
