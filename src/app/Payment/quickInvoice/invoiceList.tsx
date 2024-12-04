import TabNavigation from "../components/tabNavigation";
import React, { useEffect, useState } from "react";
import Layout from "../layout/page";
import ArrowUp from "../../../assets/images/P-arrow-up.svg";
import Image from "next/image";
import TransactionCard from "../components/transactionCard";
import SearchBox from "../components/searchBOx";
import TabNavigationMobile from "../components/tabNavigationMobile";

import Link from "next/link";
import {
  faEye,
  faPenToSquare,
  faRemove,
  faReply,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useToast } from "../../Payment/components/toasterProvider";
import { useSession } from "next-auth/react";

interface ListInterface {
  title: string;
  invoice_number: string;
  invAmount: number;
  id: string;
}

function InvoiceList() {
  const [listData, setListData] = useState<ListInterface[]>([]);
  const [filteredData, setFilteredData] = useState<ListInterface[]>([]);
  const { data: session, status } = useSession();
  const [quickInvoiceData, setQuickInvoiceData] = useState<any>([]);
  const [loader, setLoader] = useState(false);
  const { showToast } = useToast();

  const tabData = [
    {
      tabName: "Payment",
      tabUrl: "insights",
    },
    {
      tabName: "Invoice ID#",
      tabUrl: "quickInvoice",
    },
    {
      tabName: `Quick Invoice`,
      tabUrl: "QuickInvoice",
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

  const mobileTab = [
    { tabName: "Insights", tabUrl: "insights" },
    { tabName: "Transactions", tabUrl: "/paymentDedktop/transactions" },
  ];

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

      setFilteredData(matchingInvoices);
    } catch (error) {
      showToast("Error submitting request:", "error");
    }
    setLoader(false);
  };

  useEffect(() => {
    if (session?.user?.id) {
      getInvoiceList(); // Call only when session.user.id is available
    }
  }, [session?.user?.id]);

  const deleteInvoiceRecord = async (deleteId: any) => {
    try {
      const url = `/api/fortis/deleteInvoiceRecord?id=${deleteId}`;
      const response = await fetch(url, {
        method: "DELETE",
      });
      if (!response.ok) {
        // Handle HTTP errors here
        console.error(`HTTP error! status: ${response.status}`);
        showToast(`HTTP error! status: ${response.status}`, "error");
        return;
      }

      const data = await response.json();
      const responseData = data.data;

      showToast("Request delete successfully", "success");
      getInvoiceList();
    } catch (error) {
      console.error("Error submitting request:", error);
      showToast("Error submitting request:", "error");
    }
  };
  const resendInvoice = async (invoiceId: any) => {
    try {
      const url = `/api/fortis/resendInvoice?id=${invoiceId}`;
      const response = await fetch(url, {
        method: "POST",
      });
      if (!response.ok) {
        // Handle HTTP errors here
        console.error(`HTTP error! status: ${response.status}`);
        showToast(`HTTP error! status: ${response.status}`, "error");
        return;
      }

      const data = await response.json();
      const responseData = data.data;

      showToast("Resend successfully", "error");
      getInvoiceList();
    } catch (error) {
      console.error("Error submitting request:", error);
      showToast("Error submitting request:", "error");
    }
  };

  const handleSearch = (searchQuery: string) => {
    if (searchQuery === "") {
      setFilteredData(listData);
    } else {
      const filtered = listData.filter(
        (invoice) =>
          invoice.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          invoice.invoice_number
            ?.toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          String(invoice.invAmount).includes(searchQuery)
      );
      setFilteredData(filtered);
    }
  };

  return (
    <Layout
      Childrens={
        <div className=" pt-[18px] flex-1 flex flex-col h-full bg-cultured  ">
          <div className="block md:hidden">
            <TabNavigationMobile tabsData={mobileTab} />
          </div>
          <div className="px-[15px]">
            {/* <TabNavigation tabData={tabData} /> */}
          </div>

          <div className="flex justify-end px-[15px] mt-[15px]">
            <button className="md:px-[24px] px-[8px] md:py-[15px] py-[8px] rounded-lg bg-palatinatePurple text-cultured md:text-[20px] text-[10px] font-bold mr-1">
              Add Contact
            </button>
            <button className="md:px-[24px] px-[8px] md:py-[15px] py-[8px] rounded-lg bg-palatinatePurple text-cultured md:text-[20px] text-[10px] font-bold mr-1">
              Add Account Vault
            </button>
            <Link
              href={{
                pathname: "/Payment/quickInvoice",
                query: {
                  tabName: "Quick Invoice",
                },
              }}>
              <button className="md:px-[24px] px-[8px] md:py-[15px] py-[8px] rounded-lg bg-palatinatePurple text-cultured md:text-[20px] text-[10px] font-bold">
                Add Quick Invoice
              </button>
            </Link>
          </div>

          <div>
            <div className="px-[15px] mt-[15px]">
              <SearchBox onSearch={handleSearch} Component="Invoice" />
            </div>
          </div>

          <div className="section container mx-auto shadow  flex-1 pt-[18px] overflow-y-auto">
            {loader ? (
              <div>Loading...</div>
            ) : (
              filteredData.map((ls, index) => (
                // <TransactionCard query={{mode:'view', id:ls.id}} pathname="/Payment/quickInvoice" name={ls.title} invDate={ls.invoice_number} amount={ls.invAmount} key={index} status="Paid" />
                <div
                  key={index}
                  className="flex pb-[17px] border-b-[.5px] border-chinesWhite px-[15px] pt-[4px] ">
                  <div className="flex-1">
                    <h5 className="md:text-[24px] text-[19px] font-bold text-darkSilverColor">
                      {ls.title}
                    </h5>
                    <h5 className="md:text-[24px] text-[19px]  text-darkSilverColor">
                      {ls.id}
                    </h5>
                  </div>
                  <div className="flex items-end flex-col">
                    <h5 className="md:text-[24px] text-[19px] font-bold text-palatinatePurple">
                      ${ls.invAmount}
                    </h5>
                    <h5 className="md:text-[24px] text-[19px] font-bold text-limeGreen ">
                      {"Paid"}
                    </h5>

                    <div className="flex items-center justify-around">
                      <div className=" md:text-[24px] text-[19px] font-bold  mr-1 flex text-palatinatePurple">
                        <Link
                          href={{
                            pathname: "/Payment/quickInvoice",
                            query: { mode: "view", id: ls.id },
                          }}>
                          <FontAwesomeIcon icon={faEye} />
                        </Link>
                      </div>
                      <Link
                        href={{
                          pathname: "/Payment/quickInvoice",
                          query: { mode: "update", id: ls.id },
                        }}>
                        <div className="md:text-[24px] text-[19px] font-bold mr-1 inline-block text-palatinatePurple">
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </div>
                      </Link>
                      <button
                        onClick={() => {
                          deleteInvoiceRecord(ls.id);
                        }}>
                        <div className="md:text-[24px] text-[19px] font-bold mr-1 inline-block text-palatinatePurple">
                          <FontAwesomeIcon icon={faRemove} />
                        </div>
                      </button>
                      <button
                        onClick={() => {
                          resendInvoice(ls.id);
                        }}>
                        <div className="md:text-[24px] text-[19px] font-bold mr-1 inline-block text-palatinatePurple">
                          <FontAwesomeIcon icon={faReply} />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      }
    />
  );
}

export default InvoiceList;
