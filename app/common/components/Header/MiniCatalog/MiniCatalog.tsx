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
                '1366x768': ['rail'],
                '1920x1080': ['rail', 'SLIM'],
            },
        },
        {
            product_group_name: 'Batteries',
            product_group_types: {
                '2600': ['14.4'],
                '3560': ['3,560'],
                '4345': ['14.8'],
                '5200': ['11.1'],
            },
        },
        {
            product_group_name: 'Hard disks',
            product_group_types: {
                '3.5 inch Sata': ['8000000 mb', '4000000 mb', '1000000 mb', '500000 mb'],
                '2.5 inch Sata': ['1000000 mb', '500000 mb'],
            },
        },
        {
            product_group_name: 'Keyboards',
            product_group_types: {
                'Full-size': ['black', 'white'],
                TKL: ['black', 'white'],
            },
        },
        {
            product_group_name: 'RAM',
            product_group_types: {
                '5600 mhz': ['96 gb', '32 gb'],
                '3200 mhz': ['96 gb', '32 gb', '16 gb'],
                '2400 mhz': ['96 gb', '32 gb', '16 gb', '8 gb'],
            },
        },
        {
            product_group_name: 'Power unit',
            product_group_types: {
                '850 w': ['12 A', '10 A'],
                '600 w': ['12 A', '10 A', '9.8 A'],
                '500 w': ['9.8 A', '9 A'],
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
