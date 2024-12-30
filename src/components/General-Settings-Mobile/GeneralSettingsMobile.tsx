import React from "react";
import Header from "../Reputation-mobile/Header";
import GeneralCard from "./GeneralCard";
import {
  GerneralBillingSvgs,
  GerneralInfoSvgs,
  GerneralTeamSvgs,
  GerneralUserSvgs,
} from "@/svgs/General-Settings-Mobile/svgs";
import CitationNavbar from "../review-dashboard-mobile/ReviewNavbar";

const GeneralSettingsMobile = () => {
  return (
    <>
      <div className="flex flex-col justify-center bg-[#F4F4F4] items-center w-full">
        {/* <Header title={"General Settings"} displayName=" General Settings" /> */}
        <div className="flex flex-col   w-[90%] h-full">
          <div className="flex flex-col w-full  items-center gap-2  min-h-[490px] h-full">
            <div className="flex w-[85%] lg:w-full gap-2 lg:gap-0 flex-col ">
              <span className="hidden md:flex text-[#631363] text-xl lg:text-[24px] pt-0 md:pt-6 lg:pt-12 font-bold leading-normal">
                General Settings
              </span>
              <span className="md:hidden text-[#6D6D6D] text-xl mt-[18px] font-bold leading-normal">
                Account
              </span>
              <span className="text-[#6d6d6d] font-bold lg:font-normal pl-3 md:pl-0 md:mt-3 text-[10px] lg:text-[22px] leading-[normal]">
                Manage your account including users, employees, support and
                more!
              </span>
              <div className="mt-[19px] md:mt-[27px] grid grid-cols-2 lg:grid-cols-4 lg:bg-[#E0E0E0] lg:py-[13%] rounded-lg lg:px-[13%] gap-x-7 gap-y-7 lg:gap-x-[41px] w-full lg:h-[646px] md:rounded-3xl ">
                <GeneralCard
                  href="/General-Settings-Mobile/general-info"
                  logoSvg={<GerneralInfoSvgs />}
                  title={"General Info"}
                />{" "}
                <GeneralCard
                  logoSvg={<GerneralUserSvgs />}
                  title={"Users"}
                  href="/General-Settings-Mobile/users"
                />
                <GeneralCard
                  logoSvg={<GerneralTeamSvgs />}
                  title={"Teams"}
                  href="/General-Settings-Mobile/teams"
                />{" "}
                <GeneralCard
                  logoSvg={<GerneralBillingSvgs />}
                  title={"Billing"}
                  href="/General-Settings-Mobile/billings"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center mt-10 items-center bg-[#40F440] h-[46px] lg:hidden rounded-t-3xl"></div>
    </>
  );
};

export default GeneralSettingsMobile;
