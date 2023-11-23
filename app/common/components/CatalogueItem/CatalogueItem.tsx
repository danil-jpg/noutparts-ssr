import './CatalogueItem.scss';
import { Image } from 'next/dist/client/image-component';
import { getCatalogueItemData } from '@/app/lib/data';

interface ICatalogueItem {
    image: string;
    mobImage: string;
    query: string;
}

export default async function CatalogueItem({
    image,
    query,
    mobImage,
}: ICatalogueItem): Promise<React.JSX.Element> {
    const res = await getCatalogueItemData(query);

    return (
        <div className='catalogue-item'>
            <div className='catalogue-item__top'>
                <Image
                    className='catalogue-item__top_img'
                    fill={true}
                    src={image}
                    sizes='(max-width: 768px) 200px,200px'
                    alt='catalogue-item'
                />
                <Image
                    className='catalogue-item__top_img catalogue-item__top_img_mob'
                    fill={true}
                    src={mobImage}
                    alt='catalogue-item'
                />
            </div>
            <div className='catalogue-item__main'>
                <ul className='catalogue-item__main_ul'>
                    {res.data.map((el) => (
                        <li key={el.id} data-modal={el.id} className='catalogue-item__main_li'>
                            {el.attributes.brand}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
