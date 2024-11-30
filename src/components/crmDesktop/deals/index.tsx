import React, { useEffect, useState } from "react";
import Layout from "../layout";
import DownArrow from "../../../assets/images/down-arrow.svg";
import SortIcon from "../../../assets/images/sort-icon.svg";
import Image from "next/image";
import ExportIcon from "../../../assets/images/export-icon.svg";
import SearchBox from "../components/searchBox";
import ToggleSwitch from "../components/toggleSwitch";
import ExpansionCard from "../components/expansionCard";
import Link from "next/link";
import TabNavigation from "../components/tabNavigation";
import SearchBoxMobile from "../components/searchBoxMobile/page";
import ExpansionPanel from "../components/expansionPanel";
import Company1 from "../../../assets/images/companies-1.png";
import Company2 from "../../../assets/images/companies-2.png";
import ExpansionCardMobile from "../components/expansionCardMobile";
import { useSession } from "next-auth/react";

const Index: React.FC = () => {
  const [showSorting, setShowSorting] = useState(false);
  const [showStage, setShowStage] = useState(false);
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();
  const [dealsData, setDealsData] = useState([]);
  const [filteredDeals, setFilteredDeals] = useState([]);
  const [selectedType, setSelectedType] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChange = (newCheck: boolean) => {
    setIsChecked(newCheck);
    console.log("Switch is now:", newCheck);
  };

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
      console.log('deals',deals)
      setDealsData(deals);
      setFilteredDeals(deals);
    } catch (error) {
      console.error("Error fetching deals:", error);
    }
  };
  

  // Filter deals based on selected type
  useEffect(() => {
    if (selectedType) {
      const filtered = dealsData.filter((deal) => deal.type === selectedType);
      setFilteredDeals(filtered);
    } else {
      setFilteredDeals(dealsData); // Show all deals if no type is selected
    }
  }, [selectedType, dealsData]);

  console.log("session:",session);
  useEffect(() => {
    if (session?.user?.id) {
      getAllDeals(); // Call only when session.user.id is available
    }
  }, [session?.user?.id]);

  const handleTypeClick = (type: string) => {
    setSelectedType(type); // Update the selected type when clicked
  };

  return (
    <Layout
      Childrens={
        <div className="md:px-[42px] px-[20px] w-full">
          <div className="w-full md:hidden mt-4  flex">
            <TabNavigation />
          </div>
          <div className="mt-4  md:hidden block">
            <SearchBoxMobile Component="" />
          </div>
          <div className="mt-[18px] flex justify-end md:mr-[59px]">
            <span className="relative">
              <button
                onClick={() => setShowStage(!showStage)}
                className="bg-palatinatePurple md:px-[17px] px-[8px] md:mr-[56px] mr-[20px] md:text-[17px] text-[10px] font-bold md:py-[12px] py-[6px] text-cultured rounded-lg">
                + New Stage
              </button>
              {showStage && (
                <div className="absolute bg-white md:top-14 top-8 md:-left-80 sm:left-0 md:w-[490px] w-[290px] md:pl-[26px] pl-[12px] pr-[12px] md:pr-[0px]  border border-palatinatePurple rounded-3xl z-50">
               
                  <h5 className="md:text-[20px] text-[12px] font-bold text-darkSilverColor mt-[6px]">
                    Stage Name
                  </h5>
                  <div className="mt-[10px] flex md:block">
                    <input className="md:h-[42px] h-[32px] md:w-[310px] w-full rounded-3xl bg-cultured border-0 outline-none px-[12px] md:mb-[17px] mb-[8px]" />
                    <button className="bg-palatinatePurple  md:px-[17px] w-[120px] px-[10px] md:text-[17px] text-[10px] font-bold md:py-[12px] mb-[8px] md:mb-[0px]  md:ml-[12px] ml-[6px] text-cultured rounded-xl">
                      Add Stage
                    </button>
                  </div>
                </div>
              )}
            </span>
            <div className="relative flex items-center mr-[14px] cursor-pointer">
              <Image
                onClick={() => setShowSorting(!showSorting)}
                src={DownArrow}
                alt="sort"
                className={`mr-[5px] h-[6px] w-[12px] ${
                  showSorting ? "-rotate-180" : ""
                }`}
              />
              <h5
                onClick={() => setShowSorting(!showSorting)}
                className="text-palatinatePurple md:text-[17px] text-[10px] font-bold mr-[5px]">
                TYPE
              </h5>
              <Image
                onClick={() => setShowSorting(!showSorting)}
                src={SortIcon}
                alt="sort"
                className="w-[22px] h-[12px]"
              />
              {showSorting && (
                <div className="absolute md:w-[244px] w-[137px] z-[999] md:text-[18px] text-[10px] pb-[22px] top-12 left-0 text-palatinatePurple bg-white border-[1px] border-palatinatePurple rounded-xl">
                  <h5
                    onClick={() => handleTypeClick("")}
                    className="md:pl-[33px] pl-[17px] md:pt-[20px] pt-[7px] ripple">
                    Clear
                  </h5>
                  <h5
                    onClick={() => handleTypeClick("Copywriting")}
                    className="md:pl-[33px] pl-[17px] md:pt-[20px] pt-[7px] ripple">
                    Copywriting
                  </h5>
                  <h5
                    onClick={() => handleTypeClick("Print Project")}
                    className="md:pl-[33px] pl-[17px] md:pt-[20px] pt-[7px] ripple">
                    Print Project
                  </h5>
                  <h5
                    onClick={() => handleTypeClick("UI Design")}
                    className="md:pl-[33px] pl-[17px] md:pt-[20px] pt-[7px] ripple">
                    UI Design
                  </h5>
                  <h5
                    onClick={() => handleTypeClick("Website Design")}
                    className="md:pl-[33px] pl-[17px] md:pt-[20px] pt-[7px] ripple">
                    Website Design
                  </h5>
                </div>
              )}
            </div>
            <button className="bg-palatinatePurple md:h-[44px] md:px-[17px] px-[8px] md:py-[12px] py-[6px] md:text-[17px] text-[10px] font-bold text-cultured mr-[7px] rounded-lg flex items-center">
              <Image
                src={ExportIcon}
                alt="export"
                className="mr-[5px] h-[15px] w-[18px]"
              />
              Export
            </button>
            <Link href={"/crm/deals/addNewDeals"}>
              <button className="bg-palatinatePurple md:h-[44px] md:px-[17px] px-[8px] md:py-[12px] py-[6px] md:text-[17px] text-[10px] font-bold text-cultured rounded-lg">
                + New Deal
              </button>
            </Link>
          </div>
          <div className="flex  justify-between md:mr-[59px]">
            <div className="hidden md:block">
              <SearchBox />
            </div>
            <div className="flex justify-end  w-full mt-[30px]">
              <ToggleSwitch
                check={isChecked}
                handleCheck={handleToggleChange}
              />
              <h5 className="md:text-[18px] text-[10px] font-bold ml-[18px] text-darkSilverColor">
                Only Companies I Manage
              </h5>
            </div>
          </div>
          <div className=" md:grid hidden md:grid-cols-6 grid-cols-1 gap-4 md:mt-[80px] mt-[14px]">
            <div className="2xl:text-[26px] text-[20px] font-bold md:py-[15px] py-[8px] flex md:justify-center items-center pl-[14px] md:pl-[0px] bg-palatinatePurple text-white rounded-lg">
              Opportunity
            </div>
            <div className="2xl:text-[26px] text-[20px]  font-bold py-[15px] flex justify-center items-center bg-palatinatePurple text-white rounded-lg">
              Proposal Sent
            </div>
            <div className="2xl:text-[26px] text-[20px]  font-bold py-[15px] flex justify-center items-center bg-palatinatePurple text-white rounded-lg">
              In Negotiation
            </div>
            <div className="2xl:text-[26px] text-[20px]  font-bold py-[15px] flex justify-center items-center bg-palatinatePurple text-white rounded-lg">
              Won
            </div>
            <div className="2xl:text-[26px] text-[20px]  font-bold py-[15px] flex justify-center items-center bg-palatinatePurple text-white rounded-lg">
              Lost
            </div>
            <div className="2xl:text-[26px] text-[20px]  font-bold py-[15px] flex justify-center items-center bg-palatinatePurple text-white rounded-lg">
              Delayed
            </div>
          </div>
          <div className="md:grid hidden grid-cols-6 gap-4 bg-chinesWhite p-[10px] mt-[17px] rounded-lg pb-14 mb-4">
            <div data-title="Opportunity">
              {filteredDeals &&
              filteredDeals.filter((deal) => deal.stage === "Opportunity")
                .map((deal ,key) => (
                  <ExpansionCard
                  logo={deal.company.logo}
                    key={deal.id}
                    description={deal.description}
                    dealNumber={key+1}
                    amount={deal.amount}
                    companyName={deal.company.name}
                  />
                ))}
                 <ExpansionCard
                  logo={Company1}
                    description="Description for item"
                    dealNumber={"1"}
                    amount={100}
                    companyName="Finance"
                  />

                 
                  
                  
            </div>
            <div data-title="Proposal Sent">
              {filteredDeals
                .filter((deal) => deal.stage === "Proposal Sent")
                .map((deal,key) => (
                  <ExpansionCard
                  logo={deal.company.logo}
                    key={deal.id}
                    description={deal.description}
                    dealNumber={key+1}
                    amount={deal.amount}
                    companyName={deal.company.name}
                  />
                ))}
                
                  
            </div>
            <div data-title="In Negotiation">
              {filteredDeals
                .filter((deal) => deal.stage === "In Negotiation")
                .map((deal,key) => (
                  <ExpansionCard
                  logo={deal.company.logo}
                    key={deal.id}
                    description={deal.description}
                    dealNumber={key+1}
                    amount={deal.amount}
                    companyName={deal.company.name}
                  />
                ))}
                 
                  
                  
            </div>
            <div data-title="Won">
              {filteredDeals
                .filter((deal) => deal.stage === "Won")
                .map((deal,key) => (
                  <ExpansionCard
                  logo={deal.company.logo}
                    key={deal.id}
                    description={deal.description}
                    dealNumber={key+1}
                    amount={deal.amount}
                    companyName={deal.company.name}
                  />
                ))}
                
                  
            </div>
            <div data-title="Lost">
              {filteredDeals
                .filter((deal) => deal.stage === "Lost")
                .map((deal , key) => (
                  <ExpansionCard
                  logo={deal.company.logo}
                    key={deal.id}
                    description={deal.description}
                    dealNumber={key+1}
                    amount={deal.amount}
                    companyName={deal.company.name}
                  />
                ))}
                
                  
                 
                  
            </div>
            <div data-title="Delayed">
              {filteredDeals
                .filter((deal) => deal.stage === "Delayed")
                .map((deal) => (
                  <ExpansionCard
                  logo={deal.company.logo}
                    key={deal.id}
                    description={deal.description}
                    dealNumber={deal.id}
                    amount={deal.amount}
                    companyName={deal.company.name}
                  />
                ))}
                 <ExpansionCard
                 logo={Company2}
                    description="Description for item"
                    dealNumber={"1"}
                    amount={100}
                    companyName="Finance"
                  />
                  
                  
            </div>
          </div>
          <div className=" md:hidden block mt-[14px] overflow-y-auto h-[100%] pe-2">
            <ExpansionPanel title="Opportunity">
              {filteredDeals
                .filter((deal) => deal.stage === "Opportunity")
                .map((deal) => (
                  <ExpansionCardMobile
                    key={deal.id}
                    logoSrc={Company1}
                    description={deal.description}
                    quantity={1}
                    price={deal.amount}
                    category={deal.company.name}
                  />
                ))}
            </ExpansionPanel>
            <ExpansionPanel title="Proposal Sent">
              {filteredDeals
                .filter((deal) => deal.stage === "Proposal Sent")
                .map((deal) => (
                  <ExpansionCardMobile
                    key={deal.id}
                    logoSrc={Company1}
                    description={deal.description}
                    quantity={1}
                    price={deal.amount}
                    category={deal.company.name}
                  />
                ))}
            </ExpansionPanel>
            <ExpansionPanel title="In Negotiation">
              {filteredDeals
                .filter((deal) => deal.stage === "In Negotiation")
                .map((deal) => (
                  <ExpansionCardMobile
                    key={deal.id}
                    logoSrc={Company1}
                    description={deal.description}
                    quantity={1}
                    price={deal.amount}
                    category={deal.company.name}
                  />
                ))}
            </ExpansionPanel>
            <ExpansionPanel title="Won">
              {filteredDeals
                .filter((deal) => deal.stage === "Won")
                .map((deal) => (
                  <ExpansionCardMobile
                    key={deal.id}
                    logoSrc={Company1}
                    description={deal.description}
                    quantity={1}
                    price={deal.amount}
                    category={deal.company.name}
                  />
                ))}
            </ExpansionPanel>
            <ExpansionPanel title="Lost">
              {filteredDeals
                .filter((deal) => deal.stage === "Lost")
                .map((deal) => (
                  <ExpansionCardMobile
                    key={deal.id}
                    logoSrc={Company1}
                    description={deal.description}
                    quantity={1}
                    price={deal.amount}
                    category={deal.company.name}
                  />
                ))}
            </ExpansionPanel>
            <ExpansionPanel title="Delayed">
              {filteredDeals
                .filter((deal) => deal.stage === "Delayed")
                .map((deal) => (
                  <ExpansionCardMobile
                    key={deal.id}
                    logoSrc={Company1}
                    description={deal.description}
                    quantity={1}
                    price={deal.amount}
                    category={deal.company.name}
                  />
                ))}
            </ExpansionPanel>
          </div>
        </div>
      }
    />
  );
};

export default Index;
