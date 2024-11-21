import React from "react";
import UserOutlineIcon from "../../assets/images/user-outline-icon.svg";
import UserIcon from "../../assets/images/user.svg";
import Receiver2 from "../../assets/images/receiver-2-icon.svg";
import EmailOutline from "../../assets/images/email-outline-icon.svg";
import "../../app/globals.css";

import Image from "next/image";
import Link from "next/link";

const CreateContact = ({}) => {
  return (
    <div className="h-screen w-screen flex justify-center">
      <div className="container bg-cultured mx-auto overflow-x-hidden sm:container md:container md:mx-auto h-full md:overflow-y-hidden sm:overflow-y-scroll">
        <div className="h-full px-[40px] w-full flex flex-col  items-center">
          <div className="call-timer text-center mt-[17px]">
            <div className="avatar-bg p-3 rounded-full bg-chinesWhite">
              <div className="avatar bg-palatinatePurple rounded-full h-[94px] w-[94px] flex justify-center items-center">
                <Image
                  src={UserIcon}
                  alt="avatar"
                  className="h-[60px] w-[58px]"
                />
              </div>
            </div>
          </div>
          <div className="w-full h-full relative">
            <div className="contact-name my-[7px]">
              <h5 className="userName text-[18px] font-arial text-darkSilverColor font-bold ml-2">
                Name
              </h5>
              <div className="flex bg-white py-2 px-[14px] rounded-3xl ">
                <Image
                  src={UserOutlineIcon}
                  alt="user"
                  className="h-[26px] w-[26px]"
                />
                <input
                  type="text"
                  name=""
                  id="userName"
                  className="border-none outline-none ml-1 w-full"
                />
              </div>
            </div>
            <div className="mobile  my-[7px] w-full">
              <h5 className="userName text-[18px] font-arial text-darkSilverColor font-bold ml-2">
                Mobile
              </h5>
              <div className="flex bg-white py-2 px-[14px] w-full rounded-3xl ">
                <Image
                  src={Receiver2}
                  alt="user"
                  className="h-[30px] w-[26px]"
                />
                <input
                  type="text"
                  name=""
                  id="userName"
                  className="border-none outline-none ml-1 w-full"
                />
              </div>
            </div>
            <div className="email  my-[7px]">
              <h5 className="userName text-[18px] font-arial text-darkSilverColor font-bold ml-2">
                Email
              </h5>
              <div className="flex bg-white py-2 px-[14px] rounded-3xl ">
                <Image
                  src={EmailOutline}
                  alt="user"
                  className="h-[26px] w-[26px]"
                />
                <input
                  type="text"
                  name=""
                  id="userName"
                  className="border-none outline-none ml-1 w-full"
                />
              </div>
            </div>

            <div className="button-content w-full flex px-[15px] justify-between absolute bottom-[80px]">
              <button className="bg-limeGreen px-[32px] py-[10px] rounded-3xl text-darkSilverColor shadow-md text-lg font-bold font-arial">
                Save
              </button>
              <Link
                href={{
                  pathname: "/calls",
                  query: {
                    name: "All Calls",
                  },
                }}
              >
                <button className="bg-red px-[32px] py-[10px] text-white rounded-3xl text-lg font-bold font-arial shadow-md">
                  Cancel
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateContact;
