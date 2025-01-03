"use client";

import GeneralInfo from "@/components/General-Settings-Mobile/GeneralInfo";
import GeneralTeams from "@/components/General-Settings-Mobile/GeneralTeams";
import React, { useState } from "react";
import CitationNavbar from "@/components/review-dashboard-mobile/ReviewNavbar";
import CreateTeams from "@/components/General-Settings-Mobile/CreateTeam";

const Teams = () => {
  const [isTeamUser, setTeamUser] = useState(false);
  return (
    <div className="flex flex-col justify-center bg-[#F4F4F4] items-center w-full ">
      <CitationNavbar heading="General Settings" isHeaderVisible={false} />
      {isTeamUser ? (
        <GeneralTeams />
      ) : (
        <CreateTeams isTeamUser={isTeamUser} setTeamUser={setTeamUser} />
      )}
    </div>
  );
};

export default Teams;
