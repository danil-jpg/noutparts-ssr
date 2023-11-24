"use client";
import React, { FC, useState, useEffect } from "react";
import { PropertyItem } from "@/types";
import { useRouter } from "next/navigation"; 

const PropertyItem: FC<PropertyItem> = ({ catalogItemName, property, subProperties, setActiveSubProperty, onSelectionChange }) => {
	const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
	//   console.log("🚀 ~ file: PropertyItem.tsx:8 ~ selectedOptions:", selectedOptions)
	const router = useRouter();

	const handleClick = (subProperty: string) => {
		let updatedOptions: string[] = [];

		if (selectedOptions.includes(subProperty)) {
			updatedOptions = selectedOptions.filter((option) => option !== subProperty);
		} else {
			updatedOptions = [catalogItemName, property, subProperty];
		}

		setSelectedOptions(updatedOptions);
	};

	useEffect(() => {
		onSelectionChange(selectedOptions);

		if (selectedOptions.length > 0) {
			const url = `/catalog/${selectedOptions.join(",")}`;
			router.push(url);
		}
	}, [selectedOptions, onSelectionChange, router]);

	return (
		<>
			{subProperties && (
				<div className="mini-catalog__properties">
					{subProperties.map((subProperty, index) => (
						<div className={`mini-catalog__sub-property ${selectedOptions.includes(subProperty) ? "selected" : ""}`} key={index} onClick={() => handleClick(subProperty)}>
							{subProperty}
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default PropertyItem;
