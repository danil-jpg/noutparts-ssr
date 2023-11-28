import React, { FC } from 'react';
import Select from '../../ui/form/select/Select';

const TopFilter: FC = () => {
    return (
        <div className='top-filter'>
            <p className='top-filter_title'>Аккумуляторы</p>
            <div className='top-filter_filters'>
                <Select defValue='Бренд' arr={['1', '2', '3']} setValue={''} />
            </div>
        </div>
    );
};

export default TopFilter;
