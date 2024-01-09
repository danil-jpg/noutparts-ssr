"use client";
import React, { FC, useState, useEffect, ChangeEvent } from "react";
import { IBasicRadio } from "../../../types/types";
import "./BasicRadio.scss";

const BasicRadio: FC<IBasicRadio> = ({ texts= [], descriptions = [], type = "row", setChosenRadio, heading }) => {
	const [selected, setSelected] = useState<number | null>(null);

	const handleRadioClick = (index: number): void => {
		if (selected !== index) {
			setSelected(index);
			setChosenRadio(texts[index]);
			// Pass the selected text to the parent component
		}
	};

	return (
		<div className="basic-radio__container">
			{heading && (
				<div className="basic-radio__heading">
					<span>*</span>
					{heading}
				</div>
			)}
			<div className={`basic-radio ${type === "row" ? "row" : "col"}`}>
				{texts
					? texts.map((text, index) => (
							<div className={`basic-radio__item ${selected === index ? "active" : ""}`} key={index} onClick={() => handleRadioClick(index)}>
								<div className="basic-radio__text-block">
									<div className={`basic-radio__radio-name ${descriptions[index] ? "with-desc" : ""}`}>{text}</div>
									{descriptions[index] && <div className="basic-radio__radio-description">{descriptions[index]}</div>}
								</div>
								<div className={`basic-radio__radio-circle outer ${selected === index ? "active" : ""}`}>
									<div className={`basic-radio__radio-circle inner ${selected === index ? "active" : ""}`}></div>
								</div>
							</div>
					  ))
					: "There are no redios provided in props"}
			</div>
		</div>
	);
};

export default BasicRadio;
