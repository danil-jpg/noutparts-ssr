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
import { removeFavProduct } from '@/app/Redux/slice/favs/favsSlice';
import { addFavProduct } from '@/app/Redux/slice/favs/favsSlice';
import { IProduct } from '@/app/common/types/types';
import emptyImg from '/public/img/empty-img.png';
import emptyImgMob from '/public/img/empty-mob.png';

const Cards = () => {
    const [favData, setFavData] = useState<ICard[]>([]);

    const selectorRow = useAppSelector((state) => state.favsReducer.products);
    const dispatch = useAppDispatch();

    useEffect(() => {
        (async function () {
            if (!selectorRow || selectorRow.length < 1) {
                return;
            } else {
                selectorRow.forEach(async (el) => {
                    // if (isMounted) {
                    const req = (await getFilterItemData(`${el.category}/${el.id}?populate=*`)) as ICard;

                    setFavData((prev) => [...prev, req]);
                    // setFavData(['1']);
                    // }
                });
            }
        })();
    }, [selectorRow]);

    useEffect(() => {
        console.log(favData);
    }, [favData]);

    const onDeleteClick = (product: IProduct) => {
        const objToDel = { name: product.name, id: product.id, category: product.category };
        dispatch(addFavProduct(objToDel));

        setFavData((prev) => {
            const existingIndex = prev.findIndex((product) => product.data.id === objToDel.id);
            prev.splice(existingIndex, 1);
            return prev;
        });
    };

    if (!favData.length) {
        return (
            <div className='card-wr'>
                <Image src={emptyImg} width={474} height={474} alt='empty-sign' className='card__empty' />
                <Image src={emptyImgMob} width={222} height={222} alt='empty-sign' className='card__empty_mob' />
            </div>
        );
    }
    return (
        <div className='card-wr'>
            {favData.map((el, index) => {
                return (
                    <div key={index} className='card'>
                        <div className='card__tag'>
                            <ProductTag type={el.data.attributes.tag as 'discount' | 'new' | 'salesHit'}></ProductTag>
                        </div>
                        <Image alt='cardimg' src={el.data.attributes.photo.data[0].attributes.url} height={152} width={152} />
                        <div className='card__data_center'>
                            <p className='card__name'>{el.data.attributes.name}</p>
                        </div>
                        <div className='card__availability'>
                            <ProductAvailability type={el.data.attributes.availability as 'available' | 'ending' | 'outOfStock'}>
                                {el.data.attributes.availability}
                            </ProductAvailability>
                        </div>
                        <div
                            className='card__like-sign card__delete'
                            onClick={() => {
                                onDeleteClick({
                                    id: el.data.id,
                                    name: el.data.attributes.name,
                                    category: el.data.attributes.category,
                                    price: el.data.attributes.price,
                                    discount: 0,
                                    photo_url: el.data.attributes.photo.data[0].attributes.url,
                                });
                            }}>
                            <p className='card__delete_text'>Удалить</p>
                        </div>

                        <div className='card__data_right'>
                            <p className='card__price'>{el.data.attributes.price} грн</p>
                            <PrimaryBtn text='В корзину' type='basket' icon={<IconRenderer id='basket-icon' />}></PrimaryBtn>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Cards;
