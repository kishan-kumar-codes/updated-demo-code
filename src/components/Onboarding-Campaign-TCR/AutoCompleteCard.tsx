import React, { useState } from "react";

const options = ["BrandName1", "BrandName2", "BrandName3", "BrandName4"];
interface AutoCompleteCardProps {
    options: string[]
}
const AutoCompleteCard = ({ options }: AutoCompleteCardProps) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [showOptions, setShowOptions] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value) {
      const matches = options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredOptions(matches);
      setShowOptions(true); // Show options list when user is typing
    } else {
      setShowOptions(false); // Hide options list when input is empty
    }
  };

  const handleOptionClick = (option: string) => {
    setInputValue(option);
    setShowOptions(false);
  };

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex flex-col w-full">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setShowOptions(inputValue !== "")}
          className={`w-full rounded-2xl h-10 font-bold p-2 pl-3 bg-[#F4F4F4] focus:outline-none text-[#631363] ${inputValue === "" ? "italic" : ""} text-xs leading-normal`}
          placeholder="Type Brand Name"
        />

        {showOptions && (
          <div className="flex flex-col rounded-xl bg-[#F4F4F4] p-2 w-full">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <div
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className="flex items-center justify-between w-full gap-2 cursor-pointer hover:bg-[#FFFF] hover:text-[#631363] hover:rounded-2xl text-xs font-bold leading-normal pl-2 p-2"
                >
                  {option}
                </div>
              ))
            ) : (
              <span className="text-[#6D6D6D] text-xs font-bold leading-normal pl-2 p-2">
                Not Found
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoCompleteCard;
