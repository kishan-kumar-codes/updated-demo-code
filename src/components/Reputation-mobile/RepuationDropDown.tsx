import { DropDownSvg } from "@/svgs/reviews/svgs";
import React, { memo, useCallback, useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  options: Option[];
  title?: string;
  infoComponent?: JSX.Element;
  onSelect: (option: Option) => void;
  isInfoVisible?: boolean;
  setInfoVisible?: (option: boolean) => void;
  infoText?: string;
}

// Define the Typography style
const Typography: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  lineHeight: "normal",
};

const RepuationDropDown: React.FC<DropdownProps> = ({
  options,
  title,
  onSelect,
}) => {
  // State for controlling the visibility of the dropdown and the selected option
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  // Toggle the dropdown open/closed state
  const toggleDropdown = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, [setIsOpen]);

  // Handle the selection of an option
  const handleOptionClick = useCallback(
    (option: Option) => {
      setSelectedOption(option);
      setIsOpen(false);
      onSelect(option);
    },
    [onSelect]
  );

  return (
    <div className="relative inline-block h-full justify-center items-center w-full ">
      <div className="flex items-center w-full  gap-2 my-2 md:my-3">
        <label className="text-center text-xs md:text-lg text-[#6D6D6D] font-semibold">
          {title}
        </label>
      </div>
      <div
        className="p-3 h-10 rounded-2xl bg-white cursor-pointer py-2 flex justify-between items-center"
        onClick={toggleDropdown}>
        <span className="text-center w-full" style={Typography}>
          {selectedOption ? selectedOption.label : "Select an option"}
        </span>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}>
          <DropDownSvg />
        </span>
      </div>
      {isOpen && (
        <div className="absolute mt-1 w-full rounded-3xl bg-[#F4F4F4] shadow-lg z-50">
          {options.map((option) => (
            <div
              key={option.value}
              className="p-3 m-0.5 cursor-pointer text-center hover:bg-[#631363] hover:rounded-lg hover:text-white"
              onClick={() => handleOptionClick(option)}>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(RepuationDropDown);
