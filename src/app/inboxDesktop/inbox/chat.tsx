import Link from "next/link";
import React, { FC, useState } from "react";
import Message from "../../../components/inbox/chats/message";
import Image from "next/image";
import sendButton from "../../../assets/images/send-button.svg";
import "../../../app/globals.css";
import Header from "@/components/header";
import Drawer from "@/components/Drawer";
import ScreenView from "@/components/ScreenView";
import BottomNavigation from "@/components/bottomNavigation";
import { Check } from "lucide-react";

interface Message {
  userId: string;
  message: string;
  avatar: string;
  timeStamp: string;
  date: string;
}

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [showmoreOptions, setShowMoreOptions] = useState(false);
  const [showTemplate, setShowTemplate] = useState(false);
  const [showAddNewTemplate, setShowAddNewTemplate] = useState(false);
  const [showLocationDialog, setShowLocationDialog] = useState(false);
  const messageList = [
    {
      userId: "own",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum in mollitia nobis ab commodi necessitatibus laudantium minus voluptate vero nesciunt, magni accusamus error sapiente ad vel, fugiat saepe! Unde, enim? ",
      avatar: "OM",
      timeStamp: "12:09",
      date: "2024-02-22",
    },
    {
      userId: "test",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum in mollitia nobis ab commodi necessitatibus laudantium minus voluptate vero nesciunt, magni accusamus error sapiente ad vel, fugiat saepe! Unde, enim? ",
      avatar: "TS",
      timeStamp: "12:09",
      date: "2024-02-22",
    },
    {
      userId: "temp",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum in mollitia nobis ab commodi necessitatibus laudantium minus voluptate vero nesciunt, magni accusamus error sapiente ad vel, fugiat saepe! Unde, enim? ",
      avatar: "TM",
      timeStamp: "12:09",
      date: "2024-02-22",
    },
    {
      userId: "own",
      message: "Lorem ipsum dolor sitepe! Unde, enim? ",
      avatar: "OM",
      timeStamp: "12:09",
      date: "2024-02-22",
    },
    {
      userId: "test",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum in mollitia nobis ab commodi necessitatibus laudantium minus voluptate vero nesciunt, magni accusamus error sapiente ad vel, fugiat saepe! Unde, enim? ",
      avatar: "TS",
      timeStamp: "12:09",
      date: "2024-02-22",
    },
    {
      userId: "temp",
      message: "Lorem ipsum dolor sit  ",
      avatar: "TM",
      timeStamp: "12:09",
      date: "2024-02-22",
    },
    {
      userId: "own",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum in mollitia nobis ab commodi necessitatibus laudantium minus voluptate vero nesciunt, magni accusamus error sapiente ad vel, fugiat saepe! Unde, enim? ",
      avatar: "OM",
      timeStamp: "12:09",
      date: "2024-02-22",
    },
    {
      userId: "test",
      message: "Lorem ? ",
      avatar: "TS",
      timeStamp: "12:09",
      date: "2024-03-01",
    },
    {
      userId: "temp",
      message:
        "Lorem ipsum dolor sit ametis ab nesciunt, magni accusamus error sapiente ad vel, fugiat saepe! Unde, enim? ",
      avatar: "TM",
      timeStamp: "12:09 PM",
      date: "2024-03-01",
    },
  ];

  const filteredMessages = messageList;
  const groupedMessages = groupBy(messageList, "date");

  function handleDrawer(isDrawerOpen: any) {
    setIsOpen(isDrawerOpen);
  }

  const handleTepmlate = () => {
    setShowTemplate(!showTemplate);
    if (!showTemplate) setShowAddNewTemplate(false);
  };

  if (showLocationDialog) {
  }
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="w-full hidden lg:flex lg:h-[92vh] h-full overflow-y-auto flex-col justify-between pl-[15px] pr-[60px] md:pr-[10px] pb-[20px] bg-white">
      <div
        className={`container ${showLocationDialog ? "overflow-y-hidden" : "overflow-y-auto"} `}>
        {showLocationDialog && (
          <div className="absolute transparentBg h-full w-screen z-[999] flex-1  justify-center items-center flex ">
            <div className="w-[303px] px-[15px] pt-[11px] rounded-lg pb-[20px] bg-cultured border border-palatinatePurple">
              <div className="flex justify-end ">
                <span
                  className="cursor-pointer"
                  onClick={() => setShowLocationDialog(false)}>
                  <svg
                    width="11"
                    height="10"
                    viewBox="0 0 11 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.9999 9.29996C9.5999 9.69996 9.09961 9.69996 8.69961 9.29996L5.4999 6.09976L2.29971 9.29996C1.99971 9.59996 1.3999 9.59996 0.999902 9.29996C0.699902 8.99996 0.699902 8.40015 0.999902 8.00015L4.19961 4.79996L0.999902 1.60001C0.699902 1.30001 0.699902 0.699959 0.999902 0.299959C1.2999 -4.12762e-05 1.89971 -4.12762e-05 2.29971 0.299959L5.4999 3.49991L8.69961 0.299959C8.99961 -4.12762e-05 9.5999 -0.100041 9.9999 0.299959C10.2999 0.599959 10.2999 1.20001 9.9999 1.60001L6.79971 4.79996L9.9999 8.00015C10.3999 8.40015 10.3999 8.99996 9.9999 9.29996Z"
                      fill="#6D6D6D"
                    />
                  </svg>
                </span>
              </div>
              <h5 className="text-[14px] font-bold text-darkSilverColor ">
                {" "}
                Add To Another Location
              </h5>
              <h5 className="text-[11px] text-darkSilverColor">
                Add a conversation with John Doe in a new location
              </h5>
              <div>
                <label
                  className="mt-[13px] text-[12px] font-bold text-darkSilverColor"
                  htmlFor="">
                  Select a location*
                </label>
                <div className="w-full bg-white flex items-center rounded-lg px-[12px]">
                  <input
                    className="flex-1 h-[29px] text-darkSilverColor outline-none bg-white "
                    type="text"
                  />
                  <span>
                    <svg
                      width="10"
                      height="5"
                      viewBox="0 0 10 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4.8999 4.40015L0.799805 0.0998535H9.1001L4.8999 4.40015Z"
                        fill="#6D6D6D"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="mt-[10px]">
                <h5 className="text-[12px] text-darkSilverColor font-bold">
                  Conversation history
                </h5>
                <div className="flex items-start mt-[9px]">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="myCheckbox"
                      className="peer hidden w-[12px] h-[12px]"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor="myCheckbox"
                      className="w-[12px] h-[12px] border-2 border-gray-400 rounded cursor-pointer peer-checked:bg-[#40F440] flex items-center justify-center">
                      {isChecked && (
                        <Check
                          style={{ color: "#3D3D3D", fontWeight: "bold" }}
                        />
                      )}
                    </label>
                  </div>
                  <h5 className="text-[12px] text-darkSilverColor ml-[5px] ">
                    Share the previous messages of this conversation with the
                    selected location
                  </h5>
                </div>
              </div>
              <div className="mt-[44px] flex justify-end ">
                <button className="text-[16px] font-bold text-white bg-palatinatePurple px-[25px] py-[8px] rounded-lg">
                  Add
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="w-full bg-chinesWhite h-[54px] z-50">
          <div className=" relative flex justify-end items-center items-end h-full pb-[14px]">
            <h5 className="text-[19px] font-bold text-darkSilverColor items-end">
              Veronica May
            </h5>
            <span
              onClick={() => setShow(!show)}
              className="relative ml-[16px] text-[10px] flex items-center font-bold text-darkSilverColor bg-white px-[6px] py-[4px] rounded-md">
              Unassigned
              <span className={`px-[2px] ${show && "rotate-180"}`}>
                <svg
                  width="6"
                  height="4"
                  viewBox="0 0 6 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.89941 3.5L0.0996094 0.700195H5.69971L2.89941 3.5Z"
                    fill="#6D6D6D"
                  />
                </svg>
              </span>
              {show && (
                <div className=" h-[124px] w-[137px] flex flex-col justify-evenly items-start px-[8px]  absolute bg-white  rounded-lg border border-palatinatePurple z-40 -left-10 top-8">
                  <h5 className=" ml-[18px]  text-[10px] font-bold text-darkSilverColor rounded-md ">
                    ASSIGN TO:
                  </h5>
                  <h5 className="ml-[18px] px-[13px] text-[10px] font-bold text-white rounded-md bg-[#1E7FC6]">
                    SERVICE
                  </h5>
                  <h5 className="ml-[18px] px-[13px] text-[10px] font-bold text-white rounded-md bg-[#EA7513]">
                    MARKETING
                  </h5>
                  <h5 className="ml-[18px] px-[13px] text-[10px] font-bold text-white rounded-md bg-[#ED1150]">
                    SALES
                  </h5>
                  <h5 className="ml-[18px] px-[13px] text-[10px] font-bold text-white rounded-md bg-[#3B9E71]">
                    SUPPORT
                  </h5>
                </div>
              )}
            </span>

            <span
              onClick={() => setShowMoreOptions(!showmoreOptions)}
              className="cursor-pointer ml-[7px] mr-[23px]">
              <svg
                width="5"
                height="17"
                viewBox="0 0 5 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.02765 4.5C3.13105 4.5 4.02552 3.60457 4.02552 2.5C4.02552 1.39543 3.13105 0.5 2.02765 0.5C0.924262 0.5 0.0297852 1.39543 0.0297852 2.5C0.0297852 3.60457 0.924262 4.5 2.02765 4.5Z"
                  fill="#6D6D6D"
                />
                <path
                  d="M2.02765 10.5C3.13105 10.5 4.02552 9.60457 4.02552 8.5C4.02552 7.39543 3.13105 6.5 2.02765 6.5C0.924262 6.5 0.0297852 7.39543 0.0297852 8.5C0.0297852 9.60457 0.924262 10.5 2.02765 10.5Z"
                  fill="#6D6D6D"
                />
                <path
                  d="M2.02765 16.5C3.13105 16.5 4.02552 15.6046 4.02552 14.5C4.02552 13.3954 3.13105 12.5 2.02765 12.5C0.924262 12.5 0.0297852 13.3954 0.0297852 14.5C0.0297852 15.6046 0.924262 16.5 2.02765 16.5Z"
                  fill="#6D6D6D"
                />
              </svg>
            </span>
            {showmoreOptions && (
              <span className="h-[150px] w-[199px] bg-white rounded-md absolute -bottom-32 px-[23px] py-[11px] right-4 border border-palatinatePurple z-40">
                <h5 className="text-[12px] text-darkSilverColor cursor-pointer">
                  {" "}
                  <span onClick={() => setShowMoreOptions(!showmoreOptions)}>
                    Close
                  </span>
                </h5>
                <h5 className="text-[12px] text-darkSilverColor mt-[7px]">
                  Start A Video Chat
                </h5>
                <h5 className="text-[12px] text-darkSilverColor mt-[7px]">
                  Mark As Unread
                </h5>
                <h5
                  onClick={() => setShowLocationDialog(!showLocationDialog)}
                  className="text-[12px] text-darkSilverColor mt-[7px]">
                  Add To Another Location
                </h5>
                <h5 className="text-[12px] text-red mt-[7px]">
                  Block And Mark As Spam
                </h5>
              </span>
            )}
          </div>
        </div>
        <div className="container flex flex-col p-2 bg-white h-full">
          <div className="all-chats overflow-y-scroll  flex pb-4 flex-col-reverse ">
            {Object.entries(groupedMessages).map(([date, messages]) => (
              <div key={date} className="date-group text-center  ">
                <h2 className=" py-4 mt-5">{date}</h2>
                {(messages as Message[]).map((message, ind) => (
                  <Message key={ind} message={message} />
                ))}
              </div>
            ))}
          </div>
          <div className="message-input mt-2">
            <div className="input-box px-3  ">
              <div className="text-blackOlive font-semibold tracking-wide	mb-2 text-[#8C8C8C] text-sm">
                {/* <span className="p-2 text-[#8C8C8C] font-bold text-[14px]">
                  SMS
                </span>
                <span className="p-2 text-[#8C8C8C] font-bold text-[14px]">
                  Email
                </span>
                <span className="p-2 text-[#8C8C8C] font-bold text-[14px]">
                  WebChat
                </span>
                <span className="p-2 text-[#8C8C8C] font-bold text-[14px]">
                  Call
                </span> */}
              </div>
              <label htmlFor="message-input" className="relative flex">
                {/* <input
                  id="message-input"
                  placeholder="Type a Message"
                  type="text"
                  className="p-3 w-full border-2 border-chinesWhite rounded-2xl outline-none bg-white"
                  name=""
                /> */}
                {/* <button className="absolute right-16 top-4">
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.40269 15.2082C4.24427 15.2082 2.97003 14.7449 2.15914 13.8181C0.305677 11.9647 0.305677 8.95285 2.15914 7.21523L7.83533 1.53882C9.10959 0.264566 11.1947 0.264566 12.469 1.53882C13.7433 2.81308 13.7433 4.89823 12.469 6.17248L6.7928 11.8489C6.09775 12.5439 4.82344 12.5439 4.12839 11.8489C3.3175 11.038 3.3175 9.99537 4.12839 9.18448L8.41454 4.8984C8.64622 4.66671 8.87795 4.66671 9.10963 4.8984C9.34132 5.13008 9.34132 5.36159 9.10963 5.59328L4.82348 9.87964C4.47596 10.2272 4.47596 10.8062 4.82348 11.1537C5.17101 11.5012 5.75019 11.5012 6.09771 11.1537L11.774 5.4776C12.7007 4.55087 12.7007 3.04488 11.774 2.23398C10.8472 1.30725 9.34132 1.30725 8.53042 2.23398L2.85416 7.91011C1.34822 9.41605 1.34822 11.733 2.85416 13.2389C4.3601 14.7449 6.6769 14.7449 8.18284 13.2389L13.8591 7.56281C14.0908 7.33112 14.3224 7.33112 14.5541 7.56281C14.7858 7.79449 14.7858 8.026 14.5541 8.25769L8.87794 13.9341C7.71952 14.8608 6.5611 15.2082 5.40269 15.2082Z"
                      fill="#6D6D6D"
                    />
                  </svg>
                </button>
                <button className="absolute right-10 top-4">
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.975 11.1245C12.8166 13.2097 10.6156 14.5998 8.06712 14.5998C4.36019 14.5998 1.34825 11.4722 1.34825 7.76525C1.34825 4.05832 4.36019 1.16234 8.06712 1.16234C9.34137 1.16234 10.7314 1.50986 11.774 2.32075C11.8898 2.43659 12.1215 2.32064 12.2374 2.2048C12.3532 2.08896 12.2374 1.85722 12.1216 1.85722C10.8473 1.04633 9.57306 0.58313 8.06712 0.58313C4.01266 0.58313 0.769043 3.82647 0.769043 7.88092C0.769043 11.8195 4.01266 15.0633 8.06712 15.0633C10.8473 15.0633 13.1641 13.5572 14.4384 11.3562C14.5542 11.2403 14.4384 11.0089 14.3225 11.0089C14.0908 11.0089 13.975 11.1245 13.975 11.1245Z"
                      fill="#6D6D6D"
                      stroke="#6D6D6D"
                      stroke-width="0.579208"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M10.9634 8.34453C10.1525 8.34453 9.57324 7.64954 9.57324 6.95449C9.57324 6.25944 10.2683 5.56416 10.9634 5.56416C11.7742 5.56416 12.3534 6.25944 12.3534 6.95449C12.3534 7.64954 11.7742 8.34453 10.9634 8.34453ZM10.9634 6.14337C10.5 6.14337 10.1524 6.49112 10.1524 6.95449C10.1524 7.41785 10.6158 7.76532 10.9634 7.76532C11.4267 7.76532 11.7742 7.41785 11.7742 6.95449C11.7742 6.49112 11.4267 6.14337 10.9634 6.14337Z"
                      fill="#6D6D6D"
                      stroke="#6D6D6D"
                      stroke-width="0.579208"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M5.17136 8.34453C4.36047 8.34453 3.78125 7.64954 3.78125 6.95449C3.78125 6.25944 4.47631 5.56416 5.17136 5.56416C5.86641 5.56416 6.5614 6.25944 6.5614 6.95449C6.5614 7.64954 5.98225 8.34453 5.17136 8.34453ZM5.17136 6.14337C4.708 6.14337 4.36046 6.49112 4.36046 6.95449C4.36046 7.41785 4.82384 7.76532 5.17136 7.76532C5.63473 7.76532 5.9822 7.41785 5.9822 6.95449C5.9822 6.49112 5.63473 6.14337 5.17136 6.14337Z"
                      fill="#6D6D6D"
                      stroke="#6D6D6D"
                      stroke-width="0.579208"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M8.06697 12.9782C6.56103 12.9782 5.17087 12.2832 4.24414 11.0089C4.24414 10.8931 4.24414 10.7772 4.24414 10.6614C4.24414 10.5455 4.36 10.5454 4.47584 10.5454H11.7738C11.8897 10.5454 12.0055 10.5455 12.0055 10.6614C12.0055 10.7772 12.0055 10.8931 12.0055 11.0089C10.963 12.2832 9.57291 12.9782 8.06697 12.9782ZM5.05505 11.1246C5.86594 11.9355 6.90855 12.399 8.06697 12.399C9.22538 12.399 10.2679 11.9355 11.0788 11.1246H5.05505Z"
                      fill="#6D6D6D"
                      stroke="#6D6D6D"
                      stroke-width="0.579208"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M19.4195 4.52171C19.4195 4.63755 19.4195 4.75345 19.3036 4.86929C19.1878 4.98513 19.0719 4.98496 18.9561 4.98496H16.2918V7.64938C16.2918 7.88106 16.06 8.11291 15.8284 8.11291C15.7125 8.11291 15.5967 8.1128 15.4809 7.99696C15.365 7.88112 15.365 7.76522 15.365 7.64938V4.98496H12.7007C12.469 4.98496 12.2373 4.75339 12.2373 4.52171C12.2373 4.40587 12.2373 4.28997 12.3531 4.17413C12.469 4.05829 12.5849 4.05846 12.7007 4.05846H15.365V1.39405C15.365 1.16236 15.5967 0.930511 15.8284 0.930511C15.9442 0.930511 16.0601 0.930625 16.1759 1.04647C16.2918 1.16231 16.2918 1.27821 16.2918 1.39405V4.05846H18.9561C19.1878 4.05846 19.4195 4.17419 19.4195 4.52171Z"
                      fill="#6D6D6D"
                      stroke="#6D6D6D"
                      stroke-width="0.579208"
                      stroke-miterlimit="10"
                    />
                  </svg>
                </button>
                <button className="absolute right-4 top-4">
                  <Image
                    width={20}
                    height={20}
                    alt={"send button"}
                    src={sendButton}
                  />
                </button> */}
              </label>

              {/* <div className="mt-2 mb-[34px] relative ">
                <span
                  onClick={() => handleTepmlate()}
                  className="bg-palatinatePurple text-white p-1 px-2 rounded-md">
                  Template
                </span>
                <span className="bg-palatinatePurple text-white p-1 px-2 rounded-md ml-2">
                  Payment
                </span>
                {showTemplate && (
                  <div className="pb-[17px] absolute bg-white border border-palatinatePurple w-[252px]  z-40 -top-52 rounded-lg left-1">
                    {!showAddNewTemplate ? (
                      <div>
                        <h5
                          onClick={() =>
                            setShowAddNewTemplate(!showAddNewTemplate)
                          }
                          className="ripple pt-[17px]  pl-[31px] cursor-pointer text-[16px] text-palatinatePurple font-bold font-arial">
                          + Add New Template
                        </h5>
                        <h5 className="ripple pl-[31px] text-[16px] text-darkSilverColor font-bold font-arial py-1">
                          Thank You
                        </h5>
                        <h5 className="ripple pl-[31px] text-[16px] text-darkSilverColor font-bold py-1">
                          Invoice Sent
                        </h5>
                        <h5 className="ripple pl-[31px] text-[16px] text-darkSilverColor font-bold py-1">
                          Work Hours
                        </h5>
                        <h5 className="ripple  pl-[31px] text-[16px] text-darkSilverColor font-bold py-1">
                          Out Of Office{" "}
                        </h5>
                      </div>
                    ) : (
                      <div className="p-[20px]">
                        <div>
                          <h5 className="text-[#6D6D6D] font-bold text-[16px] ">
                            Title
                          </h5>
                          <input
                            className="bg-cultured py-[6px] pl-[10px] w-full rounded-xl text-[12px] italic"
                            type="text"
                            placeholder="Type template..."
                          />
                        </div>
                        <div>
                          <h5 className="text-[#6D6D6D] font-bold text-[16px] ">
                            Message
                          </h5>
                          <input
                            className="bg-cultured py-[6px] h-[71px] pl-[10px] w-full rounded-xl text-[12px]"
                            type="text"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div> */}
            </div>
          </div>
        </div>
        <div className="w-full lg:hidden">
          <BottomNavigation component="" />
        </div>
      </div>

      <div className="w-full ">
        <div className="text-[18px] 2xl:text-[26px] font-bold text-darkSilverColor flex gap-6">
          <Link href={"/inbox?name=All Messages"}>
            <h5>SMS</h5>
          </Link>
          <Link href={"/mails?name=Inbox"}>
            <h5>Email</h5>
          </Link>
          <Link href={"/globalChat?name=All Conversion"}>
            <h5>Webchat</h5>
          </Link>
          <Link href={"/calls?name=All Calls"}>
            <h5>Call</h5>
          </Link>
          <h5>Internal Note</h5>
        </div>

        <div className="flex rounded-3xl border border-grayX11 h-[38px] lg:h-[60px] 2xl:h-[78px]  items-center p-2 ">
          <input
            className="flex-1 text-[18px] 2xl:text-[24px] text-darkSilverColor bg-white outline-none  ml-[40px]"
            type="text"
            placeholder="Type a message"
          />
          <span>
            <svg
              width="38"
              height="30"
              viewBox="0 0 38 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M26.3697 20.9413C23.9724 24.9203 19.6775 27.8051 14.6832 27.8051C7.29153 27.8051 1.3981 21.6377 1.59788 14.575C1.59788 7.51222 7.49131 1.84209 14.6832 1.84209C17.2802 1.84209 19.8772 2.53845 22.0747 3.93111C22.2745 4.13006 22.7741 3.93109 22.7741 3.73214C22.9739 3.53319 22.7739 3.0358 22.5742 3.0358C20.1769 1.34473 17.58 0.648438 14.7832 0.648438C6.69231 0.648438 0.499023 7.01485 0.499023 15.0723C0.499023 22.8314 6.89208 28.9989 14.7832 28.9989C20.2769 28.9989 24.7718 25.9151 27.1691 21.6377C27.3688 21.4387 27.1689 20.9413 26.9691 20.9413C26.8692 20.444 26.5694 20.444 26.3697 20.9413Z"
                fill="#6D6D6D"
                stroke="#6D6D6D"
                stroke-width="0.4642"
                stroke-miterlimit="9.284"
              />
              <path
                d="M20.6759 15.271C19.2775 15.271 17.7793 14.0773 17.7793 12.3863C17.7793 10.6952 18.9778 9.50146 20.6759 9.50146C22.0743 9.50146 23.5725 10.6952 23.5725 12.3863C23.2729 14.0773 22.0743 15.271 20.6759 15.271ZM20.6759 10.7946C19.6771 10.7946 18.9776 11.491 18.9776 12.4857C18.9776 13.4805 19.6771 14.1768 20.6759 14.1768C21.6748 14.1768 22.3737 13.4805 22.3737 12.4857C22.2738 11.6899 21.5749 10.7946 20.6759 10.7946Z"
                fill="#6D6D6D"
                stroke="#6D6D6D"
                stroke-width="0.4642"
                stroke-miterlimit="9.284"
              />
              <path
                d="M8.9894 15.271C7.59098 15.271 6.09277 14.0773 6.09277 12.3863C6.09277 10.6952 7.29132 9.50146 8.9894 9.50146C10.3878 9.50146 11.886 10.6952 11.886 12.3863C11.886 14.0773 10.6875 15.271 8.9894 15.271ZM8.9894 10.7946C7.99053 10.7946 7.29161 11.491 7.29161 12.4857C7.29161 13.4805 7.99053 14.1768 8.9894 14.1768C9.98827 14.1768 10.6877 13.4805 10.6877 12.4857C10.6877 11.6899 10.188 10.7946 8.9894 10.7946Z"
                fill="#6D6D6D"
                stroke="#6D6D6D"
                stroke-width="0.4642"
                stroke-miterlimit="9.284"
              />
              <path
                d="M14.9821 24.2241C11.8856 24.2241 9.28848 22.8315 7.39062 20.4441C7.39062 20.2451 7.39062 19.9467 7.39062 19.7477C7.39062 19.5488 7.5904 19.5488 7.89006 19.5488H22.1742C22.374 19.5488 22.6736 19.5488 22.6736 19.7477C22.6736 19.9467 22.6736 20.2451 22.6736 20.4441C20.6759 22.8315 17.779 24.2241 14.9821 24.2241ZM8.98891 20.9414C10.687 22.6325 12.7845 23.3289 14.8822 23.3289C17.2794 23.3289 19.1777 22.3341 20.7759 20.9414H8.98891Z"
                fill="#6D6D6D"
                stroke="#6D6D6D"
                stroke-width="0.4642"
                stroke-miterlimit="9.284"
              />
              <path
                d="M37.0572 7.71115C37.0572 7.9101 37.057 8.20854 36.8572 8.40749C36.6575 8.60644 36.3581 8.60645 36.1583 8.60645H30.964V13.7791C30.964 14.2765 30.4646 14.7739 29.9651 14.7739C29.7653 14.7739 29.466 14.7739 29.2662 14.575C29.0664 14.376 29.0662 14.0776 29.0662 13.8786V8.7059H23.8719C23.3725 8.7059 22.873 8.20852 22.873 7.71115C22.873 7.5122 22.8732 7.21376 23.073 7.01481C23.2728 6.81586 23.5726 6.81585 23.7724 6.81585H28.9663V1.64319C28.9663 1.14581 29.4657 0.648438 29.9651 0.648438C30.1649 0.648438 30.4648 0.648389 30.6645 0.847339C30.8643 1.04629 30.864 1.34473 30.864 1.54368V6.7164H36.0583C36.5578 7.01482 37.0572 7.21377 37.0572 7.71115Z"
                fill="#6D6D6D"
                stroke="#6D6D6D"
                stroke-width="0.4642"
                stroke-miterlimit="9.284"
              />
            </svg>
          </span>
          <span className="ml-[10px]">
            <svg
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.33767 28.7001C6.94038 28.7001 4.54319 27.7054 2.945 26.1138C-0.650936 22.5327 -0.650936 16.6637 2.945 13.381L14.1325 2.23977C16.5298 -0.147632 20.825 -0.147632 23.1224 2.23977C25.4198 4.62717 25.5197 8.90461 23.1224 11.1925L11.9348 22.3338C10.5364 23.7264 8.13941 23.7264 6.741 22.3338C5.34258 20.9411 5.34258 18.5537 6.741 17.161L15.0314 8.90462C15.5309 8.40724 16.0305 8.40724 16.2303 8.90462C16.7297 9.40199 16.7297 9.89938 16.2303 10.0983L7.93935 18.3548C7.24014 19.0511 7.24014 20.2448 7.93935 20.9411C8.63856 21.6374 9.8373 21.6374 10.5365 20.9411L21.724 9.79986C23.6219 7.90983 23.6219 5.02509 21.724 3.43349C19.8262 1.84188 16.9291 1.54346 15.3309 3.43349L4.14384 14.5747C1.24711 17.4595 1.24711 21.9359 4.14384 25.0196C7.04056 27.9044 11.5355 27.9044 14.632 25.0196L25.819 13.8784C26.3185 13.381 26.8181 13.381 27.0179 13.8784C27.5173 14.3758 27.5173 14.8731 27.0179 15.0721L15.8303 26.2133C13.9325 27.8049 11.5352 28.7001 9.33767 28.7001Z"
                fill="#6D6D6D"
              />
            </svg>
          </span>
          <span className="ml-[10px]">
            <svg
              width="34"
              height="28"
              viewBox="0 0 34 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M33.2702 1.03977C33.2702 0.840821 33.2702 0.840821 33.2702 0.542395V0.343433C33.2702 0.343433 33.2705 0.343482 33.0707 0.144531H32.8708H32.6713H32.4713H32.2713L1.60633 17.4532C0.907119 17.9505 0.607458 18.6469 1.10689 19.3432C1.30667 19.8406 1.80581 20.0396 2.30525 20.0396L12.4939 19.5422L12.6939 26.4059C12.6939 26.6049 12.6939 26.6049 12.6939 26.9033C12.6939 26.9033 12.8934 27.1023 12.8934 27.4007C12.8934 27.4007 13.0931 27.5996 13.3928 27.5996C13.5926 27.5996 13.5926 27.5996 13.8922 27.5996H14.0922H14.2917L14.4917 27.4007L19.9854 21.5317L28.2759 23.9191C28.2759 23.9191 28.4756 23.9191 28.7753 23.9191C29.4745 23.9191 29.9743 23.4217 30.1741 22.7253L33.9696 1.63666V1.23873C33.4702 1.23873 33.2702 1.23872 33.2702 1.03977ZM21.3838 8.79882L12.3939 16.8563L6.90015 17.0553L21.3838 8.79882ZM29.9741 4.81981L27.0775 20.6364L15.3905 17.5527L29.9741 4.81981Z"
                fill="#40F440"
              />
            </svg>
          </span>
        </div>
        <div className="mt-2 mb-[34px] relative ">
          <span
            onClick={() => handleTepmlate()}
            className="bg-palatinatePurple cursor-pointer text-white p-1 px-2 rounded-md">
            Template
          </span>
          <span className="bg-palatinatePurple text-white p-1 px-2 rounded-md ml-2">
            Payment
          </span>
          {showTemplate && (
            <div className="pb-[17px] absolute bg-white border border-palatinatePurple w-[252px]  z-40 -top-52 rounded-lg left-1">
              {!showAddNewTemplate ? (
                <div>
                  <h5
                    onClick={() => setShowAddNewTemplate(!showAddNewTemplate)}
                    className="ripple pt-[17px]  pl-[31px] cursor-pointer text-[16px] text-palatinatePurple font-bold font-arial">
                    + Add New Template
                  </h5>
                  <h5 className="ripple pl-[31px] text-[16px] text-darkSilverColor font-bold font-arial py-1">
                    Thank You
                  </h5>
                  <h5 className="ripple pl-[31px] text-[16px] text-darkSilverColor font-bold py-1">
                    Invoice Sent
                  </h5>
                  <h5 className="ripple pl-[31px] text-[16px] text-darkSilverColor font-bold py-1">
                    Work Hours
                  </h5>
                  <h5 className="ripple  pl-[31px] text-[16px] text-darkSilverColor font-bold py-1">
                    Out Of Office{" "}
                  </h5>
                </div>
              ) : (
                <div className="p-[20px]">
                  <div>
                    <h5 className="text-[#6D6D6D] font-bold text-[16px] ">
                      Title
                    </h5>
                    <input
                      className="bg-cultured py-[6px] pl-[10px] w-full rounded-xl text-[12px] italic"
                      type="text"
                      placeholder="Type template..."
                    />
                  </div>
                  <div>
                    <h5 className="text-[#6D6D6D] font-bold text-[16px] ">
                      Message
                    </h5>
                    <input
                      className="bg-cultured py-[6px] h-[71px] pl-[10px] w-full rounded-xl text-[12px]"
                      type="text"
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;

function groupBy(arr: any, key: any) {
  return arr.reduce((acc: any, obj: any) => {
    const group = obj[key];
    acc[group] = acc[group] || [];
    acc[group].push(obj);
    return acc;
  }, {});
}
