import { Breadcrumb } from '../../common/types/types';
import Breadcrumbs from '../../common/components/breadcrumbs/Breadcrumbs';
import './filter-page.scss';
import Filter from '@/app/common/components/filter/Filter';

export default async function Page() {
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
            <Filter type='battery' />
        </main>
    );
}
