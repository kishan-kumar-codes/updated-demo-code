"use client";

import TabNavigation from "../components/tabNavigation";
import React, { useEffect, useState } from "react";
import Layout from "../layout/page";
import ArrowUp from "../../../assets/images/P-arrow-up.svg";
import Image from "next/image";
import Link from "next/link";
import BarChart from "../components/barchart/BarChart";
import { useRouter } from "next/navigation";
import TabNavigationMobile from "../components/tabNavigationMobile";
import { useSession } from "next-auth/react";
import { useToast } from "../../Payment/components/toasterProvider";
import { useSearchParams } from "next/navigation";

type Invoice = {
  email?: string;
  due_date: string;
  id: string;
  invAmount: number;
  payment_status_id: number;
};

const barChartSvgContainerStyle: React.CSSProperties = {
  width: "100%",
  height: "250px",
  position: "relative",
  top: "0",
  marginTop: "20px",
  left: "0",
  backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0NDAnIGhlaWdodD0nNDQxJyB2aWV3Qm94PScwIDAgNDQwIDQ0MScgZmlsbD0nbm9uZSc+PHBhdGggZD0nTTM5Ny4zMjUgNDQxSDQyLjY3NDhDMTkuMTY4MiA0NDEgMCA0MjEuNzE2IDAgMzk4LjI0NFY0Mi43NTY0QzAgMTkuMjA0OCAxOS4yNDcgMCA0Mi42NzQ4IDBIMzk3LjMyNUM0MjAuODMyIDAgNDQwIDE5LjI4MzkgNDQwIDQyLjc1NjRWMzk4LjI0NEM0NDAgNDIxLjc5NSA0MjAuNzUzIDQ0MSAzOTcuMzI1IDQ0MVonIGZpbGw9JyNFMEUwRTAnLz48L3N2Zz4=')`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
};

const localSearchBarChartStyle: React.CSSProperties = {
  position: "relative",
  top: "151.77px",
  left: "0",
};

type BarChartSvgComponentProps = {
  targetHeights: number[];
};

const BarChartSvgComponent: React.FC<BarChartSvgComponentProps> = ({
  targetHeights,
}) => (
  <div style={barChartSvgContainerStyle}>
    <BarChart targetHeights={targetHeights} />
  </div>
);

const targetHeights = [10, 75, 50, 20, 60, 150];

