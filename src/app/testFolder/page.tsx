'use client';
import { useGetAllProductsQuery } from '../Redux/features/apiSlice';

export default function Page() {
    const { data } = useGetAllProductsQuery();

    return (
        <main>
            <p>rtk-query data: {JSON.stringify(data)}</p>
        </main>
    );
}
