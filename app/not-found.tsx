import Link from 'next/link';
import './not-found.scss';
import { Primary } from './common/components/Spinner/Spinner.stories';
import PrimaryBtn from './common/ui/buttons/primary/PrimaryBtn';

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
                        <PrimaryBtn type='large'>
                            <Link href={'/'} className='not-found__btn'>
                                Вернуться на главную
                            </Link>
                        </PrimaryBtn>

                        <ul className='not-found__list'>
                            <ul>
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
                        </ul>
                        {/* <div className='not-found__support'>
                            <Image src='/icons/warning.svg' width={23} height={20} alt='icon' className='not-found__warn-icon' />
                            <button className='not-found__supp-link'>{data.support}</button>
                            <Image src='/icons/quarnuts.png' width={89} height={23} alt='Quarnuts' className='not-found__quarn-icon' />
                        </div> */}
                    </div>
                    {/* <div className='not-found__error-num'>
                        <Image src='/icons/404.svg' width={631} height={276} alt='404' className='not-found__error-num-icon' />
                    </div> */}
                </div>
            </div>
        </div>
    );
}
