"use client";
import React, { FC, useState, useEffect, ChangeEvent } from "react";
import { IPrimaryInput } from "@/types";
import IconRenderer from "../../ui/Icons/IconRenderer";
import "./MiniCatalog.scss";

const MiniCatalog: FC = ({}) => {
	return (
		// make big nav menu with logic
		<div className="mini-catalog">
			<div className="mini-catalog__header-button">
				Каталог
				<div className="mini-catalog__header-button-icon">
					<IconRenderer id="mini-catalog-sign"></IconRenderer>
				</div>
			</div>
		</div>
	);
};

export default MiniCatalog;
