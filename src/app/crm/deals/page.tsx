"use client";

import React, { useEffect, useState } from "react";
import LayoutView from "../layout/page";
import SearchBox from "../component/searchBox/page";
import TabNavigation from "../component/tabNavigation";
import ExportIcon from "../../../assets/images/export-icon.svg";
import Image from "next/image";
import Company1 from "../../../assets/images/companies-1.png";
import Company2 from "../../../assets/images/companies-2.png";
import DownArrow from "../../../assets/images/down-arrow.svg";
import SortIcon from "../../../assets/images/sort-icon.svg";
import ToggleSwitch from "../component/toggleSwitch";
import ExpansionPanel from "../component/expansionPanel";
import ExpansionCard from "../component/expansionCard";
import Link from "next/link";

// import DesktopDeals from "../../../components/crmDesktop/deals";
import DesktopDeals from "@/components/crmDesktop/deals";
import { useClientMediaQuery } from "../../../utils/srchooksuseClientMediaQuery";
import { useSession } from "next-auth/react";

interface Company {
  logo: string; // Or `StaticImageData` if you are using static imports
  name: string;
  id: string;
  accountManager: string;
}

interface Deal {
  id: string; // Assuming `id` is a string, change this to `number` if that's the case
  stage: string; // Assuming `stage` is a string
  description: string;
  type: string;
  amount: number;
  company: Company; // `company` object with `logo` and `name`
  dealName: string;
  startAt: string;
}

