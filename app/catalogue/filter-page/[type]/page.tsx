'use client';
import Breadcrumbs from '@/app/common/components/breadcrumbs/Breadcrumbs';
import { Breadcrumb, categories } from '@/app/common/types/types';
import Filter from '@/app/common/components/filter/Filter';
import './filter-page.scss';
import { useEffect } from 'react';
import FilterCards from '@/app/common/components/filter/organisms/FilterCards/FilterCards';
import CategoriesRow from '@/app/common/components/MainStatics/CategoriesRow';
// import TopFilter from '@/app/common/components/filter/organisms/TopFilter/TopFilter';

export default function Page({ params }: { params: { type: categories } }) {
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
            label: `${
                params.type === 'matrices'
                    ? 'Матрицы'
                    : params.type === 'batteries'
                    ? 'Аккумуляторы'
                    : params.type === 'hdds'
                    ? 'Жесткие диски'
                    : params.type === 'keyboards'
                    ? 'Клавиатуры'
                    : params.type === 'rams'
                    ? 'Оперативная память'
                    : params.type === 'power_unit'
                    ? 'Блок питания'
                    : params.type
            }`,
            href: '/catalogue/filter-page',
            active: true,
        },
    ];

    return (
        <main className='container filter-page'>
            <div>
                <Breadcrumbs classname='filter-page__breadcrumbs' breadcrumbs={breadcrumbArr} />
                <CategoriesRow />
                <Filter type={params.type} />
            </div>
        </main>
    );
}
