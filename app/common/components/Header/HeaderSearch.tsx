"use client";
import React, { FC, useState, useEffect, ChangeEvent } from "react";
import IconRenderer from "../../ui/Icons/IconRenderer";
import "./HeaderSearch.scss";
import axios from "axios";

import { fetchProductNames } from "@/app/lib/data";

type IProductNamesAttributes = {
	name: string;
};

export interface ProductData {
	data: {
		id: number;
		attributes: IProductNamesAttributes;
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
	matrix: [],
	battery: [],
	hdd: [],
	keyboard: [],
	ram: [],
	"power-unit": []
	// //... (other product categories)
};
let products: Products = {};

const HeaderSearch = () => {
	const processFetchedData = (productType: string, data: ProductData["data"]) => {
		if (data.length > 0) {
			if (!products[productType]) {
				products[productType] = [];
			}

			data.forEach((item) => {
				products[productType].push(item.attributes.name);
			});
		}
	};

	const fetchProductsData = async (productType: string) => {
		const fetchedData = await fetchProductNames(productType);
		processFetchedData(productType, fetchedData);
	};

	// Inside useEffect
	useEffect(() => {
		const productTypes: string[] = ["matrix", "hdd", "keyboard", "ram", "battery", "power_supply"];

		// const fetchDataPromises: Promise<void>[] = [];
		// console.log("🚀 ~ file: HeaderSearch.tsx:62 ~ useEffect ~ fetchDataPromises:", fetchDataPromises)

		// productTypes.forEach((productType) => {
		// 	const promise = fetchProductsData(productType);
		// 	fetchDataPromises.push(promise);
		// });

		// Promise.all(fetchDataPromises)
		// 	.then(() => {
		// 		console.log("Products:", products);
		// 	})
		// 	.catch((error) => {
		// 		console.error("Error fetching products:", error);
		// 	});

		const runPromises = async () => {
			await Promise.all([fetchProductsData(productTypes[0]), fetchProductsData(productTypes[1]), fetchProductsData(productTypes[2]), fetchProductsData(productTypes[3]), fetchProductsData(productTypes[4]), fetchProductsData(productTypes[5])]);
		};

		runPromises();
	}, []);

	const [searchInput, setSearchInput] = useState<string>("");
	const [suggestions, setSuggestions] = useState<{ category: string; suggestions: string[] }[]>([]);
	const [historySuggestions, setHistorySuggestions] = useState<{ category: string; suggestions: string[] }[]>(Object.entries(initialHistorySuggestions).map(([category, suggestions]) => ({ category, suggestions })));

	const clearHistory = () => {
		const clearedHistory = Object.entries(initialHistorySuggestions).map(([category, suggestions]) => ({ category, suggestions: [] }));
		setHistorySuggestions(clearedHistory);
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const input = e.target.value;
		setSearchInput(input);

		const filteredSuggestions: { category: string; suggestions: string[] }[] = Object.entries(products)
			.map(([category, items]) => ({
				category,
				suggestions: items.filter((item) => item.toLowerCase().includes(input.toLowerCase())) as string[]
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
		// console.log(historySuggestions);
		// console.log(products[0]);
	};

	return (
		<div className="header-search">
			<div className="header-search__input-container">
				<div className="header-search__lupa-icon">
					<IconRenderer id="header-search-sign" />
				</div>
				<input type="text" className="header-search__input" placeholder="Поиск по каталогу.." value={searchInput} onChange={handleInputChange} />
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
							{historySuggestions.map(
								(historyCategorySuggestion, historyIndex) =>
									// Only render if there are suggestions in the category
									historyCategorySuggestion.suggestions.length > 0 && (
										<div className="header-search__category" key={historyIndex}>
											{historyCategorySuggestion.category.length > 0 && <h4 className="header-search__category-heading">{historyCategorySuggestion.category}</h4>}
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
									)
							)}
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default HeaderSearch;
