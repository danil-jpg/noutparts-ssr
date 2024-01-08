import Image from 'next/image';
import Breadcrumbs from '../common/components/breadcrumbs/Breadcrumbs';
import './delivery.scss';
import { Breadcrumb } from '../common/types/types';
import IconRenderer from '../common/ui/Icons/IconRenderer';
import newPoshta from '/public/img/nova-poshta.png';
import ukrPoshta from '/public/img/ukrposhta.png';
import visa from '/public/img/visa.jpg';
import mastercard from '/public/img/mastercard.jpg';
import privat from '/public/img/privat.png';

export default function Delivery() {
    const breadcrumbs: Breadcrumb[] = [
        {
            label: 'Доставка и оплата',
            href: '/delivery',
            active: true,
        },
    ];

    return (
        <div>
            <Breadcrumbs breadcrumbs={breadcrumbs} classname='container delivery__breadcrumbs' />
            <div className='delivery'>
                <div className='container'>
                    <h1 className='delivery__title'>Доставка и оплата </h1>

                    <div className='delivery__row'>
                        <ul className='delivery__list'>
                            <li className='delivery__item delivery__item_delivery '>
                                <IconRenderer id='delivery-icon' className='delivery__icon-sm' />

                                <h2 className='delivery__item-title'>Доставка</h2>
                                <p className='delivery__item-text'>Осуществляется через операторов доставки, на выбор:</p>
                                <ul className='delivery__item-list'>
                                    <li className='delivery__item-delivery delivery__item-delivery_novaposhta'>
                                        <Image src={newPoshta} width={154} height={55} alt='Нова Пошта' className='delivery__item-image' />
                                        <div className='delivery__nova-list'>
                                            <ul>
                                                <li>Наложенный платёж</li>
                                                <li>Предоплата</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className='delivery__item-delivery delivery__item-delivery_ukrposhta'>
                                        <Image src={ukrPoshta} width={163} height={44} alt='Укр Пошта' className='delivery__item-image' />
                                        <div className='delivery__item-info'>Доставка Укрпочтой осуществляется только по полной предоплате</div>
                                    </li>
                                </ul>
                                <p className='delivery__bottom-text'>* Cумма доставки по тарифам компании</p>
                            </li>

                            <li className='delivery__item delivery__item_payment'>
                                <IconRenderer id='payment-icon' className='delivery__icon-sm' />

                                <h2 className='delivery__item-title'>Оплата</h2>
                                <div className='delivery__payment-body'>
                                    Мы предлагаем два варинта оплаты заказа:
                                    <ul>
                                        <li>1. Оплата при получении</li>
                                        <li>2. Предоплата на карту</li>
                                    </ul>
                                    <div className='delivery__special-info'>
                                        <span>Доставка</span>
                                        <Image className='delivery__item-special-info_image' src={ukrPoshta} width={109} height={30} alt='urkposhta' />
                                        <span>осуществляется только по полной предоплате</span>
                                    </div>
                                </div>
                                <p className='delivery__pay-text'>Принимаем оплату в :</p>
                                <div className='delivery__pay-images'>
                                    <Image src={visa} width={54} height={36} alt='Visa' className='delivery__pay-image' />
                                    <Image src={mastercard} width={55} height={36} alt='MasterCard' className='delivery__pay-image' />
                                    <Image src={privat} width={139} height={23} alt='PrivatBank' className='delivery__pay-image' />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
