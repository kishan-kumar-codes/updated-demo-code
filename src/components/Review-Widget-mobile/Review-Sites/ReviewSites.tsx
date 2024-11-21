"use client";
// import { HeaderBarMobile } from "@/components/citations-builder/HeadBar";
import Header from "@/components/Reputation-mobile/Header";
import React, { useState } from "react";
import ReviewModel from "./ReviewModel";
import CitationNavbar from "@/components/review-dashboard-mobile/ReviewNavbar";

const typography: React.CSSProperties = {
  color: "#631363",
  fontFamily: "Arial",
};
const ReviewSites = () => {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Function to open the modal
  const openModal = () => setShowModal(true);

  // Function to close the modal
  const closeModal = () => setShowModal(false);
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <CitationNavbar heading=" Review Widget" isHeaderVisible={false} />
      <div className="flex flex-col w-full justify-center items-center h-full ">
        <div className="flex flex-col gap-7 justify-center items-center w-full h-full pt-2 md:pt-8  bg-[#F4F4F4]">
          {/* <Header title={" Review Widget"} displayName=" Select Review Sites" /> */}
          <div className="flex flex-col w-[90%] z-10   h-full ">
            {/* <HeaderBarMobile title="Select Review Sites" /> */}
            <div className="flex rounded-3xl z-10 justify-start w-full bg-[#E0E0E0]">
              <div className="flex flex-col  w-full h-full gap-5">
                <div className="bg-[#631363] pl-[3%] md:text-2xl lg:text-[26px] md:font-normal text-white font-[Arial] text-[16px] font-bold flex w-full rounded-2xl py-2">
                  Select Review Sites
                </div>
                <div className="flex flex-col min-h-[440px] w-full h-full gap-4 justify-center items-center flex-grow">
                  <div
                    className="cursor-pointer md:text-2xl lg:text-[26px] md:font-normal text-white font-[Arial] text-[16px] bg-[#2ec950] rounded-3xl px-5 py-2 hover:text-gray-500 font-bold"
                    style={{
                      ...typography,
                      color: "#631363",
                    }}
                    onClick={openModal}>
                    Review Sites
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-full z-50">
            {showModal && <ReviewModel closeModal={closeModal} />}
          </div>
        </div>
        <div className="flex w-full justify-center md:hidden mt-4 items-center bg-[#40F440] h-[55px] rounded-t-3xl"></div>
      </div>
    </div>
  );
};

export default ReviewSites;
