"use client";
import React, { FC, useState, useEffect, ChangeEvent } from "react";
import "./ProductAvailability.scss";
import IconRenderer from "../Icons/IconRenderer";

const ProductAvailability = ({ type }: { type: "available" | "ending" | "outOfStock" }) => {
	return (
		<div className={`product-availability ${type === "available" ? "available" : type === "ending" ? "ending" : type === "outOfStock" ? "outOfStock" : ""}`}>
			{type === "available" ? (
				<div className="product-availability__icon-wrapper green">
					<IconRenderer id="available-sign"></IconRenderer>
				</div>
			) : type === "ending" ? (
				<div className="product-availability__icon-wrapper orange">
					<IconRenderer id="ending-sign"></IconRenderer>
				</div>
			) : type === "outOfStock" ? (
				<div className="product-availability__icon-wrapper red">
					<IconRenderer id="out-of-stock-sign"></IconRenderer>
				</div>
			) : (
				"no type provided"
			)}
			{type === "available" ? "В наличии" : type === "ending" ? "Заканчивается" : type === "outOfStock" ? "Нет в наличии" : "no type provided"}
		</div>
	);
};

export default ProductAvailability;
