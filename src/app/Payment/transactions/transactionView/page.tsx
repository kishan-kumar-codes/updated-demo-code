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
const TransactionView = () => {
  const router = useRouter();
  // const { id } = router.query;
  const searchParams = useSearchParams();
  const id = searchParams?.get("id");
  const [transaction, setTransaction] = useState<any>(null);
  const [showActions, setShowActions] = useState(false);

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

  return (
    <Layout
      hHeading={`#${transaction?.invoice_number || "Invoice ID Number"}`}
      Childrens={
        <div className="md:mt-[24px]">
          <div className="hidden md:block">
            <TabNavigation tabData={tabData} />
          </div>

          <div className="h-[55px] px-10 md:mt-[35px] w-full flex justify-between  items-center bg-white rounded-bl-3xl rounded-br-3xl">
            <div className="flex">
              <div className="md:ml-[16px] flex">
                <Image src={Verified} alt="" />
                <h5 className="md:md:text-[26px]  text-[16px] ml-4 font-bold text-darkSilverColor">
                  {transaction?.status_code === 101 ? "Paid" : "Pending"}
                </h5>
              </div>
            </div>
            <h5 className="md:md:text-[26px]  text-[16px] font-normal text-darkSilverColor">
              {transaction
                ? new Date(transaction.created_ts * 1000).toLocaleDateString()
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
                <h5 className="md:text-[18px] text-[10px] ripple text-palatinatePurple">
                  Cancel Order & Refund
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
                  {/* ${transaction?.transaction_amount / 100}  */} -
                </h5>
              </div>
              <div className="mt-[12px]">
                <div className="flex justify-between py-[12px] px-[13px] border-b-[.5] border-chinesWhite">
                  <h5 className="font-semibold text-[#6D6D6D] md:text-[26px] ">
                    Subtotal
                  </h5>
                  <h5 className="md:text-[26px] ">
                    {/* ${transaction?.transaction_amount / 100} */} -
                  </h5>
                </div>
                <div className="flex justify-between py-[12px] px-[13px] border-b-[.5] border-chinesWhite">
                  <h5 className="font-semibold text-[#6D6D6D] md:text-[26px] ">
                    Total
                  </h5>
                  <h5 className="md:text-[26px] ">
                    {/* ${transaction?.transaction_amount / 100} */} -
                  </h5>
                </div>
                <div className="flex justify-between py-[12px] px-[13px] border-b-[.5] border-chinesWhite">
                  <h5 className="font-semibold text-[#6D6D6D] md:text-[26px] ">
                    Amount Paid
                  </h5>
                  <h5 className="text-limeGreen font-semibold md:text-[26px] ">
                    {/* ${transaction?.transaction_amount / 100}  */} -
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
                {transaction?.account_holder_name}
              </h5>
              <h5 className="md:text-[26px]  flex-1 text-darkSilverColor">
                {transaction
                  ? new Date(transaction.created_ts * 1000).toLocaleDateString()
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
                    {/* #{transaction?.invoice_number}   */} -
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
                    {/* ${transaction?.transaction_amount / 100}  */} -
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
        </div>
      }
    />
  );
};

export default TransactionView;
