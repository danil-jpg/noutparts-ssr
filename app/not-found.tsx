import "./not-found.scss";
import Image from "next/image";
import Link from "next/dist/client/link";

import icon404 from "/public/img/404.png";
import quarnutsIcon from "/public/img/quarnuts-icon.svg";
import alertIcon from "/public/img/alert-icon.svg";

export default function NotFound() {
	return (
		<div className="page-404__wrapper">
			<div className="page-404">
				<div className="page-404__content">
					<div className="page-404__title">Упс! Что-то пошло не так! </div>
					<div className="page-404__text">
						Страница которую вы запрашиваете не найдена. <br /> <span>Возможно она была удалена или вы набрали неверный адрес.</span>
					</div>
					<div className="page-404__back-button">Вернуться на главную</div>
					<div className="page-404__nav">
						<Link href={"/catalogue"}>
							<div className="page-404__nav-item">Каталог</div>
						</Link>
						<Link href={"/delivery"}>
							<div className="page-404__nav-item">Доставка и оплата</div>
						</Link>
						<Link href={"/guarantee"}>
							<div className="page-404__nav-item">Гарантии</div>
						</Link>
						<Link href={"/contacts"}>
							<div className="page-404__nav-item">Контакты</div>
						</Link>
					</div>
					<div className="page-404__under-contents">
						<div className="page-404__under-contents-item">
							<Image src={alertIcon} alt="alertIcon" className="page-404__under-contents-item-icon"></Image>
							Служба поддержки
						</div>
						<Image src={quarnutsIcon} alt="quarnutsIcon" className="page-404__under-contents-quarnuts-icon"></Image>
					</div>
				</div>
				<div className="page-404__img-container">
					<Image fill={true} src={icon404} alt="icon404" className="page-404__img"></Image>
				</div>
			</div>
		</div>
	);
}
