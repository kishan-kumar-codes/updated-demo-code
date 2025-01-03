import React from "react";
import Logo from "../../../assets/images/D-logo.png";
import LogoIcon from "../../../assets/images/D-logo-icon.svg";
import LogoIcon1 from "../../../assets/images/D-logo-icon1.svg";
import LogoIcon2 from "../../../assets/images/D-logo-icon2.svg";
import RoundIcon from "../../../assets/images/D-round.svg";
import UserImage from "../../../assets/images/user-image.png";

import Image from "next/image";

function Header() {
  return (
    <div className="w-full grid grid-cols-4 border-b border-y-grayX11  h-[87px] 2xl:h-[87px] bg-cultured  justify-between">
      <div className="logo flex ml-[60px]">
        <div>
          <Image src={Logo} alt="logo" height="" width="" />
        </div>
        <div className="flex">
          <Image src={LogoIcon} alt="logo icon" height="" width="" />
          <Image src={LogoIcon1} alt="logo icon1" height="" width="" />
          <Image src={LogoIcon2} alt="logo icon2" height="" width="" />
        </div>
      </div>
      <div className="tabs col-span-2">
        {/* <ul className="flex h-full items-center justify-center  text-[28px] font-bold text-darkSilverColor">
          <li
            className={`px-[29px] py-5 cursor-pointer  ${
              router.query.name === "Companies" ||
              router.pathname.includes("/companies")
                ? "border-b-palatinatePurple border-b-[6px]"
                : "border-b-white border-b-[6px] "
            }`}
            onClick={() => {
              router.push("/crm/companies?name=Companies");
            }}
          >
            Companies
          </li>
          <li
            className={`px-[29px] py-5 cursor-pointer ${
              router.query.name === "Contact" ||
              router.pathname.includes("/contacts")
                ? "border-b-palatinatePurple border-b-[6px]"
                : "border-b-white border-b-[6px] "
            }`}
            onClick={() => {
              router.push("/crm/contacts?name=Contact");
            }}
          >
            Contact
          </li>
          <li
            className={`px-[29px] py-5 cursor-pointer ${
              router.query.name === "Deals" ||
              router.pathname.includes("/deals")
                ? "border-b-palatinatePurple border-b-[6px]"
                : "border-b-white border-b-[6px] "
            }`}
            onClick={() => {
              router.push("/crm/deals?name=Deals");
            }}
          >
            Deals
          </li>
        </ul> */}
      </div>
      <div className="vector-bg w-full  flex justify-end items-center ">
        <Image
          src={RoundIcon}
          alt="round icon"
          width=""
          height=""
          className="mr-[23px]"
        />
        <div className="usr-logo h-[53px] w-[53px] rounded-full bg-chinesWhite mr-[16px]  ">
          <Image src={UserImage} alt="round icon" width="" height="" />
        </div>
        <h5 className="text-[28px] font-bold text-white md:mr-[20px] lg:mr-[40px]">
          John Doe
        </h5>
      </div>
    </div>
  );
}

export default Header;
