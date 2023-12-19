'use client';
import React, { FC, useState, useEffect, ChangeEvent } from 'react';
import IconRenderer from '../../ui/Icons/IconRenderer';
import './HeaderSearch.scss';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/app/Redux/store';
import { addProducts } from '@/app/Redux/slice/search/searchSlice';
import { useAppSelector } from '@/app/Redux/store';
import { removeProduct } from '@/app/Redux/slice/search/searchSlice';

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

const initialHistorySuggestions: Products = {
    matrix: [],
    battery: [],
    hdd: [],
    keyboard: [],
    ram: [],
    'power-unit': [],
    // //... (other product categories)
};
let products: Products = {};

interface ProductWithId {
    attributes: {
        name: string;
    };
    id: number;
}

type ProductsWithId = {
    [key: string]: ProductWithId[];
};
let productsObject: ProductsWithId = {};

const HeaderSearch = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const fetchProductNames = async (productType: string) => {
        try {
            const response = await axios.get<ProductData>(
                `http://127.0.0.1:1337/api/${
                    productType === 'matrix'
                        ? 'matrice'
                        : productType === 'power_supply'
                        ? 'power-supplie'
                        : productType === 'battery'
                        ? 'batterie'
                        : productType
                }s/?fields[0]=name`
            );
            const data: ProductData = response.data;

            return data.data || [];
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    };

    const processFetchedData = (productType: string, data: ProductData['data']) => {
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

        productsObject[productType] = fetchedData;
        // console.log("🚀 ~ file: HeaderSearch.tsx:82 ~ fetchProductsData ~ productsAray:", productsObject);
    };

    // Inside useEffect
    useEffect(() => {
        const productTypes: string[] = ['matrix', 'hdd', 'keyboard', 'ram', 'battery', 'power_supply'];

        const promises = productTypes.map((type) => fetchProductsData(type));

        const runPromises = async () => {
            await Promise.all(promises);
        };
        // console.log("🚀 ~ file: HeaderSearch.tsx:42 ~ products:", products);

        runPromises();
    }, []);

    const [searchInput, setSearchInput] = useState<string>('');
    const [suggestions, setSuggestions] = useState<{ category: string; suggestions: string[] }[]>([]);
    const historySuggestions = useAppSelector((state) => Object.entries(state.searchReducer).map(([category, suggestions]) => ({ category, suggestions })));

    const clearHistory = () => {
        Object.keys(initialHistorySuggestions).forEach((key) => {
            dispatch(removeProduct(0));
        });
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        setSearchInput(input);

        const filteredSuggestions: { category: string; suggestions: string[] }[] = Object.entries(products)
            .map(([category, items]) => ({
                category,
                suggestions: items.filter((item) => item.toLowerCase().includes(input.toLowerCase())) as string[],
            }))
            .filter(({ suggestions }) => suggestions.length > 0);

        setSuggestions(filteredSuggestions);

        // Transforming filteredHistorySuggestions to match the expected structure
        const transformedHistorySuggestions = filteredSuggestions.map(({ category, suggestions }) => ({
            key: category,
            products: suggestions,
        }));

        // Dispatching the first transformed suggestion object instead of the array
        if (transformedHistorySuggestions.length > 0) {
            dispatch(addProducts(transformedHistorySuggestions[0]));
        }
    };

    const handleSuggestionClick = (clickedSuggestion: string, category: string) => {
        const updatedHistorySuggestions = [...historySuggestions];

        // Find the category in history suggestions
        const categoryIndex = updatedHistorySuggestions.findIndex((item) => item.category === category);

        if (categoryIndex !== -1) {
            // Check if the suggestion already exists in history
            const exists = updatedHistorySuggestions[categoryIndex].suggestions.includes(clickedSuggestion);

            if (!exists) {
                // Create a new array with the updated suggestions
                const updatedSuggestions = [...updatedHistorySuggestions[categoryIndex].suggestions, clickedSuggestion];

                // Create a new history suggestion object with updated suggestions
                const updatedCategorySuggestions = { ...updatedHistorySuggestions[categoryIndex], suggestions: updatedSuggestions };

                dispatch(
                    addProducts({
                        key: category,
                        products: updatedCategorySuggestions.suggestions,
                    })
                );
            }
        } else {
            // If category not found in history, create a new entry with the clicked suggestion
            dispatch(
                addProducts({
                    key: category,
                    products: [clickedSuggestion],
                })
            );
        }

        router.push(`/product/${category}/${findIdByNameInCategory(productsObject, category, clickedSuggestion)}`);
    };

    function findIdByNameInCategory(products: ProductsWithId, category: string, name: string): number | null {
        if (products.hasOwnProperty(category)) {
            const productList = products[category];
            for (let i = 0; i < productList.length; i++) {
                if (productList[i].attributes.name === name) {
                    return productList[i].id;
                }
            }
        }
        return null;
    }
    return (
        <div className='header-search'>
            <div className='header-search__input-container'>
                <div className='header-search__lupa-icon'>
                    <IconRenderer id='header-search-sign' />
                </div>
                <input type='text' className='header-search__input' placeholder='Поиск по каталогу..' value={searchInput} onChange={handleInputChange} />
            </div>
            <div className='header-search__search-button'>
                <IconRenderer id='header-search-sign' />
            </div>

            {searchInput && (
                <div className='header-search__search-field'>
                    <div className='header-search__suggestions-box'>
                        <div className='header-search__box-heading'>Предложенные варианты</div>
                        {suggestions.map((categorySuggestion, index) => (
                            <div className='header-search__category' key={index}>
                                <h4 className='header-search__category-heading'>{categorySuggestion.category}</h4>
                                <ul className='header-search__suggestions'>
                                    {categorySuggestion.suggestions.map((suggestion, idx) => {
                                        const truncatedSuggestion = suggestion.length > 40 ? suggestion.slice(0, 50) + '...' : suggestion;
                                        return (
                                            <li
                                                className='header-search__suggestion'
                                                key={idx}
                                                onClick={() => handleSuggestionClick(suggestion, categorySuggestion.category)}>
                                                <IconRenderer id='header-search-sign' />
                                                <div>{truncatedSuggestion}</div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {historySuggestions.length > 0 && (
                        <div className='header-search__history-box'>
                            <div className='header-search__box-heading'>
                                История поиска
                                <button className='header-search__clear-button' onClick={clearHistory}>
                                    Очистить историю
                                </button>
                            </div>
                            {historySuggestions.map(
                                (historyCategorySuggestion, historyIndex) =>
                                    // Only render if there are suggestions in the category
                                    historyCategorySuggestion.suggestions.length > 0 && (
                                        <div className='header-search__category' key={historyIndex}>
                                            {historyCategorySuggestion.category.length > 0 && (
                                                <h4 className='header-search__category-heading'>{historyCategorySuggestion.category}</h4>
                                            )}
                                            <ul className='header-search__suggestions'>
                                                {historyCategorySuggestion.suggestions.map((suggestion, idx) => {
                                                    const truncatedSuggestion = suggestion.length > 40 ? suggestion.slice(0, 50) + '...' : suggestion;
                                                    return (
                                                        <li className='header-search__suggestion' key={idx}>
                                                            <IconRenderer id='header-history-sign' />
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
