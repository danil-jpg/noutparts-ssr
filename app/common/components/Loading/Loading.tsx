'use client';
import React, { FC, useEffect } from 'react';
import Spinner from '../Spinner/Spinner';
import './Loading.scss';

const Loading: FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='loading'>
            <Spinner classname='loading__item' white={false} />
        </div>
    );
};

export default Loading;
