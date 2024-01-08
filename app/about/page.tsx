import Breadcrumbs from '../common/components/breadcrumbs/Breadcrumbs';
import './about.scss';
import { Breadcrumb } from '../common/types/types';
import IconRenderer from '../common/ui/Icons/IconRenderer';

export default function About() {
    const breadcrumbs: Breadcrumb[] = [{ label: 'О нас', href: '/about', active: true }];

    return (
        <div className='about'>
            <Breadcrumbs breadcrumbs={breadcrumbs} classname='about__breadcrumbs container' />
            <div className='about__head'>
                <div className='container'>
                    <div className='about__head-row'>
                        <h1 className='about__head-title'>
                            Интернет-магазин <span>Noutparts</span>
                        </h1>
                        <p className='about__head-text'>
                            Это один из крупнейший в Украине магазин для поиска и выбора комплектующих для ноутбуков всех популярных брендов. С помощью нашего
                            сайта вы можете без особых профессиональных навыков выбрать себе необходимые комплектующие по модели вашего ноутбука
                        </p>
                    </div>
                </div>
            </div>
            <div className='main-about'>
                <div className='container'>
                    <ul className='main-about__list'>
                        <li className='main-about__item'>
                            <IconRenderer id='command' className='main-about__image' />
                            <h2 className='main-about__title'>Мы команда профессионалов</h2>
                            <div className='main-about__text'>
                                Которые любят и ценят свою работу.  Мы энергичны, молоды и всегда развиваемся. Наши специалисты готовы решить Ваши проблемы,
                                связанные с подбором комплектующих, профессионально и быстро! Работа, направленная на то, чтобы заработать и сохранить доверие
                                наших клиентов, - это главный двигатель подхода нашей компании с первого дня.
                            </div>
                        </li>
                        <li className='main-about__item'>
                            <IconRenderer id='dog' className='main-about__image' />
                            <h2 className='main-about__title'>Цель магазина</h2>
                            <div className='main-about__text'>
                                Обеспечить посетителям максимально удобный сайт для выбора и приобретения запчастей для ноутбука, а так же создать максимально
                                широкий ассортимент для выбора комплектующих.Мы стараемся создать высокий сервис и максимально облегчить покупку комплектующих
                                для ноутбука предоставив лучший выбор и необходимую информацию о товарах.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='footer-about'>
                <div className='container'>
                    <h3 className='footer-about__title'>
                        Работая с нами, <span>Вы получаете:</span>
                    </h3>
                    <ul className='footer-about__list'>
                        <li className='footer-about__item'>
                            <IconRenderer id='service' className='footer-about__icon' />
                            <h4 className='footer-about__title-item'>Высокий уровень обслуживания</h4>
                            <p className='footer-about__text'>Заботимся о каждом клиенты и пытаемся делать высокий уровень обслуживания</p>
                        </li>
                        <li className='footer-about__item'>
                            <IconRenderer id='like' className='footer-about__icon' />
                            <h4 className='footer-about__title-item'>Качественный сервис</h4>
                            <p className='footer-about__text'>Знаём все о своих товарах, поэтому предоставляем качественную поддержку</p>
                        </li>
                        <li className='footer-about__item'>
                            <IconRenderer id='discont' className='footer-about__icon' />
                            <h4 className='footer-about__title-item'>Гибкую ценовую политику</h4>
                            <p className='footer-about__text'>У нас разнообразный товар и разный уровень цен, мы часто делаем скидки для наших клиентов</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
