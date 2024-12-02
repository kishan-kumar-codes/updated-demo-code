"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import LayoutView from "../layout/page";
import SearchBox from "../component/searchBox/page";
import TabNavigation from "../component/tabNavigation";
import FilterIcon from "../../../assets/images/filter-icon.svg";
import ExportIcon from "../../../assets/images/export-icon.svg";
import DownArrow from "../../../assets/images/down-arrow.svg";
import SortIcon from "../../../assets/images/sort-icon.svg";
// import AddNewContacts from "./addNewContact";
import FilterContacts from "./filterContacts";
import ContactCard from "../component/contactCard";
import Link from "next/link";
import { useClientMediaQuery } from "../../../utils/srchooksuseClientMediaQuery";
import { useRouter } from "next/navigation";
import DesktopContact from "../../../components/crmDesktop/contacts/index";
import { useSession } from "next-auth/react";

const Contacts: React.FC = () => {
  const [addNewCompany, setAddNewCompany] = useState(false);
  const [showFilterCard, setShowFilterCard] = useState(false);
  const [showSorting, setShowSorting] = useState(false);
  const isMobile = useClientMediaQuery("(max-width: 769px)");
  const { data: session, status } = useSession();
  const [contactsData, setContactsData] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState(null);

  const router = useRouter();

  console.log(" filteredContacts", filteredContacts);

  function navigation() {
    router.push("/crm/contacts/addNewContact");
  }

  useEffect(() => {
    if (session?.user?.id) {
      console.log("Session object:", session);
      getAllContacts(); // Call only when session.user.id is available
    }
  }, [session?.user?.id]);

  const getAllContacts = async () => {
    const userId = session?.user?.id;
    const response = await fetch("/api/contact/get-contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Cache-Control": "no-cache",
      },
      body: JSON.stringify({ userId }), // Pass the userId in the request body
    });
    console.log("contacts", response);
    const contacts = await response.json();
    console.log("contacts:::::------", contacts);
    setContactsData(contacts);
    setFilteredContacts(contacts);
    extractUniqueTags(contacts);
    setLoading(false);
  };

  const extractUniqueTags = (contacts) => {
    const allTags = contacts.reduce((acc, contact) => {
      if (contact.tag) {
        acc.push(contact.tag); // Push the tag string into the array
      }
      return acc;
    }, []);
    const uniqueTags = [...new Set(allTags)]; // Get unique tags
    setTags(uniqueTags); // Set unique tags to state
  };

  const handleSortChange = (type) => {
    let sortedContacts;
    if (type === "firstName") {
      sortedContacts = [...filteredContacts].sort((a, b) =>
        a.firstName.localeCompare(b.firstName)
      );
    } else if (type === "lastName") {
      sortedContacts = [...filteredContacts].sort((a, b) =>
        a.lastName.localeCompare(b.lastName)
      );
    }
    setFilteredContacts(sortedContacts);
  };
  // function setShowSorting(){}

  // return addNewCompany ? (
  //   <AddNewContacts />
  // ) : (
  return (
    <LayoutView
      Childrens={
        <div className="relative h-full w-full bg-[#F4F4F4]">
          {showFilterCard && (
            <FilterContacts setShowFilterCard={setShowFilterCard} />
          )}
          <div className=" h-[65%]">
            <div className="w-full lg:hidden mt-4 flex px-[20px]">
              <TabNavigation />
            </div>

            <div className="mt-4 px-[20px] md:hidden">
              <SearchBox Component={"Contact"} />
            </div>

            <div className="section relative flex w-full justify-between mt-[16px] px-[20px]">
              <button
                onClick={() => setShowFilterCard(true)}
                className={`ml-[4px] ${showFilterCard ? "hidden" : ""} md:hidden`}>
                <Image src={FilterIcon} alt="filter" />
              </button>
              {/* {showFilterCard && (
                <FilterContacts setShowFilterCard={setShowFilterCard} />
              )} */}

              <div className="w-full flex justify-end text-[10px] font-bold font-arial text-cultured md:pr-16">
                <div className="relative flex items-center mr-[14px]  ">
                  <Image
                    onClick={() => setShowSorting(!showSorting)}
                    src={DownArrow}
                    alt="sort"
                    className="mr-[5px] md:w-[14px] md:h-[7px]"
                  />
                  <h5
                    onClick={() => setShowSorting(!showSorting)}
                    className="text-palatinatePurple text-[10px] font-bold mr-[5px] md:text-[17px]">
                    SORT BY
                  </h5>
                  <Image
                    onClick={() => setShowSorting(!showSorting)}
                    src={SortIcon}
                    alt="sort "
                    className="md:w-[22px] md:h-[12px]"
                  />
                  {showSorting && (
                    <div className="absolute w-[137px] z-[9] text-[10px] top-7 left-0 text-palatinatePurple bg-white border-[1px] border-palatinatePurple rounded-md pb-3 md:text-[18px] md:w-[214px] md:top-11 ">
                      <h5
                        onClick={() => handleSortChange("lastName")}
                        className="mt-[7px] pl-[17px] px-[3px] ripple">
                        Last name ascending
                      </h5>
                      <h5
                        onClick={() => handleSortChange("firstName")}
                        className="mt-[7px] pl-[17px] px-[3px] ripple">
                        First name ascending
                      </h5>
                      <h5 className="mt-[7px] pl-[17px] px-[3px] ripple">
                        Last seen ascending
                      </h5>
                    </div>
                  )}
                </div>
                <button className="px-[10px] py-[7px] bg-palatinatePurple flex items-center text-white mr-[5px] rounded-lg  md:text-[17px]">
                  <Image src={ExportIcon} alt="export" className="mr-[5px]" />
                  Export
                </button>
                <button
                  onClick={() => navigation()}
                  className="px-[6px] py-[7px] bg-palatinatePurple text-white rounded-lg  md:text-[17px]">
                  + New Contact
                </button>
              </div>
            </div>

            <div className="flex">
              <div className="hidden md:flex md:w-[383px] md:flex-col gap-4 mt-[35px]">
                <span className="w-full mx-auto pl-[30px]">
                  <SearchBox Component={""} />
                </span>
                <FilterContacts setShowFilterCard={setShowFilterCard} />
              </div>
              <div className="mt-[35px] h-full overflow-y-auto w-full flex-1 md:pl-3 2xl:pr-32 ">
                {loading ? (
                  "Loading..."
                ) : filteredContacts.length > 0 ? (
                  filteredContacts.map((contact, index) => (
                    <Link
                      key={index}
                      href={{
                        pathname: "/crm/contacts/detailContact",
                        query: { name: "Contact" },
                      }}>
                      <ContactCard
                        name={`${contact.firstName || "Unknown"} ${contact.lastName || ""}`}
                        role={contact.title || "No Title"}
                        notes={contact.notes || 0} // Assuming `notes` might be part of the data
                        tags={contact.tag ? [contact.tag] : []} // Wrapping single tag in an array
                        daysAgo={contact.daysAgo || "2"} // Adjust with actual field if available
                        logo={contact.logo?.[0] || contact.company?.logo || ""}
                      />
                    </Link>
                  ))
                ) : (
                  <p>No contacts found</p>
                )}

                <Link
                  href={{
                    pathname: "/crm/contacts/detailContact",
                    query: { name: "Contact" },
                  }}>
                  <ContactCard
                    name="John Doe"
                    role="CEO at"
                    notes={3}
                    tags={["football-fun", "musician"]}
                    daysAgo="6"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Contacts;
