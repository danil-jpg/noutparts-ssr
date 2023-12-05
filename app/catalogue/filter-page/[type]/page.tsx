'use client';
import Breadcrumbs from '@/app/common/components/breadcrumbs/Breadcrumbs';
import { Breadcrumb } from '@/app/common/types/types';
import Filter from '@/app/common/components/filter/Filter';
import './filter-page.scss';
import { useEffect } from 'react';
import FilterCards from '@/app/common/components/filter/organisms/FilterCards';
import TopFilter from '@/app/common/components/filter/organisms/TopFilter/TopFilter';

export default function Page({ params }: { params: { type: string } }) {
    useEffect(() => {
        document.body.classList.add('filter-page-body');
    }, []);

    const breadcrumbArr: Breadcrumb[] = [
        {
            label: 'Каталог товаров',
            href: '/catalogue',
            active: false,
        },
        {
            label: `${params.type}`,
            href: '/catalogue/filter-page',
            active: true,
        },
    ];

    return (
        <main className='container filter-page'>
            <div>
                <Breadcrumbs classname='filter-page__breadcrumbs' breadcrumbs={breadcrumbArr} />
                <Filter type={params.type} />
            </div>
            <div>
                <TopFilter />
                <FilterCards />
            </div>
        </main>
    );
}
