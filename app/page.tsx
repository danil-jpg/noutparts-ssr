import CategoriesRow from './common/components/MainStatics/CategoriesRow';
import MainHero from './common/components/MainStatics/MainHero';
import CategoryGallery from './common/components/MainStatics/CategoryGallery';
import BrandsGallery from './common/components/MainStatics/BrandsGallery';
import FeaturesStatic from './common/components/MainStatics/FeaturesStatic';
import Features from './common/components/FeaturesComponent/Features';

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
