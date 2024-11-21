import React, { useState, useEffect, useRef } from "react";

interface Industry {
  id: string;
  name: string;
}

interface DropDownProps {
  selectedIndustry: string | null;
  setSelectedIndustry: React.Dispatch<React.SetStateAction<string | null>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const industries: Industry[] = [
  {
    id: "restaurant",
    name: "Restaurant",
  },
  {
    id: "roofing",
    name: "Roofing",
  },
  {
    id: "tech",
    name: "Tech",
  },
];

export default function DropDown({
  selectedIndustry,
  setSelectedIndustry,
  searchTerm,
  setSearchTerm,
}: DropDownProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Create a ref to the dropdown container

  const filteredIndustries = industries.filter((industry) =>
    industry.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectClick = () => {
    setShowDropdown(!showDropdown);
    setIsActive(!isActive); // Toggle active state when dropdown is clicked
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
        setIsActive(false); // Optional, if you want to deactivate the border when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <div
        onClick={handleSelectClick}
        className="text-darkSilverColor px-2 py-1 w-[137px]  md:w-[210px] md:h-[51px] cursor-pointer flex items-center bg-[#fff] rounded-md font-[700]"
        >
        <span className="text-[12px] md:text-[26px] mr-4" style={{ flex: 1 }}>
          {" "}
          {/* Added to push the arrow to the right */}
          {selectedIndustry || "Select"}
        </span>
        <span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            height="15px"
            width="15px"
            style={{ filter: "brightness(0.5)" }}>
            <g id="SVGRepo_bgCarrier" strokeWidth="5"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9999 13.9394L17.4696 8.46973L18.5303 9.53039L11.9999 16.0607L5.46961 9.53039L6.53027 8.46973L11.9999 13.9394Z"
                fill="#000"></path>
            </g>
          </svg>
        </span>
      </div>

      {showDropdown && (
        <div
        className="border p-2 absolute bg-[#fff] z-50 w-[137px] md:w-[210px] rounded-md"
          >
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: "95%", marginBottom: "10px" }}
            className="w-[137px] md:w-[221px] bg-white h-[33px] mt-[13px] text-[12px] md:text-[20px] text-darkSilverColor pl-[18px] py-[10px] rounded-lg"
          />

          <ul style={{ padding: 0, listStyleType: "none", margin: 0 }}>
            {filteredIndustries.map((ind) => (
              <li
                key={ind.id}
                onClick={() => {
                  setSelectedIndustry(ind.name);
                  setSearchTerm("");
                  setShowDropdown(false);
                  setIsActive(true);
                }}
                className="text-[12px] md:text-[26px]"
                style={{ cursor: "pointer", padding: "2px 0" }}>
                {ind.name}
              </li>
            ))}
            <li
              onClick={() => {
                setSelectedIndustry("Other");
                setSearchTerm("");
                setShowDropdown(false);
                setIsActive(true);
              }}
              className="text-[12px] md:text-[26px]"
              style={{ cursor: "pointer", padding: "2px 0" }}>
              Other
            </li>
          </ul>
        </div>
      )}

      <div className="w-[137px] md:w-[210px]">
        {selectedIndustry === "Other" && (
          <input
            type="text"
            placeholder="Enter different industry"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            // style={{ marginTop: "10px", width: "145.5px" }}
            className="w-full bg-white h-[51px] mt-[13px] text-[10px] md:text-[17px] text-darkSilverColor pl-[18px] py-[10px] rounded-lg"
          />
        )}
      </div>
    </div>
  );
}
