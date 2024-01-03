"use client";
import axios from "axios";
import React, { FC, useState } from "react";
import IconRenderer from "../../ui/Icons/IconRenderer";
import "./Order.scss";
import Image from "next/image";
import Link from "next/dist/client/link";
import { useAppSelector } from "@/app/Redux/store";

import Breadcrumbs from "@/app/common/components/breadcrumbs/Breadcrumbs";
import { Breadcrumb } from "@/app/common/types/types";

import PrimaryInput from "../../ui/inputs/PrimaryInput";
import TextAreaInput from "../../ui/inputs/TextAreaInput";
import BasicRadio from "../../ui/form/radio/BasicRadio";
import TownInput from "./TownInput";

import radioArrow from "/public/img/check-icon.svg";

interface OrderRequestBody {
	data: {
		first_name: string;
		last_name: string;
		tel: string;
		delivery: string | null;
		payment: string | null;
		town: string | null;
		filial: string | null;
		chosen_product: string;
		comment?: string; // Make comment optional
		email?: string; // Make email optional
	};
}

export default function Product() {
	const breadcrumbArr: Breadcrumb[] = [
		{
			label: `Корзина`,
			href: "/basket",
			active: false
		},
		{
			label: `Оформление заказа`,
			href: "/order",
			active: true
		}
	];
	const chosenProducts = useAppSelector((state) => state.basketReducer.products);
	const towns: string[] = ["Town 1", "Town 2", "Town 3", "Town 4"];
	const filials: string[] = ["Filial 1", "Filial 2", "Filial 3", "Filial 4"];

	const [userAgr, setUserAgr] = useState<boolean>(false);

	const [firstName, setFirstName] = useState<string>("");
	const [lastName, setLastName] = useState<string>("");
	const [tel, setTel] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	console.log("46 ~ Product ~ email:", email);
	const [comment, setComment] = useState<string>("");

	const [delivery, setDelivery] = useState<string | null>("");
	const [payment, setPayment] = useState<string | null>("");

	const [town, setTown] = useState<string | null>("");
	const [filial, setFilial] = useState<string | null>("");

	const formattedProducts = chosenProducts.map((product) => ({
		name: product.name,
		price: product.price,
		photo_url: product.photo_url
	}));

	const chosenProductsJSON = JSON.stringify(formattedProducts[0]);
	console.log("🚀 ~ file: Order.tsx:53 ~ Product ~ chosenProductsJSON:", chosenProductsJSON);

	const handleUpload = async () => {
		try {
			if (!chosenProductsJSON) {
				alert("There are no chosen products in your basket");
				return;
			}

			const requestBody: OrderRequestBody = {
				data: {
					first_name: firstName,
					last_name: lastName,
					tel: tel,
					delivery: delivery,
					payment: payment,
					town: town,
					filial: filial,
					chosen_product: chosenProductsJSON
				}
			};

			if (comment) {
				requestBody.data.comment = comment;
			}

			if (email) {
				requestBody.data.email = email;
			}

			const responseInfo = await axios.post("http://localhost:1337/api/orders", requestBody);
			console.log("Response Info:", responseInfo);
		} catch (error) {
			console.log("info creation error: ", error);
		}
	};

	return (
		<>
			<Breadcrumbs breadcrumbs={breadcrumbArr} classname="product__breadcrumbs"></Breadcrumbs>

			<div className="order__wrapper">
				<div className="order">
					<div className="order__title">Оформление заказа</div>
					<div className="order__main">
						<div className="order__block">
							<div className="order__block-head">
								<div className="order__num">1</div>
								Контактные данные
							</div>
							<div className="order__block-content">
								<div className="order__left">
									<div className="order__small-inputs">
										<PrimaryInput type="text" placeholder="Имя" label="Имя" setValue={setFirstName}></PrimaryInput>
										<PrimaryInput type="text" placeholder="Фамилия" label="Фамилия" setValue={setLastName}></PrimaryInput>
									</div>
									<PrimaryInput type="tel" placeholder="Номер телефона" label="Номер телефона" setValue={setTel}></PrimaryInput>
									<PrimaryInput type="email" placeholder="E-mail почта (необязательно)" label="E-mail почта (необязательно)" setValue={setEmail}></PrimaryInput>
								</div>
								<div className="order__right">
									<TextAreaInput label="Комментарий (необязательно)" setValue={setComment}></TextAreaInput>
								</div>
							</div>
						</div>
						<div className="order__line"></div>
						<div className="order__block">
							<div className="order__block-head">
								<div className="order__num">2</div>
								Адрес доставки и способ оплаты
							</div>
							<div className="order__block-content wide">
								<div className="order__left wide">
									<TownInput data={towns} type="towns" setValue={setTown} />
									<BasicRadio texts={["Новая почта", "Укр. почта"]} type="row" setChosenRadio={setDelivery} heading="Куда отправляем?"></BasicRadio>
									<TownInput data={filials} type="filials" setValue={setFilial} />
								</div>
								<div className="order__right">
									<BasicRadio texts={["Безналичный расчёт", "Оплата наличными"]} descriptions={["Оплата картой онлайн", "При получении товара"]} type="col" setChosenRadio={setPayment}></BasicRadio>
									<div className="order__buttons-container">
										<div
											className="order__user-agreement"
											onClick={() => {
												setUserAgr(!userAgr);
											}}
										>
											<div className="order__user-agreement-radio">
												<Image className={`order__user-agreement-radio-arrow ${userAgr && "active"}`} src={radioArrow} alt="radioArrow"></Image>
											</div>
											<div className="order__user-agreement-text">
												Подтверждая заказ я принимаю <span>условия пользователя</span>
											</div>
										</div>
										<button
											className="order__buy-button"
											onClick={() => {
												if (
													firstName &&
													lastName &&
													tel &&
													delivery &&
													payment &&
													town &&
													filial &&
													userAgr // Assuming userAgr must also be true
												) {
													handleUpload();
												} else {
													// Perform action for validation failure (e.g., show an error message)
													alert("Please fill in all required fields.");
												}
											}}
										>
											Заказ подтверждаю
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
