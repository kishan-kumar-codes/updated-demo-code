import { Menu } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/images/hubspark/HubSparkLogo.png";
import { RefreshCcw } from "lucide-react";
import avtar from "@/assets/images/hubspark/avtar.png";
import { Button } from "@/components/ui/button";
import React from "react";

interface MobileHeaderProps {
  headerTitle: string;
}

export default function MobileHeader({ headerTitle }: MobileHeaderProps) {
  return (
    <div className="bg-[#F4F4F4]">
      <div className="md:hidden w-full flex border-b-2 py-4 rounded-b-3xl items-center justify-between bg-[#E0E0E0]">
        <div className="w-fit">
          <div className="pl-4">
            <Menu color="#6D6D6D" />
          </div>
        </div>
        <div className="text-2xl w-full text-center font-bold text-[#6D6D6D] ">
          {headerTitle}
        </div>
      </div>
      <div className="hidden md:flex w-full justify-between ">
        <div className="flex w-full bg-white justify-between">
          <div className="flex justify-between px-2">
            <div className="flex pl-2">
              <Image
                src={logo}
                quality={100}
                priority={true}
                alt="HubSpark Logo"
                width={100}
                height={80}
              />
            </div>

            <div className="flex md:pl-8 pl-2 space-x-2">
              <div className="bg-black w-3 h-full transform skew-x-12"></div>
              <div className="bg-[#631363]  w-3 h-full transform skew-x-12"></div>
              <div className="bg-[#40F440] w-3 h-full transform skew-x-12"></div>
            </div>
          </div>
          <div className="text-[#6D6D6D] flex flex-col">
            <div className="font-bold text-2xl text-center">{headerTitle}</div>
            <div className="w-40 bg-[#631363] h-2 rounded-full"></div>
          </div>
          <div
            className="bg-[#631363]  mr-2 flex w-60 justify-center items-center gap-4"
            style={{
              background: "linear-gradient(to right, white 10%, #631363 2%)",
            }}>
            <div className="bg-white w-3 h-full transform skew-x-12"></div>{" "}
            <Button>
              {" "}
              <RefreshCcw color="white" />
            </Button>
            <Image src={avtar} alt="HubSpark Logo" width={20} height={20} />
            <div className="text-white font-semibold">John Doe</div>
          </div>
        </div>
      </div>
    </div>
  );
}
