import {
  GerneralAmericanExpressSvgs,
  GerneralDiscoverSvgs,
  GerneralEditSvgs,
  GerneralMastercardSvgs,
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

const GerernalPaymentMethod = () => {
  return (
    <div className="flex flex-col w-full gap-2">
      {" "}
      <span className="text-[#6D6D6D] text-xs font-bold leading-normal">
        Payment Method
      </span>
      <div className="w-full flex px-4 flex-col gap-1 h-24 bg-[#FFFFFF] rounded-xl">
        <div className="w-full flex justify-between items-center my-2 ">
          <GerneralVisaSvgs />{" "}
          <Dialog>
            <DialogTrigger>
              <span className="cursor-pointer">
                <GerneralEditSvgs />
              </span>
            </DialogTrigger>
            <DialogContent className="w-[95%] flex rounded-xl  bg-[#F4F4F4] hide-scrollbar">
              <DialogDescription className="w-full flex-col gap-2 flex ">
                <span className="text-[#6D6D6D] text-xl -mt-2 font-bold leading-normal">
                  Update Payment Method
                </span>
                <span className="text-[#6D6D6D] text-xs font-bold leading-normal">
                  Update your card detalis
                </span>
                <div className="w-full flex flex-col gap-2">
                  <div className="w-full flex flex-col gap-2">
                    <span className="text-[#6D6D6D] text-xs pl-1  font-bold leading-normal">
                      Card Number
                    </span>
                    <div className="w-full flex items-center">
                      <input
                        className="w-full rounded-l-xl  h-10  p-2 focus:outline-none text-[#6D6D6D] text-xs font-normal leading-normal"
                        type="text"
                        placeholder="1234 1234 1234 1234"
                      />
                      <div className="flex bg-[#FFFFFF]  h-10 rounded-r-xl items-center">
                        <GerneralVisaSvgs />
                        <GerneralMastercardSvgs />
                        <GerneralAmericanExpressSvgs />
                        <GerneralDiscoverSvgs />
                      </div>
                    </div>
                    <div className="flex w-full gap-2">
                      <div className="flex flex-col w-full gap-1">
                        <span className="text-[#6D6D6D] text-xs pl-1  font-bold leading-normal ">
                          Expiration Date
                        </span>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full rounded-xl  h-10  p-2 focus:outline-none text-[#6D6D6D] text-xs font-normal leading-normal"
                        />
                      </div>{" "}
                      <div className="flex flex-col w-full gap-1">
                        <span className="text-[#6D6D6D] text-xs pl-1  font-bold leading-normal ">
                          Security Code
                        </span>
                        <input
                          type="text"
                          placeholder="CVC"
                          className="w-full rounded-xl  h-10  p-2 focus:outline-none text-[#6D6D6D] text-xs font-normal leading-normal"
                        />
                      </div>
                    </div>
                    <div className="flex gap-1 pt-1 flex-col">
                      <Label className="text-[#6D6D6D] text-xs pl-1  flex gap-2 font-bold">
                        Country
                      </Label>
                      <Select>
                        <SelectTrigger className="w-full font-bold  text-[#6D6D6D] text-xs bg-white rounded-2xl">
                          <SelectValue
                            className="bg-white font-bold"
                            placeholder="Select a Country"
                          />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectGroup>
                            <SelectItem value="usa">USA</SelectItem>
                            <SelectItem value="canada">Canada</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <span className="text-[#6D6D6D] text-xs text-centerfont-normal leading-normal">
                      By providing your card information, you allow HubSpark to
                      charge your card for future payments in accordance with
                      their terms.
                    </span>
                    <div className="flex w-full  justify-end gap-5">
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
        <span className="text-[#6D6D6D] text-xs mt-3 font-bold leading-normal">
          Visa ************1234
        </span>
        <span className="text-[#6D6D6D] text-xs font-normal leading-normal">
          Expires 7/2027
        </span>
      </div>
    </div>
  );
};

export default GerernalPaymentMethod;
