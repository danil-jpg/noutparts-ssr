'use client';
import { NextPage } from 'next';
import Breadcrumbs from '../common/components/breadcrumbs/Breadcrumbs';
import { Breadcrumb } from '../common/types/types';
import './favourite.scss';
import Cards from '../common/components/card/Card';

interface Props {}

const Page: NextPage<Props> = ({}) => {
    const breadcrumbArr: Breadcrumb[] = [
        {
            label: 'Избранное',
            href: '/favourite',
            active: true,
        },
    ];

    return (
        <div className='container favourite-page'>
            <Breadcrumbs classname='favourite__crumbs' breadcrumbs={breadcrumbArr} />
            <p className='favourite__title'>Список избранного</p>
            <div className='favourite__cards-wr'>
                <Cards />
            </div>
        </div>
    );
};

export default Page;
