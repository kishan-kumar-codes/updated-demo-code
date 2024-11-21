import {
  BattrySvgs,
  NetworkSvgs,
  TImeMobileSvgs,
  WifiSvgs,
} from "@/svgs/Review-Widget-mobile/svgs";
import React from "react";
import { Wifi } from "lucide-react";
import { Battery } from "lucide-react";
import { SignalHigh } from "lucide-react";

const PhoneLayout = () => {
  return (
    <div className="w-full h-[454.2px]  md:h-[854.3px] flex justify-center items-center  md:items-start py-0 md:py-8 rounded-2xl  bg-[#F4F4F4] shrink-0">
      {/* iPhone-like container */}
      <div className="relative w-[208.3px] md:w-[388.3px] h-[413.5px] md:h-[753.5px] shrink-0 rounded-[30px] md:rounded-[45px] border md:border-2 border-[#B9B6B5] bg-white">
        {/* Notch cutout */}
        <div className="absolute top-0 z-50 left-1/2 flex transform justify-center items-center gap-1 -translate-x-1/2 w-[100px] md:w-[140px] h-[20px] md:h-[30px] bg-white rounded-b-xl ">
          <div className=" w-7 md:w-16 md:h-2 h-1 bg-[#686867] rounded-full  " />{" "}
          <div className=" w-1 h-1 md:w-1.5 md:h-1.5 bg-[#686867] rounded-full " />
        </div>
        <div className="relative w-[188.3px] md:w-[368.3px] bg-[#E0E0E0]  z-10 h-[393.5px] md:h-[733.3px] pb-10 transform translate-x-2.5  translate-y-2 justify-center items-center shrink-0 rounded-[30px]  md:rounded-[45px] ">
          <div className="w-[90%] z-50 h-2 flex justify-between pt-3 ml-3 items-center">
            <div className="flex text-xs pl-1 md:pl-6">
              <div className="flex md:hidden">
                <TImeMobileSvgs />
              </div>
              <div className="md:flex hidden">12.00 PM</div>
            </div>
            <div className="flex pr-2 ">
              <div className="flex md:hidden">
                {" "}
                <NetworkSvgs />
                <WifiSvgs />
                <BattrySvgs />
              </div>
              <div className="gap-2 hidden md:flex">
                {" "}
                <Wifi color="#000000" size={18} />
                <Battery color="#000000" size={18} />
                <SignalHigh color="#000000" size={18} />
              </div>
            </div>
          </div>
          <div className="w-[90%] relative transform translate-y-10 flex my-5 py-5 pl-2 h-full justify-start items-start">
            <div className="flex clip-bottom z-50 -rotate-90 h-2 w-4 ml-1 bg-[#631363]"></div>
            <div className="rounded-md rotate-180 z-10 -ml-1.5  -mt-7 bg-[#631363] p-2 md:p-4 text-center text-xs text-white w-[100.008px] md:w-[190px] h-[53.616px] md:h-[90px] shrink-0 fill-[#631363]"></div>
            <span className="text-white w-[100.008px] md:w-[180px] flex justify-center items-center h-[53.616px] z-50 ml-4 md:ml-6 pl-0.5 -mt-7 absolute text-[7px] md:text-xs  pt-2 md:pt-8 lg:text-[14px] font-normal leading-[10px] md:leading-3 lg:leading-4">
              Hi John, Thank you for visiting Hp. We would love to hear about
              your experience. [URL] Reply STOP to opt out
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneLayout;
