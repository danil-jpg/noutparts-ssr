import { Breadcrumb } from '../common/types/types';
import Breadcrumbs from '../common/components/breadcrumbs/Breadcrumbs';
import './catalogue.scss';
import CatalogueItem from '../common/components/CatalogueItem/CatalogueItem';

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
                <CatalogueItem text='Матрицы' image='/img/catalogue/matrix.png' query='matrices?fields[0]=brand' mobImage='/img/catalogue/matrix_mob.png' />
                <CatalogueItem
                    text='Аккумуляторы'
                    image='/img/catalogue/battery.png'
                    query='batteries?fields[0]=brand'
                    mobImage='/img/catalogue/battery_mob.png'
                />
                <CatalogueItem text='Жесткие диски' image='/img/catalogue/hdd.png' query='hdds?fields[0]=brand' mobImage='/img/catalogue/hdd_mob.png' />
                <CatalogueItem
                    text='Клавиатуры'
                    image='/img/catalogue/keyboard.png'
                    query='keyboards?fields[0]=brand'
                    mobImage='/img/catalogue/keyboard_mob.png'
                />
                <CatalogueItem text='Оперативная память' image='/img/catalogue/ram.png' query='rams?fields[0]=brand' mobImage='/img/catalogue/ram_mob.png' />
                <CatalogueItem
                    text='Блок питания'
                    image='/img/catalogue/power.png'
                    query='power-Supplies?fields[0]=brand'
                    mobImage='/img/catalogue/power.png'
                />
            </div>
        </main>
    );
}
