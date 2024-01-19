import React from 'react';
import './Spinner.scss';

const Spinner = ({ classname, white = false }: { classname: string; white?: boolean }) => {
    return <div className={`${classname} spinner ${white ? 'spinner_white' : ''}`}></div>;
};

export default Spinner;
