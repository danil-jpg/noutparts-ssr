"use client";
import React, { FC, useState, useEffect, ChangeEvent } from "react";
import { IPrimaryInput } from "@/types";
import InputMask from "react-input-mask";
import IconRenderer from "../Icons/IconRenderer";
import "./PrimaryInput.scss";

const PrimaryInput: FC<IPrimaryInput> = ({ placeholder, label, type = "text" }) => {
	const [inputValue, setInputValue] = useState<string>("");
	const [error, setError] = useState<string | null>(null);
	const [isActive, setIsActive] = useState<boolean>(false);

	useEffect(() => {
		handleValidation(inputValue);
	}, []);

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setInputValue(event.target.value);
		handleValidation(event.target.value);
	};

	const handleValidation = (value: string) => {
		if (type === "email") {
			if (value.trim() !== "" && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
				setError("Email введён некоректно");
				return;
			}
		} else {
			if (value.trim() === "") {
				setError("This field cannot be empty.");
			} else if (type === "tel" && !value.match(/^[\d\s()+-]+$/)) {
				setError("Please enter a valid phone number.");
			} else {
				setError(null); // Clear error if validation passes
			}
		}
	};

	const handleFocus = (): void => {
		setIsActive(true);
	};

	const handleBlur = (): void => {
		setIsActive(false);
	};

	const maskTel = "+380 | 999 999 9999";

	return (
		<div className="primary-input">
			<label htmlFor={placeholder} className="primary-input__label">
				{type !== "email" && <span>*</span>}
				{label}
			</label>
			<div className={`primary-input__container ${isActive ? "active" : ""} ${error ? "error" : ""} ${type === "email" ? "email" : type === "tel" ? "tel" : type === "text" ? "text" : ""}`}>
				{type === "tel" ? <InputMask className={`primary-input__input ${type}`} mask={maskTel} value={inputValue} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur}></InputMask> : <input type={type} className={`primary-input__input ${type}`} id={placeholder} placeholder={placeholder} value={inputValue} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} />}

				{error ? <IconRenderer id="not-validated-sign"></IconRenderer> : <IconRenderer id="validated-sign"></IconRenderer>}
				{error && isActive && <div className="primary-input__error-popup">{error}</div>}
			</div>
			{type === "email" && ( 
				<div className="primary-input__email-description">Для отслеживания статуса заказа</div>
			)}
		</div>
	);
};

export default PrimaryInput;
