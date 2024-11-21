"use client";
import { MenuIcon } from "@/svgs/checkIn/svgs";
import React, { useState } from "react";
import MemberRequestDropDown from "./MemberRequestDropDown";
import RequestMemberReview from "./RequestReview";
import { Check } from "lucide-react";

// CSS styles for the typography used in the component
const Typography: React.CSSProperties = {
  fontFamily: "Arial",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

// CSS styles for the check-in title
const CheckInStyle: React.CSSProperties = {
  ...Typography,
  color: "#6D6D6D",
  fontSize: "22px",
};

/**
 * ReviewRequest Component
 * @returns {JSX.Element} The rendered component for review requests
 */
const ReviewRequest: React.FC = (): JSX.Element => {
 
  // State to manage the visibility of the review component
  const [show, setShow] = useState(false);
  // State to manage the phone number input
  const [phoneNumber, setPhoneNumber] = useState("");
  // State to manage the email input
  const [email, setEmail] = useState("");
  // State to manage phone number validity
  const [phoneNumberValid, setPhoneNumberValid] = useState(false);
  // State to manage email validity
  const [emailValid, setEmailValid] = useState(false);

  // Handle phone number input change
  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;

    // Remove non-digit characters from the input
    inputValue = inputValue.replace(/\D/g, "");

    // Add parentheses around the first three digits and hyphen after next three digits
    let formattedPhoneNumber = "";
    if (inputValue.length > 0) {
      formattedPhoneNumber += `(${inputValue.slice(0, 3)}`;
    }
    if (inputValue.length > 3) {
      formattedPhoneNumber += `) ${inputValue.slice(3, 6)}-${inputValue.slice(
        6,
        10
      )}`;
    }
    setPhoneNumber(formattedPhoneNumber);

    // Regular expression for US phone number format
    const phoneNumberPattern = /^\(\d{3}\) \d{3}-\d{4}$/;
    setPhoneNumberValid(phoneNumberPattern.test(formattedPhoneNumber));
  };

  // Handle email input change
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
    // Regular expression for email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailPattern.test(inputValue));
  };

  // Define the members for the dropdown
  const members = [
    { value: "option1", label: "Melissa Huidson" },
    { value: "option2", label: "Angela Parker" },
    { value: "option3", label: "Tianna Bradshaw" },
    { value: "option4", label: "Greta Tyler" },
    { value: "option5", label: "Dolores Collins" },
    { value: "option6", label: "Patrick Callahan" },
  ];

  // Handle the selection of a member from the dropdown
  const handleSelect = (option: { label: string; value: string }) => {
    console.log("Selected option:", option);
  };

  return (
    <>
      {!show && (
        <div className="flex justify-center items-center w-full">
          <div className="flex flex-col w-full md:w-[430px] absolute top-0 items-center lg:w-[430px] h-[900px]">
            <div className="flex rounded-b-3xl items-center justify-center w-full md:w-[430px] h-[60px] bg-[#E0E0E0]">
              <div className="flex px-5 ml-7 py-4">
                <MenuIcon />
              </div>
              <div className="flex -ml-10 justify-center items-center flex-grow">
                <span style={CheckInStyle}>Review Request</span>
              </div>
            </div>
            <div className="flex -ml-28 justify-start px-2 py-5">
              <span className="text-[#6D6D6D]" style={Typography}>
                Steven’s Rockstars - Review Request
              </span>
            </div>
            <div className="flex px-6 items-center py-5 w-[380px] z-20 h-[55px] bg-[#631363] rounded-2xl">
              <span className="text-[#FFFFFF]" style={Typography}>
                Review Request
              </span>
            </div>

            <div className="flex px-6 gap-4 py-10 w-[380px] -mt-4 z-0 min-h-[575px] bg-[#E0E0E0] rounded-t-md">
              <div className="flex gap-4 flex-col flex-auto">
                <div className="flex gap-5 justify-end">
                  <span className="text-[#6D6D6D] my-4" style={Typography}>
                    Team Members*
                  </span>
                  <MemberRequestDropDown
                    options={members}
                    onSelect={handleSelect}
                  />
                </div>
                <div className="flex gap-5 justify-end">
                  <span className="text-[#6D6D6D] my-4" style={Typography}>
                    Customer Name*
                  </span>
                  <input className="h-12 px-1 text-center rounded-lg focus:outline-none" />
                </div>
                <div className="flex gap-5 justify-end">
                  <div className="flex flex-col">
                    <span
                      className="text-[#6D6D6D] flex justify-end items-center my-4"
                      style={Typography}
                    >
                      Address*
                    </span>
                  </div>
                  <input
                    placeholder="Enter Location"
                    className="h-12 text-center px-3 italic rounded-lg focus:outline-none"
                  />
                </div>
                <div className="flex gap-4 justify-end">
                  <span className="text-[#6D6D6D] my-4 font-bold -ml-4 text-[14px]">
                    City/ST/Postal Code*
                  </span>
                  <div className="flex gap-1">
                    <input className="h-12 w-[62px] text-center rounded-lg focus:outline-none" />
                    <input className="h-12 w-[62px] text-center rounded-lg focus:outline-none" />
                    <input className="h-12 w-[62px] text-center rounded-lg focus:outline-none" />
                  </div>
                </div>
                <div className="flex gap-5 justify-end">
                  <div className="flex flex-col">
                    <span
                      className="text-[#6D6D6D] flex justify-end items-center my-4"
                      style={Typography}
                    >
                      Phone*
                    </span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <input
                      className="h-12 w-40 -mr-[33px] text-center rounded-lg focus:outline-none"
                      value={phoneNumber}
                      placeholder="(123) 456-7890"
                      onChange={handlePhoneNumberChange}
                    />
                    <div className="h-12 w-[62px] text-center markIcon rounded-lg focus:outline-none">
                      {phoneNumberValid && (
                        <div className="bg-[#40F440] py-3 h-8 w-9 rounded-md flex justify-center items-center">
                          <Check />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 justify-end">
                  <div className="flex flex-col">
                    <span
                      className="text-[#6D6D6D] flex justify-end items-center my-4"
                      style={Typography}
                    >
                      Email*
                    </span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <input
                      placeholder="joh@gmail.com"
                      className="h-12 w-40 -mr-[33px] text-center rounded-lg focus:outline-none"
                      value={email}
                      onChange={handleEmailChange}
                    />
                    <div className="h-12 w-[62px] markIcon text-center rounded-lg focus:outline-none">
                      {emailValid && (
                        <div className="bg-[#40F440] py-3 h-8 w-9 rounded-md flex justify-center items-center">
                          <Check />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex  w-full justify-end">
                  <div className="flex w-[40%] pl-1 ml-2">
                  <span className="text-[#6D6D6D] my-4" style={Typography}>
                    Date and Time*
                  </span>
                  </div>
                 <div className="flex w-[60%]">
                 <input className="h-12 px-1 text-center rounded-lg focus:outline-none" />
                 </div>
                </div>
                <div className="flex justify-center">
                  <button
                    className="px-7 py-3 bg-[#40F440] rounded-md"
                    style={Typography}
                    onClick={() => setShow(true)}
                  >
                    Request Review
                  </button>
                </div>
              </div>
            </div>
            <div className="flex w-[400px] z-0 -mt-3 justify-center items-center bottom-0 bg-[#40F440] h-[55px] rounded-t-3xl"></div>
          </div>
        </div>
      )}
      {show && <RequestMemberReview />}
    </>
  );
};

export default ReviewRequest;
