import React, { useEffect, useState } from "react";
import Layout from "../layout/page";
import TabNavigation from "../components/tabNavigation";
import CustomInput from "../components/customInput";
import CustomSelect from "../components/customSelect";
import ToggleSwitch from "../components/toggleSwitch";
import CreditCard from "../../../assets/images/P-credit-card.svg";
import Image from "next/image";
import TabNavigationMobile from "../components/tabNavigationMobile";

const Index = () => {
  const [showDiscountCard, setShowDiscountCord] = useState(false);
  const [locationOptions, setLocationOptions] = useState([]);

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
  const mobileTab = [
    {
      tabName: `Quick Invoice`,
      tabUrl: "quickInvoice",
    },
    {
      tabName: `Virtual Terminal`,
      tabUrl: "virtualTerminal/terminal",
    },
    {
      tabName: `Keyed Credit Card`,
      tabUrl: "keyCreditCard",
    },
  ];

  const [formData, setFormData] = useState({
    location_id: "",
    default_product_transaction_id: "",
  });
  const amountOptions = [
    "4S-Healthcare(Visa and MC Only)",
    "4U-Prescription/Rx(Visa and MC Only)",
    "4V-Vision/Optical(Visa Only)",
    "4W-clinic/other qualified medical(Visa Only)",
    "4X-Dental(Visa Only)",
  ];
  const accountOptions = [
    "Checking",
    "Credit",
    "Cash Benefit",
    "Snap",
    "Prepaid",
    "Savings",
    "Spending Power",
    "Universal",
  ];

  const setImage = (e: any, model: any) => {
    setFormData({
      ...formData,
      [model]: e.target.file,
    });
  };

  return (
    <Layout
      Childrens={
        <div className="px-[15px] pt-[18px] flex-1 flex flex-col h-full bg-cultured ">
          <div className="hidden md:block">
            <TabNavigation tabData={tabData} />
          </div>
          <div className="block md:hidden">
            <TabNavigationMobile tabsData={mobileTab} />
          </div>
          <div className="h-full overflow-y-auto">
            <div className="bg-chinesWhite rounded-lg mb-4">
              <div className="w-full  bg-palatinatePurple rounded-lg mt-[16px] text-white">
                <h5 className="md:text-[26px] text-[16px] font-bold  md:pl-[32px] pl-[16px] py-[10px]">
                  CC Sales Terminal
                </h5>
              </div>
              <div className=" px-[16px] py-[27px] ">
                <div className="md:grid grid-cols-3 gap-4">
                  <div className="">
                    <label
                      htmlFor="location"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Type
                    </label>
                    <div className="w-full md:h-[56px] h-[27px]  rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomSelect
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="location"
                        name=""
                        childrens={
                          <>
                            <option value="test"></option>
                          </>
                        }
                      />
                    </div>
                  </div>
                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="text-[1220pxpx] font-bold text-darkSilverColor">
                      Amount
                    </label>
                    <div className="flex items-center md:text-[20px] text-[12px] w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <span>$</span>
                      <CustomInput
                        disabled={false}
                        model={""}
                        value={""}
                        onChange={""}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type="number"
                        readOnly={false}
                      />
                    </div>
                  </div>
                  <div className="">
                    <label
                      htmlFor="location"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Account Type
                    </label>
                    <div className="w-full md:h-[56px] h-[27px]  rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomSelect
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="location"
                        name=""
                        childrens={
                          <>
                            <option value="test"></option>
                          </>
                        }
                      />
                    </div>
                  </div>
                  <div className="">
                    <label
                      htmlFor="location"
                      className="text-[12p20pxx] font-bold text-darkSilverColor">
                      Currency Code
                    </label>
                    <div className="w-full md:h-[56px] h-[27px]  rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomSelect
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="location"
                        name=""
                        childrens={
                          <>
                            <option value="test"></option>
                          </>
                        }
                      />
                    </div>
                  </div>
                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Postal Code
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={false}
                        model={""}
                        value={""}
                        onChange={""}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={false}
                      />
                    </div>
                  </div>
                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Street
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={false}
                        model={""}
                        value={""}
                        onChange={""}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={false}
                      />
                    </div>
                  </div>
                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      City
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={false}
                        model={""}
                        value={""}
                        onChange={""}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={false}
                      />
                    </div>
                  </div>
                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      State
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={false}
                        model={""}
                        value={""}
                        onChange={""}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={false}
                      />
                    </div>
                  </div>
                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Phone
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={false}
                        model={""}
                        value={""}
                        onChange={""}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={false}
                      />
                    </div>
                  </div>
                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Country
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={false}
                        model={""}
                        value={""}
                        onChange={""}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={false}
                      />
                    </div>
                  </div>
                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Checkin Date
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={false}
                        model={""}
                        value={""}
                        onChange={""}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type="date"
                        readOnly={false}
                      />
                    </div>
                  </div>
                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Checkout Date
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={false}
                        model={""}
                        value={""}
                        onChange={""}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type="date"
                        readOnly={false}
                      />
                    </div>
                  </div>

                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Clerk Number
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={false}
                        model={""}
                        value={""}
                        onChange={""}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={false}
                      />
                    </div>
                  </div>

                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Customer Id
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={false}
                        model={""}
                        value={""}
                        onChange={""}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={false}
                      />
                    </div>
                  </div>

                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Description
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={false}
                        model={""}
                        value={""}
                        onChange={""}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={false}
                      />
                    </div>
                  </div>
                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      IIS Index
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={false}
                        model={""}
                        value={""}
                        onChange={""}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type="number"
                        readOnly={false}
                      />
                    </div>
                  </div>
                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Image Front
                    </label>
                    <div className="relative flex items-center w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={false}
                        model={""}
                        value={""}
                        onChange={setImage}
                        className="opacity-0 z-10 w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type="file"
                        readOnly={false}
                      />
                      <button className="absolute left-2 bg-chinesWhite h-[70%]  md:text-[20px] text-[12px] rounded-lg px-2">
                        Choose Image
                      </button>
                    </div>
                  </div>
                  <div className="mt-[6px] ">
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Image Back
                    </label>
                    <div className="relative flex items-center w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={false}
                        model={""}
                        value={""}
                        onChange={setImage}
                        className="opacity-0 z-10 w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type="file"
                        readOnly={false}
                      />
                      <button className="absolute left-2 bg-chinesWhite h-[70%]  md:text-[20px] text-[12px] rounded-lg px-2">
                        Choose Image
                      </button>
                    </div>
                  </div>

                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Installment Number
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={false}
                        model={""}
                        value={""}
                        onChange={""}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type="number"
                        readOnly={false}
                      />
                    </div>
                  </div>
                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Installment Count
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={false}
                        model={""}
                        value={""}
                        onChange={""}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type="number"
                        readOnly={false}
                      />
                    </div>
                  </div>
                  <div className="">
                    <label
                      htmlFor="location"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Location
                    </label>
                    <div className="w-full md:h-[56px] h-[27px]  rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomSelect
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="location"
                        name=""
                        childrens={
                          <>
                            <option value="test"></option>
                          </>
                        }
                      />
                    </div>
                  </div>
                  <div className="">
                    <label
                      htmlFor="location"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Product Transaction Id
                    </label>
                    <div className="w-full md:h-[56px] h-[27px]  rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomSelect
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="location"
                        name=""
                        childrens={
                          <>
                            <option value="test"></option>
                          </>
                        }
                      />
                    </div>
                  </div>

                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Notification Email Address
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={false}
                        model={""}
                        value={""}
                        onChange={""}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type="email"
                        readOnly={false}
                      />
                    </div>
                  </div>
                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Order Number
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={false}
                        model={""}
                        value={""}
                        onChange={""}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={false}
                      />
                    </div>
                  </div>
                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      PO Number
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={false}
                        model={""}
                        value={""}
                        onChange={""}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={false}
                      />
                    </div>
                  </div>

                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Recurring Number
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={false}
                        model={""}
                        value={""}
                        onChange={""}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type="number"
                        readOnly={false}
                      />
                    </div>
                  </div>

                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Subtotal Amount
                    </label>
                    <div className="flex items-center md:text-[20px] text-[12px] w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <span>$</span>
                      <CustomInput
                        disabled={false}
                        model={""}
                        value={""}
                        onChange={""}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type="number"
                        readOnly={false}
                      />
                    </div>
                  </div>
                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Surcharge Amount
                    </label>
                    <div className="flex items-center md:text-[20px] text-[12px] w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <span>$</span>
                      <CustomInput
                        disabled={false}
                        model={""}
                        value={""}
                        onChange={""}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type="number"
                        readOnly={false}
                      />
                    </div>
                  </div>

                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Tax
                    </label>
                    <div className="flex items-center md:text-[20px] text-[12px] w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <span>$</span>
                      <CustomInput
                        disabled={false}
                        model={""}
                        value={""}
                        onChange={""}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type="number"
                        readOnly={false}
                      />
                    </div>
                  </div>

                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Tip Amount
                    </label>
                    <div className="flex items-center md:text-[20px] text-[12px] w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={false}
                        model={""}
                        value={""}
                        onChange={""}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type="number"
                        readOnly={false}
                      />
                    </div>
                  </div>

                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Transaction Amount
                    </label>
                    <div className="flex items-center md:text-[20px] text-[12px] w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <span>$</span>
                      <CustomInput
                        disabled={false}
                        model={""}
                        value={""}
                        onChange={""}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type="number"
                        readOnly={false}
                      />
                    </div>
                  </div>

                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Secondary Amount
                    </label>
                    <div className="flex items-center md:text-[20px] text-[12px] w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <span>$</span>
                      <CustomInput
                        disabled={false}
                        model={""}
                        value={""}
                        onChange={""}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type="number"
                        readOnly={false}
                      />
                    </div>
                  </div>

                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Transaction 1
                    </label>
                    <div className="flex items-center md:text-[20px] text-[12px] w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <span>$</span>
                      <CustomInput
                        disabled={false}
                        model={""}
                        value={""}
                        onChange={""}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type="number"
                        readOnly={false}
                      />
                    </div>
                  </div>
                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Transaction 2
                    </label>
                    <div className="flex items-center md:text-[20px] text-[12px] w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <span>$</span>
                      <CustomInput
                        disabled={false}
                        model={""}
                        value={""}
                        onChange={""}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type="number"
                        readOnly={false}
                      />
                    </div>
                  </div>
                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Transaction 3
                    </label>
                    <div className="flex items-center md:text-[20px] text-[12px] w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <span>$</span>
                      <CustomInput
                        disabled={false}
                        model={""}
                        value={""}
                        onChange={""}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type="number"
                        readOnly={false}
                      />
                    </div>
                  </div>

                  <div className="">
                    <label
                      htmlFor="location"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Secure Auth Data
                    </label>
                    <div className="w-full md:h-[56px] h-[27px]  rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomSelect
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="location"
                        name=""
                        childrens={
                          <>
                            <option value="test"></option>
                          </>
                        }
                      />
                    </div>
                  </div>
                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Secure Protocal Version
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={false}
                        model={""}
                        value={""}
                        onChange={""}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type="number"
                        readOnly={false}
                      />
                    </div>
                  </div>
                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Terminal Serial Number
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={false}
                        model={""}
                        value={""}
                        onChange={""}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={false}
                      />
                    </div>
                  </div>

                  <div className="">
                    <label
                      htmlFor="location"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Tereminal Id
                    </label>
                    <div className="w-full md:h-[56px] h-[27px]  rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomSelect
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="location"
                        name=""
                        childrens={
                          <>
                            <option value="test"></option>
                          </>
                        }
                      />
                    </div>
                  </div>

                  <div className="">
                    <label
                      htmlFor="location"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      E Format
                    </label>
                    <div className="w-full md:h-[56px] h-[27px]  rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomSelect
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="location"
                        name=""
                        childrens={
                          <>
                            <option value="test"></option>
                          </>
                        }
                      />
                    </div>
                  </div>
                  <div className="">
                    <label
                      htmlFor="location"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Wallet Type
                    </label>
                    <div className="w-full md:h-[56px] h-[27px]  rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomSelect
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="location"
                        name=""
                        childrens={
                          <>
                            <option value="test"></option>
                          </>
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center mt-[6px]">
                  <input
                    type="checkbox"
                    className="bg-limeGreen custom-checkbox"
                  />
                  <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                    Installment
                  </h5>
                </div>
                <div className="flex items-center mt-[6px]">
                  <input
                    type="checkbox"
                    className="bg-limeGreen custom-checkbox"
                  />
                  <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                    Threed Secure
                  </h5>
                </div>

                <div className="flex items-center mt-[6px]">
                  <input
                    type="checkbox"
                    className="bg-limeGreen custom-checkbox"
                  />
                  <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                    Bank Funded Only Override
                  </h5>
                </div>
                <div className="flex items-center mt-[6px]">
                  <input
                    type="checkbox"
                    className="bg-limeGreen custom-checkbox"
                  />
                  <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                    Allow Partial Authorization Override
                  </h5>
                </div>
                <div className="flex items-center mt-[6px]">
                  <input
                    type="checkbox"
                    className="bg-limeGreen custom-checkbox"
                  />
                  <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                    Allow Decline CCV Override
                  </h5>
                </div>
                <div className="flex items-center mt-[6px]">
                  <input
                    type="checkbox"
                    className="bg-limeGreen custom-checkbox"
                  />
                  <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                    Allow Decline Street Override
                  </h5>
                </div>

                <div className="flex items-center mt-[6px]">
                  <input
                    type="checkbox"
                    className="bg-limeGreen custom-checkbox"
                  />
                  <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                    Allow Decline Zip Override
                  </h5>
                </div>

                <div className="flex items-center mt-[6px]">
                  <input
                    type="checkbox"
                    className="bg-limeGreen custom-checkbox"
                  />
                  <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                    Save Account
                  </h5>
                </div>
                <div className="flex items-center mt-[6px]">
                  <input
                    type="checkbox"
                    className="bg-limeGreen custom-checkbox"
                  />
                  <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                    Advance Deposit
                  </h5>
                </div>
                <div className="flex items-center mt-[6px]">
                  <input
                    type="checkbox"
                    className="bg-limeGreen custom-checkbox"
                  />
                  <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                    No Show
                  </h5>
                </div>

                <div className="flex items-center mt-[6px]">
                  <input
                    type="checkbox"
                    className="bg-limeGreen custom-checkbox"
                  />
                  <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                    Recurring
                  </h5>
                </div>

                <div className="mt-[21px] mb-[16px] flex justify-end col-span-10">
                  <button className="md:text-[24px] text-[10px] font-bold md:py-[17px] py-[8px] rounded-lg px-[32px]  bg-limeGreen text-btnBlack">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Index;
