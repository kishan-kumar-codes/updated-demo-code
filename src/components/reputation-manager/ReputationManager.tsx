"use client";

import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { data } from "@/utils/data/reputation-manager";
import { Input } from "@/components/ui/input";
import FilterComponent from "./ReputaitonFilter";
import Image from "next/image";
import Screen from "@/assets/images/hubspark/BottomScreen.png";

import MobileHeader from "@/components/Header/Header-main";
import { Ratings } from "@/components/CustomComponents/Ratings";
import { Filter } from "lucide-react";
import { useState } from "react";

export default function ReputationManger() {
  const [filter, setFilter] = useState(false);
  return (
    <div className="relative">
      <FilterComponent filter={filter} setFilter={setFilter} />
      <div className="flex w-full justify-center">
        <div className="pb-2 w-full bg-[#F4F4F4] ">
          <MobileHeader headerTitle={"Reputation"} />
          <div className="flex w-full px-2">
            <div className="md:flex w-full relative my-4 px-2 md:px-1">
              <div className="absolute md:left-2 left-5 top-[5px]">
                <button>
                  <Search color="#BCBCBC" size={20} />
                </button>
              </div>
              <Input
                className="rounded-full border h-8 .placeholder:text-[#BCBCBC] pl-10"
                placeholder="Search Messages"
                type="search"
              />
            </div>
            <Button
              onClick={() => setFilter(true)}
              className="bg-[#631363] text-white text-center  w-20 my-4 rounded-md  h-8 md:w-32"
              variant="default">
              <Filter color="white" size={16} />
              Filter
            </Button>
          </div>
          <div className="flex justify-between px-8 h-10 w-full">
            <div className="bg-[#40F440] rounded-tl-2xl rounded-bl-2xl text-center items-center flex justify-center w-full  font-normal">
              Reviews
            </div>
            <div className="w-full  rounded-tr-2xl rounded-br-2xl text-center items-center flex justify-center text-[#3D3D3D] font-normal">
              Need Reply
            </div>
          </div>
          <div className="px-4 flex gap-4 flex-col pt-5">
            {data.map((item, index) => (
              <div className="bg-[#E0E0E0] rounded-2xl px-4" key={index}>
                <div className="flex justify-between items-center py-2">
                  <Image
                    priority={true}
                    className="flex"
                    width={35}
                    objectFit="cover"
                    height={30}
                    alt="screen"
                    src={item.logo}
                  />
                  <Ratings
                    rating={item.rating}
                    variant="yellow"
                    totalStars={5}
                  />
                  <Button
                    variant="outline"
                    className="bg-[#631363] text-white w-20 rounded-2xl pb-3 h-8 md:w-32">
                    {" "}
                    Respond{" "}
                  </Button>
                </div>
                <div className="text-[#6D6D6D] font-bold">{item.name}</div>
                <div className="text-[#6D6D6D] text-sm font-normal">
                  {item.desc}
                </div>
                <div className="bg-[#606060] h-[1px] my-4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Image
        height={0}
        width={0}
        style={{ width: "100%", height: "auto" }}
        priority={true}
        className="flex md:hidden"
        alt="screen"
        src={Screen}
      />
    </div>
  );
}
