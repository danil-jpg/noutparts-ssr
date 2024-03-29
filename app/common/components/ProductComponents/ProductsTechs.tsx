import React, { FC } from 'react';
import './ProductTechs.scss';

interface TechCharacteristic {
    name: string;
    value: string | number;
}

interface TechCharacteristics {
    [key: string]: TechCharacteristic;
}
export default function ProductTechs({ techCharacteristics }: { techCharacteristics: TechCharacteristics }) {
    const techItems = Object.keys(techCharacteristics).map((key, index) => {
        const { name, value } = techCharacteristics[key];
        const evenclassName = index % 2 === 0 ? 'even' : ''; // Checking if the index is even

        return (
            <div className={`product-techs__tech-item ${evenclassName}`} key={index}>
                <div className='product-techs__tech-name'>{name}</div>
                <div className='product-techs__tech-space'></div>
                <div className='product-techs__tech-value'> {value}</div>
            </div>
        );
    });

    return (
        <>
            <div className='product-techs__wrapper'>
                <div className='product-techs'>
                    <div className='product-techs__title'>Технические характеристики </div>
                    <div className='product-techs__content'>{techItems}</div>
                </div>
            </div>
        </>
    );
}
