"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import IconRenderer from "../../ui/Icons/IconRenderer";
import "./Features.scss";
import Image from "next/image";
import Link from "next/dist/client/link";
import axios from "axios";
import { useAppSelector } from "@/app/Redux/store";
import { IProduct, categories } from "../../types/types";
import FeaturesCard from "./FeaturesCard";
import Spinner from "../Spinner/Spinner";
import { fetchFeaturedProducts } from "@/app/lib/data";

const Features = ({}) => {
	const [filterType, setFilterType] = useState<string>("new");
	const [loading, setLoading] = useState<boolean>(false); // New loading state

	const productTypes: categories[] = ["matrices", "batteries", "hdds", "keyboards", "rams", "power-Supplies"];

	const [products, setProducts] = useState<IProduct[]>([]);
	const productsInBasket = useAppSelector((state) => state.basketReducer.products);
	const productsInFavs = useAppSelector((state) => state.favsReducer.products);

	useEffect(() => {
		const promises = productTypes.map((type) => fetchFeaturedProducts(type, filterType));

		const fetchAllFeaturedProducts = async () => {
			try {
				setLoading(true); // Set loading to true when starting the fetch
				const productDataArray = await Promise.all(promises);
				const allProducts = productDataArray.flat();
				setProducts(allProducts);
			} catch (error) {
				console.error("Error getting all product data:", error);
			} finally {
				setLoading(false); // Set loading to false when fetch is completed (either success or error)
			}
		};

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
					{loading ? (
						<div className="spinner-container">
							<Spinner classname="features__spinner" white={true}/>
						</div>
					) : products.length > 0 ? (
						products.map((product, index) => {
							const foundProduct = productsInBasket.find((basketProduct) => basketProduct.name === product.name);
							const isBought = !!foundProduct;

							const foundFav = productsInFavs.find((favProduct) => favProduct.name === product.name);
							const isFav = !!foundFav;

							return <FeaturesCard key={index} product={product} isBought={isBought} isFav={isFav} />;
						})
					) : (
						<p>No products found</p>
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
