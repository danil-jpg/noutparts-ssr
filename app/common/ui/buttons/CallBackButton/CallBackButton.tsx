"use client";
import React, { FC } from "react";
import Image from "next/image";
import "./CallBackButton.scss";

import chatIcon from "/public/img/chat-button.svg";

interface ICallBackButtonProps {
	setActive: React.Dispatch<React.SetStateAction<number>>;
}

const CallBackButton: FC<ICallBackButtonProps> = ({ setActive }) => {
	return (
		<>
			<div
				className="callback-button__wrapper"
				onClick={() => {
					setActive(1);
				}}
			>
				<div className="callback-button">
					<Image src={chatIcon} alt={"chatIcon"}></Image>
				</div>
			</div>
		</>
	);
};

export default CallBackButton;
