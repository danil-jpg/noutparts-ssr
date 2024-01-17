"use client";
import React, { FC, useState, useEffect, ChangeEvent } from "react";
import IconRenderer from "../../ui/Icons/IconRenderer";
import "./HeaderCallBack.scss";
import Image from "next/image";
import axios from "axios";

import callingIcon from "/public/img/calling-icon.svg";

import PrimaryInput from "../../ui/inputs/PrimaryInput";
import TextAreaInput from "../../ui/inputs/TextAreaInput";

const HeaderCallBack = ({ white }: { white?: boolean }) => {
	const [callTrace, setCallTrace] = useState<number>(0);

	const [nameState, setNameState] = useState<string>("");
	const [telState, setTelState] = useState<string>("");
	const [commentState, setCommentState] = useState<string>("");

	const handleNextStep = () => {
		if (nameState != "" && telState != "") {
			setCallTrace(2);
		}
	};

	const handleUpload = async () => {
		try {
			if (!nameState || !telState) {
				// If either name or tel is empty, return and do not proceed
				return;
			}

			const responseInfo = await axios.post("http://localhost:1337/api/callbacks", {
				data: {
					name: nameState,
					tel: telState,
					comment: commentState
				}
			});

			setCallTrace(2);

			console.log("Response Info:", responseInfo);
		} catch (error) {
			console.log("info creation error: ", error);
		}
	};

	useEffect(() => {
		const handleBodyOverflow = () => {
			if (callTrace > 0) {
				document.body.style.overflow = "hidden";
			} else {
				document.body.style.overflow = "auto";
			}
		};

		// Set body overflow on mount and resize
		handleBodyOverflow();

		window.addEventListener("resize", handleBodyOverflow);

		return () => {
			// Clean up event listener and reset body overflow when unmounting
			window.removeEventListener("resize", handleBodyOverflow);
			document.body.style.overflow = "auto";
		};
	}, [callTrace]);

	return (
		<>
			<div
				className="header-tel"
				onClick={() => {
					setCallTrace(1);
				}}
			>
				<div className="header-tel__icon">
					<IconRenderer id="tel-sign"></IconRenderer>
				</div>
				<div className={`header-tel__box ${white && "white"}`}>
					<div className="header-tel__number">(066) 388-88 95</div>
					<div className="header-tel__button">Обратный звонок</div>
				</div>
			</div>

			<div className={`header-tel__background-blur ${callTrace > 0 && "active"} `}>
				{callTrace === 1 && (
					<div className="header-tel__reg-call-window">
						<div
							className="header-tel__cross"
							onClick={() => {
								setCallTrace(0);
							}}
						>
							<IconRenderer id="popup-cross-sign"></IconRenderer>
						</div>

						<div className="header-tel__head">
							<div className="header-tel__title">Обратный звонок</div>
							<div className="header-tel__undertitle">Закажите обратный звонок и мы перезвоним вам в ближайшее время</div>
						</div>

						<div className="header-tel__inputs">
							<div className="header-tel__name-input">
								<PrimaryInput type="text" placeholder="Ваше имя" label="Ваше имя" setValue={setNameState}></PrimaryInput>
							</div>
							<div className="header-tel__tel-input">
								<PrimaryInput type="tel" placeholder="Номер телефона" label="Номер телефона" setValue={setTelState}></PrimaryInput>
							</div>
						</div>
						<div className="header-tel__comment-input">
							<TextAreaInput label="Комментарий (необязательно)" setValue={setCommentState}></TextAreaInput>
						</div>
						<div
							className="header-tel__confirm-button big"
							onClick={() => {
								handleUpload();
							}}
						>
							Заказать звонок
						</div>
					</div>
				)}

				{callTrace === 2 && (
					<div className="header-tel__reg-call-success">
						<div className="header-tel__cross">
							<IconRenderer id="popup-cross-sign black"></IconRenderer>
						</div>
						<div className="header-tel__calling-ring outer">
							<div className="header-tel__calling-ring middle">
								<div className="header-tel__calling-ring inner">
									<Image src={callingIcon} alt="callingIcon" className="header-tel__calling-icon"></Image>
								</div>
							</div>
						</div>
						<div className="header-tel__success-undertitle">
							<span>Спасибо!</span> Мы свяжемся с Вами в ближайшее время
						</div>
						<div
							className="header-tel__confirm-button small"
							onClick={() => {
								setCallTrace(0);
							}}
						>
							Жду звонка
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default HeaderCallBack;
