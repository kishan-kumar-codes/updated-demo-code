import React, { FC } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SearchBoxProps {
  Component: string;
}

const SearchBox: FC = () => {
  return (
    <div className=" w-full h-[43px] px-[17px] bg-white rounded-3xl">
      <label
        htmlFor="searchQuery"
        className="text-PhilippineGray relative px-17px w-full h-full flex items-center"
      >
        <FontAwesomeIcon
          className="cursor-pointer mr-[10px]  w-[25px] h-[25px]  text-sm"
          icon={faSearch}
          size="1x"
        />
        
        <input
        className="border-0 w-full text-[20px] bg-none  outline-none"
        type="text"
        placeholder={`Search `}
        name=""
        id="searchQuery"
      />
      </label>
      
    </div>
  );
};

export default SearchBox;
