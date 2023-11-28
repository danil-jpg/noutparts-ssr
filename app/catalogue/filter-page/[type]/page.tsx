import { NextPage } from 'next';
import { useParams } from 'next/navigation';
import Breadcrumbs from '@/app/common/components/breadcrumbs/Breadcrumbs';
import { Breadcrumb } from '@/app/common/types/types';
import Filter from '@/app/common/components/filter/Filter';
import './filter-page.scss';

export default function Page({ params }: { params: { type: string } }) {
    const breadcrumbArr: Breadcrumb[] = [
        {
            label: 'Каталог товаров',
            href: '/catalogue',
            active: false,
        },
        {
            label: 'Аккумуляторы',
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
