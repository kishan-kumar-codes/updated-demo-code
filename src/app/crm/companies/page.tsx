"use client";

import LayoutView from "../layout/page";
import SearchBox from "../component/searchBox/page";
import TabNavigation from "../component/tabNavigation";
import FilterIcon from "@/assets/images/filter-icon.svg";
import ExportIcon from "@/assets/images/export-icon.svg";
import Company1 from "@/assets/images/companies-1.png";
import Company2 from "@/assets/images/companies-2.png";
import Image from "next/image";
import CompaniesCard from "../component/companiesCard";
// import AddNewCompany from "./newCompanyForm";
import { useEffect, useState } from "react";
import FilterCompanies from "./filterCompanies";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { StaticImageData } from "next/image";

interface Business {
  name: string;
}

interface Company {
  id: string;
  size?: string;
  business?: Business;
  logo?: StaticImageData; // Assuming 'logo' is a string (URL or file path)
  name: string; // Assuming 'name' is always required
  contactCount?: number;
  dealCount?: number;
  accountManager?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  phoneNumber?: string;
  linkedin?: string;
  website?: string;
}

const Companies: React.FC = () => {
  const [isAddNewCompany, setIsAddNewCompany] = useState<boolean>(false);
  const [showFilterCard, setShowFilterCard] = useState<boolean>(false);
  const router = useRouter();
  const { data: session, status } = useSession();
  // console.log("session?.session[0]", session?.session[0]);
  console.log("session?.session[0]", session);

  // const [token, setToken] = useState(session?.session[0]);
  const [companiesList, setCompaniesList] = useState<Company[]>([]);
  const [dealsdata, setDealsdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [contactsData, setContactsData] = useState([]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedBusinessType, setSelectedBusinessType] = useState<
    string | null
  >(null);

  function setAddNewCompany() {
    // router.push("/crmDesktop/companies/addNewCompany");
    router.push("companies/newCompanyForm");
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
      console.log("Here is the company dataa");
      console.log(companies);
      console.log("Here is the contact dataa");
      console.log(contacts);
      console.log("Here is the deals dataa");
      console.log(deals);

      // Process the companies to add contact and deal counts
      const enrichedCompanies = companies.map((company: any) => {
        // Count contacts and deals associated with the current company
        const contactCount = contacts.filter(
          (contact: any) => contact.company.id === company.id
        ).length;
        const dealCount = deals.filter(
          (deal: any) => deal.company.id === company.id
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
    console.log("This is matched businessType", company);
    const matchesSize =
      selectedSize === null ||
      (company.size &&
        company.size.toLowerCase() === selectedSize.toLowerCase());
    const matchesBusinessType =
      selectedBusinessType === null ||
      (company.business &&
        company.business.toString().toLowerCase() ===
          selectedBusinessType.toLowerCase());
    console.log("This is matched businessType 2", matchesBusinessType);

    return matchesSize && matchesBusinessType;
  });

  console.log(">>>>>>SADSADASDSAD", filteredCompanies);

  const exportToCSV = () => {
    // Define CSV headers
    const headers = [
      "ID",
      "Name",
      "Account_Manager",
      "Business",
      "Address",
      "City",
      "State",
      "Zip_Code",
      "Phone_Number",
      "LinkedIn",
      "Website",
      "Size",
    ];

    // Convert company data to CSV format
    const companyRows = filteredCompanies.map((company) => [
      company.id || "-",
      company.name || "-",
      company.accountManager || "-",
      company.business || "-",
      company.address || "-",
      company.city || "-",
      company.state || "-",
      company.zipCode || "-",
      company.phoneNumber || "-",
      company.linkedin || "-",
      company.website || "-",
      company.size || "-",
    ]);

    // Combine headers and data
    const csvContent = [
      headers.join(","),
      ...companyRows.map((row) => row.join(",")),
    ].join("\n");

    // Create blob and download link
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", "companies.csv");
    link.style.visibility = "hidden";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <LayoutView
      Childrens={
        <div className="relative h-full px-[20px] w-full md:px-0 bg-[#F4F4F4] md:bg-white">
          {showFilterCard && (
            <FilterCompanies
              setShowFilterCard={setShowFilterCard}
              setSelectedSize={setSelectedSize}
              setSelectedBusinessType={setSelectedBusinessType}
            />
          )}
          <div className=" overflow-y-scroll h-[93%]">
            <div className="w-full lg:hidden  mt-4 flex">
              <TabNavigation />
            </div>
            <div className="mt-4 w-full md:hidden md:mt-0">
              <SearchBox Component={""} />
            </div>

            <div className="section relative flex w-full justify-between mt-[16px]">
              <button
                onClick={() => setShowFilterCard(true)}
                className={`ml-[4px] md:hidden ${showFilterCard ? "hidden" : ""}`}>
                <Image src={FilterIcon} alt="filter" />
              </button>

              {/* {showFilterCard && (
                <FilterCompanies setShowFilterCard={setShowFilterCard} />
              )} */}

              <div className="w-full flex justify-end text-[10px] font-bold font-arial text-cultured md:pr-16">
                <button
                  onClick={exportToCSV}
                  className="px-[6px] py-[7px] lg:py-2 bg-palatinatePurple flex items-center text-white mr-[5px] md:text-[17px] rounded-lg">
                  <Image src={ExportIcon} alt="export" className="mr-[5px]" />
                  Export
                </button>
                <button
                  onClick={() => setAddNewCompany()}
                  className="px-[6px] py-[7px] md:text-[17px] bg-palatinatePurple text-white rounded-lg">
                  + New Company
                </button>
              </div>
            </div>

            <div className="flex">
              <div className="hidden md:flex md:w-[383px] md:flex-col gap-4 md:justify-center">
                {/* <span className="w-full mx-auto pl-[30px]">
                  <SearchBox Component={""} />
                </span> */}

                <FilterCompanies
                  setShowFilterCard={setShowFilterCard}
                  setSelectedSize={setSelectedSize}
                  setSelectedBusinessType={setSelectedBusinessType}
                />
              </div>
              <div
                className="w-full flex-1 grid gap-4 p-4"
                style={{
                  gridTemplateColumns: "repeat(auto-fit, minmax(308px, 1fr))",
                }}>
                {filteredCompanies.length > 0 ? (
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
                  <>
                    <div className="text-[#6D6D6D] font-bold ">
                      No compaines to show{" "}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Companies;
