"use client";
import React, { FC, useState, useEffect, ChangeEvent } from "react";
import { IPrimaryInput } from "@/types";
import IconRenderer from "../../ui/Icons/IconRenderer";
import "./HeaderFavs.scss";
import { useAppSelector } from "@/app/Redux/store";
import Link from "next/link";

const HeaderFavs: FC = ({}) => {
	const products = useAppSelector((state) => state.favsReducer.products);
	// console.log("🚀 ~ file: HeaderFavs.tsx:10 ~ products:", products)
	return (
		<Link href={"/favourite"}>
			<div className="header-favs">
				<div className="header-favs__icon">
					<IconRenderer id="header-heart-sign"></IconRenderer>
				</div>
				{/* add how many favs we have */}
				<div className="header-favs__text">Избранное ({products.length})</div>
			</div>
		</Link>
	);
};

export default HeaderFavs;