const Deals: React.FC = () => {
  const [showSorting, setShowSorting] = useState(false);
  const [showStage, setShowStage] = useState(false);
  const [checked, setChecked] = useState<boolean>(false);
  const { data: session, status } = useSession();
  const isMobile = useClientMediaQuery("(max-width: 769px)");
  const [dealsData, setDealsData] = useState<Deal[]>([]);
  const [filteredDeals, setFilteredDeals] = useState<Deal[]>([]);
  const [selectedType, setSelectedType] = useState("");

  const getAllDeals = async () => {
    try {
      const userId = session?.user?.id;
      const response = await fetch("/api/deals/get-deals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Cache-Control": "no-cache",
        },
        body: JSON.stringify({ userId }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch deals");
      }
      const deals = await response.json();
      console.log("deals", deals);
      setDealsData(deals);
      setFilteredDeals(deals);
    } catch (error) {
      console.error("Error fetching deals:", error);
    }
  };

  useEffect(() => {
    if (session?.user?.id) {
      getAllDeals(); // Call only when session.user.id is available
    }
  }, [session?.user?.id]);

  useEffect(() => {
    console.log("checked is clicked", checked);
    if (selectedType || checked) {
      let filtered = [...dealsData];

      // Filter by type if selected
      if (selectedType) {
        filtered = filtered.filter((deal) => deal.type === selectedType);
      }
      // console.log("filtered", filtered);

      // Filter by account manager if checked
      if (checked) {
        filtered = filtered.filter(
          (deal) => deal.company.accountManager === "me"
        );
        // console.log("filtered in checked", filtered);
      }
      // console.log("filtered out of checked", filtered);
      setFilteredDeals(filtered);
    } else {
      setFilteredDeals(dealsData); // Show all deals if no filters are active
    }
  }, [selectedType, checked, dealsData]);

  const handleTypeClick = (type: string) => {
    setSelectedType(type); // Update the selected type when clicked
  };

  const exportToCSV = () => {
    // Define CSV headers
    const headers = [
      "ID",
      "Name",
      "Company_Id",
      "Stage",
      "Description",
      "Category",
      "Amount",
      "Started_At",
    ];

    // Convert deals data to CSV format
    const dealRows = filteredDeals.map((deal) => [
      deal.id || "-",
      deal.dealName || "-",
      deal.company?.id || "-",
      deal.stage || "-",
      deal.description || "-",
      deal.type || "-",
      deal.amount || "-",
      deal.startAt || "-",
    ]);

    // Combine headers and data
    const csvContent = [
      headers.join(","),
      ...dealRows.map((row) => row.join(",")),
    ].join("\n");

    // Create blob and download link
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", "deals.csv");
    link.style.visibility = "hidden";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <LayoutView
      Childrens={
        <div className="relative  w-full">
          <div className="px-[20px]">
            <div className="w-full  lg:hidden mt-4 flex">
              <TabNavigation />
            </div>
            <div className="mt-4 md:hidden">
              <SearchBox Component={""} />
            </div>

            <div className="section relative w-full mt-[16px]">
              <div className="relative w-full flex justify-end text-[10px] font-bold font-arial text-cultured">
                <span className="relative">
                  {/* <button
                    onClick={() => setShowStage(!showStage)}
                    className="bg-palatinatePurple px-[6px] mr-[40px] text-[10px] font-bold py-[7px] text-cultured rounded-lg md:text-[17px] md:px-4 md:py-3">
                    + New Stage
                  </button> */}
                  {showStage && (
                    <div className="absolute bg-white top-8 left-0 w-[290px] px-[10px] border border-palatinatePurple rounded-2xl z-50 md:w-[490px] md:h-[98px] md:-left-80 md:top-16">
                      <h5 className="text-[12px] font-bold text-darkSilverColor mt-[6px] md:text-[20px]">
                        Stage Name
                      </h5>
                      <div className="mt-[10px] mb-[15px] flex">
                        <input className="h-[32px] w-full rounded-3xl text-black bg-cultured border-0 outline-none px-[12px] md:w-[310px] md:h-[42px]" />
                        <button className="bg-palatinatePurple px-[10px] w-[120px] text-[10px] font-bold py-[6px] ml-[12px] text-cultured rounded-xl md:text-[17px] md:px-[22px] md:py-[11px] md:w-[129px]">
                          Add Stage
                        </button>
                      </div>
                    </div>
                  )}
                </span>
                <div className="relative flex items-center mr-[14px]">
                  <Image
                    onClick={() => setShowSorting(!showSorting)}
                    src={DownArrow}
                    alt="sort"
                    className={`mr-[5px] ${
                      showSorting ? "-rotate-180" : ""
                    } md:w-[12px] md:h-[6px]`}
                  />
                  <h5
                    onClick={() => setShowSorting(!showSorting)}
                    className="text-palatinatePurple text-[10px] font-bold mr-[5px] md:text-[17px]">
                    TYPE
                  </h5>
                  <Image
                    onClick={() => setShowSorting(!showSorting)}
                    src={SortIcon}
                    alt="sort"
                    className="md:w-[22px] md:h-[12px]"
                  />
                  {showSorting && (
                    <div className="absolute w-[137px] z-[999] text-[10px] top-7 left-0 text-[#5F1762] bg-white border-[1px] border-palatinatePurple rounded-md md:w-[244px] md:text-[18px] md:top-14 py-[10px] md:py-[20px]">
                      <h5
                        onClick={() => handleTypeClick("")}
                        className="md:pl-[30px]  pl-[17px] flex items-center h-[18px] md:h-[32px]  ripple">
                        Clear
                      </h5>
                      <h5
                        onClick={() => handleTypeClick("Copywriting")}
                        className="md:pl-[30px]  pl-[17px] flex items-center h-[18px] md:h-[32px] ripple">
                        Copywriting
                      </h5>
                      <h5
                        onClick={() => handleTypeClick("Print Project")}
                        className="md:pl-[30px]  pl-[17px] flex items-center h-[18px] md:h-[32px] ripple">
                        Print Project
                      </h5>
                      <h5
                        onClick={() => handleTypeClick("UI Design")}
                        className="md:pl-[30px]  pl-[17px] flex items-center h-[18px] md:h-[32px] ripple">
                        UI Design
                      </h5>
                      <h5
                        onClick={() => handleTypeClick("Website Design")}
                        className="md:pl-[30px]  pl-[17px] flex items-center h-[18px] md:h-[32px] ripple">
                        Website Design
                      </h5>
                    </div>
                  )}
                </div>
                <button className="px-[5px] py-[7px] bg-palatinatePurple flex items-center text-white mr-[5px] rounded-lg md:text-[17px] md:px-4 md:py-3">
                  <Image
                    src={ExportIcon}
                    alt="export"
                    className="mr-[5px] md:w-[18px] md:h-[15px]"
                  />
                  Export
                </button>
                <Link
                  href={{
                    pathname: "/crm/deals/addNewDeals",
                    query: { name: "Deals" },
                  }}>
                  <button className="px-[6px] py-[7px] bg-palatinatePurple text-white rounded-lg md:text-[17px] md:px-4 md:py-3">
                    + New Deals
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex justify-end mt-[20px]">
              <ToggleSwitch checked={checked} setChecked={setChecked} />
              <h5 className="text-[10px] text-darkSilverColor font-bold ml-[11px] md:text-[18px]">
                Only Companies I Manage
              </h5>
            </div>
            <div className=" hidden md:flex md:w-full md:my-4">
              <SearchBox Component={""} />
            </div>

            <div className="mt-[14px] overflow-y-auto  pe-2 grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-6 gap-4  md:px-2 lg:rounded-lg">
              <ExpansionPanel title="Opportunity">
                {filteredDeals &&
                  filteredDeals
                    .filter((deal) => deal.stage === "Opportunity")
                    .map((deal, key) => (
                      <ExpansionCard
                        logoSrc={deal.company.logo}
                        key={deal.id}
                        description={deal.description}
                        quantity={key + 1}
                        price={deal.amount}
                        category={deal.company.name}
                      />
                    ))}
              </ExpansionPanel>
              <ExpansionPanel title="Proposal Sent">
                {filteredDeals &&
                  filteredDeals
                    .filter((deal) => deal.stage === "Proposal Sent")
                    .map((deal, key) => (
                      <ExpansionCard
                        logoSrc={deal.company.logo}
                        key={deal.id}
                        description={deal.description}
                        quantity={key + 1}
                        price={deal.amount}
                        category={deal.company.name}
                      />
                    ))}
              </ExpansionPanel>
              <ExpansionPanel title="In Negotiation">
                {filteredDeals &&
                  filteredDeals
                    .filter((deal) => deal.stage === "In Negotiation")
                    .map((deal, key) => (
                      <ExpansionCard
                        logoSrc={deal.company.logo}
                        key={deal.id}
                        description={deal.description}
                        quantity={key + 1}
                        price={deal.amount}
                        category={deal.company.name}
                      />
                    ))}
              </ExpansionPanel>
              <ExpansionPanel title="Won">
                {filteredDeals &&
                  filteredDeals
                    .filter((deal) => deal.stage === "Won")
                    .map((deal, key) => (
                      <ExpansionCard
                        logoSrc={deal.company.logo}
                        key={deal.id}
                        description={deal.description}
                        quantity={key + 1}
                        price={deal.amount}
                        category={deal.company.name}
                      />
                    ))}
              </ExpansionPanel>
              <ExpansionPanel title="Lost">
                {filteredDeals &&
                  filteredDeals
                    .filter((deal) => deal.stage === "Lost")
                    .map((deal, key) => (
                      <ExpansionCard
                        logoSrc={deal.company.logo}
                        key={deal.id}
                        description={deal.description}
                        quantity={key + 1}
                        price={deal.amount}
                        category={deal.company.name}
                      />
                    ))}
              </ExpansionPanel>
              <ExpansionPanel title="Delayed">
                {filteredDeals &&
                  filteredDeals
                    .filter((deal) => deal.stage === "Delayed")
                    .map((deal, key) => (
                      <ExpansionCard
                        logoSrc={deal.company.logo}
                        key={deal.id}
                        description={deal.description}
                        quantity={key + 1}
                        price={deal.amount}
                        category={deal.company.name}
                      />
                    ))}
              </ExpansionPanel>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Deals;
