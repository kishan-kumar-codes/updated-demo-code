"use client";

import React, { useEffect, useState, useRef } from "react";
import Layout from "../layout/page";
import TabNavigation from "../components/tabNavigation";
import CustomInput from "../components/customInput";
import CustomSelect from "../components/customSelect";
import ToggleSwitch from "../components/toggleSwitch";
import CreditCard from "../../../assets/images/P-credit-card.svg";
import { useToast } from "../../Payment/components/toasterProvider";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Script from "next/script";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import Link from "next/link";

const Index = () => {
  const [showDiscountCard, setShowDiscountCord] = useState(false);
  const [enable, setEnable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null); // State for selected invoice
  const [listData, setListData] = useState([]);
  const { showToast } = useToast();
  const { data: session } = useSession();
  const [savingLoader, setSavingLoader] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [clientToken, setClientToken] = useState(null);
  const [elementsLoading, setelementsLoading] = useState<boolean>(false);
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const elementsRef = useRef(null);

  const tabData = [
    {
      tabName: "Payment",
      tabUrl: "/Payment/insights",
    },
    {
      tabName: `Transactions`,
      tabUrl: "/Payment/quickInvoice",
    },
    {
      tabName: `Quick Invoice`,
      tabUrl: "/Payment/quickInvoice/invoiceList",
    },
    {
      tabName: `Virtual Terminal`,
      tabUrl: "/Payment/virtualTerminal",
    },
    {
      tabName: `Credit Card`,
      tabUrl: "/Payment/keyedCreditCard",
    },
  ];

  const handleSubmit = async () => {
    // if (!selectedInvoice) {
    //   showToast("Please select an invoice", "error");
    //   return;
    // }

    // const product_transaction_id = selectedInvoice.cc_product_transaction_id
    //   ? selectedInvoice.cc_product_transaction_id
    //   : selectedInvoice.ach_product_transaction_id;
    // const paymentMthodType = selectedInvoice.cc_product_transaction_id
    //   ? "cc"
    //   : "ach";

    const payload = {
      action: "sale",
      amount: 100,
      save_account: true,
      methods: [
        {
          type: "cc",
          product_transaction_id: "11eca92cf6faeb86b514503l",
        },
      ],
      location_id: "11eca92cf6d80f76b6cd9f12",
    };
    // const payload = {
    //   action: "sale",
    //   amount: selectedInvoice.invAmount * 100,
    //   save_account: true,
    //   methods: [
    //     {
    //       type: paymentMthodType,
    //       product_transaction_id: product_transaction_id,
    //     },
    //   ],
    //   location_id: selectedInvoice.location_id,
    // };

    try {
      setSavingLoader(true);
      setelementsLoading(false);
      const response = await axios.post(
        "/api/fortis/transectionIntention",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setClientToken(response.data.data.client_token);
        console.log("Client token response", response);
      } else {
        showToast("Failed to submit payment", "error");
      }
    } catch (error) {
      showToast("Error submitting payment", "error");
    } finally {
      setSavingLoader(false);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && clientToken) {
      // Initialize Fortis elements with the client token
      const elements = new Commerce.elements(clientToken);
      elementsRef.current = elements;

      const handleReady = (event) => {
        console.log(event, "ready event");
        setelementsLoading(true);
      };

      const handleDone = async (event) => {
        console.log(event, "done event");
        if (isSubmitting) return; // Prevent multiple submissions
        try {
          let response = await fetch("/api/fortis/ccKeyedSale", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              accept: "application/json",
            },
            body: JSON.stringify({
              ...event.data,
              userId: session?.user?.id,
            }),
          });

          const responseData = await response.json();
          if (!response.ok) {
            setSavingLoader(false);
            console.error(`HTTP error! status: ${response.status}`);
            showToast(`Error: ${responseData.error}`, "error");
            return;
          }
          showToast("Request submitted successfully", "success");
        } catch (error) {
          console.error("Error submitting request:", error);
          showToast(`Error submitting request: ${error}`, "error");
        } finally {
          setIsSubmitting(false);
        }
      };

      elements.on("ready", handleReady);
      elements.on("done", handleDone);

      elements.create({
        container: "#payment",
        theme: "default",
        environment: "sandbox",
        view: "default",
        language: "en-us",
        defaultCountry: "US",
        floatingLabels: false,
        showReceipt: true,
        showSubmitButton: true,
        showValidationAnimation: true,
        hideAgreementCheckbox: false,
        hideTotal: false,
        // digitalWallets: ["ApplePay", "GooglePay"],
        appearance: {
          colorButtonSelectedBackground: "#363636",
          colorButtonSelectedText: "#ffffff",
          colorButtonActionBackground: "#40F440",
          colorButtonActionText: "#ffffff",
          colorButtonBackground: "#ffffff",
          colorButtonText: "#363636",
          colorFieldBackground: "#F4F4F4",
          colorFieldBorder: "#dbdbdb",
          colorText: "#4a4a4a",
          colorLink: "#485fc7",
          fontSize: "16px",
          marginSpacing: "0.5rem",
          borderRadius: "14px",
          trimWhitespace: "false",
          rowMarginSpacing: "0.5rem",
        },
        fields: {
          billing: [
            { name: "address", required: true, value: "123 Street" },
            { name: "country", required: true, value: "US" },
            { name: "state", required: true, value: "Florida" },
            { name: "city", required: false },
            { name: "postal_code", required: true },
          ],
          additional: [
            {
              name: "phone_number",
              required: false,
            },
          ],
          custom: [
            {
              type: "text",
              name: "api_id",
              label: "Account API Id",
              required: false,
            },
            {
              type: "text",
              name: "title",
              label: "Title",
              required: false,
            },
            {
              type: "select",
              name: "account_type",
              label: "Account Type*",
              required: false,
              value: "1",
              options: [
                { value: "1", text: "Secured credit cards" },
                { value: "2", text: "Business credit cards" },
              ],
            },
            {
              type: "select",
              name: "avs_transactions",
              label: "Run Avs Transactions",
              required: false,
              value: "1",
              options: [
                { value: "yes", text: "Yes" },
                { value: "no", text: "No" },
              ],
            },
          ],
        },
      });

      return () => {
        if (elementsRef.current) {
          elementsRef.current.off("ready", handleReady);
          elementsRef.current.off("done", handleDone);
        }
      };
    }
  }, [clientToken, session?.user?.id, isSubmitting]);
  const searchParams = useSearchParams();
  const name = searchParams?.get("name");
  return (
    <Layout
      hHeading="Payments"
      Childrens={
        <div className="px-[15px] pt-[18px] flex-1 flex flex-col h-full bg-cultured ">
          <div className="md:block hidden">
            <TabNavigation tabData={tabData} />
          </div>
          <div className="block md:hidden px-4">
            <div className="flex border border-darkSilverColor w-full justify-between rounded-l-3xl rounded-r-3xl">
              <Link
                className={`font-normal py-3 text-[16px] break-words w-full text-center ${name === "Quick Invoice" ? "bg-limeGreen" : "bg-white"} rounded-l-3xl text-darkSilverColor`}
                href="/Payment/quickInvoice/invoiceList?name=Quick Invoice">
                Quick <br />
                Invoice
              </Link>
              <Link
                className={`font-normal py-3 text-[16px] w-full text-center ${name === "Virtual Terminal" ? "bg-limeGreen" : "bg-white"} text-darkSilverColor`}
                href="/Payment/virtualTerminal?name=Virtual Terminal">
                Virtual <br /> Terminal
              </Link>
              <Link
                className={`font-normal py-3  text-[16px] w-full text-center ${name === "Credit Card" ? "bg-limeGreen" : "bg-white"} rounded-r-3xl text-darkSilverColor`}
                href="/Payment/keyedCreditCard?name=Credit Card">
                Credit <br /> Card
              </Link>
            </div>
          </div>
          <div className="h-full overflow-y-auto">
            <div>
              <Script src="https://js.sandbox.fortis.tech/commercejs-v1.0.0.min.js" />
              {clientToken && (
                <div className="container mx-auto">
                  <div className="bg-chinesWhite pb-[27px]  rounded-lg">
                    {elementsLoading && (
                      <div className="w-full md:py-[18px] py-[9px] pl-[32px] md:pl-[16px] bg-palatinatePurple rounded-lg mt-[16px] text-white mb-5">
                        <h5 className="md:text-[26px] text-[16px] font-bold  md:pl-[15px] ">
                          Information
                        </h5>
                      </div>
                    )}
                    <div className="px-5">
                      <div id="payment"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {!elementsLoading && (
              <AnimatePresence>
                {!elementsLoading && (
                  <div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setelementsLoading(false)}
                      className="fixed inset-0 bg-black bg-opacity-50  z-50 flex items-center justify-center p-4">
                      <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-lg shadow-xl py-16 md:py-28 px-4 w-full max-w-md md:max-w-lg lg:max-w-3xl">
                        <div className="text-[#6D6D6D] text-lg font-bold pt-4 lg:text-2xl text-center">
                          Please wait...
                          <div className="flex justify-center pt-4 space-x-2">
                            {[...Array(4)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="w-1 h-3 bg-[#631363] rounded-full"
                                animate={{
                                  scale: [1, 1.5, 1],
                                  transition: {
                                    duration: 1,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                  },
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            )}
            {/* <div className="mb-[61px]">
              <div className="mt-[12px] flex justify-end col-span-10">
                <button
                  onClick={handleSubmit}
                  disabled={savingLoader}
                  className="relative items-center justify-center md:text-[24px] text-[10px] font-bold md:py-[15px] py-[7px] rounded-lg md:px-[44px] px-[20px] mr-[13px] bg-limeGreen text-btnBlack">
                  {!elementsLoading ? (
                    <div> Loading...</div>
                  ) : (
                    "Generate Pay form"
                  )}
                </button>
              </div>
            </div> */}
            {/* <div className="mb-[19px] bg-chinesWhite rounded-lg">
              <div className="w-full  bg-palatinatePurple rounded-lg mt-[16px] text-white">
                <h5 className="text-[16px] font-bold  pl-[15px] py-[10px]">
                  Information
                </h5>
              </div>
              <div className="px-[16px]  py-[27px]">
                <div>
                  <label
                    htmlFor="invtitle"
                    className="text-[12px] font-bold text-darkSilverColor">
                    Contact
                  </label>
                  <div className="w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                    <CustomInput
                      className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                      id="invtitle"
                      placeholder=""
                      readOnly={false}
                      type=""
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="location"
                    className="text-[12px] font-bold text-darkSilverColor">
                    Account Type*
                  </label>
                  <div className="w-full h-[27px]  rounded-lg px-2 bg-[#F4F4F4]">
                    <CustomSelect
                      className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
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
                    className="text-[12px] font-bold text-darkSilverColor">
                    Title
                  </label>
                  <div className="w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                    <CustomInput
                      className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                      id="invtitle"
                      placeholder=""
                      readOnly={false}
                      type=""
                    />
                  </div>
                </div>
                <div className="mt-[6px]">
                  <label
                    htmlFor="invtitle"
                    className="text-[12px] font-bold text-darkSilverColor">
                    Account Holder Name
                  </label>
                  <div className="w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                    <CustomInput
                      className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                      id="invtitle"
                      placeholder=""
                      readOnly={false}
                      type=""
                    />
                  </div>
                </div>
                <div className="mt-[6px]">
                  <label
                    htmlFor="dueDate"
                    className="text-[12px] font-bold text-darkSilverColor">
                    Card Number*
                  </label>
                  <div className="w-full flex items-center  h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                    <Image src={CreditCard} alt="" />
                    <CustomInput
                      className="w-full text-[12px] bg-[#F4F4F4] ml-2 h-full outline-none"
                      id="dueDate"
                      placeholder=""
                      readOnly={false}
                      type=""
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="location"
                    className="text-[12px] font-bold text-darkSilverColor">
                    Exp Month*
                  </label>
                  <div className="w-full h-[27px]  rounded-lg px-2 bg-[#F4F4F4]">
                    <CustomSelect
                      className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
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
                    className="text-[12px] font-bold text-darkSilverColor">
                    Exp Year*
                  </label>
                  <div className="w-full h-[27px]  rounded-lg px-2 bg-[#F4F4F4]">
                    <CustomSelect
                      className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
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
                    className="text-[12px] font-bold text-darkSilverColor">
                    Billing Street
                  </label>
                  <div className="w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                    <CustomInput
                      className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                      id="invtitle"
                      placeholder=""
                      readOnly={false}
                      type=""
                    />
                  </div>
                </div>
                <div className="mt-[6px]">
                  <label
                    htmlFor="invtitle"
                    className="text-[12px] font-bold text-darkSilverColor">
                    Billing City
                  </label>
                  <div className="w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                    <CustomInput
                      className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                      id="invtitle"
                      placeholder=""
                      readOnly={false}
                      type=""
                    />
                  </div>
                </div>
                <div className="mt-[6px]">
                  <label
                    htmlFor="invtitle"
                    className="text-[12px] font-bold text-darkSilverColor">
                    Billing State
                  </label>
                  <div className="w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                    <CustomInput
                      className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                      id="invtitle"
                      placeholder=""
                      readOnly={false}
                      type=""
                    />
                  </div>
                </div>
                <div className="mt-[6px]">
                  <label
                    htmlFor="invtitle"
                    className="text-[12px] font-bold text-darkSilverColor">
                    Billing Zip
                  </label>
                  <div className="w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                    <CustomInput
                      className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                      id="invtitle"
                      placeholder=""
                      readOnly={false}
                      type=""
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="location"
                    className="text-[12px] font-bold text-darkSilverColor">
                    Billing Country
                  </label>
                  <div className="w-full h-[27px]  rounded-lg px-2 bg-[#F4F4F4]">
                    <CustomSelect
                      className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
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
                    className="text-[12px] font-bold text-darkSilverColor">
                    Billing Phone
                  </label>
                  <div className="w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                    <CustomInput
                      className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                      id="invtitle"
                      placeholder=""
                      readOnly={false}
                      type=""
                    />
                  </div>
                </div>
                <div className="mt-[6px]">
                  <label
                    htmlFor="invtitle"
                    className="text-[12px] font-bold text-darkSilverColor">
                    Account API Id
                  </label>
                  <div className="w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                    <CustomInput
                      className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                      id="invtitle"
                      placeholder=""
                      readOnly={false}
                      type=""
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="location"
                    className="text-[12px] font-bold text-darkSilverColor">
                    Run AVS Transaction?
                  </label>
                  <div className="w-full h-[27px]  rounded-lg px-2 bg-[#F4F4F4]">
                    <CustomSelect
                      className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
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
                <div className="mt-[12px] flex justify-end col-span-10">
                  <button className="text-[10px] font-bold py-[6px] rounded-lg px-[19px] mr-[13px] bg-limeGreen text-btnBlack">
                    Save
                  </button>
                  <button className="text-[10px] font-bold py-[6px] rounded-lg px-[19px] text-white bg-red text-btnBlack">
                    Cancel
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      }
    />
  );
};

export default Index;
