'use client';
import React, { Suspense, lazy, useState } from 'react';
import Loading from '../Loading/Loading';
import FilterBattery from './organisms/FilterBattery';
import './Filter.scss';
// import FilterMatrix from './organisms/FilterMatrix';

const FilterMatrix = lazy(() => import('./organisms/FilterMatrix'));

interface IFilter {
    type: string;
}

export default function Filter({ type }: IFilter) {
    const RenderFilter = () => {
        switch (type.toLowerCase()) {
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
                return <FilterMatrix />;
        }
    };

    return (
        <Suspense fallback={<Loading />}>
            <RenderFilter />
        </Suspense>
    );
}
