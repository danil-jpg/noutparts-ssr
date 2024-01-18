'use client';
import React, { FC, useState } from 'react';
import { IPrimaryInput } from '@/types';

import Image from 'next/image';
import Link from 'next/link';

import IconRenderer from '../../../ui/Icons/IconRenderer';
import './MiniCatalog.scss';

import HeaderMiniCatalogItem from './HeaderMiniCatalogItem';

import brandIcon1 from '/public/img/brand-icon-1.png';
import brandIcon2 from '/public/img/brand-icon-2.png';
import brandIcon3 from '/public/img/brand-icon-3.png';
import brandIcon4 from '/public/img/brand-icon-4.png';
import brandIcon5 from '/public/img/brand-icon-5.png';
import brandIcon6 from '/public/img/brand-icon-6.png';
import brandIcon7 from '/public/img/brand-icon-7.png';
import brandIcon8 from '/public/img/brand-icon-8.png';
import brandIcon9 from '/public/img/brand-icon-9.png';
import brandIcon10 from '/public/img/brand-icon-10.png';

const MiniCatalog: FC = () => {
    const [bigMenuActive, setBigMenuActive] = useState<boolean>(false);
    const [brandsActive, setBrandsActive] = useState<boolean>(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [activeProperty, setActiveProperty] = useState<string | null>(null);

    const toggleItem = (index: number): void => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const closeDropdown = (): void => {
        setBigMenuActive(false);
        setActiveIndex(null);
        setActiveProperty(null);
    };

    const items = [
        {
            product_group_name: 'Matrices',
            product_group_types: {
                '1366x768 px': ['rail'],
                '1920x1080 px': ['rail', 'SLIM'],
            },
        },
        {
            product_group_name: 'Batteries',
            product_group_types: {
                '2600 А-ч': ['14.40 v'],
                '3560 А-ч': ['15.00 v'],
                '4345 А-ч': ['14.80 v'],
                '5200 А-ч': ['11.10 v'],
            },
        },
        {
            product_group_name: 'hdds',
            product_group_types: {
                hdd: ['2000000 mAh', '1000000 mAh', '4000000 mAh'],
                ssd: ['240000 mAh', '1000000 mAh'],
            },
        },
        {
            product_group_name: 'Keyboards',
            product_group_types: {
                'full-size': ['qwerty', 'Workman', 'Dvorak', 'Colemak'],
            },
        },
        {
            product_group_name: 'Rams',
            product_group_types: {
                '1.2 v': ['CL22'],
                '1.35 v': ['CL16-20-20', 'CL16-18-18'],
                '1.45 v': ['CL34-44-44-96'],
            },
        },
        {
            product_group_name: 'Power-supplies',
            product_group_types: {
                '240 v': ['140 x 150 x 87', '150 x 140 x 86', '150 x 140 x 86', '160 x 150 x 86', '170 x 150 x 86'],
            },
        },
    ];

    return (
        <div className='mini-catalog' onClick={closeDropdown}>
            <div
                className='mini-catalog__header-button'
                onClick={(e) => {
                    e.stopPropagation();
                    setBigMenuActive(!bigMenuActive);
                }}>
                Каталог
                <div className='mini-catalog__header-button-icon'>
                    <IconRenderer id='mini-catalog-sign' />
                </div>
                <div className={`mini-catalog__header-button-icon mobile ${bigMenuActive && 'active'}`}>
                    <IconRenderer id='dropdown-arrow-right' />
                </div>
            </div>

            <div className={`mini-catalog__big-menu ${bigMenuActive ? 'active' : ''}`}>
                {items.map((item, index) => (
                    <HeaderMiniCatalogItem
                        key={index}
                        item={item}
                        isOpen={activeIndex === index}
                        bigMenuActive={bigMenuActive}
                        toggleItem={() => toggleItem(index)}
                        activeProperty={activeProperty}
                        setActiveProperty={setActiveProperty}
                    />
                ))}

                {bigMenuActive && (
                    <div className='mini-catalog__brands-container'>
                        <div
                            className='mini-catalog__brands-button'
                            onClick={(event) => {
                                event.stopPropagation(); // Prevent event bubbling
                                setBrandsActive(!brandsActive); // Toggle brandsActive only
                                console.log(event);
                            }}>
                            Бренды
                            <div className={`mini-catalog__brands-icon ${brandsActive && 'active'}`}>
                                <IconRenderer id='dropdown-arrow-right' />
                            </div>
                        </div>

                        <div className={`mini-catalog__brands ${brandsActive && 'active'}`}>
                            <Link href='/catalog?brand=asus'>
                                <Image src={brandIcon1} alt='brandIcon1' className='mini-catalog__brand-icon'></Image>
                            </Link>
                            <Link href='/catalog?brand=apple'>
                                <Image src={brandIcon2} alt='brandIcon2' className='mini-catalog__brand-icon'></Image>
                            </Link>
                            <Link href='/catalog?brand=hp'>
                                <Image src={brandIcon3} alt='brandIcon3' className='mini-catalog__brand-icon'></Image>
                            </Link>
                            <Link href='/catalog?brand=dell'>
                                <Image src={brandIcon4} alt='brandIcon4' className='mini-catalog__brand-icon'></Image>
                            </Link>
                            <Link href='/catalog?brand=gigabyte'>
                                <Image src={brandIcon5} alt='brandIcon5' className='mini-catalog__brand-icon'></Image>
                            </Link>
                            <Link href='/catalog?brand=sony'>
                                <Image src={brandIcon6} alt='brandIcon6' className='mini-catalog__brand-icon'></Image>
                            </Link>
                            <Link href='/catalog?brand=acer'>
                                <Image src={brandIcon7} alt='brandIcon7' className='mini-catalog__brand-icon'></Image>
                            </Link>
                            <Link href='/catalog?brand=bell'>
                                <Image src={brandIcon8} alt='brandIcon8' className='mini-catalog__brand-icon'></Image>
                            </Link>
                            <Link href='/catalog?brand=fujitsu'>
                                <Image src={brandIcon9} alt='brandIcon9' className='mini-catalog__brand-icon'></Image>
                            </Link>
                            <Link href='/catalog?brand=lenovo'>
                                <Image src={brandIcon10} alt='brandIcon10' className='mini-catalog__brand-icon'></Image>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MiniCatalog;
