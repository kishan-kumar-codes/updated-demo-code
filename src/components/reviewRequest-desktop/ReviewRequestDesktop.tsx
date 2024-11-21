"use client";
import React, { useState } from "react";

import { CheckInCameraSvg, CheckInVideoSvg } from "@/svgs/checkin-desktop/svgs";
// import CheckInDropDown from "../checkin-desktop/CheckInDropDown";
// import TimeInput from "../checkin-desktop/TimeInput";
// import CheckInModel from "../checkin-desktop/CheckInModel";
import { Check } from "lucide-react";

const Typography: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

const ReviewRequestDesktop = () => {
  const [showModal, setShowModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumberValid, setPhoneNumberValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const handlePhoneNumberChange = (event: { target: { value: any } }) => {
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

  const handleEmailChange = (event: { target: { value: any } }) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
    // Regular expression for email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailPattern.test(inputValue));
  };
  const members = [
    { value: "option1", label: "Melissa Huidson" },
    { value: "option2", label: "Angela Parker" },
    { value: "option3", label: "Tianna Bradshaw" },
    { value: "option4", label: "Greta Tyler" },
    { value: "option5", label: "Dolores Collins" },
    { value: "option6", label: "Patrick Callahan" },
  ];
  const handleSelect = (option: { label: string; value: string }) => {
    console.log("Selected option:", option);
  };
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="w-full overflow-x-hidden lg:w-full md:min-w-[1200px] min-h-screen flex-wrap flex flex-col gap-1 items-center bg-[#F4F4F4]">
      <div>Test</div>
    </div>
  );
};

export default ReviewRequestDesktop;
