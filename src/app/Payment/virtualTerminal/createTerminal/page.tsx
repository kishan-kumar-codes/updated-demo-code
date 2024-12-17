"use client";

import React, { useEffect, useState } from "react";
import Layout from "../../layout/page";
import TabNavigation from "../../components/tabNavigation";
// import CustomInput from '../../components/customInput';
import CustomSelect from "../../components/customSelect";
import ToggleSwitch from "../../components/toggleSwitch";
import CreditCard from "../../../assets/images/P-credit-card.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useToast } from "../../../Payment/components/toasterProvider";
import classNames from "classnames";
import { useSearchParams } from "next/navigation";
import TabNavigationMobile from "../../components/tabNavigationMobile";
import { useSession } from "next-auth/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const Index = () => {
  const [showDiscountCard, setShowDiscountCord] = useState(false);
  const [initialLoader, setInitialLoader] = useState(false);
  const [savingLoader, setSavingLoader] = useState(false);
  const [throwError, setError] = useState(false);
  const [locationOptions, setLocationOptions] = useState<any>([]);
  const [locationObject, setLocationObject] = useState<any>({});
  const { showToast } = useToast();
  const { data: session, status } = useSession();
  const searchparams = useSearchParams();

  useEffect(() => {
    if (session) {
      console.log("Session object:", session);
      setFormData({
        ...formData,
        userId: session?.user?.id,
        token: session?.accessToken, // Make sure this path is correct
      });
    }
  }, [session]);

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
      tabUrl: "/Payment/virtualTerminal",
    },
    {
      tabName: `Keyed Credit Card`,
      tabUrl: "keyCreditCard",
    },
  ];
  const mobileTab = [
    {
      tabName: `Quick Invoice`,
      tabUrl: "quickInvoice",
    },
    {
      tabName: `Virtual Terminal`,
      tabUrl: "virtualTerminal",
    },
    {
      tabName: `Keyed Credit Card`,
      tabUrl: "keyCreditCard",
    },
  ];
  const [accessType, setAccessType] = useState<any>(null);
  const router = useRouter();
  const [formData, setFormData] = useState({
    location_id: "",
    terminal_application_id: "11e5b57c3a2969ce952ff621",
    terminal_manufacturer_code: "100",
    title: "My terminal1",
    serial_number: "",
    debit: false,
    emv: false,
    cashback_enable: false,
    print_enable: false,
    sig_capture_enable: false,
    terminal_cvm_id: "11ea0c440de708f88b56f1b3",
    local_ip_address: "192.168.0.10",
    port: 10009,
    terminal_timeouts: {
      card_entry_timeout: 47,
      device_terms_prompt_timeout: 30,
      overall_timeout: 125,
      pin_entry_timeout: 40,
      signature_input_timeout: 35,
      signature_submit_timeout: 38,
      status_display_time: 12,
      tip_cashback_timeout: 25,
      transaction_timeout: 17,
    },
    location_api_id: "location_api_id52",
    header_line_1: "line 1 sample",
    header_line_2: "line 2 sample",
    header_line_3: "line 3 sample",
    header_line_4: "line 4 sample",
    header_line_5: "line 5 sample",
    trailer_line_1: "trailer 1 sample",
    trailer_line_2: "trailer 2 sample",
    trailer_line_3: "trailer 3 sample",
    trailer_line_4: "trailer 4 sample",
    trailer_line_5: "trailer 5 sample",
    default_checkin: "2025-12-01",
    default_checkout: "2025-12-12",
    default_room_rate: 56,
    default_room_number: "303",
    is_provisioned: false,
    tip_enable: false,
    validated_decryption: false,
    communication_type: "http",
    active: true,
    token: session?.accessToken,
    userId: session?.user?.id,
  });

  useEffect(() => {
    setInitialLoader(true);
    const mode = searchparams?.get("mode");
    setAccessType(mode);

    if (mode === "view" || mode === "update") {
      getTerminalRecord();
    } else setInitialLoader(false);

    getLocationOptions();
  }, []);

  const getLocationOptions = async () => {
    const response = await fetch(`/api/fortis/getLocations`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    let locList: any = [];
    data.list.map((loc: any) => {
      locList.push(
        `${loc.address.street1}-${loc.address.city}-${loc.address.state}-${loc.address.country}`
      );
      locationObject[
        `${loc.address.street1}-${loc.address.city}-${loc.address.state}-${loc.address.country}`
      ] = loc.id;
    });

    setLocationOptions(locList);
  };

  const getTerminalRecord = async () => {
    // const { query } = router;
    try {
      const id = searchparams?.get("id");
      const url = `/api/fortis/getTerminalRecord?id=${id}`;
      const response = await fetch(url);
      if (!response.ok) {
        // Handle HTTP errors here
        showToast(`HTTP error! status: ${response.status}`, "error");
        return;
      }

      const data = await response.json();
      const responseData = data.data;
      setFormData({
        location_id: locationObject[formData.location_id],
        terminal_application_id: responseData.terminal_application_id,
        terminal_manufacturer_code: "100",
        title: responseData.title,
        serial_number: responseData.serial_number,
        debit: responseData.debit,
        emv: responseData.emv,
        cashback_enable: responseData.cashback_enable,
        print_enable: responseData.print_enable,
        sig_capture_enable: responseData.sig_capture_enable,
        terminal_cvm_id: responseData.terminal_cvm_id,
        local_ip_address: responseData.local_ip_address,
        port: responseData.port,
        terminal_timeouts: {
          card_entry_timeout: responseData.card_entry_timeout,
          device_terms_prompt_timeout: responseData.device_terms_prompt_timeout,
          overall_timeout: responseData.overall_timeout,
          pin_entry_timeout: responseData.pin_entry_timeout,
          signature_input_timeout: responseData.signature_input_timeout,
          signature_submit_timeout: responseData.signature_submit_timeout,
          status_display_time: responseData.status_display_time,
          tip_cashback_timeout: responseData.tip_cashback_timeout,
          transaction_timeout: responseData.transaction_timeout,
        },
        location_api_id: responseData.location_api_id,
        header_line_1: responseData.header_line_1,
        header_line_2: responseData.header_line_2,
        header_line_3: responseData.header_line_3,
        header_line_4: responseData.header_line_4,
        header_line_5: responseData.header_line_5,
        trailer_line_1: responseData.trailer_line_1,
        trailer_line_2: responseData.trailer_line_2,
        trailer_line_3: responseData.trailer_line_3,
        trailer_line_4: responseData.trailer_line_4,
        trailer_line_5: responseData.trailer_line_5,
        default_checkin: responseData.default_checkin,
        default_checkout: responseData.default_checkout,
        default_room_rate: responseData.default_room_rate,
        default_room_number: responseData.default_room_number,
        is_provisioned: responseData.is_provisioned,
        tip_enable: responseData.tip_enable,
        validated_decryption: responseData.validated_decryption,
        communication_type: responseData.communication_type,
        active: responseData.active,
        token: session?.accessToken,
        userId: session?.user?.id,
      });
    } catch (error) {
      console.error("Error submitting request:", error);
      showToast(`Error submitting request: ${error}`, "error");
    }
    setInitialLoader(false);
  };

  const createTerminal = async () => {
    setSavingLoader(true);
    const db_id = searchparams?.get("db_id");
    setError(false);
    const bodyData = {
      ...formData,
      serial_number: generateRandomDigitString(),
      ...(accessType === "update" && { terminal_db_id: db_id }),
    };

    if (!bodyData.title) {
      setError(true);
      setSavingLoader(false);

      return showToast("title Field Required", "warning");
    }
    try {
      let response = null;

      if (accessType === "update") {
        const id = searchparams?.get("id");

        response = await fetch(`/api/fortis/updateTerminal?id=${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(bodyData),
        });
      } else {
        response = await fetch("/api/fortis/createTerminal", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(bodyData),
        });
      }

      // setSavingoader(false)

      if (!response.ok) {
        // Handle HTTP errors here
        setSavingLoader(false);
        console.error(`HTTP error! status: ${response.status}`);
        showToast(`HTTP error! status: ${response.status}`, "error");
        return;
      }

      const data = await response.json();
      if (accessType === "update") {
        setAccessType("view");
      }

      router.push("/Payment/virtualTerminal");

      setAccessType("view");

      showToast("Request submitted successfully", "success");
    } catch (error) {
      console.error("Error submitting request:", error);
      showToast(`Error submitting request: error`, "error");
      // Handle other types of errors (e.g., network errors)
    }
    setSavingLoader(false);
  };

  const handleInputs = (model: any, e: any) => {
    if (e && e.target && e.target.value !== undefined) {
      setFormData({
        ...formData,
        [model]: e.target.value,
      });
    } else {
      console.error(
        "Event or event target is undefined or does not have a value"
      );
    }
  };

  function handleCheckBox(model: string, e: any) {
    formData[model as keyof boolean] = e.target.checked;
    setFormData({
      ...formData,
    });
  }

  const handleSelect = (e: any, model: string) => {
    setFormData({
      ...formData,
      [model]: e,
    });
  };
  function generateRandomDigitString(length: number = 8): string {
    let randomDigits = "";
    for (let i = 0; i < length; i++) {
      const randomDigit = Math.floor(Math.random() * 10); // generates a digit between 0 and 9
      randomDigits += randomDigit.toString();
    }
    return randomDigits;
  }

  console.log("Locations map", locationOptions);

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
          <div className="h-full overflow-y-auto container mx-auto">
            <div className="bg-chinesWhite rounded-lg mb-4">
              <div className="w-full  bg-palatinatePurple rounded-lg mt-[16px] text-white">
                <h5 className="md:text-[26px] text-[16px] font-bold pl-[16px] md:pl-[32px] py-[8px] md:py-[17px]">
                  Terminal
                </h5>
              </div>
              <div className=" px-[16px] py-[27px] ">
                <div className="md:grid grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Title
                    </label>
                    <div
                      className={`w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4] ${
                        throwError && !formData.title && "border border-red"
                      }`}>
                      <CustomInput
                        disabled={accessType === "view"}
                        value={formData.title}
                        model="title"
                        onChange={handleInputs}
                        className={`w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none `}
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={accessType === "view"}
                      />
                    </div>
                  </div>

                  <div className="">
                    <label
                      htmlFor="location"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Location
                    </label>
                    <div className="w-full md:h-[56px] h-[27px]  rounded-lg bg-[#F4F4F4]">
                      {/* <select
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="location"
                        name=""
                        disabled={accessType === "view"}
                        onChange={(e) => handleSelect(e, "location_id")}>
                        {locationOptions.map((loc: string, index: number) => (
                          <option key={index} value={locationObject[loc]}>
                            {loc}
                          </option>
                        ))}
                      </select> */}
                      <Select
                        value={formData.location_id || ""}
                        onValueChange={(e) => handleSelect(e, "location_id")}>
                        <SelectTrigger className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none rounded-lg md:rounded-lg ">
                          <SelectValue placeholder=" " />
                        </SelectTrigger>
                        <SelectContent className="bg-[#F4F4F4] text-[12px] md:text-[20px]">
                          {locationOptions?.length > 0 ? (
                            locationOptions?.map((loc: any, index: number) => (
                              <SelectItem
                                key={index || undefined}
                                value={loc}
                                className="text-[12px] md:text-[20px]">
                                {loc}
                              </SelectItem>
                            ))
                          ) : (
                            <SelectItem
                              value="No Option Available"
                              className="text-[12px] md:text-[20px]">
                              No Option Available
                            </SelectItem>
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Header Line 1
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={accessType === "view"}
                        value={formData.header_line_1}
                        model="header_line_1"
                        onChange={handleInputs}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={accessType === "view"}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Header Line 2
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={accessType === "view"}
                        value={formData.header_line_2}
                        model="header_line_2"
                        onChange={handleInputs}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={accessType === "view"}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Header Line 3
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={accessType === "view"}
                        value={formData.header_line_3}
                        model="header_line_3"
                        onChange={handleInputs}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={accessType === "view"}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Header Line 4
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={accessType === "view"}
                        value={formData.header_line_4}
                        model="header_line_4"
                        onChange={handleInputs}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={accessType === "view"}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Header Line 5
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={accessType === "view"}
                        value={formData.header_line_5}
                        model="header_line_5"
                        onChange={handleInputs}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={accessType === "view"}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Trailer Line 1
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={accessType === "view"}
                        value={formData.trailer_line_1}
                        model="trailer_line_1"
                        onChange={handleInputs}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={accessType === "view"}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Trailer Line 2
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={accessType === "view"}
                        value={formData.trailer_line_2}
                        model="trailer_line_2"
                        onChange={handleInputs}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={accessType === "view"}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Trailer Line 3
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={accessType === "view"}
                        value={formData.trailer_line_3}
                        model="trailer_line_3"
                        onChange={handleInputs}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={accessType === "view"}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Trailer Line 4
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={accessType === "view"}
                        value={formData.trailer_line_4}
                        model="trailer_line_4"
                        onChange={handleInputs}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={accessType === "view"}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Trailer Line 5
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={accessType === "view"}
                        value={formData.trailer_line_5}
                        model="trailer_line_5"
                        onChange={handleInputs}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={accessType === "view"}
                      />
                    </div>
                  </div>

                  {/* <div>
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Default Checkin
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={accessType === "view"}
                        value={formData.default_checkin}
                        model="default_checkin"
                        onChange={handleInputs}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type="date"
                        readOnly={accessType === "view"}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Default Checkout
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={accessType === "view"}
                        value={formData.default_checkout}
                        model="default_checkout"
                        onChange={handleInputs}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type="date"
                        readOnly={accessType === "view"}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Default Room Rate
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={accessType === "view"}
                        value={formData.default_room_rate}
                        model="default_room_rate"
                        onChange={handleInputs}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type="number"
                        readOnly={accessType === "view"}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="invtitle"
                      className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                      Default Room Number
                    </label>
                    <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={accessType === "view"}
                        value={formData.default_room_number}
                        model="default_room_number"
                        onChange={handleInputs}
                        className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={accessType === "view"}
                      />
                    </div>
                  </div> */}
                </div>
                <div className="flex items-center mt-[20px]">
                  <Checkbox
                    id={"Provisioned"}
                    className="border border-black rounded-sm"
                    checked={formData.is_provisioned}
                    onCheckedChange={(checked) =>
                      handleCheckBox("is_provisioned", {
                        target: { checked },
                      } as React.ChangeEvent<HTMLInputElement>)
                    }
                    disabled={accessType === "view"}
                  />
                  <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                    Provisioned
                  </h5>
                </div>
                <div className="flex items-center mt-[6px]">
                  <Checkbox
                    id={"Provisioned"}
                    className="border border-black rounded-sm"
                    checked={formData.tip_enable}
                    onCheckedChange={(checked) =>
                      handleCheckBox("tip_enable", {
                        target: { checked },
                      } as React.ChangeEvent<HTMLInputElement>)
                    }
                    disabled={accessType === "view"}
                  />
                  <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                    Tip Enable
                  </h5>
                </div>
                <div className="flex items-center mt-[6px]">
                  <Checkbox
                    id={"Provisioned"}
                    className="border border-black rounded-sm"
                    checked={formData.cashback_enable}
                    onCheckedChange={(checked) =>
                      handleCheckBox("cashback_enable", {
                        target: { checked },
                      } as React.ChangeEvent<HTMLInputElement>)
                    }
                    disabled={accessType === "view"}
                  />
                  <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                    Cashback Enable
                  </h5>
                </div>
                <div className="flex items-center mt-[6px]">
                  <Checkbox
                    id={"Provisioned"}
                    className="border border-black rounded-sm"
                    checked={formData.debit}
                    onCheckedChange={(checked) =>
                      handleCheckBox("debit", {
                        target: { checked },
                      } as React.ChangeEvent<HTMLInputElement>)
                    }
                    disabled={accessType === "view"}
                  />
                  <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                    Debit
                  </h5>
                </div>
                <div className="flex items-center mt-[6px]">
                  <Checkbox
                    id={"Provisioned"}
                    className="border border-black rounded-sm"
                    checked={formData.active}
                    onCheckedChange={(checked) =>
                      handleCheckBox("active", {
                        target: { checked },
                      } as React.ChangeEvent<HTMLInputElement>)
                    }
                    disabled={accessType === "view"}
                  />
                  <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                    Active
                  </h5>
                </div>
                {accessType !== "view" && (
                  <div className="mt-[21px] mb-[16px] flex justify-end col-span-10">
                    <button
                      disabled={savingLoader}
                      onClick={createTerminal}
                      className="md:text-[24px] text-[10px] font-bold md:py-[15px] py-[8px] rounded-lg px-[25px]  bg-limeGreen text-btnBlack">
                      {savingLoader ? "Loadin..." : "Save"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Index;

interface CustomInputProps {
  placeholder: string;
  type: string;
  id: string;
  readOnly: boolean;
  onChange: (model: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  model: string;
  value: any;
  disabled: boolean;
  sign?: string;
  className?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  type,
  readOnly,
  id,
  onChange,
  value,
  disabled,
  sign,
  className,
  model,
}) => {
  return (
    <div className="md:h-[56px] h-[27px]">
      {sign && <span className="text-[12px]">{sign}</span>}
      <input
        id={id}
        type={type}
        readOnly={readOnly}
        placeholder={placeholder}
        className={className}
        onChange={(e) => onChange(model, e)}
        value={value}
        disabled={disabled}
      />
    </div>
  );
};
