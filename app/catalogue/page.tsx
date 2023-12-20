import { Breadcrumb } from '../common/types/types';
import Breadcrumbs from '../common/components/breadcrumbs/Breadcrumbs';
import './catalogue.scss';
import CatalogueItem from '../common/components/CatalogueItem/catalogueItem';

export default function Page() {
    const breadcrumbArr: Breadcrumb[] = [
        {
            label: 'Каталог товаров',
            href: '/catalogue',
            active: true,
        },
    ];
    // if (!) {
    //     return <Loading />;
    // }
    return (
        <main className='container catalogue'>
            <Breadcrumbs classname='catalogue__breadcrumbs' breadcrumbs={breadcrumbArr} />
            <div className='catalogue__title_wr'>
                <div className='catalogue__title'>Каталог</div>
                <div className='catalogue__title_descr'>Выберите комплектующее, которое вам нужно</div>
            </div>
            <div className='catalogue__items-wr'>
                {/* @ts-expect-error Server Component */}
                <CatalogueItem image='/img/catalogue/matrix.png' query='matrices?fields[0]=brand' mobImage='/img/catalogue/matrix_mob.png' />
                <CatalogueItem image='/img/catalogue/battery.png' query='batteries?fields[0]=brand' mobImage='/img/catalogue/battery_mob.png' />
                <CatalogueItem image='/img/catalogue/hdd.png' query='hdds?fields[0]=brand' mobImage='/img/catalogue/hdd_mob.png' />
                <CatalogueItem image='/img/catalogue/keyboard.png' query='keyboards?fields[0]=brand' mobImage='/img/catalogue/keyboard_mob.png' />
                <CatalogueItem image='/img/catalogue/ram.png' query='rams?fields[0]=brand' mobImage='/img/catalogue/ram_mob.png' />
                <CatalogueItem image='/img/catalogue/power_unit.png' query='Power-Supplies?fields[0]=brand' mobImage='/img/catalogue/power_unit.png' />
            </div>
        </main>
    );
}
