import {
  GerneralEditSvgs,
  GerneralUser1Svgs,
  GerneralVisaSvgs,
} from "@/svgs/General-Settings-Mobile/svgs";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import CountryListDropdown from "../Reputation-mobile/CountryDisplayName";
import { Button } from "../ui/button";
import InputBarField from "../citations-builder/InputBarField";
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
import { Input } from "../ui/input";

const GereralBillingInformation = () => {
  return (
    <div className="flex flex-col w-full gap-2">
      {" "}
      <span className="text-[#6D6D6D] text-xs font-bold leading-normal">
        Billing Information
      </span>
      <div className="w-full flex px-4 flex-col gap-1 h-24 bg-[#F4F4F4] rounded-xl">
        <div className="w-full flex justify-between items-center mt-2 ">
          <GerneralUser1Svgs />{" "}
          <Dialog>
            <DialogTrigger asChild>
              <span className="cursor-pointer">
                <GerneralEditSvgs />
              </span>
            </DialogTrigger>
            <DialogContent className="w-[95%] rounded-xl flex  bg-[#F4F4F4] hide-scrollbar">
              <DialogDescription className="w-full flex-col gap-2 flex ">
                <span className="text-[#6D6D6D] text-xl -mt-3 font-bold leading-normal">
                  Billing Information
                </span>
                <span className="text-[#6D6D6D] text-xs font-bold leading-normal">
                  Update your billing Information
                </span>
                <div className="w-full flex flex-col gap-2">
                  <div className="w-full flex flex-col gap-1">
                    {/* <InputBarField
                      label="Full Name"
                      placeHolder="John Doe"
                      isMobile={true}
                      textCenter="text-left"
                      fontFamily="Arial"
                    /> */}
                    <div className="flex gap-1 pt-1 flex-col">
                      <Label className="text-[#6D6D6D] pl-1 text-xs font-bold">
                        Full Name
                      </Label>
                      <Input
                        placeholder="John Doe"
                        className="rounded-2xl h-10 bg-white"
                      />
                    </div>
                    <div className="flex gap-1 pt-1 flex-col">
                      <Label className="text-[#6D6D6D] text-xs pl-1 flex gap-2 font-bold">
                        Country Or Region
                      </Label>
                      <Select>
                        <SelectTrigger className="w-full font-bold  text-[#6D6D6D] text-xs bg-white rounded-2xl">
                          <SelectValue
                            className="bg-white font-bold"
                            placeholder="United States"
                          />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectGroup>
                            <SelectItem value="usa">United States</SelectItem>
                            <SelectItem value="canada">Canada</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    {/* <InputBarField
                      label="Address Line 1"
                      placeHolder=""
                      isMobile={true}
                      textCenter="text-left"
                      fontFamily="Arial"
                    />{" "}
                    <InputBarField
                      label="Address Line 2"
                      placeHolder=""
                      isMobile={true}
                      textCenter="text-left"
                      fontFamily="Arial"
                    /> */}
                    <div className="flex gap-1 pt-1 flex-col">
                      <Label className="text-[#6D6D6D] text-xs pl-1 font-bold">
                        Address Line 1
                      </Label>
                      <Input className="rounded-2xl h-10 bg-white" />
                    </div>
                    <div className="flex gap-1 pt-1 flex-col">
                      <Label className="text-[#6D6D6D] text-xs pl-1 font-bold">
                        Address Line 2
                      </Label>
                      <Input className="rounded-2xl h-10 bg-white" />
                    </div>
                    <div className="flex gap-1 pt-1 flex-col">
                      <Label className="text-[#6D6D6D] text-xs pl-1 font-bold">
                        City
                      </Label>
                      <Input className="rounded-2xl h-10 bg-white" />
                    </div>
                    {/* <InputBarField
                      label="City"
                      placeHolder=""
                      isMobile={true}
                      textCenter="text-left"
                      fontFamily="Arial"
                    /> */}
                    {/* <div className="flex w-full gap-2">
                      <div className="flex flex-col w-full gap-1">
                        <span className="text-[#6D6D6D] text-xs font-bold leading-normal pl-2">
                          State
                        </span>
                        <input
                          type="text"
                          placeholder="Florida"
                          className="w-full rounded-xl  h-10  p-2 focus:outline-none text-[#6D6D6D] text-xs font-normal leading-normal"
                        />
                      </div>{" "}
                      <div className="flex flex-col w-full gap-1">
                        <span className="text-[#6D6D6D] text-xs font-bold leading-normal pl-2">
                          Zip Code
                        </span>
                        <input
                          type="text"
                          placeholder="231211"
                          className="w-full rounded-xl  h-10  p-2 focus:outline-none text-[#6D6D6D] text-xs font-normal leading-normal"
                        />
                      </div>
                    </div> */}
                    <div className="flex gap-1 pt-2 ">
                      <div className="flex gap-1 w-1/2 flex-col">
                        <Label className="text-[#6D6D6D] text-xs pl-1 font-bold">
                          State
                        </Label>
                        <Select>
                          <SelectTrigger className="w-full font-bold  text-[#6D6D6D] text-xs bg-white rounded-2xl">
                            <SelectValue
                              className="bg-white font-bold"
                              placeholder="Florida"
                            />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectGroup>
                              <SelectItem value="usa">Florida</SelectItem>
                              <SelectItem value="geg">Georgia</SelectItem>
                              <SelectItem value="ohio">Ohio</SelectItem>
                              <SelectItem value="cali">California</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex gap-1 w-1/2 flex-col">
                        <Label className="text-[#6D6D6D] text-xs pl-1 font-bold">
                          Zip Code
                        </Label>
                        <Input className="rounded-2xl h-10 bg-white" />
                      </div>
                    </div>
                    <div className="flex w-full my-2 justify-end gap-5">
                      <Button className="bg-[#40F440] text-[#3D3D3D] h-9 py-3 px-5 font-bold rounded-lg">
                        Save
                      </Button>
                      <Button className="bg-[#BA0416] text-[#FFFFFF] h-9  py-3 px-4 font-bold rounded-lg">
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </div>
        <span className="text-[#6D6D6D] text-xs  font-bold leading-normal">
          John Doe
        </span>
        <span className="text-[#6D6D6D] text-[10px] font-normal leading-normal">
          1234 Elmwood Avenue, Apt 56B, Springfield, CA 90210
        </span>
      </div>
    </div>
  );
};

export default GereralBillingInformation;
