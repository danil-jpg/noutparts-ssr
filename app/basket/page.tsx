import "./basket.scss";

import Breadcrumbs from "@/app/common/components/breadcrumbs/Breadcrumbs";
import { Breadcrumb } from "@/app/common/types/types";

import HistoryProducts from "../common/components/HistoryProducts/HistoryProducts";
import BasketComponent from "../common/components/BasketComponents/Basket";


export default function BasketPage() {
	const breadcrumbArr: Breadcrumb[] = [
		{
			label: `Корзина`,
			href: "/basket",
			active: false
		}
    ];
    

	return (
		<>
			<Breadcrumbs breadcrumbs={breadcrumbArr} classname="product__breadcrumbs"></Breadcrumbs>
            <BasketComponent></BasketComponent>
            <HistoryProducts></HistoryProducts>
		</>
	);
}
