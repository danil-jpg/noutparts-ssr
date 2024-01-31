"use client";
import axios from "axios";
import Link from "next/dist/client/link";
import React, { FC, useState, useEffect, ChangeEvent } from "react";
import IconRenderer from "../../ui/Icons/IconRenderer";
import "./Product.scss";
import Image from "next/image";
import { PatternFormat } from "react-number-format";
import { useAppDispatch } from "@/app/Redux/store";
import { useAppSelector } from "@/app/Redux/store";
import { addProduct } from "@/app/Redux/slice/basket/basketSlice";
import { addFavProduct } from "@/app/Redux/slice/favs/favsSlice";

import PrimaryInput from "../../ui/inputs/PrimaryInput";
import TextAreaInput from "../../ui/inputs/TextAreaInput";

import minusIcon from "/public/img/minus-icon.svg";
import plusIcon from "/public/img/plus-icon.svg";

interface OrderRequestBody {
	data: {
		tel: string;
		product: string;
	};
}

const ProductInteractiveElems = ({ category, id, tag, price, discount, product }: { category: string; id: string; tag: string; price: number; discount?: number; product: any }) => {
	const productsInBasket = useAppSelector((state) => state.basketReducer.products);
	const productsInFavs = useAppSelector((state) => state.favsReducer.products);
	// Check if the product exists in productsInBasket
	let foundProduct = productsInBasket.find((basketProduct) => basketProduct.name === product.name);
	// Determine if the product is bought
	let isBought = !!foundProduct;

	// Check if the product exists in productsInBasket
	let foundFav = productsInFavs.find((favProduct) => favProduct.name === product.name);
	// Determine if the product is bought
	let isFav = !!foundFav;

	const dispatch = useAppDispatch();
	const [count, setCount] = useState(1);
	const [inputValue, setInputValue] = useState<string>("");

	const addToBasket = (product: any, quantity: number): void => {
		if (isBought) {
			return;
		}
		const productForBasket = product;
		productForBasket.photo_url = productForBasket.photo.data[0].attributes.url;
		for (let index = 0; index < quantity; index++) {
			dispatch(addProduct(productForBasket));
		}
	};
	const addToFavs = (product: any): void => {
		dispatch(addFavProduct(product));
	};

	const incrementCount = () => {
		setCount(count + 1);
	};

	const decrementCount = () => {
		if (count > 1) {
			setCount(count - 1);
		}
	};

	const handleInputChange = (value: string): void => {
		setInputValue(value);
	};

	const formattedProduct = {
		id: id,
		category: category
	};

	const [isBoughtOne, setisBoughtOne] = useState(false);

	const chosenProductJSON = JSON.stringify(formattedProduct);

	const handleUpload = async () => {
		try {
			const requestBody: OrderRequestBody = {
				data: {
					tel: inputValue,
					product: chosenProductJSON
				}
			};

			const responseInfo = await axios.post("https://noutparts-strapi.onrender.com/api/one-click-buys", requestBody);

			setisBoughtOne(true);
		} catch (error) {
			console.log("info creation error: ", error);
		}
	};

	const handleOneClickBuy = (): void => {
		if (inputValue) {
			handleUpload();
		} else {
			alert("Enter your phone number to buy this product instantly");
		}
	};
	return (
		<>
			<div className="product-interactive-elems">
				<div className="product-interactive-elems__price-fav">
					<div className="product-interactive-elems__price-container">
						{tag === "discount" && <div className="product-interactive-elems__discount">{discount} ₴</div>}
						<div className="product-interactive-elems__price">{price * count} грн</div>
					</div>
					<div
						className="product-interactive-elems__favs-container"
						onClick={() => {
							addToFavs(product);
						}}
					>
						<div className="product-interactive-elems__fav-box">{isFav ? <IconRenderer id="header-heart-sign"></IconRenderer> : <IconRenderer id="features-fav-sign"></IconRenderer>}</div>В избранное
					</div>
				</div>
				<div className="product-interactive-elems__counter-buy">
					<div className="product-interactive-elems__counter">
						<div
							className="product-interactive-elems__icon-container"
							onClick={() => {
								decrementCount();
							}}
						>
							<Image className="product-interactive-elems__counter-icon" alt="product-hero__image" src={minusIcon}></Image>
						</div>
						<div className="product-interactive-elems__line"></div>
						{count}
						<div className="product-interactive-elems__line"></div>
						<div
							className="product-interactive-elems__icon-container"
							onClick={() => {
								incrementCount();
							}}
						>
							<Image className="product-interactive-elems__counter-icon" alt="product-hero__image" src={plusIcon}></Image>
						</div>
					</div>
					<button
						className="product-interactive-elems__buy-button"
						onClick={() => {
							addToBasket(product, count);
						}}
					>
						{isBought ? (
							<Link href={"/basket"}>
								<span style={{ color: "white" }}>В корзину</span>
							</Link>
						) : (
							"Купить"
						)}

						<IconRenderer id="basket-icon"></IconRenderer>
					</button>
				</div>
				<div className="product-interactive-elems__buy-now">
					<PatternFormat
						type="tel"
						displayType="input"
						format="+(380) | ## ### ####"
						valueIsNumericString
						allowEmptyFormatting
						mask="_"
						className={`product-interactive-elems__input`}
						onValueChange={(values, sourceInfo) => {
							handleInputChange(values.value);
						}}
					></PatternFormat>
					<button
						className="product-interactive-elems__one-click-button"
						onClick={() => {
							handleOneClickBuy();
						}}
					>
						{isBoughtOne ?"Куплено" : "Купить в один клик"}
						
					</button>
				</div>
			</div>
		</>
	);
};

export default ProductInteractiveElems;
