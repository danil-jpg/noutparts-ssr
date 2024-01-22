'use client';
import React, { FC, useState, useEffect } from 'react';
import { IPrimaryInput } from '@/types';
import { PatternFormat } from 'react-number-format';
import IconRenderer from '../Icons/IconRenderer';
import './PrimaryInput.scss';

const PrimaryInput: FC<IPrimaryInput> = ({ placeholder, label, type = 'text', setValue, name }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => {
        handleValidation(inputValue);
    }, []);

    const handleInputChange = (value: string): void => {
        setInputValue(value);
        const validationError = handleValidation(value);
        if (!validationError) {
            setValue(value); // Set the value only if validation passes
        }
    };

    const handleValidation = (value: string) => {
        let error = null;
        if (type === 'email') {
            if (value.trim() !== '' && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                error = 'Email введён некоректно';
            }
        } else {
            if (value.trim() === '') {
                error = 'This field cannot be empty.';
            } else if (type === 'tel') {
                if (value.length < 9) {
                    error = 'Phone number should be at least 9 digits.';
                } else if (!value.match(/^[\d\s()+-]+$/)) {
                    error = 'Please enter a valid phone number.';
                }
            }
        }
        setError(error); // Set the error state
        return error; // Return the error message (or null if validation passes)
    };

    const handleFocus = (): void => {
        setIsActive(true);
    };

    const handleBlur = (): void => {
        setIsActive(false);
    };

    const maskTel = '+380 | 99 999 9999';

    return (
        <div className='primary-input'>
            <label htmlFor={placeholder} className='primary-input__label'>
                {type !== 'email' && <span>*</span>}
                {label}
            </label>
            <div
                className={`primary-input__container ${isActive ? 'active' : ''} ${error&&isActive ? 'error' : ''} ${
                    type === 'email' ? 'email' : type === 'tel' ? 'tel' : type === 'text' ? 'text' : ''
                }`}>
                {type === 'tel' ? (
                    <PatternFormat
                        type='tel'
                        displayType='input'
                        format='+380 | ## ### ####'
                        valueIsNumericString
                        allowEmptyFormatting
                        mask='_'
                        className={`primary-input__input ${type}`}
                        onValueChange={(values, sourceInfo) => {
                            handleInputChange(values.value);
                        }}
                        onFocus={handleFocus}
                        onBlur={handleBlur}></PatternFormat>
                ) : (
                    <input
                        type={type}
                        className={`primary-input__input ${type}`}
                        id={placeholder}
                        placeholder={placeholder}
                        value={inputValue}
                        onChange={(event) => {
                            handleInputChange(event.target.value);
                        }}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        name={name}
                    />
                )}

                {error ? <IconRenderer id='not-validated-sign'></IconRenderer> : <IconRenderer id='validated-sign'></IconRenderer>}
                {error && isActive && <div className='primary-input__error-popup'>{error}</div>}
            </div>
            {type === 'email' && <div className='primary-input__email-description'>Для отслеживания статуса заказа</div>}
        </div>
    );
};

export default PrimaryInput;
