import {
  addCampaign,
  Campaign,
} from "@/lib/features/FacebookAds/CampaignSlice";
// import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { useState } from "react";
interface Option {
  value: string;
  label: string;
}

export interface FaceBookAdProps {
  handleNextStep: () => void;
  handlePrevStep?: () => void;
}
export function useCreateNewCampaignHooks() {
  const dispatch = useAppDispatch();
  const statusOptions: Option[] = [
    { value: "option1", label: "Active" },
    { value: "option2", label: "Archived" },
    { value: "option3", label: "Deleted" },
    { value: "option4", label: "Paused" },
  ];

  const buildingTypeOptions: Option[] = [
    { value: "option1", label: "Auction" },
    { value: "option2", label: "Reservation" },
  ];

  const objectiveOptions: Option[] = [
    { value: "option1", label: "Awareness" },
    { value: "option2", label: "Engagement" },
    { value: "option3", label: "Leads" },
    { value: "option4", label: "Sales" },
  ];

  // State variables to store selected values
  const [selectedObjective, setSelectedObjective] = useState<Option | null>(
    null
  );
  const [selectedStatus, setSelectedStatus] = useState<Option | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Option | null>(null);
  const [selectedBuyingType, setSelectedBuyingType] = useState<Option | null>(
    null
  );
  const [campaignName, setCampaignName] = useState("");
  // State to track if the form has been successfully submitted
  const [submitted, setSubmitted] = useState(false);
  // Function to log selected values when "Create Campaign" button is clicked
  const FbCampaign: Campaign = {
    campaignName,
    campaignObjective: selectedObjective ? selectedObjective.label : "",
    campaignStatus: selectedStatus ? selectedStatus.label : "",
    campaignCategory: selectedCategory ? selectedCategory.label : "",
    campaignBuyingType: selectedBuyingType ? selectedBuyingType.label : "",
  };

  const { campaign } = useAppSelector((state) => state.Fbcampaign);
  console.log("campaign", campaign);
  const handleCreateCampaign = () => {
    dispatch(addCampaign(FbCampaign));
    setSubmitted(true);
    setCampaignName(""); // Mark the form as submitted
    setTimeout(() => setSubmitted(false), 0);
  };

  return {
    statusOptions,
    buildingTypeOptions,
    objectiveOptions,
    setSelectedObjective,
    setSelectedStatus,
    setSelectedCategory,
    setSelectedBuyingType,
    campaignName,
    setCampaignName,
    submitted,
    handleCreateCampaign,
  };
}
