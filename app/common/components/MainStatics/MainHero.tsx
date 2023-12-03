import React, { FC } from "react";
import IconRenderer from "../../ui/Icons/IconRenderer";
import "./MainHero.scss";
import Image from "next/image";
import Link from "next/dist/client/link";

import mainHeroImg from "/public/img/main-hero-background-img.png";
import mainHeroListIcon1 from "/public/img/main-hero-list-icon-1.svg";
import mainHeroListIcon2 from "/public/img/main-hero-list-icon-2.svg";
import mainHeroListIcon3 from "/public/img/main-hero-list-icon-3.svg";
import mainHeroListIcon4 from "/public/img/main-hero-list-icon-4.svg";
import mainHeroListIcon5 from "/public/img/main-hero-list-icon-5.svg";
import mainHeroLine from "/public/img/main-hero-line.svg";
import mainHeroJustAIcon from "/public/img/main-hero-just-a-icon.svg";
import mainHeroBackground from "/public/img/main-hero-background.png";

const MainHero: FC = ({}) => {
	return (
		<div className="main-hero__wrapper">
			<div className="main-hero">
				<Image src={mainHeroImg} alt="mainHeroImg" className="main-hero__background-img"></Image>
				<Image src={mainHeroBackground} alt="mainHeroImg" className="main-hero__background"></Image>
				<div className="main-hero__z-container">
					<div className="main-hero__left">
						<div className="main-hero__title">Магазин компьютерных комплектующих</div>
						<div className="main-hero__undertitle">У нас Вы найдете комплектующие для ноутбуков и планшетов:</div>
						<div className="main-hero__list">
							<div className="main-hero__list-item">
								<Image src={mainHeroListIcon1} alt="mainHeroImg" className="main-hero__list-icon"></Image>
								Корпуса, кулера, шлейфы, петли и разъемы
							</div>
							<div className="main-hero__list-item">
								<Image src={mainHeroListIcon2} alt="mainHeroImg" className="main-hero__list-icon"></Image>
								Зарядные устройства
							</div>
							<div className="main-hero__list-item">
								<Image src={mainHeroListIcon3} alt="mainHeroImg" className="main-hero__list-icon"></Image>
								Матрицы
							</div>
							<div className="main-hero__list-item">
								<Image src={mainHeroListIcon4} alt="mainHeroImg" className="main-hero__list-icon"></Image>
								Клавиатуры
							</div>
							<div className="main-hero__list-item">
								<Image src={mainHeroListIcon5} alt="mainHeroImg" className="main-hero__list-icon"></Image>
								Батареи
							</div>
						</div>
						<button className="main-hero__go-button">Перейти в каталог</button>
					</div>

					<div className="main-hero__right">
						<div className="main-hero__just-a-block">
							<div className="main-hero__just-a-icon-wrapper">
								<Image src={mainHeroJustAIcon} alt="mainHeroImg" className="main-hero__just-a-icon"></Image>
							</div>
							<div className="main-hero__just-a-text">один из крупнейших каталогов комплектующих для ноутбуков в Украине.</div>
						</div>
						<div className="main-hero__about">
							<div className="main-hero__about">
								<div className="main-hero__about-heading">О магазине</div>
								<div className="main-hero__about-nums">
									<div className="main-hero__about-block">
										<div className="main-hero__about-block-number">775 </div>
										<div className="main-hero__about-block-text">Тыс. товаров</div>
									</div>
									<Image src={mainHeroLine} alt="mainHeroImg" className="main-hero__line"></Image>
									<div className="main-hero__about-block">
										<div className="main-hero__about-block-number">100</div>
										<div className="main-hero__about-block-text">Брендов</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainHero;
