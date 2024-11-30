import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Layout from "../layout";
import Link from "next/link";
import Company1 from "../../../assets/images/companies-1.png";
import Company2 from "../../../assets/images/companies-2.png";
import CompaniesCard from "../components/companiesCard";
import AddNewCompany from "./addNewCompany";
import FilterCompanies from "./filterCompanies";
import ExportIcon from "../../../assets/images/export-icon.svg";
import { useClientMediaQuery } from "../../../utils/srchooksuseClientMediaQuery";
import TabNavigation from "../components/tabNavigation";
import SearchBox from "../components/searchBoxMobile/page";
import Footer from "../components/footer";
import FilterCompaniesMobile from "../components/filterCompanies";
import FilterIcon from "../../../assets/images/filter-icon.svg";
import { useSession } from "next-auth/react";
import { NextPageContext } from "next";

const Companies: React.FC = () => {
  const [isAddNewCompany, setIsAddNewCompany] = useState<boolean>(false);
  const [showFilterCard, setShowFilterCard] = useState<boolean>(false);
  const router = useRouter();
  const { data: session, status } = useSession();
  // console.log("session?.user?.id", session?.user?.id);
  console.log("session?.user?.id", session);
  // const [token, setToken] = useState(session?.user?.id);
  const [companiesList, setCompaniesList] = useState([]);
  const [dealsdata, setDealsdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [contactsData, setContactsData] = useState([]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedBusinessType, setSelectedBusinessType] = useState<
    string | null
  >(null);

  // const [formData, setFormData] = useState({
  //    token: session?.user?.accessToken,
  //   userId:session?.user?.id,
  // });

  function setAddNewCompany() {
    // router.push("/crmDesktop/companies/addNewCompany");
    router.push("crm/companies/newCompanyForm");
  }
  useEffect(() => {
    if (session?.user?.id) {
      getAllData(); // Fetch all data in one go
    }
  }, [session?.user?.id]);

  const getAllData = async () => {
    const userId = session?.user?.id;
    if (!userId) {
      console.error("No user ID found in session.");
      return;
    }

    try {
      setloading(true);
      // Fetch all companies, contacts, and deals concurrently
      const [companiesResponse, contactsResponse, dealsResponse] =
        await Promise.all([
          fetch("/api/companies/get-companies", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({ userId }),
          }),
          fetch("/api/contact/get-contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({ userId }),
          }),
          fetch("/api/deals/get-deals", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({ userId }),
          }),
        ]);

      // Parse the responses
      const companies = await companiesResponse.json();
      const contacts = await contactsResponse.json();
      const deals = await dealsResponse.json();
      console.log(companies, contacts, deals);
      // Process the companies to add contact and deal counts
      const enrichedCompanies = companies.map((company) => {
        // Count contacts and deals associated with the current company
        const contactCount = contacts.filter(
          (contact) => contact.company.id === company.id
        ).length;
        const dealCount = deals.filter(
          (deal) => deal.company.id === company.id
        ).length;

        // Add the counts to the company object
        return {
          ...company,
          contactCount,
          dealCount,
        };
      });

      console.log("enrichedCompanies", enrichedCompanies);
      // Set the enriched company list
      setCompaniesList(enrichedCompanies);
      console.log(
        "Enriched Companies with Contact and Deal Counts:",
        enrichedCompanies
      );
      setloading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filteredCompanies = companiesList.filter((company) => {
    const matchesSize =
      selectedSize === null ||
      (company.size &&
        company.size.toLowerCase() === selectedSize.toLowerCase());
    const matchesBusinessType =
      selectedBusinessType === null ||
      (company.business &&
        company.business.name.toLowerCase() ===
          selectedBusinessType.toLowerCase());

    return matchesSize && matchesBusinessType;
  });

  return (
    <Layout
      Childrens={
        <>
          <div className="relative">
            <div className="w-full flex flex-col justify-end items-end text-[10px] font-bold font-arial mt-[18px] mb-[26px] pr-10 ">
              <div className="w-full md:hidden mt-4 px-[15px] flex">
                <TabNavigation />
              </div>
              <div className="mt-4 px-[15px] md:hidden block">
                <SearchBox Component="" />
              </div>
              <div className="relative flex justify-between mt-[15px] px-[15px] md:px-[0px]">
                <button
                  onClick={() => setShowFilterCard(true)}
                  className="ml-[4px] inline-block md:hidden">
                  <Image src={FilterIcon} alt="filter" />
                </button>
                {showFilterCard && (
                  <div className="md:hidden">
                    <FilterCompaniesMobile
                      setShowFilterCard={setShowFilterCard}
                      setSelectedSize={setSelectedSize}
                      setSelectedBusinessType={setSelectedBusinessType}
                    />
                  </div>
                )}

                <div className="flex ">
                  <button className="px-[10px] py-[7px] bg-palatinatePurple flex items-center text-white mr-[5px] md:text-[17px] text-[10px] font-bold rounded-lg">
                    <Image src={ExportIcon} alt="export" className="mr-[5px]" />
                    Export
                  </button>
                  <Link href="/crm/companies/newCompanyForm">
                    <button
                      onClick={() => setAddNewCompany()}
                      className="px-[10px] md:text-[17px] text-[10px] font-bold py-[7px] bg-palatinatePurple text-white rounded-lg">
                      + New Company
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex h-full mb-[60px] md:mb-[0] flex-1 2xl:px-[100px] px-[15px]">
              <div className="sidebar md:block hidden sm: h-full 2xl:w-[413px]  w-[300px]">
                <FilterCompanies
                  setSelectedSize={setSelectedSize}
                  setSelectedBusinessType={setSelectedBusinessType}
                />
              </div>
              <div className="flex-1 overflow-y-auto">
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-3 overflow-y-scroll">
                  {
                    filteredCompanies.length > 0 ? (
                      filteredCompanies.map((data, index) => (
                        <div key={index} className="">
                          <CompaniesCard
                            comLogo={data.logo}
                            comName={data.name}
                            comDesc={data?.business?.name}
                            compContacts={data?.contactCount}
                            compDeals={data?.dealCount}
                          />
                        </div>
                      ))
                    ) : (
                      // "No companies match your criteria"
                      // <p>Loading</p>
                      <>
                        <div className="w-full mx-auto ">
                          <CompaniesCard
                            comLogo={Company1}
                            comName={"Hanover Attorney At Law"}
                            comDesc={"Legal Services"}
                            compContacts={17}
                            compDeals={7}
                          />
                        </div>
                      </>
                    )
                    //   <>
                    //   <div className="w-full mx-auto ">
                    //     <CompaniesCard
                    //       comLogo={Company1}
                    //       comName={"Hanover Attorney At Law"}
                    //       comDesc={"Legal Services"}
                    //       compContacts={17}
                    //       compDeals={7}
                    //     />
                    //   </div>
                    //   <div className="w-full mx-auto">
                    //     <CompaniesCard
                    //       comLogo={Company2}
                    //       comName={"Handyman Repair Service"}
                    //       comDesc={"Legal Services"}
                    //       compContacts={17}
                    //       compDeals={7}
                    //     />
                    //   </div>
                    //   <div className="w-full mx-auto">
                    //     <CompaniesCard
                    //       comLogo={Company1}
                    //       comName={"Handyman Repair Service"}
                    //       comDesc={"Legal Services"}
                    //       compContacts={17}
                    //       compDeals={7}
                    //     />
                    //   </div>
                    //   <div className="w-full mx-auto">
                    //     <CompaniesCard
                    //       comLogo={Company2}
                    //       comName={"Hanover Attorney At Law"}
                    //       comDesc={"Legal Services"}
                    //       compContacts={17}
                    //       compDeals={7}
                    //     />
                    //   </div>
                    //   <div className="w-full mx-auto">
                    //     <CompaniesCard
                    //       comLogo={Company1}
                    //       comName={"Handyman Repair Service"}
                    //       comDesc={"Legal Services"}
                    //       compContacts={17}
                    //       compDeals={7}
                    //     />
                    //   </div><div className="w-full mx-auto">
                    //     <CompaniesCard
                    //       comLogo={Company2}
                    //       comName={"Handyman Repair Service"}
                    //       comDesc={"Legal Services"}
                    //       compContacts={17}
                    //       compDeals={7}
                    //     />
                    //   </div><div className="w-full mx-auto">
                    //     <CompaniesCard
                    //       comLogo={Company1}
                    //       comName={"Handyman Repair Service"}
                    //       comDesc={"Legal Services"}
                    //       compContacts={17}
                    //       compDeals={7}
                    //     />
                    //   </div><div className="w-full mx-auto">
                    //     <CompaniesCard
                    //       comLogo={Company2}
                    //       comName={"Handyman Repair Service"}
                    //       comDesc={"Legal Services"}
                    //       compContacts={17}
                    //       compDeals={7}
                    //     />
                    //   </div><div className="w-full mx-auto">
                    //     <CompaniesCard
                    //       comLogo={Company1}
                    //       comName={"Handyman Repair Service"}
                    //       comDesc={"Legal Services"}
                    //       compContacts={17}
                    //       compDeals={7}
                    //     />
                    //   </div><div className="w-full mx-auto">
                    //     <CompaniesCard
                    //       comLogo={Company2}
                    //       comName={"Handyman Repair Service"}
                    //       comDesc={"Legal Services"}
                    //       compContacts={17}
                    //       compDeals={7}
                    //     />
                    //   </div><div className="w-full mx-auto">
                    //     <CompaniesCard
                    //       comLogo={Company1}
                    //       comName={"Handyman Repair Service"}
                    //       comDesc={"Legal Services"}
                    //       compContacts={17}
                    //       compDeals={7}
                    //     />
                    //   </div>
                    //   <div className="w-full mx-auto">
                    //     <CompaniesCard
                    //       comLogo={Company2}
                    //       comName={"Handyman Repair Service"}
                    //       comDesc={"Legal Services"}
                    //       compContacts={17}
                    //       compDeals={7}
                    //     />
                    //   </div>
                    // </>
                  }
                </div>
              </div>
            </div>
            <div className="fixed md:hidden block  bottom-0 z-50 left-0">
              <Footer />
            </div>
          </div>
        </>
      }
    />
  );
};

export default Companies;
