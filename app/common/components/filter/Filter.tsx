import React, { FC } from 'react';
import './Filter.scss';

interface IFilter {
    type: 'battery' | 'matrix';
}

const Filter: FC<IFilter> = ({ type }) => {
    return (
        <div className='filter'>
            <p className='filter_title'>Фильтр</p>
            <div className='filter_items'>
                <div className='filter_item'>
                    <p className='filter_item__title'>Емкость</p>
                    <p className='filter_item__descr'>Емкость аккамулятора</p>
                    <ul className='filter_item__values'>
                        <li className='filter_item__value'>От 2200 до 4000 mAh</li>
                        <li className='filter_item__value'>От 4000 до 6000 mAh</li>
                        <li className='filter_item__value'>От 6000 до 8800 mAh</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Filter;
