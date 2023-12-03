"use client";
import React, { FC, useState, useEffect, ChangeEvent } from "react";
import IconRenderer from "../../ui/Icons/IconRenderer";
import "./HeaderSearch.scss";
import axios from "axios";

// Define specific interfaces for each product type
interface MatrixAttributes {
	matrix_name: string;
	// Add other attributes specific to matrices
}

interface HDDAttributes {
	hdd_name: string;
	// Add other attributes specific to HDDs
}

interface KeyboardAttributes {
	keyboard_name: string;
	// Add other attributes specific to keyboards
}

interface RAMAttributes {
	ram_name: string;
	// Add other attributes specific to keyboards
}

interface BatteryAttributes {
	battery_name: string;
	// Add other attributes specific to keyboards
}

interface PoweSupplyAttributes {
	power_supply_name: string;
	// Add other attributes specific to keyboards
}

// Union type for all possible attributes
type ProductAttributes = MatrixAttributes | HDDAttributes | KeyboardAttributes | RAMAttributes | BatteryAttributes | PoweSupplyAttributes;

interface ProductData {
	data: {
		id: number;
		attributes: ProductAttributes;
	}[];
	meta: {
		pagination: any; // You can define a specific type for pagination if available
		// Add other meta information if available in your data
	};
}

type Products = {
	[key: string]: string[];
};

const initialHistorySuggestions = {
	// matrix: [],
	// battery: [],
	// hdd: [],
	// keyboard: [],
	// ram: [],
	// "power-unit": []
	// //... (other product categories)
};
let products: Products = {};

