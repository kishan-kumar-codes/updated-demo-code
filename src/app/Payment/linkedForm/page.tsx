"use client";

import React, { useEffect, useState } from "react";
import Layout from "../layout/page";
import TabNavigation from "../components/tabNavigation";
import Script from "next/script";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "../../Payment/components/toasterProvider";
import TabNavigationMobile from "../components/tabNavigationMobile";
import { useSession } from "next-auth/react";

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
  const router = useRouter();

  useEffect(() => {
    if (session?.user?.id) {
      getInvoiceList(); // Call only when session.user.id is available
    }
  }, [session?.user?.id]);

  const getInvoiceList = async () => {
    setLoader(true);
    try {
      const response = await fetch(
        "/api/fortis/getInvoiceList?page[number]=1&page[size]=50",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
        return;
      }

      const fortisData = await response.json();

      // Fetch get-invoice-list data
      const quickInvoiceResponse = await fetch(
        "/api/invoice/get-Invoice-list",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Cache-Control": "no-cache",
          },
          body: JSON.stringify({ userId: session?.user?.id }),
        }
      );

      if (!quickInvoiceResponse.ok) {
        console.error(`HTTP error! status: ${quickInvoiceResponse.status}`);
        return;
      }

      const quickInvoiceData = await quickInvoiceResponse.json();

      // Compare the invoices by `invoice_id` and `id`
      const matchingInvoices = fortisData.list.filter((fortisInvoice: any) =>
        quickInvoiceData.some(
          (quickInvoice: any) => quickInvoice.invoice_id === fortisInvoice.id
        )
      );

      // Calculate amount for matching invoices
      matchingInvoices.forEach((inv: any) => {
        let amount = 0;
        inv.item_list.forEach((item: any) => (amount += item.amount));
        inv.invAmount = amount;
      });

      setListData(matchingInvoices);
    } catch (error) {
      showToast("Error submitting request:", "error");
    }
    setLoader(false);
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
      tabUrl: "/Payment/virtualTerminal",
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

  const handleSelectInvoice = (e: any) => {
    const selectedInvoiceId = e.target.value;
    const invoice = listData.find((inv) => inv.id === selectedInvoiceId);

    setSelectedInvoice(invoice);
  };

  const getTransectionSet = async () => {
    const response = await fetch("");
  };

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

  console.log("Client Token", clientToken);

  const handleSucess = async (data: any) => {
    const payload = {
      attempt_interval: 300,
      basic_auth_username: "tester",
      basic_auth_password: "Test@522",
      expands: "changelogs,tags",
      format: "api-default",
      is_active: true,
      location_id: "11e95f8ec39de8fbdb0a4f1a",
      on_create: true,
      on_update: true,
      on_delete: true,
      legacy: true,
      postback_config_id: "11e95f8ec39de8fbdb0a4f1a",
      product_transaction_id: "11e95f8ec39de8fbdb0a4f1a",
      resource: "contact",
      number_of_attempts: 1,
      url: "https://127.0.0.1/receiver",
    };
    try {
      const response = await fetch("/api/fortis/webhook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("response at frontend", response);
    } catch (error) {
      console.log("Error in the handleSucess", error);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && clientToken) {
      // Initialize Fortis elements with the client token
      const elements = new Commerce.elements(clientToken);

      elements.on("done", function (event: any) {
        const data = {
          attempt_interval: 300,
          basic_auth_username: "tester",
          basic_auth_password: "Test@522",
          expands: "changelogs",
          format: "api-default",
          is_active: true,
          location_id: event.data.location_id,
          on_create: true,
          on_update: true,
          on_delete: true,
          legacy: true,
          postback_config_id: event.data.modified_user_id,
          product_transaction_id: event.data.product_transaction_id,
          resource: "contact",
          number_of_attempts: 5,
          url: "//your webhook url",
        };
        console.log(event, "Done event");
        handleSucess(data);
      });

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
          billing: false,
          additional: [
            {
              name: "phone_number",
              required: false,
            },
          ],
          custom: [
            {
              type: "date",
              format: "MM/DD/YYYY",
              name: "checkin_date",
              label: "Checkout Date",
            },
            {
              type: "date",
              format: "MM/DD/YYYY",
              name: "checkout_date",
              label: "Checkin Date",
            },
            {
              type: "text",
              name: "clerk_number",
              label: "Clerk Number",
              value: "",
              required: false,
              pattern: /\w{1,9}/,
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
    }
  }, [clientToken]);

  return (
    <>
      <Layout
        Childrens={
          <div className="px-[15px] pt-[18px] flex-1 flex flex-col h-full pb-[300px] bg-cultured ">
            <div className="hidden md:block">
              <TabNavigation tabData={tabData} />
            </div>
            <div className="block md:hidden">
              <TabNavigationMobile tabsData={mobileTab} />
            </div>
            <div className="h-full overflow-y-auto">
              <div className="container mx-auto">
                <div className="bg-chinesWhite pb-[27px] rounded-lg">
                  <div className="w-full md:py-[18px] py-[9px] pl-[32px] md:pl-[16px] bg-palatinatePurple rounded-lg mt-[16px] text-white mb-5">
                    <h5 className="md:text-[26px] text-[16px] font-bold  md:pl-[15px] ">
                      Invoice
                    </h5>
                  </div>
                  {loading ? (
                    <div className="h-screen">Loading ...</div>
                  ) : (
                    <div className="px-[16px] ">
                      <div className="md:grid grid-cols-3 gap-4">
                        <div className="">
                          <label
                            htmlFor="location"
                            className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                            Select Item
                          </label>
                          <div className="w-full md:h-[55px] h-[27px]  rounded-lg px-2 bg-[#F4F4F4]">
                            <select
                              className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                              id="location"
                              name=""
                              onChange={handleSelectInvoice}>
                              {listData.map((invoice) => (
                                <option key={invoice.id} value={invoice.id}>
                                  {invoice.title}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        {/* <div className="">
                          <label
                            htmlFor="location"
                            className="md:text-[20px] text-[12px] font-bold text-darkSilverColor"
                          >
                            Payment Method
                          </label>
                          <div className="w-full md:h-[55px] h-[27px]  rounded-lg px-2 bg-[#F4F4F4]">
                            <select
                              className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                              id="location"
                              name=""
                              onChange={(e) => handleSelect(e, "paymentMethod")}
                            >
                              <option value={"ach"}>ACH</option>
                              <option value={"cc"}>Credit Card</option>
                            </select>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  )}
                  <div className="mb-[61px]">
                    <div className="mt-[12px] flex justify-end col-span-10">
                      <button
                        onClick={handleSubmit}
                        disabled={savingLoader}
                        className="relative items-center justify-center md:text-[24px] text-[10px] font-bold md:py-[15px] py-[7px] rounded-lg md:px-[44px] px-[20px] mr-[13px] bg-limeGreen text-btnBlack">
                        {savingLoader ? (
                          <div> Loading...</div>
                        ) : (
                          "Generate Pay form"
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Script src="https://js.sandbox.fortis.tech/commercejs-v1.0.0.min.js" />
                {clientToken && (
                  <div className="container mx-auto">
                    <div className="bg-chinesWhite pb-[27px]  rounded-lg">
                      <div className="w-full md:py-[18px] py-[9px] pl-[32px] md:pl-[16px] bg-palatinatePurple rounded-lg mt-[16px] text-white mb-5">
                        <h5 className="md:text-[26px] text-[16px] font-bold  md:pl-[15px] ">
                          Information
                        </h5>
                      </div>
                      <div className="px-5">
                        <div id="payment"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        }
      />
    </>
  );
};

export default Index;
