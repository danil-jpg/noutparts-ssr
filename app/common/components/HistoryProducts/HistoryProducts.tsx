"use client";
import React, { useState, useEffect, ChangeEvent, useRef } from "react";
import IconRenderer from "../../ui/Icons/IconRenderer";
import "../ProductComponents/SimilarProducts/SimilarProducts.scss";
import Image from "next/image";
import Link from "next/dist/client/link";
import axios from "axios";
import { useAppSelector } from "@/app/Redux/store";
import { IProduct } from "../../types/types";
import FeaturesCard from "../FeaturesComponent/FeaturesCard";
import Spinner from "../Spinner/Spinner";
import { fetchVisitedProducts } from "@/app/lib/data"; 

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

import swiperArrow from "/public/img/swiper-nav-arrow.svg";

const HistoryProducts = () => {
	const productsInBasket = useAppSelector((state) => state.basketReducer.products);
	const productsInFavs = useAppSelector((state) => state.favsReducer.products);

	const productsToLoad = useAppSelector((state) => state.historyProductsReducer.products);

	const [products, setProducts] = useState<IProduct[]>([]);

	useEffect(() => {
		const fetchAllProducts = async () => {
			try {
				const fetchedProducts = await Promise.all(
					productsToLoad.map(async (product) => {
						const productData = await fetchVisitedProducts(product.category, product.id);
						return productData as IProduct; // Assuming the fetched data matches IProduct interface
					})
				);

				// Flatten the array of arrays into a single array of products
				const allProducts = fetchedProducts.flat();

				// Set the products state with the fetched data
				setProducts(allProducts);
			} catch (error) {
				console.error("Error getting all product data:", error);
			}
		};

		// Call the function to fetch all products when productsToLoad changes or on initial load
		fetchAllProducts();
	}, [productsToLoad]);

	const swiperRef = useRef<SwiperType>();

	const [isEnd, setIsEnd] = useState<boolean | undefined>(false);
	const [isBeginning, setIsBeginning] = useState<boolean | undefined>(false);

	useEffect(() => {
		const checkSwiperStatus = () => {
			setIsEnd(swiperRef.current?.isEnd);
			setIsBeginning(swiperRef.current?.isBeginning);
		};
		// Initially check the status
		checkSwiperStatus();
		// Set up a listener for changes in isEnd and isBeginning
		const interval = setInterval(checkSwiperStatus, 500); // Change the interval as needed
	}, [swiperRef]);

	return (
		<div className="similar-products__wrapper history">
			<div className="similar-products">
				<div className="similar-products__top">
					<div className="similar-products__title history">Вы просматривали</div>
					<div className="similar-products__nav">
						<button onClick={() => swiperRef.current?.slidePrev()} className={`similar-products__nav-button ${isBeginning ? "disabled" : ""}`}>
							<Image src={swiperArrow} alt="swiperArrow" className="similar-products__nav-icon prev"></Image>
						</button>
						<button onClick={() => swiperRef.current?.slideNext()} className={`similar-products__nav-button ${isEnd ? "disabled" : ""}`}>
							<Image src={swiperArrow} alt="swiperArrow" className="similar-products__nav-icon"></Image>
						</button>
					</div>
				</div>
				<div className="similar-products__content history">
					<div className="similar-products__whitie history"></div>
					{products.length > 0 ? (
						<Swiper
							spaceBetween={40}
							slidesPerView={4}
							breakpoints={{
								5: {
									slidesPerView: "auto",
									spaceBetween: 24
								},
								600: {
									slidesPerView: "auto",
									spaceBetween: 30
								},
								1440: {
									slidesPerView: 4,
									spaceBetween: 40
								}
							}}
							modules={[Navigation]}
							onBeforeInit={(swiper) => {
								swiperRef.current = swiper;
							}}
							className="similar-products__slider history"
						>
							{products.map((product, index) => {
								// Check if the product exists in productsInBasket
								const foundProduct = productsInBasket.find((basketProduct) => basketProduct.name === product.name);
								// Determine if the product is bought
								const isBought = !!foundProduct;

								// Check if the product exists in productsInBasket
								const foundFav = productsInFavs.find((favProduct) => favProduct.name === product.name);
								// Determine if the product is bought
								const isFav = !!foundFav;

								return (
									<SwiperSlide className="similar-products__slide history" key={product.id}>
										<FeaturesCard key={index} product={product} isBought={isBought} isFav={isFav} />
									</SwiperSlide>
								);
							})}
						</Swiper>
					) : (
						<Spinner classname="features__spinner" />
					)}
				</div>
			</div>
		</div>
	);
};

export default HistoryProducts;