const HeaderSearch: FC = () => {

	const fetchProductsData = async (productType: string) => {
		// let fieldName: keyof ProductAttributes;
		let attributes: ProductAttributes;

		let fieldName: keyof ProductAttributes;

		switch (productType) {
			case "matrix":
				fieldName = "matrix_name" as keyof ProductAttributes;
				break;
			case "hdd":
				fieldName = "hdd_name" as keyof ProductAttributes;
				break;
			case "keyboard":
				fieldName = "keyboard_name" as keyof ProductAttributes;
				break;
			case "ram":
				fieldName = "ram_name" as keyof ProductAttributes;
				break;
			case "power_supply":
				fieldName = "power_supply_name" as keyof ProductAttributes;
				break;
			case "battery":
				fieldName = "battery_name" as keyof ProductAttributes;
				break;
			default:
				throw new Error("Invalid product type");
		}

		try {
			const response = await axios.get<ProductData>(`https://noutparts-strapi.onrender.com/api/${productType === "matrix" ? "matrice" : productType === "power_supply" ? "power-supplie" : productType === "battery" ? "batterie" : productType}s/?fields[0]=${fieldName}`);

			const data: ProductData = response.data;
			console.log(`🚀 ~ Data for ${productType}:`, data.data);

			if (data.data && data.data.length > 0) {
				// Check if the product type already exists in the products object
				if (!products[productType]) {
					products[productType] = [];
				}

				data.data.forEach((item) => {
					if (fieldName in item.attributes) {
						// Check if the product name already exists before pushing
						if (!products[productType].includes(item.attributes[fieldName])) {
							products[productType].push(item.attributes[fieldName]);
						}
					}
				});
			}

			console.log("Products:", products);
		} catch (error) {
			console.error("Error fetching data:", error);
			return {};
		}
	};


	const handleInputClick = () => {
		fetchProductsData("matrix");
		fetchProductsData("hdd");
		fetchProductsData("keyboard");
		fetchProductsData("ram");
		fetchProductsData("battery");
		fetchProductsData("power_supply");
	};



	const [searchInput, setSearchInput] = useState<string>("");
	const [suggestions, setSuggestions] = useState<{ category: string; suggestions: string[] }[]>([]);
	const [historySuggestions, setHistorySuggestions] = useState<{ category: string; suggestions: string[] }[]>(Object.entries(initialHistorySuggestions).map(([category, suggestions]) => ({ category, suggestions })));

	const clearHistory = () => {
		setHistorySuggestions(Object.entries(initialHistorySuggestions).map(([category, suggestions]) => ({ category, suggestions })));
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const input = e.target.value;
		setSearchInput(input);

		const filteredSuggestions = Object.entries(products)
			.map(([category, items]) => ({
				category,
				suggestions: items.filter((item) => item.toLowerCase().includes(input.toLowerCase()))
			}))
			.filter(({ suggestions }) => suggestions.length > 0);

		setSuggestions(filteredSuggestions);

		const filteredHistorySuggestions = Object.entries(initialHistorySuggestions).map(([category, suggestions]) => ({
			category,
			suggestions
		}));

		setHistorySuggestions(filteredHistorySuggestions);
	};

	const handleSuggestionClick = (clickedSuggestion: string, category: string) => {
		const updatedHistorySuggestions = [...historySuggestions];

		// Find the category in history suggestions
		const categoryIndex = updatedHistorySuggestions.findIndex((item) => item.category === category);

		if (categoryIndex !== -1) {
			// Check if the suggestion already exists in history
			const suggestionIndex = updatedHistorySuggestions[categoryIndex].suggestions.indexOf(clickedSuggestion);

			if (suggestionIndex === -1) {
				// Add the clicked suggestion to history
				updatedHistorySuggestions[categoryIndex].suggestions.unshift(clickedSuggestion);
				// Update the state with the modified history suggestions
				setHistorySuggestions(updatedHistorySuggestions);
			}
		} else {
			// If category not found in history, create a new entry with the clicked suggestion
			setHistorySuggestions([
				...updatedHistorySuggestions,
				{
					category,
					suggestions: [clickedSuggestion]
				}
			]);
		}
		console.log(historySuggestions);
		console.log(products[0]);
	};

	return (
		<div className="header-search">
			<div className="header-search__input-container">
				<div className="header-search__lupa-icon">
					<IconRenderer id="header-search-sign" />
				</div>
				<input type="text" className="header-search__input" placeholder="Поиск по каталогу.." value={searchInput} onChange={handleInputChange} onClick={()=>{handleInputClick()}} />
			</div>
			<div className="header-search__search-button">
				<IconRenderer id="header-search-sign" />
			</div>

			{searchInput && (
				<div className="header-search__search-field">
					<div className="header-search__suggestions-box">
						<div className="header-search__box-heading">Предложенные варианты</div>
						{suggestions.map((categorySuggestion, index) => (
							<div className="header-search__category" key={index}>
								<h4 className="header-search__category-heading">{categorySuggestion.category}</h4>
								<ul className="header-search__suggestions">
									{categorySuggestion.suggestions.map((suggestion, idx) => {
										const truncatedSuggestion = suggestion.length > 40 ? suggestion.slice(0, 50) + "..." : suggestion;
										return (
											<li className="header-search__suggestion" key={idx} onClick={() => handleSuggestionClick(suggestion, categorySuggestion.category)}>
												<IconRenderer id="header-search-sign" />
												<div>{truncatedSuggestion}</div>
											</li>
										);
									})}
								</ul>
							</div>
						))}
					</div>

					{historySuggestions.length > 0 && (
						<div className="header-search__history-box">
							<div className="header-search__box-heading">
								История поиска
								<button className="header-search__clear-button" onClick={clearHistory}>
									Очистить историю
								</button>
							</div>
							{historySuggestions.map((historyCategorySuggestion, historyIndex) => (
								<div className="header-search__category" key={historyIndex}>
									{historyCategorySuggestion.category.length > 0 && ( // Check if category is not empty
										<h4 className="header-search__category-heading">{historyCategorySuggestion.category}</h4>
									)}
									<ul className="header-search__suggestions">
										{historyCategorySuggestion.suggestions.map((suggestion, idx) => {
											const truncatedSuggestion = suggestion.length > 40 ? suggestion.slice(0, 50) + "..." : suggestion;
											return (
												<li className="header-search__suggestion" key={idx}>
													<IconRenderer id="header-history-sign" />
													<div>{truncatedSuggestion}</div>
												</li>
											);
										})}
									</ul>
								</div>
							))}
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default HeaderSearch;
