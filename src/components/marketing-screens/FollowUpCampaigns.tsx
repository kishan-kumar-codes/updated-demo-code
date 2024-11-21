import React from "react";
import FollowUpCard from "./FollowUpCard";

/**
 * FollowUpCampaigns Component
 *
 * This component renders a list of `FollowUpCard` components, each representing a different follow-up campaign.
 *
 * @returns {JSX.Element} The rendered FollowUpCampaigns component.
 */
const FollowUpCampaigns: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 mt-5 ">
      <FollowUpCard
        title="Facebook Lead"
        headTitle1="Name"
        headTitle2="Total Enrolled"
        headTitle3="Active"
        headTitle4="Completed"
        headTitle5="Replied"
        headTitle6="Reply%"
        headTitle7="Status"
        message="122"
        impressions="12"
        reply="10"
        clicks="10"
        status="published"
        conversions="56"
      />
      <FollowUpCard
        title="Facebook Lead"
        headTitle1="Name"
        headTitle2="Total Enrolled"
        headTitle3="Active"
        headTitle4="Completed"
        headTitle5="Replied"
        headTitle6="Reply%"
        headTitle7="Status"
        message="122"
        impressions="12"
        reply="10"
        clicks="10"
        status="published"
        conversions="56"
      />
      <FollowUpCard
        title="Facebook Lead"
        headTitle1="Name"
        headTitle2="Total Enrolled"
        headTitle3="Active"
        headTitle4="Completed"
        headTitle5="Replied"
        headTitle6="Reply%"
        headTitle7="Status"
        message="122"
        impressions="12"
        reply="10"
        clicks="10"
        status="published"
        conversions="56"
      />
      <FollowUpCard
        title="Facebook Lead"
        headTitle1="Name"
        headTitle2="Total Enrolled"
        headTitle3="Active"
        headTitle4="Completed"
        headTitle5="Replied"
        headTitle6="Reply%"
        headTitle7="Status"
        message="122"
        impressions="12"
        reply="10"
        clicks="10"
        status="published"
        conversions="56"
      />
    </div>
  );
};

export default FollowUpCampaigns;
