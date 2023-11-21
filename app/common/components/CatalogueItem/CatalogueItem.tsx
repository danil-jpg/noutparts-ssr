import React, { FC } from 'react';
import './CatalogueItem.scss';
import { Image } from 'next/dist/client/image-component';

interface ICatalogueItem {
    title: string;
}

const CatalogueItem: FC<ICatalogueItem> = ({ title }) => {
    return (
        <div className='catalogue-item'>
            <div className='catalogue-item__top'>
                <Image
                    className='catalogue-item__top_img'
                    width={380}
                    height={210}
                    src={'/img/catalogue/matrix.png'}
                    alt='catalogue-item'
                />
            </div>
            <div className='catalogue-item__main'>
                <ul className='catalogue-item__main_ul'>
                    <li className='catalogue-item__main_li'>asus</li>
                    <li className='catalogue-item__main_li'>basus</li>
                </ul>
            </div>
        </div>
    );
};

export default CatalogueItem;
