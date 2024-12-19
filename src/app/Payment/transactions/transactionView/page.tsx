"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Layout from "../../layout/page";
import Image from "next/image";
import Verified from "../../../../assets/images/P-verified.svg";
import RightChevron from "../../../../assets/images/right-chevron.svg";
import DownArrow from "../../../../assets/images/P-arrow-down.svg";
import TabNavigation from "../../components/tabNavigation";
import { useSearchParams } from "next/navigation";
import CustomInput from "../../components/customInput";
import { useSession } from "next-auth/react";
import { useToast } from "../../components/toasterProvider";
import { Calendar } from "@/components/ui/calendar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { CalendarIcon } from "lucide-react";
import { format, isBefore } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TransactionView = () => {
  const router = useRouter();
  // const { id } = router.query;
  const searchParams = useSearchParams();
  const id = searchParams?.get("id");
  const [transaction, setTransaction] = useState<any>(null);
  const [showActions, setShowActions] = useState(false);
  const [showRefund, setShowRefund] = useState(false);
  const [initialLoader, setInitialLoader] = useState(false);
  const [saving, setSaving] = useState(false);
  const [throwError, setError] = useState(false);
  const { showToast } = useToast();
  const { data: session, status } = useSession();
  const [accessType, setAccessType] = useState<any>(null);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [loader, setLoader] = useState(false);
  const [listData, setListData] = useState([]);
  const tokenToUse =
    session?.provider === "credentials"
      ? session.refreshToken
      : session?.accessToken;
  const [formData, setFormData] = useState({
    checkin_date: null,
    checkout_date: null,
    clerk_number: "AE1234",
    customer_id: "customerid",
    description: "some description",
    iias_ind: 1,
    image_front: "",
    image_back: "",
    installment: true,
    installment_number: 1,
    installment_count: 1,
    product_transaction_id: "",
    advance_deposit: false,
    no_show: false,
    notification_email_address: "",
    order_number: "433659378839",
    po_number: "555555553123",
    quick_invoice_id: "",
    recurring: false,
    recurring_number: 1,
    room_num: "303",
    room_rate: 95,
    save_account: false,
    save_account_title: "John Account",
    subtotal_amount: 599,
    surcharge_amount: 100,
    tax: 0,
    tip_amount: 0,
    transaction_amount: 699,
    secondary_amount: 0,
    transaction_c1: "custom-data-1",
    transaction_c2: "custom-data-2",
    transaction_c3: "custom-data-3",
    bank_funded_only_override: false,
    allow_partial_authorization_override: false,
    auto_decline_cvv_override: false,
    auto_decline_street_override: false,
    auto_decline_zip_override: false,
    secure_auth_data: "vVwL7UNHCf8W8M2LAfvRChNHN7c%3D",
    secure_protocol_version: 2,
    secure_crytogram: "ZVVEVDJITHpTNE9yNlNHMUh0R0E=",
    secure_directory_server_transaction_id:
      "d65e93c3-35ab-41ba-b307-767bfc19eae",
    terminal_serial_number: "1234567890",
    threedsecure: true,
    account_holder_name: "smith",
    account_number: "5454545454545454",
    entry_mode_id: "K",
    exp_date: "0722",
    wallet_type: "000",
    token: tokenToUse,
    userId: session?.user?.id,
  });

  console.log("Checkin Data", formData.checkin_date);
  const [refundData, setRefundData] = useState({
    checkin_date: formData.checkin_date,
    checkout_date: formData.checkout_date,
    clerk_number: formData.clerk_number,
    customer_id: formData.customer_id,
    description: formData.description,
    iias_ind: 1,
    installment: true,
    installment_number: 1,
    installment_count: 1,
    product_transaction_id: "",
    advance_deposit: false,
    no_show: false,
    notification_email_address: "",
    order_number: "433659378839",
    po_number: "555555553123",
    quick_invoice_id: "",
    recurring: false,
    recurring_number: 1,
    room_num: "303",
    room_rate: 95,
    save_account: false,
    save_account_title: "John Account",
    subtotal_amount: 599,
    surcharge_amount: 100,
    tax: 0,
    tip_amount: 0,
    transaction_amount: formData.transaction_amount,
    secondary_amount: 0,
    transaction_c1: formData.transaction_c1,
    transaction_c2: formData.transaction_c2,
    transaction_c3: formData.transaction_c3,
    bank_funded_only_override: false,
    allow_partial_authorization_override: false,
    auto_decline_cvv_override: false,
    auto_decline_street_override: false,
    auto_decline_zip_override: false,
  });
  const [showCancelDialog, setShowCancelDialog] = useState(false);

  const fetchTransactionDetails = async (transactionId: string) => {
    try {
      const response = await fetch(
        `/api/fortis/getTransaction?id=${transactionId}`,
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

      const data = await response.json();
      setTransaction(data.data);
    } catch (error) {
      console.error("Error fetching transaction details:", error);
    }
  };

  useEffect(() => {
    if (session) {
      setFormData({
        ...formData,
        userId: session?.user?.id,
        token: tokenToUse, // Make sure this path is correct
      });
    }
  }, [session]);

  useEffect(() => {
    if (id) {
      fetchTransactionDetails(id as string);
    }
  }, [id]);
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
      tabUrl: "/Payment/quickInvoice",
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

  const handleCancelOrder = async () => {
    setShowActions(false);
    try {
      const response = await fetch(`/api/fortis/cancelOrder?id=${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        console.error("Error canceling order:");
        showToast("Error canceling order", "error");
        return;
      }

      const data = await response.json();
      console.log("data", data);
      showToast("Order cancelled successfully", "success");
      setShowCancelDialog(false);
    } catch (error) {
      console.error("Error canceling order:", error);
      showToast("Error canceling order", "error");
    }
  };

  const handleRefundOrder = () => {
    setShowRefund(!showRefund);
    setShowActions(false);
  };

  const dateHandler = (name: string, value: Date | null) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value ? format(value, "yyyy-MM-dd") : null,
    }));
  };
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

  useEffect(() => {
    setInitialLoader(true);
    const mode = searchParams?.get("mode");
    setAccessType(mode);

    if (mode === "view" || mode === "update") {
      getccRefundRecord();
    } else {
      setInitialLoader(false);
    }
  }, [searchParams]);

  const getccRefundRecord = async () => {
    // const { query } = router;
    try {
      const id = searchParams?.get("id");
      // const id = query.id;
      const url = `/api/fortis/getCCSaleRecord?id=${id}`;
      const response = await fetch(url);
      if (!response.ok) {
        // Handle HTTP errors here
        console.error(`HTTP error! status: ${response.status}`);
        showToast(`HTTP error! status: ${response.status}`, "error");
        return;
      }
      const data = await response.json();
      const responseData = data.data;
      setFormData({
        ...responseData,
      });
    } catch (error) {
      console.error("Error submitting request:", error);
      showToast(`Error submitting request: ${error}`, "error");
    }
    setInitialLoader(false);
  };

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  function stripBase64Metadata(base64String) {
    return base64String.replace(/^data:image\/[a-zA-Z]+;base64,/, "");
  }

  const handleSelectInvoice = (e) => {
    const selectedInvoiceId = e.target.value;
    const invoice = listData.find((inv) => inv.id === selectedInvoiceId);

    setSelectedInvoice(invoice); // Update state with selected invoice details
  };

  const creatCCSalesTerminal = async () => {
    setSaving(true);
    const bodyData = formData;

    if (
      !bodyData.transaction_amount ||
      Number(bodyData.transaction_amount) === 0
    ) {
      setSaving(false);
      setError(true);
      return showToast("Transaction Amount Required", "warning");
    }

    try {
      let response = null;
      // const { query } = router;
      const id = searchParams?.get("id");

      // Prepare the body data to send
      const formDataToSend = {
        ...refundData,
        notification_email_address: selectedInvoice?.email,
        quick_invoice_id: selectedInvoice?.id,
        product_transaction_id: selectedInvoice?.cc_product_transaction_id
          ? selectedInvoice?.cc_product_transaction_id
          : selectedInvoice?.ach_product_transaction_id,
        image_front: stripBase64Metadata(bodyData.image_front),
        image_back: stripBase64Metadata(bodyData.image_back),
      };
      console.log("formDataToSend", formDataToSend);

      // const id = query.id;
      response = await fetch(`/api/fortis/refundOrder?id=${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formDataToSend), // Send JSON data
      });

      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
        showToast(`HTTP error! status: ${response.status}`, "error");

        setSaving(false);
        return;
      }

      const data = await response.json();
      console.log("data submitted", data);

      // setAccessType("view");

      showToast(`Request submitted successfully`, "success");
    } catch (error) {
      console.error("Error submitting request:", error);
      showToast("Error submitting request", "error");
    }

    setSaving(false);
  };

  const handleInputs = (e: any, model: any) => {
    if (model === "image_front" || model === "image_back") {
      const file = e.target.files[0]; // Access the file
      if (file) {
        convertFileToBase64(file).then((base64Image) => {
          setFormData({
            ...formData,
            [model]: base64Image, // Set the Base64 string
          });
        });
      }
    } else {
      setFormData({
        ...formData,
        [model]: e.target.value,
      });
    }
  };

  const setImage = async (e: any, model: string) => {
    const file = e.target.files[0];
    if (file) {
      const base64Image = await convertFileToBase64(file);
      setFormData((prevFormData) => ({
        ...prevFormData,
        [model]: base64Image, // Store the Base64 string
      }));
    }
  };

  function handleCheckBox(model: string, e: any) {
    formData[model as keyof boolean] = e.target.checked;
    setFormData({
      ...formData,
    });
  }

  return (
    <Layout
      hHeading={`#${transaction?.invoice_number || "Invoice ID Number"}`}
      Childrens={
        <div className="md:mt-[24px] ">
          <div className="hidden md:block">
            <TabNavigation tabData={tabData} />
          </div>
          {!showRefund ? (
            <>
              <div className="h-[55px] px-10 md:mt-[35px] w-full flex justify-between  items-center bg-white rounded-bl-3xl rounded-br-3xl">
                <div className="flex">
                  <div className="md:ml-[16px] flex">
                    <Image src={Verified} alt="" />
                    <h5 className="md:md:text-[26px]  text-[16px] ml-4 font-bold text-darkSilverColor">
                      {transaction?.status_code === 101
                        ? "Paid"
                        : transaction?.status_code === 111
                          ? "Refund"
                          : "Pending"}
                    </h5>
                  </div>
                </div>
                <h5 className="md:md:text-[26px]  text-[16px] font-normal text-darkSilverColor">
                  {transaction
                    ? new Date(
                        transaction.created_ts * 1000
                      ).toLocaleDateString()
                    : ""}
                </h5>
                <h5 className="md:md:text-[26px]  text-[16px] font-normal text-darkSilverColor">
                  Posted
                </h5>
              </div>
              <div className="relative px-[16px] flex justify-end mt-[21px]">
                <button
                  onClick={() => setShowActions(!showActions)}
                  className="inline bg-palatinatePurple md:text-[20px] text-[11px] rounded-lg text-white md:py-[17px] py-[8px] px-[25px]">
                  Actions{" "}
                  <Image className="inline ml-[5px]" src={DownArrow} alt="" />
                </button>
                {showActions && (
                  <div className="absolute px-1 py-[7px] text-right md:-bottom-32 -bottom-16 right-[16px]  md:w-[188px] w-[117px] bg-white border border-palatinatePurple rounded-lg">
                    <AlertDialog
                      open={showCancelDialog}
                      onOpenChange={setShowCancelDialog}>
                      <AlertDialogContent className="bg-white rounded-lg p-6 max-w-[500px] w-[90%]">
                        <AlertDialogHeader className="mb-4">
                          <AlertDialogTitle className="text-[24px] font-bold text-palatinatePurple">
                            Cancel Order
                          </AlertDialogTitle>
                          <AlertDialogDescription className="text-[16px] text-darkSilverColor">
                            Are you sure you want to cancel this order? This
                            action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter className="flex gap-3 mt-6">
                          <AlertDialogCancel className="flex-1 py-3 px-4 rounded-lg border border-palatinatePurple text-palatinatePurple hover:bg-gray-50">
                            Cancel
                          </AlertDialogCancel>
                          <AlertDialogAction
                            onClick={handleCancelOrder}
                            className="flex-1 py-3 px-4 rounded-lg bg-palatinatePurple text-white hover:bg-palatinatePurple/90">
                            Continue
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>

                    <h5
                      className="md:text-[18px] text-[10px] ripple text-palatinatePurple"
                      onClick={() => setShowCancelDialog(true)}>
                      Cancel Order
                    </h5>
                    <h5
                      className="md:text-[18px] text-[10px] ripple text-palatinatePurple"
                      onClick={handleRefundOrder}>
                      Refund Order
                    </h5>
                    <h5 className="md:text-[18px] text-[10px] ripple text-palatinatePurple">
                      Send Receipt
                    </h5>
                    <h5 className="md:text-[18px] text-[10px] ripple text-palatinatePurple">
                      View/Print Receipt
                    </h5>
                  </div>
                )}
              </div>
              <div className="px-14">
                <div>
                  <h5 className="text-palatinatePurple font-bold md:text-[28px] text-[16px]">
                    Summary
                  </h5>
                </div>
                <div className="card py-[12px] mt-[11px] bg-white rounded-lg">
                  <div className="flex justify-between py-[12px] px-[13px] border-b-[.5px] border-chinesWhite">
                    <h5 className="font-semibold text-[#6D6D6D] md:text-[26px] ">
                      Monthly Reccuring Services
                    </h5>
                    <h5 className="md:text-[26px] ">
                      ${transaction && transaction?.transaction_amount / 100} -
                    </h5>
                  </div>
                  <div className="mt-[12px]">
                    <div className="flex justify-between py-[12px] px-[13px] border-b-[.5] border-chinesWhite">
                      <h5 className="font-semibold text-[#6D6D6D] md:text-[26px] ">
                        Subtotal
                      </h5>
                      <h5 className="md:text-[26px] ">
                        ${transaction && transaction?.transaction_amount / 100}{" "}
                        -
                      </h5>
                    </div>
                    <div className="flex justify-between py-[12px] px-[13px] border-b-[.5] border-chinesWhite">
                      <h5 className="font-semibold text-[#6D6D6D] md:text-[26px] ">
                        Total
                      </h5>
                      <h5 className="md:text-[26px] ">
                        ${transaction && transaction?.transaction_amount / 100}{" "}
                        -
                      </h5>
                    </div>
                    <div className="flex justify-between py-[12px] px-[13px] border-b-[.5] border-chinesWhite">
                      <h5 className="font-semibold text-[#6D6D6D] md:text-[26px] ">
                        Amount Paid
                      </h5>
                      <h5 className="text-limeGreen font-semibold md:text-[26px] ">
                        ${transaction && transaction?.transaction_amount / 100}{" "}
                        -
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="mt-[19px]">
                  <h5 className="text-palatinatePurple font-bold md:text-[28px] text-[16px]">
                    Customer
                  </h5>
                </div>

                <div className="card flex bg-white py-[10px] px-[42px] mt-[11px] rounded-lg">
                  <h5 className="md:text-[26px]  flex-1 font-bold text-darkSilverColor">
                    {transaction && transaction?.account_holder_name}
                  </h5>
                  <h5 className="md:text-[26px]  flex-1 text-darkSilverColor">
                    {transaction
                      ? new Date(
                          transaction.created_ts * 1000
                        ).toLocaleDateString()
                      : ""}
                  </h5>
                </div>

                <div className="mt-[19px]">
                  <h5 className="text-palatinatePurple font-bold md:text-[28px] text-[16px]">
                    History
                  </h5>
                </div>

                <div className="card bg-white py-[10px] md:px-[42px] px-[11px] mt-[11px] rounded-lg flex mb-[50px]">
                  <div className="flex-1 flex justify-between items-center">
                    <div className="flex flex-col md:flex-row flex-1 justify-between">
                      <h5 className="md:text-[26px]  font-bold text-darkSilverColor">
                        #{transaction && transaction?.invoice_number} -
                      </h5>
                      <div className="md:hidden flex-1">
                        <h5 className="md:text-[26px]  text-darkSilverColor">
                          {transaction
                            ? new Date(
                                transaction.created_ts * 1000
                              ).toLocaleDateString()
                            : ""}
                        </h5>
                      </div>
                    </div>

                    <div className="hidden md:block flex-1">
                      <h5 className="md:text-[26px]  text-darkSilverColor">
                        {transaction
                          ? new Date(
                              transaction.created_ts * 1000
                            ).toLocaleDateString()
                          : ""}
                      </h5>
                    </div>

                    <div className="flex  flex-col justify-between">
                      <h5 className="md:text-[26px]  text-darkSilverColor">
                        ${transaction && transaction?.transaction_amount / 100}{" "}
                        -
                      </h5>
                      <h5 className="md:text-[26px]  text-darkSilverColor">
                        Posted
                      </h5>
                    </div>
                  </div>
                  <button className="md:text-[26px]  ms-2 flex justify-end items-center">
                    <Image src={RightChevron} alt="" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="px-4 py-2 md:px-8 md:py-6">
                <div className="bg-chinesWhite rounded-lg mb-4">
                  <div className="w-full  bg-palatinatePurple rounded-lg mt-[16px] text-white">
                    <h5 className="md:text-[24px] text-[16px] font-bold  md:pl-[32px] pl-[16px] py-[10px]">
                      Sales Refund
                    </h5>
                  </div>
                  <div className="px-[16px] py-[27px]">
                    <div className="md:grid grid-cols-3 gap-4">
                      <div className="mt-[6px]">
                        <label
                          htmlFor="location"
                          className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                          Select Invoice
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

                      <div>
                        <div className="flex flex-col justify-start items-start">
                          <label
                            className="md:text-[20px] text-[12px] mt-2 font-bold text-[#6D6D6D]"
                            htmlFor="dueDate">
                            Checkin Date
                          </label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                id="checkindate"
                                variant={"outline"}
                                className={cn(
                                  "w-full md:h-[55px] h-[27px] rounded-lg md:rounded-lg bg-[#F4F4F4] justify-start text-left font-normal",
                                  !formData.checkin_date &&
                                    "text-muted-foreground"
                                )}
                                disabled={accessType === "view"}>
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                <div className="text-xs md:text-base font-semibold">
                                  {formData.checkin_date ? (
                                    format(formData.checkin_date, "yyyy-MM-dd")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                </div>
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-white">
                              <Calendar
                                mode="single"
                                // disabled={(date) =>
                                //   isBefore(new Date(date), new Date())
                                // }
                                selected={formData.checkin_date}
                                onSelect={(date) =>
                                  dateHandler("checkin_date", date)
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-col justify-start items-start">
                          <label
                            className="md:text-[20px] text-[12px] mt-2 font-bold text-[#6D6D6D]"
                            htmlFor="checkout_date">
                            Checkout Date
                          </label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                id="checkindate"
                                variant={"outline"}
                                className={cn(
                                  "w-full md:h-[55px] h-[27px] rounded-lg md:rounded-lg bg-[#F4F4F4] justify-start text-left font-normal",
                                  !formData.checkout_date &&
                                    "text-muted-foreground"
                                )}
                                disabled={accessType === "view"}>
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                <div className="text-xs md:text-base font-semibold">
                                  {formData.checkout_date ? (
                                    format(formData.checkout_date, "yyyy-MM-dd")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                </div>
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-white">
                              <Calendar
                                mode="single"
                                // disabled={(date) =>
                                //   isBefore(new Date(date), new Date())
                                // }
                                selected={formData.checkout_date}
                                onSelect={(date) =>
                                  dateHandler("checkout_date", date)
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
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
                            disabled={accessType === "view"}
                            model="clerk_number"
                            value={formData.clerk_number}
                            onChange={handleInputs}
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
                            disabled={accessType === "view"}
                            model="customer_id"
                            value={formData.customer_id}
                            onChange={handleInputs}
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
                            disabled={accessType === "view"}
                            model="description"
                            value={formData.description}
                            onChange={handleInputs}
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
                          Image Front
                        </label>
                        <div className="relative flex items-center w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                          <input
                            type="file"
                            onChange={(e) => setImage(e, "image_front")}
                            disabled={accessType === "view"}
                            className="opacity-0 z-10 w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
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
                          <input
                            type="file"
                            onChange={(e) => setImage(e, "image_back")}
                            disabled={accessType === "view"}
                            className="opacity-0 z-10 w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
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
                            disabled={accessType === "view"}
                            model="installment_number"
                            value={formData.installment_number}
                            onChange={handleInputs}
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
                            disabled={accessType === "view"}
                            model="installment_count"
                            value={formData.installment_count}
                            onChange={handleInputs}
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
                          Notification Email Address
                        </label>
                        <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                          <CustomInput
                            disabled={accessType === "view"}
                            model="notification_email_address"
                            value={formData.notification_email_address}
                            onChange={handleInputs}
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
                            disabled={accessType === "view"}
                            model="order_number"
                            value={formData.order_number}
                            onChange={handleInputs}
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
                            disabled={accessType === "view"}
                            model="po_number"
                            value={formData.po_number}
                            onChange={handleInputs}
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
                          Room Number
                        </label>
                        <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                          <CustomInput
                            disabled={accessType === "view"}
                            model="room_num"
                            value={formData.room_num}
                            onChange={handleInputs}
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
                          Room Rate
                        </label>
                        <div className="flex items-center md:text-[20px] text-[12px] w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                          <span>$</span>
                          <CustomInput
                            disabled={accessType === "view"}
                            model="room_rate"
                            value={formData.room_rate}
                            onChange={handleInputs}
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
                          <span>$</span>{" "}
                          <CustomInput
                            disabled={accessType === "view"}
                            model="subtotal_amount"
                            value={formData.subtotal_amount}
                            onChange={handleInputs}
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
                          <span>$</span>{" "}
                          <CustomInput
                            disabled={accessType === "view"}
                            model="tax"
                            value={formData.tax}
                            onChange={handleInputs}
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
                          <span>$</span>
                          <CustomInput
                            disabled={accessType === "view"}
                            model="tip_amount"
                            value={formData.tip_amount}
                            onChange={handleInputs}
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
                            disabled={accessType === "view"}
                            model="secondary_amount"
                            value={formData.secondary_amount}
                            onChange={handleInputs}
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
                            disabled={accessType === "view"}
                            model="surcharge_amount"
                            value={formData.surcharge_amount}
                            onChange={handleInputs}
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
                        <div
                          className={`flex items-center md:text-[20px] text-[12px] w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4] ${
                            throwError &&
                            !formData.transaction_amount &&
                            "border border-red"
                          }`}>
                          <span>$</span>
                          <CustomInput
                            disabled={accessType === "view"}
                            model="transaction_amount"
                            value={formData.transaction_amount}
                            onChange={handleInputs}
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
                            disabled={accessType === "view"}
                            model="transaction_c1"
                            value={formData.transaction_c1}
                            onChange={handleInputs}
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
                          <span>$</span>{" "}
                          <CustomInput
                            disabled={accessType === "view"}
                            model="transaction_c2"
                            value={formData.transaction_c2}
                            onChange={handleInputs}
                            className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                            id="invtitle"
                            placeholder=""
                            type="nember"
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
                            disabled={accessType === "view"}
                            model="transaction_c3"
                            value={formData.transaction_c3}
                            onChange={handleInputs}
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
                          Wallet Type
                        </label>
                        <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                          <CustomInput
                            disabled={accessType === "view"}
                            model="wallet_type"
                            value={formData.wallet_type}
                            onChange={handleInputs}
                            className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                            id="invtitle"
                            placeholder=""
                            type=""
                            readOnly={false}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center mt-[6px]">
                      <Checkbox
                        id={"Provisioned"}
                        className="border border-black rounded-sm"
                        checked={formData.bank_funded_only_override}
                        onCheckedChange={(checked) =>
                          handleCheckBox("bank_funded_only_override", {
                            target: { checked },
                          } as React.ChangeEvent<HTMLInputElement>)
                        }
                        disabled={accessType === "view"}
                      />
                      <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                        Bank Funded Only Override
                      </h5>
                    </div>

                    <div className="flex items-center mt-[6px]">
                      <Checkbox
                        id={"Provisioned"}
                        className="border border-black rounded-sm"
                        checked={formData.allow_partial_authorization_override}
                        onCheckedChange={(checked) =>
                          handleCheckBox(
                            "allow_partial_authorization_override",
                            {
                              target: { checked },
                            } as React.ChangeEvent<HTMLInputElement>
                          )
                        }
                        disabled={accessType === "view"}
                      />
                      <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                        Allow Partial Authorization Override
                      </h5>
                    </div>

                    <div className="flex items-center mt-[6px]">
                      <Checkbox
                        id={"Provisioned"}
                        className="border border-black rounded-sm"
                        checked={formData.auto_decline_cvv_override}
                        onCheckedChange={(checked) =>
                          handleCheckBox("auto_decline_cvv_override", {
                            target: { checked },
                          } as React.ChangeEvent<HTMLInputElement>)
                        }
                        disabled={accessType === "view"}
                      />
                      <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                        Auto Decline CCV Override
                      </h5>
                    </div>
                    <div className="flex items-center mt-[6px]">
                      <Checkbox
                        id={"Provisioned"}
                        className="border border-black rounded-sm"
                        checked={formData.auto_decline_street_override}
                        onCheckedChange={(checked) =>
                          handleCheckBox("auto_decline_street_override", {
                            target: { checked },
                          } as React.ChangeEvent<HTMLInputElement>)
                        }
                        disabled={accessType === "view"}
                      />
                      <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                        Auto Decline Street Override
                      </h5>
                    </div>
                    <div className="flex items-center mt-[6px]">
                      <Checkbox
                        id={"Provisioned"}
                        className="border border-black rounded-sm"
                        checked={formData.auto_decline_zip_override}
                        onCheckedChange={(checked) =>
                          handleCheckBox("auto_decline_zip_override", {
                            target: { checked },
                          } as React.ChangeEvent<HTMLInputElement>)
                        }
                        disabled={accessType === "view"}
                      />
                      <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                        Auto Decline Zip Override
                      </h5>
                    </div>
                    <div className="flex items-center mt-[6px]">
                      <Checkbox
                        id={"Provisioned"}
                        className="border border-black rounded-sm"
                        checked={formData.threedsecure}
                        onCheckedChange={(checked) =>
                          handleCheckBox("threedsecure", {
                            target: { checked },
                          } as React.ChangeEvent<HTMLInputElement>)
                        }
                        disabled={accessType === "view"}
                      />
                      <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                        Threed Secure
                      </h5>
                    </div>
                    <div className="flex items-center mt-[6px]">
                      <Checkbox
                        id={"Provisioned"}
                        className="border border-black rounded-sm"
                        checked={formData.installment}
                        onCheckedChange={(checked) =>
                          handleCheckBox("installment", {
                            target: { checked },
                          } as React.ChangeEvent<HTMLInputElement>)
                        }
                        disabled={accessType === "view"}
                      />
                      <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                        Installment
                      </h5>
                    </div>
                    <div className="flex items-center mt-[6px]">
                      <Checkbox
                        id={"Provisioned"}
                        className="border border-black rounded-sm"
                        checked={formData.save_account}
                        onCheckedChange={(checked) =>
                          handleCheckBox("save_account", {
                            target: { checked },
                          } as React.ChangeEvent<HTMLInputElement>)
                        }
                        disabled={accessType === "view"}
                      />
                      <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                        Save Account
                      </h5>
                    </div>
                    <div className="flex items-center mt-[6px]">
                      <Checkbox
                        id={"Provisioned"}
                        className="border border-black rounded-sm"
                        checked={formData.recurring}
                        onCheckedChange={(checked) =>
                          handleCheckBox("recurring", {
                            target: { checked },
                          } as React.ChangeEvent<HTMLInputElement>)
                        }
                        disabled={accessType === "view"}
                      />
                      <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                        Recurring
                      </h5>
                    </div>

                    <div className="flex items-center mt-[6px]">
                      <Checkbox
                        id={"Provisioned"}
                        className="border border-black rounded-sm"
                        checked={formData.advance_deposit}
                        onCheckedChange={(checked) =>
                          handleCheckBox("advance_deposit", {
                            target: { checked },
                          } as React.ChangeEvent<HTMLInputElement>)
                        }
                        disabled={accessType === "view"}
                      />
                      <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                        Advance Deposit
                      </h5>
                    </div>
                    <div className="flex items-center mt-[6px]">
                      <Checkbox
                        id={"Provisioned"}
                        className="border border-black rounded-sm"
                        checked={formData.no_show}
                        onCheckedChange={(checked) =>
                          handleCheckBox("no_show", {
                            target: { checked },
                          } as React.ChangeEvent<HTMLInputElement>)
                        }
                        disabled={accessType === "view"}
                      />
                      <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                        No Show
                      </h5>
                    </div>

                    {accessType !== "view" && (
                      <div className="mt-[21px] mb-[16px] flex justify-end col-span-10">
                        <button
                          onClick={() => {
                            setShowRefund(false);
                            setShowActions(true);
                          }}
                          className="md:text-[24px] text-[10px] font-bold md:py-[17px] py-[8px] rounded-lg px-[25px]  bg-red text-white mr-2">
                          Cancel
                        </button>
                        <button
                          disabled={saving}
                          onClick={creatCCSalesTerminal}
                          className="md:text-[24px] text-[10px] font-bold md:py-[17px] py-[8px] rounded-lg px-[25px]  bg-limeGreen text-btnBlack">
                          {saving ? "Loading..." : "Save"}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      }
    />
  );
};

export default TransactionView;
