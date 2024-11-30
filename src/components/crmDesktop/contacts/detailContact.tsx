import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Layout from "../layout"
import SearchBox from "../components/searchBox";
import ToggleSwitch from "../components/toggleSwitch";
import DownArrow from "../../../assets/images/D-down-arrow.svg";
import EditColorIcon from "../../../assets/images/edit-color-icon.svg";
import EditColorIconMobile from "../../../assets/images/edit-icon.svg";
import SortingIcon from "../../../assets/images/D-sorting-icon.svg";
import ExportIcon from "../../../assets/images/export-icon.svg";
import EditIcon from "../../../assets/images/edit-icon.svg";
import Linkedin from "../../../assets/images/D-linkedin.svg";
import SearchBoxMobile from "../components/searchBoxMobile/page";
import Company2 from "@/assets/images/companies-2.png";
import TabNavigation from "../../../components/tabNavigation";
import Footer from "../components/footer";

const Contacts: React.FC = () => {
  const [isAddNewCompany, setIsAddNewCompany] = useState<boolean>(false);
  const router = useRouter();
  const params  = useParams();
  const [showSorting, setShowSorting] = useState(false);
  const { id } = params ; // Extract id from URL
  const [loading, setLoading] = useState(false);
  const [contactData, setContactData] = useState(null);

  function setAddNewCompany() {
    // router.push("/crmDesktop/contacts/addNewContact");
    router.push("/crm/contacts/addNewContact");
  }
console.log("id:",id)
  useEffect(() => {
    if (id) {
      getCompanyByID(id);
    }
  }, [id]);

  const getCompanyByID = async (id: string) => {
    const response = await fetch(
      `/api/contact/get-contact-record?id=${encodeURIComponent(id)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Cache-Control": "no-cache",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log("data:",data)
      setContactData(data);
      setLoading(false); // Set loading to false once data is loaded
    } else {
      console.error("Error response:", await response.text());
      setLoading(false); // Set loading to false even if there is an error
    }
  };

  return (
    <Layout
      Childrens={
        <>
          <div className="block md:hidden px-[20px]">
            <div className="mt-4">
              <SearchBoxMobile Component={"Contact"} />
            </div>
            <div className="w-full mt-4 flex">
              <TabNavigation />
            </div>
          </div>
          {loading ? ( // Show loader while loading
            <div className="flex justify-center items-center h-screen">
              <p>Loading...</p>{" "}
              {/* You can replace this with a spinner or other loader */}
            </div>
          ) : (
            <>
              <div className="w-full hidden md:flex justify-end text-[10px] font-bold font-arial mt-[18px] pr-[123px] mb-[20px]">
                <div className="relative  items-center mr-[27px]">
                  <div
                    className="relative flex items-center cursor-pointer"
                    onClick={() => setShowSorting(!showSorting)}>
                    <Image src={DownArrow} alt="Sort" height={18} width={18} />
                    <h5 className="text-[18px] text-palatinatePurple font-bold mx-[8px]">
                      SORT BY
                    </h5>
                    <Image
                      src={SortingIcon}
                      alt="Sort Icon"
                      height={18}
                      width={18}
                    />
                  </div>
                  {showSorting && (
                    <div className="w-[214px] h-[129px] flex flex-col justify-around font-normal absolute top-12 border rounded-2xl border-palatinatePurple bg-white">
                      <h5 className="text-palatinatePurple text-[18px] px-3 py-[4px] ripple cursor-pointer">
                        Last name ascending
                      </h5>
                      <h5 className="text-palatinatePurple text-[18px] px-3 py-[4px] font-normal ripple cursor-pointer">
                        First name ascending
                      </h5>
                      <h5 className="text-palatinatePurple text-[18px] px-3 py-[4px] font-normal ripple cursor-pointer">
                        Last seen ascending
                      </h5>
                    </div>
                  )}
                </div>
                <button className="px-[10px] py-[7px] bg-palatinatePurple flex items-center text-white mr-[5px] text-[17px] font-bold rounded-lg">
                  <Image src={ExportIcon} alt="export" className="mr-[5px]" />
                  Export
                </button>
                <Link href="/crm/contacts/addNewContact">
                  <button
                    onClick={() => setAddNewCompany()}
                    className="px-[10px] text-[17px] font-bold py-[7px] bg-palatinatePurple text-white rounded-lg">
                    + New Contact
                  </button>
                </Link>
              </div>
              <div className="flex justify-end md:hidden mt-[15px] ">
                <button className="px-[10px] py-[7px] bg-palatinatePurple flex items-center text-white mr-[5px] md:text-[17px] text-[10px] font-bold rounded-lg">
                  <Image
                    src={EditColorIconMobile}
                    className="me-2 text-white"
                    alt="edit icon"
                  />
                  Edit Contact
                </button>
              </div>
              <div className="flex flex-col flex-1 h-full">
                <div className="hidden md:block mt-6 md:w-[322px] w-full px-[20px] md:px-[0px] md:ml-[20px]">
                  <SearchBox />
                </div>
                <div className="overflow-y-auto bg-[#F4F4F4] mx-[20px] md:mx-[0px] md:bg-none flex-1 pb-[8px] md:mb-[0px] mb-[40px] mt-[15px] ">
                  <div className="flex-1 grid grid-cols-3 gap-6 md:px-6 rounded-lg mt-[14px] pb-[64px] ">
                    <div className="md:col-span-2 col-span-3 md:px-[61px] px-[14px] flex flex-col justify-between items-center rounded-3xl bg-chinesWhite pb-[47px]">
                      <div className="flex justify-between w-full items-center md:py-8 py-[20px]">
                        <div className="logo bg-grayX11 rounded-full md:h-[90px] h-[35px] md:w-[90px] w-[39px] md:text-[40px] text-[15px] text-white font-bold flex justify-center items-center">
                          {contactData && contactData.firstName[0]}
                          {contactData && contactData.lastName[0]}
                          JD
                        </div>
                        <div className="flex-grow ml-[14px]">
                          <h5 className="md:text-[36px] text-[14px] text-darkSilverColor font-bold">
                            {contactData && contactData.firstName}John Doe{" "}
                            {contactData && contactData.lastName}
                          </h5>
                          <h5 className="md:text-[30px] text-[12px] text-darkSilverColor">
                            {contactData && contactData.company?.name}
                            CEO at Company Name
                          </h5>
                        </div>
                        <div className="logo bg-white rounded-full md:h-[111px] h-[48px] md:w-[111px] w-[48px] text-[15px] font-bold flex justify-center items-center">
                          {contactData && (
                            <Image
                              // src={contactData.contactLogo}
                              src={Company1}
                              alt=""
                              width={111}
                              height={111}
                            />
                          )}
                          <Image
                              // src={contactData.contactLogo}
                              src={Company2}
                              alt=""
                              width={111}
                              height={111}
                            />
                        </div>
                      </div>
                      <textarea
                        onChange={() => null}
                        value="Add Notes..."
                        className="w-full md:h-[170px] h-[101px] px-[18px] py-[9px] bg-white rounded-2xl text-darkSilverColor md:text-[24px] text-[10px]"
                        placeholder=""
                      />

                      <div className="flex justify-end w-full mt-[25px]">
                        <button className="md:text-[24px] text-[10px] font-bold flex items-center text-white bg-palatinatePurple rounded-3xl md:px-[28px] px-[14px] md:py-[17px] py-[7px]">
                          <span>Add This Note</span>
                        </button>
                      </div>
                      <div className="w-full mt-[65px] md:block flex justify-between items-center">
                        <h5 className="md:text-[24px] text-[10px] text-darkSilverColor font-bold">
                          Lee added a note on Friday, January 26, 2024 at 1:43
                          PM
                        </h5>
                        <div className="block md:hidden">
                          <ToggleSwitch />
                        </div>
                      </div>

                      <div className="mt-[21px] w-full">
                        <textarea
                          onChange={() => null}
                          value="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                                            dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                                            veniam, quis nostrud exerci tation ullamcorper suscipit
                                            lobortis nisl ut aliquip ex ea commodo consequat. Duis
                                            autem vel eum iriure dolor in hendrerit in vulputate velit
                                            esse molestie consequat,"
                          className="w-full h-[170px] px-[24px] py-[24px]  bg-white  text-darkSilverColor md:text-[24px] text-[10px] rounded-3xl overflow-hidden"
                          placeholder=""
                        />
                      </div>
                    </div>

                    <div className="md:col-span-1 col-span-3 px-[30px] pb-[25px] rounded-3xl bg-chinesWhite">
                      <h5 className="hidden text-[20px] text-palatinatePurple font-bold text-center md:flex items-center justify-center mt-4">
                        <Image
                          src={EditColorIcon}
                          className="me-2"
                          alt="edit icon"
                        />
                        Edit Contact
                      </h5>
                      <div className="mt-[29px]">
                        <h5 className="md:text-[26px] text-[16px] text-palatinatePurple font-bold">
                          Contact Info
                        </h5>
                        <div className="w-[300px] h-[1px] bg-darkSilverColor" />
                        <h5 className="md:text-[16px] text-[10px] mt-[20px] text-palatinatePurple font-bold">
                          {contactData && contactData.email} info@example.com
                        </h5>
                        <h5 className="md:text-[16px] text-[10px] text-darkSilverColor my-[4px]">
                          {contactData && contactData.phoneNumber_1} (305) 555-3653 Work
                        </h5>
                        <h5 className="md:text-[16px] text-[10px] text-darkSilverColor">
                          {contactData && contactData.phoneNumber_2} (305) 555-3653 Home
                        </h5>
                        {/* <h5 className='text-[16px] text-darkSilverColor font-bold my-[19px]'>He/Him</h5> */}
                        <div className="mt-[11px]">
                          <Image src={Linkedin} alt="LinkedIn" />
                        </div>
                      </div>

                      <div className="mt-[16px]">
                        <h5 className="md:text-[26px] text-[16px] text-palatinatePurple font-bold">
                          Background
                        </h5>
                        <div className="w-[300px] h-[1px] bg-darkSilverColor" />
                        <h5 className="md:text-[16px] text-[10px] text-darkSilverColor font-bold mt-[20px]">
                          {contactData && contactData.background} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse assumenda perspiciatis quasi, molestiae laboriosam quis saepe et asperiores voluptatibus velit.
                        </h5>
                        <h5 className="md:text-[16px] text-[10px]  text-darkSilverColor mt-[20px]">
                          Added on October 29, 2022
                        </h5>
                        <h5 className="md:text-[16px] text-[10px] text-darkSilverColor mt-[4px]">
                          Last seen on February 4, 2024
                        </h5>
                        <h5 className="md:text-[16px] text-[10px] text-darkSilverColor mt-[4px]">
                          Followed by Jane Doe
                        </h5>
                      </div>

                      <div className="mt-[46px]">
                        <h5 className="md:text-[26px] text-[16px] text-palatinatePurple font-bold">
                          Tags{" "}
                          <button className="md:px-[17px] px-[10px] hidden md:inline-block bg-palatinatePurple rounded-lg text-[16px] ml-[18px] text-white">
                            +
                          </button>
                        </h5>
                        <div className="w-[300px] h-[1px] bg-darkSilverColor" />
                        {contactData && (
                          <button className="px-[12px] py-[8px] bg-palatinatePurple text-white text-[12px] font-bold rounded-lg ">
                            {contactData.tag}
                          </button>
                        )}
                        <button className="px-[12px] py-[8px] bg-[#6D6D6D] text-white text-[12px] font-bold rounded-lg mt-4">
                        football-fun
                          </button> <br />

                          <button className="px-[12px] py-[8px] bg-palatinatePurple text-white text-[12px] font-bold rounded-lg mt-1">
                          musician
                          </button>
                      </div>

                      <div className="mt-[18px]">
                        <h5 className="md:text-[26px] text-[16px] text-palatinatePurple font-bold">
                          Tasks
                        </h5>
                        <div className="w-[300px] h-[1px] bg-darkSilverColor" />
                        <h5 className="md:text-[16px] text-[16px] text-darkSilverColor font-bold mt-[11px]">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, due 4/12/2023
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="fixed md:hidden block  bottom-0 z-50 left-0">
            <Footer />
          </div>
        </>
      }
    />
  );
};

export default Contacts;
