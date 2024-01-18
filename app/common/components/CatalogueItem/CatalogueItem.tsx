'use client';
import './CatalogueItem.scss';
import { Image } from 'next/dist/client/image-component';
import { getCatalogueItemData } from '@/app/lib/data';
import { Suspense, useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import { ICatalogueItemRes } from '../../types/types';
import Link from 'next/link';
import { useAppDispatch } from '@/app/Redux/store';
import { setQueryArr } from '@/app/Redux/slice/query/query';

interface ICatalogueItem {
    image: string;
    mobImage: string;
    query: string;
    text: string;
}

export default function CatalogueItem({ image, query, mobImage, text }: ICatalogueItem) {
    const [res, setRes] = useState<ICatalogueItemRes>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const getData = async () => {
            const res = await getCatalogueItemData(query);

            setRes(res);
        };

        getData();
    }, [query]);

    return (
        <div className='catalogue-item'>
            <div className='catalogue-item__top'>
                {/*  @ts-ignore: Object is possibly 'null'. */}
                <Link href={`catalogue/filter-page/${query.match(/^([^\s?]+)(?=\?)/)[0]}`}>
                    <p className='catalogue-item__text'>{text}</p>
                    <div className='catalogue-item__img-wr'>
                        <Image className='catalogue-item__top_img' layout='fill' src={image} alt='catalogue-item' />
                    </div>
                </Link>
            </div>
            <div className='catalogue-item__main'>
                <ul className='catalogue-item__main_ul'>
                    {res?.data
                        ? res.data.map((el) => (
                              // тут поймал багу компилятора
                              <Link
                                  key={el.id}
                                  href={`catalogue/filter-page/${query.match(/^([^\s?]+)(?=\?)/)[0]}`}
                                  onClick={() => {
                                      dispatch(setQueryArr([{ searchParam: 'brand', searchParamKeys: [el.attributes.brand] }]));
                                  }}>
                                  <li key={el.id} data-modal={el.id} className='catalogue-item__main_li'>
                                      {el.attributes.brand}
                                  </li>
                              </Link>
                          ))
                        : ''}
                </ul>
            </div>
        </div>
    );
}
