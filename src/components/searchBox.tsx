import React, { FC } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SearchBoxProps {
  Component: string;
}

const SearchBox: FC<SearchBoxProps> = ({ Component }) => {
  return (
    <div className="w-full">
      <label
        htmlFor="searchQuery"
        className="text-PhilippineGray relative  w-100 flex items-center"
      >
        <FontAwesomeIcon
          className="cursor-pointer absolute  text-sm left-2"
          icon={faSearch}
          size="1x"
        />
        
        <input
        className="border-0 text-sm p-2 ps-7 pe-3 rounded-xl w-full bg-white outline-none"
        type="text"
        placeholder={`Search ${Component}`}
        name=""
        id="searchQuery"
      />
      </label>
      
    </div>
  );
};

export default SearchBox;
