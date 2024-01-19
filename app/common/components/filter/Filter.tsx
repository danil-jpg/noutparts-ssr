import React, { Suspense } from 'react';
import Loading from '../Loading/Loading';
import FilterBattery from './organisms/FilterBattery';
import './Filter.scss';
import FilterHdd from './organisms/FilterHdd';
import FilterKeyboard from './organisms/FilterKeyboard';
import FilterRam from './organisms/FilterRam';
import FilterPower from './organisms/FilterPowerSupply';
import FilterMatrix from './organisms/FilterMatrix';
import HistoryProducts from '../HistoryProducts/HistoryProducts';

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
                return <FilterHdd />;
            case 'keyboards':
                return <FilterKeyboard />;
            case 'rams':
                return <FilterRam />;
            case 'power-supplies':
                return <FilterPower />;
            default:
                return <FilterMatrix />;
        }
    };

    return (
        <Suspense fallback={<Loading />}>
            <RenderFilter />
            <HistoryProducts />
        </Suspense>
    );
}
