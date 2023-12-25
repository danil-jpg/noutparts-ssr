import axios from "axios";
import React, { FC } from "react";
import IconRenderer from "../../../ui/Icons/IconRenderer";
import "./ProductPair.scss";
import Image from "next/image";
import Link from "next/dist/client/link";

import ProductPairClientButton from "./ProductPairClientButton";

import bigPlus from "/public/img/big-plus.svg";
import bigEquals from "/public/img/big-equals.svg";
import discountPairSticker from "/public/img/discount-pair-sticker.svg";

export default function ProductPair({ firstObj, secondObj }: { firstObj: any; secondObj: any }) {
	let firstPrice = firstObj.price;
	let secondPrice = secondObj.price;

	let fullPrice = firstPrice + secondPrice;

	let discountPercentage = 0.1; // 10 percent discount

	let discountedPrice = fullPrice - fullPrice * discountPercentage; // Calculate discounted price
	let valueOfDiscount = fullPrice * discountPercentage; // Calculate value of the discount

	return (
		<>
			<div className="discount-pair__wrapper">
				<div className="discount-pair">
					<div className="discount-pair__title">Выгодный комплект</div>
					<div className="discount-pair__content">
						<div className="discount-pair__product-card">
							<div className="discount-pair__img-container">
								<Image fill={true} src={firstObj.photo.data[0].attributes.url} alt="bigPlus" className="discount-pair__product-photo"></Image>
							</div>
							<div className="discount-pair__line"></div>
							<div className="discount-pair__name">{firstObj.name.length > 30 ? `${firstObj.name.slice(0, 30)}...` : firstObj.name}</div>
							<div className="discount-pair__price">{firstObj.price} грн</div>
						</div>
						<Image src={bigPlus} alt="bigPlus" className="discount-pair__plus"></Image>
						<div className="discount-pair__product-card">
							<div className="discount-pair__img-container">
								<Image fill={true} src={secondObj.photo.data[0].attributes.url} alt="bigPlus" className="discount-pair__product-photo"></Image>
							</div>
							<div className="discount-pair__line"></div>
							<div className="discount-pair__name">{secondObj.name.length > 30 ? `${secondObj.name.slice(0, 30)}...` : secondObj.name}</div>
							<div className="discount-pair__price">{secondObj.price} грн</div>
						</div>
						<Image src={bigEquals} alt="bigEquals" className="discount-pair__equals"></Image>
						<div className="discount-pair__result-card">
							<div className="discount-pair__green-background">
								<Image src={discountPairSticker} alt="discountPairSticker" className="discount-pair__discount-sticker"></Image>
								<div className="discount-pair__price-crossed">{fullPrice} грн</div>
								<div className="discount-pair__discounted-price">{discountedPrice} грн</div>
							</div>
							<div className="discount-pair__discount-in-percents">Экономия 10%</div>
							<div className="discount-pair__discount-in-number">Выгода {valueOfDiscount} ₴ </div>
							<ProductPairClientButton firstObj={firstObj} secondObj={secondObj}></ProductPairClientButton>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
