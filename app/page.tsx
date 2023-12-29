import CategoriesRow from "./common/components/Categories/CategoriesRow";
import MainHero from "./common/components/MainStatics/MainHero";
import CategoryGallery from "./common/components/Categories/CategoryGallery";
import BrandsGallery from "./common/components/Brands/BrandsGallery";
import FeaturesStatic from "./common/components/MainStatics/FeaturesStatic";
import Features from "./common/components/FeaturesComponent/Features";

export default function Home() {
	return (
		<>
			<CategoriesRow></CategoriesRow>
			<MainHero></MainHero>
			<CategoryGallery></CategoryGallery>
			<BrandsGallery></BrandsGallery>
			<FeaturesStatic></FeaturesStatic>
			<Features></Features>
		</>
	);
}
