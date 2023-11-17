export interface IPrimaryBtn {
    text?: string;
    type: 'default' | 'buying' | 'basket' | 'middle' | 'large';
    icon?: JSX.Element;
}

export interface IPrimaryInput {
    placeholder?: string;
    label?: string;
    type: 'text' | 'email' | 'tel';
}
export interface ITextAreaInput {
    label?: string;
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