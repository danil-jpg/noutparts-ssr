'use client';
import React, { useState } from 'react';
import Loading from '../Loading/Loading';
import FilterBattery from './organisms/FilterBattery';
import './Filter.scss';
import FilterMatrix from './organisms/FilterMatrix';

interface IFilter {
    type: string;
}

export default function Filter({ type }: IFilter) {
    const RenderFilter = () => {
        switch (type) {
            case 'matrices':
                return <FilterMatrix />;
            case 'batteries':
                return <FilterBattery />;
            case 'hdds':
                return <div>hdds</div>;
            case 'keyboards':
                return <div>keyboards</div>;
            case 'rams':
                return <div>rams</div>;
            case 'power_unit':
                return <div>power_unit</div>;
            default:
                return <FilterBattery />;
        }
    };

    return <RenderFilter />;
}
