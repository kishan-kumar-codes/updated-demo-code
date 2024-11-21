"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface Option {
  value: string;
  label: string;
}

interface SelectComponentProps {
  options: Option[];
  placeholder: string;
  label: string;
  onSelect: (value: string) => void;
}

const SelectComponent: React.FC<SelectComponentProps> = ({
  options,
  placeholder,
  label,
  onSelect,
}) => {
  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger className="w-full bg-[#F4F4F4] rounded-2xl h-12 py-5 lg:w-[80%]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-[#F4F4F4] rounded-xl">
        <SelectGroup>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectComponent;
