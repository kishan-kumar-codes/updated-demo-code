import React from "react";

interface CustomInputProps {
  placeholder: string;
  type: string;
  className: string;
  id: string;
  model?: any;
  handleChange: (model: string, value: any) => void;
  value: string | number;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  type,
  className,
  id,
  model,
  value,
  handleChange,
}) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={className}
      value={value}
      onInput={(e) => handleChange(model, e)}
    />
  );
};

export default CustomInput;
