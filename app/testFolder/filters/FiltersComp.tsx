'use client';
import React, { useState } from 'react';
import Loading from '@/app/common/components/Loading/Loading';

const FilterComp = () => {
    const [select1, useSelect1] = useState('');
    const [select2, useSelect2] = useState('');

    return (
        <div>
            <Loading />
        </div>
    );
};

export default FilterComp;
