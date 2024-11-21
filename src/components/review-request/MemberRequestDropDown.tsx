import React, { memo, useCallback, useState } from "react";

// Define the shape of an Option object
/**
 * @property {string} label - The display text for the option.
 * @property {string} value - The value of the option.
 */
interface Option {
  label: string;
  value: string;
}

// Define the properties for the Dropdown component
/**
 * @property {Option[]} options - The array of options for the dropdown.
 * @property {(option: Option) => void} onSelect - Callback function when an option is selected.
 */
interface DropdownProps {
  options: Option[];
  onSelect: (option: Option) => void;
}

// CSS styles for the typography used in the dropdown
const Typography: React.CSSProperties = {
  color: '#6D6D6D',
  fontFamily: 'Arial',
  fontSize: '15px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
};

/**
 * MemberRequestDropDown Component
 * @param {DropdownProps} props - The properties for the dropdown component
 * @returns {JSX.Element} The rendered dropdown component
 */
const MemberRequestDropDown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  // State to manage the dropdown open/close state
  const [isOpen, setIsOpen] = useState(false);
  // State to manage the selected option
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  // Toggle the dropdown open/close state
  const toggleDropdown = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, [setIsOpen]);

  // Handle option click and update the selected option
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
        onClick={toggleDropdown}
      >
        <span className="text-center w-full" style={{ ...Typography }}>
          {selectedOption ? selectedOption.label : "Select an option"}
        </span>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </div>
      {isOpen && (
        <div className="absolute mt-1 w-full rounded-lg bg-white shadow-lg z-10">
          {options.map((option) => (
            <div
              key={option.value}
              className="p-2 m-1 cursor-pointer text-center hover:bg-[#631363] hover:rounded-lg hover:text-white"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Export the component using memo to prevent unnecessary re-renders
export default memo(MemberRequestDropDown);
