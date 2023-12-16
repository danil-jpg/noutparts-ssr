"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import IconRenderer from "../../ui/Icons/IconRenderer";
import "./Features.scss";
import Image from "next/image";
import Link from "next/dist/client/link";
import axios from "axios";
import { useAppSelector } from "@/app/Redux/store";

import FeaturesCard from "./FeaturesCard";
import Spinner from "../Spinner/Spinner";

export interface Product {
	name: string;
	price: number;
	discount: number;
	photo_url: string;
	id: number;
	category: string;
}
const Features = ({}) => {
	const [filterType, setFilterType] = useState<string>("new");

	// func to transform the data from request
	const transformData = (productsData: any[], category: string): Product[] => {
		return productsData.map((productData: any) => {
			const id = productData.id;
			const { name, price, discount, photo } = productData.attributes;

			// Assuming photo.data is an array and taking the first element
			const photoUrl = photo?.data?.[0]?.attributes?.url || "";
			return {
				id,
				name,
				price,
				discount,
				photo_url: photoUrl,
				category
			};
		});
	};
	// func to get data with request
	const fetchFeaturedProducts = async (productType: string): Promise<Product[]> => {
		try {
			const productUrl = productType === "matrix" ? "matrice" : productType === "power_supply" ? "power-supplie" : productType === "battery" ? "batterie" : productType;

			const response = await axios.get(`http://127.0.0.1:1337/api/${productUrl}s/
			?populate[0]=photo
			&filters[tag][$in][0]=${filterType}
			&fields[0]=name&fields[1]=price&fields[2]=discount&fields[3]=id`);

			const data = response.data;

			return transformData(data.data || [], productType);
		} catch (error) {
			console.error("Error fetching data:", error);
			return [];
		}
	};

	const [products, setProducts] = useState<Product[]>([]); // Assuming Product is the interface for your products
	
	console.log("🚀 ~ file: Features.tsx:60 ~ Features ~ products:", products);

	const productsInBasket = useAppSelector((state) => state.basketReducer.products);
	const productsInFavs = useAppSelector((state) => state.favsReducer.products);
	// Useeffect that runs all funcs and fills the products array with them
	useEffect(() => {
		const fetchAllFeaturedProducts = async () => {
			try {
				const productTypes: string[] = ["matrix", "hdd", "keyboard", "ram", "battery", "power_supply"];

				// Create an array of promises using fetchFeaturedProducts for each product type
				const promises = productTypes.map((type) => fetchFeaturedProducts(type));

				// Use Promise.all to execute all promises concurrently
				const productDataArray = await Promise.all(promises);

				// Flatten the array of arrays into a single array of products
				const allProducts = productDataArray.flat();

				// Set the products state with the fetched data
				setProducts(allProducts);
			} catch (error) {
				console.error("Error getting all product data:", error);
			}
		};

		// Call the function to fetch all products
		fetchAllFeaturedProducts();
	}, [filterType]);

	const [showState, setShowState] = useState<boolean>(false);

	return (
		<div className="features__wrapper">
			<div className="features">
				<div className="features__nav">
					<div
						className={`features__nav-item ${filterType === "new" ? "active" : ""}`}
						onClick={() => {
							setFilterType("new");
						}}
					>
						<div className="features__nav-icon">
							<IconRenderer id="features-lightning-sign"></IconRenderer>
						</div>
						Новые поступления
					</div>
					<div
						className={`features__nav-item ${filterType === "salesHit" ? "active" : ""}`}
						onClick={() => {
							setFilterType("salesHit");
						}}
					>
						<div className="features__nav-icon">
							<IconRenderer id="features-fire-sign"></IconRenderer>
						</div>
						Хиты продаж
					</div>
					<div
						className={`features__nav-item ${filterType === "discount" ? "active" : ""}`}
						onClick={() => {
							setFilterType("discount");
						}}
					>
						<div className="features__nav-icon">
							<IconRenderer id="features-discount-sign"></IconRenderer>
						</div>
						Скидки
					</div>
				</div>

				<div className={`features__content ${showState ? "show" : ""}`}>
					{products.length > 0 ? (
						products.map((product, index) => {
							// Check if the product exists in productsInBasket
							const foundProduct = productsInBasket.find((basketProduct) => basketProduct.name === product.name);
							// Determine if the product is bought
							const isBought = !!foundProduct;

							// Check if the product exists in productsInBasket
							const foundFav = productsInFavs.find((favProduct) => favProduct.name === product.name);
							// Determine if the product is bought
							const isFav = !!foundFav;

							return (
								<FeaturesCard
									key={index}
									name={product.name}
									price={product.price}
									discount={product.discount}
									photo_url={product.photo_url}
									product={product}
									isBought={isBought} 
									isFav={isFav} 
								/>
							);
						})
					) : (
						<Spinner classname="features__spinner" />
					)}
					<div className={`features__show-hide-block ${showState ? "show" : ""}`}>
						<div
							className="features__show-hide-button"
							onClick={() => {
								setShowState(!showState);
							}}
						>
							{showState ? "Смотреть меньше" : "Посмотреть ещё"}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
