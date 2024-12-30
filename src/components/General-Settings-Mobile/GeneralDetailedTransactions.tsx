"use client";
import React from "react";
import { DatePickerWithRanges } from "./GeneralDateRangePicker";
import {
  GeneralExportSvgs,
  GeneralFilterSvgs,
} from "@/svgs/General-Settings-Mobile/svgs";
import GeneralHistoryCard from "./GeneralHistoryCard";
import { Button } from "../ui/button";
import ChatDropDown from "../Webchat-Settings/ChatDropDown";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const GeneralDetailedTransactions = () => {
  const [filter, setFilter] = React.useState<boolean>(false);
  const members = [
    { value: "option1", label: "All" },
    { value: "option2", label: "One" },
    { value: "option3", label: "Order Status" },
    { value: "option4", label: "Order Number" },
  ];

  // Callback function for handling member selection
  const handleSelect = React.useCallback(
    ({ label, value }: { label: string; value: string }) =>
      console.log("Selected option:", { label, value }),
    []
  );
  const reviews2 = [
    {
      id: "6688557854",
      date: "SubaccountNAME",
      desc: "Oct 1st 2024 04:04:36",
      cardDetails: "Sep 23rd 2024 05:23:16",
      amount: "CALL, ref:kuygfsudygfsuiydghf",
      status: "-$0.0256",
      balance: "$523",
    },
  ];
  return (
    <div className="w-full flex flex-col gap-3">
      {" "}
      <div className="flex flex-col">
        <span className="text-[#6D6D6D] text-xs lg:text-[20px] font-bold leading-normal">
          Detailed Transactions
        </span>
        <span className="text-[#6D6D6D] text-xs  lg:text-[20px] font-normal leading-normal">
          Transactions till past 6 months are accessible
        </span>
      </div>
      <div className="flex w-full gap-1 relative z-50 justify-start md:justify-between items-center">
        <DatePickerWithRanges />{" "}
        <div className="flex gap-1">
          <span
            className="text-[#FFF] cursor-pointer text-xs lg:text-[22px] font-bold flex px-2 lg:px-4 gap-1 bg-[#631363] py-1.5 rounded-3xl items-center justify-center  leading-normal"
            onClick={() => setFilter(!filter)}>
            <GeneralFilterSvgs /> Filter
          </span>
          {filter && (
            <div className="w-2/3 lg:w-1/3 lg:mt-6 py-6 lg:right-0 flex h-52 lg:h-72 rounded-2xl mt-5 top-1/2 z-50 bg-[#F4F4F4] border border-[#631363]  absolute transform ">
              <div className="w-full  flex flex-col -mt-4  p-2 lg:p-4">
                <span className="text-[#6D6D6D] text-xs lg:text-[20px] pb-1 font-bold leading-normal">
                  Transaction Type
                </span>
                <div className="flex gap-1 lg:w-full flex-col">
                  <Select>
                    <SelectTrigger className="w-full lg:h-[50px] font-bold  text-[#6D6D6D] text-xs lg:text-[22px] bg-white rounded-2xl">
                      <SelectValue
                        className="bg-white font-bold"
                        placeholder="User Role"
                      />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectGroup>
                        <SelectItem value="1">All</SelectItem>
                        <SelectItem value="2">One</SelectItem>
                        <SelectItem value="3">Order Status</SelectItem>
                        <SelectItem value="4">Order Number</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <span className="text-[#6D6D6D] text-xs py-1 lg:text-[20px] font-bold leading-normal">
                  Charge Type
                </span>
                <div className="flex gap-1 lg:w-full flex-col">
                  <Select>
                    <SelectTrigger className="w-full lg:h-[50px] font-bold  text-[#6D6D6D] text-xs lg:text-[22px] bg-white rounded-2xl">
                      <SelectValue
                        className="bg-white font-bold"
                        placeholder="User Role"
                      />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectGroup>
                        <SelectItem value="1">All</SelectItem>
                        <SelectItem value="2">One</SelectItem>
                        <SelectItem value="3">Order Status</SelectItem>
                        <SelectItem value="4">Order Number</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex w-full  justify-end pt- lg:pt-4 gap-2">
                  <Button className="bg-[#40F440] text-[#3D3D3D] h-9 lg:h-12  text-xs lg:text-[20px] px-3 font-bold rounded-lg">
                    Apply
                  </Button>
                  <Button className="bg-[#BA0416] text-[#FFFFFF] h-9 lg:h-12 text-xs lg:text-[20px]  px-3 font-bold rounded-lg">
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          )}
          <span className="text-[#FFF] text-xs lg:text-[22px] cursor-pointer font-bold flex px-2 lg:px-4 gap-1 bg-[#631363] py-1.5 rounded-3xl items-center justify-center  leading-normal">
            <GeneralExportSvgs /> Export
          </span>
        </div>
      </div>
      <div className="w-full z-20 flex">
        {reviews2.map((review) => (
          <GeneralHistoryCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default GeneralDetailedTransactions;
