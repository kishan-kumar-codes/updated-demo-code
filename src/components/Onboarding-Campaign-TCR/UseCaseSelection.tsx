import React from "react";
import AutoCompleteCard from "./AutoCompleteCard";
import { CustomTooltip } from "./CustomTooltip";
import { OnboardingQuestionMarkSvgs } from "@/svgs/Onboarding-Campaign-TCR/svgs";
import UseCaseDetailContainer from "./UseCaseDetailContainer";
import SpecialCampaign from "./SpecialCampaign";
import StandardCampaign from "./StandardCampaign";
import SubmitAndCancelButton from "./SubmitAndCancelButton";
const options = ["BrandName1", "BrandName2", "BrandName3", "BrandName4"];

const UseCaseSelection = ({open , setOpen}:any) => {
  const [specialCampaignType, setSpecialCampaignType] = React.useState(false);
  const [standardCampaignType, setStandardCampaignType] = React.useState(false);
  return (
    <div className="flex w-full gap-3 flex-col ">
      <div className="flex rounded-3xl mt-5 z-10 min-h-[160px] justify-start px-5  w-full  py-3">
        <div className="flex flex-col w-full gap-2">
          <div className="flex w-full gap-3">
            <div className="flex flex-col w-full gap-4">
              <div className="flex w-full relative flex-col -mt-6">
                <div
                  className={`flex w-full items-center justify-end   cursor-pointer `}
                  onClick={() => setOpen(!open)}>
                  <OnboardingQuestionMarkSvgs />
                </div>

                {open && <UseCaseDetailContainer setOpen={setOpen} isSpecialAndStandardCampaignOpen={(specialCampaignType || standardCampaignType)} />}
              </div>

              <div className="space-y-1">
                <span className="text-[#6D6D6D] flex gap-2 mt-3 text-xs font-bold leading-normal pl-2">
                  Brand Name{" "}
                  <CustomTooltip tooltipMessage="Brand/Marketing/DBA name of the business." />
                </span>
                <AutoCompleteCard options={options} />
              </div>
              <span className="text-[#6D6D6D] flex gap-2  text-xs font-bold leading-normal pl-2">
                Select a Use Case
              </span>
              <StandardCampaign  standardCampaignType={standardCampaignType} setStandardCampaignType={setStandardCampaignType} />
              <SpecialCampaign specialCampaignType={specialCampaignType} setSpecialCampaignType={setSpecialCampaignType}/>
             { (specialCampaignType || standardCampaignType) && <SubmitAndCancelButton/>}
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCaseSelection;
