'use client';
import React, { useState, useRef, useEffect, FC } from 'react';
import IconRenderer from '../../Icons/IconRenderer';
import './Select.scss';
import { ISelect } from '../../../types/types';

const Select: FC<ISelect> = ({ value, setValue, className = '', defValue = 'choose your category', arr = ['1', '2', '3'] }) => {
    const rootRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!value) setValue(defValue);
    }, []);

    const [open, setOpen] = useState<boolean>(false);

    const onElementClickHandler = (str: string) => {
        setValue((prev) => {
            return str;
        });
    };

    const onRootClickHandler = () => {
        setOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const { target } = event;
            if (target instanceof Node && !rootRef.current?.contains(target)) {
                setOpen(false);
            }
        };

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div className={`select ${className}`} onClick={() => onRootClickHandler()} ref={rootRef}>
            <div className='select__title__wr'>
                <p className='select__title'>{value}</p>
                <IconRenderer id='arrow-down' className={`arrow_down ${open ? ' active' : ''}`} />
            </div>
            <ul className={`select__ul  ${open ? ' active' : ''}`}>
                <div style={{ minHeight: '0px' }}>
                    {arr.map((el) => (
                        <li onClick={() => onElementClickHandler(el)} key={el} className='select__li'>
                            {el}
                        </li>
                    ))}
                </div>
            </ul>
        </div>
    );
};

export default Select;
