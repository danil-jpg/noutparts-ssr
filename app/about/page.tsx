import './about.scss';
import Image from 'next/image';
import Breadcrumbs from '@/app/common/components/breadcrumbs/Breadcrumbs';
import { Breadcrumb } from '@/app/common/types/types';

import netLeft from '/public/img/net-left-background.png';
import netRight from '/public/img/net-right-background.png';

import teamBubbleIcon from '/public/img/team-bubble-icon.svg';
import destinationBubbleIcon from '/public/img/destination-bubble-icon.svg';
import clientBubbleIcon from '/public/img/client-bubble-icon.svg';
import likeBubbleIcon from '/public/img/like-bubble-icon.svg';
import discountBubbleIcon from '/public/img/discount-bubble-icon.svg';
import toTopIcon from "/public/img/to-top-button.svg";

export default function AboutPage() {
    const breadcrumbArr: Breadcrumb[] = [
        {
            label: `О нас`,
            href: '/about',
            active: false,
        },
    ];
    return (
        <>
			<div className="breadcrumb-all-page__wrapper">
				<div className="breadcrumb-all-page">
		            <Breadcrumbs breadcrumbs={breadcrumbArr} classname='product__breadcrumbs'></Breadcrumbs>
				</div>
			</div>

            <div className='about-hero__wrapper" id="about-for-anchor'>
                <Image src={netLeft} alt='netLeft' className='about-hero__net left'></Image>
                <div className='about-hero'>
                    <div className='about-hero__title'>
                        Интернет-магазин <span>Noutparts</span>
                    </div>
                    <div className='about-hero__text'>
                        Это один из крупнейший в Украине магазин для поиска и выбора комплектующих для ноутбуков всех популярных брендов. С помощью нашего сайта
                        вы можете без особых профессиональных навыков выбрать себе необходимые комплектующие по модели вашего ноутбука
                    </div>
                </div>
                <Image src={netRight} alt='netRight' className='about-hero__net right'></Image>
            </div>

            <div className='about__wrapper'>
                <div className='about'>
                    <div className='about__block'>
                        <Image src={teamBubbleIcon} alt='teamBubbleIcon' className='about__block-icon'></Image>
                        <div className='about__title'>Мы команда профессионалов</div>
                        <div className='about__texts'>
                            <div className='about__text'>
                                Которые любят и ценят свою работу.  Мы энергичны, молоды и всегда развиваемся. Наши специалисты готовы решить Ваши проблемы,
                                связанные с подбором комплектующих, профессионально и быстро! 
                            </div>
                            <div className='about__text'>
                                Работа, направленная на то, чтобы заработать и сохранить доверие наших клиентов, - это главный двигатель подхода нашей компании
                                с первого дня.
                            </div>
                        </div>
                    </div>
                    <div className='about__block'>
                        <Image src={destinationBubbleIcon} alt='destinationBubbleIcon' className='about__block-icon'></Image>
                        <div className='about__title'>Цель магазина</div>
                        <div className='about__texts'>
                            <div className='about__text'>
                                Обеспечить посетителям максимально удобный сайт для выбора и приобретения запчастей для ноутбука, а так же создать максимально
                                широкий ассортимент для выбора комплектующих.
                            </div>
                            <div className='about__text'>
                                Мы стараемся создать высокий сервис и максимально облегчить покупку комплектующих для ноутбука предоставив лучший выбор и
                                необходимую информацию о товарах.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='about-privilegies__wrapper'>
                <div className='about-privilegies'>
                    <div className='about-privilegies__title'>
                        
						Работая с нами, <span> Вы получаете:</span>{' '}
                   {" "}
					</div>
                    <div className='about-privilegies__blocks'>
                        <div className='about-privilegies__block'>
                            <Image src={clientBubbleIcon} alt='clientBubbleIcon' className='about-privilegies__block-icon'></Image>
                            <div className='about-privilegies__heading'>Высокий уровень обслуживания</div>
                            <div className='about-privilegies__text'>Заботимся о каждом клиенты и пытаемся делать высокий уровень обслуживания</div>
                        </div>
                        <div className='about-privilegies__block'>
                            <Image src={likeBubbleIcon} alt='likeBubbleIcon' className='about-privilegies__block-icon'></Image>
                            <div className='about-privilegies__heading'>Качественный сервис</div>
                            <div className='about-privilegies__text'>Знаём все о своих товарах, поэтому предоставляем качественную поддержку</div>
                        </div>
                        <div className='about-privilegies__block'>
                            <Image src={discountBubbleIcon} alt='discountBubbleIcon' className='about-privilegies__block-icon'></Image>
                            <div className='about-privilegies__heading'>Гибкую ценовую политику</div>
                            <div className='about-privilegies__text'>
                                У нас разнообразный товар и разный уровень цен, мы часто делаем скидки для наших клиентов
                            </div>
                        </div>
                    </div>

					<a className="about-privilegies__to-top" href="#about-for-anchor">
						<Image src={toTopIcon} alt="toTopIcon" className="about-privilegies__to-top-icon"></Image>
					</a>
                </div>
            </div>
        </>
    );
}
