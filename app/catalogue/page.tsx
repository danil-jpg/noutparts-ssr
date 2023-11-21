import { Breadcrumb } from '../common/types/types';
import Breadcrumbs from '../common/components/breadcrumbs/Breadcrumbs';
import './catalogue.scss';
import CatalogueItem from '../common/components/CatalogueItem/CatalogueItem';
import qs from 'qs';
import { Suspense } from 'react';
import Loading from '../common/components/Loading/Loading';

export default async function Page() {
    // const query = qs.stringify({
    //     fields: ['product_tag', 'product_price'],
    // });

    // const query = qs.stringify({
    //     filters: {
    //         product_status: {
    //             $eq: 'wait',
    //         },
    //     },
    // });

    // const query = qs.stringify({
    //     filters: {
    //         product_type: {
    //             $eq: 'matrix',
    //         },
    //     },
    //     fields: ['brand'],
    // });

    // на зачем $or $and - так и не разобрался

    // const fetchData = async () => {
    //     const data = await fetch(`http://127.0.0.1:1337/api/Products?${query}`, {
    //         cache: 'force-cache',
    //     });
    //     // const data = await fetch(
    //     //     `http://127.0.0.1:1337/api/Products?filters[product_status][$eq]=ready`,
    //     //     {
    //     //         cache: 'force-cache',
    //     //     }
    //     // );
    //     const dataParsed = await data.json();
    //     console.log(dataParsed);
    //     return dataParsed;
    // };

    // fetchData();

    const breadcrumbArr: Breadcrumb[] = [
        {
            label: 'Каталог товаров',
            href: '/catalogue',
            active: true,
        },
    ];

    return (
        <main className='container catalogue'>
            <Breadcrumbs classname='catalogue__breadcrumbs' breadcrumbs={breadcrumbArr} />
            <div className='catalogue__title_wr'>
                <div className='catalogue__title'>Каталог</div>
                <div className='catalogue__title_descr'>
                    Выберите комплектующее, которое вам нужно
                </div>
            </div>
            <div className='catalogue__items-wr'>
                <Suspense fallback={<div>skeleton</div>}>
                    <CatalogueItem title='Матрицы' />
                </Suspense>
            </div>
        </main>
    );
}
