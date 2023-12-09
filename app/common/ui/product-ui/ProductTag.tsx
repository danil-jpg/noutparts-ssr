'use client';
import React from 'react';
import './ProductTag.scss';

const ProductTag = ({ type } : {type: 'discount'|'new'|'salesHit'}) => {

	

	return (
		<div className={`product-tag ${type}`}>
			{type==='discount'? "Скидка": type==='new'? "Новинка": type==='salesHit'? "Хит продаж": "no tag provided"}
		</div>
	);
};

export default ProductTag;
