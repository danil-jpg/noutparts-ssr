"use client";
import React, { FC, useState, useEffect, useRef } from "react";
import "./BurgerMenu.scss";
import Link from "next/dist/client/link";
import Image from "next/image";

import HeaderFavs from "./HeaderFavs";
import IconRenderer from "../../ui/Icons/IconRenderer";
import MiniCatalog from "./MiniCatalog/MiniCatalog";
import HeaderCallBack from "./HeaderCallBack";

import instaIcon from "../../../../public/img/insta-icon.svg";
import facebookIcon from "../../../../public/img/facebook-icon.svg";

const BurgerMenu: FC = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleMenu = () => {
		setIsActive(!isActive);
	};


	const popupRef = useRef<HTMLDivElement>(null);

    // Function to close the popup when clicking outside of it
    const handleClickOutside = (event: MouseEvent) => {
        if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
            setIsActive(false);
        }
    };

    useEffect(() => {
        // Attach the event listener on mount
        document.addEventListener("mousedown", handleClickOutside);

        // Detach the event listener on unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

	return (
		<div className={`burger-menu ${isActive ? "active" : ""}`} ref={popupRef}>
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
						<MiniCatalog></MiniCatalog>
						<Link href="/about">
							<div className="burger-menu__nav-item">О нас</div>
						</Link>
						<Link href="/delivery">
							<div className="burger-menu__nav-item">Доставка и оплата</div>
						</Link>
						<Link href="/warranty">
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
					<HeaderCallBack></HeaderCallBack>
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
