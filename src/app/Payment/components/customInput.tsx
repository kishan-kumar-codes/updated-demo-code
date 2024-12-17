import React from "react";

interface CustomInputProps {
  placeholder?: string;
  type?: string;
  className?: string;
  id?: string;
  readOnly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, model: string) => void;
  value?: any;
  model?: string;
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
      onChange={(e) => onChange?.(e, model as string)}
      disabled={disabled}
    />
  );
};

export default CustomInput;
