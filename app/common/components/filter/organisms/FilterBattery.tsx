'use client';
import React, { useEffect, useState } from 'react';
import { getFilterItemData } from '@/app/lib/data';
import { v1 } from 'uuid';
import Loading from '../../Loading/Loading';
import { makeUniqueAndLoopFunc, onFilterItemClickHandler } from '@/app/lib/service';
import { IQuery } from '@/app/common/types/types';
import { useAppDispatch } from '@/app/Redux/store';
import { setData } from '@/app/Redux/slice/query/query';

let [capacity, voltage, batteryType, color]: any = '';

export default function FilterBattery() {
    const [queriesArr, useQueryarr] = useState<IQuery[]>([]);

    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const capacityRow: any = getFilterItemData('batteries?fields[0]=battery_capacity&sort[0]=battery_capacity:asc');

            const voltageRow: any = getFilterItemData('batteries?fields[0]=battery_voltage&sort[0]=battery_voltage:asc');
            const batteryTypeRow: any = getFilterItemData('batteries?fields[0]=battery_type&sort[0]=battery_type:asc');
            const colorRow: any = getFilterItemData('batteries?fields[0]=battery_color&sort[0]=battery_color:asc');

            [capacity, voltage, batteryType, color] = await Promise.all([capacityRow, voltageRow, batteryTypeRow, colorRow]);

            makeUniqueAndLoopFunc(capacity, 'battery_capacity');

            makeUniqueAndLoopFunc(voltage, 'battery_voltage');

            makeUniqueAndLoopFunc(batteryType, 'battery_type');

            makeUniqueAndLoopFunc(color, 'battery_color');

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
                    <p className='filter_item__title'>Емкость</p>
                    <p className='filter_item__descr'>Емкость аккамулятора</p>
                    <ul className='filter_item__values'>
                        {capacity.data.map((el: any) => (
                            <li
                                key={el.id}
                                className='filter_item__value'
                                onClick={async (e) => {
                                    const res = await onFilterItemClickHandler(e, queriesArr, 'batteries', el, 'battery_capacity');
                                    dispatch(setData(res));
                                }}>
                                <>
                                    {el.attributes.battery_capacity} mAh
                                    <p>({el.attributes.numOfOccurance})</p>
                                </>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='filter_item'>
                    <p className='filter_item__title'>Напряжение</p>
                    <p className='filter_item__descr'>Напряжение аккамулятора</p>
                    <ul className='filter_item__values'>
                        {voltage.data.map((el: any) => (
                            <li
                                key={el.id}
                                className='filter_item__value'
                                onClick={async (e) => {
                                    const res = await onFilterItemClickHandler(e, queriesArr, 'batteries', el, 'battery_voltage');
                                    dispatch(setData(res));
                                }}>
                                {el.attributes.battery_voltage} V<p>({el.attributes.numOfOccurance})</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='filter_item'>
                    <p className='filter_item__title'>Тип батареи</p>
                    <p className='filter_item__descr'>Выберите тип</p>
                    <ul className='filter_item__values'>
                        {batteryType.data.map((el: any) => (
                            <li
                                key={v1()}
                                className='filter_item__value'
                                onClick={async (e) => {
                                    const res = await onFilterItemClickHandler(e, queriesArr, 'batteries', el, 'battery_type');
                                    dispatch(setData(res));
                                }}>
                                {el.attributes.battery_type}
                                <p>({el.attributes.numOfOccurance})</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='filter_item'>
                    <p className='filter_item__title'>Цвет</p>
                    <p className='filter_item__descr'>Какой цвет необходим?</p>
                    <ul className='filter_item__values'>
                        {color.data.map((el: any) => (
                            <li
                                key={v1()}
                                className='filter_item__value'
                                onClick={async (e) => {
                                    const res = await onFilterItemClickHandler(e, queriesArr, 'batteries', el, 'battery_color');
                                    dispatch(setData(res));
                                }}>
                                {el.attributes.battery_color}
                                <p>({el.attributes.numOfOccurance})</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
