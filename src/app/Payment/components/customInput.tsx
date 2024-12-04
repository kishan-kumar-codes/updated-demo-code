import React from "react";

interface CustomInputProps {
  placeholder?: string;
  type?: string;
  className?: string;
  id?: string;
  readOnly?: boolean;
  onChange?: void | any;
  value?: any;
  model?: any;
  disabled?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  type,
  className,
  readOnly,
  id,
  onChange,
  value,
  model,
  disabled,
}) => {
  return (
    <input
      id={id}
      type={type}
      value={value}
      readOnly={readOnly}
      placeholder={placeholder}
      className={className}
      onInput={(e) => onChange(e, model)}
      disabled={disabled}
    />
  );
};

export default CustomInput;
