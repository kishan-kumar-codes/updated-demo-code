import React, { ReactNode } from "react";

interface CustomSelectProps {
  childrens: ReactNode;
  id: string;
  name: string;
  className: string;

  model: string;
  handleChange: (model: string, value: any) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  childrens,
  id,
  name,
  model,
  className,
  handleChange,
}) => {
  return (
    <select
      onChange={(e) => handleChange(model, e)}
      className={className}
      name={name}
      id={id}>
      {childrens}
    </select>
  );
};

export default CustomSelect;
