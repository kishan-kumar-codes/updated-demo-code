import React from "react";
import WEbChatCard from "./WEbChatCard";

const ProfileQA = () => {
  return (
    <div className="w-full gap-3 grid grid-cols-2 py-1">
      <WEbChatCard
        title={"Business Hours"}
        content={"We are currently closed.Our regular business hours are:"}>
        <div className="text-[#631363] flex  items-center w-full text-[10px] md:text-sm lg:text-base lg:font-normal leading-normal">
          Mon - Sat:
          <p className="pl-1 lg:font-normal text-[#6D6D6D] text-[10px] md:text-sm  lg:text-base ">
            8:30 am - 5 pm
          </p>
        </div>
        <div className="text-[#631363] lg:font-normal md:text-sm font-semibold flex items-center w-full text-[10px] lg:text-base leading-normal">
          Sun:
          <p className="font-semibold lg:font-normal pl-1 md:text-sm lg:text-base  text-[#6D6D6D] text-[10px]">
            10 am - 2 pm
          </p>
        </div>
      </WEbChatCard>
      <WEbChatCard title={"Location"} content={"We're located at:"}>
        <span className="text-[#6D6D6D] font-bold lg:font-normal md:text-sm  flex items-center w-full text-xs lg:text-lg leading-4 lg:leading-6">
          5 Estate Dr A <br />
          Bluffton, SC 29910
        </span>
        <span className="text-[#631363] lg:font-normal font-bold flex items-center w-full md:text-xs text-[10px] lg:text-base leading-normal">
          Get directions
        </span>
      </WEbChatCard>
      <WEbChatCard title={"Services"} content={"We offer these services:"}>
        <span className="text-[#6D6D6D] font-bold lg:font-normal md:text-sm flex items-center w-full text-xs lg:text-lg leading-4 lg:leading-6">
          Self Storage Services, <br />
          Moving & Storage <br />
          Services, Personal <br />
          Storage, Business
        </span>
        <span className="text-[#631363] lg:font-normal font-bold flex items-center w-full text-sm leading-normal lg:text-base">
          See All
        </span>
      </WEbChatCard>
      <WEbChatCard
        title={"Payment Options"}
        content={"We accept the following:"}>
        <span className="text-[#6D6D6D] lg:font-normal md:text-sm  lg:text-lg  font-bold flex items-center w-full text-xs leading-4 lg:leading-6">
          We accept all major <br />
          credit cards.
        </span>
      </WEbChatCard>
      <WEbChatCard
        title={"Languages"}
        content={" Thanks for asking. We speak English only"}></WEbChatCard>
      <WEbChatCard
        title={"Contact Details"}
        content={"We are currently closed."}></WEbChatCard>
    </div>
  );
};

export default ProfileQA;
