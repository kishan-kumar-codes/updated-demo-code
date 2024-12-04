import TabNavigation from "../components/tabNavigation";
import React, { useEffect, useState } from "react";
import Layout from "../layout/page";
import Check from "../../../../assets/images/D-check.svg";
import ArrowDown from "../../../../assets/images/D-down-arrow-white.svg";
import Image from "next/image";

import CustomInput from "../components/customInput";
import CustomSelect from "../components/customSelect";

function Invoice() {
  const [showAction, setShowAction] = useState(false);
  const [accessType, setAccessType] = useState("");

  const handleSelect = () => {};

  const tabData = [
    {
      tabName: "Payment",
      tabUrl: "/Payment/insights",
    },
    {
      tabName: "Invoice ID#",
      tabUrl: "/Payment/quickInvoice",
    },
    {
      tabName: `Quick Invoice`,
      tabUrl: "/Payment/quickInvoice",
    },
    {
      tabName: `Virtual Terminal`,
      tabUrl: "/Payment/virtualTerminal/terminal",
    },
    {
      tabName: `Keyed Credit Card`,
      tabUrl: "/Payment/keyCreditCard",
    },
  ];

  return (
    <Layout
      // hHeading="Payments"
      Childrens={
        <div className="px-[15px] pt-[18px] pb-[127px] flex-1 flex lg:container mx-auto flex-col h-full bg-cultured ">
          <TabNavigation tabData={tabData} />

          <div className="h-[342px] bg-chinesWhite w-full mt-[54px] pb-[37px] shadow">
            <div className="w-full bg-palatinatePurple text-[26px] font-bold text-white py-[18px] pl-[32px] rounded-lg ">
              Details
            </div>

            <div className="grid grid-cols-2 gap-72 px-[35px] mt-[56px]">
              <div>
                <label
                  htmlFor="invtitle"
                  className="text-[20px] font-bold text-darkSilverColor">
                  Location*
                </label>

                <div className="w-full h-[56px]  rounded-lg px-2 bg-[#F4F4F4]">
                  <select
                    className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                    id="location"
                    name=""
                    disabled={accessType === "view"}
                    onChange={() => handleSelect()}>
                    <option value=""></option>
                  </select>
                </div>
              </div>

              <div className="">
                <label
                  htmlFor="invtitle"
                  className="text-[20px] font-bold text-darkSilverColor">
                  Invoice Title*
                </label>
                <div className={`w-full h-[56px] rounded-lg px-2 bg-[#F4F4F4]`}>
                  <CustomInput
                    disabled={accessType === "view"}
                    value={""}
                    model="title"
                    onChange={""}
                    className={`w-full text-[12px] bg-[#F4F4F4] h-full outline-none `}
                    id="invtitle"
                    placeholder=""
                    type=""
                    readOnly={accessType === "view"}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-72 px-[35px] mt-[12px]">
              <div>
                <label
                  htmlFor="invtitle"
                  className="text-[20px] font-bold text-darkSilverColor">
                  Due Date*
                </label>

                <div className={`w-full h-[56px] rounded-lg px-2 bg-[#F4F4F4]`}>
                  <CustomInput
                    disabled={accessType === "view"}
                    value={""}
                    model="title"
                    onChange={""}
                    className={`w-full text-[12px] bg-[#F4F4F4] h-full outline-none `}
                    id="invtitle"
                    placeholder=""
                    type=""
                    readOnly={accessType === "view"}
                  />
                </div>
              </div>

              <div className="">
                <label
                  htmlFor="invtitle"
                  className="text-[20px] font-bold text-darkSilverColor">
                  Expire Date
                </label>
                <div className={`w-full h-[56px] rounded-lg px-2 bg-[#F4F4F4]`}>
                  <CustomInput
                    disabled={accessType === "view"}
                    value={""}
                    model="title"
                    onChange={""}
                    className={`w-full text-[12px] bg-[#F4F4F4] h-full outline-none `}
                    id="invtitle"
                    placeholder=""
                    type=""
                    readOnly={accessType === "view"}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="h-[342px] bg-chinesWhite w-full mt-[54px] pb-[37px] shadow">
            <div className="w-full bg-palatinatePurple text-[26px] font-bold text-white py-[18px] pl-[32px] rounded-lg ">
              Item List*
            </div>

            <div className="flex mt-[38px] items-end">
              <div className="flex px-[31px]">
                <div className="mr-[10px]">
                  <label
                    htmlFor="invtitle"
                    className="text-[20px] font-bold text-darkSilverColor">
                    Location*
                  </label>

                  <div className="w-[428px] h-[56px]  rounded-lg px-2 bg-[#F4F4F4]">
                    <select
                      className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                      id="location"
                      name=""
                      disabled={accessType === "view"}
                      onChange={() => handleSelect()}>
                      <option value=""></option>
                    </select>
                  </div>
                </div>
                <div className="mr-[10px]">
                  <label
                    htmlFor="invtitle"
                    className="text-[20px] font-bold text-darkSilverColor">
                    Location*
                  </label>

                  <div className="w-full h-[56px]  rounded-lg px-2 bg-[#F4F4F4]">
                    <select
                      className="w-[74px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                      id="location"
                      name=""
                      disabled={accessType === "view"}
                      onChange={() => handleSelect()}>
                      <option value=""></option>
                    </select>
                  </div>
                </div>

                <div className="">
                  <label
                    htmlFor="invtitle"
                    className="text-[20px] font-bold text-darkSilverColor">
                    Expire Date
                  </label>
                  <div
                    className={`w-[117px] h-[56px] rounded-lg px-2 bg-[#F4F4F4]`}>
                    <CustomInput
                      disabled={accessType === "view"}
                      value={""}
                      model="title"
                      onChange={""}
                      className={`w-full text-[12px] bg-[#F4F4F4] h-full outline-none `}
                      id="invtitle"
                      placeholder=""
                      type=""
                      readOnly={accessType === "view"}
                    />
                  </div>
                </div>
              </div>

              <div className="flex px-[31px]">
                <button className="text-[24px] px-[25px] h-[70px] text-cultured bg-palatinatePurple font-bold rounded-lg">
                  + Add Discount
                </button>
                <button className="ml-[19px] text-[24px] px-[25px] h-[70px] text-btnBlack bg-limeGreen font-bold rounded-lg">
                  + Add Item
                </button>
              </div>
            </div>

            <div>
              <table className="w-[929px]">
                <thead>
                  <tr className="text-left">
                    <th className="text-[20px] text-darkSilverColor font-bold">
                      Item{" "}
                    </th>
                    <th className="text-[20px] text-darkSilverColor font-bold">
                      {" "}
                      Amount (USD)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-left">
                    <td>Item 1 X1</td>
                    <td>$40.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      }
    />
  );
}

export default Invoice;
