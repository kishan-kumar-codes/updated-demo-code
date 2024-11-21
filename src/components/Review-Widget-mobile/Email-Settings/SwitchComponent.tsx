import React, { useState } from "react";
const typography: React.CSSProperties = {
  color: "#631363",
  fontFamily: "Arial",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};
interface SwitchProps {
  title: string;
  id: string;
}
const ToggleSwitchComponent: React.FC<SwitchProps> = ({ title, id }) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="inline-flex items-center">
      <div className="relative inline-block w-8 h-4 rounded-3xl items-center cursor-pointer">
        <input
          id={id}
          type="checkbox"
          className="absolute w-8 h-[15px] bg-[#F4F4F4] transition-colors duration-300 rounded-3xl appearance-none cursor-pointer peer checked:bg-green-400"
          checked={isChecked}
          onChange={handleToggle}
        />
        <label
          htmlFor={id}
          className={`absolute top-1/2 -mt-[1px] ${isChecked ? "left-1" : "right-4"} h-3.5 w-3.5 -translate-y-1/2 cursor-pointer rounded-full bg-white shadow-md transition-all duration-300 peer-checked:translate-x-full`}
        />
      </div>
      <label
        htmlFor={id}
        style={{
          ...typography,
          fontSize: "10px",
          color: "#6D6D6D",
          marginLeft: "10px",
        }}
      >
        {title}
      </label>
    </div>
  );
};

export default ToggleSwitchComponent;
