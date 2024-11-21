"use client";
import { useState } from "react";
import { Menu, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GroupTab() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (index: any) => {
    setActiveButton(index);
  };

  const [expanded, setExpanded] = useState(null);

  const handleExpand = (buttonType: any) => {
    setExpanded(buttonType === expanded ? null : buttonType);
  };

  return (
    <>
      <div className="bg-[#F4F4F4]  rounded-xl">
        <div className="flex flex-col space-y-2 ">
          <Button className=" justify-between pl-10 text-[#6D6D6D] py-1 bg-[#F4F4F4]  mt-2 font-bold ">
            Rebecca Rileys{" "}
            <Button className="rounded-md bg-[#631363] h-6 w-18 font-semibold text-xs text-white">
              {" "}
              Assign
            </Button>
          </Button>
          <Button className=" justify-between pl-10 text-[#6D6D6D] py-1 bg-[#E0E0E0]    font-bold rounded-none ">
            <div className="text-base"> Tommy Bradford</div>
            <Button className="rounded-md bg-[#40F440] h-6 w-18 font-semibold text-xs text-black">
              {" "}
              Assign
            </Button>
          </Button>
          <Button className=" justify-between pl-10 text-[#6D6D6D] py-1 bg-[#F4F4F4]    font-bold ">
            <div className="text-base"> Miriam Hoover</div>
            <Button className="rounded-md bg-[#631363] h-6 w-18 font-semibold text-xs text-white">
              {" "}
              Assign
            </Button>
          </Button>
          <Button className=" text-[#6D6D6D] py-1 bg-[#F4F4F4]  pl-10  flex justify-between font-bold ">
            <div className="text-base"> Helena Franklin</div>
            <Button className="rounded-md  bg-[#631363] h-6 w-18 font-semibold text-xs text-white">
              {" "}
              Assign
            </Button>
          </Button>
          <hr />
        </div>
      </div>
    </>
  );
}
