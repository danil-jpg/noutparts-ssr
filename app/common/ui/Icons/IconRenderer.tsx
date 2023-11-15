import React, { FC } from 'react';
import sprites from './sprites.svg';
import './icons.scss';

interface IIConRenderer {
    id: string;
    onClick?: () => void;
    className?: string;
}

const IconRenderer: FC<IIConRenderer> = ({ id, className = '', ...props }) => {
    return (
        <svg {...props} className={`${id} ${className}`}>
            <use href={`${sprites}#${id}`} />
        </svg>
    );
};

export default IconRenderer;
