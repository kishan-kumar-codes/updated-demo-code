"use client";

import { Button } from "@/components/ui/button";

import Image from "next/image";
import Screen from "@/assets/images/hubspark/BottomScreen.png";
import { useState } from "react";
import GroupTab from "../ChatSideBar";
import { MessageCircleMore, Phone, Plus, Send } from "lucide-react";
import ReplyChatTab from "@/components/marketing-screens/ReplyChatTab";

export default function GroupSideBar() {
  const [expanded, setExpanded] = useState(null);
  const [group, setGroup] = useState(null);
  const [message, setMessage] = useState(null);

  const handleExpand = (buttonType: any) => {
    setExpanded(buttonType === expanded ? null : buttonType);
  };
  const handleGroup = (buttonType: any) => {
    setGroup(buttonType === expanded ? null : buttonType);
  };
  const handleSetMessage = (buttonType: any) => {
    setMessage(buttonType === expanded ? null : buttonType);
  };
  return (
    <>
      <div className="p-4">
        <div className="space-y-2">
          <div className="bg-[#E0E0E0] rounded-xl">
            <Button
              className="px-4 py-2 justify-start font-semibold bg-[#631363] w-full text-white rounded-xl"
              onClick={() => handleExpand("view")}>
              View
            </Button>
            {expanded === "view" && (
              <div className="flex items-center border rounded-xl  justify-center p-4 h-28">
                <Button className="px-4 py-2 bg-[#40F440] font-semibold rounded-xl text-black">
                  Open in CRM
                </Button>
              </div>
            )}
          </div>
          <div className="bg-[#E0E0E0] rounded-xl">
            <Button
              className="px-4 py-2 justify-start font-semibold bg-[#631363] w-full text-white rounded-xl"
              onClick={() => handleExpand("assign")}>
              Assign
            </Button>
            {expanded === "assign" && (
              <div className="flex flex-col space-y-2 mx-6 ">
                <Button className="justify-between text-[#6D6D6D] py-1 bg-[#F4F4F4]  mt-2 font-semibold rounded-xl ">
                  <div>ex. Marketing</div>
                  <Button className="rounded-xl bg-[#631363] h-6 w-14 font-semibold text-xs text-white">
                    {" "}
                    <Plus strokeWidth={5} size={18} />
                    All
                  </Button>
                </Button>
                <Button className=" justify-between text-[#6D6D6D] py-1 bg-[#F4F4F4]    font-semibold rounded-xl ">
                  <div> ex. Sales</div>
                  <Button className="rounded-xl bg-[#40F440] h-6 w-14 font-semibold text-xs text-black">
                    {" "}
                    <Plus strokeWidth={5} size={18} />
                    All
                  </Button>
                </Button>
                <Button className=" justify-between text-[#6D6D6D] py-1 bg-[#F4F4F4]    font-semibold rounded-xl ">
                  <div> ex. Service</div>
                  <Button className="rounded-xl bg-[#631363] h-6 w-14 font-semibold text-xs text-white">
                    {" "}
                    <Plus strokeWidth={5} size={18} />
                    All
                  </Button>
                </Button>
                <div className="w-full bg-[#F4F4F4] rounded-xl">
                  <Button
                    className=" justify-between text-[#6D6D6D] py-1 bg-[#F4F4F4]   font-semibold rounded-xl w-full"
                    onClick={() => handleGroup("installation")}>
                    <div> ex. Installations</div>
                    <Button className="rounded-xl bg-[#631363] h-6 w-14 font-semibold text-xs text-white">
                      {" "}
                      <Plus strokeWidth={5} size={18} />
                      All
                    </Button>
                  </Button>
                  {group === "installation" && <GroupTab />}
                </div>
                <hr />
              </div>
            )}
          </div>
          <div className="bg-[#E0E0E0] rounded-xl">
            <Button
              onClick={() => handleExpand("reply")}
              className="px-4 py-2 justify-start font-semibold bg-[#631363] w-full text-white rounded-xl">
              Reply
            </Button>
            {expanded === "reply" && (
              <div className="flex rounded-3xl -mt-14 z-10 min-h-[160px] w-[400px] justify-start ml-5     bg-[#E0E0E0] py-3">
                <div className="py-16 ml-4">
                  {" "}
                  <ReplyChatTab />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Image
        height={0}
        width={0}
        priority={true}
        style={{
          width: "100%",
          height: "auto",
          position: "fixed",
          bottom: "0px",
        }}
        className="flex md:hidden"
        alt="screen"
        src={Screen}
      />
    </>
  );
}
