import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className=" relative mt-0 lg:mt-8 flex w-full lg:w-[25%] items-center h-fit">
      <button className="w-fit  h-fit absolute left-3 text-gray-600">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      <input
        type="text"
        placeholder="Search Documents"
        className="w-full px-4 py-2 pl-10 lg:text-[22px] rounded-2xl focus:outline-none focus:border-palatinatePurple"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
