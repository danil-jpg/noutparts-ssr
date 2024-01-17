"use client"
import React, { FC } from "react";
import IconRenderer from "../../ui/Icons/IconRenderer";
import "./CategoriesRow.scss";
import Image from "next/image";
import Link from "next/dist/client/link";
import { useRouter } from "next/navigation";

import matrixIcon from "/public/img/categories-row-matrix-icon.svg";

const CategoriesRow = ({ activeItem }: { activeItem?: string }) => {
	const router = useRouter();
	const handleCategoryClick = (filter : string) => {
		const url = `/catalogue/filter-page/${filter}`;
		router.replace(url);
	};
	return (
		<div className="categories-row__wrapper">
			<div className="categories-row__container">
				<div className={`categories-row__item ${activeItem === "matrix" && "active"}`} onClick={()=>{handleCategoryClick("Matrices")}}>
					<div className="categories-row__img">
						<Image src={matrixIcon} alt="matrixIcon" className="categories-row__matrix-img"></Image>
					</div>
					<div className="categories-row__text">Матрицы</div>
				</div>
				<div className={`categories-row__item ${activeItem === "battery" && "active"}`}onClick={()=>{handleCategoryClick("Batteries")}}>
					<div className="categories-row__img">
						<IconRenderer id="category-row-battery-icon"></IconRenderer>
					</div>
					<div className="categories-row__text">Аккумуляторы</div>
				</div>
				<div className={`categories-row__item ${activeItem === "hdd" && "active"}`}onClick={()=>{handleCategoryClick("Hdds")}}>
					<div className="categories-row__img">
						<IconRenderer id="category-row-hdd-icon"></IconRenderer>
					</div>
					<div className="categories-row__text">Жесткие диски / SSD</div>
				</div>
				<div className={`categories-row__item ${activeItem === "keyboard" && "active"}`}onClick={()=>{handleCategoryClick("Keyboards")}}>
					<div className="categories-row__img">
						<IconRenderer id="category-row-keyboard-icon"></IconRenderer>
					</div>
					<div className="categories-row__text">Клавиатуры</div>
				</div>
				<div className={`categories-row__item ${activeItem === "ram" && "active"}`}onClick={()=>{handleCategoryClick("Rams")}}>
					<div className="categories-row__img">
						<IconRenderer id="category-row-ram-icon"></IconRenderer>
					</div>
					<div className="categories-row__text">Оперативная память</div>
				</div>
				<div className={`categories-row__item ${activeItem === "power_unit" && "active"}`}onClick={()=>{handleCategoryClick("Power_supplies")}}>
					<div className="categories-row__img">
						<IconRenderer id="category-row-power-unit-icon"></IconRenderer>
					</div>
					<div className="categories-row__text">Блоки питания</div>
				</div>
			</div>
		</div>
	);
};

export default CategoriesRow;
