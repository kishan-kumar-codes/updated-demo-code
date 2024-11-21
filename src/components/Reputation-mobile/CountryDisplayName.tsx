import React, { useState, useRef, useEffect, useCallback } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Button } from "@/components/ui/button";
import { styles } from "./ReputionManager";
import { RepuSearchSvgs } from "@/svgs/review-dashboard-mobile/svgs";

const items = [
  {
    id: "recents",
    label: "Select All",
  },
  {
    id: "home",
    label: "Company Location 1",
  },
  {
    id: "applications",
    label: "Company Location 2",
  },
  {
    id: "desktop",
    label: " Company Location 3",
  },
  {
    id: "downloads",
    label: "Company Location 4",
  },
  {
    id: "documents",
    label: "Company Location 5",
  },
] as const;

const LocationDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleSelect = useCallback((id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div
      ref={dropdownRef}
      className={`relative rounded-2xl inline-block text-center w-full`}>
      <div
        className={`${isOpen ? "border-t-2 border-l-2 border-r-2 rounded-tl-xl rounded-tr-xl p-2 bg-white" : "bg-white rounded-2xl  border-none"} translate-x-[1px] translate-y-1`}>
        <button
          onClick={handleToggle}
          className={`flex ${isOpen ? "rounded-none" : "rounded-2xl"} items-center justify-between w-full py-2 px-4 text-base  text-gray-600 font-medium bg-[#FFFFFF] cursor-pointer`}
          aria-haspopup="true"
          aria-expanded={isOpen}>
          <div className="font-bold text-xs md:text-lg lg:text-2xl text-[#6D6D6D]">
            {selectedItems.length ? "Location" : "Location"}
          </div>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
      {isOpen && (
        <div
          className={`absolute top-full transform ${isOpen ? "translate-x-[1px]" : "translate-x-0"} scrollbar-hide left-0 w-full max-h-52 text-center overflow-auto bg-white  text-gray-600 font-medium z-10  ${isOpen ? "border-b-2 border-l-2  border-r-2 rounded-bl-xl rounded-br-xl " : "bg-white border-none"}`}>
          <div className="flex pl-2 pt-2 pb-2 z-10 items-center justify-center relative w-[98%]">
            <input
              className={`${styles.input.default} text-xs md:text-lg lg:text-2xl px-4 md:py-6 ${styles.input.filter}`}
              placeholder="Search"
            />
            <div className="absolute inset-y-0 justify-center items-center left-2 flex p-2">
              <RepuSearchSvgs />
            </div>
          </div>
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-3 items-center py-2 px-4 text-base cursor-pointer">
              <Checkbox
                id={item.id}
                className="border border-[#6D6D6D] rounded-sm"
                checked={selectedItems.includes(item.id)}
                onCheckedChange={(checked) => {
                  handleSelect(item.id);
                }}
              />
              <Label
                htmlFor={item.id}
                className="font-medium text-xs md:text-lg lg:text-2xl">
                {item.label}
              </Label>
            </div>
          ))}
          <div className="flex p-2 justify-end gap-2 pb-6">
            <Button className="w-fit py-0 h-7 md:h-10 text-xs px-4 md:text-lg lg:text-2xl rounded-lg border-2 font-semibold border-[#631363] bg-white text-[#631363] mt-3">
              Clear
            </Button>
            <Button className="w-fit py-0 h-7 md:h-10 text-xs md:text-lg lg:text-2xl px-4 rounded-lg bg-[#40F440] font-semibold text-black mt-3">
              Apply
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationDropdown;
