import { Breadcrumb } from '../common/types/types';
import Breadcrumbs from '../common/ui/breadcrumbs/Breadcrumbs';
import './catalogue.scss';

export default async function Page() {
    const breadcrumbArr: Breadcrumb[] = [
        {
            label: 'Аккумуляторы',
            href: 'catalogue/1',
            active: true,
        },
        {
            label: 'Аккумуляторы (батарея) для Asus',
            href: 'catalogue/2',
            active: true,
        },
    ];

    return (
        <main className='container'>
            <Breadcrumbs breadcrumbs={breadcrumbArr} />
            <div>hey</div>
        </main>
    );
}
