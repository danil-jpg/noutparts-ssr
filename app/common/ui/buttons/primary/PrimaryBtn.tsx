'use client';
import React, { FC } from 'react';
import { IPrimaryBtn } from '@/types';
import './PrimaryBtn.scss';

const PrimaryBtn: FC<IPrimaryBtn> = ({ text, htmlType, type = 'default', icon, className }) => {
    return (
        <button type={htmlType ? htmlType : 'button'} className={`primaryBtn ${type} ${className}`}>
            {text ? text : ''}
            {icon ? icon : ''}
        </button>
    );
};

export default PrimaryBtn;
