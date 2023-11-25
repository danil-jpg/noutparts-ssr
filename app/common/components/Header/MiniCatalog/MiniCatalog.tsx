"use client";
import React, { FC, useState } from "react";
import { IPrimaryInput } from "@/types";
import IconRenderer from "../../../ui/Icons/IconRenderer";
import "./MiniCatalog.scss";

import CatalogItem from "./CatalogItem";

const MiniCatalog: FC = () => {
	const [bigMenuActive, setBigMenuActive] = useState<boolean>(false);
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const [activeProperty, setActiveProperty] = useState<string | null>(null);

	const toggleItem = (index: number):void => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	const closeDropdown = ():void => {
		setBigMenuActive(false);
		setActiveIndex(null);
		setActiveProperty(null);
	};

	const items = [
		{
			product_group_name: "Electronics",
			product_group_types: {
				"1024x600": ["Normal(стандарт)", "Slim (тонкая)"],
				"1024x768": ["Normal(стандарт)", "Slim (тонкая)"],
				"1024x720": ["Normal(стандарт)", "Slim (тонкая)"]
			}
		},
		{
			product_group_name: "Clothing",
			product_group_types: {
				cloth1: "T-shirt",
				cloth2: "Jeans",
				cloth3: "Dress"
			}
		}
		
	];

	return (
		<div className="mini-catalog" onClick={closeDropdown}>
			<div
				className="mini-catalog__header-button"
				onClick={(e) => {
					e.stopPropagation();
					setBigMenuActive(!bigMenuActive);
				}}
			>
				Каталог
				<div className="mini-catalog__header-button-icon">
					<IconRenderer id="mini-catalog-sign" />
				</div>
				<div className={`mini-catalog__header-button-icon mobile ${bigMenuActive && "active"}`}>
					<IconRenderer id="dropdown-arrow-right" />
				</div>
			</div>

			<div className={`mini-catalog__big-menu ${bigMenuActive ? "active" : ""}`}>
				{items.map((item, index) => (
					<CatalogItem key={index} item={item} isOpen={activeIndex === index} bigMenuActive={bigMenuActive} toggleItem={() => toggleItem(index)} activeProperty={activeProperty} setActiveProperty={setActiveProperty} />
				))}
			</div>
		</div>
	);
};

export default MiniCatalog;
