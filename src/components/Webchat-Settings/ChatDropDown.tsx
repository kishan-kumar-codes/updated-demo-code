import { DropDownSvg } from "@/svgs/reviews/svgs";
import { RightSignSvg } from "@/svgs/Webchat-Settings/svgs";
import React, { memo, useCallback, useEffect, useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  options: Option[];
  border?: string;
  font?: JSX.Element;
  bgColor?: string;
  width?: string;
  color?: string;
  zIndex?: number;
  onSelect: (option: Option) => void;
}

const ChatDropDown: React.FC<DropdownProps> = ({
  options,
  font,
  zIndex,
  border,
  bgColor = "#F4F4F4",
  width = "100%",
  color = "#6D6D6D",
  onSelect,
}) => {
  // State for controlling the visibility of the dropdown and the selected option
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    options[0] || null // Auto-select the first option, if available
  );

  // Effect to trigger onSelect when the component is first rendered
  useEffect(() => {
    if (options.length > 0 && selectedOption) {
      onSelect(selectedOption); // Trigger onSelect with the default selected option
    }
  }, [options, selectedOption, onSelect]);

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
    <div
      className={`relative h-full z-${zIndex ? zIndex : "z-50"} justify-center inline-block items-center w-[${width}]`}>
      <div
        className={`h-8 lg:h-12 px-2 rounded-xl w-full } bg-[${bgColor}] ${border} cursor-pointer flex  gap-1 justify-between items-center`}
        onClick={toggleDropdown}>
        <span
          className={`text-left text-[${color}] leading-3 text-sm lg:w-fit lg:text-[20px] te w-full`}>
          {selectedOption ? selectedOption.label : "Select an option"}
        </span>
        <span
          className={`transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}>
          <DropDownSvg />
        </span>
      </div>
      {isOpen && (
        <div
          className={`absolute -mt-2 flex flex-col w-[${width}] rounded-b-xl bg-[${bgColor}] shadow-lg z-50`}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`p-1.5 leading-4 pl-2 flex cursor-pointer text-sm lg:w-fit lg:text-[20px] text-center justify-between hover:font-semibold lg:hover:font-medium items-center pr-4 hover:text-[#631363] w-full hover:rounded-lg`}
              onClick={() => handleOptionClick(option)}>
              <span className="text-[#6D6D6D]">{option.label}</span>
              {selectedOption?.value === option.value && <RightSignSvg />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(ChatDropDown);
