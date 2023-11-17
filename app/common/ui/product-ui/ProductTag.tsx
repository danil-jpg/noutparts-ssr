"use client";
import React, { FC, useState, useEffect, ChangeEvent } from "react";
import "./ProductTag.scss";

const ProductTag = ({ type } : {type: 'discount'|'new'|'salesHit'}) => {

	

	return (
		<div className={`product-tag ${type==='discount'? "discount": type==='new'? "new": type==='salesHit'? "salesHit": ""}`}>
			{type==='discount'? "Скидка": type==='new'? "Новинка": type==='salesHit'? "Хит продаж": "no tag provided"}
		</div>
	);
};

export default ProductTag;
