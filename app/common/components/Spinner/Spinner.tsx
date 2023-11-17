import React from 'react';
import './Spinner.scss';

const Spinner = ({ classname }: { classname: string }) => {
    return <div className={`${classname} spinner`}></div>;
};

export default Spinner;
