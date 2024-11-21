import Image from "next/image";
import React, { memo, useCallback, useState } from "react";

export interface Option {
  label: string;
  value: string;
  icon?: JSX.Element;
}

interface DropdownProps {
  options: Option[];
  onSelect: (option: Option) => void;
}

// Define the Typography style
const Typography: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
};

/**
 * ReviewSiteDropDown Component
 *
 * This component represents a dropdown menu for selecting review sites.
 *
 * @param {DropdownProps} props - The props for the component.
 * @param {Option[]} props.options - The list of options to display in the dropdown.
 * @param {(option: Option) => void} props.onSelect - Callback function to handle the selection of an option.
 * @returns {JSX.Element} The rendered ReviewSiteDropDown component.
 */
const ReviewSiteDropDown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const toggleDropdown = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, []);

  const handleOptionClick = useCallback(
    (option: Option) => {
      setSelectedOption(option);
      setIsOpen(false);
      onSelect(option);
    },
    [onSelect]
  );

  return (
    <div className="relative inline-block h-12 w-[70%] md:w-full">
      <div
        className="p-3 h-full rounded-2xl bg-[#F4F4F4] cursor-pointer py-2 flex justify-between items-center"
        onClick={toggleDropdown}>
        <span className="flex items-center w-full" style={Typography}>
          {selectedOption && selectedOption.icon && (
            <span className="mr-2">{selectedOption.icon}</span>
          )}
          {selectedOption ? selectedOption.label : "Select an option"}
        </span>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}>
          ▼
        </span>
      </div>
      {isOpen && (
        <div className="absolute mt-1 w-full rounded-lg bg-white shadow-lg z-10">
          {options.map((option) => (
            <div
              key={option.value}
              className="p-2 m-1 cursor-pointer flex items-center hover:bg-[#631363] hover:rounded-lg hover:text-white"
              onClick={() => handleOptionClick(option)}>
              {option.icon && <span className="mr-2">{option.icon}</span>}
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(ReviewSiteDropDown);
