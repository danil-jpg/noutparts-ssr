export interface IPrimaryBtn {
    text?: string;
    type: 'default' | 'buying' | 'basket' | 'middle' | 'large';
    icon?: JSX.Element;
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
