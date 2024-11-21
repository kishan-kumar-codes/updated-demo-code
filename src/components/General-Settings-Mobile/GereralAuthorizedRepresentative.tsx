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
      <div className="flex rounded-3xl flex-col z-10 min-h-[160px] justify-start w-full bg-[#E0E0E0]">
        <div className="w-full rounded-xl text-white text-[16px] font-bold pl-5 py-2.5 bg-[#631363]">
          Authorized Representative
        </div>
        <div className="flex flex-col w-full gap-2 pt-4 px-5 ">
          <div className="flex gap-2 pt-2 ">
            <div className="flex gap-1 flex-col">
              <Label className="text-[#6D6D6D] text-xs pl-1  font-bold">
                First Name
              </Label>
              <Input className="rounded-2xl h-10 bg-white" />
            </div>
            <div className="flex gap-1  flex-col">
              <Label className="text-[#6D6D6D] text-xs pl-1  font-bold">
                Last Name
              </Label>
              <Input className="rounded-2xl h-10 bg-white" />
            </div>
          </div>
          <div className="flex gap-1 pt-1 flex-col">
            <Label className="text-[#6D6D6D] text-xs pl-1  font-bold">
              Representative Email
            </Label>
            <Input className="rounded-2xl h-10 bg-white" />
          </div>
          <div className="flex gap-1 pt-1 flex-col">
            <Label className="text-[#6D6D6D] text-xs pl-1  font-bold">
              Job Position
            </Label>
            <Input className="rounded-2xl h-10 bg-white" />
          </div>

          <div className="flex gap-1 pt-1 flex-col">
            <Label className="text-[#6D6D6D] text-xs pl-1  font-bold">
              Phone Number (With Country Code)
            </Label>
            <Input className="rounded-2xl h-10 bg-white" />
          </div>

          <div className="w-full flex justify-between pb-8 pt-2 items-center">
            <Button className="bg-[#40F440] text-[##3D3D3D] py-3 font-bold rounded-xl">
              +Add
            </Button>
            <Button className="bg-[#40F440] text-[##3D3D3D] py-3 font-bold rounded-xl">
              Update Information
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GereralAuthorizedRepresentative;
