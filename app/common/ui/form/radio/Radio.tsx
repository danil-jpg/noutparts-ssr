import React, { FC } from 'react';
import './Radio.scss';
import { IRadio } from '@/app/common/types/types';

const Radio: FC<IRadio> = ({ id, text, name, onChange, checked, value }) => {
    return (
        <label htmlFor={id} className='radiobutton-label'>
            <span className='custom-radiobutton' />
            Новая почта
            <input
                className='radiobutton-input'
                type='radio'
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                checked={checked}
            />
        </label>
    );
};

export default Radio;
