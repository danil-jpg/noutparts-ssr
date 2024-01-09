"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import { useAppDispatch } from "@/app/Redux/store";
import { addHistoryProduct } from "@/app/Redux/slice/historyProducts/historyProducts";
import { IProduct } from "../../types/types";

import { IProduct as Product } from '../../types/types';

interface HistoryProductsProps {
    id: string;
    category: string;
}

const ProductHistoryAdd : React.FC<HistoryProductsProps> = ({ category,id }) => {
    const dispatch = useAppDispatch();

    const product = {
        category: category,
        id: id,
    };

    useEffect(() => {
        dispatch(addHistoryProduct(product));
    }, []);

	return (
		<></>
	);
};

export default ProductHistoryAdd;
