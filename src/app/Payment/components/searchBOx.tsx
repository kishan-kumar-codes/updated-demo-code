"use client";
import React, { FC, useEffect, useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SearchBoxProps {
  Component: string;
  onSearch: (query: string) => void;
}

const SearchBox: FC<SearchBoxProps> = ({ Component, onSearch }) => {
  const [loading, setLoading] = useState(true);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="w-full h-[56px]">
      <label
        htmlFor="searchQuery"
        className="text-PhilippineGray relative w-100 flex items-center ">
        {!loading && (
          <FontAwesomeIcon
            className="cursor-pointer absolute text-[20px] left-2"
            icon={faSearch}
            size="1x"
          />
        )}

        <input
          className="border-0 text-[20px] p-2 ps-10 pe-3  rounded-full w-full bg-white outline-none pl-2"
          type="text"
          placeholder={`Search ${Component}`}
          id="searchQuery"
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
};

export default SearchBox;
