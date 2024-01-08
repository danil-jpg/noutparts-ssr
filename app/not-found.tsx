import Link from 'next/link';
import './not-found.scss';
import PrimaryBtn from './common/ui/buttons/primary/PrimaryBtn';
import Image from 'next/image';
import notFound from '/public/img/404.png';
import warningImg from '/public/img/warning.png';

export default function NotFound() {
    return (
        <div className='not-found'>
            <div className='container'>
                <div className='not-found__row'>
                    <div className='not-found__body'>
                        <h1 className='not-found__title'>Упс! Что-то пошло не так! </h1>
                        <div className='not-found__text-wrap'>
                            <h2 className='not-found__subtitle'>
                                Страница которую вы запрашиваете не найдена. Возможно она была удалена или вы набрали неверный адрес.
                            </h2>
                            {/* <p className='not-found__text'>{data.text}</p> */}
                        </div>
                        <div className='not-found__btn'>
                            <PrimaryBtn
                                text={
                                    <Link href={'/'} className=''>
                                        Вернуться на главную
                                    </Link>
                                }
                                type='large'></PrimaryBtn>
                        </div>

                        <ul className='not-found__list'>
                            <li className='not-found__item'>
                                <Link href={'/'} className='not-found__link'>
                                    Каталог
                                </Link>
                            </li>
                            <li className='not-found__item'>
                                <Link href={'/'} className='not-found__link'>
                                    Доставка и оплата
                                </Link>
                            </li>
                            <li className='not-found__item'>
                                <Link href={'/'} className='not-found__link'>
                                    Гарантии
                                </Link>
                            </li>
                            <li className='not-found__item'>
                                <Link href={'/'} className='not-found__link'>
                                    Контакты
                                </Link>
                            </li>
                        </ul>
                        <div className='not-found__support'>
                            <Image src={warningImg} width={23} height={20} alt='icon' className='not-found__warn-icon' />
                            <Link href={'/'} className='not-found__supp-link'>
                                Служба поддержки
                            </Link>
                        </div>
                    </div>
                    <div className='not-found__error-num'>
                        <Image src={notFound} width={631} height={276} alt='404' className='not-found__error-num-icon' />
                    </div>
                </div>
            </div>
        </div>
    );
}
