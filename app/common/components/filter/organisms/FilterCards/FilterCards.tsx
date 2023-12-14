'use client';
import { setData } from '@/app/Redux/slice/query/query';
import { useAppDispatch, useAppSelector } from '@/app/Redux/store';
import { getFilterItemData } from '@/app/lib/data';
import { NextPage } from 'next';
import { useEffect } from 'react';
import Image from 'next/image';
import './FilterCards.scss';
import ProductTag from '@/app/common/ui/product-ui/ProductTag';
import Loading from '../../../Loading/Loading';
import { categories } from '@/app/common/types/types';
import PrimaryBtn from '@/app/common/ui/buttons/primary/PrimaryBtn';
import IconRenderer from '@/app/common/ui/Icons/IconRenderer';
import ProductAvailability from '@/app/common/ui/product-ui/ProductAvailability';

interface Props {}

interface IMatrixCard {
    id: number;
    attributes: {
        availability: string;
        backlight_type: string;
        connector: string;
        diagonale: number;
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

const FilterCards = ({ type = 'matrices' }: { type: categories }) => {
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
                        <div className='card__tag'>
                            <ProductTag type={el.attributes.tag as 'discount' | 'new' | 'salesHit'}></ProductTag>
                        </div>
                        <Image alt='cardimg' src={el.attributes.photo.data[0].attributes.url} height={152} width={152} />
                        <div className='card__data_center'>
                            <p className='card__name'>{el.attributes.name}</p>
                            <div className='card__etc-params'>
                                <p>
                                    Диагональ: <span>{el.attributes.diagonale}</span>
                                </p>
                            </div>
                            <div className='card__etc-params'>
                                <p>
                                    Тип крепления: <span>{el.attributes.connector}</span>
                                </p>
                            </div>
                            <div className='card__etc-params'>
                                <p>
                                    Разрешение: <span>{el.attributes.permission}</span>
                                </p>
                            </div>
                        </div>
                        <div className='card__availability'>
                            <ProductAvailability type={el.attributes.availability as 'available' | 'ending' | 'outOfStock'}>
                                {el.attributes.availability}
                            </ProductAvailability>
                        </div>
                        <div className='card__like-sign'>
                            <IconRenderer id='heart-icon' className='heart-icon' />
                        </div>
                        <div className='card__data_right'>
                            <p className='card__price'>{el.attributes.price} грн</p>
                            <PrimaryBtn text='Купить' type='basket' icon={<IconRenderer id='basket-icon' />}></PrimaryBtn>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default FilterCards;
