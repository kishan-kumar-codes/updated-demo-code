"use client";

import TabNavigation from "../components/tabNavigation";
import React, { useEffect, useState } from "react";
import Layout from "../layout/page";
import ArrowUp from "../../../assets/images/P-arrow-up.svg";
import Image from "next/image";
import TransactionCard from "../components/transactionCard";
import SearchBox from "../components/searchBOx";
import Link from "next/link";
import TabNavigationMobile from "../components/tabNavigationMobile";
import { useSession } from "next-auth/react";
import { useToast } from "../components/toasterProvider";
import Loader from "../components/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface ListInterface {
  created_ts: number;
  status_code: number;
  transaction_amount: number;
  account_holder_name: string;
  title: string;
  invoice_number: string;
  invAmount: number;
  id: string;
}

function Index() {
  const [listData, setListData] = useState<ListInterface[]>([]);
  const [filteredData, setFilteredData] = useState<ListInterface[]>([]);
  const [loader, setLoader] = useState(false);
  const { data: session, status } = useSession();
  const { showToast } = useToast();
  const tabData = [
    {
      tabName: "Payment",
      tabUrl: "insights",
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
    { tabName: "Insights", tabUrl: "insights" },
    { tabName: "Transactions", tabUrl: "transactions" },
  ];
  useEffect(() => {
    if (session?.user?.id) {
      getTransactionList(); // Call only when session.user.id is available
    }
  }, [session?.user?.id]);

  const getTransactionList = async () => {
    setLoader(true);
    try {
      const response = await fetch("/api/fortis/getTransactionList", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        // Handle HTTP errors here
        console.error(`HTTP error! status: ${response.status}`);
        setLoader(false);
        showToast(`HTTP error! status: ${response.status}`, "error");
        return;
      }

      const fortisData = await response.json();

      // Fetch get-invoice-list data
      const CCSaleTransactionResponse = await fetch(
        "/api/transactions/getCCSaleTransactions",
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
      console.log("CCSaleTransactionResponse", CCSaleTransactionResponse);
      if (!CCSaleTransactionResponse.ok) {
        console.error(
          `HTTP error! status: ${CCSaleTransactionResponse.status}`
        );
        setLoader(false);
        showToast(
          `HTTP error! status: ${CCSaleTransactionResponse.status}`,
          "error"
        );
        return;
      }

      const CCSaleTransactionData = await CCSaleTransactionResponse.json();

      // Compare the invoices by `invoice_id` and `id`
      const matchingInvoices = fortisData.list.filter((fortisInvoice: any) =>
        CCSaleTransactionData.some(
          (quickInvoice: any) =>
            quickInvoice.sale_transaction_Id === fortisInvoice.id
        )
      );
      if (matchingInvoices.length === 0) {
        setLoader(false);
        showToast("No transaction Found", "error");
        return;
      }

      setListData(matchingInvoices);
      setFilteredData(matchingInvoices);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.error("Error submitting request:", error);
      showToast(`Error submitting request: ${error}`, "error");
      // Handle other types of errors (e.g., network errors)
    }
    setLoader(false);
  };

  const handleSearch = (searchQuery: string) => {
    if (searchQuery === "") {
      setFilteredData(listData);
    } else {
      const filtered = listData.filter(
        (transaction) =>
          transaction.account_holder_name
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          (transaction.status_code === 101 ? "Paid" : "Pending")
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  useEffect(() => {
    getTransactionList();
  }, []);

  return (
    <Layout
      Childrens={
        <div className=" pt-[18px] flex-1 flex flex-col h-full bg-cultured ">
          <div className="px-[15px]">
            <div className="hidden md:block">
              <TabNavigation tabData={tabData} />
            </div>
            <div className="block md:hidden">
              <TabNavigationMobile tabsData={mobileTab} />
            </div>
          </div>

          <div className="flex justify-between px-[15px] mt-[15px]  ">
            <div className="flex items-center md:text-[24px] text-[19px] font-bold hover:cursor-pointer">
              {/* <Link
                href={{
                  pathname: "transactions/transactionView",
                  query: {
                    tabName: "Invoice ID",
                  },
                }}>
                {" "}
                <FontAwesomeIcon
                  className="hover:cursor-pointer"
                  icon={faArrowLeft}
                />{" "}
              </Link> */}
            </div>
            <div>
              <button className="px-[25px] md:py-[17px] py-[8px] rounded-lg bg-palatinatePurple text-cultured md:text-[24px] text-[10px] font-bold mr-1">
                Add Contact
              </button>
              <button className="px-[25px] md:py-[17px] py-[8px] rounded-lg bg-palatinatePurple text-cultured md:text-[24px] text-[10px] font-bold mr-1">
                Add Account Vault
              </button>
              <Link
                href={{
                  pathname: "quickInvoice",
                  query: {
                    tabName: "Quick Invoice",
                  },
                }}>
                <button className="px-[25px] md:py-[17px] py-[8px] rounded-lg bg-palatinatePurple text-cultured md:text-[24px] text-[10px] font-bold">
                  Add Quick Invoice
                </button>
              </Link>
            </div>
          </div>

          <div>
            <div className="px-[15px] mt-[15px] w-full md:w-96 container">
              <SearchBox Component="Transactions" onSearch={handleSearch} />
            </div>
          </div>
          {loader ? (
            <div className="h-screen">
              <Loader message="Loading Transactions..." />
            </div>
          ) : (
            <div className="section flex-1 pt-[18px] overflow-y-auto container mx-auto">
              {filteredData && filteredData.length > 0 ? (
                filteredData.map((transaction) => (
                  <TransactionCard
                    key={transaction.id}
                    id={transaction.id}
                    name={transaction.account_holder_name}
                    invDate={new Date(
                      transaction.created_ts * 1000
                    ).toLocaleDateString()}
                    amount={`$${transaction.transaction_amount / 100}`}
                    status={
                      transaction.status_code === 101 ? "Paid" : "Pending"
                    }
                    pathname="/Payment/transactions/transactionView"
                    query={{ id: transaction.id }}
                  />
                ))
              ) : (
                <div className="h-screen flex justify-center items-center">
                  <p className="text-palatinatePurple text-[24px] font-bold">
                    No Transactions Available
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      }
    />
  );
}

export default Index;
