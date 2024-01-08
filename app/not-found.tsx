import Link from 'next/link';
import './not-found.scss';
import PrimaryBtn from './common/ui/buttons/primary/PrimaryBtn';
import Image from 'next/image';
import notFound from '/public/img/404.png';
import warningImg from '/public/img/warning.png';

export default function NotFound() {
    return (
        <div className='e404'>
            <div className='container'>
                <div className='e404__row'>
                    <div className='e404__body'>
                        <h1 className='e404__title'>Упс! Что-то пошло не так! </h1>
                        <div className='e404__text-wrap'>
                            <h2 className='e404__subtitle'>
                                Страница которую вы запрашиваете не найдена. Возможно она была удалена или вы набрали неверный адрес.
                            </h2>
                            {/* <p className='e404__text'>{data.text}</p> */}
                        </div>
                        <div className='e404__btn'>
                            <PrimaryBtn
                                text={
                                    <Link href={'/'} className=''>
                                        Вернуться на главную
                                    </Link>
                                }
                                type='large'></PrimaryBtn>
                        </div>

                        <ul className='e404__list'>
                            <li className='e404__item'>
                                <Link href={'/'} className='e404__link'>
                                    Каталог
                                </Link>
                            </li>
                            <li className='e404__item'>
                                <Link href={'/'} className='e404__link'>
                                    Доставка и оплата
                                </Link>
                            </li>
                            <li className='e404__item'>
                                <Link href={'/'} className='e404__link'>
                                    Гарантии
                                </Link>
                            </li>
                            <li className='e404__item'>
                                <Link href={'/'} className='e404__link'>
                                    Контакты
                                </Link>
                            </li>
                        </ul>
                        <div className='e404__support'>
                            <Image src={warningImg} width={23} height={20} alt='icon' className='e404__warn-icon' />
                            <Link href={'/'} className='e404__supp-link'>
                                Служба поддержки
                            </Link>
                        </div>
                    </div>
                    <div className='e404__error-num'>
                        <Image src={notFound} width={631} height={276} alt='e404' className='e404__error-num-icon' />
                    </div>
                </div>
            </div>
        </div>
    );
}
