import React, { ReactNode } from "react";

interface CustomSelectProps {
  childrens: ReactNode;
  id: string;
  name: string;
  className: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  childrens,
  id,
  name,
  className,
}) => {
  return (
    <select className={className} name={name} id={id}>
      {childrens}
    </select>
  );
};

export default CustomSelect;
