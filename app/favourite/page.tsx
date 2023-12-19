'use client';
import { NextPage } from 'next';
import Breadcrumbs from '../common/components/breadcrumbs/Breadcrumbs';
import { Breadcrumb } from '../common/types/types';
import FilterCards from '../common/components/filter/organisms/FilterCards/FilterCards';
import { useAppSelector } from '../Redux/store';

interface Props {}

const Page: NextPage<Props> = ({}) => {
    const breadcrumbArr: Breadcrumb[] = [
        {
            label: 'Избранное',
            href: '/favourite',
            active: true,
        },
    ];

    const favouriteData = useAppSelector((state) => state.favsReducer.products);
    console.log(favouriteData);

    return (
        <div className='container favourite-page'>
            <Breadcrumbs classname='favourite__crumbs' breadcrumbs={breadcrumbArr} />
            <p className='favourite__title'>Список избранного</p>
        </div>
    );
};

export default Page;
