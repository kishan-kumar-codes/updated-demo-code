"use client";

import React, { useEffect, useState } from "react";
import Layout from "../layout/page";
import TabNavigation from "../components/tabNavigation";
import CustomInput from "../components/customInput";
import CustomSelect from "../components/customSelect";
import ToggleSwitch from "../components/toggleSwitch";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "../components/toasterProvider";
import TabNavigationMobile from "../components/tabNavigationMobile";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useSearchParams } from "next/navigation";
import { number } from "prop-types";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showDiscountCard, setShowDiscountCord] = useState(false);
  const [enable, setEnable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isError, setErrr] = useState(false);
  const [accessType, setAccessType] = useState<any>(null);
  const [savingLoader, setSavingoader] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [locationOptions, setLocationOptions] = useState<any>([]);
  const [locationObject, setLocationObject] = useState<any>({});
  const searchParams = useSearchParams();

  const { showToast } = useToast();
  const { data: session, status } = useSession();
  const [tiggleButton, setToggleButton] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    // Your existing form data state
    items: [{ name: "", quantity: "", unitPrice: "" }],
    title: "",
    dueDate: "",
    locationId: "",
    allowOverPay: false,
    bankFundedOnlyOverride: true,
    email: "",
    customerId: "",
    expireDate: "",
    allowPartialPar: false,
    sendEmail: false,
    invoiceNumber: "",
    itemHeader: "",
    itemFooter: "",
    amountDue: 0,
    notificationEmail: "",
    statusId: 0,
    statusCode: 0,
    note: "",
    notificationDayB4DueDay: 0,
    notificationDayAfterDueDay: 0,
    notificationOnDueDate: false,
    sendTextToPay: false,
    remainingBalance: 0,
    singlePaymentMinAmount: 0,
    singlePaymentMaxAmount: 0,
    cellPhone: "",
    token: session?.user?.accessToken,
    userId: session?.user?.id,
  });

  useEffect(() => {
    const mode = searchParams?.get("mode");

    setAccessType(mode);
    if (mode === "view" || mode === "update") {
      getInvoiceRecord();
    }

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
    console.log("bodyData", data);
    let locList: any = [];
    data?.list?.forEach((loc: any) => {
      const label = `${loc.address.street1}-${loc.address.city}-${loc.address.state}-${loc.address.country}`;
      const value = loc.id;

      // Adding formatted location object to locList
      locList.push({ label, value });

      // Setting locationObject for other uses if needed
      locationObject[label] = value;
    });
    console.log("Invoice New ", locList);
    setLocationOptions(locList);
  };

  const getInvoiceRecord = async () => {
    const id = searchParams?.get("id");
    setLoading(true);
    try {
      const userid = id;
      const url = `/api/fortis/getInvoiceRecord?id=${userid}`;
      const response = await fetch(url);
      if (!response.ok) {
        // Handle HTTP errors here
        console.error(`HTTP error! status: ${response.status}`);
        showToast(`HTTP error! status: ${response.status}`, "error");
        return;
      }

      const data = await response.json();
      const responseData = data.data;

      let items = responseData.item_list.map((itm: any) => {
        return {
          name: itm.name,
          quantity: itm.quantity,
          unitPrice: itm.amount,
        };
      });

      setFormData({
        ...formData,
        items: [...items],
        title: responseData.title,
        dueDate: responseData.due_date,
        locationId: responseData.location_id,
        allowOverPay: responseData.allow_overpayment,
        bankFundedOnlyOverride: responseData.bank_funded_only_override,
        email: responseData.email,
        customerId: responseData.customer_id,
        expireDate: responseData.expire_date,
        allowPartialPar: responseData.allow_partial_pay,
        sendEmail: responseData.send_email,
        invoiceNumber: responseData.invoice_number,
        itemHeader: responseData.item_header,
        itemFooter: responseData.item_footer,
        amountDue: responseData.amount_due,
        notificationEmail: responseData.notification_email,
        statusId: responseData.status_id,
        statusCode: responseData.status_code,
        note: responseData.note,
        notificationDayB4DueDay: responseData.notification_days_before_due_date,
        notificationDayAfterDueDay:
          responseData.notification_days_after_due_date,
        notificationOnDueDate: responseData.notification_on_due_date,
        sendTextToPay: responseData.send_text_to_pay,
        remainingBalance: responseData.remaining_balance,
        singlePaymentMinAmount: responseData.single_payment_min_amount,
        singlePaymentMaxAmount: responseData.single_payment_max_amount,
        cellPhone: responseData.cell_phone,
        token: session?.user?.accessToken,
        userId: session?.user?.id,
      });
    } catch (error) {
      console.error("Error submitting request:", error);
      showToast(`Error submitting request: ${error}`, "error");
    }

    setLoading(false);
  };

  const handleChange = (
    e: { target: { name: string; value: string | number } },
    index: number
  ) => {
    const { name, value } = e.target;
    const updatedItems = [...formData.items];
    (updatedItems[index] as any)[name] = value;
    setFormData({ ...formData, items: updatedItems });
  };

  const handleAddItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { name: "", quantity: "", unitPrice: "" }],
    });
  };

  const handleToggle = () => {
    setEnable((prevState) => !prevState);
  };

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
      tabUrl: "/Payment/keyedCreditCard",
    },
  ];

  const mobileTab = [
    { tabName: "Keyed Credit Card", tabUrl: "/Payment/transaction" },
    { tabName: "Payment", tabUrl: "/Payment/insights" },
  ];

  function generateRandomAlphanumeric(length: any) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const createInvoice = async () => {
    console.log(
      "locationObject[formData.locationId],",
      locationObject[formData.locationId]
    );
    setErrr(false);
    let isRowValid = true;
    const itemList = formData.items.map((itm) => {
      if (!itm.name || !itm.unitPrice) {
        isRowValid = false;
      }
      return {
        name: itm.name,
        amount: Number(itm.unitPrice) || 0,
      };
    });

    if (formData.title && formData.dueDate && isRowValid) {
      setSavingoader(true);

      const bodyData = {
        title: formData.title,
        due_date: formData.dueDate,
        item_list: itemList,
        location_id: formData.locationId, //from background
        allow_overpayment: formData.allowOverPay,
        bank_funded_only_override: formData.bankFundedOnlyOverride,
        email: formData.email,
        customer_id: "11e95f8ec39de8fbdb0a4f1a", //from background
        expire_date: formData.expireDate,
        allow_partial_pay: formData.allowPartialPar,
        invoice_number: "invoice12345", //from background
        item_header: formData.itemHeader,
        item_footer: formData.itemFooter,
        amount_due: Number(formData.amountDue),
        send_email: formData.sendEmail,
        notification_email: session?.user?.email, //from background
        status_id: 1, //from background
        status_code: 1, //from background
        note: formData.note,
        notification_days_before_due_date:
          Number(formData.notificationDayB4DueDay) || 0,
        notification_days_after_due_date:
          Number(formData.notificationDayAfterDueDay) || 0,
        notification_on_due_date: formData.notificationOnDueDate,
        send_text_to_pay: false, //from background
        remaining_balance: Number(formData.remainingBalance) || 0,
        single_payment_min_amount: Number(formData.singlePaymentMinAmount) || 0,
        single_payment_max_amount: Number(formData.singlePaymentMaxAmount) || 0,
        cell_phone: formData.cellPhone,
        // contact_id: "11e95f8ec39de8fbdb0a4f1a", //from background
        // contact_api_id: "contact12345", //from background
        quick_invoice_api_id: generateRandomAlphanumeric(17),
        attach_files_to_email: false,
        files: [],
        tags: [],
        token: session?.user?.accessToken,
        userId: session?.user?.id,
      };

      console.log("bodyData", bodyData);

      try {
        let response = null;
        const userid = searchParams?.get("id");
        if (accessType === "update") {
          const id = userid;
          response = await fetch(`/api/fortis/updateInvoice?id=${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(bodyData),
          });
        } else {
          response = await fetch("/api/fortis/createInvoice", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(bodyData),
          });
        }

        setSavingoader(false);

        if (!response.ok) {
          // Handle HTTP errors here
          console.error(`HTTP error! status: ${response.status}`);
          showToast(`Error submitting request: ${response.status}`, "error");

          return;
        }

        const data = await response.json();
        if (accessType === "update") {
          setAccessType("view");
        }
        router.push("/Payment/quickInvoice/invoiceList");

        setAccessType("view");

        showToast(`Request submitted successfully`, "success");

        setAccessType("view");
      } catch (error) {
        showToast(`Error submitting request: ${error}`, "error");

        // Handle other types of errors (e.g., network errors)
      }
    } else {
      setErrr(true);

      showToast("Field The Required Data", "warning");
    }
  };

  const inputHandler = (model: string, e: any) => {
    setFormData({
      ...formData,
      [model]: e.target.value,
    });
  };

  function handleCheckBox(model: string, e: any) {
    formData[model as keyof boolean] = e.target.checked;
    setFormData({
      ...formData,
    });
  }

  const handleSelect = (e: any, model: string) => {
    console.log("e.target.value", e.target.value);
    setFormData({
      ...formData,
      [model]: e.target.value,
    });
  };

  const handleToggleButton = () => {
    setToggleButton(!tiggleButton);
  };

  return (
    <>
      <Layout
        Childrens={
          <div className="px-[15px] pt-[18px] flex-1 flex flex-col h-full bg-cultured  ">
            <div className="hidden md:block">
              <TabNavigation tabData={tabData} />
            </div>
            <div className="block md:hidden">
              <TabNavigationMobile tabsData={mobileTab} />
            </div>
            <div className="h-full overflow-y-auto ">
              {/* just for testing */}

              <div className="container   mt-4 md:mt-14 mx-auto">
                <div className="bg-chinesWhite  rounded-lg md:rounded-2xl">
                  <div className="w-full h-[39px] md:h-[66px]   bg-[#631363;] rounded-lg  text-[#FFF] flex items-center  pl-4  md:pl-8 md:rounded-2xl ">
                    <h5 className="md:text-[26px] text-[16px]  font-bold  md:pl-[15px] ">
                      Details
                    </h5>
                  </div>
                  {loading ? (
                    <div className="h-screen">Loading ...</div>
                  ) : (
                    <div className="px-[16px] py-[26px] md:px-[35px] md:py-[56px] ">
                      <div className="md:grid grid-cols-2 gap-x-4 gap-y-[6px] md:gap-y-3 md:gap-x-12">
                        {/* {isError && !formData.dueDate && <div className="text-red text-[10px] p-0 m-0">This Field is Required</div>} */}

                        {/* {isError && !formData.title && <div className="text-red text-[10px] p-0 m-0">This Field is Required</div>} */}

                        <div>
                          <label
                            htmlFor="location"
                            className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                            Location*
                          </label>
                          <div className="w-full md:h-[55px] h-[27px]  rounded-lg md:rounded-2xl px-2 bg-[#F4F4F4] md:max-w-[641px]">
                            <select
                              disabled={accessType === "view"}
                              className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none rounded-lg md:rounded-2xl "
                              id="location"
                              name=""
                              onChange={(e) => handleSelect(e, "locationId")}>
                              {locationOptions.map(
                                (loc: any, index: number) => (
                                  <option key={index} value={loc.value}>
                                    {loc.label}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                        <Input
                          disabled={accessType === "view"}
                          label="Invoice Title*"
                          type=""
                          value={formData.title}
                          id=""
                          model="title"
                          placeholder=""
                          readOnly={false}
                          onChange={inputHandler}
                        />
                        <Input
                          disabled={accessType === "view"}
                          label="Due Date*"
                          type="date"
                          id=""
                          model="dueDate"
                          placeholder=""
                          readOnly={false}
                          value={formData.dueDate}
                          onChange={inputHandler}
                        />

                        <Input
                          disabled={accessType === "view"}
                          label="Expire Date"
                          type="date"
                          id=""
                          model="expireDate"
                          placeholder=""
                          readOnly={false}
                          value={formData.expireDate}
                          onChange={inputHandler}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="container   mt-4 md:mt-14 mx-auto">
                <div className="bg-chinesWhite  rounded-lg md:rounded-2xl">
                  <div className="w-full h-[39px] md:h-[66px]   bg-[#631363;] rounded-lg  text-[#FFF] flex items-center  pl-4  md:pl-8 md:rounded-2xl ">
                    <h5 className="md:text-[26px] text-[16px]  font-bold  md:pl-[15px] ">
                      Item List*
                    </h5>
                  </div>
                  <div className="p-4  md:py-10 ">
                    <div className="w-full flex flex-col lg:flex-row flex-wrap">
                      <div className="lg:w-[55%] xl:w-1/2">
                        {formData.items.map((item, index) => (
                          <div className="flex  w-full gap-1" key={index}>
                            <div className=" w-[68%] 2xl:max-w-[428px]">
                              <label className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                                Item:
                              </label>

                              <input
                                className="w-full md:h-[55px] h-[27px] bg-[#F4F4F4] px-2 outline-none text-[16px] rounded-lg md:rounded-2xl"
                                type="text"
                                name="name"
                                value={item.name}
                                disabled={accessType === "view"}
                                onChange={(e) => handleChange(e, index)}
                              />
                              {isError && !item.name && (
                                <div className="text-red text-[10px] p-0 m-0">
                                  This Field is Required
                                </div>
                              )}
                            </div>
                            <div className=" w-[12%] 2xl:max-w-[74px]">
                              <label className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                                Qty:
                              </label>
                              <input
                                className="w-full md:h-[55px] h-[27px] bg-[#F4F4F4] px-2 outline-none mx-1 text-[16px] rounded-lg md:rounded-2xl"
                                type="number"
                                name="quantity"
                                value={item.quantity}
                                disabled={accessType === "view"}
                                onChange={(e) => handleChange(e, index)}
                              />
                            </div>
                            <div className=" w-[19%] 2xl:max-w-[117px]">
                              <label className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                                Unit Price:
                              </label>
                              <input
                                className="w-full md:h-[55px] h-[27px] bg-[#F4F4F4] px-2 outline-none mx-1 text-[16px] rounded-lg md:rounded-2xl"
                                type="number"
                                name="unitPrice"
                                disabled={accessType === "view"}
                                value={item.unitPrice}
                                onChange={(e) => handleChange(e, index)}
                              />

                              {isError && !item.unitPrice && (
                                <div className="text-red text-[10px] p-0 m-0">
                                  This Field is Required
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-[12px] flex justify-end lg:justify-start xl:justify-center lg:w-[45%] xl:w-1/2 gap-2 md:gap-6 lg:pl-[10px] relative">
                        <Button
                          disabled={accessType === "view"}
                          // onClick={handleAddItem}
                          className="md:text-[24px] text-[10px] md:max-h-[70px] font-bold lg:py-8  rounded-lg md:px-5 lg:px-[24px] px-[11px] bg-palatinatePurple   text-cultured lg:rounded-2xl">
                          + Add Discount
                        </Button>
                        <Button
                          disabled={accessType === "view"}
                          onClick={handleAddItem}
                          className="md:text-[24px]  text-[10px] md:max-h-[70px] font-bold lg:py-8 rounded-lg md:px-5 lg:px-[24px] px-[11px]  bg-limeGreen text-btnBlack lg:rounded-2xl">
                          + Add Item
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex justify-between">
                    <div className="w-full h-[72px] bg-[#6D6D6D] text-white rounded-lg md:h-[104px] md:text-[15px] text-[10px] flex flex-col items-end justify-between p-2 xl:w-[60%] xl:rounded-3xl xl:flex-row xl:h-[65px] xl:items-center xl:justify-around xl:text-[20px]">
                      <span>Subtotal: $ 0.00</span>{" "}
                      <span className="hidden xl:block h-full w-[1px] bg-[#F4F4F4]"></span>
                      <span>Add Discount: $ 0.00</span>{" "}
                      <span className="hidden xl:block h-full w-[1px] bg-[#F4F4F4]"></span>
                      <span>Sales Tax: $ 0.00</span>{" "}
                      <span className="hidden xl:block h-full w-[1px] bg-[#F4F4F4]"></span>
                      <span>Total: $ 0.00</span>
                    </div>
                    <div className="hidden xl:block xl:h-[65px] xl:w-[36%]">
                      <div className="w-full h-full bg-[#631363] text-white text-[26px] items-center rounded-3xl flex justify-between  px-[37px]">
                        {" "}
                        <div>Additional Settings</div>{" "}
                        <div>
                          <ToggleSwitch
                            checked={tiggleButton}
                            onChange={handleToggleButton}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container   mt-4 md:mt-14 mx-auto">
                <div className="bg-chinesWhite  rounded-lg md:rounded-2xl">
                  <div className=" w-full h-[39px] xl:hidden bg-[#631363] text-white text-[16px] rounded-lg flex justify-between   px-[16px] py-[10px] mt-[15px] md:h-[66px] md:pl-8 md:rounded-2xl md:text-[26px] ">
                    {" "}
                    <span>Additional Settings</span>{" "}
                    <span>
                      <ToggleSwitch
                        checked={tiggleButton}
                        onChange={handleToggleButton}
                      />
                    </span>
                  </div>

                  {tiggleButton && (
                    <div className="p-4  md:py-10 ">
                      <div className=" mt-[6px]  md:px-[33px] md:py-[21px]">
                        <div className="w-full flex items-center ">
                          <input
                            disabled={accessType === "view"}
                            type="checkbox"
                            className="bg-limeGreen text-black md:w-[20px] md:h-[20px]"
                            onChange={(e) => handleCheckBox("allowOverPay", e)}
                            checked={formData.allowOverPay}
                          />
                          <h5 className="md:text-[20px] text-[11px] font-bold ml-[13px] text-[#6D6D6D]">
                            Send periodic email reports about my review
                            activity.
                          </h5>
                        </div>
                        <div className="w-full text-[10px] font-400 md:text-[18px] text-[#6D6D6D]">
                          Send notification to provided email and/or cell phone
                        </div>
                        <div className="pt-8">
                          <div className="md:grid grid-cols-2 gap-x-4 gap-y-[6px] md:gap-y-3 md:gap-x-12">
                            {/* {isError && !formData.dueDate && <div className="text-red text-[10px] p-0 m-0">This Field is Required</div>} */}

                            {/* {isError && !formData.title && <div className="text-red text-[10px] p-0 m-0">This Field is Required</div>} */}

                            <Input
                              disabled={accessType === "view"}
                              label="Notify Before Due Date"
                              type=""
                              value={formData.title}
                              id=""
                              model="title"
                              placeholder=""
                              readOnly={false}
                              onChange={inputHandler}
                            />
                            <Input
                              disabled={accessType === "view"}
                              label="Notify After Due Date*"
                              type=""
                              id=""
                              model="dueDate"
                              placeholder=""
                              readOnly={false}
                              value={formData.dueDate}
                              onChange={inputHandler}
                            />

                            <Input
                              disabled={accessType === "view"}
                              label="Location Notification Emails"
                              type=""
                              id=""
                              model="expireDate"
                              placeholder=""
                              readOnly={false}
                              value={formData.expireDate}
                              onChange={inputHandler}
                            />
                            <Input
                              disabled={accessType === "view"}
                              label="Note"
                              type=""
                              id=""
                              model="expireDate"
                              placeholder=""
                              readOnly={false}
                              value={formData.expireDate}
                              onChange={inputHandler}
                            />

                            <div>
                              <label
                                htmlFor="dueDate"
                                className="md:text-[20px] text-[12px] font-bold text-[#6D6D6D]">
                                Files
                              </label>
                              <div className="flex w-full h-[71px] relative md:h-[135px] items-center justify-center rounded-lg md:rounded-2xl px-2 bg-[#F4F4F4] md:max-w-[641px] mt-1 md:mt-[10px]">
                                {/* <span className="text-[12px]">{sign}</span> */}
                                <input
                                  id=""
                                  type="file"
                                  readOnly={false}
                                  placeholder=""
                                  className="w-full md:text-[20px] pt-4 text-[12px] bg-[#F4F4F4] h-full outline-none text-center"
                                  onInput={(e) =>
                                    inputHandler('"expireDate"', e)
                                  }
                                  value={formData.expireDate}
                                  disabled={accessType === "view"}
                                />
                              </div>
                            </div>
                            <div className="w-full md:flex justify-end items-end hidden">
                              <button
                                disabled={accessType === "view"}
                                onClick={handleAddItem}
                                className="md:text-[24px] text-[12px] font-bold md:py-0 py-[7px] rounded-lg md:px-[24px] px-[19px] max-h-[80px]  bg-limeGreen text-btnBlack mr-[13px]">
                                Save
                              </button>
                              <button
                                disabled={accessType === "view"}
                                onClick={handleAddItem}
                                className="md:text-[24px] text-[12px] font-bold md:py-0 py-[7px] rounded-lg md:px-[24px] px-[19px] max-h-[80px] bg-red text-white ">
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="w-full text-[9px] text-[#6D6D6D] font-[400]  md:text-[18px] mt-[6px] md:mt-[19px]">
                          Maximum size of 5MB per file. | Maximum of 4 files can
                          be attached to a Quick Invoice.
                        </div>
                        <div className="w-full flex justify-end mt-[39px] md:hidden">
                          <button
                            disabled={accessType === "view"}
                            onClick={handleAddItem}
                            className="md:text-[24px] text-[12px] font-bold h-[27px] md:py-[21px] py-[12px] rounded-lg md:px-[24px] px-[19px]  bg-limeGreen text-btnBlack mr-[13px]">
                            Save
                          </button>
                          <button
                            disabled={accessType === "view"}
                            onClick={handleAddItem}
                            className="md:text-[24px] text-[12px] font-bold h-[27px] md:py-[21px] py-[12px] rounded-lg md:px-[24px] px-[19px]  bg-red text-white ">
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="container mx-auto flex justify-end mt-[26px] ">
                <button
                  disabled={accessType === "view"}
                  onClick={handleAddItem}
                  className="md:text-[24px] text-[12px] font-bold  rounded-lg w-[67px] h-[27px] text-center md:w-[140px] md:h-[56px]  bg-limeGreen text-btnBlack mr-[13px]">
                  Save
                </button>
              </div>

              <div className="container md:hidden   mt-4 md:mt-14 mx-auto">
                <div className="bg-chinesWhite  rounded-lg md:rounded-2xl">
                  <div className="w-full h-[39px] md:h-[66px]   bg-[#631363;] rounded-lg  text-[#FFF] flex items-center  pl-4  md:pl-8 md:rounded-2xl ">
                    <h5 className="md:text-[26px] text-[16px]  font-bold  md:pl-[15px] ">
                      Item List*
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </>
  );
};

export default Index;

interface CustomInputProps {
  placeholder: string;
  type: string;
  id: string;
  readOnly: boolean;
  onChange: void | any;
  model: string;
  label: string;
  value: any;
  disabled: boolean;
  sign?: string;
}

const Input: React.FC<CustomInputProps> = ({
  placeholder,
  type,
  readOnly,
  id,
  onChange,
  value,
  label,
  disabled,
  sign,
  model,
}) => {
  return (
    <div>
      <label
        htmlFor="dueDate"
        className="md:text-[20px] text-[12px] font-bold text-[#6D6D6D]">
        {label}
      </label>
      <div className="flex w-full md:h-[56px] h-[27px] items-center rounded-lg md:rounded-2xl px-2 bg-[#F4F4F4] md:max-w-[641px] mt-1 md:mt-[10px]">
        <span className="text-[12px]">{sign}</span>
        <input
          id={id}
          type={type}
          readOnly={readOnly}
          placeholder={placeholder}
          className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none rounded-lg md:rounded-2xl"
          onInput={(e) => onChange(model, e)}
          value={value}
          disabled={disabled}
        />
      </div>
    </div>
  );
};
