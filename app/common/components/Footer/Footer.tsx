"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import IconRenderer from "../../ui/Icons/IconRenderer";
import "./Footer.scss";
import Image from "next/image";
import Link from "next/dist/client/link";
import axios from "axios";

import HeaderCallBack from "../Header/HeaderCallBack";

import siteLogo from "/public/img/footer-logo.png";
import facebookIcon from "/public/img/footer-facebook-icon.svg";
import instaIcon from "/public/img/footer-insta-icon.svg";
import visaIcon from "/public/img/footer-visa-icon.svg";
import mastercardIcon from "/public/img/footer-mastercard-icon.svg";
import privatIcon from "/public/img/footer-privat-icon.svg";

const Footer = ({}) => {
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string | null>(null);

	const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
		if (!validateEmail()) {
			setMessage("Fill the email input correctly");
			return;
		} else {
			setMessage("");
		}
	};

	const validateEmail = () => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const handleUpload = async () => {
		try {
			if (!validateEmail()) {
				setMessage("Fill the email input correctly");
				return;
			}
			setMessage("Sending your email...");

			const responseInfo = await axios.post("https://noutparts-strapi.onrender.com/api/emails", {
				data: {
					email: email
				}
			});

			setMessage("Your email is saved");

			console.log("Response Info:", responseInfo);
		} catch (error) {
			console.log("info creation error: ", error);
		}
	};
	return (
		<div className="footer__wrapper">
			<div className="footer">
				<div className="footer__main-column">
					<div className="footer__logo-wrapper">
						<Image src={siteLogo} alt="siteLogo" className="footer__logo"></Image>
					</div>
					<div className="footer__callback-wrapper">
						<HeaderCallBack white={true}></HeaderCallBack>
					</div>
					<div className="footer__subscribe">
						<div className="footer__sub-title">Подпишитесь, чтобы знать о скидках</div>
						<div className="footer__sub-undertitle">Узнавайте первыми о интересных предложениях</div>
						<div className="footer__sub-input-block">
							<div className="footer__sub-input-box">
								<input type="text" className="footer__sub-input" placeholder="Ваш E-mail" value={email} onChange={handleEmailChange} />
							</div>
							<button className="footer__sub-input-button" onClick={handleUpload}>
								Подписаться
							</button>
						</div>
						{message && <div className={`footer__sub-message ${message === "Fill the email input correctly" && "error"}`}>{message}</div>}
					</div>
				</div>
				<div className="footer__link-lists">
					<div className="footer__list-column">
						<div className="footer__list-heading">Навигация</div>
						<div className="footer__list">
							<Link href={"/about"}>
								<div className="footer__list-item">О нас</div>
							</Link>
							<Link href={"/delivery"}>
								<div className="footer__list-item">Доставка и оплата</div>
							</Link>
							<Link href={"/warranty"}>
								<div className="footer__list-item">Гарантии</div>
							</Link>
							<Link href={"/catalogue"}>
								<div className="footer__list-item">Каталог</div>
							</Link>
							<Link href={"/contacts"}>
								<div className="footer__list-item">Контакты</div>
							</Link>
						</div>
					</div>

					<div className="footer__list-column">
						<div className="footer__list-heading">Каталог</div>
						<div className="footer__list">
							<Link href={"/catalogue/filter-page/Matrices"}>
								<div className="footer__list-item">Матрицы</div>
							</Link>
							<Link href={"/catalogue/filter-page/Batteries"}>
								<div className="footer__list-item">Аккумуляторы</div>
							</Link>
							<Link href={"/catalogue/filter-page/Hdds"}>
								<div className="footer__list-item">Жесткие диски </div>
							</Link>
							<Link href={"/catalogue/filter-page/Keyboards"}>
								<div className="footer__list-item">Клавиатуры</div>
							</Link>
							<Link href={"/catalogue/filter-page/Rams"}>
								<div className="footer__list-item">Оперативная память</div>
							</Link>
							<Link href={"/catalogue/filter-page/Power_supplies"}>
								<div className="footer__list-item">Блок питания</div>
							</Link>
						</div>
					</div>

					<div className="footer__list-column">
						<div className="footer__list-heading">Контакты</div>
						<div className="footer__list">
							<a href="https://maps.app.goo.gl/tGFEqmT4uHbqCkxq5">
								<div className="footer__list-item">Aдрес: город, ул., д.</div>
							</a>
							<a href="tel:+0663888895">
								<div className="footer__list-item">Телефон: (066) 388-88 95</div>
							</a>
							<div className="footer__list-item">
								Мы работаем <br /> Понедельник-Пятница:
								<br /> 10:00 - 19:00
							</div>
							<a href="mailto:shop@email.com">
								<div className="footer__list-item">E-mail: shop@email.com</div>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="footer__underfooter">
				<div className="footer__socials">
					<Image src={facebookIcon} alt="facebookIcon" className="footer__social"></Image>
					<Image src={instaIcon} alt="instaIcon" className="footer__social"></Image>
				</div>
				<div className="footer__cards">
					<Image src={visaIcon} alt="visaIcon" className="footer__card-icon"></Image>
					<Image src={mastercardIcon} alt="mastercardIcon" className="footer__card-icon"></Image>
					<Image src={privatIcon} alt="privatIcon" className="footer__card-icon"></Image>
				</div>
				<div className="footer__copyright">Copyright © 2021 Noutparts</div>
			</div>
		</div>
	);
};

export default Footer;
