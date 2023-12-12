'use client';
import React, { useEffect, useRef, useState } from 'react';
import { getFilterItemData } from '@/app/lib/data';
import { v1 } from 'uuid';
import Loading from '../../Loading/Loading';
import { filterItemOnclickHandler, makeUniqueAndLoopFunc, onChoosenItemClickHandler, onSelectItemChangeHandler } from '@/app/lib/service';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '@/app/Redux/store';
import { IQuery } from '@/app/common/types/types';
import { onFilterItemClickHandler } from '@/app/lib/service';
import IconRenderer from '@/app/common/ui/Icons/IconRenderer';
import { setData, setDefaultDataAndQueryArr } from '@/app/Redux/slice/query/query';
import Select from '@/app/common/ui/form/select/Select';
import { IBrand } from '@/app/common/types/types';
import FilterCards from './FilterCards';
import { setQueryArr as setQueriesArrRed } from '@/app/Redux/slice/query/query';

interface IPrice {
    attributes: {
        price: number;
    };
}

let [diagonale, permission, fastening, fiberOpticTechnology, connector, backlightType, hashrate]: any = '';

export default function FilterMatrix() {
    const [queriesArr, setQueriesArr] = useState<IQuery[]>([]);

    // const [isActiveLi,setIsActiveLi] = useState<boolean>([])

    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const [isActive, setIsActive] = useState<boolean>(false);

    const rootRef = useRef<HTMLDivElement | null>(null);

    const substrateRef = useRef<HTMLDivElement | null>(null);

    const dispatch = useAppDispatch();

    const dataInRedux = useAppSelector((state) => state.queryReducer.data.data as IPrice[]);

    // filter-top
    const [brand, setBrand] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [brandArr, setBrandArr] = useState<string[]>([]);
    const [priceArr, setPriceArr] = useState<string[]>([]);

    useEffect(() => {
        const getData = async () => {
            const res = (await getFilterItemData(`matrices?fields[0]=brand&fields[1]`)) as IBrand;
            const formattedAns = [];
            for (let key in res.data) {
                formattedAns.push(res.data[key].attributes.brand);
            }
            setBrandArr(formattedAns);
        };

        getData();
    }, []);

    useEffect(() => {
        if (brand === 'Бренд' || brand === '') {
        } else {
            (async function () {
                await onSelectItemChangeHandler(queriesArr, setQueriesArr, brand, dispatch, 'matrices');
            })();
        }
    }, [brand]);

    useEffect(() => {
        if (price === 'по возрастанию') {
            const dataInReduxCopy = structuredClone(dataInRedux);

            dataInReduxCopy.sort((a, b) => {
                return a.attributes.price - b.attributes.price;
            });

            dispatch(setData({ data: dataInReduxCopy }));
        } else if (price === 'по убыванию') {
            const dataInReduxCopy = structuredClone(dataInRedux);

            dataInReduxCopy.sort((a, b) => {
                return b.attributes.price - a.attributes.price;
            });

            dispatch(setData({ data: dataInReduxCopy }));
        }
    }, [price]);

    const RenderChoosen = () => {
        return (
            <div className='choosen-wr'>
                {queriesArr.map((el: IQuery) => {
                    return el.searchParamKeys.map((el) => {
                        return (
                            <div className='choosen' key={el}>
                                {el}
                                <IconRenderer
                                    id='cross-icon'
                                    onClick={() => {
                                        for (let i = 0; i < queriesArr.length; i++) {
                                            if (queriesArr[i].searchParamKeys.includes(el)) {
                                                const index = queriesArr[i].searchParamKeys.indexOf(el);
                                                setQueriesArr((prev) => {
                                                    const copy = structuredClone(prev);
                                                    copy[i].searchParamKeys.splice(index, 1);
                                                    dispatch(setQueriesArrRed(copy));

                                                    return copy;
                                                });

                                                break;
                                            }
                                        }
                                    }}
                                />
                            </div>
                        );
                    });
                })}
            </div>
        );
    };
    //

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

            // diagonale = await diagonaleRow;
            // permission = await permissionRow;
            // fastening = await fasteningRow;
            // connector = await connectorRow;
            // fiberOpticTechnology = await fiberOpticTechnologyRow;
            // backlightType = await backlightTypeRow;
            // hashrate = await hashrateRow;

            makeUniqueAndLoopFunc(diagonale, 'diagonale');

            makeUniqueAndLoopFunc(permission, 'permission');

            makeUniqueAndLoopFunc(fastening, 'fastening');

            makeUniqueAndLoopFunc(connector, 'connector');

            makeUniqueAndLoopFunc(fiberOpticTechnology, 'fiber_optic_technology');

            makeUniqueAndLoopFunc(backlightType, 'backlight_type');

            makeUniqueAndLoopFunc(hashrate, 'hashrate');

            setIsLoaded(true);
        };

        fetchData();
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
        dispatch(setDefaultDataAndQueryArr());
    }, []);

    useEffect(() => {
        (async function () {
            const res = await filterItemOnclickHandler(queriesArr, 'matrices');

            dispatch(setData(res));
            console.log(queriesArr);
            dispatch(setQueriesArrRed(queriesArr));
        })();
    }, [queriesArr, dispatch]);

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
                                            className='filter_item__value'
                                            onClick={(e) => {
                                                (async function () {
                                                    await onFilterItemClickHandler(e, queriesArr, setQueriesArr, dispatch, 'matrices', el, 'diagonale');
                                                })();

                                                // e.currentTarget.classList.toggle('active');

                                                e.stopPropagation();
                                            }}>
                                            <>
                                                {el.attributes.diagonale} D<p>({el.attributes.numOfOccurance})</p>
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
                                            className='filter_item__value'
                                            onClick={async (e) => {
                                                await onFilterItemClickHandler(e, queriesArr, setQueriesArr, dispatch, 'matrices', el, 'permission');
                                                for (let i = 0; i < queriesArr.length; i++) {
                                                    if (queriesArr[i].searchParamKeys.includes(el)) {
                                                        // e.currentTarget.classList.add('active');
                                                        break;
                                                    } else {
                                                        // e.currentTarget.classList.remove('active');
                                                    }
                                                }
                                                e.stopPropagation();
                                            }}>
                                            {el.attributes.permission} px
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
                                            className='filter_item__value'
                                            onClick={async (e) => {
                                                await onFilterItemClickHandler(e, queriesArr, setQueriesArr, dispatch, 'matrices', el, 'fastening');
                                                for (let i = 0; i < queriesArr.length; i++) {
                                                    if (queriesArr[i].searchParamKeys.includes(el)) {
                                                        e.currentTarget.classList.add('active');
                                                        break;
                                                    } else {
                                                        e.currentTarget.classList.remove('active');
                                                    }
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
                                            className='filter_item__value'
                                            onClick={async (e) => {
                                                await onFilterItemClickHandler(
                                                    e,
                                                    queriesArr,
                                                    setQueriesArr,
                                                    dispatch,
                                                    'matrices',
                                                    el,
                                                    'fiber_optic_technology'
                                                );
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
                                            className='filter_item__value'
                                            onClick={async (e) => {
                                                await onFilterItemClickHandler(e, queriesArr, setQueriesArr, dispatch, 'matrices', el, 'backlight_type');
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
                                            className='filter_item__value'
                                            onClick={async (e) => {
                                                await onFilterItemClickHandler(e, queriesArr, setQueriesArr, dispatch, 'matrices', el, 'hashrate');
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
                <div className='top-filter'>
                    <p className='top-filter_title'>Аккумуляторы</p>
                    <div className='top-filter_filters'>
                        <div id='filter-menu-burger-wr' className='filter-menu-burger-wr'>
                            <div
                                className='portal-div'
                                onClick={() => {
                                    substrateRef.current?.classList.add('active');
                                    setIsActive(!isActive);
                                }}>
                                <IconRenderer id='filter-menu-burger' />
                            </div>
                        </div>
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
                    <FilterCards />
                </div>
            </div>
        </>
    );
}
