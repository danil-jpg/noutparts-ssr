'use client';
import Radio from '@/app/common/ui/form/radio/Radio';
import Select from '@/app/common/ui/form/select/Select';
import React, { useState } from 'react';

const FilterComp = () => {
    const [select1, useSelect1] = useState('');
    const [select2, useSelect2] = useState('');

    return (
        <div>
            {/* <Select
                arr={['1', '2', '3']}
                defValue='default1'
                value={select1}
                setValue={useSelect1}></Select>
            <br />
            <Select
                arr={['4', '5', '6']}
                defValue='default2'
                value={select2}
                setValue={useSelect2}></Select> */}
            <Radio></Radio>
            <Radio></Radio>
            <Radio></Radio>
        </div>
    );
};

export default FilterComp;
