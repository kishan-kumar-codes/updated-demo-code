import React from "react";
import Header from "../Reputation-mobile/Header";
import GeneralCard from "./GeneralCard";
import {
  GerneralBillingSvgs,
  GerneralInfoSvgs,
  GerneralTeamSvgs,
  GerneralUserSvgs,
} from "@/svgs/General-Settings-Mobile/svgs";

const GeneralSettingsMobile = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex flex-col w-full  justify-center items-center h-full">
        <div className="flex flex-col gap-7 justify-center items-center w-full">
          <Header title={"General Settings"} displayName=" General Settings" />
          <div className="flex flex-col   w-[90%] h-full">
            <div className="flex flex-col w-full  items-center gap-2 min-h-[490px] h-full">
              <div className="flex w-[85%] gap-2 flex-col ">
                <span className="text-[#6D6D6D] text-xl font-bold leading-normal">
                  Account
                </span>
                <span className="text-[#6d6d6d] pl-4 font-bold text-[10px] leading-[normal]">
                  Manage your account including users, employees, support and
                  more!
                </span>
                <div className="grid grid-cols-2 gap-4 w-full">
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
        <div className="flex w-full justify-center mt-10 items-center bg-[#40F440] h-[55px] rounded-t-3xl"></div>
      </div>
    </div>
  );
};

export default GeneralSettingsMobile;
