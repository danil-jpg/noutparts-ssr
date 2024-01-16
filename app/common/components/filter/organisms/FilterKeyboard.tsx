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

let [form_factor, layout, color, backlight]: any = '';

export default function FilterKeyboard() {
    const [choosenFilterParametrs, setChoosenFilterParametrs] = useState<(string | number)[]>([]);

    const selector = useAppSelector((state) => state.queryReducer.queryArr);

    const prevType = useAppSelector((state) => state.queryReducer.type);

    const [queriesArr, setQueriesArr] = useState<IQuery[]>(prevType === 'keyboards' ? selector : []);

    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const [isActive, setIsActive] = useState<boolean>(false);

    const rootRef = useRef<HTMLDivElement | null>(null);

    const substrateRef = useRef<HTMLDivElement | null>(null);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const form_factorRow: any = getFilterItemData('keyboards?fields[0]=form_factor&sort[0]=form_factor:asc');
            const layoutRow: any = getFilterItemData('keyboards?fields[0]=layout&sort[0]=layout:asc');
            const colorRow: any = getFilterItemData('keyboards?fields[0]=color&sort[0]=color:asc');
            const backlightRow: any = getFilterItemData('keyboards?fields[0]=backlight&sort[0]=backlight:asc');

            [form_factor, layout, color, backlight] = await Promise.all([form_factorRow, layoutRow, colorRow, backlightRow]);

            makeUniqueAndLoopFunc(form_factor, 'diagonale');

            makeUniqueAndLoopFunc(layout, 'layout');

            makeUniqueAndLoopFunc(color, 'color');

            makeUniqueAndLoopFunc(backlight, 'connector');

            setIsLoaded(true);

            if (queriesArr.length > 0) {
                console.log('here');
                const result: { searchParam: string; searchParamKey: string[] }[] = [];

                queriesArr.forEach((el) => {
                    if (el.searchParam === 'layout') {
                        result.push({ searchParam: 'layout', searchParamKey: el.searchParamKeys });
                    } else if (el.searchParam === 'color') {
                        result.push({ searchParam: 'color', searchParamKey: el.searchParamKeys });
                    }
                });

                if (result.length > 1) {
                    // layout.data.forEach((el: { id: number; attributes: { [key: string]: string } }) => {
                    //     if (el.attributes.layout === result[0].searchParamKey[0]) {
                    //         setChoosenFilterParametrs((prev) => {
                    //             return [...prev, el.attributes.layout];
                    //         });
                    //     }
                    // });
                    // color.data.forEach((el: { id: number; attributes: { [key: string]: string } }) => {
                    //     if (el.attributes.color === result[1].searchParamKey[0]) {
                    //         setChoosenFilterParametrs((prev) => {
                    //             return [...prev, el.attributes.color];
                    //         });
                    //     }
                    // });
                }
            } else {
                console.log(queriesArr.length);
            }
        };

        if (!prevType) {
            dispatch(setType('keyboards'));
        } else if (prevType === 'keyboards') {
            setQueriesArr(selector);
        } else {
            dispatch(setType('keyboards'));
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
            const res = await filterItemOnclickHandler(queriesArr, 'keyboards');

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
                                <p className='filter_item__title'>Форм фактор</p>
                                <p className='filter_item__descr'>Форм фактор клавиатуры</p>
                            </div>

                            <div className='filter_item__values'>
                                <ul>
                                    {form_factor.data.map((el: { id: number; attributes: { [key: string]: string } }) => (
                                        <li
                                            key={el.id}
                                            className={`${choosenFilterParametrs.includes(el.attributes.form_factor) ? 'active' : ''} filter_item__value`}
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
                                            <>
                                                {el.attributes.form_factor} <p>({el.attributes.numOfOccurance})</p>
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
                                <p className='filter_item__title'>Раскладка</p>
                                <p className='filter_item__descr'>Раскладка клавиатуры</p>
                            </div>
                            <div className='filter_item__values'>
                                <ul>
                                    {layout.data.map((el: any) => (
                                        <li
                                            key={el.id}
                                            className={clsx({
                                                active: choosenFilterParametrs.includes(el.attributes.layout),
                                                filter_item__value: true,
                                            })}
                                            onClick={(e) => {
                                                (async function () {
                                                    await onFilterItemClickHandler(queriesArr, setQueriesArr, el, 'layout');
                                                })();

                                                if (choosenFilterParametrs.includes(el.attributes.layout)) {
                                                    const index = choosenFilterParametrs.indexOf(el.attributes.layout);
                                                    setChoosenFilterParametrs((prev) => {
                                                        const newList = prev.filter((el, i) => i !== index);
                                                        return newList;
                                                    });
                                                } else {
                                                    setChoosenFilterParametrs((prev) => {
                                                        return [...prev, el.attributes.layout];
                                                    });
                                                }

                                                e.stopPropagation();
                                            }}>
                                            {el.attributes.layout}
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
                                <p className='filter_item__descr'>Цвет клавиатуры</p>
                            </div>
                            <div className='filter_item__values'>
                                <ul>
                                    {color.data.map((el: any) => (
                                        <li
                                            key={el.id}
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
                                <p className='filter_item__title'>Подсветка</p>
                                <p className='filter_item__descr'>Подсветка клавиатуры</p>
                            </div>
                            <div className='filter_item__values'>
                                <ul>
                                    {backlight.data.map((el: any) => (
                                        <li
                                            key={v1()}
                                            className={clsx({
                                                active: choosenFilterParametrs.includes(el.attributes.backlight),
                                                filter_item__value: true,
                                            })}
                                            onClick={(e) => {
                                                (async function () {
                                                    await onFilterItemClickHandler(queriesArr, setQueriesArr, el, 'backlight');
                                                })();

                                                if (choosenFilterParametrs.includes(el.attributes.backlight)) {
                                                    const index = choosenFilterParametrs.indexOf(el.attributes.backlight);
                                                    setChoosenFilterParametrs((prev) => {
                                                        const newList = prev.filter((el, i) => i !== index);
                                                        return newList;
                                                    });
                                                } else {
                                                    setChoosenFilterParametrs((prev) => {
                                                        return [...prev, el.attributes.backlight];
                                                    });
                                                }

                                                e.stopPropagation();
                                            }}>
                                            {el.attributes.backlight}
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
                    type='keyboards'
                />
            </div>
        </>
    );
}
