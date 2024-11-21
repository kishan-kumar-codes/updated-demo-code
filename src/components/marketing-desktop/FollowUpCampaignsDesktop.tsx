import React from 'react';
import FollowUpDesktopCard from './FollowUpDesktopCard';

/**
 * FollowUpCampaignsDesktop component
 * 
 * This component renders a list of FollowUpDesktopCard components, each representing
 * a follow-up campaign with various statistics.
 * 
 * @returns {JSX.Element} The rendered FollowUpCampaignsDesktop component.
 */
const FollowUpCampaignsDesktop: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 h-[900px] overflow-y-auto mt-5 m-9">
      <FollowUpDesktopCard
        title="Facebook Lead"
        headTitle1="Name"
        headTitle5="Replied"
        headTitle6="Reply%"
        headTitle7="Status"
        message="122"
        impressions="12"
        reply="10"
        clicks="10"
        status="published"
        conversions="56"
        headTitle2="Total Enrolled"
        headTitle3="Active"
        headTitle4="Completed"
      />
      <FollowUpDesktopCard
        title="Facebook Lead"
        headTitle1="Name"
        headTitle5="Replied"
        headTitle6="Reply%"
        headTitle7="Status"
        message="122"
        impressions="12"
        reply="10"
        clicks="10"
        status="published"
        conversions="56"
        headTitle2="Total Enrolled"
        headTitle3="Active"
        headTitle4="Completed"
      />
      <FollowUpDesktopCard
        title="Facebook Lead"
        headTitle1="Name"
        headTitle5="Replied"
        headTitle6="Reply%"
        headTitle7="Status"
        message="122"
        impressions="12"
        reply="10"
        clicks="10"
        status="published"
        conversions="56"
        headTitle2="Total Enrolled"
        headTitle3="Active"
        headTitle4="Completed"
      />
      <FollowUpDesktopCard
        title="Facebook Lead"
        headTitle1="Name"
        headTitle5="Replied"
        headTitle6="Reply%"
        headTitle7="Status"
        message="122"
        impressions="12"
        reply="10"
        clicks="10"
        status="published"
        conversions="56"
        headTitle2="Total Enrolled"
        headTitle3="Active"
        headTitle4="Completed"
      />
    </div>
  );
};

export default FollowUpCampaignsDesktop;
