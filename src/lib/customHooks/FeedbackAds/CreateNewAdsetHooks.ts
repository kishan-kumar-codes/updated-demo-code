import { Country } from "@/components/Reputation-mobile/CountryDisplayName";

import { adAdset, AdSetDetails } from "@/lib/features/FacebookAds/AdsetSlice";
// import { useAppDispatch } from "@/lib/hooks";
import { useAppDispatch } from "@/hooks/hooks";
import { format } from "date-fns";
import React, { useState } from "react";
interface Option {
  value: string;
  label: string;
}
export function useCreateNewAdsetHooks() {
  const dispatch = useAppDispatch();
  const [adSetStartDate, setAdSetStartDate] = React.useState<Date>();
  const [adSetEndDate, setAdSetEndDate] = React.useState<Date>();
  const [adSetCampaignName, setAdSetCampaignName] = useState<Option | null>(
    null
  );
  const [adSetoptimizationGoal, setAdsetOptimizationGoal] =
    useState<Option | null>(null);
  const [adSetStatus, setAdsetStatus] = useState<Option | null>(null);
  const [adSetCategory, setAdsetCategory] = useState<Option | null>(null);
  const [adSetBillingEvents, setAdsetBillingEvents] = useState<Option | null>(
    null
  );
  const [adSetPublish, setAdsetPublish] = useState<Option | null>(null);
  const [adSetAgeFrom, setAdsetAgeFrom] = useState<Option | null>(null);
  const [adSetAgeTo, setAdsetAgeTo] = useState<Option | null>(null);
  const [adSetGender, setAdsetGender] = useState<string>("");
  const [adSetName, setAdsetName] = useState<string>("");
  const [adSetBidAmount, setAdsetBidAmount] = useState<string>();
  const [adSetDailyBudget, setAdsetDailyBudget] = useState<string>();
  const [adSetCountry, setAdsetCountry] = useState<Country | null>(null);
  const [adSetSubmit, setAdsetSubmit] = useState(false);
  const [isShowAdsetData, setIsShowAdsetData] = useState(true);
  const handleCountrySelect = (country: Country) => {
    setAdsetCountry(country);
    console.log("Selected Country:", country); // Log the selected country
  };
  const handleRadioButtonSelect = (value: string) => {
    setAdsetGender(value);
    console.log(`Selected site: ${value}`);
  };

  const status = [
    { value: "option1", label: "Active" },
    { value: "option2", label: "Archived" },
    { value: "option3", label: "Deleted" },
    { value: "option4", label: "Paused" },
  ];

  const optimizationGoal = [
    { value: "option1", label: "None" },
    { value: "option2", label: "App Installs" },
    { value: "option3", label: "Ad Recall Lift" },
    { value: "option4", label: "Engaged Users" },
    { value: "option5", label: "Event Responses" },
    { value: "option6", label: "Impressions" },
    { value: "option7", label: "Lead Generation" },
    { value: "option8", label: "Quality Lead" },
    { value: "option9", label: "Link Clicks" },
    { value: "option10", label: "Post Engagement" },
    { value: "option11", label: "Quality Call" },
    { value: "option12", label: "Reach" },
    { value: "option13", label: "Landing Page Views" },
    { value: "option14", label: "Visit Instagram Profile" },
    { value: "option15", label: "Value" },
    { value: "option16", label: "Thruplay" },
    { value: "option17", label: "Conversations" },
    { value: "option18", label: "In App Value" },
    { value: "option19", label: "Messaging Purchase Conversion" },
    { value: "option20", label: "Subscribers" },
  ];
  const category = [
    { value: "option1", label: "Website" },
    { value: "option2", label: "App" },
    { value: "option3", label: "Messenger" },
    { value: "option4", label: "Applinks Automatic" },
    { value: "option5", label: "Whatsapp" },
    { value: "option6", label: "Instagram Direct" },
    { value: "option7", label: "Facebook" },
    { value: "option8", label: "Messaging Messenger Whatsapp" },
    { value: "option9", label: "Messaging Instagram Direct Messenger" },
    { value: "option10", label: "Shop Automatic" },
    { value: "option11", label: "On Ad" },
    { value: "option12", label: "On Post" },
    { value: "option13", label: "On Event" },
    { value: "option14", label: "On Video" },
    { value: "option15", label: "On Page" },
    { value: "option16", label: "Instagram Profile" },
    { value: "option17", label: "Facebook Page" },
    { value: "option18", label: "Instagram Profile And Facebook Page" },
  ];
  const billing = [
    { value: "option1", label: "App Installs" },
    { value: "option2", label: "Clicks" },
    { value: "option3", label: "Impressions" },
    { value: "option4", label: "Link Clicks" },
    { value: "option5", label: "None" },
    { value: "option6", label: "Offer Claims" },
    { value: "option7", label: "Page Likes" },
    { value: "option8", label: "Post Engagement" },
    { value: "option9", label: "Thruplay" },
    { value: "option10", label: "Purchase" },
    { value: "option11", label: "Listing Interaction" },
  ];
  const objective = [
    { value: "option1", label: "Awareness" },
    { value: "option2", label: "Engagement" },
    { value: "option3", label: "Leads" },
    { value: "option4", label: "Sales" },
  ];
  const age = [
    { value: "option1", label: "18" },
    { value: "option2", label: "25" },
    { value: "option3", label: "45" },
    { value: "option4", label: "68" },
  ];
  const ageRange = [
    { value: "option1", label: "18+" },
    { value: "option2", label: "25+" },
    { value: "option3", label: "45+" },
    { value: "option4", label: "68+" },
  ];
  const publish = [
    { value: "option1", label: "Test Page" },
    { value: "option2", label: "HubSpark" },
  ];
  const adSetDetails: AdSetDetails = {
    adSetStartDate: format(adSetStartDate || new Date(), "PPP"),
    adSetEndDate: format(adSetEndDate || new Date(), "PPP"),
    adSetCampaignName: adSetCampaignName ? adSetCampaignName?.label : "",
    adSetoptimizationGoal: adSetoptimizationGoal
      ? adSetoptimizationGoal?.label
      : "",
    adSetStatus: adSetStatus ? adSetStatus?.label : "",
    adSetCategory: adSetCategory ? adSetCategory?.label : "",
    adSetBillingEvents: adSetBillingEvents ? adSetBillingEvents?.label : "",
    adSetPublish: adSetPublish ? adSetPublish?.label : "",
    adSetAgeFrom: adSetAgeFrom ? adSetAgeFrom?.label : "",
    adSetAgeTo: adSetAgeTo ? adSetAgeTo?.label : "",
    adSetGender,
    adSetName,
    adSetBidAmount: adSetBidAmount ? adSetBidAmount : "",
    adSetDailyBudget: adSetDailyBudget ? adSetDailyBudget : "",
    adSetCountry: adSetCountry ? adSetCountry?.Name : "",
  };

  const handleSubmitCreateAdSet = () => {
    dispatch(adAdset(adSetDetails));
    setAdsetSubmit(true);
    setIsShowAdsetData(false);
    setAdsetName("");
    setAdsetDailyBudget("");
    setAdsetBidAmount("");
    setTimeout(() => setAdsetSubmit(false), 0);
  };

  return {
    adSetStartDate,
    setAdSetStartDate,
    adSetEndDate,
    setAdSetEndDate,
    setAdSetCampaignName,
    setAdsetOptimizationGoal,
    setAdsetStatus,
    setAdsetCategory,
    setAdsetBillingEvents,
    setAdsetPublish,
    setAdsetAgeFrom,
    setAdsetAgeTo,
    adSetName,
    setAdsetName, adSetCountry,
    adSetBidAmount,
    setAdsetBidAmount,
    adSetDailyBudget,
    setAdsetDailyBudget,
    isShowAdsetData,
    optimizationGoal,
    objective,
    adSetSubmit,
    status,
    handleCountrySelect,
    handleRadioButtonSelect,
    category,
    billing,
    publish,
    age,
    ageRange,
    handleSubmitCreateAdSet,
  };
}
