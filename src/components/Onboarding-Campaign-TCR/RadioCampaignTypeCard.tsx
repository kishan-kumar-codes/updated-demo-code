import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

export const standardListArray = [
  {
    title: "2FA",
    value: "$10.00",
    id: "2FA",
  },
  {
    title: "Account Notification",
    value: "$10.00",
    id: "Account Notification",
  },
  {
    title: "Delivery Notification",
    value: "$10.00",
    id: "Delivery Notification",
  },
  {
    title: "Customer Care",
    value: "$10.00",
    id: "Customer Care",
  },
  {
    title: "Higher Education",
    value: "$10.00",
    id: "Higher Education",
  },
  {
    title: "Low Volume Mixed",
    value: "$10.00",
    id: "Low Volume Mixed",
  },
];
interface RadioCampaignTypeCardProps {
  title: string;
  value: string;
  id: string;
}
export const RadioCampaignTypeCard = ({
  title,
  value,
  id,
}: RadioCampaignTypeCardProps) => {
  return (
    <div className="w-full flex items-center odd:bg-[#FFF] justify-between p-2">
      <RadioGroup>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={title} id={id} className="w-[13px] h-[13px]" />
          <Label
            htmlFor={id}
            className="text-[#6D6D6D] [font-family:Arial] text-xs font-bold leading-[normal]"
          >
            {title}
          </Label>
        </div>
      </RadioGroup>
      <span className="text-[#6D6D6D] [font-family:Arial] text-xs font-normal leading-[normal]">
        {value}
      </span>
    </div>
  );
};

export const RadioCampaignTypeCardList = () => {
  return (
    <div className="flex w-full flex-col gap-2">
      {standardListArray.map((item) => {
        return (
          <RadioCampaignTypeCard
            key={item.id}
            title={item.title}
            value={item.value}
            id={item.id}
          />
        );
      })}
    </div>
  );
};
