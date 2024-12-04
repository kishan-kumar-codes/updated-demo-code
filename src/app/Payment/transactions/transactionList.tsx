import TabNavigation from "../components/tabNavigation";
import React, { useEffect, useState } from "react";
import Layout from "../layout/page";
import ArrowUp from "../../../assets/images/P-arrow-up.svg";
import Image from "next/image";
import TransactionCard from "../components/transactionCard";
import SearchBox from "../components/searchBox";
import Link from "next/link";
import { useToast } from "../components/toasterProvider";
import TabNavigationMobile from "../components/tabNavigationMobile";

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
  const { showToast } = useToast();
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
    { tabName: "Insights", tabUrl: "insights" },
    { tabName: "Transactions", tabUrl: "/paymentDedktop/transactions" },
  ];

  const getTransactionList = async () => {
    setLoader(true);
    try {
      const response = await fetch(
        "/api/fortis/getTransactionList?page[number]=1&page[size]=50",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        // Handle HTTP errors here
        console.error(`HTTP error! status: ${response.status}`);
        showToast(`HTTP error! status: ${response.status}`, "error");
        return;
      }

      const data = await response.json();
      setListData(data.list);
      setFilteredData(data.list);
      showToast(`Retrieved successfully`, "success");
    } catch (error) {
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

          <div className="flex justify-end px-[15px] mt-[15px] container mx-auto">
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

          <div>
            <div className="px-[15px] mt-[15px] container mx-auto">
              <SearchBox Component="Transactions" onSearch={handleSearch} />
            </div>
          </div>

          <div className="section flex-1 pt-[18px] overflow-y-auto container mx-auto">
            {filteredData &&
              filteredData.map((transaction) => (
                <TransactionCard
                  key={transaction.id}
                  id={transaction.id}
                  name={transaction.account_holder_name}
                  invDate={new Date(
                    transaction.created_ts * 1000
                  ).toLocaleDateString()}
                  amount={`$${transaction.transaction_amount / 100}`}
                  status={transaction.status_code === 101 ? "Paid" : "Pending"}
                  pathname="/Payment/transactions/transactionView"
                  query={{ id: transaction.id }}
                />
              ))}
          </div>
        </div>
      }
    />
  );
}

export default Index;
