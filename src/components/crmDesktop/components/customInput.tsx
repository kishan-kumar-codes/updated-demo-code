import React from "react";

interface CustomInputProps {
    placeholder: string;
    type: string;
    className: string;
    id: string;
    value: string | number,
    model: string,
    handleChange: (model:string, value:any) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder, type, className, id, value, model, handleChange }) => {
    return <input id={id} type={type} value={value} onInput={(e)=>handleChange(model,e)}  placeholder={placeholder} className={className} />;
};

export default CustomInput;
