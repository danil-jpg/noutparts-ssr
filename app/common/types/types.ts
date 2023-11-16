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
