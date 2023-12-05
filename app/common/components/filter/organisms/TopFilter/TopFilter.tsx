'use client';
import React, { useState } from 'react';
import Select from '../../../../ui/form/select/Select';
import './TopFilter.scss';
import IconRenderer from '@/app/common/ui/Icons/IconRenderer';

const TopFilter = () => {
    const [brand, setBrand] = useState<string>('');
    const [price, setPrice] = useState<string>('');

    return (
        <div className='top-filter'>
            <p className='top-filter_title'>Аккумуляторы</p>
            <div className='top-filter_filters'>
                <div id='filter-menu-burger-wr' className='filter-menu-burger-wr'></div>
                <div className='select-container'>
                    <p className='select-container__title'>Выберите бренд</p>
                    <Select defValue='Бренд' arr={['1', '2', '3']} setValue={setBrand} value={brand} />
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
        </div>
    );
};

export default TopFilter;
