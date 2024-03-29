'use client';
import React, { FC } from 'react';
import IconRenderer from '../../ui/Icons/IconRenderer';
import './CategoriesRow.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import matrixIcon from '/public/img/categories-row-matrix-icon.svg';
import { handleCategoryClick } from '../../utils/utils';

const CategoriesRow: FC = ({ activeItem }: { activeItem?: string }) => {
    const router = useRouter();

    return (
        <div className='categories-row__wrapper'>
            <div className='categories-row__container'>
                <div
                    className={`categories-row__item ${activeItem === 'matrix' && 'active'}`}
                    onClick={() => {
                        handleCategoryClick(router, 'Matrices');
                    }}>
                    <div className='categories-row__img'>
                        <Image src={matrixIcon} alt='matrixIcon' className='categories-row__matrix-img'></Image>
                    </div>
                    <div className='categories-row__text'>Матрицы</div>
                </div>
                <div
                    className={`categories-row__item ${activeItem === 'battery' && 'active'}`}
                    onClick={() => {
                        handleCategoryClick(router, 'Batteries');
                    }}>
                    <div className='categories-row__img'>
                        <IconRenderer id='category-row-battery-icon'></IconRenderer>
                    </div>
                    <div className='categories-row__text'>Аккумуляторы</div>
                </div>
                <div
                    className={`categories-row__item ${activeItem === 'hdd' && 'active'}`}
                    onClick={() => {
                        handleCategoryClick(router, 'Hdds');
                    }}>
                    <div className='categories-row__img'>
                        <IconRenderer id='category-row-hdd-icon'></IconRenderer>
                    </div>
                    <div className='categories-row__text'>Жесткие диски / SSD</div>
                </div>
                <div
                    className={`categories-row__item ${activeItem === 'keyboard' && 'active'}`}
                    onClick={() => {
                        handleCategoryClick(router, 'Keyboards');
                    }}>
                    <div className='categories-row__img'>
                        <IconRenderer id='category-row-keyboard-icon'></IconRenderer>
                    </div>
                    <div className='categories-row__text'>Клавиатуры</div>
                </div>
                <div
                    className={`categories-row__item ${activeItem === 'ram' && 'active'}`}
                    onClick={() => {
                        handleCategoryClick(router, 'Rams');
                    }}>
                    <div className='categories-row__img'>
                        <IconRenderer id='category-row-ram-icon'></IconRenderer>
                    </div>
                    <div className='categories-row__text'>Оперативная память</div>
                </div>
                <div
                    className={`categories-row__item ${activeItem === 'power_unit' && 'active'}`}
                    onClick={() => {
                        handleCategoryClick(router, 'Power-Supplies');
                    }}>
                    <div className='categories-row__img'>
                        <IconRenderer id='category-row-power-unit-icon'></IconRenderer>
                    </div>
                    <div className='categories-row__text'>Блоки питания</div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesRow;
