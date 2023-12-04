"use client";
import React, { FC, useState, useEffect, ChangeEvent } from "react";
import { IPrimaryInput } from "@/types";
import { PatternFormat } from "react-number-format";
import IconRenderer from "../Icons/IconRenderer";
import "./PrimaryInput.scss";

const PrimaryInput: FC<IPrimaryInput> = ({ placeholder, label, type = "text", setValue }) => {
	const [inputValue, setInputValue] = useState<string>("");
	const [error, setError] = useState<string | null>(null);
	const [isActive, setIsActive] = useState<boolean>(false);

	useEffect(() => {
		handleValidation(inputValue);
	}, []);

	const handleInputChange = (value: string): void => {
		setInputValue(value);
		handleValidation(value);
		setValue(inputValue);
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
			} else if (type === "tel") {
				if (value.length < 9) {
					setError("Phone number should be at least 9 digits.");
				} else if (!value.match(/^[\d\s()+-]+$/)) {
					setError("Please enter a valid phone number.");
				} else {
					setError(null); // Clear error if validation passes
				}
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

	const maskTel = "+380 | 99 999 9999";

	return (
		<div className="primary-input">
			<label htmlFor={placeholder} className="primary-input__label">
				{type !== "email" && <span>*</span>}
				{label}
			</label>
			<div className={`primary-input__container ${isActive ? "active" : ""} ${error ? "error" : ""} ${type === "email" ? "email" : type === "tel" ? "tel" : type === "text" ? "text" : ""}`}>
				{type === "tel" ? (
					<PatternFormat
						type="tel"
						displayType="input"
						format="+380 | ## ### ####"
						valueIsNumericString
						allowEmptyFormatting
						mask="_"
						className={`primary-input__input ${type}`}
						onValueChange={(values, sourceInfo) => {
							handleInputChange(values.value);
						}}
						onFocus={handleFocus}
						onBlur={handleBlur}
					></PatternFormat>
				) : (
					<input
						type={type}
						className={`primary-input__input ${type}`}
						id={placeholder}
						placeholder={placeholder}
						value={inputValue}
						onChange={(event) => {
							handleInputChange(event.target.value);
						}}
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>
				)}

				{error ? <IconRenderer id="not-validated-sign"></IconRenderer> : <IconRenderer id="validated-sign"></IconRenderer>}
				{error && isActive && <div className="primary-input__error-popup">{error}</div>}
			</div>
			{type === "email" && <div className="primary-input__email-description">Для отслеживания статуса заказа</div>}
		</div>
	);
};

export default PrimaryInput;
