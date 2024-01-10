"use client";
import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import IconRenderer from "../../ui/Icons/IconRenderer";
import "./basket.scss";
import Image from "next/image";
import Link from "next/dist/client/link";

import { useRouter } from "next/navigation";
import { useAppSelector } from "@/app/Redux/store";
import { useAppDispatch } from "@/app/Redux/store";
import { removeProduct } from "@/app/Redux/slice/basket/basketSlice";

import { fetchProductInfo } from "@/app/lib/data";

import BasketRow from "./BasketRow";

import deleteIcon from "/public/img/delete-icon.svg";

interface ProductToFetch {
	category: string;
	id: number;
	name: string;
	price: number;
	photo_url: string;
}

interface Product {
	category: string;
	id: number;
	name: string;
	price: number;
	discount?: number; // Assuming discount is optional
	// Add other properties as needed
}

interface GroupedProduct {
	product: Product;
	quantity: number;
}

export default function BasketComponent() {
	const productsToFetch: ProductToFetch[] = useAppSelector((state) => state.basketReducer.products);

	const dispatch = useAppDispatch();
	const router = useRouter();
	const productsInBasket = useAppSelector((state) => state.basketReducer.products);
	const productsInFavs = useAppSelector((state) => state.favsReducer.products);

	const [products, setProducts] = useState<any[]>([]); // Assuming Product is the interface for your products

	// Group products by unique keys (category + '-' + id)
	const [groupedProducts, setGroupedProducts] = useState<Record<string, GroupedProduct>>({});

	useEffect(() => {
		const fetchAllFeaturedProducts = async () => {
			try {
				const productDataArray = await Promise.all(productsToFetch.map((productToFetch) => fetchProductInfo(productToFetch.category, productToFetch.id)));
				const allProducts = productDataArray.flat();

				const updatedGroupedProducts: Record<string, GroupedProduct> = {};

				allProducts.forEach((product) => {
					const productToFetch = productsToFetch.find((p) => p.name === product.name);
					if (productToFetch) {
						const { category, id } = productToFetch;

						if (category !== undefined && id !== undefined) {
							const key = `${category}-${id}`;
							if (!updatedGroupedProducts[key]) {
								updatedGroupedProducts[key] = {
									product: {
										...product,
										category,
										id
									},
									quantity: 0
								};
							}
							updatedGroupedProducts[key].quantity += 1;
						}
					}
				});

				setGroupedProducts(updatedGroupedProducts);
				setProducts(allProducts);
			} catch (error) {
				console.error("Error getting all product data:", error);
			}
		};

		fetchAllFeaturedProducts();
	}, [productsToFetch]);

	// Calculate total discount
	const totalDiscount = products.reduce((total, product) => {
		// Assuming each product has a 'discount' property
		return total + (product.discount || 0); // Ensure to handle cases where 'discount' might be undefined
	}, 0);

	// Calculate total price
	const totalPrice = products.reduce((total, product) => {
		// Assuming each product has a 'price' property
		return total + (product.price || 0); // Ensure to handle cases where 'price' might be undefined
	}, 0);

	const updateQuantity = (productName: string, newQuantity: number) => {
		const updatedGroupedProducts = { ...groupedProducts };
		const key = Object.keys(updatedGroupedProducts).find((k) => updatedGroupedProducts[k].product.name === productName);
		if (key) {
			updatedGroupedProducts[key].quantity = newQuantity;
			setGroupedProducts(updatedGroupedProducts);
		}
	};

	return (
		<>
			<div className="basket">
				<div className="basket__title">Корзина</div>
				<div className="basket__content">
					<div className="basket__content-table">
						<div className="basket__table-top">
							<div className="basket__table-heading one">Товар</div>
							<div className="basket__table-heading two">Кол-во</div>
							<div className="basket__table-heading three">Цена</div>
						</div>
						<div className="basket__table-contents">
							{Object.values(groupedProducts).map((groupedProduct: GroupedProduct, index: number) => (
								<BasketRow
									key={index}
									product={groupedProduct.product}
									quantity={groupedProduct.quantity}
									updateQuantity={updateQuantity} // Pass down the function
								/>
							))}
						</div>

						<div className="basket__continue-button">Продолжить покупки</div>
					</div>
					<div className="basket__order">
						<div className="basket__order-title">Оформление заказа</div>
						<div className="basket__order-heading">Итого</div>

						<div className="basket__order-products">
							{products.map((product, index) => (
								<div key={index} className="basket__order-product">
									<div className="basket__order-product-number">{index + 1}. </div>
									<div className="basket__order-product-name">{product.name.length > 30 ? `${product.name.slice(0, 30)}...` : product.name}</div>
									<div className="basket__order-product-line"></div>
									<div className="basket__order-product-price">{product.price} грн</div>
								</div>
							))}
						</div>

						<div className="basket__order-metrics">
							<div className="basket__order-metrics-word">Выгода со скидкой</div>
							<div className="basket__order-metrics-line"></div>
							<div className="basket__order-metrics-word">-{totalDiscount} грн</div>
						</div>

						<div className="basket__order-metrics big">
							<div className="basket__order-metrics-word big">Итоговая цена</div>
							<div className="basket__order-metrics-line"></div>
							<div className="basket__order-metrics-word big">{totalPrice} грн</div>
						</div>

						<div className="basket__order-button">Оформить заказ</div>
					</div>
				</div>
			</div>
		</>
	);
}
