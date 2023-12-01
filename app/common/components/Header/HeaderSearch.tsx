"use client";
import React, { FC, useState, useEffect, ChangeEvent } from "react";
import IconRenderer from "../../ui/Icons/IconRenderer";
import "./HeaderSearch.scss";

const HeaderSearch: FC = () => {
	const products = {
		Матрицы: [
			"Матриця 13.3 B133XTF01.4",
			"Матриця 13.3 B133XTF01.5",
			"Матриця 13.3 B133XTF01.6"
			//... (more product names)
		],
		Аккумуляторы: [
			"Battery 7200 mah 14.8v",
			"Battery 2200 mah 14.8v",
			"Battery 1700 mah 14.8v"
			//... (more product names)
		],
		"Жесткие диски": [
			"Hard Disk 8000000 mb 3.5inch Sata",
			"Hard Disk 4000000 mb 3.5inch Sata",
			"Hard Disk 1000000 mb 3.5inch Sata"
			//... (more product names)
		],
		Клавиатуры: [
			"Full-size black Keyboard",
			"Full-size white Keyboard",
			"TKL black Keyboard"
			//... (more product names)
		],
		"Оперативная память": [
			"RAM 96 gb 5600mhz",
			"RAM 32 gb 5600mhz",
			"RAM 96 gb 3200mhz"
			//... (more product names)
		],
		"Блоки питания": [
			"850w 12 A Power Unit",
			"600w 12 A Power Unit",
			"500w 9.8 A Power Unit"
			//... (more product names)
		]
		//... (other product categories)
	};

	const initialHistorySuggestions = {
		Матрицы: [
			"Матриця 13.3 B133XTF01.4",
			"Матриця 13.3 B133XTF01.5",
			"Матриця 13.3 B133XTF01.6"
			//... (more product names)
		],
		Аккумуляторы: [
			"Battery 7200 mah 14.8v",
			"Battery 2200 mah 14.8v",
			"Battery 1700 mah 14.8v"
			//... (more product names)
		],
		"Жесткие диски": [
			"Hard Disk 8000000 mb 3.5inch Sata",
			"Hard Disk 4000000 mb 3.5inch Sata",
			"Hard Disk 1000000 mb 3.5inch Sata"
			//... (more product names)
		],
		Клавиатуры: [
			"Full-size black Keyboard",
			"Full-size white Keyboard",
			"TKL black Keyboard"
			//... (more product names)
		],
		"Оперативная память": [
			"RAM 96 gb 5600mhz",
			"RAM 32 gb 5600mhz",
			"RAM 96 gb 3200mhz"
			//... (more product names)
		],
		"Блоки питания": [
			"850w 12 A Power Unit",
			"600w 12 A Power Unit",
			"500w 9.8 A Power Unit"
			//... (more product names)
		]
		//... (other product categories)
	};

	const [searchInput, setSearchInput] = useState<string>("");
	const [suggestions, setSuggestions] = useState<{ category: string; suggestions: string[] }[]>([]);
	const [historySuggestions, setHistorySuggestions] = useState<{ category: string; suggestions: string[] }[]>(Object.entries(initialHistorySuggestions).map(([category, suggestions]) => ({ category, suggestions })));

	const clearHistory = () => {
		setHistorySuggestions([]);
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
									{categorySuggestion.suggestions.map((suggestion, idx) => (
										<li className="header-search__suggestion" key={idx}>
											<IconRenderer id="header-search-sign" />
											<div>{suggestion}</div>
										</li>
									))}
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
									<ul className="header-search__suggestions">
										{historyCategorySuggestion.suggestions.map((suggestion, idx) => (
											<li className="header-search__suggestion" key={idx}>
												<IconRenderer id="header-history-sign" />

												<div>{suggestion}</div>
											</li>
										))}
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
