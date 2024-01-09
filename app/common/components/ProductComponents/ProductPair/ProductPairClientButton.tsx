"use client";
import React, { FC } from "react";
import IconRenderer from "../../../ui/Icons/IconRenderer";
import "./ProductPair.scss";
import { useAppDispatch } from "@/app/Redux/store";
import { useAppSelector } from "@/app/Redux/store";
import { addProduct } from "@/app/Redux/slice/basket/basketSlice";

export default function ProductPairClientButton({ firstObj, secondObj }: { firstObj: any; secondObj: any }) {

	const dispatch = useAppDispatch();
	const addToBasket = (): void => {
		const firstProductForBasket = firstObj;
		const secondProductForBasket = secondObj;
		firstProductForBasket.photo_url = firstObj.photo.data[0].attributes.url;
		secondProductForBasket.photo_url = secondObj.photo.data[0].attributes.url;
		dispatch(addProduct(firstObj));
		dispatch(addProduct(secondObj));
	};
	const productsInBasket = useAppSelector((state) => state.basketReducer.products);
	let foundFirstProduct = productsInBasket.find((basketProduct) => basketProduct.name === firstObj.name);
	let foundSecondProduct = productsInBasket.find((basketProduct) => basketProduct.name === secondObj.name);

	let isBought = !!foundFirstProduct && !!foundSecondProduct;

	return (
		<>
			<div
				className="discount-pair__buy-buttom"
				onClick={() => {
					addToBasket();
				}}
			>
				{isBought ? "Купить еще комплект" : "Купить комплект"}
			</div>
		</>
	);
}
