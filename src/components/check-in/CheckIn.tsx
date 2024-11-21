"use client";
import { CameraIcon, MenuIcon, VideoIcon } from "@/svgs/checkIn/svgs";
import React, { useState } from "react";
import MemberDropDown from "./MemberDropDown";
import Model from "./Model";
import RequestReview from "./RequestReview";
import CitationNavbar from "../review-dashboard-mobile/ReviewNavbar";

// Define the Typography style
const Typography: React.CSSProperties = {
  fontFamily: "Arial",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

// Define the CheckInStyle which extends Typography
const CheckInStyle: React.CSSProperties = {
  ...Typography,
  color: "#6D6D6D",
  fontSize: "22px",
};

/**
 * CheckIn Component
 *
 * This component represents a form for team members to check in with their address,
 * customer name, and other details. It also allows uploading photos or videos.
 */
const CheckIn: React.FC = () => {
  // State for controlling visibility of the form and modal
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Function to open the modal
  const openModal = () => setShowModal(true);

  // Function to close the modal
  const closeModal = () => setShowModal(false);

  // List of team members
  const members = [
    { value: "option1", label: "Melissa Huidson" },
    { value: "option2", label: "Angela Parker" },
    { value: "option3", label: "Tianna Bradshaw" },
    { value: "option4", label: "Greta Tyler" },
    { value: "option5", label: "Dolores Collins" },
    { value: "option6", label: "Patrick Callahan" },
  ];

  // Callback function for handling member selection
  const handleSelect = React.useCallback(
    ({ label, value }: { label: string; value: string }) =>
      console.log("Selected option:", { label, value }),
    []
  );

  return (
    <>
      {!show && (
        <div className="flex justify-center items-center w-full">
          <div className="flex flex-col w-full absolute top-0 items-center h-full bg-[#F4F4F4]">
            <CitationNavbar heading={"Check-In"} />
            <div className="flex w-full justify-start px-2 md:px-6 py-5">
              <span className="text-[#6D6D6D]" style={Typography}>
                Steven’s Rockstars - Address Check-in
              </span>
            </div>
            <div className="px-6 w-full">
              <div className="flex flex-col gap-4 rounded-3xl w-full bg-[#E0E0E0] rounded-t-md">
                <div className="flex w-full px-6 items-center py-5  bg-[#631363] rounded-2xl">
                  <span className="text-[#FFFFFF]" style={Typography}>
                    Address Check-in
                  </span>
                </div>
                <div className="flex gap-4 w-full flex-col px-2">
                  <div className="flex w-full gap-5">
                    <div
                      className="text-[#6D6D6D] text-[11px] flex-1 md:text-[20px] my-4 w-2/6"
                      style={Typography}>
                      Team Members*
                    </div>
                    <MemberDropDown options={members} onSelect={handleSelect} />
                  </div>
                  <div className="flex w-full gap-5 ">
                    <div
                      className="text-[#6D6D6D] flex-1 whitespace-nowrap my-4 flex w-[130px] text-[11px] md:text-[20px] justify-center md:w-1/6"
                      style={Typography}>
                      Customer Name*
                    </div>
                    <input className="h-12 px-1 w-[190px] text-center rounded-lg focus:outline-none" />
                  </div>
                  <div className="flex gap-5 ">
                    <div className="flex-col flex  w-[130px] text-[11px] md:text-[20px] justify-center md:w-2/6">
                      <div className="text-[#6D6D6D] flex " style={Typography}>
                        Address
                      </div>
                      <span className="text-[#631363] flex  text-[11px] md:text-[20px] justify-center md:w-2/6 font-bold ">
                        (Search near by location if exact location not found)*
                      </span>
                    </div>
                    <input
                      placeholder="Enter Location"
                      className="h-12 text-center w-[190px] px-3 italic rounded-lg focus:outline-none"
                    />
                  </div>
                  <div className="flex gap-4 ">
                    <div className="text-[#6D6D6D] my-4 font-bold w-[130px] text-[11px] md:text-[20px] md:w-1/6">
                      City/ST/Postal Code*
                    </div>
                    <div className="flex gap-1 w-[190px]">
                      <input className="h-12 w-[62px] text-center rounded-lg focus:outline-none" />
                      <input className="h-12 w-[62px] text-center rounded-lg focus:outline-none" />
                      <input className="h-12 w-[62px] text-center rounded-lg focus:outline-none" />
                    </div>
                  </div>
                  <div className="flex gap-4 ">
                    <div
                      className="text-[#6D6D6D] w-[130px] text-[11px] md:text-[20px]  md:w-1/6"
                      style={Typography}>
                      Photo or Video (optional)
                    </div>
                    <div
                      className="flex px-4 items-center gap-2 w-[190px] h-[50px] rounded bg-[#fffdfd]"
                      onClick={openModal}>
                      <CameraIcon />
                      <VideoIcon />
                      <input
                        className="h-12 hidden w-[62px]"
                        type="file"
                        id="img"
                        name="img"
                      />
                      <label
                        htmlFor="img"
                        className="text-[#6D6D6D] cursor-pointer italic font-bold text-[12px]">
                        No file chosen
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-5 ">
                    <div
                      className="text-[#6D6D6D] w-[130px] my-4 text-[11px] md:text-[20px] justify-center md:w-1/6"
                      style={Typography}>
                      Work Description (public checkin / service summary)*
                    </div>
                    <input className="h-18 text-center w-[190px] px-2 rounded-lg focus:outline-none" />
                  </div>
                  <div className="flex gap-5  w-full">
                    <div
                      className="text-[#6D6D6D]  my-4 flex justify-center w-[130px] text-[11px] md:text-[20px]  md:w-1/6"
                      style={Typography}>
                      Date and Time*
                    </div>
                    <input className="h-12 px-1 w-[190px] text-center rounded-lg focus:outline-none" />
                  </div>
                  <div className="flex justify-center">
                    <button
                      className="px-7 py-3 bg-[#40F440] rounded-md"
                      style={Typography}
                      onClick={() => setShow(true)}>
                      Check In
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full md:hidden z-0 -mt-3 justify-center items-center bottom-0 bg-[#40F440] h-[55px] rounded-t-3xl"></div>
          </div>
          {showModal && <Model closeModal={closeModal} />}
        </div>
      )}
      {show && <RequestReview />}
    </>
  );
};

export default CheckIn;
