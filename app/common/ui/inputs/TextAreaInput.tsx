import React, { FC, useState, ChangeEvent, useRef, useEffect } from "react";
import { ITextAreaInput } from "@/types";
import "./TextAreaInput.scss";

const TextAreaInput: FC<ITextAreaInput> = ({ label, setValue }) => {
	const [inputValue, setInputValue] = useState<string>("");
	const [isActive, setIsActive] = useState<boolean>(false);

	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
		setInputValue(event.target.value);
		setValue(inputValue);
	};

	const handleFocus = (): void => {
		setIsActive(true);
	};

	const handleBlur = (): void => {
		setIsActive(false);
	};

	useEffect(() => {
		// Adjusting textarea height based on content
		if (textareaRef.current) {
			textareaRef.current.style.height = "48px"; // Initial height
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Dynamic height
		}
	}, [inputValue]);

	return (
		<div className="textarea-input">
			<label htmlFor={label} className="textarea-input__label">
				{label}
			</label>
			<div className={`textarea-input__container ${isActive ? "active" : ""}`}>
				<textarea ref={textareaRef} className={`textarea-input__input`} id={label} value={inputValue} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} />
			</div>
		</div>
	);
};

export default TextAreaInput;
