'use client';
import { setData } from '@/app/Redux/slice/query/query';
import { useAppDispatch, useAppSelector } from '@/app/Redux/store';
import { fetchDataFromServer, getFilterItemData } from '@/app/lib/data';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './Cards.scss';
import ProductTag from '@/app/common/ui/product-ui/ProductTag';
import Loading from '../Loading/Loading';
import { IFavsData, categories } from '@/app/common/types/types';
import PrimaryBtn from '@/app/common/ui/buttons/primary/PrimaryBtn';
import IconRenderer from '@/app/common/ui/Icons/IconRenderer';
import ProductAvailability from '@/app/common/ui/product-ui/ProductAvailability';
import { ICard } from '@/app/common/types/types';
import { addFavProduct } from '@/app/Redux/slice/favs/favsSlice';
import { IProduct } from '@/app/common/types/types';
import emptyImg from '/public/img/empty-img.png';
import emptyImgMob from '/public/img/empty-mob.png';

const Cards = () => {
    // const [favData, setFavData] = useState<ICard[]>([]);

    const products = useAppSelector((state) => state.favsReducer.products);
    const dispatch = useAppDispatch();

    // useEffect(() => {
    //     console.log(favData);
    // }, [favData]);

    const onDeleteClick = (product: { id: number }) => {
        dispatch(addFavProduct(product));
    };

    if (!products.length) {
        return (
            <div className='card-wr'>
                <Image src={emptyImg} width={474} height={474} alt='empty-sign' className='card__empty' />
                <Image src={emptyImgMob} width={222} height={222} alt='empty-sign' className='card__empty_mob' />
            </div>
        );
    }
    return (
        <div className='card-wr'>
            {products.map((el, index) => {
                return (
                    <div key={index} className='card'>
                        <div className='card__tag'>
                            <ProductTag type={el.discount as 'discount' | 'new' | 'salesHit'}></ProductTag>
                        </div>
                        <Image alt='cardimg' src={el.photo_url} height={152} width={152} />
                        <div className='card__data_center'>
                            <p className='card__name'>{el.name}</p>
                        </div>
                        <div className='card__availability'>
                            <ProductAvailability type={el.availability as 'available' | 'ending' | 'outOfStock'}></ProductAvailability>
                        </div>
                        <div
                            className='card__like-sign card__delete'
                            onClick={() => {
                                onDeleteClick({
                                    id: el.id,
                                });
                            }}>
                            <p className='card__delete_text'>Удалить</p>
                        </div>

                        <div className='card__data_right'>
                            <p className='card__price'>{el.price} грн</p>
                            <PrimaryBtn text='В корзину' type='basket' icon={<IconRenderer id='basket-icon' />}></PrimaryBtn>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Cards;
