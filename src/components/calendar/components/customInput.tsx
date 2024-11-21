import React from "react";

interface CustomInputProps {
  placeholder: string;
  type: string;
  className: string;
  id: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  type,
  className,
  id,
}) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default CustomInput;
