// 'use client';
// import { useGetAllProductsQuery } from '../Redux/features/apiSlice';

// import '@/icons/icons.scss';
import './testFolder.scss';
import PrimaryBtn from '../common/ui/buttons/primary/PrimaryBtn';
import IconRenderer from '../common/ui/Icons/IconRenderer';
import Select from '../common/ui/form/select/Select';
import FilterComp from './filters/filtersComp';
// Как на клиенте получать данные - понятно,но как на сервере - загадка,
// тк с реакт квери - ты импортируешь хуки и при их помощи отправляешь запрос,но хуки в нексте доступны только в клиентских компонентах

async function getData() {
    const res = await fetch('https://dummyjson.com/products');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function Page() {
    // const { data } = useGetAllProductsQuery();
    const dataFromServerCall = await getData();
    return (
        <main className='testFolderMain'>
            {/* <p>rtk-query data: {JSON.stringify(dataFromServerCall)}</p> */}
            <PrimaryBtn type='default' text='Перейти в каталог' />
            <FilterComp />

            <PrimaryBtn type='buying' text='Купить' icon={<IconRenderer id='basket' />} />
            {/* <IconRenderer id='successSign' /> */}
        </main>
    );
}
