"use client";
import React from "react";
import { cardArray } from "../marketing-screens/NewOpportunities";
import Card from "../marketing-screens/Card";
import MarketingCard from "./MarketingCard";
import MarketingHeaderBar from "./MarketingHeaderBar";

import MarketingHeaderTab from "./MaketingHeaderTab";
import MarketingAssignList from "./MarketingAssignList";
import ReplyChatTab from "../marketing-screens/ReplyChatTab";

/**
 * NewOpportunitiesDesktop component
 *
 * This component displays a list of marketing cards on the left and a dynamic content area on the right. The content area can show different sections based on the selected option.
 * 
 * It includes tabs for viewing, assigning tasks, and replying, each of which can be expanded or collapsed by clicking on their respective header bars.
 * 
 * @returns {JSX.Element} The rendered NewOpportunitiesDesktop component.
 */
const NewOpportunitiesDesktop = (): JSX.Element => {
  // State variables to manage the visibility of different sections
  const [view, setView] = React.useState(false);
  const [assign, setAssign] = React.useState(false);
  const [reply, setReply] = React.useState(false);
  const [marketing, setMarketing] = React.useState(false);
  const [sales, setSales] = React.useState(false);
  const [services, setServices] = React.useState(false);
  const [installation, setInstallation] = React.useState(false);

  /**
   * Toggles the view section visibility
   */
  const handleView = () => {
    setView(!view);
  };

  /**
   * Toggles the assign section visibility
   */
  const handleAssign = () => {
    setAssign(!assign);
  };

  /**
   * Toggles the reply section visibility
   */
  const handleReply = () => {
    setReply(!reply);
  };

  /**
   * Toggles the marketing section visibility
   */
  const handleMarketing = () => {
    setMarketing(!marketing);
  };

  /**
   * Toggles the sales section visibility
   */
  const handleSales = () => {
    setSales(!sales);
  };

  /**
   * Toggles the services section visibility
   */
  const handleServices = () => {
    setServices(!services);
  };

  /**
   * Toggles the installation section visibility
   */
  const handleInstallation = () => {
    setInstallation(!installation);
  };

  return (
    <div className="flex w-full my-2">
      {/* Left side: List of marketing cards */}
      <div className="w-full flex sm:w-[30%]">
        <div className="flex-col px-3 sm:px-10 justify-center items-center ml-16 py-9 h-[900px] overflow-x-hidden overflow-y-auto">
          {cardArray.map((card, index) => (
            <MarketingCard
              key={index}
              label={card.label}
              svglogo={card.svglogo}
              svgAction={card.svgAction}
              btnText={card.btnText}
              svgCall={card.svgCall}
            />
          ))}
        </div>
      </div>

      {/* Right side: Dynamic content based on selected section */}
      <div className="w-full gap-7 flex-col h-[900px] p-5 flex sm:w-[70%] overflow-y-auto">
        {/* View Section */}
        <MarketingHeaderBar title="View" handleClick={handleView} />
        {view && (
          <div className="flex rounded-3xl -mt-16 z-10 min-h-[160px] w-[90%] justify-start ml-5 bg-[#E0E0E0] py-3">
            <div className="flex-col my-4 gap-4 cursor-pointer pt-8 items-center w-full flex justify-center">
              <span className="bg-[#40F440] font-semibold text-black p-4 rounded-lg mt-5">
                Open In CRM
              </span>
            </div>
          </div>
        )}

        {/* Assign Section */}
        <MarketingHeaderBar title="Assign" handleClick={handleAssign} />
        {assign && (
          <div className="flex rounded-3xl -mt-16 z-10 w-[90%] justify-start ml-5 bg-[#E0E0E0] py-4">
            <div className="flex-col my-4 gap-4 cursor-pointer pt-8 items-start ml-5 w-full flex justify-center">
              <MarketingHeaderTab title="ex. Marketing" handleClick={handleMarketing} />
              {marketing && (
                <div className="flex flex-col rounded-3xl -mt-14 py-14 z-10 sm:min-h-[160px] w-[350px] justify-center ml-5 gap-3 items-start bg-[#F4F4F4] overflow-y-auto">
                  <MarketingAssignList label="Rebecca Riley" />
                  <MarketingAssignList label="Rebecca Riley" />
                  <MarketingAssignList label="Rebecca Riley" />
                  <MarketingAssignList label="Rebecca Riley" />
                </div>
              )}
              <MarketingHeaderTab title="ex. Sales" handleClick={handleSales} />
              {sales && (
                <div className="flex flex-col rounded-3xl -mt-14 py-14 z-10 sm:min-h-[160px] w-[350px] justify-center ml-5 gap-3 items-start bg-[#F4F4F4] overflow-y-auto">
                  <MarketingAssignList label="Rebecca Riley" />
                  <MarketingAssignList label="Rebecca Riley" />
                  <MarketingAssignList label="Rebecca Riley" />
                  <MarketingAssignList label="Rebecca Riley" />
                </div>
              )}
              <MarketingHeaderTab
                title="ex. Service"
                handleClick={handleServices}
              />
              {services && (
                <div className="flex flex-col rounded-3xl -mt-14 z-10 min-h-[160px] w-[350px] justify-start ml-5 gap-3 items-start bg-[#F4F4F4] py-14 overflow-y-auto">
                  <MarketingAssignList label="Rebecca Riley" />
                  <MarketingAssignList label="Rebecca Riley" />
                  <MarketingAssignList label="Rebecca Riley" />
                  <MarketingAssignList label="Rebecca Riley" />
                </div>
              )}
              <MarketingHeaderTab
                title="ex. Installation"
                handleClick={handleInstallation}
              />
              {installation && (
                <div className="flex flex-col rounded-3xl -mt-14 z-10 min-h-[160px] w-[350px] justify-start ml-5 gap-3 items-start bg-[#F4F4F4] py-14 overflow-y-auto">
                  <MarketingAssignList label="Rebecca Riley" />
                  <MarketingAssignList label="Rebecca Riley" />
                  <MarketingAssignList label="Rebecca Riley" />
                  <MarketingAssignList label="Rebecca Riley" />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Reply Section */}
        <MarketingHeaderBar title="Reply" handleClick={handleReply} />
        {reply && (
          <div className="flex rounded-3xl -mt-16 z-10 w-[90%] justify-start ml-5 bg-[#E0E0E0] py-3">
            <div className="py-16 ml-4">
              <ReplyChatTab />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewOpportunitiesDesktop;
