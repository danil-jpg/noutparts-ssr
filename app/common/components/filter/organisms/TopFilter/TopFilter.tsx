'use client';
import React, { FC, useState } from 'react';
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
                <div id='filter-menu-burger-wr' className='filter-menu-burger-wr'>
                    <IconRenderer id='filter-menu-burger' />
                </div>
                <Select defValue='Бренд' arr={['1', '2', '3']} setValue={setBrand} value={brand} />
                <Select defValue='Цена' arr={['по возрастанию', 'по убыванию']} setValue={setPrice} value={price} />
            </div>
        </div>
    );
};

export default TopFilter;
