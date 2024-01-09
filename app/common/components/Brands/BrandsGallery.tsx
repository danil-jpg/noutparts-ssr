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
					<Image src={brandIcon1} alt="brandIcon1" className="brands-gallery__brand-icon"></Image>
				</Link>
				<Link href="/catalog?brand=apple">
					<Image src={brandIcon2} alt="brandIcon2" className="brands-gallery__brand-icon"></Image>
				</Link>
				<Link href="/catalog?brand=hp">
					<Image src={brandIcon3} alt="brandIcon3" className="brands-gallery__brand-icon"></Image>
				</Link>
				<Link href="/catalog?brand=dell">
					<Image src={brandIcon4} alt="brandIcon4" className="brands-gallery__brand-icon"></Image>
				</Link>
				<Link href="/catalog?brand=gigabyte">
					<Image src={brandIcon5} alt="brandIcon5" className="brands-gallery__brand-icon"></Image>
				</Link>
				<Link href="/catalog?brand=lenovo">
					<Image src={brandIcon6} alt="brandIcon10" className="brands-gallery__brand-icon"></Image>
				</Link>
				<Link href="/catalog?brand=sony">
					<Image src={brandIcon7} alt="brandIcon6" className="brands-gallery__brand-icon"></Image>
				</Link>
				<Link href="/catalog?brand=acer">
					<Image src={brandIcon8} alt="brandIcon7" className="brands-gallery__brand-icon"></Image>
				</Link>
				<Link href="/catalog?brand=bell">
					<Image src={brandIcon9} alt="brandIcon8" className="brands-gallery__brand-icon"></Image>
				</Link>
				<Link href="/catalog?brand=fujitsu">
					<Image src={brandIcon10} alt="brandIcon9" className="brands-gallery__brand-icon"></Image>
				</Link>
				
				<Link href="/catalog?brand=samsung">
					<Image src={brandIcon11} alt="brandIcon11" className="brands-gallery__brand-icon"></Image>
				</Link>
				<Link href="/catalog?brand=kingston">
					<Image src={brandIcon12} alt="brandIcon12" className="brands-gallery__brand-icon"></Image>
				</Link>
			</div>
		</div>
	);
};

export default BrandsGallery;
