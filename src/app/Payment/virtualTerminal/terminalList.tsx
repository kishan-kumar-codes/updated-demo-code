import TabNavigation from "../components/tabNavigation";
import React, { useEffect, useState } from "react";
import Layout from "../layout/page";
import ArrowUp from "../../../assets/images/P-arrow-up.svg";
import Image from "next/image";
import TransactionCard from "../components/transactionCard";
import SearchBox from "../components/searchBOx";
import Link from "next/link";
import { faEye, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useToast } from "../../Payment/components/toasterProvider";
import TabNavigationMobile from "../components/tabNavigationMobile";
import { useSession } from "next-auth/react";

interface ListInterface {
  title: string;
  default_checkout: any;
  id: any;
}

function Terminal() {
  const [listData, setListData] = useState<ListInterface[]>([]);
  const [filteredData, setFilteredData] = useState<ListInterface[]>([]);
  const { data: session, status } = useSession();

  const { showToast } = useToast();

  const [loader, setLoader] = useState(false);
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

  const mobileTab = [
    { tabName: "Insights", tabUrl: "insights" },
    { tabName: "Transactions", tabUrl: "transactions" },
  ];

  useEffect(() => {
    getTerminalList();
  }, []);

  const getTerminalList = async () => {
    setLoader(true);
    try {
      // Fetch the list of terminals from the Fortis API
      const response = await fetch(
        "/api/fortis/getTerminalList?page[number]=1&page[size]=50",
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
        showToast(`HTTP error! status: ${response.status}`, "error");
        return;
      }

      const fortisData = await response.json();

      // Fetch terminal invoice data
      const terminalResponse = await fetch("/api/invoice/get-terminal-list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Cache-Control": "no-cache",
        },
        body: JSON.stringify({ userId: session?.user?.id }),
      });

      if (!terminalResponse.ok) {
        console.error(`HTTP error! status: ${terminalResponse.status}`);
        return;
      }

      const terminalInvoiceData = await terminalResponse.json();

      // Filter only the matching invoices by `terminal_id` and `id`
      const matchingInvoices = fortisData.list
        .map((fortisInvoice: any) => {
          const matchedTerminal = terminalInvoiceData.find(
            (terminal: any) => terminal.terminal_id === fortisInvoice.id
          );
          if (matchedTerminal) {
            return {
              ...fortisInvoice,
              terminal_db_id: matchedTerminal.id, // Add terminal_db_id from terminalInvoiceData
            };
          }
          return null;
        })
        .filter(Boolean); // Filter out any null values if no match was found

      setListData(matchingInvoices);
      setFilteredData(matchingInvoices);
    } catch (error) {
      console.error("Error submitting request:", error);
      showToast(`Error submitting request: ${error}`, "error");
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    if (session?.user?.id) {
      getTerminalList(); // Call only when session.user.id is available
    }
  }, [session?.user?.id]);

  const handleSearch = (searchQuery: string) => {
    if (searchQuery === "") {
      setFilteredData(listData);
    } else {
      const filtered = listData.filter(
        (terminal) =>
          terminal.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          terminal.default_checkout
            ?.toLowerCase()
            .includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  return (
    <Layout
      Childrens={
        <div className=" pt-[18px] flex-1 flex flex-col h-full bg-cultured ">
          <div className="block px-[15px] md:hidden">
            <TabNavigationMobile tabsData={mobileTab} />
          </div>
          {/* <div className="px-[15px]">

                    <TabNavigation tabsData={tabData} />
                </div> */}

          <div className="flex justify-end px-[15px] mt-[15px]">
            <button className="px-[25px] md:py-[21px] py-[8px] rounded-lg bg-palatinatePurple text-cultured md:text-[20px] text-[10px] font-bold mr-1">
              Add Contact
            </button>
            <button className="px-[25px] md:py-[21px] py-[8px] rounded-lg bg-palatinatePurple text-cultured md:text-[20px] text-[10px] font-bold mr-1">
              Add Account Vault
            </button>
            <Link
              href={{
                pathname: "virtualTerminal/terminal",
                query: {
                  tabName: "Quick Invoice",
                },
              }}>
              <button className="px-[25px] md:py-[21px]  py-[8px] rounded-lg bg-palatinatePurple text-cultured md:text-[20px] text-[10px] font-bold">
                Add Terminal
              </button>
            </Link>
          </div>

          <div>
            <div className="px-[15px] mt-[15px]">
              <SearchBox onSearch={handleSearch} Component="Terminal" />
            </div>
          </div>

          <div className="section shadow flex-1 pt-[18px] container mx-auto overflow-y-auto">
            {!loader ? (
              filteredData.map((data, index) => (
                <div
                  key={index}
                  className="flex pb-[17px] border-b-[.5px]  border-chinesWhite px-[15px] pt-[4px] ">
                  <div className="flex-1">
                    <h5 className="md:text-[24px] text-[19px] font-bold text-darkSilverColor">
                      {data.title}
                    </h5>
                    <h5 className="md:text-[24px] text-[19px]  text-darkSilverColor">
                      {data.default_checkout}
                    </h5>
                  </div>
                  <div className="flex items-end ">
                    <h5 className="text-[15px] font-bold text-palatinatePurple"></h5>
                    {/* <h5 className='text-[14px] font-bold text-limeGreen '>{status}</h5> */}

                    <div className="md:text-[24px] text-[19px] font-bold inline-block mr-1 text-palatinatePurple">
                      <Link
                        href={{
                          pathname: "virtualTerminal/terminal",
                          query: {
                            mode: "view",
                            id: data.id,
                          },
                        }}>
                        <FontAwesomeIcon icon={faEye} />
                      </Link>
                    </div>

                    <div className="md:text-[24px] text-[19px] font-bold inline-block text-palatinatePurple">
                      <Link
                        href={{
                          pathname: "virtualTerminal/terminal",
                          query: {
                            mode: "update",
                            id: data.id,
                            db_id: data.terminal_db_id,
                          },
                        }}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center">Loading...</div>
            )}
            {/* <TransactionCard pathname="" query={{}} name="Alexis Mcconnell" invDate="04/02/17 Invoice ID Number" amount="$2,450.00" status="Paid" /> */}
          </div>
        </div>
      }
    />
  );
}

export default Terminal;
