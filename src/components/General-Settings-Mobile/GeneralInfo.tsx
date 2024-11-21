import React from "react";
import Header from "../Reputation-mobile/Header";
import GeneralSubInformation from "./GeneralSubInformation";
import GeneralBusinessPhysicalAddress from "./GeneralBusinessPhysicalAddress";
import GereralAuthorizedRepresentative from "./GereralAuthorizedRepresentative";
import GeneralContactSearchPreferences from "./GeneralContactSearchPreferences";
import GeneralMissedCallTextBack from "./GeneralMissedCallTextBack";
import CitationNavbar from "../review-dashboard-mobile/ReviewNavbar";

const GeneralInfo = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex flex-col w-full  justify-center items-center  h-full">
        <div className="flex flex-col gap-7 justify-center items-center w-full">
          {/* <Header title={"General Settings"} displayName=" General Settings" /> */}
          <CitationNavbar heading="General Settings" isHeaderVisible={false} />
          <div className="flex flex-col   w-[90%] h-full">
            <div className="flex flex-col w-full  items-center gap-4 min-h-[490px] h-full">
              <GeneralSubInformation />
              <GeneralBusinessPhysicalAddress />
              <GereralAuthorizedRepresentative />
              <GeneralContactSearchPreferences />
              <GeneralMissedCallTextBack />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center mt-10 items-center bg-[#40F440] h-[55px] rounded-t-3xl"></div>
      </div>
    </div>
  );
};

export default GeneralInfo;
