'use client';
import React, { FC } from 'react';
import './CategoryGallery.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import categoryGalleryMatrix from '/public/img/category-gallery-img-matrix.png';
import categoryGalleryBattery from '/public/img/category-gallery-img-battery.png';
import categoryGalleryPowerUnit from '/public/img/category-gallery-img-power-unit.png';
import categoryGallerySSD from '/public/img/category-gallery-img-ssd.png';
import categoryGalleryHDD from '/public/img/category-gallery-img-hdd.png';
import categoryGalleryKeyboard from '/public/img/category-gallery-img-keyboard.png';
import categoryGalleryRAM from '/public/img/category-gallery-img-ram.png';
import { handleCategoryClick } from '../../utils/utils';

const CategoryGallery: FC = ({}) => {
    const router = useRouter();

    return (
        <div className='category-static__wrapper'>
            <div className='category-static'>
                <div
                    className='category-static__block toxic-green'
                    onClick={() => {
                        handleCategoryClick(router, 'Batteries');
                    }}>
                    <Image src={categoryGalleryBattery} alt='categoryGalleryBattery' className='category-static__img'></Image>
                    <div className='category-static__title'>Аккумуляторы</div>
                    <div className='category-static__undertitle'></div>
                </div>

                <div
                    className='category-static__block first-grey'
                    onClick={() => {
                        handleCategoryClick(router, 'Power_supplies');
                    }}>
                    <Image src={categoryGalleryPowerUnit} alt='categoryGalleryPowerUnit' className='category-static__img pu'></Image>
                    <div className='category-static__title'>Блоки питания</div>
                    <div className='category-static__undertitle'></div>
                </div>

                <div
                    className='category-static__block forest-green'
                    onClick={() => {
                        handleCategoryClick(router, 'Matrices');
                    }}>
                    <Image src={categoryGalleryMatrix} alt='categoryGalleryMatrix' className='category-static__img'></Image>
                    <div className='category-static__title'>Матрицы</div>
                    <div className='category-static__undertitle'></div>
                </div>

                <div
                    className='category-static__block light-brown'
                    onClick={() => {
                        handleCategoryClick(router, 'Keyboards');
                    }}>
                    <Image src={categoryGalleryKeyboard} alt='categoryGalleryKeyboard' className='category-static__img'></Image>
                    <div className='category-static__title'>Клавиатуры</div>
                    <div className='category-static__undertitle'></div>
                </div>
            </div>
            <div className='category-static lower'>
                <div
                    className='category-static__block light-green'
                    onClick={() => {
                        handleCategoryClick(router, 'Rams');
                    }}>
                    <Image src={categoryGalleryRAM} alt='categoryGalleryRAM' className='category-static__img'></Image>
                    <div className='category-static__title'>Оперативная память</div>
                    <div className='category-static__undertitle'></div>
                </div>

                <div
                    className='category-static__block second-grey'
                    onClick={() => {
                        handleCategoryClick(router, 'Hdds');
                    }}>
                    <Image src={categoryGallerySSD} alt='categoryGallerySSD' className='category-static__img ssd'></Image>
                    <Image src={categoryGalleryHDD} alt='categoryGalleryHDD' className='category-static__img hdd'></Image>

                    <div className='category-static__title'>Жесткие диски</div>
                    <div className='category-static__undertitle'>HDD/SSD</div>
                </div>
            </div>
        </div>
    );
};

export default CategoryGallery;
