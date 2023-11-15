// 'use client';
// import { useGetAllProductsQuery } from '../Redux/features/apiSlice';

import '@/icons/icons.scss';

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
        <main>
            <p>rtk-query data: {JSON.stringify(dataFromServerCall)}</p>
            <p></p>
        </main>
    );
}
