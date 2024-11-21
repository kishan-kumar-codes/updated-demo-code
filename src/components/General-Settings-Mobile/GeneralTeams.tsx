"use client";
import React from "react";
import Header from "../Reputation-mobile/Header";
// import { HeaderBarMobile } from "../citations-builder/HeadBar";
import { SearchSvg } from "@/svgs/seo-screens/svgs";
import ChatDropDown from "../Webchat-Settings/ChatDropDown";
import { Button } from "../ui/button";
import GereralTeamEmpCard from "./GereralTeamEmpCard";
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
      <div className="flex flex-col w-full md:w-[430px] justify-center items-center lg:w-[430px] h-full">
        <div className="flex flex-col gap-7 justify-center items-center w-full">
          <Header title={"General Settings"} displayName=" General Settings" />
          <div className="flex flex-col   w-[90%] h-full ">
            <div className="flex flex-col w-full  items-center gap-2 min-h-[490px]  h-full pt-2">
              <div className="flex w-full gap-3 flex-col ">
                {/* <HeaderBarMobile title="Teams" /> */}
                <div className="flex rounded-3xl flex-col z-10 min-h-[160px] justify-start w-full pb-20 bg-[#E0E0E0]">
                  <div className="w-full rounded-xl text-white text-[16px] font-bold pl-5 py-2.5 bg-[#631363]">
                    Teams
                  </div>
                  <div className="flex flex-col w-full gap-3 pt-4 px-2">
                    <div className="flex w-full gap-2 px-3 justify-between">
                      <div className="flex relative h-[40px] items-center py-1">
                        <input
                          type="text"
                          className="w-[180px] h-[40px] bg-[#FFF] text-start pl-10 text-[#6D6D6D] rounded-2xl focus:outline-none"
                          placeholder="Search"
                        />
                        <div className="absolute inset-y-0 -left-1 flex justify-center items-center py-2 px-4">
                          <SearchSvg />
                        </div>
                      </div>
                      <div className="flex gap-1flex-col">
                        <Select>
                          <SelectTrigger className="w-full font-bold  text-[#6D6D6D] text-xs bg-white rounded-2xl">
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
                    <div className="w-full px-3 flex justify-end">
                      <Button className="bg-[#631363] text-[#FFFFFF] py-3 font-bold rounded-3xl px-2">
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
        <div className="flex w-full justify-center mt-10 items-center bg-[#40F440] h-[55px] rounded-t-3xl"></div>
      </div>
    </div>
  );
};

export default GeneralTeams;
