"use client";
import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import IconRenderer from "../../ui/Icons/IconRenderer";
import "./BasketRow.scss";
import Image from "next/image";
import Link from "next/dist/client/link";

import { useRouter } from "next/navigation";
import { useAppSelector } from "@/app/Redux/store";
import { useAppDispatch } from "@/app/Redux/store";
import { removeProductByCategoryId } from "@/app/Redux/slice/basket/basketSlice";
import { addProduct } from "@/app/Redux/slice/basket/basketSlice";

import { fetchProductInfo } from "@/app/lib/data";

import deleteIcon from "/public/img/delete-icon.svg";
import plusIcon from "/public/img/plus-icon.svg";
import minusIcon from "/public/img/minus-icon.svg";
import dropDownIcon from "/public/img/dropdown-icon.svg";
import timerIcon from "/public/img/timer-icon.svg";
import counterArrow from "/public/img/counter-arrow.svg";

interface IBasketRowProps {
	product: any;
	quantity: number;
	updateQuantity: (productName: string, newQuantity: number) => void;
}
const BasketRow: React.FC<IBasketRowProps> = ({ product, quantity, updateQuantity }) => {
	const [confirmDelete, setConfirmDelete] = useState(false);
	const dispatch = useAppDispatch();

	const [dropdownActive, setDropdownActive] = useState<boolean>(false);

	const excludedFields = ["updatedAt", "publishedAt", "price", "photo", "name", "availability", "createdAt", "discount", "category", "id"];

	const [count, setCount] = useState(quantity);

	useEffect(() => {
		setCount(quantity);
	}, [quantity]);

	const productToAdd = {
		category: product.category,
		id: product.id,
		name: product.name,
		price: product.price,
		photo_url: product.photo.data[0].attributes.url
	};

	const incrementCount = () => {
		setCount(count + 1);
		dispatch(addProduct(productToAdd));
	};

	const decrementCount = () => {
		if (count > 1) {
			setCount(count - 1);
			dispatch(removeProductByCategoryId(product));
		}
	};

	useEffect(() => {
		let timer: NodeJS.Timeout;
		if (confirmDelete) {
			timer = setTimeout(() => {
				setConfirmDelete(false);
			}, 5000); // 5 seconds
		}
		return () => clearTimeout(timer);
	}, [confirmDelete]);

	const [deleted, setDeleted] = useState(false);

	const deleteProduct = () => {
		setDeleted(true);
		startDeletionTimer();
		setTimeout(() => {
			setDeleted(false);
			for (let i = 0; i < quantity; i++) {
				dispatch(removeProductByCategoryId(product));
			}
		}, 5000); // Auto-delete after 5 seconds
	};

	const restoreProduct = () => {
		setCount(1);
		setDeleted(false);
		dispatch(addProduct(product));
	};

	const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 600);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 600);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const [timer, setTimer] = useState(5);

    const startDeletionTimer = () => {
        setTimer(5); // Reset timer to 5 seconds
        setConfirmDelete(true);

        const intervalId = setInterval(() => {
            setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : prevTimer));
        }, 1000);

        setTimeout(() => {
            setConfirmDelete(false);
            clearInterval(intervalId);
        }, 5000); // Auto-delete after 5 seconds
    };


	return (
		<>
			{!deleted ? (
				<div className="basket-row">
					<div className="basket-row__image-price-container">
						<div className="basket-row__image-container">
							<Image fill={true} src={product.photo.data[0].attributes.url} alt="" className="basket-row__image"></Image>
						</div>
						<div className="basket-row__price mobile">
							{product.discount ? (
								<div className="basket-row__discounted-price">
									{product.price - product.discount}
									<div className="basket-row__old-price">{product.price}</div>
								</div>
							) : (
								product.price
							)}
						</div>
					</div>
					<div className="basket-row__all-info">
						<div className="basket-row__name">{product.name}</div>
						<div className="basket-row__model">
							<span>Модель:</span> 552499/2090
						</div>
						<div className="basket-row__model">
							<span>Артикул:</span> 2090
						</div>
						<div
							className="basket-row__dropdown-label"
							onClick={() => {
								setDropdownActive(!dropdownActive);
							}}
						>
							Показать данные о товаре <Image src={dropDownIcon} alt="dropDownIcon" className={`basket-row__drop-arrow ${dropdownActive ? "" : "active"}`}></Image>
						</div>
						{dropdownActive && (
							<div className="basket-row__dropdown">
								{Object.entries(product)
									.filter(([key]) => !excludedFields.includes(key)) // Filter out excluded fields
									.map(([key, value]) => (
										<div className="basket-row__dropdown-field" key={key}>
											<span className="basket-row__dropdown-field-name">{key}:</span> {typeof value === "object" ? JSON.stringify(value) : String(value)}
										</div>
									))}
							</div>
						)}
					</div>
					<div className="basket-row__clickables">
						<div className="basket-row__counter-container">
							<div className="basket-row__counter">
								<Image
									className="basket-row__counter-icon mobile"
									alt="product-hero__image"
									src={minusIcon}
									onClick={() => {
										decrementCount();
									}}
								></Image>
								<div className="basket-row__line mobile"></div>
								{count}
								<div className="basket-row__line"></div>

								<div className="basket-row__counter-arrows">
									<Image
										className="basket-row__desktop-icon"
										alt="product-hero__image"
										src={counterArrow}
										onClick={() => {
											incrementCount();
										}}
									></Image>
									<Image
										className="basket-row__desktop-icon down"
										alt="product-hero__image"
										src={counterArrow}
										onClick={() => {
											decrementCount();
										}}
									></Image>
								</div>

								<Image
									className="basket-row__counter-icon mobile"
									alt="product-hero__image"
									src={plusIcon}
									onClick={() => {
										incrementCount();
									}}
								></Image>
							</div>
						</div>
						<div className="basket-row__price">
							{product.discount ? (
								<div className="basket-row__discounted-price">
									{product.price - product.discount}
									<div className="basket-row__old-price">{product.price}</div>
								</div>
							) : (
								product.price
							)}
						</div>
						{isMobile ? (
							<div className="basket-row__delete-text" onClick={deleteProduct}>
								Удалить
							</div>
						) : (
							<Image className="basket-row__delete-icon" alt="deleteIcon" src={deleteIcon} onClick={deleteProduct} />
						)}
					</div>
				</div>
			) : (
				<div className="basket-row__restore-message">
					<div className="basket-row__restore-message-title">
						Товар удалён с корзины!
						<div className="basket-row__restore-button" onClick={restoreProduct}>
							Восстановить?
						</div>
					</div>
					<div className="basket-row__restore-message-timer">
						<Image className="basket-row__timer-icon" alt="timerIcon" src={timerIcon} /> {timer} сек
					</div>
				</div>
			)}
		</>
	);
};
export default BasketRow;
