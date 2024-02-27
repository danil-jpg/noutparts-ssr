'use client';
import './CatalogueItem.scss';
import { Image } from 'next/dist/client/image-component';
import Link from 'next/link';
import { useAppDispatch } from '@/app/Redux/store';
import { setQueryArr } from '@/app/Redux/slice/query/query';

interface ICatalogueItem {
    res: any;
    image: string;
    query: string;
    text: string;
}

export default function CatalogueItem({ res, image, query, text }: ICatalogueItem) {
    const dispatch = useAppDispatch();

    return (
        <div className='catalogue-item'>
            <div className='catalogue-item__top'>
                {/*  @ts-ignore: Object is possibly 'null'. */}
                <Link href={`catalogue/filter-page/${query.match(/^([^\s?]+)(?=\?)/)[0]}`}>
                    <p className='catalogue-item__text'>{text}</p>
                    <div className='catalogue-item__img-wr'>
                        <Image
                            className='catalogue-item__top_img'
                            fill={true}
                            sizes='100vw'
                            priority={true}
                            src={image}
                            alt='catalogue-item'
                            placeholder='blur'
                        />
                    </div>
                </Link>
            </div>
            <div className='catalogue-item__main'>
                <ul className='catalogue-item__main_ul'>
                    {res?.data
                        ? res.data.map((el: { id: number; attributes: { brand: string } }) => (
                              // тут поймал багу компилятора
                              <li key={el.id} data-modal={el.id} className='catalogue-item__main_li'>
                                  <Link
                                      key={el.id}
                                      /*  @ts-ignore: Object is possibly 'null'. */
                                      href={`catalogue/filter-page/${query.match(/^([^\s?]+)(?=\?)/)[0]}`}
                                      onClick={() => {
                                          dispatch(setQueryArr([{ searchParam: 'brand', searchParamKeys: [el.attributes.brand] }]));
                                      }}>
                                      {el.attributes.brand}
                                  </Link>
                              </li>
                          ))
                        : ''}
                </ul>
            </div>
        </div>
    );
}
