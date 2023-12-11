'use client';
import { setData } from '@/app/Redux/slice/query/query';
import { useAppDispatch, useAppSelector } from '@/app/Redux/store';
import { getFilterItemData } from '@/app/lib/data';
import { NextPage } from 'next';
import { useEffect } from 'react';
import Image from 'next/image';
import './FilterCards.scss';
import ProductTag from '@/app/common/ui/product-ui/ProductTag';
import Loading from '../../Loading/Loading';

interface Props {}

interface IMatrixCard {
    id: number;
    attributes: {
        availability: string;
        backlight_type: string;
        connector: string;
        price: number;
        name: string;
        hashrate: number;
        permission: string;
        tag: string;
        photo: {
            data: [
                {
                    attributes: {
                        url: string;
                    };
                }
            ];
        };
    };
}

const FilterCards = ({}) => {
    const selector = useAppSelector((state) => state.queryReducer.data.data) as IMatrixCard[];
    const dispatch = useAppDispatch();


    useEffect(() => {
        (async function () {
            const res = await getFilterItemData('matrices?populate=*');
            dispatch(setData(res));
        })();
    }, []);

    if (!selector) {
        return <Loading />;
    }
    return (
        <div className='card-wr'>
            {selector.map((el, index) => {
                return (
                    <div key={index} className='card'>
                        {/* <Image alt='cardimg' src={el.attributes.photo.data[0].attributes.url} fill={true} /> */}
                        <img src={el.attributes.photo.data[0].attributes.url} />
                        <p className='card__name'>{el.attributes.name}</p>
                        <div className='card__tag'>
                            <ProductTag type={el.attributes.tag}></ProductTag>
                        </div>
                        <p className='card__price'>{el.attributes.price} грн</p>
                    </div>
                );
            })}
        </div>
    );
};

export default FilterCards;
