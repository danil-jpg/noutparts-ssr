'use client';
import './CatalogueItem.scss';
import { Image } from 'next/dist/client/image-component';
import { getCatalogueItemData } from '@/app/lib/data';
import { Suspense, useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import { ICatalogueItemRes } from '../../types/types';
import Link from 'next/link';

interface ICatalogueItem {
    image: string;
    mobImage: string;
    query: string;
}

export default function CatalogueItem({ image, query, mobImage }: ICatalogueItem) {
    const [res, setRes] = useState<ICatalogueItemRes | null>(null);

    useEffect(() => {
        const getData = async () => {
            const res = await getCatalogueItemData(query);

            setRes(res);
        };

        getData();
    }, [query]);

    return (
        <Suspense fallback={<Loading></Loading>}>
            <div className='catalogue-item'>
                <div className='catalogue-item__top'>
                    {/*  @ts-ignore: Object is possibly 'null'. */}
                    <Link href={`catalogue/filter-page?${query.match(/^([^\s?]+)(?=\?)/)[0]}`}>
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
                    </Link>
                </div>
                <div className='catalogue-item__main'>
                    <ul className='catalogue-item__main_ul'>
                        {res?.data
                            ? res.data.map((el) => (
                                  <Link
                                      key={el.id}
                                      href={`catalogue/filter-page?${
                                          query.match(/^([^\s?]+)(?=\?)/)[0]
                                      }&filters[brand][$eq]=${el.attributes.brand}`}>
                                      <li
                                          key={el.id}
                                          data-modal={el.id}
                                          className='catalogue-item__main_li'>
                                          {el.attributes.brand}
                                      </li>
                                  </Link>
                              ))
                            : ''}
                    </ul>
                </div>
            </div>
        </Suspense>
    );
}
