'use client';
import { setData } from '@/app/Redux/slice/query/query';
import { useAppDispatch, useAppSelector } from '@/app/Redux/store';
import { getFilterItemData } from '@/app/lib/data';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import './Cards.scss';
import ProductTag from '@/app/common/ui/product-ui/ProductTag';
import Loading from '../Loading/Loading';
import { categories } from '@/app/common/types/types';
import PrimaryBtn from '@/app/common/ui/buttons/primary/PrimaryBtn';
import IconRenderer from '@/app/common/ui/Icons/IconRenderer';
import ProductAvailability from '@/app/common/ui/product-ui/ProductAvailability';
import { addProduct } from '@/app/Redux/slice/basket/basketSlice';
import { IProduct } from '@/app/common/types/types';
import { addFavProduct } from '@/app/Redux/slice/favs/favsSlice';

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

interface IBatteryCard {
    id: number;
    attributes: {
        availability: string;
        capacity: number;
        type: string;
        voltage: number;
        price: number;
        name: string;
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

interface IHddCard {
    id: number;
    attributes: {
        availability: string;
        technology: string;
        connector: string;
        memory: number;
        price: number;
        name: string;
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

interface IKeyboard {
    id: number;
    attributes: {
        availability: string;
        form_factor: string;
        layout: string;
        color: number;
        backlight: string;
        price: number;
        name: string;
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

interface IRam {
    id: number;
    attributes: {
        availability: string;
        pin_quantity: string;
        voltage: string;
        memory_mb: string;
        price: number;
        name: string;
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

interface IPowerSupply {
    id: number;
    attributes: {
        availability: string;
        voltage: string;
        amperage: string;
        power: string;
        price: number;
        name: string;
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

const FilterCards = ({ type }: { type: categories }) => {
    const selector = useAppSelector((state) => state.queryReducer.data.data);
    const favData = useAppSelector((state) => state.favsReducer.products);
    const basketData = useAppSelector((state) => state.basketReducer.products);
    const dispatch = useAppDispatch();

    useEffect(() => {
        (async function () {
            if (selector && selector.length > 0) {
                return;
            } else {
                const res = await getFilterItemData(type + '?populate=*');
                dispatch(setData(res));
            }
        })();
    }, []);

    const RenderProperFilter = (): React.ReactElement[] => {
        switch (type) {
            case 'matrices':
                return selector.map((el: IMatrixCard, index) => {
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
                                <ProductAvailability type={el.attributes.availability as 'available' | 'ending' | 'outOfStock'}></ProductAvailability>
                            </div>
                            <div
                                className='card__like-sign'
                                onClick={() => {
                                    dispatch(
                                        addFavProduct({
                                            ...el.attributes,
                                            photo_url: el.attributes.photo.data[0].attributes.url,
                                            tag: el.attributes.tag,
                                            discount: 0,
                                            category: 'matrices',
                                            id: el.id,
                                        })
                                    );
                                }}>
                                <IconRenderer
                                    id='heart-icon'
                                    className={`heart-icon ${
                                        favData.find((innerEl) => innerEl.id === el.id && innerEl.name === el.attributes.name) ? 'active' : ''
                                    }`}
                                />
                            </div>
                            <div className='card__data_right'>
                                <p className='card__price'>{el.attributes.price} грн</p>
                                {basketData.find((innerEl) => innerEl.id === el.id && innerEl.name === el.attributes.name) ? (
                                    <PrimaryBtn
                                        onClick={() => {
                                            dispatch(
                                                addProduct({
                                                    photo_url: el.attributes.photo.data[0].attributes.url,
                                                    price: el.attributes.price,
                                                    name: el.attributes.name,
                                                    id: el.id,
                                                    category: 'matrices',
                                                })
                                            );
                                        }}
                                        text='В корзине'
                                        type='basket'
                                        icon={<IconRenderer id='basket-icon' />}></PrimaryBtn>
                                ) : (
                                    <PrimaryBtn
                                        onClick={() => {
                                            dispatch(
                                                addProduct({
                                                    photo_url: el.attributes.photo.data[0].attributes.url,
                                                    price: el.attributes.price,
                                                    name: el.attributes.name,
                                                    id: el.id,
                                                    category: 'matrices',
                                                })
                                            );
                                        }}
                                        text='Купить'
                                        type='basket'
                                        icon={<IconRenderer id='basket-icon' />}></PrimaryBtn>
                                )}
                            </div>
                        </div>
                    );
                });
            case 'batteries':
                return selector.map((el: IBatteryCard, index) => {
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
                                        Ёмкость: <span>{el.attributes.capacity}</span>
                                    </p>
                                </div>
                                <div className='card__etc-params'>
                                    <p>
                                        Вольтаж: <span>{el.attributes.voltage}</span>
                                    </p>
                                </div>
                                <div className='card__etc-params'>
                                    <p>
                                        Тип: <span>{el.attributes.type}</span>
                                    </p>
                                </div>
                            </div>
                            <div className='card__availability'>
                                <ProductAvailability type={el.attributes.availability as 'available' | 'ending' | 'outOfStock'}></ProductAvailability>
                            </div>
                            <div
                                className='card__like-sign'
                                onClick={() => {
                                    dispatch(
                                        addFavProduct({
                                            ...el.attributes,
                                            photo_url: el.attributes.photo.data[0].attributes.url,
                                            tag: el.attributes.tag,
                                            discount: 0,
                                            category: 'batteries',
                                            id: el.id,
                                        })
                                    );
                                }}>
                                <IconRenderer
                                    id='heart-icon'
                                    className={`heart-icon ${
                                        favData.find((innerEl) => innerEl.id === el.id && innerEl.name === el.attributes.name) ? 'active' : ''
                                    }`}
                                />
                            </div>
                            <div className='card__data_right'>
                                <p className='card__price'>{el.attributes.price} грн</p>
                                {basketData.find((innerEl) => innerEl.id === el.id && innerEl.name === el.attributes.name) ? (
                                    <PrimaryBtn
                                        onClick={() => {
                                            dispatch(
                                                addProduct({
                                                    photo_url: el.attributes.photo.data[0].attributes.url,
                                                    price: el.attributes.price,
                                                    name: el.attributes.name,
                                                    id: el.id,
                                                    category: 'batteries',
                                                })
                                            );
                                        }}
                                        text='В корзине'
                                        type='basket'
                                        icon={<IconRenderer id='basket-icon' />}></PrimaryBtn>
                                ) : (
                                    <PrimaryBtn
                                        onClick={() => {
                                            dispatch(
                                                addProduct({
                                                    photo_url: el.attributes.photo.data[0].attributes.url,
                                                    price: el.attributes.price,
                                                    name: el.attributes.name,
                                                    id: el.id,
                                                    category: 'batteries',
                                                })
                                            );
                                        }}
                                        text='Купить'
                                        type='basket'
                                        icon={<IconRenderer id='basket-icon' />}></PrimaryBtn>
                                )}
                            </div>
                        </div>
                    );
                });
            case 'hdds':
                return selector.map((el: IHddCard, index) => {
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
                                        Объем памяти: <span>{el.attributes.memory}</span>
                                    </p>
                                </div>
                                <div className='card__etc-params'>
                                    <p>
                                        Разьем подключения: <span>{el.attributes.connector}</span>
                                    </p>
                                </div>
                                <div className='card__etc-params'>
                                    <p>
                                        Технология: <span>{el.attributes.technology}</span>
                                    </p>
                                </div>
                            </div>
                            <div className='card__availability'>
                                <ProductAvailability type={el.attributes.availability as 'available' | 'ending' | 'outOfStock'}></ProductAvailability>
                            </div>
                            <div
                                className='card__like-sign'
                                onClick={() => {
                                    dispatch(
                                        addFavProduct({
                                            ...el.attributes,
                                            photo_url: el.attributes.photo.data[0].attributes.url,
                                            tag: el.attributes.tag,
                                            discount: 0,
                                            category: 'matrices',
                                            id: el.id,
                                        })
                                    );
                                }}>
                                <IconRenderer
                                    id='heart-icon'
                                    className={`heart-icon ${
                                        favData.find((innerEl) => innerEl.id === el.id && innerEl.name === el.attributes.name) ? 'active' : ''
                                    }`}
                                />
                            </div>
                            <div className='card__data_right'>
                                <p className='card__price'>{el.attributes.price} грн</p>
                                {basketData.find((innerEl) => innerEl.id === el.id && innerEl.name === el.attributes.name) ? (
                                    <PrimaryBtn
                                        onClick={() => {
                                            dispatch(
                                                addProduct({
                                                    photo_url: el.attributes.photo.data[0].attributes.url,
                                                    price: el.attributes.price,
                                                    name: el.attributes.name,
                                                    id: el.id,
                                                    category: 'hdds',
                                                })
                                            );
                                        }}
                                        text='В корзине'
                                        type='basket'
                                        icon={<IconRenderer id='basket-icon' />}></PrimaryBtn>
                                ) : (
                                    <PrimaryBtn
                                        onClick={() => {
                                            dispatch(
                                                addProduct({
                                                    photo_url: el.attributes.photo.data[0].attributes.url,
                                                    price: el.attributes.price,
                                                    name: el.attributes.name,
                                                    id: el.id,
                                                    category: 'hdds',
                                                })
                                            );
                                        }}
                                        text='Купить'
                                        type='basket'
                                        icon={<IconRenderer id='basket-icon' />}></PrimaryBtn>
                                )}
                            </div>
                        </div>
                    );
                });
            case 'keyboards':
                return selector.map((el: IKeyboard, index) => {
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
                                        Форм-фактор: <span>{el.attributes.form_factor}</span>
                                    </p>
                                </div>
                                <div className='card__etc-params'>
                                    <p>
                                        Раскладка: <span>{el.attributes.layout}</span>
                                    </p>
                                </div>
                                <div className='card__etc-params'>
                                    <p>
                                        Подсветка: <span>{el.attributes.backlight}</span>
                                    </p>
                                </div>
                            </div>
                            <div className='card__availability'>
                                <ProductAvailability type={el.attributes.availability as 'available' | 'ending' | 'outOfStock'}></ProductAvailability>
                            </div>
                            <div
                                className='card__like-sign'
                                onClick={() => {
                                    dispatch(
                                        addFavProduct({
                                            ...el.attributes,
                                            photo_url: el.attributes.photo.data[0].attributes.url,
                                            tag: el.attributes.tag,
                                            discount: 0,
                                            category: 'keyboards',
                                            id: el.id,
                                        })
                                    );
                                }}>
                                <IconRenderer
                                    id='heart-icon'
                                    className={`heart-icon ${
                                        favData.find((innerEl) => innerEl.id === el.id && innerEl.name === el.attributes.name) ? 'active' : ''
                                    }`}
                                />
                            </div>
                            <div className='card__data_right'>
                                <p className='card__price'>{el.attributes.price} грн</p>
                                {basketData.find((innerEl) => innerEl.id === el.id && innerEl.name === el.attributes.name) ? (
                                    <PrimaryBtn
                                        onClick={() => {
                                            dispatch(
                                                addProduct({
                                                    photo_url: el.attributes.photo.data[0].attributes.url,
                                                    price: el.attributes.price,
                                                    name: el.attributes.name,
                                                    id: el.id,
                                                    category: 'keyboards',
                                                })
                                            );
                                        }}
                                        text='В корзине'
                                        type='basket'
                                        icon={<IconRenderer id='basket-icon' />}></PrimaryBtn>
                                ) : (
                                    <PrimaryBtn
                                        onClick={() => {
                                            dispatch(
                                                addProduct({
                                                    photo_url: el.attributes.photo.data[0].attributes.url,
                                                    price: el.attributes.price,
                                                    name: el.attributes.name,
                                                    id: el.id,
                                                    category: 'keyboards',
                                                })
                                            );
                                        }}
                                        text='Купить'
                                        type='basket'
                                        icon={<IconRenderer id='basket-icon' />}></PrimaryBtn>
                                )}
                            </div>
                        </div>
                    );
                });
            case 'rams':
                return selector.map((el: IRam, index) => {
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
                                        Озу: <span>{el.attributes.memory_mb}</span>
                                    </p>
                                </div>
                                <div className='card__etc-params'>
                                    <p>
                                        Кол-во контактов: <span>{el.attributes.pin_quantity}</span>
                                    </p>
                                </div>
                                <div className='card__etc-params'>
                                    <p>
                                        Напряжение: <span>{el.attributes.voltage}</span>
                                    </p>
                                </div>
                            </div>
                            <div className='card__availability'>
                                <ProductAvailability type={el.attributes.availability as 'available' | 'ending' | 'outOfStock'}></ProductAvailability>
                            </div>
                            <div
                                className='card__like-sign'
                                onClick={() => {
                                    dispatch(
                                        addFavProduct({
                                            ...el.attributes,
                                            photo_url: el.attributes.photo.data[0].attributes.url,
                                            tag: el.attributes.tag,
                                            discount: 0,
                                            category: 'rams',
                                            id: el.id,
                                        })
                                    );
                                }}>
                                <IconRenderer
                                    id='heart-icon'
                                    className={`heart-icon ${
                                        favData.find((innerEl) => innerEl.id === el.id && innerEl.name === el.attributes.name) ? 'active' : ''
                                    }`}
                                />
                            </div>
                            <div className='card__data_right'>
                                <p className='card__price'>{el.attributes.price} грн</p>
                                {basketData.find((innerEl) => innerEl.id === el.id && innerEl.name === el.attributes.name) ? (
                                    <PrimaryBtn
                                        onClick={() => {
                                            dispatch(
                                                addProduct({
                                                    photo_url: el.attributes.photo.data[0].attributes.url,
                                                    price: el.attributes.price,
                                                    name: el.attributes.name,
                                                    id: el.id,
                                                    category: 'rams',
                                                })
                                            );
                                        }}
                                        text='В корзине'
                                        type='basket'
                                        icon={<IconRenderer id='basket-icon' />}></PrimaryBtn>
                                ) : (
                                    <PrimaryBtn
                                        onClick={() => {
                                            dispatch(
                                                addProduct({
                                                    photo_url: el.attributes.photo.data[0].attributes.url,
                                                    price: el.attributes.price,
                                                    name: el.attributes.name,
                                                    id: el.id,
                                                    category: 'rams',
                                                })
                                            );
                                        }}
                                        text='Купить'
                                        type='basket'
                                        icon={<IconRenderer id='basket-icon' />}></PrimaryBtn>
                                )}
                            </div>
                        </div>
                    );
                });
            case 'power-Supplies':
                return selector.map((el: IPowerSupply, index) => {
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
                                        Напряжение: <span>{el.attributes.amperage}</span>
                                    </p>
                                </div>
                                <div className='card__etc-params'>
                                    <p>
                                        Ёмкость: <span>{el.attributes.power}</span>
                                    </p>
                                </div>
                                <div className='card__etc-params'>
                                    <p>
                                        Напряжение: <span>{el.attributes.voltage}</span>
                                    </p>
                                </div>
                            </div>
                            <div className='card__availability'>
                                <ProductAvailability type={el.attributes.availability as 'available' | 'ending' | 'outOfStock'}></ProductAvailability>
                            </div>
                            <div
                                className='card__like-sign'
                                onClick={() => {
                                    dispatch(
                                        addFavProduct({
                                            ...el.attributes,
                                            photo_url: el.attributes.photo.data[0].attributes.url,
                                            tag: el.attributes.tag,
                                            discount: 0,
                                            category: 'power-Supplies',
                                            id: el.id,
                                        })
                                    );
                                }}>
                                <IconRenderer
                                    id='heart-icon'
                                    className={`heart-icon ${
                                        favData.find((innerEl) => innerEl.id === el.id && innerEl.name === el.attributes.name) ? 'active' : ''
                                    }`}
                                />
                            </div>
                            <div className='card__data_right'>
                                <p className='card__price'>{el.attributes.price} грн</p>
                                {basketData.find((innerEl) => innerEl.id === el.id && innerEl.name === el.attributes.name) ? (
                                    <PrimaryBtn
                                        onClick={() => {
                                            dispatch(
                                                addProduct({
                                                    photo_url: el.attributes.photo.data[0].attributes.url,
                                                    price: el.attributes.price,
                                                    name: el.attributes.name,
                                                    id: el.id,
                                                    category: 'power-Supplies',
                                                })
                                            );
                                        }}
                                        text='В корзине'
                                        type='basket'
                                        icon={<IconRenderer id='basket-icon' />}></PrimaryBtn>
                                ) : (
                                    <PrimaryBtn
                                        onClick={() => {
                                            dispatch(
                                                addProduct({
                                                    photo_url: el.attributes.photo.data[0].attributes.url,
                                                    price: el.attributes.price,
                                                    name: el.attributes.name,
                                                    id: el.id,
                                                    category: 'power-Supplies',
                                                })
                                            );
                                        }}
                                        text='Купить'
                                        type='basket'
                                        icon={<IconRenderer id='basket-icon' />}></PrimaryBtn>
                                )}
                            </div>
                        </div>
                    );
                });
            default:
                return [];
        }
    };

    if (!selector) {
        return <Loading />;
    }
    return (
        <div className='card-wr'>
            <RenderProperFilter />
        </div>
    );
};

export default FilterCards;
