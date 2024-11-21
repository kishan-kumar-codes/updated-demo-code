import React from "react";
// import { HeaderBarMobile } from "../citations-builder/HeadBar";
import CampaignSubscriberCard from "./CampaignSubscriberCard";
import HeadBar from "../citations-builder/HeadBar";

const CampaignAndContentAttributes = () => {
  return (
    <div className="flex w-full gap-3 flex-col ">
      <HeadBar title="Campaign And Content Attributes" />
      <div className="flex rounded-3xl -mt-10 z-10 min-h-[160px] justify-start px-5  w-full bg-[#E0E0E0] py-3">
        <div className="flex flex-col w-full gap-2 pt-10">
          <CampaignSubscriberCard title={"Subscriber Opt-in"} />
          <CampaignSubscriberCard title={"Subscriber Help"} />
          <CampaignSubscriberCard title={"Number Pooling"} />
          <CampaignSubscriberCard title={"Age-Gated Content"} />
          <CampaignSubscriberCard title={"Embedded Link"} />
          <CampaignSubscriberCard title={"Embedded Phone"} />
        </div>
      </div>
    </div>
  );
};

export default CampaignAndContentAttributes;