function Index() {
  const router = useRouter();
  const [listData, setListData] = useState<Invoice[]>([]);
  const [filteredData, setFilteredData] = useState([]);
  const { data: session, status } = useSession();
  const [quickInvoiceData, setQuickInvoiceData] = useState<any>([]);
  const [loader, setLoader] = useState(false);
  const { showToast } = useToast();
  const params = useSearchParams();
  const name = params?.get("name");
  const tabData = [
    {
      tabName: "Payment",
      tabUrl: "insights",
    },
    {
      tabName: `Transactions`,
      tabUrl: "quickInvoice",
    },
    {
      tabName: `Quick Invoice`,
      tabUrl: "/Payment/quickInvoice/invoiceList",
    },
    {
      tabName: `Virtual Terminal`,
      tabUrl: "virtualTerminal",
    },
    {
      tabName: `Credit Card`,
      tabUrl: "keyedCreditCard",
    },
  ];

  const mobileTab = [
    { tabName: "Credit Card", tabUrl: "transaction" },
    { tabName: "Payment", tabUrl: "/Payment/insights" },
  ];
  const [animatedHeights, setAnimatedHeights] = useState<number[]>(
    new Array(targetHeights.length).fill(0)
  );

  useEffect(() => {
    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = duration / frameRate;

    const increments = targetHeights.map(
      (targetHeight) => targetHeight / totalFrames
    );

    const intervalBars1 = setInterval(() => {
      setAnimatedHeights((prevHeights) =>
        prevHeights.map((prevHeight, index) =>
          Math.min(prevHeight + increments[index], targetHeights[index])
        )
      );
    }, frameRate);
    return () => {
      clearInterval(intervalBars1);
    };
  }, []);

  const getInvoiceList = async () => {
    setLoader(true);
    try {
      const response = await fetch(
        "/api/fortis/getInvoiceList?page[number]=1&page[size]=500",
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
      console.log("matchingInvoices", matchingInvoices);
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

  return (
    <Layout
      // hHeading="Payments"
      Childrens={
        <div className="px-[15px] pt-[18px] flex-1 flex mx-auto flex-col h-full overflow-y-auto bg-cultured ">
          <div className="hidden md:block">
            <TabNavigation tabData={tabData} />
          </div>
          <div className="block md:hidden px-4">
            <div className="flex border border-darkSilverColor w-full justify-between rounded-l-3xl rounded-r-3xl">
              <Link
                className={`font-bold py-3 text-[16px] w-full text-center ${name === "Payment" ? "bg-limeGreen" : "bg-white"} rounded-l-3xl text-darkSilverColor`}
                href="/Payment/transactions?name=Payment">
                Insights
              </Link>
              <Link
                className={`font-bold py-3  text-[16px] w-full text-center ${name === "Transactions" ? "bg-limeGreen" : "bg-white"} rounded-r-3xl text-darkSilverColor`}
                href="/Payment/transactions?name=Transactions">
                Transactions
              </Link>
            </div>
          </div>
          <div className="hidden md:block cardHeader w-[273px] mt-[18px] rounded-md rounded-br-3xl bg-palatinatePurple text-white text-[16px] lg:text-[22px] font-bold py-[10px] pl-[15px]">
            Insights
          </div>
          <div className=" md:hidden pb-20 flex-1 overflow-y-auto ">
            <InsightsCard
              headerText="Amount Processed"
              Children={
                <div className="pb-10 flex-1 md:flex-auto">
                  <div className="flex mt-2 justify-around flex-wrap">
                    <button className="text-xs font-bold text-palatinatePurple py-2 px-4 bg-white rounded-lg">
                      Month
                    </button>
                    <button className="text-xs font-bold text-palatinatePurple py-2 px-4">
                      7 Days
                    </button>
                    <button className="text-xs font-bold text-palatinatePurple py-2 px-4">
                      Today
                    </button>
                  </div>
                  <div className="flex justify-center mt-4">
                    <h5 className="text-2xl font-bold text-palatinatePurple">
                      $76,259.00
                    </h5>
                  </div>
                  <div className="flex justify-center mt-2">
                    <h5 className="text-lg text-darkSilverColor">
                      So far this month
                    </h5>
                  </div>
                  <div className="flex justify-center mt-2">
                    <div className="py-2 px-6 rounded-3xl bg-darkSilverColor text-sm font-bold text-cultured">
                      <span className="text-limeGreen inline">
                        <Image src={ArrowUp} alt="" className="inline" /> 13%
                      </span>
                      versus last month
                    </div>
                  </div>
                  <div className="flex justify-center mt-2">
                    <div className="text-sm font-bold text-darkSilverColor">
                      <span className="text-palatinatePurple inline">
                        $68,125.00
                      </span>{" "}
                      this time last month
                    </div>
                  </div>
                </div>
              }
            />
            <InsightsCard
              headerText="Amount Collected"
              Children={
                <div className="px-4 flex-1 md:flex-auto">
                  <BarChartSvgComponent targetHeights={animatedHeights} />
                </div>
              }
            />
            <InsightsCard
              headerText="Estimated Deposits"
              Children={
                <div className="px-4 flex-1 md:flex-auto">
                  <BarChartSvgComponent targetHeights={animatedHeights} />
                </div>
              }
            />
          </div>
          <div className="hidden  section flex-1 md:grid grid-cols-3 gap-5 lg:container mx-auto px-4 mt-[12px] soverflow-y-auto ">
            <InsightsCard
              headerText="Amount Processed"
              Children={
                <div className="pb-[40px]">
                  <div className="flex mt-[10px] justify-around">
                    <button className="text-[12px] font-bold text-palatinatePurple py-[6px] px-[17px] bg-white rounded-lg">
                      Month
                    </button>
                    <button className="text-[12px] font-bold text-palatinatePurple py-[6px] px-[17px]">
                      7 Days
                    </button>

                    <button className="text-[12px] font-bold text-palatinatePurple py-[6px] px-[17px]">
                      Today
                    </button>
                  </div>
                  <div className="flex justify-center mt-[17px] ">
                    <h5 className="text-[48px] font-bold text-palatinatePurple">
                      $76,259.00
                    </h5>
                  </div>
                  <div className="flex justify-center mt-[7px] ">
                    <h5 className="text-[20px]  text-darkSilverColor">
                      So far this month
                    </h5>
                  </div>

                  <div className="flex justify-center mt-[7px] ">
                    <div className="py-[6px] px-[25px] rounded-3xl  bg-darkSilverColor text-[16px] font-bold text-cultured">
                      <span className="text-limeGreen inline">
                        <Image src={ArrowUp} alt="" className="inline" /> 13%
                      </span>
                      versus last month
                    </div>
                  </div>

                  <div className="flex justify-center mt-[10px] ">
                    <div className=" text-[16px] font-bold text-darkSilverColor ">
                      <span className="text-palatinatePurple inline">
                        {" "}
                        $68,125.00{" "}
                      </span>
                      this time last month
                    </div>
                  </div>
                </div>
              }
            />

            <InsightsCard
              headerText="Amount Collected"
              Children={
                <div className="px-[60px] pb-[20px]">
                  <BarChartSvgComponent targetHeights={animatedHeights} />
                </div>
              }
            />
            <InsightsCard
              headerText="Estimated Deposits"
              Children={
                <div className="px-[60px] pb-[20px]">
                  <BarChartSvgComponent targetHeights={animatedHeights} />
                </div>
              }
            />
          </div>
          <div className="hidden md:block cardHeader w-[273px] mt-[18px] rounded-md rounded-br-3xl bg-palatinatePurple text-white text-[16px] font-bold py-[10px] pl-[15px]">
            Transactions
          </div>
          <div className="hidden  md:flex justify-end lg:container mx-auto">
            <button className="text-[16px] font-bold text-chinesWhite px-[22px] py-[15px] bg-palatinatePurple rounded-lg">
              Add Contact
            </button>
            <button className="text-[16px] font-bold text-chinesWhite px-[22px] py-[15px] bg-palatinatePurple ml-[10px] rounded-lg ">
              Add Account Vault
            </button>
            <button
              onClick={() => {
                router.push("quickInvoice?name=Quick+Invoice&id=");
              }}
              className="text-[16px] font-bold text-chinesWhite px-[22px] py-[15px] bg-palatinatePurple ml-[10px] mr-[27px] rounded-lg">
              Add Quick Invoice
            </button>
          </div>

          <div className="hidden  md:block pl-[31px] pr-[16px] mt-[23px] pb-[51px] ">
            {listData.slice(0, 5).map((invoice, index) => (
              <div
                key={index}
                className="mt-[15px] rounded-lg shadow flex items-center justify-around lg:container bg-white h-[101px] ">
                {/* Customer Name */}
                <h5 className="text-[20px] text-darkSilverColor font-bold">
                  {invoice.email
                    ? invoice.email.split("@")[0]
                    : "Customer Name"}
                </h5>

                {/* Due Date & Invoice ID */}
                <h5 className="text-[18px] text-darkSilverColor">
                  {new Date(invoice.due_date).toLocaleDateString()} {invoice.id}
                </h5>

                <div>
                  {/* Amount */}
                  <h5 className="text-[18px] font-bold text-palatinatePurple">
                    ${invoice.invAmount.toFixed(2)}
                  </h5>

                  {/* Payment Status */}
                  <h5
                    className={`text-[17px] font-bold ${
                      invoice.payment_status_id === 1
                        ? "text-limeGreen"
                        : "text-red-600"
                    }`}>
                    {invoice.payment_status_id === 1 ? "Paid" : "Unpaid"}
                  </h5>

                  {/* View Button */}
                  <h5 className="text-[18px] font-bold text-palatinatePurple cursor-pointer">
                    View...
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
}

export default Index;

interface InsightsCardProps {
  headerText: string;
  Children: React.ReactNode;
}

const InsightsCard: React.FC<InsightsCardProps> = ({
  headerText,
  Children,
}) => {
  return (
    <div className="w-full flex flex-col mt-[18px] bg-chinesWhite  rounded-lg">
      <div className="cardHeader w-full rounded-xl bg-palatinatePurple text-white text-[16px]  font-bold py-[10px] pl-[15px]">
        {headerText}
      </div>
      <div className="flex-1 overflow-x-auto">{Children}</div>
    </div>
  );
};
