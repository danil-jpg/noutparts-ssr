"use client";
import React, { FC, useState, useRef, useEffect } from "react";
import Image from "next/image";
import mapIcon from "/public/img/map-icon.svg";
import "./TownInput.scss";

interface TownInputProps {
	data: string[];
	type: "towns" | "filials";
	setValue: React.Dispatch<React.SetStateAction<string | null>>;
}

const TownInput: FC<TownInputProps> = ({ data, type, setValue }) => {
	const [inputValue, setInputValue] = useState<string>("");
	const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
	const dropdownRef = useRef<HTMLUListElement>(null);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
		setShowSuggestions(true);
	};

	const selectItem = (item: string) => {
		setInputValue(item);
		setShowSuggestions(false);
	};

	const filteredItems = data.filter((item) => item.toLowerCase().includes(inputValue.toLowerCase()));

	const firstFiveItems = data.slice(0, 5);

	useEffect(() => {
		document.addEventListener("click", closeDropdown);

		return () => {
			document.removeEventListener("click", closeDropdown);
		};
	}, []);

	const closeDropdown = (e: MouseEvent) => {
		if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
			setShowSuggestions(false);
		}
	};

	return (
		<div className="town-input__container">
			<label htmlFor={`${type}Input`} className="town-input__label">
				<span>*</span>
				{type === "towns" ? "Город" : "Отделение почты"}
			</label>
			<div className="town-input__input-box">
				<input className="town-input__input" type="text" id={`${type}Input`} value={inputValue} onChange={handleInputChange} />
				{type === "filials" && <Image src={mapIcon} alt="" className="town-input__map-icon" />}
			</div>
			{type === "towns" && (
				<div className="town-input__5-buttons">
					{firstFiveItems.map((item, index) => (
						<button className="town-input__5-buttons-item" key={index} onClick={() => setInputValue(item)}>
							{item}
						</button>
					))}
				</div>
			)}
			{showSuggestions && (
				<ul ref={dropdownRef} className="town-input__dropdown">
					{filteredItems.map((item, index) => (
						<li className="town-input__dropdown-item" key={index} onClick={() => selectItem(item)}>
							{item}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default TownInput;
