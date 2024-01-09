import axios from "axios";
import React, { FC } from "react";
import Image from "next/image";
import Link from "next/dist/client/link";

import Order from "@/app/common/components/Order/Order";
import Breadcrumbs from "@/app/common/components/breadcrumbs/Breadcrumbs";

export default function OrderPage() {
	
	return (
		<>
			<Order></Order>
		</>
	);
}
