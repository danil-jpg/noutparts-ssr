import axios from "axios";
import React, { FC } from "react";
import Image from "next/image";
import Link from "next/dist/client/link";

import Product from "@/app/common/components/ProductComponents/Product";
import Breadcrumbs from "@/app/common/components/breadcrumbs/Breadcrumbs";

export default function ProductPage({ params }: { params: { category_id: string[] } }) {
	
	return (
		<>
			<Product category={params.category_id[0]} id={params.category_id[1]}></Product>
		</>
	);
}
