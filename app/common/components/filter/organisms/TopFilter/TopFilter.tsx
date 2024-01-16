'use client';
import React, { useEffect, useState } from 'react';
import Select from '../../../../ui/form/select/Select';
import './TopFilter.scss';
import IconRenderer from '@/app/common/ui/Icons/IconRenderer';
import { getFilterItemData } from '@/app/lib/data';
import { useAppDispatch, useAppSelector } from '@/app/Redux/store';
import { onSelectItemChangeHandler, onStatusItemClickHandler } from '@/app/lib/service';
import { IQuery, categories } from '@/app/common/types/types';
import { setData, setDefaultDataAndQueryArr, setType } from '@/app/Redux/slice/query/query';
import FilterCards from '../../../card/FilterCards';
import clsx from 'clsx';
import { v1 } from 'uuid';

interface IBrand {
    data: [
        {
            attributes: {
                brand: string;
            };
        }
    ];
}

interface IPrice {
    attributes: {
        price: number;
    };
}

const TopFilter = ({
    queriesArr,
    setQueriesArr,
    isActive,
    setIsActive,
    substrateRef,
    choosenFilterParametrs,
    setChoosenFilterParametrs,
    type,
}: {
    queriesArr: IQuery[];
    setQueriesArr: React.Dispatch<React.SetStateAction<IQuery[]>>;
    isActive: boolean;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
    substrateRef: React.MutableRefObject<HTMLDivElement | null>;
    choosenFilterParametrs: (string | number)[];
    setChoosenFilterParametrs: React.Dispatch<React.SetStateAction<(string | number)[]>>;
    type: categories;
}) => {
    const [brand, setBrand] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [brandArr, setBrandArr] = useState<string[]>([]);

    const dispatch = useAppDispatch();

    const dataInRedux = useAppSelector((state) => state.queryReducer.data.data as IPrice[]);

    useEffect(() => {
        const getData = async () => {
            const res = (await getFilterItemData(`${type}?fields[0]=brand&fields[1]`)) as IBrand;
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
            onSelectItemChangeHandler(queriesArr, setQueriesArr, brand);
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

    const RenderChoosen = (): React.JSX.Element => {
        return (
            <div className='choosen-wr'>
                <div
                    className='choosen choosen__cleanup'
                    onClick={() => {
                        setQueriesArr([]);
                        setChoosenFilterParametrs([]);
                    }}>
                    Очистить все
                </div>
                {queriesArr.map((el: IQuery, indexTop) => {
                    return el.searchParamKeys.map((el) => {
                        return (
                            <div key={v1()}>
                                <div className='choosen'>
                                    {el === 'available' ? 'Есть на складе' : el === 'discount' ? 'Скидка' : el === 'salesHit' ? 'Хит продаж' : el}
                                    <IconRenderer
                                        id='cross-icon'
                                        onClick={() => {
                                            if (choosenFilterParametrs.includes(el)) {
                                                const choosenParIndex = choosenFilterParametrs.indexOf(el);

                                                setChoosenFilterParametrs((prev) => {
                                                    const newList = prev.filter((el, i) => i !== choosenParIndex);

                                                    return newList;
                                                });
                                            }

                                            setQueriesArr((prev) => {
                                                const copy = structuredClone(prev);
                                                for (let i = 0; i < queriesArr.length; i++) {
                                                    if (prev[i].searchParamKeys.includes(el)) {
                                                        const index = queriesArr[i].searchParamKeys.indexOf(el);

                                                        copy[indexTop].searchParamKeys.splice(index, 1);
                                                    }
                                                }
                                                return copy;
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    });
                })}
            </div>
        );
    };

    return (
        <div className='top-filter'>
            <p className='top-filter_title'>
                {type.toLowerCase() === 'matrices'
                    ? 'Матрицы'
                    : type === 'batteries'
                    ? 'Аккумуляторы'
                    : type === 'hdds'
                    ? 'Жесткие диски'
                    : type === 'keyboards'
                    ? 'Клавиатуры'
                    : type === 'rams'
                    ? 'Оперативная память'
                    : type === 'power_unit'
                    ? 'Блок питания'
                    : type}
            </p>
            <div>
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
            </div>
            <div className='top-filter__scroll'>
                <div className='top-filter_filters_middle'>
                    <div
                        className={clsx({
                            'top-filters_filters_middle_btn': true,
                            active: choosenFilterParametrs.includes('available'),
                        })}
                        onClick={() => {
                            (async function () {
                                onStatusItemClickHandler(queriesArr, setQueriesArr, 'availability', 'available');
                            })();

                            if (choosenFilterParametrs.includes('available')) {
                                const index = choosenFilterParametrs.indexOf('available');

                                setChoosenFilterParametrs((prev) => {
                                    prev.splice(index, 1);
                                    return prev;
                                });
                            } else {
                                setChoosenFilterParametrs((prev) => {
                                    prev.push('available');
                                    return prev;
                                });
                            }
                        }}>
                        Есть на складе
                    </div>
                    <div
                        className={clsx({
                            'top-filters_filters_middle_btn': true,
                            active: choosenFilterParametrs.includes('discount'),
                        })}
                        onClick={() => {
                            (async function () {
                                onStatusItemClickHandler(queriesArr, setQueriesArr, 'tag', 'discount');
                            })();

                            if (choosenFilterParametrs.includes('discount')) {
                                const index = choosenFilterParametrs.indexOf('discount');
                                setChoosenFilterParametrs((prev) => {
                                    prev.splice(index, 1);
                                    return prev;
                                });
                            } else {
                                setChoosenFilterParametrs((prev) => {
                                    prev.push('discount');
                                    return prev;
                                });
                            }
                        }}>
                        Скидка
                    </div>
                    <div
                        className={clsx({
                            'top-filters_filters_middle_btn': true,
                            active: choosenFilterParametrs.includes('salesHit'),
                        })}
                        onClick={() => {
                            (async function () {
                                onStatusItemClickHandler(queriesArr, setQueriesArr, 'tag', 'salesHit');
                            })();

                            if (choosenFilterParametrs.includes('salesHit')) {
                                const index = choosenFilterParametrs.indexOf('salesHit');
                                setChoosenFilterParametrs((prev) => {
                                    prev.splice(index, 1);
                                    return prev;
                                });
                            } else {
                                setChoosenFilterParametrs((prev) => {
                                    prev.push('salesHit');
                                    return prev;
                                });
                            }
                        }}>
                        Хит продаж
                    </div>
                </div>
            </div>

            <RenderChoosen />
            <FilterCards type={type} />
        </div>
    );
};

export default TopFilter;
