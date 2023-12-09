"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import IconRenderer from "../../ui/Icons/IconRenderer";
import "./FeaturesCard.scss";
import Image from "next/image";
import Link from "next/dist/client/link";
import axios from "axios";

import DiscountSticker from "../../ui/product-ui/DiscountSticker";

import favIcon from "/public/img/fav-icon.svg";
import noImageIcon from "/public/img/popup-close-icon.svg";

interface FeaturesCardProps {
	name: string;
	price: number;
	discount: number;
	photo_url: string;
}

const FeaturesCard: React.FC<FeaturesCardProps> = ({ name, price, discount, photo_url }) => {
	const truncatedName = name.length > 40 ? `${name.slice(0, 40)}...` : name;
	return (
		<div className="features-card">
			<div className="features-card__image-wrapper">{photo_url ? <Image fill={true} src={photo_url} alt="photo_url" className="features-card__image"></Image> : <Image fill={true} src={noImageIcon} alt="photo_url" className="features-card__image"></Image>}</div>

			<div className="features-card__name">{truncatedName}</div>
			<div className="features-card__price">
				{discount !== null && (
					<div className="features-card__discount">
						<DiscountSticker amount={discount}></DiscountSticker>
					</div>
				)}
				<div className="features-card__price-text">{price} грн</div>
			</div>

			<div className="features-card__hover-container">
				<div className="features-card__fav-button">
					<Image src={favIcon} alt="favIcon" className="features-card__fav-icon"></Image>
				</div>
				<div className="features-card__second-price">{price} грн</div>
				<div className="features-card__basket-button">
					Купить
					<IconRenderer id="header-basket-sign"></IconRenderer>
				</div>
				<div className="features-card__buy-button">Купить в 1 клик</div>
				<div className="features-card__product-link">Подробнее о товаре</div>
			</div>
		</div>
	);
};

export default FeaturesCard;
