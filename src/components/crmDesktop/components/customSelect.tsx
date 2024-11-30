import React, { ReactNode } from "react";

interface CustomSelectProps {
    childrens: ReactNode;
    id: string;
    name: string;
    className: string;
    value: string | number,
    model: string,
    handleChange: (model:string, value:any) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ childrens, id, name, className, value, model, handleChange }) => {
    return (
        <select className={className} value={value} onChange={(e)=> handleChange(model,e)} name={name} id={id}>
            {childrens}
        </select>
    );
};

export default CustomSelect;
