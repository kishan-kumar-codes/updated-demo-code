"use client";
import {
  CallSvgs,
  ContactSvgs,
  FliterSvgs,
} from "@/svgs/citations-builder/svgs";
import React, { useCallback, useState } from "react";

interface Option {
  label: string;
  value: string;
  svg: React.ReactElement;
}

/**
 * BuilderFilterCard component
 *
 * A filter card component that displays a dropdown with options to filter items based on specific criteria.
 * It allows users to select and deselect options using checkboxes and displays corresponding SVG icons.
 *
 * @returns {JSX.Element} The rendered component
 */
const BuilderFilterCard: React.FC = (): JSX.Element => {
  // Define the available filter options
  const options: Option[] = [
    {
      label: "Requires Phone Verification",
      value: "phone_verification",
      svg: <CallSvgs />,
    },
    {
      label: "Requires Business Owner Verification",
      value: "business_owner_verification",
      svg: <ContactSvgs />,
    },
  ];

  // State to manage the dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // State to manage selected filter options
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  // Toggle the visibility of the dropdown menu
  const toggleDropdown = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  /**
   * Handles the click event for an option in the filter card.
   * Updates the selected options based on whether the option is already selected or not.
   *
   * @param {Option} option - The option that was clicked.
   * @return {void}
   */
  const handleOptionClick = (option: Option): void => {
    let updatedSelectedOptions: Option[];
    if (
      selectedOptions.some(
        (selectedOption) => selectedOption.value === option.value
      )
    ) {
      updatedSelectedOptions = selectedOptions.filter(
        (selectedOption) => selectedOption.value !== option.value
      );
    } else {
      updatedSelectedOptions = [...selectedOptions, option];
    }
    setSelectedOptions(updatedSelectedOptions);
  };

  return (
    <div className="relative inline-block w-full mx-1 py-2">
      {/* Dropdown toggle button */}
      <div
        className="p-2 py-2 cursor-pointer flex items-center bg-[#631363] w-20 focus:outline-none rounded-lg px-2 appearance-none"
        onClick={toggleDropdown}>
        <div className="w-[20px] p-1 h-full flex">
          <FliterSvgs />
        </div>
        <span className="text-white text-center text-[15px] w-10">Filter</span>
      </div>
      {isOpen && (
        <div className="absolute mt-3 border rounded-3xl ml-6 bg-white border-[#631363] shadow-lg z-50 p-2">
          {/* Render filter options */}
          {options.map((option) => (
            <div key={option.value} className="flex items-center gap-2 p-2">
              <input
                type="checkbox"
                id={option.value}
                checked={selectedOptions.some(
                  (selectedOption) => selectedOption.value === option.value
                )}
                onChange={() => handleOptionClick(option)}
                className="hidden-checkbox" // Hide the default checkbox
                style={{ display: "none" }}
              />
              <label htmlFor={option.value} className="custom-checkbox-label">
                {/* Custom checkbox square */}
                <div className="square-checkbox"></div>
              </label>
              <div className="w-4 h-4">{option.svg}</div>
              <label className="text-[#6D6D6D] font-[400] text-[14px]">
                {option.label}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BuilderFilterCard;
