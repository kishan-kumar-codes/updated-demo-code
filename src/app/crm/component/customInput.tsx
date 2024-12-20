import React from "react";

interface CustomInputProps {
  placeholder: string;
  type: string;
  className: string;
  id: string;
  model?: any;
  handleChange: (model: string, value: any) => void;
  value: string | number;
  required?: undefined | boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  type,
  className,
  id,
  model,
  value,
  required,
  handleChange,
}) => {
  return (
    <input
      id={id}
      type={type}
      required={required}
      placeholder={placeholder}
      className={className}
      value={value}
      onInput={(e) => handleChange(model, e)}
    />
  );
};

export default CustomInput;
