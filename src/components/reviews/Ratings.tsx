import { DropDownSvg } from '@/svgs/reviews/svgs';
import React, { ChangeEvent } from 'react';

/**
 * Interface for the option objects in the dropdown.
 * 
 * @interface Option
 * @property {string} value - The value for the option.
 * @property {string} label - The display label for the option.
 */
interface Option {
  value: string;
  label: string;
}

/**
 * Interface for the properties of the Ratings component.
 * 
 * @interface Props
 * @property {Option[]} options - Array of option objects for the dropdown.
 * @property {string} value - The currently selected value in the dropdown.
 * @property {(event: ChangeEvent<HTMLSelectElement>) => void} onChange - The change handler for the dropdown.
 */
interface Props {
  options: Option[];
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

/**
 * Ratings component renders a dropdown with options and a custom SVG.
 * 
 * @param {Props} props - The properties object.
 * @param {Option[]} props.options - Array of option objects for the dropdown.
 * @param {string} props.value - The currently selected value in the dropdown.
 * @param {(event: ChangeEvent<HTMLSelectElement>) => void} props.onChange - The change handler for the dropdown.
 * @returns {JSX.Element} The rendered dropdown component.
 */
const Ratings: React.FC<Props> = ({ options, value, onChange }: Props): JSX.Element => {
  return (
    <div className="flex border h-12 rounded-lg border-[#8C8C8C] relative">
      <select
        className="w-full focus:outline-none bg-transparent h-full rounded-lg px-4 appearance-none"
        value={value}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option
            key={index}
            className="text-center bg-[#8C8C8C] bg-opacity-20 p-3"
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 -right-2 flex justify-center items-center py-2 px-4">
        <DropDownSvg />
      </div>
    </div>
  );
};

export default Ratings;
