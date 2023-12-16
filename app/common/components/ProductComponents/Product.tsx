"use client";
import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import IconRenderer from "../../ui/Icons/IconRenderer";
import "./Product.scss";
import Image from "next/image";
import Link from "next/dist/client/link";
import Breadcrumbs from "@/app/common/components/breadcrumbs/Breadcrumbs";
import { Breadcrumb } from "@/app/common/types/types";

interface ProductFields {
	[key: string]: any;
}

const Product = ({ category, id }: { category: string; id: string }) => {
	const [product, setProduct] = useState<ProductFields>({});
	console.log("🚀 ~ file: Product.tsx:21 ~ product:", product);

	const fetchProductNames = async (productType: string, productId: string) => {
		try {
			const response = await axios.get(`http://127.0.0.1:1337/api/${productType === "matrix" ? "matrice" : productType === "power_supply" ? "power-supplie" : productType === "battery" ? "batterie" : productType}s/${productId}?populate[0]=photo`);
			const data = response.data.data.attributes;

			// Update the state with the fetched data
			setProduct(data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	useEffect(() => {
		fetchProductNames(category, id);
	}, [category, id]);

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

			<div className="" style={{ height: 1000, fontSize: 20 }}>
				{/* Use the 'fields' data here */}
				PAGE IS HERE
			</div>
		</>
	);
};

export default Product;
