"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import IconRenderer from "../../../ui/Icons/IconRenderer";
import "./SimilarProductsCard.scss";
import Image from "next/image";
import Link from "next/dist/client/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/app/Redux/store";
import { addProduct } from "@/app/Redux/slice/basket/basketSlice";
import { addFavProduct } from "@/app/Redux/slice/favs/favsSlice";

import DiscountSticker from "../../../ui/product-ui/DiscountSticker";

import favIcon from "/public/img/fav-icon.svg";
import noImageIcon from "/public/img/popup-close-icon.svg";

import { IProduct as Product } from "../../../types/types";

interface FeaturesCardProps {
	product: Product;
	isBought: boolean;
	isFav: boolean;
}

const SimilarProductsCard: React.FC<FeaturesCardProps> = ({ product, isBought, isFav }) => {
	const dispatch = useAppDispatch();
	const router = useRouter();

	const truncatedName = product.name.length > 60 ? `${product.name.slice(0, 40)}...` : product.name;

	const addToBasket = (product: Product): void => {
		dispatch(addProduct(product));
	};
	const addToFavs = (product: Product): void => {
		dispatch(addFavProduct(product));
	};

	const hendleProductDetails = () => {
		const url: string = `product/${product.category}/${product.id}`;
		router.push(url);
	};

	return (
		<div className="similar-products-card">
			<div
				className={`similar-products-card__fav-button ${isFav ? "active": ""}`}
				onClick={() => {
					addToFavs(product);
				}}
			>
				<IconRenderer id="features-fav-sign"></IconRenderer>
			</div>
			<div className="similar-products-card__image-wrapper">{product.photo_url ? <Image fill={true} src={product.photo_url} alt="photo_url" className="similar-products-card__image" sizes="(max-width: 600px) 147px, 230px"></Image> : <Image fill={true} src={noImageIcon} alt="photo_url" className="similar-products-card__image"></Image>}</div>

			<div className="similar-products-card__name">{truncatedName}</div>
			<div className="similar-products-card__price">
				{product.discount !== null && (
					<div className="similar-products-card__discount">
						<DiscountSticker amount={product.discount}></DiscountSticker>
					</div>
				)}
				<div className="similar-products-card__price-text">{product.price} грн</div>
			</div>
			<div className="similar-products-card__buttons">
				<div
					className="similar-products-card__basket-button"
					onClick={() => {
						addToBasket(product);
					}}
				>
					{isBought ? "Add more" : "Купить"}
					<IconRenderer id="header-basket-sign"></IconRenderer>
				</div>
				<div className="similar-products-card__buy-button">Купить в 1 клик</div>
			</div>
		</div>
	);
};

export default SimilarProductsCard;
