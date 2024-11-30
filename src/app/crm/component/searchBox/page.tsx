import React, { FC } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SearchBoxProps {
  Component: string;
}

const SearchBox: FC<SearchBoxProps> = ({ Component }) => {
  return (
    <div className="w-full md:flex md:w-auto ">
      <label
        htmlFor="searchQuery"
        className="text-[#BCBCBC] relative  w-100 flex items-center md:w-[322px] md:h-[43px] ">
        <FontAwesomeIcon
          className="cursor-pointer absolute  text-sm left-2 md:text-[20px] md:left-4"
          icon={faSearch}
          size="1x"
        />

        <input
          className="border-0 text-[#BCBCBC] text-sm p-2 ps-7 pe-3 rounded-2xl w-full bg-white outline-none md:text-[20px] md:ml-3 md:w-[322px]"
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
