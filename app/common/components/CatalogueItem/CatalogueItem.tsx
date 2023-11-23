import './CatalogueItem.scss';
import { Image } from 'next/dist/client/image-component';
import qs from 'qs';
import { ICatalogueItemRes } from '../../types/types';
import { getCatalogueItemData } from '@/app/lib/data';

interface ICatalogueItem {
    image: string;
    query: string;
}

export default async function CatalogueItem({
    image,
    query,
}: ICatalogueItem): Promise<React.JSX.Element> {
    const res = await getCatalogueItemData(query);
    //
    // const fetchData = async <T extends unknown>(): Promise<T> => {
    //     // const data = await fetch(`http://127.0.0.1:1337/api/Products?${query}`, {
    //     //     cache: 'force-cache',
    //     // });

    //     return dataParsed;
    // };

    // const data = await fetch(`http://127.0.0.1:1337/api/${query}`, {
    //     cache: 'force-cache',
    // });

    // const dataParsed = (await data.json()) as ICatalogueItemRes;
    // '/img/catalogue/matrix.png'
    return (
        <div className='catalogue-item'>
            <div className='catalogue-item__top'>
                <Image
                    className='catalogue-item__top_img'
                    width={380}
                    height={210}
                    src={image}
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
