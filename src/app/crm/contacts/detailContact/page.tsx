"use client";

import React, { useState } from "react";
import LayoutView from "../../layout/page";
import TabNavigation from "../../component/tabNavigation";
import SearchBox from "../../component/searchBox/page";
import Image from "next/image";
import EditIcon from "@/assets/images/edit-icon.svg";
import ContactIcon from "../../../assets/images/contact.svg";
// import FilterIcon from "../../../assets/images/filter-icon.svg";
import FilterIcon from "@/assets/images/filter-icon.svg";
import DownArrow from "@/assets/images/down-arrow.svg";
import SortIcon from "@/assets/images/sort-icon.svg";
import ExportIcon from "@/assets/images/export-icon.svg";
import CustomInput from "../../component/customInput";
import ToggleSwitch from "../../component/toggleSwitch";
// import DesktopDetailContact from "../../../components/crmDesktop/contacts/detailContact";
import DesktopDetailContact from "../../../../components/crmDesktop/contacts/detailContact";
import { useClientMediaQuery } from "../../../../utils/srchooksuseClientMediaQuery";
import Linkedin from "@/assets/images/D-linkedin.svg";
import company1 from '@/assets/images/companies-1.png';
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function DetailContact() {
  const isMobile = useClientMediaQuery("(max-width: 769px)");
  const [showSorting, setShowSorting] = useState(false);

  const router = useRouter();
  function navigation() {
    router.push("/crm/contacts/addNewContact");
  }

  // if(isMobile){
  return (
    <LayoutView
      Childrens={
        <div className="relative flex flex-col px-[20px] w-full">
          <div className="w-full mt-4 flex">
            <TabNavigation />
          </div>

          <div className="mt-4 md:hidden">
            <SearchBox Component={"Contact"} />
          </div>
          
          <div className="section relative flex w-full justify-between mt-[16px] px-[20px]">
              

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
                      <h5 className="mt-[7px] pl-[17px] px-[3px] ripple">
                        Last name ascending
                      </h5>
                      <h5 className="mt-[7px] pl-[17px] px-[3px] ripple">
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

            <div className="mt-4 hidden md:block w-full  ">
            <label
        htmlFor="searchQuery"
        className="text-[#BCBCBC] relative  w-100 flex items-center md:w-[322px] md:h-[43px] ">
        <FontAwesomeIcon
          className="cursor-pointer absolute  text-sm left-2 md:text-[20px] md:left-4"
          icon={faSearch}
          size="1x"
        />

        <input
          className="border-0 text-[#BCBCBC] text-sm p-2 ps-7 pe-3 rounded-2xl w-full bg-white outline-none md:text-[20px] md:ml-3 md:w-[322px]"
          type="text"
          placeholder={`Search `}
          name=""
          id="searchQuery"
        />
      </label>
          </div>
          <div className="flex flex-col pb-[8px] mt-[15px]   ">
            <div className="self-end md:hidden flex w-full justify-end">
              <button className="text-[10px] flex items-center text-white bg-palatinatePurple rounded-lg px-[10px] py-[5px]">
                <Image src={EditIcon} alt="edit" className="mr-[10px]" />
                <span>Edit Contact</span>
              </button>
            </div>
            <div className="bg-chinesWhite rounded-xl mt-[14px]  md:rounded-2xl flex flex-col xl:flex-row xl:gap-3 xl:bg-[#F4F4F4]  ">
            <div className="mt-[29px] px-[14px] pb-[25px] xl:w-[72%]  bg-chinesWhite xl:p-11 xl:rounded-2xl ">
              <div className="flex justify-between items-center mt-[12px] mx-[14px] ">
                <div className="logo bg-grayX11 rounded-full h-[35px] w-[39px] text-[15px] text-white font-bold flex justify-center items-center md:h-[90px] md:w-[90px] md:text-[39px]">
                  JD
                </div>
                <div className="flex-grow ml-[14px]">
                  <h5 className="text-[14px] text-darkSilverColor font-bold md:text-[36px]">
                    John Doe
                  </h5>
                  <h5 className="text-[12px] text-darkSilverColor md:text-[30px]">
                    CEO at Company Name
                  </h5>
                </div>
                <div className="logo bg-[#F4F4F4] rounded-full h-[43px] w-[48px] text-[15px]  font-bold flex justify-center items-center md:h-[90px] md:w-[90px]">
                  <Image src={company1} alt="" className="" />
                </div>
              </div>

              
                <textarea
                  onChange={() => null}
                  value="  Add Notes..."
                  className="w-full h-[101px] px-[18px] py-[9px] bg-[#F4F4F4] rounded-lg text-darkSilverColor text-[10px] md:text-[24px] md:rounded-3xl md:h-[170px] md:mt-5 mt-3"
                  id=""
                  placeholder=""
                />

                <div className="flex justify-end mt-[13.8px]">
                  <button className="text-[10px] font-bold flex items-center text-white bg-palatinatePurple rounded-lg px-[14px] py-[7px] md:text-[24px] md:px-[29px] md:py-[17px] md:rounded-2xl">
                    <span>Add This Note</span>
                  </button>
                </div>
                <div className="flex justify-between mt-[22.7px] items-center">
                  <h5 className="text-[10px] text-darkSilverColor font-bold md:text-[24px]">
                    Lee added a note on Friday, January 26, 2024 at 1:43 PM
                  </h5>
                  <span className="md:hidden">

                    <ToggleSwitch />
                  </span>
                </div>

                <div className="mt-[9.6px]">
                  <textarea
                    onChange={() => null}
                    value=" Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                                        dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                                        veniam, quis nostrud exerci tation ullamcorper suscipit
                                        lobortis nisl ut aliquip ex ea commodo consequat. "
                    className="w-full h-[101px] px-[18px] py-[9px] bg-[#F4F4F4] rounded-lg text-darkSilverColor text-[10px] md:h-[170px]  md:text-[24px] md:rounded-3xl"
                    id=""
                    placeholder=""
                  />
                </div>
              </div>
              <div className="md:mt-[29px] px-[14px] pb-[25px] xl:w-[28%]  bg-chinesWhite xl:p-7 xl:rounded-2xl">
              <div className="mt-[29px]">
                <h5 className="text-[16px] text-palatinatePurple font-bold md:text-[26px]">
                  Personal Info
                </h5>
                <div className="w-[190px] h-[1px] bg-[#6D6D6D] md:w-[301px]" />
                <h5 className="text-[10px] mt-[11px] text-palatinatePurple font-bold md:text-[16px]">
                  info@example.com
                </h5>
                <h5 className="text-[10px] text-darkSilverColor my-[4px] md:text-[16px]">
                  (305) 555-3653 Work
                </h5>

                <h5 className="text-[10px] text-darkSilverColor md:text-[16px]">
                  (305) 555-3653 Home
                </h5>

                <div className="mt-2">
                  <Image src={Linkedin} alt="" />
                </div>
              </div>

              <div className="mt-[16px]">
                <h5 className="text-[16px] text-palatinatePurple font-bold md:text-[26px]">
                  Background
                </h5>
                <div className="w-[190px] h-[1px] bg-[#6D6D6D] md:w-[301px]" />
                <h5 className="text-[10px] text-darkSilverColor font-bold mt-[11px] md:text-[16px]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                  sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                  magna
                </h5>
                <p className="text-[10px] font-normal text-darkSilverColor  mt-[16px] md:text-[16px]">
                  Added on October 29, 2022
                </p>

                <p className="text-[10px] text-darkSilverColor  mt-[4px] md:text-[16px]">
                  Last seen on February 4, 2024
                </p>

                <p className="text-[10px] text-darkSilverColor  mt-[4px] md:text-[16px]">
                  Followed by Jane Doe{" "}
                </p>
              </div>

              <div className="mt-[25px]">
                <h5 className="text-[16px] text-[#5F1762] font-bold">
                  Tags <span className="bg-[#5F1762] text-white  py-[2px] px-[15px] rounded-lg text-[12px] md:font-bold md:text-[26px]">+</span>
                </h5>
                <div className="w-[190px] h-[1px] bg-[#6D6D6D] md:w-[301px] " />
                <button className="block px-[6px] py-[4px] bg-darkSilverColor text-white text-[8px] font-bold rounded-xl mt-3 md:text-[12px] md:px-[13px] md:py-[8px]">
                  football-fun
                </button>
                <button className="px-[6px] py-[4px] bg-palatinatePurple text-white text-[8px] font-bold rounded-xl md:text-[12px] md:px-[13px] md:py-[8px] mt-2">
                  musiician
                </button>
              </div>

              <div className="mt-[18px]">
                <h5 className="text-[16px] text-palatinatePurple font-bold md:text-[26px]">
                  Tasks
                </h5>
                <div className="w-[190px] h-[1px] bg-[#6D6D6D]  md:w-[301px]" />
                <h5 className="text-[10px] text-darkSilverColor font-bold mt-[6px] md:text-[16px]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                  due 4/12/2023
                </h5>
              </div>
            </div>
            </div>
           
          </div>
        </div>
      }
    />
  );
}
// else return <DesktopDetailContact/>;
// }

export default DetailContact;
