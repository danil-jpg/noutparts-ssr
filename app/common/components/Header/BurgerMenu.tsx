"use client";
import React, { FC, useState } from "react";
import "./BurgerMenu.scss";
import Link from "next/dist/client/link";
import HeaderFavs from "./HeaderFavs";
import IconRenderer from "../../ui/Icons/IconRenderer";
import Image from "next/image";
import instaIcon from "../../../../public/img/insta-icon.svg";
import facebookIcon from "../../../../public/img/facebook-icon.svg";
const BurgerMenu: FC = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleMenu = () => {
		setIsActive(!isActive);
	};

	return (
		<div className={`burger-menu ${isActive ? "active" : ""}`}>
			<div className={`burger-menu__icon ${isActive ? "active" : ""}`} onClick={toggleMenu}>
				<span></span>
				<span></span>
				<span></span>
			</div>

			<div className={`burger-menu__menu ${isActive ? "active" : ""}`}>
				<div className="burger-menu__lang">
					<div className="burger-menu__lang-item">Укр</div>
					<div className="burger-menu__lang-line"></div>
					<div className="burger-menu__lang-item active">Рус</div>
				</div>

				<div className="burger-menu__menu-body">
					<div className="burger-menu__nav">
						<Link href="/about">
							<div className="burger-menu__nav-item">О нас</div>
						</Link>
						<Link href="/delivery">
							<div className="burger-menu__nav-item">Доставка и оплата</div>
						</Link>
						<Link href="/guarantees">
							<div className="burger-menu__nav-item">Гарантии</div>
						</Link>
						<Link href="/contacts">
							<div className="burger-menu__nav-item">Контакты</div>
						</Link>
					</div>
				</div>

				<div className="burger-menu__favs-container">
					<HeaderFavs></HeaderFavs>
				</div>

				<div className="burger-menu__info">
					<div className="burger-menu__tel">(066) 388-88 95</div>
					<div className="burger-menu__time">С 9:00 до 18:00 Без выходных</div>
					<div className="burger-menu__tel-button">
						<IconRenderer id="tel-sign"></IconRenderer>
						<div className="burger-menu__tel-btn-text">Обратный звонок</div>
					</div>
				</div>

				<div className="burger-menu__socials">
					<Image src={instaIcon} alt="instaIcon" className="burger-menu__social"></Image>
					<Image src={facebookIcon} alt="facebookIcon" className="burger-menu__social"></Image>
				</div>
			</div>
		</div>
	);
};

export default BurgerMenu;
