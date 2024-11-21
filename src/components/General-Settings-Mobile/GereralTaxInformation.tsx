"use client";
import { GerneralEditSvgs } from "@/svgs/General-Settings-Mobile/svgs";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { ReviewWidgetInfoTooltip } from "../Reputation-mobile/TooltipReputation";
import SquareCheckBoxButton from "../citations-builder/SquareCheckBox";
import ChatDropDown from "../Webchat-Settings/ChatDropDown";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const GereralTaxInformation = () => {
  const members = [
    { value: "option1", label: "Personalize" },
    { value: "option2", label: "Contact Address" },
    { value: "option3", label: "Order Status" },
    { value: "option4", label: "Order Number" },
  ];

  // Callback function for handling member selection
  const handleSelect = React.useCallback(
    ({ label, value }: { label: string; value: string }) =>
      console.log("Selected option:", { label, value }),
    []
  );
  return (
    <div className="flex flex-col w-full gap-2">
      {" "}
      <span className="text-[#6D6D6D] text-xs font-bold leading-normal">
        Tax Information
      </span>
      <div className="w-full flex px-4 flex-col gap-1 h-24 bg-[#F4F4F4] rounded-xl">
        <div className="w-full flex justify-end items-center my-3 ">
          <Dialog>
            <DialogTrigger asChild>
              <span className="cursor-pointer">
                <GerneralEditSvgs />
              </span>
            </DialogTrigger>
            <DialogContent className="w-[95%] flex rounded-xl  bg-[#F4F4F4] hide-scrollbar">
              <DialogDescription className="w-full flex-col gap-2 flex ">
                <span className="text-[#6D6D6D] text-xl -mt-3 font-bold leading-normal">
                  Tax Information
                </span>
                <span className="text-[#6D6D6D] text-xs font-bold leading-normal">
                  Update your tax detalis
                </span>
                <div className="w-full flex flex-col gap-2">
                  <div className="w-full flex flex-col gap-2">
                    <div className="flex w-full justify-between items-center">
                      <span className="text-[#6D6D6D] text-xs pl-1  font-bold leading-normal">
                        Select Tax ID Type{" "}
                        <span className="text-[#631363]">*</span>
                      </span>
                      <ReviewWidgetInfoTooltip />
                    </div>
                    <div className="flex gap-1 flex-col">
                      <Select>
                        <SelectTrigger className="w-full font-bold  text-[#6D6D6D] text-xs bg-white rounded-2xl">
                          <SelectValue
                            className="bg-white font-bold"
                            placeholder="Select an ID"
                          />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectGroup>
                            <SelectItem value="usa">Passport</SelectItem>
                            <SelectItem value="canada">ID Card</SelectItem>
                            <SelectItem value="canada">
                              Drivery Licence
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    {/* <ChatDropDown
                      options={members}
                      onSelect={handleSelect}
                      bgColor="#FFFFFF"
                    /> */}
                    <div className="flex w-full gap-2">
                      <div className="flex flex-col w-full gap-1">
                        <span className="text-[#6D6D6D] text-xs pl-1  font-bold leading-normal">
                          Tax ID <span className="text-[#631363]">*</span>
                        </span>
                        <input
                          type="text"
                          placeholder="Ex:12-3456789"
                          className="w-full rounded-xl  h-10  p-2 focus:outline-none text-[#6D6D6D] text-xs font-normal leading-normal"
                        />
                      </div>{" "}
                    </div>
                    <SquareCheckBoxButton
                      label="I do not have Tax ID"
                      id="I do not have Tax ID"
                      fontWeight={400}
                    />
                    <span className="text-[#6D6D6D] text-xs font-normal leading-normal">
                      We won’t prompt you to update it.
                    </span>
                    <div className="flex w-full  justify-end gap-5 pt-1">
                      <Button className="bg-[#40F440] text-[#3D3D3D] h-9 py-3 px-5 font-bold rounded-lg">
                        Save
                      </Button>
                      <Button className="bg-[#BA0416] text-[#FFFFFF] h-9 py-3 px-4 font-bold rounded-lg">
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </div>
        <span className="text-[#6D6D6D] text-xs tracking-tight font-bold leading-normal">
          Tax ID not available. Please update it by selecting the EDIT button
          above.
        </span>
      </div>
    </div>
  );
};

export default GereralTaxInformation;
