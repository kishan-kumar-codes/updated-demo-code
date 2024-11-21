"use client";
import { DropDownSvg } from "@/svgs/reviews/svgs";
import React, { memo, useCallback, useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  isMobile?: boolean;
  options: Option[];
  onSelect: (option: Option) => void;
}

/**
 * ListDropDown component
 *
 * A dropdown component that allows users to select an option from a list. The component supports
 * mobile responsiveness and provides a callback function when an option is selected.
 *
 * @param {DropdownProps} props - The properties for the ListDropDown component.
 * @param {boolean} [props.isMobile=false] - If true, applies mobile-specific styles.
 * @param {Option[]} props.options - The list of options to display in the dropdown.
 * @param {(option: Option) => void} props.onSelect - Callback function to handle option selection.
 *
 * @returns {JSX.Element} The rendered ListDropDown component.
 */
const ListDropDown: React.FC<DropdownProps> = ({
  options,
  onSelect,
}: DropdownProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
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
    <div className={`relative inline-block w-full lg:w-[80%]`}>
      <div
  className="md:p-2 p-1 md:py-3 py-2 min-h-[25px]  cursor-pointer flex justify-between items-center bg-[#faf9f9] w-full focus:outline-none rounded-2xl px-8 appearance-none lg:min-h-[44px]"
        onClick={toggleDropdown}>
        <span className="text-[#631363] text-center w-full ">
          {selectedOption ? selectedOption.label : ""}
        </span>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}>
          <DropDownSvg />
        </span>
      </div>
      {isOpen && (
        <div className="absolute mt-1 w-full border rounded-3xl bg-white border-gray-900 shadow-lg z-10">
          {options.map((option) => (
            <div
              key={option.value}
              className="p-2 m-1 cursor-pointer hover:text-[#631363] text-center hover:bg-gray-100 hover:rounded-3xl"
              onClick={() => handleOptionClick(option)}>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(ListDropDown);
