"use client";
import React, { FC, useState, useEffect } from "react";
import { IHeaderMiniCatalogPropertyItem } from "@/types";
import { useAppDispatch } from "@/app/Redux/store";
import { setQueryArr, setType } from "@/app/Redux/slice/query/query";
import { useRouter } from "next/navigation";

const HeaderMiniCatalogPropertyItem: FC<IHeaderMiniCatalogPropertyItem> = ({ catalogItemName, property, subProperties, setBigMenuActive }) => {
	const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

	const dispatch = useAppDispatch();

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
		if (selectedOptions.length === 3) {
			switch (selectedOptions[0].toLowerCase()) {
				case "matrices":
					if (window.location.href.match(/\bmatrices\b/gi)) {
						router.refresh();
					} else {
						router.push("/catalogue/filter-page/" + selectedOptions[0]);
					}

					dispatch(
						setQueryArr([
							{
								searchParam: "permission",
								searchParamKeys: [selectedOptions[1]]
							},
							{
								searchParam: "fastening",
								searchParamKeys: [selectedOptions[2]]
							}
						])
					);
					dispatch(setType("matrices"));
					break;
				case "batteries":
					if (window.location.href.match(/\bbatteries\b/gi)) {
						router.refresh();
					} else {
						router.push("/catalogue/filter-page/" + selectedOptions[0]);
					}

					dispatch(
						setQueryArr([
							{
								searchParam: "capacity",
								searchParamKeys: [selectedOptions[1]]
							},
							{
								searchParam: "voltage",
								searchParamKeys: [selectedOptions[2]]
							}
						])
					);
					dispatch(setType("batteries"));
					break;

				case "hdds":
					if (window.location.href.match(/\hdds\b/gi)) {
						router.refresh();
					} else {
						router.push("/catalogue/filter-page/" + selectedOptions[0]);
					}

					dispatch(
						setQueryArr([
							{
								searchParam: "technology",
								searchParamKeys: [selectedOptions[1]]
							},
							{
								searchParam: "memory_mb",
								searchParamKeys: [selectedOptions[2]]
							}
						])
					);
					dispatch(setType("hdds"));
					break;
				case "keyboards":
					if (window.location.href.match(/\keyboards\b/gi)) {
						router.refresh();
					} else {
						router.push("/catalogue/filter-page/" + selectedOptions[0]);
					}

					dispatch(
						setQueryArr([
							{
								searchParam: "form_factor",
								searchParamKeys: [selectedOptions[1]]
							},
							{
								searchParam: "layout",
								searchParamKeys: [selectedOptions[2]]
							}
						])
					);
					dispatch(setType("keyboards"));
					break;
				case "rams":
					if (window.location.href.match(/rams\b/gi)) {
						router.refresh();
					} else {
						router.push("/catalogue/filter-page/" + selectedOptions[0]);
					}

					dispatch(
						setQueryArr([
							{
								searchParam: "voltage",
								searchParamKeys: [selectedOptions[1]]
							},
							{
								searchParam: "jedec",
								searchParamKeys: [selectedOptions[2]]
							}
						])
					);
					dispatch(setType("rams"));
					break;
				case "power-supplies":
					if (window.location.href.match(/\bpower-supplies\b/gi)) {
						router.refresh();
					} else {
						router.push("/catalogue/filter-page/" + selectedOptions[0]);
					}

					dispatch(
						setQueryArr([
							{
								searchParam: "voltage",
								searchParamKeys: [selectedOptions[1]]
							},
							{
								searchParam: "form_factor",
								searchParamKeys: [selectedOptions[2]]
							}
						])
					);
					dispatch(setType("power-Supplies"));
					break;
			}

			// Close the bigMenuActive
			if (selectedOptions.length > 2) {
				setBigMenuActive(false); // Close the big menu
			}
		} else {
			console.log(selectedOptions);
		}
	}, [selectedOptions]);

	const createPageURL = () => {
		if (selectedOptions.length !== 3) {
			// selectedOptions should have three elements to proceed

			return;
		}

		let params = new URLSearchParams();

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
