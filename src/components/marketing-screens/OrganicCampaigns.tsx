import React from "react";
import Campaigns from "./Campaigns";
import { FBIcon } from "@/icons/marketing-screens/icons";

/**
 * OrganicCampaigns Component
 * 
 * This component renders a list of organic campaigns for different social media platforms. 
 * It utilizes the `Campaigns` component to display information related to each campaign.
 * 
 * @returns {JSX.Element} The rendered OrganicCampaigns component.
 */
const OrganicCampaigns: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 mt-5 m-9">
      <Campaigns
        title="Facebook"
        headTitle1="Name"
        headTitle5="Messages"
        message="122"
        headTitle6="Post"
        post="122"
        logoSvg={<FBIcon />}
        impressions="12"
        clicks="10"
        conversions="56"
        headTitle2="Likes"
        headTitle3="Comments"
        headTitle4="Shares"
      />
      <Campaigns
        title="Facebook"
        headTitle1="Name"
        headTitle5="Messages"
        message="122"
        headTitle6="Post"
        post="122"
        logoSvg={<FBIcon />}
        impressions="12"
        clicks="10"
        conversions="56"
        headTitle2="Likes"
        headTitle3="Comments"
        headTitle4="Shares"
      />
      <Campaigns
        title="Facebook"
        headTitle1="Name"
        headTitle5="Messages"
        message="122"
        headTitle6="Post"
        post="122"
        logoSvg={<FBIcon />}
        impressions="12"
        clicks="10"
        conversions="56"
        headTitle2="Likes"
        headTitle3="Comments"
        headTitle4="Shares"
      />
    </div>
  );
};

export default OrganicCampaigns;
