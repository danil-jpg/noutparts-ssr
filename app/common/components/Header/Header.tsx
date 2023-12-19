import React, { FC } from "react";
import IconRenderer from "../../ui/Icons/IconRenderer";
import "./Header.scss";
import Image from "next/image";
import Link from "next/dist/client/link";

import MiniCatalog from "./MiniCatalog/MiniCatalog";
import HeaderSearch from "./HeaderSearch";
import HeaderFavs from "./HeaderFavs";
import HeaderBasket from "./HeaderBasket";
import BurgerMenu from "./BurgerMenu";
import HeaderCallBack from "./HeaderCallBack";

import siteLogo from "../../../../public/img/site-logo.svg";
import instaIcon from "../../../../public/img/insta-icon.svg";
import facebookIcon from "../../../../public/img/facebook-icon.svg";

const Header: FC = ({}) => {
	return (
		<div className="header__wrapper">
			<div className="header__top">
				<div className="header__nav">
					<Link href="/about">
						<div className="header__nav-item">О нас</div>
					</Link>
					<Link href="/delivery">
						<div className="header__nav-item">Доставка и оплата</div>
					</Link>
					<Link href="/guarantees">
						<div className="header__nav-item">Гарантии</div>
					</Link>
					<Link href="/contacts">
						<div className="header__nav-item">Контакты</div>
					</Link>
				</div>
				<div className="header__info">
					<HeaderCallBack></HeaderCallBack>
					<div className="header__lang">
						<div className="header__lang-item">Укр</div>
						<div className="header__lang-line"></div>
						<div className="header__lang-item active">Рус</div>
					</div>
					<div className="header__socials">
						<Image src={instaIcon} alt="instaIcon" className="header__social"></Image>
						<Image src={facebookIcon} alt="facebookIcon" className="header__social"></Image>
					</div>
				</div>
			</div>
			<div className="header__bottom">
				<div className="header__container">
					<div className="header__lower-left">
						<div className="header__components-container mobile left">
							<BurgerMenu></BurgerMenu>
						</div>
						<Link href="/">
							<Image src={siteLogo} alt="siteLogo" className="header__site-logo"></Image>
						</Link>

						<div className="header__components-container">
							<MiniCatalog></MiniCatalog>
						</div>

						<div className="header__components-container mobile right">
							<HeaderBasket></HeaderBasket>
						</div>
					</div>
					<HeaderSearch></HeaderSearch>
					<div className="header__lower-right">
						<div className="header__components-container">
							<HeaderFavs></HeaderFavs>
						</div>
						<div className="header__components-container">
							<HeaderBasket></HeaderBasket>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
