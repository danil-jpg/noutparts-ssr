"use client";
import React, { FC, useState, useEffect } from "react";
import { IHeaderMiniCatalogPropertyItem } from "@/types";
import { usePathname, useSearchParams } from 'next/navigation';
import Link from "next/dist/client/link";

const HeaderMiniCatalogPropertyItem: FC<IHeaderMiniCatalogPropertyItem> = ({ catalogItemName, property, subProperties, setActiveSubProperty,}) => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const createPageURL = (chosenParams: string[]) => {
        const params = new URLSearchParams();
		params.set('catalogItemName', chosenParams[0]);
		params.set('property', chosenParams[1]);
		params.set('subProperty', chosenParams[2]);
        return `${params.toString()}`;
    };

    const handleClick = (subProperty: string) => {
        let updatedOptions: string[] = [];

        if (selectedOptions.includes(subProperty)) {
            updatedOptions = selectedOptions.filter((option) => option !== subProperty);
        } else {
            updatedOptions = [catalogItemName, property, subProperty];
        }

        setSelectedOptions(updatedOptions);
    };

    // useEffect(() => {
    //     createPageURL(selectedOptions);
    // }, [selectedOptions]);

    const generateCatalogURL = () => {
        return `catalogue?${createPageURL(selectedOptions)}`;
    };

    return (
        <>
            {subProperties && (
                <div className="mini-catalog__properties">
                    {subProperties.map((subProperty, index) => (
                        <div
                            key={index}
                            onClick={() => handleClick(subProperty)}
                            className={`mini-catalog__sub-property ${selectedOptions.includes(subProperty) ? "selected" : ""}`}
                        >
                            <Link href={generateCatalogURL()}>{subProperty}</Link>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default HeaderMiniCatalogPropertyItem;
