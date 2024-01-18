'use client';
import React, { FC, useState } from 'react';
import { IHeaderMiniCatalogItem } from '@/types';

import IconRenderer from '../../../ui/Icons/IconRenderer';

import HeaderMiniCatalogPropertyItem from './HeaderMiniCatalogPropertyItem';

const HeaderMiniCatalogItem: FC<IHeaderMiniCatalogItem> = ({ item, isOpen, bigMenuActive, toggleItem, activeProperty, setActiveProperty }) => {
    const [activeSubProperty, setActiveSubProperty] = useState<string | null>(null);

    const toggleProperty = (property: string) => {
        setActiveProperty(property === activeProperty ? null : property);
        setActiveSubProperty(null);
    };
    const properties = Object.keys(item.product_group_types).map((property) => {
        const subProperties = item.product_group_types[property];

        return (
            <div className={`mini-catalog__property ${property === activeProperty && 'active'}`} key={property} onClick={() => toggleProperty(property)}>
                {property}
                {activeProperty === property && (
                    <div className='mini-catalog__sub-properties' onClick={(e) => e.stopPropagation()}>
                        <HeaderMiniCatalogPropertyItem
                            catalogItemName={item.product_group_name}
                            property={property}
                            subProperties={Array.isArray(subProperties) ? subProperties : [subProperties]}
                            setActiveSubProperty={setActiveSubProperty}
                        />
                    </div>
                )}
            </div>
        );
    });

    return (
        <>
            {bigMenuActive && (
                <>
                    <div
                        className={`mini-catalog__catalog-item  ${isOpen && 'active'}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleItem();
                        }}>
                        {item.product_group_name}

                        <div className={`mini-catalog__dropdown-arrow ${isOpen && 'active'}`}>
                            <IconRenderer id='dropdown-arrow-right'></IconRenderer>
                        </div>
                    </div>
                    {isOpen && bigMenuActive && (
                        <div className='mini-catalog__properties' onClick={(e) => e.stopPropagation()}>
                            {properties}
                        </div>
                    )}
                </>
            )}
        </>
    );
};

export default HeaderMiniCatalogItem;
