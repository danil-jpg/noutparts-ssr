import React, { FC } from "react";
import IconRenderer from "../../ui/Icons/IconRenderer";
import "./BrandsGallery.scss";
import Image from "next/image";
import Link from "next/dist/client/link";

import brandIcon1 from "/public/img/brand-icon-1.png";
import brandIcon2 from "/public/img/brand-icon-2.png";
import brandIcon3 from "/public/img/brand-icon-3.png";
import brandIcon4 from "/public/img/brand-icon-4.png";
import brandIcon5 from "/public/img/brand-icon-5.png";
import brandIcon6 from "/public/img/brand-icon-10.png";
import brandIcon7 from "/public/img/brand-icon-6.png";
import brandIcon8 from "/public/img/brand-icon-7.png";
import brandIcon9 from "/public/img/brand-icon-8.png";
import brandIcon10 from "/public/img/brand-icon-9.png";
import brandIcon11 from "/public/img/brand-icon-11.png";
import brandIcon12 from "/public/img/brand-icon-12.png";

const BrandsGallery: FC = ({}) => {
	return (
		<div className="brands-gallery__wrapper">
			<div className="brands-gallery__brands">
				<Link href="/catalog?brand=asus">
					<div className="brands-gallery__brand-box">
						<Image fill={true} src={brandIcon1} alt="brandIcon1" className="brands-gallery__brand-icon" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"></Image>
					</div>
				</Link>

				<Link href="/catalog?brand=apple">
					<div className="brands-gallery__brand-box">
						<Image fill={true} src={brandIcon2} alt="brandIcon2" className="brands-gallery__brand-icon"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"></Image>
					</div>
				</Link>
				<Link href="/catalog?brand=hp">
					<div className="brands-gallery__brand-box">
						<Image fill={true} src={brandIcon3} alt="brandIcon3" className="brands-gallery__brand-icon"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"></Image>
					</div>
				</Link>
				<Link href="/catalog?brand=dell">
					<div className="brands-gallery__brand-box">
						<Image fill={true} src={brandIcon4} alt="brandIcon4" className="brands-gallery__brand-icon"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"></Image>
					</div>
				</Link>
				<Link href="/catalog?brand=gigabyte">
					<div className="brands-gallery__brand-box">
						<Image fill={true} src={brandIcon5} alt="brandIcon5" className="brands-gallery__brand-icon"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"></Image>
					</div>
				</Link>
				<Link href="/catalog?brand=lenovo">
					<div className="brands-gallery__brand-box">
						<Image fill={true} src={brandIcon6} alt="brandIcon10" className="brands-gallery__brand-icon"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"></Image>
					</div>
				</Link>
				<Link href="/catalog?brand=sony">
					<div className="brands-gallery__brand-box">
						<Image fill={true} src={brandIcon7} alt="brandIcon6" className="brands-gallery__brand-icon"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"></Image>
					</div>
				</Link>
				<Link href="/catalog?brand=acer">
					<div className="brands-gallery__brand-box">
						<Image fill={true} src={brandIcon8} alt="brandIcon7" className="brands-gallery__brand-icon"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"></Image>
					</div>
				</Link>
				<Link href="/catalog?brand=bell">
					<div className="brands-gallery__brand-box">
						<Image fill={true} src={brandIcon9} alt="brandIcon8" className="brands-gallery__brand-icon"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"></Image>
					</div>
				</Link>
				<Link href="/catalog?brand=fujitsu">
					<div className="brands-gallery__brand-box">
						<Image fill={true} src={brandIcon10} alt="brandIcon9" className="brands-gallery__brand-icon"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"></Image>
					</div>
				</Link>

				<Link href="/catalog?brand=samsung">
					<div className="brands-gallery__brand-box">
						<Image fill={true} src={brandIcon11} alt="brandIcon11" className="brands-gallery__brand-icon"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"></Image>
					</div>
				</Link>
				<Link href="/catalog?brand=kingston">
					<div className="brands-gallery__brand-box">
						<Image fill={true} src={brandIcon12} alt="brandIcon12" className="brands-gallery__brand-icon"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"></Image>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default BrandsGallery;
