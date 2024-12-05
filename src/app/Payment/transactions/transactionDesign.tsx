import TabNavigation from "../components/tabNavigation";
import React, { useEffect, useState } from "react";
import Layout from "../layout/page";
import Check from "../../../../assets/images/D-check.svg";
import ArrowDown from "../../../../assets/images/D-down-arrow-white.svg";
import Image from "next/image";

function index() {
  const [showAction, setShowAction] = useState(false);
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
      // hHeading="Payments"
      Childrens={
        <div className="px-[15px] pt-[18px] pb-[127px] flex-1 flex lg:container mx-auto flex-col h-full bg-cultured ">
          <TabNavigation tabData={tabData} />
          <div className="mt-[35px] rounded-lg shadow flex items-center justify-around lg:container bg-white h-[101px] ">
            <div className="flex">
              <Image className="mr-[30px]" src={Check} alt="" />
              <h5 className="text-[26px] text-darkSilverColor font-bold">
                Paid
              </h5>
            </div>
            <h5 className="text-[26px] text-darkSilverColor font-bold">
              04/02/24
            </h5>
            <h5 className="text-[26px] text-darkSilverColor font-bold">
              Posted
            </h5>
          </div>

          <div className="relative  mt-[16px] flex justify-end lg:container mx-auto">
            <button
              onClick={() => setShowAction(!showAction)}
              className=" flex items-center text-[16px] font-bold text-chinesWhite px-[22px] py-[15px] bg-palatinatePurple rounded-lg">
              Actions
              <Image className="ml-2" src={ArrowDown} alt="" />
            </button>
            {showAction && (
              <div className="absolute flex flex-col items-end right-0 top-14 shadow rounded-lg border border-palatinatePurple p-[12px] bg-white ">
                <h5 className="ripple  text-[18px] text-palatinatePurple">
                  Cancel Order & Refund
                </h5>
                <h5 className="ripple text-[18px] text-palatinatePurple">
                  Send Receipt
                </h5>
                <h5 className=" ripple text-[18px] text-palatinatePurple">
                  View/Print Receipt
                </h5>
              </div>
            )}
          </div>

          <h5 className="text-[28px] text-palatinatePurple font-bold">
            {" "}
            Summary
          </h5>

          <div className=" mt-[26px]">
            <div className=" rounded-lg shadow flex items-center justify-between pl-[42px] pr-[120px] lg:container bg-white h-[79px] ">
              <h5 className="text-[20px] text-darkSilverColor font-bold">
                Alexis Mcconnell
              </h5>
              <h5 className="text-[18px] text-darkSilverColor">$1,690.00</h5>
            </div>
            <div className="mt-[7px] rounded-lg shadow flex items-center justify-between pl-[42px] pr-[120px] lg:container bg-white h-[162px] ">
              <div>
                <h5 className="text-[26px] text-darkSilverColor font-bold">
                  Subtotal
                </h5>
                <h5 className="text-[26px] text-darkSilverColor font-bold">
                  Total
                </h5>
                <h5 className="text-[26px] text-darkSilverColor font-bold">
                  Amount Paid
                </h5>
              </div>
              <div>
                <h5 className="text-[26px]  text-palatinatePurple">
                  $1,690.00
                </h5>
                <h5 className="text-[26px]  text-palatinatePurple">
                  $1,690.00
                </h5>
                <h5 className="text-[26px]  text-limeGreen">$1,690.00</h5>
              </div>
            </div>
            <h5 className="text-[28px] mt-[7px] text-palatinatePurple font-bold">
              {" "}
              Customer
            </h5>

            <div className="mt-[15px] rounded-lg shadow grid grid-cols-2 items-center pl-[42px] lg:container bg-white h-[101px] ">
              <h5 className="text-[20px]  text-darkSilverColor font-bold">
                Alexis Mcconnell
              </h5>
              <h5 className="text-[18px] text-darkSilverColor">
                04/02/24 Invoice ID Number
              </h5>
            </div>
          </div>

          <h5 className=" mt-[15px] text-[28px] text-palatinatePurple font-bold">
            {" "}
            History
          </h5>
          <div className="mt-[15px] rounded-lg shadow flex items-center justify-around lg:container bg-white h-[101px] ">
            <h5 className="text-[26px] text-darkSilverColor font-bold">
              #Invoice ID Number
            </h5>
            <h5 className="text-[26px] text-darkSilverColor font-bold">
              04/01/24
            </h5>
            <div>
              <div>
                <h5 className="text-[26px] text-darkSilverColor font-bold">
                  $1,690.00
                </h5>
                <h5 className="flex justify-center text-[26px] text-darkSilverColor font-bold">
                  Posted
                  <span className="ml-[25px]">
                    <svg
                      width="11"
                      height="21"
                      viewBox="0 0 11 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.8003 10.8001L0.800293 0.900085V20.7001L10.8003 10.8001Z"
                        fill="#6D6D6D"
                      />
                    </svg>
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}

export default index;

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
      <div className="cardHeader w-full rounded-xl bg-palatinatePurple text-white text-[16px] font-bold py-[10px] pl-[15px]">
        {headerText}
      </div>
      <div className="flex-1 overflow-x-auto">{Children}</div>
    </div>
  );
};
