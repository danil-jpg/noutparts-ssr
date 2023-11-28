'use client';
import { NextPage } from 'next';
import { useParams } from 'next/navigation';
import Breadcrumbs from '@/app/common/components/breadcrumbs/Breadcrumbs';
import { Breadcrumb } from '@/app/common/types/types';
import Filter from '@/app/common/components/filter/Filter';
import './filter-page.scss';
import { useEffect } from 'react';

export default function Page({ params }: { params: { type: string } }) {
    useEffect(() => {
        document.body.classList.add('filter-page');
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
            <Breadcrumbs classname='filter-page__breadcrumbs' breadcrumbs={breadcrumbArr} />
            <Filter type={params.type} />
        </main>
    );
}
