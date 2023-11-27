import React, { FC } from 'react';
import './Filter.scss';
import { getFilterItemData } from '@/app/lib/data';
import { v1 } from 'uuid';
import FilterLi from './atoms/FilterLi';

interface IFilter {
    type: string;
}

export default async function Filter({ type }: IFilter) {
    const capacityRow: any = getFilterItemData(
        'batteries?fields[0]=battery_capacity&sort[0]=battery_capacity:asc'
    );

    const voltageRow: any = getFilterItemData(
        'batteries?fields[0]=battery_voltage&sort[0]=battery_voltage:asc'
    );
    const batteryTypeRow: any = getFilterItemData(
        'batteries?fields[0]=battery_type&sort[0]=battery_type:asc'
    );
    const colorRow: any = getFilterItemData(
        'batteries?fields[0]=battery_color&sort[0]=battery_color:asc'
    );

    let [capacity, voltage, batteryType, color] = await Promise.all([
        capacityRow,
        voltageRow,
        batteryTypeRow,
        colorRow,
    ]);

    for (let i = 0; i < capacity.data.length; i++) {
        capacity.data[i].attributes.numOfOccurance = 1;
        for (let j = 0; j < i; j++) {
            if (
                capacity.data[i].attributes.battery_capacity ===
                capacity.data[j].attributes.battery_capacity
            ) {
                capacity.data[j].attributes.numOfOccurance =
                    capacity.data[j].attributes.numOfOccurance + 1;
                capacity.data.splice(i, 1);
                i = --i;
            }
        }
    }

    for (let i = 0; i < voltage.data.length; i++) {
        voltage.data[i].attributes.numOfOccurance = 1;
        for (let j = 0; j < i; j++) {
            if (
                voltage.data[i].attributes.battery_voltage ===
                voltage.data[j].attributes.battery_voltage
            ) {
                voltage.data[j].attributes.numOfOccurance =
                    voltage.data[j].attributes.numOfOccurance + 1;
                voltage.data.splice(i, 1);
                i = --i;
            }
        }
    }

    for (let i = 0; i < batteryType.data.length; i++) {
        batteryType.data[i].attributes.numOfOccurance = 1;
        for (let j = 0; j < i; j++) {
            if (
                batteryType.data[i].attributes.battery_type ===
                batteryType.data[j].attributes.battery_type
            ) {
                batteryType.data[j].attributes.numOfOccurance =
                    batteryType.data[j].attributes.numOfOccurance + 1;
                batteryType.data.splice(i, 1);
                i = --i;
            }
        }
    }

    for (let i = 0; i < color.data.length; i++) {
        color.data[i].attributes.numOfOccurance = 1;
        for (let j = 0; j < i; j++) {
            if (color.data[i].attributes.battery_color === color.data[j].attributes.battery_color) {
                color.data[j].attributes.numOfOccurance =
                    color.data[j].attributes.numOfOccurance + 1;
                color.data.splice(i, 1);
                i = --i;
            }
        }
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
                            <FilterLi key={el.id} el={el}>
                                <>
                                    {el.attributes.battery_capacity} mAh
                                    <p>({el.attributes.numOfOccurance})</p>
                                </>
                            </FilterLi>
                        ))}
                    </ul>
                </div>
                <div className='filter_item'>
                    <p className='filter_item__title'>Напряжение</p>
                    <p className='filter_item__descr'>Напряжение аккамулятора</p>
                    <ul className='filter_item__values'>
                        {voltage.data.map((el: any) => (
                            <li key={el.id} className='filter_item__value'>
                                {el.attributes.battery_voltage} V
                                <p>({el.attributes.numOfOccurance})</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='filter_item'>
                    <p className='filter_item__title'>Тип батареи</p>
                    <p className='filter_item__descr'>Выберите тип</p>
                    <ul className='filter_item__values'>
                        {batteryType.data.map((el: any) => (
                            <li key={v1()} className='filter_item__value'>
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
                            <li key={v1()} className='filter_item__value'>
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
