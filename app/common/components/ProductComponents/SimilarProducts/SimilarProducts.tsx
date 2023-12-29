"use client";
import React, { useState, useEffect, ChangeEvent, useRef } from "react";
import IconRenderer from "../../../ui/Icons/IconRenderer";
import "./SimilarProducts.scss";
import Image from "next/image";
import Link from "next/dist/client/link";
import axios from "axios";
import { useAppSelector } from "@/app/Redux/store";
import { IProduct } from "../../../types/types";
import SimilarProductCard from "./SimilarProductsCard";
import Spinner from "../../Spinner/Spinner";
import { fetchSimilarProducts } from "@/app/lib/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

import swiperArrow from "/public/img/swiper-nav-arrow.svg";

interface ProductImages {
	id: number;
	attributes: { url: string; width: number; height: number };
}
type PropsType = {
	images: ProductImages[];
};


const SimilarProducts = ({ productType }: { productType: string }) => {
	const [products, setProducts] = useState<IProduct[]>([]);

	const productsInBasket = useAppSelector((state) => state.basketReducer.products);
	const productsInFavs = useAppSelector((state) => state.favsReducer.products);
	// Useeffect that runs all funcs and fills the products array with them
	useEffect(() => {
		const fetchAllSimilarProducts = async () => {
			try {
				// Fetch products using fetchFeaturedProducts for the given product and filter type
				const productData = await fetchSimilarProducts(productType);

				// Set the products state with the fetched data
				setProducts(productData);
			} catch (error) {
				console.error("Error getting product data:", error);
			}
		};

		// Call the function to fetch products when filterType or productType changes
		fetchAllSimilarProducts();
	}, [productType, fetchSimilarProducts, setProducts]);

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
		<div className="similar-products__wrapper">
			<div className="similar-products">
				<div className="similar-products__top">
					<div className="similar-products__title">Похожие товары</div>
					<div className="similar-products__nav">
						<button onClick={() => swiperRef.current?.slidePrev()} className={`similar-products__nav-button ${isBeginning ? "disabled" : ""}`}>
							<Image src={swiperArrow} alt="swiperArrow" className="similar-products__nav-icon prev"></Image>
						</button>
						<button onClick={() => swiperRef.current?.slideNext()} className={`similar-products__nav-button ${isEnd ? "disabled" : ""}`}>
							<Image src={swiperArrow} alt="swiperArrow" className="similar-products__nav-icon"></Image>
						</button>
					</div>
				</div>
				<div className="similar-products__content">
					<div className="similar-products__whitie"></div>
					<Swiper
						spaceBetween={40}
						slidesPerView={3}
						breakpoints={{
							5: {
								slidesPerView: 'auto',
								spaceBetween: 24
							},
							600: {
								slidesPerView: 'auto',
								spaceBetween: 30
							},
							1440: {
								slidesPerView: 3,
								spaceBetween: 40
							}
						}}
						modules={[Navigation]}
						onBeforeInit={(swiper) => {
							swiperRef.current = swiper;
						}}
						className="similar-products__slider"
					>
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
									<SwiperSlide className="similar-products__slide" key={product.id}>
										<SimilarProductCard key={index} product={product} isBought={isBought} isFav={isFav} />
									</SwiperSlide>
								);
							})
						) : (
							<Spinner classname="similar-products__spinner" />
						)}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default SimilarProducts;
