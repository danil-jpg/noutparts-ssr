"use client";
import React, { FC, useState, useEffect, ChangeEvent } from "react";
import { IPrimaryInput } from "@/types";
import IconRenderer from "../../ui/Icons/IconRenderer";
import "./HeaderSearch.scss";

const HeaderSearch: FC = ({}) => {
	return (
		// make searching logic
		<div className="header-search">
			<div className="header-search__input-container">
				<div className="header-search__lupa-icon">
					<IconRenderer id="header-search-sign"></IconRenderer>
				</div>
				<input type="text" className="header-search__input" placeholder="Поиск по каталогу.." />
			</div>
			<div className="header-search__search-button">
				<IconRenderer id="header-search-sign"></IconRenderer>
			</div>
		</div>
	);
};

export default HeaderSearch;
