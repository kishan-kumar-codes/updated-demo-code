"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import CloseIcon from "../../../assets/images/close-icon.svg";
import FilterIcon from "../../../assets/images/filter-icon.svg";
import TimerIcon from "../../../assets/images/timer-icon.svg";
import TagIcon from "../../../assets/images/tag-icon.svg";
import DualUser from "../../../assets/images/dual-user.svg";
import StatusIcon from "../../../assets/images/status-icon.svg";

interface FilterContactsProps {
  setShowFilterCard: React.Dispatch<React.SetStateAction<boolean>>;
  tags?: string[];
  onTagSelect: (tags: string[]) => void;
  selectedTags: string[];
}

const FilterContacts: React.FC<FilterContactsProps> = ({
  setShowFilterCard,
  tags,
  onTagSelect,
  selectedTags,
}) => {
  const handleTagClick = (tag: string) => {
    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];

    onTagSelect(newSelectedTags);
  };

  return (
    <div className="absolute h-[430px] pb-16 top-2 bottom-8 z-50 left-0 w-[220px] bg-[#F4F4F4] overflow-y-scroll overflow-x-hidden rounded-r-2xl border-palatinatePurple border-2 md:static md:w-full md:h-full md:flex md:flex-col md:border-none md:pl-7">
      <div className="flex justify-between pl-[14px] pr-[22px] mt-[16px] w-full md:hidden">
        <div className="flex">
          <Image src={FilterIcon} alt="filter" className="h-3  w-4" />
          <h5 className="ml-[7px] text-xs text-darkSilverColor font-bold">
            Filters
          </h5>
        </div>
        <div>
          <Image
            src={CloseIcon}
            onClick={() => setShowFilterCard(false)}
            alt="close"
            className="h-3 w-3 cursor-pointer"
          />
        </div>
      </div>

      <FilterSection icon={TimerIcon} title="LAST SEEN">
        <FilterMenu text="Today" />
        <FilterMenu text="This Week" />
        <FilterMenu text="Before This Week" />
        <FilterMenu text="Before This Month" />
        <FilterMenu text="Before Last Month" />
      </FilterSection>

      <FilterSection icon={StatusIcon} title="STATUS">
        <FilterMenu text="Cold" color="bg-palatinatePurple" />
        <FilterMenu text="Warm" color="bg-blackOlive" />
        <FilterMenu text="Hot" color="bg-darkSilverColor" />
        <FilterMenu text="In Contract" color="bg-limeGreen" />
      </FilterSection>

      <FilterSection icon={TagIcon} title="TAGS">
        {tags && tags.length > 0 ? (
          tags.map((tag, index) => (
            <button
              key={index}
              onClick={() => handleTagClick(tag.trim())}
              className={`
                ${index % 2 === 0 ? "bg-darkSilverColor" : "bg-palatinatePurple"}
                ${selectedTags.includes(tag.trim()) ? "ring-2 ring-white" : ""}
                rounded-xl block text-white font-bold mb-[6px] text-[8px] 
                px-[6px] py-[5px] md:text-[15px] md:px-3 md:py-2 md:mb-4
                transition-all duration-200 hover:opacity-90
              `}>
              {tag.trim()}
            </button>
          ))
        ) : (
          <p className="text-darkSilverColor text-[10px] font-bold my-[12px] cursor-pointer hover:text-palatinatePurple relative flex items-center md:text-[20px]">
            No Tags Available
          </p>
        )}
      </FilterSection>

      <FilterSection icon={DualUser} title="ACCOUNT MANAGER">
        <FilterMenu text="Me" />
      </FilterSection>
    </div>
  );
};

interface FilterSectionProps {
  icon: string;
  title: string;
  children: React.ReactNode;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  icon,
  title,
  children,
}) => {
  return (
    <>
      <div className="h-[36.8px] w-full mt-[22px] mr-[10px] flex items-center ">
        <Image
          src={icon}
          alt={title}
          className="h-[22px] w-[22px] ml-[14px] md:h-[44px] md:w-[44px]"
        />
        <h5 className="text-xs font-bold ml-[7px] text-darkSilverColor md:text-[20px] md:ml-3">
          {title}
        </h5>
      </div>
      <div className="ml-[44px] md:ml-[70px] ">{children}</div>
    </>
  );
};

interface FilterMenuProps {
  text: string;
  color?: string;
}

const FilterMenu: React.FC<FilterMenuProps> = ({ text, color }) => {
  return (
    <h5 className="text-darkSilverColor text-[10px] font-bold my-[12px] cursor-pointer hover:text-palatinatePurple relative flex items-center md:text-[20px]">
      {text} <span className={`${color} w-2 h-2 rounded-lg  ms-7 `}></span>
    </h5>
  );
};

export default FilterContacts;
