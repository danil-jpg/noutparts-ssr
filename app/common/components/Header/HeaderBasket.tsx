"use client";
import React, { FC, useState, useEffect } from "react";
import IconRenderer from "../../ui/Icons/IconRenderer";
import "./HeaderBasket.scss";
import Image from "next/image";

import deleteIcon from "/public/img/delete-icon.svg";

interface Product {
	name: string;
	price: number;
	imageUrl: string; // Add imageUrl property for the product image
}

const staticChosenProducts: Product[] = [
	{ name: "Product A", price: 500, imageUrl: "https://techiestore.in/wp-content/uploads/2020/03/laptop-battery-poster-e1584275970841.png" },
	{ name: "Product B", price: 750, imageUrl: "https://techiestore.in/wp-content/uploads/2020/03/laptop-battery-poster-e1584275970841.png" },
	{ name: "Product C", price: 300, imageUrl: "https://techiestore.in/wp-content/uploads/2020/03/laptop-battery-poster-e1584275970841.png" }
];

const HeaderBasket: FC = () => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [chosenProducts, setChosenProducts] = useState<Product[]>([]);

	const togglePopup = () => {
		setIsPopupOpen(!isPopupOpen);
	};



	// Function to calculate total price of chosen products
	
	useEffect(() => {
		setChosenProducts(staticChosenProducts);
	}, [staticChosenProducts]);
	
	const removeProduct = (index: number) => {
		const updatedProducts = [...chosenProducts];
        updatedProducts.splice(index, 1);
        setChosenProducts(updatedProducts);
    };
	
	const calculateTotalPrice = (products: Product[]): number => {
		return products.reduce((total, product) => total + product.price, 0);
	};
	// Calculate total price of chosen products
	const totalPrice = calculateTotalPrice(chosenProducts);

	return (
		<div className="header-basket">
			<div className="header-basket__icon" onClick={togglePopup}>
				<IconRenderer id="header-basket-sign"></IconRenderer>
				<div className="header-basket__quantity">{chosenProducts.length}</div>
			</div>
			<div className="header-basket__texts">
				<div className="header-basket__text">Корзина</div>
				<div className="header-basket__text">{totalPrice} грн</div>
			</div>

			{isPopupOpen && (
				<div className="header-basket__popup">
					<div className="header-basket__chosen-products">
						{/* Display chosen products */}
						{chosenProducts.map((product, index) => (
							<div className="header-basket__chosen-product" key={index}>
								<Image src={product.imageUrl} alt={product.name} className="header-basket__chosen-product-image" width={74} height={62}/>
								<div className="header-basket__chosen-product-infos">
									<div className="header-basket__chosen-product-name">{product.name}</div>
									<div className="header-basket__chosen-product-price">{product.price} грн</div>
								</div> 
								<Image src={deleteIcon} alt={deleteIcon} className="header-basket__chosen-product-delete-icon" onClick={()=>{removeProduct(index)}}/>
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
