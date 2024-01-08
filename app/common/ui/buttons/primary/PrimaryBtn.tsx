'use client';
import React, { FC } from 'react';
import { IPrimaryBtn } from '@/types';
import './PrimaryBtn.scss';

const PrimaryBtn: FC<IPrimaryBtn> = ({ text, type = 'default', icon }) => {
    return (
        <button className={`primaryBtn ${type}`}>
            {text ? text : ''}
            {icon ? icon : ''}
        </button>
    );
};

export default PrimaryBtn;
