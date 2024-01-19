import React, { FC } from 'react';
import Spinner from '../Spinner/Spinner';
import './Loading.scss';

const Loading: FC = () => {
    return (
        <div className='loading'>
            <Spinner classname='loading__item' white={false} />
        </div>
    );
};

export default Loading;
