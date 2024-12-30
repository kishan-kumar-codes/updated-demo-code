import React from "react";
import { Button } from "../ui/button";
import InputBarField from "../citations-builder/InputBarField";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
// import { HeaderBarMobile } from "../citations-builder/HeadBar";

const GereralAuthorizedRepresentative = () => {
  return (
    <div className="flex w-full gap-3 flex-col ">
      {/* <HeaderBarMobile title="Authorized Representative" /> */}
      <div className="flex rounded-xl lg:rounded-3xl flex-col z-10 min-h-[160px] justify-start w-full bg-[#E0E0E0]">
        <div className="w-full rounded-xl text-white text-[16px]  lg:text-[26px] font-bold pl-5 py-2.5 lg:py-4 bg-[#631363] lg:rounded-2xl">
          Authorized Representative
        </div>
        <div className="flex flex-col w-full gap-2 pt-4 px-5 lg:px-16 ">
          <div className="flex gap-2 pt-2 lg:pt-4 w-full">
            <div className="flex gap-1 flex-col w-full">
              <Label className="text-[#6D6D6D] text-[10px] lg:text-[22px] pl-1  font-bold">
                First Name
              </Label>
              <Input className="rounded-[10px] lg:rounded-2xl h-[26px] mt-0 lg:mt-1 lg:h-[48px] bg-[#F4F4F4] lg:bg-white text-[10px] lg:text-[22px]" />
            </div>
            <div className="flex gap-1 w-full flex-col">
              <Label className="text-[#6D6D6D] text-[10px] lg:text-[22px] pl-1  font-bold">
                Last Name
              </Label>
              <Input className="rounded-[10px] lg:rounded-2xl h-[26px] mt-0 lg:mt-1 lg:h-[48px] bg-[#F4F4F4] lg:bg-white text-[10px] lg:text-[22px]" />
            </div>
          </div>
          <div className="flex gap-1 pt-1 lg:pt-4 flex-col">
            <Label className="text-[#6D6D6D] text-[10px] lg:text-[22px] pl-1  font-bold">
              Representative Email
            </Label>
            <Input className="rounded-[10px] lg:rounded-2xl h-[26px] mt-0 lg:mt-1 lg:h-[48px] bg-[#F4F4F4] lg:bg-white text-[10px] lg:text-[22px]" />
          </div>
          <div className="flex gap-1 pt-1 lg:pt-4 flex-col">
            <Label className="text-[#6D6D6D] text-[10px] lg:text-[22px] pl-1  font-bold">
              Job Position
            </Label>
            <Input className="rounded-[10px] lg:rounded-2xl h-[26px] mt-0 lg:mt-1 lg:h-[48px] bg-[#F4F4F4] lg:bg-white text-[10px] lg:text-[22px]" />
          </div>

          <div className="flex gap-1 pt-1 lg:pt-4 flex-col">
            <Label className="text-[#6D6D6D] text-[10px] lg:text-[22px] pl-1  font-bold">
              Phone Number (With Country Code)
            </Label>
            <Input className="rounded-[10px] lg:rounded-2xl h-[26px] mt-0 lg:mt-1 lg:h-[48px] bg-[#F4F4F4] lg:bg-white text-[10px] lg:text-[22px]" />
          </div>

          <div className="w-full flex justify-between pb-8 pt-2  items-center">
            <Button className="bg-[#40F440] text-[##3D3D3D] lg:text-[22px] py-3 font-bold rounded-lg lg:rounded-2xl w-[60px] h-[32px] lg:w-[98px] lg:h-[51px]">
              +Add
            </Button>
            <Button className="bg-[#40F440] text-[##3D3D3D] lg:text-[22px] py-3 font-bold rounded-lg lg:rounded-2xl w-[140px] h-[32px] lg:w-[222px] lg:h-[53px]">
              Update Information
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GereralAuthorizedRepresentative;
