import ExportIcon from "../../../assets/images/export-icon.svg";
import Layout from "../layout";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SearchBox from "../components/searchBox";
import EditIcon from "../../../assets/images/edit-icon.svg";
import ToggleSwitch from "../components/toggleSwitch";
import Linkedin from "../../../assets/images/D-linkedin.svg";
import DownArrow from "../../../assets/images/D-down-arrow.svg";
import SortingIcon from "../../../assets/images/D-sorting-icon.svg";
import Search from "../../../assets/images/D-search.svg";
import Timer from "../../../assets/images/timer-icon.svg";
import Stats from "../../../assets/images/stats-icon.svg";
import Tag from "../../../assets/images/tag-icon.svg";
import DualUser from "../../../assets/images/dual-user.svg";
import ContactCard from "../components/contactCard";
import ContactCardSample from "@/app/crm/component/contactCard";
import Link from "next/link";
import SearchBoxMobile from "../components/searchBoxMobile/page";
import TabNavigation from "../components/tabNavigation";
import FilterContacts from "../components/filterContacts";
import FilterIcon from "../../../assets/images/filter-icon.svg";
import Footer from "../components/footer";
import { useSession } from "next-auth/react";

const Contacts: React.FC = () => {
  const [isAddNewCompany, setIsAddNewCompany] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();
  const [showSorting, setShowSorting] = useState(false);
  const [contactsData, setContactsData] = useState([]);
  const [sortedBy, setSortedBy] = useState("");
  const [showFilterCard, setShowFilterCard] = useState(false);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);

  function setAddNewCompany() {
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
    console.log('contacts',response)
    const contacts = await response.json();
    console.log('contacts',contacts)
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

  // Handle filtering by tag
  const handleTagClick = (tag) => {
    setSelectedTag(tag); // Set selected tag
    if (tag === "") {
      setFilteredContacts(contactsData); // If no tag selected, show all contacts
    } else {
      const filtered = contactsData.filter(
        (contact) => contact.tag === tag // Directly compare the tag strings
      );
      setFilteredContacts(filtered); // Set filtered contacts based on selected tag
    }
  };

  const handleSort = (criteria: string) => {
    let sortedContacts;
    if (criteria === "lastNameAsc") {
      sortedContacts = [...contactsData].sort((a, b) =>
        a.lastName.localeCompare(b.lastName)
      );
    } else if (criteria === "firstNameAsc") {
      sortedContacts = [...contactsData].sort((a, b) =>
        a.firstName.localeCompare(b.firstName)
      );
    }
    setFilteredContacts(sortedContacts);
    setSortedBy(criteria);
    setShowSorting(false);
  };

  return (
    <Layout
      Childrens={
        <>
          <div className="w-full text-[10px] font-bold font-arial mt-[18px] 2xl:pr-[123px] pr-[20px] mb-[26px]">
            <div className="md:hidden w-full mt-4 flex px-[20px]">
              <TabNavigation />
            </div>

            <div className="md:hidden mt-4 px-[20px]">
              <SearchBoxMobile Component={"Contact"} />
            </div>

            <div className="flex justify-between md:justify-end mt-[12px]">
              <div className="block md:hidden ml-[20px] relative">
                <button
                  onClick={() => setShowFilterCard(true)}
                  className="ml-[4px] ">
                  <Image src={FilterIcon} alt="filter" />
                </button>
                {showFilterCard && (
                  <FilterContacts setShowFilterCard={setShowFilterCard} />
                )}
              </div>
              <div className="flex md:justify-end">
                <div className="relative flex justify-end items-center mr-[27px]">
                  <div
                    className="relative flex items-center cursor-pointer"
                    onClick={() => setShowSorting(!showSorting)}>
                    <Image src={DownArrow} alt="Sort" height={18} width={18} />
                    <h5 className="md:text-[18px] text-[10px] text-palatinatePurple font-bold mx-[8px]">
                      SORT BY
                    </h5>
                    <Image
                      src={SortingIcon}
                      alt="Sort Icon"
                      className="h-[10px] w-[10px] md:h-[18px] md:w-[18px]"
                    />
                  </div>
                  {showSorting && (
                    <div className="md:w-[214px] w-[137px] md:h-[129px] z-50 flex flex-col justify-around font-normal absolute top-12 border rounded-2xl border-palatinatePurple bg-white">
                      <h5
                        onClick={() => handleSort("lastNameAsc")}
                        className="text-palatinatePurple md:text-[18px] px-3 py-[4px] ripple cursor-pointer">
                        Last name ascending
                      </h5>
                      <h5
                        onClick={() => handleSort("firstNameAsc")}
                        className="text-palatinatePurple md:text-[18px] px-3 py-[4px] font-normal ripple cursor-pointer">
                        First name ascending
                      </h5>
                      <h5 className="text-palatinatePurple md:text-[18px] px-3 py-[4px] font-normal ripple cursor-pointer">
                        Last seen ascending
                      </h5>
                    </div>
                  )}
                </div>

                <button className="px-[10px] py-[7px] bg-palatinatePurple flex items-center text-white mr-[5px] md:text-[17px] font-bold rounded-lg">
                  <Image src={ExportIcon} alt="Export" className="mr-[5px]" />
                  Export
                </button>
                <Link href={"/crm/contacts/addNewContact"}>
                  <button
                    onClick={() => setAddNewCompany()}
                    className="px-[10px] md:text-[17px] font-bold py-[7px] bg-palatinatePurple text-white rounded-lg">
                    + New Contact
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-1 mb-[60px] md:mb-[0px] ">
            <div className="relative hidden md:block 2xl:w-[366px] w-[320px] h-screen overflow-y-auto 2xl:pl-[42px] px-[20px] ">
              <div className="w-full">
                <div className="bg-white flex rounded-3xl px-[17px] py-[9px]">
                  <Image src={Search} alt="Search" />
                  <input
                    className="w-full h-[33px] ml-[10px]"
                    placeholder="Search"
                  />
                </div>
              </div>
              <div className="flex-1 overflow-y-auto">
                <div className="flex mt-[47px] items-center">
                  <Image
                    src={Timer}
                    className="h-[44px] w-[44px] mr-[10px]"
                    alt="Last Seen"
                  />
                  <h5 className="text-[20px] font-bold text-darkSilverColor">
                    LAST SEEN
                  </h5>
                </div>
                <div className="ml-[60px]">
                  <h5 className="text-[20px] font-bold text-darkSilverColor my-[23px]">
                    Today
                  </h5>
                  <h5 className="text-[20px] font-bold text-darkSilverColor my-[23px]">
                    This Week
                  </h5>
                  <h5 className="text-[20px] font-bold text-darkSilverColor my-[23px]">
                    Before This Week
                  </h5>
                  <h5 className="text-[20px] font-bold text-darkSilverColor my-[23px]">
                    Before This Month
                  </h5>
                  <h5 className="text-[20px] font-bold text-darkSilverColor my-[23px]">
                    Before Last Month
                  </h5>
                </div>
                <div className="flex mt-[47px] items-center">
                  <Image
                    src={Stats}
                    className="h-[44px] w-[44px] mr-[10px]"
                    alt="Status"
                  />
                  <h5 className="text-[20px] font-bold text-darkSilverColor">
                    STATUS
                  </h5>
                </div>
                <div className="ml-[60px]">
                  <h5 className="text-[20px] font-bold text-darkSilverColor my-[23px] flex items-center">
                    Cold{" "}
                    <div className="h-[15px] w-[15px] rounded-full bg-palatinatePurple ml-[11px]"></div>
                  </h5>
                  <h5 className="text-[20px] font-bold text-darkSilverColor my-[23px] flex items-center">
                    Warm{" "}
                    <div className="h-[15px] w-[15px] rounded-full bg-blackOlive ml-[11px]"></div>
                  </h5>
                  <h5 className="text-[20px] font-bold text-darkSilverColor my-[23px] flex items-center">
                    Hot{" "}
                    <div className="h-[15px] w-[15px] rounded-full bg-darkSilverColor ml-[11px]"></div>
                  </h5>
                  <h5 className="text-[20px] font-bold text-darkSilverColor my-[23px] flex items-center">
                    In Contract{" "}
                    <div className="h-[15px] w-[15px] rounded-full bg-limeGreen ml-[11px]"></div>
                  </h5>
                </div>
                <div className="flex mt-[47px] items-center">
                  <Image
                    src={Tag}
                    className="h-[44px] w-[44px] mr-[10px]"
                    alt="Tag"
                  />
                  <h5 className="text-[20px] font-bold text-darkSilverColor">
                    TAG{" "}
                    {selectedTag && ( // Only show the "clear" button if a tag is selected
                      <button
                        className="ml-2 text-sm text-blue-500  cursor-pointer"
                        onClick={() => handleTagClick("")}>
                        X
                      </button>
                    )}
                  </h5>
                </div>
                <div className="ml-[60px]">
                  {tags.length > 0 ? (
                    tags.map((tag, index) => (
                      <button
                        key={index}
                        onClick={() => handleTagClick(tag)}
                        className={`block my-[10px] mx-[5px] px-[12px] py-[9px] rounded-lg text-[15px] font-bold text-white ${
                          index % 2 === 0
                            ? "bg-palatinatePurple"
                            : "bg-PhilippineGray"
                        }`}>
                        {tag}
                      </button>
                    ))
                  ) : (
                    <p>No tags available</p>
                  )}
                  {/* <button className="block my-[23px] px-[12px] py-[9px] rounded-lg text-[15px] font-bold text-white bg-PhilippineGray">
                    football-fun
                  </button>
                  <button className="block my-[23px] px-[12px] py-[9px] rounded-lg text-[15px] font-bold text-white bg-palatinatePurple">
                    musician
                  </button>
                  <button className="block my-[23px] px-[12px] py-[9px] rounded-lg text-[15px] font-bold text-white bg-PhilippineGray">
                    musician
                  </button>
                  <button className="block my-[23px] px-[12px] py-[9px] rounded-lg text-[15px] font-bold text-white bg-palatinatePurple">
                    football-fun
                  </button>
                  <button className="block my-[23px] px-[12px] py-[9px] rounded-lg text-[15px] font-bold text-white bg-PhilippineGray">
                    musician
                  </button>
                  <button className="block my-[23px] px-[12px] py-[9px] rounded-lg text-[15px] font-bold text-white bg-PhilippineGray">
                    musician
                  </button> */}
                </div>
                <div className="flex mt-[47px] items-center">
                  <Image
                    src={DualUser}
                    className="h-[44px] w-[44px] mr-[10px]"
                    alt="Account Manager"
                  />
                  <h5 className="text-[20px] font-bold text-darkSilverColor">
                    ACCOUNT MANAGER
                  </h5>
                </div>
                <div className="ml-[60px]">
                  <h5 className="text-[20px] font-bold text-darkSilverColor my-[23px] flex items-center">
                    Me
                  </h5>
                </div>
              </div>
            </div>
            <div className="flex-1 2xl:pr-[123px] pr-[20px] ml-[22px] ">
              {loading ? (
                "Loading..."
              ) : filteredContacts.length > 0 ? (
                filteredContacts.map((contact, index) => (
                  <ContactCard key={index} contact={contact} />
                ))
              ) : (
                // <p>No contacts found</p>
                <>
                 <Link
                    href={{
                      pathname: "/crm/contacts/detailContact",
                      query: { name: "Contact" },
                    }}>
                    <ContactCardSample
                      name="John Doe"
                      role="CEO at"
                      notes={3}
                      tags={["football-fun", "musician"]}
                      daysAgo="6"
                    />
                  </Link>
                </>
                // <>
                //  <Link
                //     href={{
                //       pathname: "/crm/contacts/detailContact",
                //       query: { name: "Contact" },
                //     }}>
                //     <ContactCardSample
                //       name="John Doe"
                //       role="CEO at"
                //       notes={3}
                //       tags={["football-fun", "musician"]}
                //       daysAgo="6"
                //     />
                //   </Link>
                //    <Link
                //     href={{
                //       pathname: "/crm/contacts/detailContact",
                //       query: { name: "Contact" },
                //     }}>
                //     <ContactCardSample
                //       name="John Doe"
                //       role="CEO at"
                //       notes={3}
                //       tags={["football-fun", "musician"]}
                //       daysAgo="6"
                //     />
                //   </Link>
                //   <Link
                //     href={{
                //       pathname: "/crm/contacts/detailContact",
                //       query: { name: "Contact" },
                //     }}>
                //     <ContactCardSample
                //       name="John Doe"
                //       role="CEO at"
                //       notes={3}
                //       tags={["football-fun", "musician"]}
                //       daysAgo="6"
                //     />
                //   </Link>
                //   <Link
                //     href={{
                //       pathname: "/crm/contacts/detailContact",
                //       query: { name: "Contact" },
                //     }}>
                //     <ContactCardSample
                //       name="John Doe"
                //       role="CEO at"
                //       notes={3}
                //       tags={["football-fun", "musician"]}
                //       daysAgo="6"
                //     />
                //   </Link>
                //   <Link
                //     href={{
                //       pathname: "/crm/contacts/detailContact",
                //       query: { name: "Contact" },
                //     }}>
                //     <ContactCardSample
                //       name="John Doe"
                //       role="CEO at"
                //       notes={3}
                //       tags={["football-fun", "musician"]}
                //       daysAgo="6"
                //     />
                //   </Link>
                // </>
                
              )}
            </div>
          </div>
          <div className="fixed md:hidden block  bottom-0 z-50 left-0">
            <Footer />
          </div>
        </>
      }
    />
  );
};

export default Contacts;
