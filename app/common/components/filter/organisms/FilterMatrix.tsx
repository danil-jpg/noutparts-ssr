'use client';
import React, { useEffect, useState } from 'react';
import { getFilterItemData } from '@/app/lib/data';
import { v1 } from 'uuid';
import FilterLi from '../atoms/FilterLi';
import Loading from '../../Loading/Loading';
import { makeUniqueAndLoopFunc } from '@/app/lib/service';

let [
    diagonale,
    permission,
    fastening,
    fiberOpticTechnology,
    connector,
    backlightType,
    hashrate,
]: any = '';

export default function FilterMatrix() {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            const diagonaleRow: any = getFilterItemData(
                'matrices?fields[0]=matrix_diagonale&sort[0]=matrix_diagonale:asc&fields[0]=matrix_permission&sort[0]=matrix_permission:asc'
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

    if (!isLoaded) {
        return <Loading></Loading>;
    }
    return (
        <div className='filter'>
            <p className='filter_title'>Фильтр</p>
            <div className='filter_items'>
                <div className='filter_item'>
                    <p className='filter_item__title'>Диагональ</p>
                    <p className='filter_item__descr'>Диагональ матрицы</p>
                    <ul className='filter_item__values'>
                        {diagonale.data.map((el: any) => (
                            <FilterLi key={el.id} el={el}>
                                <>
                                    {el.attributes.matrix_diagonale} D
                                    <p>({el.attributes.numOfOccurance})</p>
                                </>
                            </FilterLi>
                        ))}
                    </ul>
                </div>
                <div className='filter_item'>
                    <p className='filter_item__title'>Разрешение</p>
                    <p className='filter_item__descr'>Разрешение матрицы</p>
                    <ul className='filter_item__values'>
                        {permission.data.map((el: any) => (
                            <li key={el.id} className='filter_item__value'>
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
                            <li key={v1()} className='filter_item__value'>
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
