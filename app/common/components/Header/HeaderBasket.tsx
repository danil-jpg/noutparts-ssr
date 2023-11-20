"use client";
import React, { FC, useState, useEffect, ChangeEvent } from "react";
import { IPrimaryInput } from "@/types";
import IconRenderer from "../../ui/Icons/IconRenderer";
import "./HeaderBasket.scss";

const HeaderBasket: FC = ({}) => {
	return (
		<div className="header-basket">
			<div className="header-basket__icon">
				<IconRenderer id="header-basket-sign"></IconRenderer>
				<div className="header-basket__quantity">0</div>
			</div>
			{/* add how many products we have */}
			<div className="header-basket__texts">
				<div className="header-basket__text">Корзина</div>
				<div className="header-basket__text">0 грн</div>
			</div>
		</div>
	);
};

export default HeaderBasket;
