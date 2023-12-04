"use client";
import React, { FC, useState, useEffect } from "react";
import { IHeaderMiniCatalogPropertyItem } from "@/types";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/dist/client/link";

const HeaderMiniCatalogPropertyItem: FC<IHeaderMiniCatalogPropertyItem> = ({ catalogItemName, property, subProperties }) => {
	const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

	const handleClick = (subProperty: string) => {
		console.log("Options" + [catalogItemName, property, subProperty]);
		let updatedOptions: string[] = [];

		if (selectedOptions.includes(subProperty)) {
			updatedOptions = selectedOptions.filter((option) => option !== subProperty);
		} else {
			updatedOptions = [catalogItemName, property, subProperty];
		}
		console.log("updatedOptions" + updatedOptions);
		setSelectedOptions(updatedOptions);
		console.log("🚀 ~ file: HeaderMiniCatalogPropertyItem.tsx:22 ~ handleClick ~ setSelectedOptions(updatedOptions);:", setSelectedOptions(updatedOptions));
	};

	useEffect(() => {
		if (selectedOptions.length === 3) {
			createPageURL();
		}
	}, [selectedOptions]);

	const createPageURL = () => {
		if (selectedOptions.length !== 3) {
			// selectedOptions should have three elements to proceed
			return;
		}

		let params = new URLSearchParams();

		console.log("selectedOptions", selectedOptions);
		params.set("catalogItemName", selectedOptions[0]);
		params.set("property", selectedOptions[1]);
		params.set("subProperty", selectedOptions[2]);

		const url = `catalogue?${params}`;

		// Do something with the URL (e.g., navigate to it)
		window.location.href = url;
	};

	return (
		<>
			{subProperties && (
				<div className="mini-catalog__properties">
					{subProperties.map((subProperty, index) => (
						<div
							key={index}
							className={`mini-catalog__sub-property ${selectedOptions.includes(subProperty) ? "selected" : ""}`}
							onClick={() => {
								handleClick(subProperty);
							}}
						>
							{subProperty}
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default HeaderMiniCatalogPropertyItem;
