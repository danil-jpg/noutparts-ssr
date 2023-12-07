'use client';
import React, { useEffect, useRef, useState } from 'react';
import { getFilterItemData } from '@/app/lib/data';
import { v1 } from 'uuid';
import Loading from '../../Loading/Loading';
import { makeUniqueAndLoopFunc } from '@/app/lib/service';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '@/app/Redux/store';
import { IQuery } from '@/app/common/types/types';
import { onFilterItemClickHandler } from '@/app/lib/service';
import IconRenderer from '@/app/common/ui/Icons/IconRenderer';
import { setData, setQueryArr as setQueriesArrRed } from '@/app/Redux/slice/query/query';

let [diagonale, permission, fastening, fiberOpticTechnology, connector, backlightType, hashrate]: any = '';

export default function FilterMatrix() {
    const selector = useAppSelector((state) => state.queryReducer.queryArr);

    let [queriesArr, setQueriesArr] = useState<IQuery[]>(selector ? selector : []);

    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const [isActive, setIsActive] = useState<boolean>(false);

    const rootRef = useRef<HTMLDivElement | null>(null);

    const substrateRef = useRef<HTMLDivElement | null>(null);

    const dispatch = useAppDispatch();

    const topFilterPlace = document.getElementById('filter-menu-burger-wr');

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
        };

        fetchData();

        // dispatch(setQueriesArrRed([]));
        // dispatch(setData([]));
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
        dispatch(setQueriesArrRed(queriesArr));
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
            <div className={clsx('filter', { active: isActive })} ref={rootRef}>
                {createPortal(
                    <div
                        className='portal-div'
                        onClick={() => {
                            substrateRef.current?.classList.add('active');
                            setIsActive(!isActive);
                        }}>
                        <IconRenderer id='filter-menu-burger' />
                    </div>,
                    topFilterPlace!
                )}
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
                                {diagonale.data.map((el: any) => (
                                    <li
                                        key={el.id}
                                        className='filter_item__value'
                                        onClick={async (e) => {
                                            await onFilterItemClickHandler(e, queriesArr, setQueriesArr, dispatch, 'matrices', el, 'diagonale');
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
                                            await onFilterItemClickHandler(e, queriesArr, setQueriesArr, dispatch, 'matrices', el, 'fiber_optic_technology');
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
        </>
    );
}
