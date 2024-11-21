import React from 'react';
import { FBIcon } from '@/icons/marketing-screens/icons';
import DesktopCampainsCard from './DesktopCampainsCard';

/**
 * OrganicDesktopCampainsCardDesktop component
 *
 * This component displays a list of desktop campaign cards for organic campaigns. Each card represents a different campaign with various metrics.
 * 
 * @returns {JSX.Element} The rendered OrganicDesktopCampainsCardDesktop component.
 */
const OrganicDesktopCampainsCardDesktop = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-4 mt-5 m-9 h-[900px] overflow-y-auto">
      {/* Facebook Campaign Card */}
      <DesktopCampainsCard
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
      
      {/* Repeat for additional campaign cards */}
      <DesktopCampainsCard
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
      
      <DesktopCampainsCard
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

export default OrganicDesktopCampainsCardDesktop;
