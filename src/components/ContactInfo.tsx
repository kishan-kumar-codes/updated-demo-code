import Image from "next/image";
import React, { FC } from "react";
import SmallReceiver from "../assets/images/small-receiver.svg";
import SmallEmail from "../assets/images/sm-email.svg";
import SmallChat from "../assets/images/sm-chat.svg";

interface ContactInfoProps {
  contactInfo: {
    avatar?: {
      src: string;
    };
  };
  infoDialog: boolean;
}

const ContactInfo: FC<ContactInfoProps> = ({ contactInfo, infoDialog }) => {
  return (
    <div
      className={`${
        infoDialog ? "fixed z-[99] bottom-0" : "hidden"
      }  w-full  top-0 left-0 `}
    >
      <div
        style={{ height: "407px", zIndex: 55555 }}
        className="bg-chinesWhite absolute bottom-0 w-full rounded-t-3xl  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
      >
        <div className="flex items-center flex-col pt-2 rounded-lg">
          <div className="bg-white h-1 w-14" />
          <div className="flex flex-col items-center mt-10">
            <div className="avatar mb-2">
              {contactInfo.avatar?.src && ( // Use optional chaining here
                <Image
                  alt="user"
                  src={contactInfo.avatar.src}
                  width={0}
                  height={0}
                  className="h-[59px] w-[59px] bg-PhilippineGray rounded-full"
                />
              )}
            </div>
            <h5 className="text-[21px] font-bold font-arial text-darkSilverColor">
              Alexis Mcconnell
            </h5>
            <h5 className="text-[17px] font-arial  text-grayX11">
              (305) 555-1541
            </h5>
          </div>
        </div>
        <div className="border-b-[1px] border-darkSilverColor border-solid py-[7px] px-[16px]">
          <h5 className="text-[15px] font-bold font-arial text-darkSilverColor ">
            {" "}
            Call{" "}
          </h5>
          <div className="flex justify-between">
            <h5 className="text-[13px] font-arial  text-grayX11">
              (305) 555-1541
            </h5>
            <button className="icon mr-[14px]">
              <Image alt="icon" src={SmallReceiver} height={0} width={0} />
            </button>
          </div>
        </div>
        <div className="border-b-[1px] border-darkSilverColor border-solid py-[7px] px-[16px]">
          <h5 className="text-[15px] font-bold font-arial text-darkSilverColor ">
            {" "}
            Message{" "}
          </h5>
          <div className="flex justify-between">
            <h5 className="text-[13px] font-arial  text-grayX11">
              (305) 555-1541
            </h5>
            <button className="icon mr-[14px]">
              <Image alt="icon" src={SmallChat} height={0} width={0} />
            </button>
          </div>
        </div>
        <div className=" py-[7px] px-[16px]">
          <h5 className="text-[15px] font-bold font-arial text-darkSilverColor ">
            {" "}
            Email{" "}
          </h5>
          <div className="flex justify-between">
            <h5 className="text-[13px] font-arial  text-grayX11">
              alexismcconnell@gmail.com
            </h5>
            <button className="icon mr-[14px]">
              <Image alt="icon" src={SmallEmail} height={0} width={0} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
