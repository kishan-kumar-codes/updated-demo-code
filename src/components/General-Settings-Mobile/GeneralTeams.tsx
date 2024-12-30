"use client";
import React from "react";
import Header from "../Reputation-mobile/Header";
// import { HeaderBarMobile } from "../citations-builder/HeadBar";
import { SearchSvg } from "@/svgs/seo-screens/svgs";
import ChatDropDown from "../Webchat-Settings/ChatDropDown";
import { Button } from "../ui/button";
import GereralTeamEmpCard from "./GereralTeamEmpCard";
import CitationNavbar from "../review-dashboard-mobile/ReviewNavbar";
import {
  GeneralBackspaceSvgs,
  GeneralDeleteSvgs,
  GerneralEditSvgs,
} from "@/svgs/General-Settings-Mobile/svgs";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";

const GeneralTeams = () => {
  const members = [
    { value: "option1", label: "User Role" },
    { value: "option2", label: "User Role" },
  ];

  // Callback function for handling member selection
  const handleSelect = React.useCallback(
    ({ label, value }: { label: string; value: string }) =>
      console.log("Selected option:", { label, value }),
    []
  );
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex flex-col w-full  justify-center items-center h-full">
        <div className="flex flex-col gap-7 justify-center items-center w-full">
          {/* <Header title={"General Settings"} displayName=" General Settings" /> */}
          <div className="flex flex-col   w-[90%] h-full ">
            <div className="flex flex-col w-full  items-center gap-2 min-h-[490px]  h-full pt-2">
              <div className="flex w-full gap-3 flex-col ">
                {/* <HeaderBarMobile title="Teams" /> */}
                <div className="flex rounded-3xl flex-col z-10 min-h-[160px] justify-start w-full pb-20 bg-[#E0E0E0]">
                  <div className="w-full rounded-xl text-white text-[16px] lg:text-[30px] font-bold pl-5 py-2.5 bg-[#631363]">
                    Teams
                  </div>
                  <div className="flex flex-col w-full gap-3 px-3 lg:px-6 pt-4">
                    <div className="flex w-full gap-2  justify-between">
                      <div className="flex relative lg:w-full h-[40px] items-center py-1 lg:py-6">
                        <input
                          type="text"
                          className="w-[180px] lg:w-full h-[40px] lg:text-[22px] lg:h-[50px] bg-[#FFF] text-start pl-10 text-[#6D6D6D] rounded-2xl focus:outline-none"
                          placeholder="Search"
                        />
                        <div className="absolute inset-y-0 -left-1 flex justify-center items-center py-2 px-4">
                          <SearchSvg />
                        </div>
                      </div>
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
                              <SelectItem value="usa">Role 1</SelectItem>
                              <SelectItem value="canada">Role 2</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="w-full px-3 py-2 lg:py-4 flex justify-end">
                      <Button className="bg-[#631363] lg:h-12 text-[#FFFFFF] lg:text-[22px] py-3 font-bold rounded-3xl px-2">
                        + Add Employee
                      </Button>
                    </div>

                    <GereralTeamEmpCard
                      name={"John Doe "}
                      email={"johndoe@gmail.com"}
                      phone={"(555) 555-5555"}
                      userType={"Agency-Admin"}
                      action={
                        <>
                          <GerneralEditSvgs />
                          <GeneralDeleteSvgs />
                          <GeneralBackspaceSvgs />
                        </>
                      }
                    />
                    <GereralTeamEmpCard
                      name={"John Doe "}
                      email={"johndoe@gmail.com"}
                      phone={"(555) 555-5555"}
                      userType={"Agency-Admin"}
                      action={
                        <>
                          <GerneralEditSvgs />
                          <GeneralDeleteSvgs />
                          <GeneralBackspaceSvgs />
                        </>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:hidden justify-center mt-10 items-center bg-[#40F440] h-[55px] rounded-t-3xl"></div>
      </div>
    </div>
  );
};

export default GeneralTeams;
