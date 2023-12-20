"use client";
import React, { FC, useState, useEffect, useRef } from "react";
import IconRenderer from "../../ui/Icons/IconRenderer";
import "./HeaderBasket.scss";
import Image from "next/image";
import { useAppSelector } from "@/app/Redux/store";
import { useAppDispatch } from "@/app/Redux/store";
import { removeProduct } from "@/app/Redux/slice/basket/basketSlice";
import deleteIcon from "/public/img/delete-icon.svg";

interface Product {
	id: number;
	name: string;
	price: number;
	photo_url: string; // Add imageUrl property for the product image
}

// const staticChosenProducts: Product[] = [
// 	{ name: "Product A", price: 500, photo_url: "https://techiestore.in/wp-content/uploads/2020/03/laptop-battery-poster-e1584275970841.png" },
// 	{ name: "Product B", price: 750, photo_url: "https://techiestore.in/wp-content/uploads/2020/03/laptop-battery-poster-e1584275970841.png" },
// 	{ name: "Product C", price: 300, photo_url: "https://techiestore.in/wp-content/uploads/2020/03/laptop-battery-poster-e1584275970841.png" }
// ];

const HeaderBasket: FC = () => {
	const dispatch = useAppDispatch();
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const togglePopup = () => {
		setIsPopupOpen(!isPopupOpen);
	};

	const products = useAppSelector((state) => state.basketReducer.products);

	const removeProductOnClick = (index: number) => {
		dispatch(removeProduct(index));
	};

	const calculateTotalPrice = (products: Product[]): number => {
		return products.reduce((total, product) => total + product.price, 0);
	};

	const totalPrice = calculateTotalPrice(products);

	const popupRef = useRef<HTMLDivElement>(null);

	// Function to close the popup when clicking outside of it
	const handleClickOutside = (event: MouseEvent) => {
		if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
			setIsPopupOpen(false);
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
		<div className="header-basket">
			<div className="header-basket__main-button" onClick={togglePopup}>
				<div className="header-basket__icon" >
					<IconRenderer id="header-basket-sign"></IconRenderer>
					<div className="header-basket__quantity">{products.length}</div>
				</div>
				<div className="header-basket__texts">
					<div className="header-basket__text">Корзина</div>
					<div className="header-basket__text">{totalPrice} грн</div>
				</div>
			</div>

			{isPopupOpen && (
				<div className="header-basket__popup" ref={popupRef}>
					<div className="header-basket__chosen-products">
						{/* Display chosen products */}
						{products.map((product, index) => (
							<div className="header-basket__chosen-product" key={index}>
								<Image src={product.photo_url} alt={product.name} className="header-basket__chosen-product-image" width={74} height={62} />
								<div className="header-basket__chosen-product-infos">
									<div className="header-basket__chosen-product-name">{product.name.length > 30 ? `${product.name.slice(0, 30)}...` : product.name}</div>
									<div className="header-basket__chosen-product-price">{product.price} грн</div>
								</div>
								<Image
									src={deleteIcon}
									alt={deleteIcon}
									className="header-basket__chosen-product-delete-icon"
									onClick={() => {
										removeProductOnClick(index);
									}}
								/>
							</div>
						))}
					</div>
					<div className="header-basket__popup-infos">
						<div className="header-basket__full-price">
							Всего к оплате:
							<span>{totalPrice} грн</span>
						</div>
						<div className="header-basket__buttons">
							<div className="header-basket__basket-link">В корзину</div>
							<div className="header-basket__order-button">Оформить</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default HeaderBasket;
