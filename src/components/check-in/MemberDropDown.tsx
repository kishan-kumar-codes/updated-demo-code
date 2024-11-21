import React, { memo, useCallback, useState } from "react";

interface Option {
  label: string;
  value: string;
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
 * MemberDropDown Component
 *
 * This component represents a dropdown menu for selecting team members.
 *
 * @param {DropdownProps} props - The props for the component.
 * @param {Option[]} props.options - The list of options to display in the dropdown.
 * @param {(option: Option) => void} props.onSelect - Callback function to handle the selection of an option.
 * @returns {JSX.Element} The rendered MemberDropDown component.
 */
const MemberDropDown: React.FC<DropdownProps> = ({ options, onSelect }) => {
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
    <div className="relative inline-block h-full w-[190px]">
      <div
        className="p-3 h-full rounded-lg bg-white cursor-pointer py-2 flex justify-between items-center"
        onClick={toggleDropdown}>
        <span className="text-center w-full" style={Typography}>
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
              className="p-2 m-1 cursor-pointer text-center hover:bg-[#631363] hover:rounded-lg hover:text-white"
              onClick={() => handleOptionClick(option)}>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(MemberDropDown);
