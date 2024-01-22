import { Breadcrumb } from '../common/types/types';
import Breadcrumbs from '../common/components/breadcrumbs/Breadcrumbs';
import './catalogue.scss';
import CatalogueItem from '../common/components/CatalogueItem/CatalogueItem';
import CatalogueItemWr from '../common/components/CatalogueItem/CatalogueItemWr';

export default function Page() {
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
                <div className='catalogue__title_descr'>Выберите комплектующее, которое вам нужно</div>
            </div>
            <div className='catalogue__items-wr'>
                <CatalogueItemWr></CatalogueItemWr>
            </div>
        </main>
    );
}
