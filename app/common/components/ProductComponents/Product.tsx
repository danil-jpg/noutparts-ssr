import axios from "axios";
import React, { FC } from "react";
import IconRenderer from "../../ui/Icons/IconRenderer";
import "./Product.scss";
import Image from "next/image";
import Link from "next/dist/client/link";

import Breadcrumbs from "@/app/common/components/breadcrumbs/Breadcrumbs";
import { Breadcrumb } from "@/app/common/types/types";
import ProductPair from "./ProductPair/ProductPair";
import ProductTechs from "./ProductsTechs";

import ProductAvailability from "../../ui/product-ui/ProductAvailability";
import ProductInteractiveElems from "./ProductInteractiveElems";

interface TechCharacteristic {
	name: string;
	value: string | number;
}

interface TechCharacteristics {
	[key: string]: TechCharacteristic;
}
export default async function Product({ category, id }: { category: string; id: string }) {
	const fetchProductInfo = async (productType: string, productId: string) => {
		try {
			const response = await axios.get(`http://127.0.0.1:1337/api/${productType === "matrix" ? "matrice" : productType === "power_supply" ? "power-supplie" : productType === "battery" ? "batterie" : productType}s/${productId}?populate[0]=photo&populate[1]=pair_set&populate[2]=pair_set.photo&populate[3]=pair_set.photo.url`);
			const data = response.data.data.attributes;

			// Update the state with the fetched data
			return data;
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	const getProductTechCharacteristics = (category: string, product: any): TechCharacteristics => {
		const techObj: TechCharacteristics = {};

		switch (category) {
			case "hdd":
				techObj.technology = {
					name: "Технологія",
					value: product.technology
				};
				techObj.connector = {
					name: "Підключення",
					value: product.connector
				};
				techObj.memory_mb = {
					name: "Пам'ять_MB",
					value: product.memory_mb
				};

				break;
			case "matrix":
				techObj.permission = {
					name: "Роздільна здатність",
					value: product.permission
				};
				techObj.hashrate = {
					name: "Частота оновлення",
					value: product.hashrate
				};
				techObj.diagonale = {
					name: "Діагональ",
					value: product.diagonale
				};
				techObj.fastening = {
					name: "Підгонка",
					value: product.fastening
				};
				techObj.fiber_optic_technology = {
					name: "Технологія волокон",
					value: product.fiber_optic_technology
				};
				techObj.connector = {
					name: "Конектор",
					value: product.connector
				};
				techObj.backlight_type = {
					name: "Тип підсвітки",
					value: product.backlight_type
				};
				break;
			case "battery":
				techObj.voltage = {
					name: "Вольтаж",
					value: product.voltage
				};
				techObj.capacity = {
					name: "Місткість",
					value: product.capacity
				};
				techObj.type = {
					name: "Тип",
					value: product.type
				};
				break;
			case "keyboard":
				techObj.form_factor = {
					name: "Форм-фактор",
					value: product.form_factor
				};
				techObj.layout = {
					name: "Розкладка",
					value: product.layout
				};
				techObj.backlight = {
					name: "Підсвітка",
					value: product.backlight
				};
				break;
			case "power_supply":
				techObj.power = {
					name: "Потужність",
					value: product.power
				};
				techObj.matrix_type = {
					name: "Вольтаж",
					value: product.voltage
				};
				techObj.form_factor = {
					name: "Форм-фактор",
					value: product.form_factor
				};
				break;
			case "ram":
				techObj.memory_mb = {
					name: "Обсяг памяті",
					value: product.memory_mb
				};
				techObj.frequency_mhz = {
					name: "Частота",
					value: product.frequency_mhz
				};
				techObj.voltage = {
					name: "Вольтаж",
					value: product.voltage
				};
				break;

			default:
				break;
		}

		return techObj;
	};

	const product = await fetchProductInfo(category, id);
	const techCharacteristics = getProductTechCharacteristics(category, product);
	console.log("🚀 ~ file: Product.tsx:21 ~ product:", product);

	const techItems = Object.keys(techCharacteristics).map((key, index) => {
		if (index < 4) {
			const { name, value } = techCharacteristics[key];

			return (
				<div className="product-hero__tech-item" key={index}>
					<span>{name}:</span>
					{value}
				</div>
			);
		}
	});

	const breadcrumbArr: Breadcrumb[] = [
		{
			label: `${category}`,
			href: "/catalogue",
			active: false
		},
		{
			label: `${product.name ? product.name : "Продукт"}`,
			href: "/catalogue/filter-page",
			active: true
		}
	];

	return (
		<>
			<Breadcrumbs breadcrumbs={breadcrumbArr} classname="product__breadcrumbs"></Breadcrumbs>

			<div className="product-hero__wrapper">
				<div className="product-hero">
					<div className="product-hero__image-container">
						<Image fill={true} className="product-hero__image" alt="product-hero__image" src={product.photo.data[0].attributes.url}></Image>
					</div>
					<div className="product-hero__main-part">
						<div className="product-hero__product-name">{product.name}</div>
						<div className="product-hero__company-infos">
							<div className="product-hero__model-type-infos">
								<div className="product-hero__model-type-text">
									<span>Модель:</span> 552499/2090
								</div>
								<div className="product-hero__model-type-text">
									<span>Артикул:</span> 2090
								</div>
							</div>
							<ProductAvailability type={product.availability}></ProductAvailability>
						</div>

						<div className="product-hero__main-content">
							<div className="product-hero__tech-characteristics">{techItems}</div>
							<div className="product-hero__interactive-part">
								<ProductInteractiveElems category={category} id={id} tag={product.tag} price={product.price} discount={product.discount} product={product}></ProductInteractiveElems>
							</div>
						</div>
					</div>
				</div>
			</div>

			{product.pair_set.data && <ProductPair firstObj={product} secondObj={product.pair_set.data.attributes}></ProductPair>}

			<ProductTechs techCharacteristics={techCharacteristics}></ProductTechs>
		</>
	);
}
