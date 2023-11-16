import React, { FC } from 'react';
import sprites from './sprites.svg';
import './icons.scss';
import { IIConRenderer } from '../../types/types';

const IconRenderer: FC<IIConRenderer> = ({ id, className = '', ...props }) => {
    return (
        <svg {...props} className={`${id} ${className}`}>
            <use href={`${sprites.src}#${id}`} />
        </svg>
    );
};

export default IconRenderer;
