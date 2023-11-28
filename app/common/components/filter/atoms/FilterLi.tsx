'use client';
import { NextPage } from 'next';
import React from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import qs from 'qs';

interface Props {
    el: {
        id: number;
        attributes: any;
    };
    children: React.ReactElement;
}

const FilterLi: NextPage<Props> = ({ el, children }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    return (
        <li
            onClick={() => {
                const query = qs.stringify({
                    filters: {
                        battery_capacity: {
                            $eq: el.attributes.battery_capacity,
                        },
                    },
                });

                const params = new URLSearchParams(searchParams);

                params.set('battery_capacity', el.attributes.battery_capacity);

                replace(`${pathname}/battery?${params.toString()}`);
            }}
            className='filter_item__value'>
            {children}
        </li>
    );
};

export default FilterLi;
