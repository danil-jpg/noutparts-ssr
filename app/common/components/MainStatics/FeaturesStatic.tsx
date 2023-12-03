import React, { FC } from "react";
import IconRenderer from "../../ui/Icons/IconRenderer";
import "./FeaturesStatic.scss";
import Image from "next/image";
import Link from "next/dist/client/link";

import featuresIcon1 from "/public/img/features-static-icon-1.svg";
import featuresIcon2 from "/public/img/features-static-icon-2.svg";
import featuresIcon3 from "/public/img/features-static-icon-3.svg";

const FeaturesStatic: FC = ({}) => {
	return (
		<div className="features-static__wrapper">
			<div className="features-static">
				<div className="features-static__block">
					<div className="features-static__icon-wrapper">
						<Image src={featuresIcon1} alt="featuresIcon1" className="features-static__icon"></Image>
					</div>
					<div className="features-static__heading">Отличное качество</div>
					<div className="features-static__text one">Предлагаем широкий спектр комплектующих для ноутбуков отличного качества с гарантией.</div>
				</div>
				<div className="features-static__block">
					<div className="features-static__icon-wrapper">
						<Image src={featuresIcon2} alt="featuresIcon1" className="features-static__icon"></Image>
					</div>
					<div className="features-static__heading">Крупнейший каталог</div>
					<div className="features-static__text two">Мы можем удовлетворить практически любую потребность клиента, даже в случае с непопулярными, устаревшими моделями.</div>
				</div>
				<div className="features-static__block">
					<div className="features-static__icon-wrapper">
						<Image src={featuresIcon3} alt="featuresIcon1" className="features-static__icon"></Image>
					</div>
					<div className="features-static__heading">Быстрая отправка</div>
					<div className="features-static__text three">Быстрая комплектация заказа с последующей отправкой</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturesStatic;
