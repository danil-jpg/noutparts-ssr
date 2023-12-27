export interface IPrimaryBtn {
    text?: string;
    type: 'default' | 'buying' | 'basket' | 'middle' | 'large';
    icon?: JSX.Element;
}

export interface IPrimaryInput {
    placeholder?: string;
    label?: string;
    type: 'text' | 'email' | 'tel';
    setValue: React.Dispatch<React.SetStateAction<string>>;
}
export interface ITextAreaInput {
    label?: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

export interface IIConRenderer {
    id: string;
    onClick?: () => void;
    className?: string;
}

export interface ISelect {
    className?: string;
    arr: Array<string>;
    defValue: string;
    value?: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

export interface IRadio {
    id: string;
    text: string;
    name?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checked: boolean;
    value: string;
}

export interface IBasicRadio {
    texts?: string[];
    descriptions?: string[];
    type: 'row' | 'col';
    setChosenRadio: React.Dispatch<React.SetStateAction<string | null>>;
    heading?: string;
}

export interface Breadcrumb {
    label: string;
    href: string;
    active?: boolean;
}

export interface IHeaderMiniCatalogItem {
    item: any;
    isOpen: boolean;
    bigMenuActive: boolean;
    toggleItem: () => void;
    activeProperty: string | null;
    setActiveProperty: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface IHeaderMiniCatalogPropertyItem {
    property: string;
    subProperties: string[];
    setActiveSubProperty: (property: string | null) => void;
    catalogItemName: string;
    // onSelectionChange: (selectedOptions: string[]) => void;
}

export interface ICatalogueItemRes {
    data: {
        id: number;
        attributes: {
            brand: string;
        };
    }[];
}

export type categories = 'matrices' | 'batteries' | 'hdds' | 'keyboards' | 'rams' | 'power_unit';

export interface IQuery {
    searchParam: string;
    searchParamKeys: string[];
}

export interface IBrand {
    data: [
        {
            attributes: {
                brand: string;
            };
        }
    ];
}

export interface IProduct {
    name: string;
    price: number;
    discount: number;
    photo_url: string;
    id: number;
    category: categories;
}

export interface ICard {
    data: {
        id: number;
        attributes: {
            availability: string;
            category: categories;
            price: number;
            name: string;
            tag: string;
            photo: {
                data: [
                    {
                        attributes: {
                            url: string;
                        };
                    }
                ];
            };
        };
    };
}

export interface IFavsData {
    products: {
        id: number;
        name: string;
        category?: categories;
    }[];
    data?: {};
}
