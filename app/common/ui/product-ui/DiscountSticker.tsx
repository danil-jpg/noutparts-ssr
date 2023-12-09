"use client";
import React, { FC, useState, useEffect, ChangeEvent } from "react";
import InputMask from "react-input-mask";
import IconRenderer from "../Icons/IconRenderer";
import "./DiscountSticker.scss";

const DiscountSticker = ({ amount } : {amount: number}) => {

	

	return (
		<div className="discount-sticker">
			{amount} ₴
		</div>
	);
};

export default DiscountSticker;
