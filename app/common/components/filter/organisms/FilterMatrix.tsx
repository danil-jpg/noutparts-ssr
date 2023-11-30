'use client';
import React, { useEffect, useRef, useState } from 'react';
import { fetchDataFromServer, getFilterItemData } from '@/app/lib/data';
import { v1 } from 'uuid';
import FilterLi from '../atoms/FilterLi';
import Loading from '../../Loading/Loading';
import { filterItemOnclickHandler, makeUniqueAndLoopFunc } from '@/app/lib/service';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/app/Redux/store';
import { setData } from '@/app/Redux/slice/query/query';
import qs from 'qs';
import { categories } from '@/app/common/types/types';

let [
    diagonale,
    permission,
    fastening,
    fiberOpticTechnology,
    connector,
    backlightType,
    hashrate,
]: any = '';

interface IQuery {
    searchParam: string;
    searchParamKeys: string[];
}

const diagonaleArr: string[] = [];
const matrixPermsArr: string[] = [];
const fasteningArr: string[] = [];
const fiberOpticTechnologyArr: string[] = [];
const connectorArr: string[] = [];
const backlightTypeArr: string[] = [];
const hashrateArr: string[] = [];

export default function FilterMatrix() {
    const queriesArr: IQuery[] = [];
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const [isActive, setIsActive] = useState<boolean>(false);

    const rootRef = useRef<HTMLDivElement | null>(null);

    const selector = useAppSelector((state) => state.queryReducer.data.data);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const diagonaleRow: any = getFilterItemData(
                'matrices?fields[0]=matrix_diagonale&sort[0]=matrix_diagonale:asc'
            );

            const permissionRow: any = getFilterItemData(
                'matrices?fields[0]=matrix_permission&sort[0]=matrix_permission:asc'
            );
            const fasteningRow: any = getFilterItemData(
                'matrices?fields[0]=matrix_fastening&sort[0]=matrix_fastening:asc'
            );
            const connectorRow: any = getFilterItemData(
                'matrices?fields[0]=matrix_connector&sort[0]=matrix_connector:asc'
            );
            const fiberOpticTechnologyRow: any = getFilterItemData(
                'matrices?fields[0]=matrix_fiber_optic_technology&sort[0]=matrix_fiber_optic_technology:asc'
            );
            const backlightTypeRow: any = getFilterItemData(
                'matrices?fields[0]=matrix_backlight_type&sort[0]=matrix_backlight_type:asc'
            );
            const hashrateRow: any = getFilterItemData(
                'matrices?fields[0]=matrix_hashrate&sort[0]=matrix_hashrate:asc'
            );

            [
                diagonale,
                permission,
                fastening,
                connector,
                fiberOpticTechnology,
                backlightType,
                hashrate,
            ] = await Promise.all([
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
        // const handleClick = (event: MouseEvent) => {
        //     const { target } = event;
        //     if (target instanceof Node && !rootRef.current?.contains(target)) {
        //         setIsActive(false);
        //     }
        // };
        // window.addEventListener('click', handleClick);
        // return () => {
        //     window.removeEventListener('click', handleClick);
        // };
    }, []);

    if (!isLoaded) {
        return <Loading></Loading>;
    }
    return (
        <div className={clsx('filter', { active: isActive })} ref={rootRef}>
            {createPortal(
                <div className='portal-div-test' onClick={() => setIsActive(!isActive)}>
                    click me
                </div>,
                document.body
            )}
            <p className='filter_title'>Фильтр</p>
            <div className='filter_items'>
                <div className='filter_item'>
                    <p className='filter_item__title'>Диагональ</p>
                    <p className='filter_item__descr'>Диагональ матрицы</p>
                    <ul className='filter_item__values'>
                        {diagonale.data.map((el: any) => (
                            <li
                                key={el.id}
                                className='filter_item__value'
                                onClick={async (e) => {
                                    // if (selector) {
                                    //     console.log(selector);
                                    // }
                                    // const res = await filterItemOnclickHandler(
                                    //     diagonaleArr,
                                    //     'matrices',
                                    //     el,
                                    //     'matrix_diagonale'
                                    // );
                                    // console.log(res);
                                    // dispatch(setData(res));
                                    e.currentTarget.classList.toggle('active');

                                    if (!queriesArr.length) {
                                        queriesArr.push({
                                            searchParam: 'matrix_diagonale',
                                            searchParamKeys: [el.attributes.matrix_diagonale],
                                        });
                                    } else {
                                        for (let i = 0; i < queriesArr.length; i++) {
                                            if (queriesArr[i].searchParam === 'matrix_diagonale') {
                                                if (
                                                    !queriesArr[i].searchParamKeys.includes(
                                                        el.attributes.matrix_diagonale
                                                    )
                                                ) {
                                                    if (
                                                        el.attributes.matrix_diagonale !== undefined
                                                    ) {
                                                        queriesArr[i].searchParamKeys.push(
                                                            el.attributes.matrix_diagonale
                                                        );
                                                    }
                                                } else {
                                                    queriesArr[i].searchParamKeys.splice(
                                                        queriesArr[i].searchParamKeys.indexOf(
                                                            el.attributes.matrix_diagonale
                                                        ),
                                                        1
                                                    );
                                                }
                                            } else if (i === queriesArr.length - 1) {
                                                queriesArr.push({
                                                    searchParam: 'matrix_diagonale',
                                                    searchParamKeys: [
                                                        el.attributes.matrix_diagonale,
                                                    ],
                                                });
                                                ++i;
                                            }
                                        }
                                    }

                                    const res = await filterItemOnclickHandler(
                                        queriesArr,
                                        'matrices'
                                    );

                                    // console.log(res);

                                    console.log(res, queriesArr);
                                }}>
                                <>
                                    {el.attributes.matrix_diagonale} D
                                    <p>({el.attributes.numOfOccurance})</p>
                                </>
                            </li>
                        ))}
                    </ul>
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
                                    // const res = await filterItemOnclickHandler(
                                    //     matrixPermsArr,
                                    //     'matrices',
                                    //     el,
                                    //     'matrix_permission'
                                    // );
                                    // dispatch(setData(res));
                                    e.currentTarget.classList.toggle('active');

                                    if (!queriesArr.length) {
                                        queriesArr.push({
                                            searchParam: 'matrix_permission',
                                            searchParamKeys: [el.attributes.matrix_permission],
                                        });
                                    } else {
                                        for (let i = 0; i < queriesArr.length; i++) {
                                            if (queriesArr[i].searchParam === 'matrix_permission') {
                                                if (
                                                    !queriesArr[i].searchParamKeys.includes(
                                                        el.attributes.matrix_permission
                                                    )
                                                ) {
                                                    queriesArr[i].searchParamKeys.push(
                                                        el.attributes.matrix_permission
                                                    );
                                                } else {
                                                    queriesArr[i].searchParamKeys.splice(
                                                        queriesArr[i].searchParamKeys.indexOf(
                                                            el.attributes.matrix_permission
                                                        ),
                                                        1
                                                    );
                                                }
                                            } else if (i === queriesArr.length - 1) {
                                                queriesArr.push({
                                                    searchParam: 'matrix_permission',
                                                    searchParamKeys: [
                                                        el.attributes.matrix_permission,
                                                    ],
                                                });
                                                ++i;
                                            }
                                        }
                                    }

                                    const res = await filterItemOnclickHandler(
                                        queriesArr,
                                        'matrices'
                                    );

                                    console.log(res, queriesArr);
                                    // console.log(queriesArr);
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
                        {/* {fastening.data.map((el: any) => (
                            <li
                                key={el.id}
                                className='filter_item__value'
                                onClick={async () => {
                                    const res = await filterItemOnclickHandler(
                                        fasteningArr,
                                        'matrices',
                                        el,
                                        'matrix_fastening'
                                    );
                                    dispatch(setData(res));
                                }}>
                                {el.attributes.matrix_fastening}
                                <p>({el.attributes.numOfOccurance})</p>
                            </li>
                        ))} */}
                    </ul>
                </div>
                <div className='filter_item'>
                    <p className='filter_item__title'>Опт. технология</p>
                    <p className='filter_item__descr'>Тип опт. технологии</p>
                    <ul className='filter_item__values'>
                        {fiberOpticTechnology.data.map((el: any) => (
                            <li key={v1()} className='filter_item__value'>
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
                            <li key={v1()} className='filter_item__value'>
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
                            <li key={v1()} className='filter_item__value'>
                                {el.attributes.matrix_hashrate}
                                <p>({el.attributes.numOfOccurance})</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
