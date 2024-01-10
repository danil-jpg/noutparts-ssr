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
import { removeProductByCategoryId } from "@/app/Redux/slice/basket/basketSlice";
import { addProduct } from "@/app/Redux/slice/basket/basketSlice";

import { fetchProductInfo } from "@/app/lib/data";

import deleteIcon from "/public/img/delete-icon.svg";
import plusIcon from "/public/img/plus-icon.svg";
import minusIcon from "/public/img/minus-icon.svg";
import dropDownIcon from "/public/img/dropdown-icon.svg";

interface IBasketRowProps {
	product: any;
	quantity: number;
	updateQuantity: (productName: string, newQuantity: number) => void;
}
const BasketRow: React.FC<IBasketRowProps> = ({ product, quantity, updateQuantity }) => {
	const [confirmDelete, setConfirmDelete] = useState(false);
	const dispatch = useAppDispatch();

	const [dropdownActive, setDropdownActive] = useState<boolean>(false);

	const excludedFields = ["updatedAt", "publishedAt", "price", "photo", "name", "availability", "createdAt"];

	const [count, setCount] = useState(1);

	const incrementCount = () => {
		setCount(count + 1);
		dispatch(addProduct(product));
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
		setTimeout(() => {
			setDeleted(false);
			dispatch(removeProductByCategoryId(product));
		}, 5000); // Auto-restore after 5 seconds
	};

	const restoreProduct = () => {
		setCount(1);
		setDeleted(false);
		dispatch(addProduct(product));
	};

	return (
		<>
			{!deleted ? (
				<div className="basket-row" style={{ border: "solid" }}>
					<div className="basket-row__image-container">
						<Image src="" alt="" className="basket-row__image"></Image>
					</div>
					<div className="basket-row__all-info">
						<div className="basket-row__name">{product.name}</div>
						<div className="basket-row__model">Модель: 552499/2090</div>
						<div className="basket-row__model">Артикул: 2090</div>
						<div
							className="basket-row__dropdown-label"
							onClick={() => {
								setDropdownActive(!dropdownActive);
							}}
						>
							Показать данные о товаре <Image src={dropDownIcon} alt="dropDownIcon" className={`basket-row__drop-arrow ${dropdownActive && "active"}`}></Image>
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
					<div className="basket-row__counter">
						<Image
							className="basket-row__counter-icon"
							alt="product-hero__image"
							src={minusIcon}
							onClick={() => {
								decrementCount();
							}}
						></Image>
						<div className="basket-row__line"></div>
						{count}
						<div className="basket-row__line"></div>
						<Image
							className="basket-row__counter-icon"
							alt="product-hero__image"
							src={plusIcon}
							onClick={() => {
								incrementCount();
							}}
						></Image>
					</div>
					<Image className="basket-row__delete-icon" alt="deleteIcon" src={deleteIcon} onClick={deleteProduct} />
				</div>
			) : (
				<div className="restore-message">
					<p>Item deleted! Restore within 5 seconds:</p>
					<button onClick={restoreProduct}>Restore</button>
				</div>
			)}
		</>
	);
};
export default BasketRow;
