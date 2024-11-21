"use client";

import { useState } from "react";
import LayoutView from "../calendar/layout/page";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <LayoutView
      Childrens={
        <div className="relative pb-[30px] w-full bg-cultured">
          <div className="mx-[18px] h-full mt-[19px] bg-chinesWhite rounded-xl">
            <div className="bg-palatinatePurple flex pl-[16px] py-[11px] text-[16px] font-bold rounded-xl text-white">
              <h4>Contacts</h4>
            </div>

            {/* Contacts Section */}
            <div className="px-[16px] mt-[16px]">
              <div className=" rounded-b-lg">
                {/* Search Input */}
                <div className="flex bg-white rounded-lg  text-darkSilverColor items-center mb-4">
                  <input
                    type="text"
                    placeholder="New Name"
                    className="p-2  outline-none bg-[#f4f4f4] rounded-lg w-full"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className=" p-2 bg-cultured text-gray-600">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                {/* No Contacts Found */}
                <div className="text-center text-darkSilverColor font-bold text-[16px] mt-[26px] my-8">
                  No contacts found
                </div>

                {/* Create New Contact Button */}
                <div className="flex justify-center">
                  <button className="bg-limeGreen  font-bold py-2 text-[16px] px-4 rounded-xl">
                    Create New Contact
                  </button>
                </div>
              </div>
            </div>

            {/* Green Footer */}
          </div>
        </div>
      }
    />
  );
};

export default Contacts;
