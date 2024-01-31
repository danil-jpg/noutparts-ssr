'use client';
import { useAppDispatch, useAppSelector } from '@/app/Redux/store';
import Image from 'next/image';
import './Cards.scss';
import ProductTag from '@/app/common/ui/product-ui/ProductTag';
import { categories } from '@/app/common/types/types';
import PrimaryBtn from '@/app/common/ui/buttons/primary/PrimaryBtn';
import IconRenderer from '@/app/common/ui/Icons/IconRenderer';
import ProductAvailability from '@/app/common/ui/product-ui/ProductAvailability';
import { addFavProduct } from '@/app/Redux/slice/favs/favsSlice';
import emptyImg from '/public/img/empty-img.png';
import emptyImgMob from '/public/img/empty-mob.png';
import { addProduct } from '@/app/Redux/slice/basket/basketSlice';

const Cards = () => {
    const products = useAppSelector((state) => state.favsReducer.products);
    const dispatch = useAppDispatch();

    const basketData = useAppSelector((state) => state.basketReducer.products);

    const onDeleteClick = (product: { id: number; category: categories }) => {
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
                            <ProductTag type={el.tag as 'discount' | 'new' | 'salesHit'}></ProductTag>
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
                                    category: el.category,
                                });
                            }}>
                            <p className='card__delete_text'>Удалить</p>
                        </div>

                        <div className='card__data_right'>
                            <p className='card__price'>{el.price} грн</p>
                            {basketData.find((innerEl) => innerEl.id === el.id && innerEl.name === el.name) ? (
                                <PrimaryBtn
                                    onClick={() => {
                                        dispatch(
                                            addProduct({
                                                photo_url: el.photo_url,
                                                price: el.price,
                                                name: el.name,
                                                id: el.id,
                                                category: el.category,
                                            })
                                        );
                                    }}
                                    className='inBasket'
                                    text='В корзине'
                                    type='basket-btn'
                                    icon={<IconRenderer id='basket-icon' />}></PrimaryBtn>
                            ) : (
                                <PrimaryBtn
                                    onClick={() => {
                                        dispatch(
                                            addProduct({
                                                photo_url: el.photo_url,
                                                price: el.price,
                                                name: el.name,
                                                id: el.id,
                                                category: el.category,
                                            })
                                        );
                                    }}
                                    text='В корзину'
                                    type='basket-btn'
                                    icon={<IconRenderer id='basket-icon' />}></PrimaryBtn>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Cards;
