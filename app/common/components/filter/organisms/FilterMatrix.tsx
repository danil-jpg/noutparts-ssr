'use client';
import React, { useEffect, useRef, useState } from 'react';
import { getFilterItemData } from '@/app/lib/data';
import { v1 } from 'uuid';
import Loading from '../../Loading/Loading';
import { makeUniqueAndLoopFunc } from '@/app/lib/service';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { useAppDispatch } from '@/app/Redux/store';
import { setData } from '@/app/Redux/slice/query/query';
import { IQuery } from '@/app/common/types/types';
import { onFilterItemClickHandler } from '@/app/lib/service';

let [diagonale, permission, fastening, fiberOpticTechnology, connector, backlightType, hashrate]: any = '';

export default function FilterMatrix() {
    const [queriesArr, useQueryarr] = useState<IQuery[]>([]);
    // так делать плохая идея,тк далее я пушу в сам квериесАрр
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const [isActive, setIsActive] = useState<boolean>(false);

    const rootRef = useRef<HTMLDivElement | null>(null);

    const substrateRef = useRef<HTMLDivElement | null>(null);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const diagonaleRow: any = getFilterItemData('matrices?fields[0]=matrix_diagonale&sort[0]=matrix_diagonale:asc');

            const permissionRow: any = getFilterItemData('matrices?fields[0]=matrix_permission&sort[0]=matrix_permission:asc');
            const fasteningRow: any = getFilterItemData('matrices?fields[0]=matrix_fastening&sort[0]=matrix_fastening:asc');
            const connectorRow: any = getFilterItemData('matrices?fields[0]=matrix_connector&sort[0]=matrix_connector:asc');
            const fiberOpticTechnologyRow: any = getFilterItemData(
                'matrices?fields[0]=matrix_fiber_optic_technology&sort[0]=matrix_fiber_optic_technology:asc'
            );
            const backlightTypeRow: any = getFilterItemData('matrices?fields[0]=matrix_backlight_type&sort[0]=matrix_backlight_type:asc');
            const hashrateRow: any = getFilterItemData('matrices?fields[0]=matrix_hashrate&sort[0]=matrix_hashrate:asc');

            [diagonale, permission, fastening, connector, fiberOpticTechnology, backlightType, hashrate] = await Promise.all([
                diagonaleRow,
                permissionRow,
                fasteningRow,
                connectorRow,
                fiberOpticTechnologyRow,
                backlightTypeRow,
                hashrateRow,
            ]);

            makeUniqueAndLoopFunc(diagonale, 'matrix_diagonale');

            makeUniqueAndLoopFunc(permission, 'matrix_permission');

            makeUniqueAndLoopFunc(fastening, 'matrix_fastening');

            makeUniqueAndLoopFunc(connector, 'matrix_connector');

            makeUniqueAndLoopFunc(fiberOpticTechnology, 'matrix_fiber_optic_technology');

            makeUniqueAndLoopFunc(backlightType, 'matrix_backlight_type');

            makeUniqueAndLoopFunc(hashrate, 'matrix_hashrate');

            setIsLoaded(true);
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (isActive) {
            document.body.style.overflow = 'hidden';
            substrateRef.current?.classList.add('active');
            // document.body.classList.add('filter-page-substrate');
        } else {
            substrateRef.current?.classList.remove('active');
            document.body.style.overflow = 'auto';
            substrateRef.current?.classList.remove('active');
        }
    }, [isActive]);

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
                        className='portal-div-test'
                        onClick={() => {
                            substrateRef.current?.classList.add('active');
                            setIsActive(!isActive);
                        }}>
                        click me
                    </div>,
                    document.body
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
                            <ul style={{ minHeight: 0 }}>
                                {diagonale.data.map((el: any) => (
                                    <li
                                        key={el.id}
                                        className='filter_item__value'
                                        onClick={async (e) => {
                                            e.stopPropagation();

                                            const res = await onFilterItemClickHandler(e, queriesArr, 'matrices', el, 'matrix_diagonale');
                                            dispatch(setData(res));
                                        }}>
                                        <>
                                            {el.attributes.matrix_diagonale} D<p>({el.attributes.numOfOccurance})</p>
                                        </>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='filter_item'>
                        <p className='filter_item__title'>Разрешение</p>
                        <p className='filter_item__descr'>Разрешение матрицы</p>
                        <ul className='filter_item__values'>
                            {permission.data.map((el: any) => (
                                <li
                                    key={el.id}
                                    className='filter_item__value'
                                    onClick={async (e) => {
                                        const res = await onFilterItemClickHandler(e, queriesArr, 'matrices', el, 'matrix_permission');
                                        dispatch(setData(res));
                                    }}>
                                    {el.attributes.matrix_permission} px
                                    <p>({el.attributes.numOfOccurance})</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='filter_item'>
                        <p className='filter_item__title'>Крепление</p>
                        <p className='filter_item__descr'>Tип крепления</p>
                        <ul className='filter_item__values'>
                            {fastening.data.map((el: any) => (
                                <li
                                    key={el.id}
                                    className='filter_item__value'
                                    onClick={async (e) => {
                                        const res = await onFilterItemClickHandler(e, queriesArr, 'matrices', el, 'matrix_fastening');
                                        dispatch(setData(res));
                                    }}>
                                    {el.attributes.matrix_fastening}
                                    <p>({el.attributes.numOfOccurance})</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='filter_item'>
                        <p className='filter_item__title'>Опт. технология</p>
                        <p className='filter_item__descr'>Тип опт. технологии</p>
                        <ul className='filter_item__values'>
                            {fiberOpticTechnology.data.map((el: any) => (
                                <li
                                    key={v1()}
                                    className='filter_item__value'
                                    onClick={async (e) => {
                                        const res = await onFilterItemClickHandler(e, queriesArr, 'matrices', el, 'matrix_fiber_optic_technology');
                                        dispatch(setData(res));
                                    }}>
                                    {el.attributes.matrix_fiber_optic_technology}
                                    <p>({el.attributes.numOfOccurance})</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='filter_item'>
                        <p className='filter_item__title'>Цвет</p>
                        <p className='filter_item__descr'>Цвет подсветки</p>
                        <ul className='filter_item__values'>
                            {backlightType.data.map((el: any) => (
                                <li
                                    key={v1()}
                                    className='filter_item__value'
                                    onClick={async (e) => {
                                        const res = await onFilterItemClickHandler(e, queriesArr, 'matrices', el, 'matrix_backlight_type');
                                        dispatch(setData(res));
                                    }}>
                                    {el.attributes.matrix_backlight_type}
                                    <p>({el.attributes.numOfOccurance})</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='filter_item'>
                        <p className='filter_item__title'>Частота обнов.</p>
                        <p className='filter_item__descr'>Частота обнов.</p>
                        <ul className='filter_item__values'>
                            {hashrate.data.map((el: any) => (
                                <li
                                    key={v1()}
                                    className='filter_item__value'
                                    onClick={async (e) => {
                                        const res = await onFilterItemClickHandler(e, queriesArr, 'matrices', el, 'matrix_hashrate');
                                        dispatch(setData(res));
                                    }}>
                                    {el.attributes.matrix_hashrate}
                                    <p>({el.attributes.numOfOccurance})</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
