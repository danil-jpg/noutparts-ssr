'use client';
import Breadcrumbs from '@/app/common/components/breadcrumbs/Breadcrumbs';
import { Breadcrumb, categories } from '@/app/common/types/types';
import Filter from '@/app/common/components/filter/Filter';
import './filter-page.scss';
import { useEffect } from 'react';
import CategoriesRow from '@/app/common/components/Categories/CategoriesRow';
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
                params.type.toLowerCase() === 'matrices'
                    ? 'Матрицы'
                    : params.type.toLowerCase() === 'batteries'
                    ? 'Аккумуляторы'
                    : params.type.toLowerCase() === 'hdds'
                    ? 'Жесткие диски'
                    : params.type.toLowerCase() === 'keyboards'
                    ? 'Клавиатуры'
                    : params.type.toLowerCase() === 'rams'
                    ? 'Оперативная память'
                    : params.type.toLowerCase() === 'power-supplies'
                    ? 'Блок питания'
                    : params.type.toLowerCase()
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
                <Filter type={params.type.toLowerCase()} />
            </div>
        </main>
    );
}
