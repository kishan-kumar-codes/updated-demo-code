import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { CustomTooltip } from "./CustomTooltip";


interface CampaignSubscriberCardProps {
    title: string;
}
const CampaignSubscriberCard = ({title}:CampaignSubscriberCardProps) => {
  return (
    <div className="w-full flex  items-center justify-between  py-3 bg-[#FFF] rounded-2xl ">
      <div className="flex items-center  gap-2 px-3">
        <span className="text-[#6D6D6D] [font-family:Arial] text-xs font-bold leading-[normal]">
          {title}
        </span>
        <CustomTooltip tooltipMessage="You have implemented  message reply providing customers on how they can contact the message sender after they reply with the *HELP* keyword." />
      </div>

      <div className="flex  gap-2">
        <RadioGroup  className="flex gap-3 mx-3">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="yes" />
            <Label htmlFor="yes">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" />
            <Label htmlFor="no">No</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default CampaignSubscriberCard;
