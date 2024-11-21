import React, { useState } from "react";

interface PropsInterface {
  handleClose: () => void;
}

const CalendarModal: React.FC<PropsInterface> = ({ handleClose }) => {
  const [activeTab, setActiveTab] = useState("Scheduling Link");

  const tabs = ["Scheduling Link", "One Time Link", "Embed Code"];

  return (
    <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-cultured rounded-lg shadow-lg p-2 w-[304px]  ">
        {/* Header */}
        <div className="flex justify-between items-center mb-4  p-2">
          <h2 className="text-[20px] text-darkSilverColor font-bold">
            John’s Calendar
          </h2>
          <button
            onClick={() => handleClose()}
            className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-4">
          <ul className="flex ">
            {tabs.map((tab) => (
              <li
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer mx-1 text-[12px] font-bold pb-2 ${
                  activeTab === tab
                    ? "border-b-2 border-palatinatePurple text-palatinatePurple font-semibold"
                    : "text-darkSilverColor"
                }`}>
                <span className="">{tab}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div>
          {activeTab === "Scheduling Link" && (
            <div>
              <div className="mb-6">
                <label className="block text-[12px] font-bold text-darkSilverColor mb-2">
                  Scheduling Link
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    className="w-full  border-none outline-none bg-white rounded-xl px-3 py-2 text-[12px]"
                  />
                  <button className="bg-limeGreen  font-bold rounded-2xl px-3 py-2">
                    Copy
                  </button>
                </div>
                <p className="text-[9px] text-darkSilverColor  mt-2">
                  The scheduling link is determined by the slug. Adjust the
                  slug, and the scheduling link automatically adapts to the
                  modification.
                </p>
              </div>

              <div>
                <label className="block text-[12px] font-bold text-darkSilverColor mb-2">
                  Permanent Link
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    className="w-full  border-none outline-none bg-white rounded-xl px-3 py-2 text-[12px]"
                  />
                  <button className="bg-limeGreen font-bold rounded-2xl px-3 py-2">
                    Copy
                  </button>
                </div>
                <p className="text-[9px] text-darkSilverColor  mt-2">
                  Ideal for funnels, website redirects or ads, the permanent
                  link remains constant, unaffected by slug changes.
                </p>
              </div>
            </div>
          )}

          {activeTab === "One Time Link" && (
            <div>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  className="w-full  border-none outline-none bg-white rounded-xl px-3 py-2 text-[12px]"
                />
                <button className="bg-limeGreen font-bold rounded-2xl px-3 py-2">
                  Copy
                </button>
              </div>
              <div className="flex items-center mt-[13px]">
                <span>
                  <svg
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.99986 3.3999L6.39988 3.59985C6.19988 3.59985 5.99986 3.39995 5.99986 3.19995C5.99986 2.99995 6.09991 2.8998 6.29991 2.7998L6.99986 2.69995C5.49986 1.69995 3.49987 1.89995 2.19987 3.19995C0.999872 4.39995 0.69986 6.19995 1.49986 7.69995C1.59986 7.89995 1.49991 8.09995 1.29991 8.19995C1.19991 8.19995 1.1999 8.19995 1.0999 8.19995C0.999897 8.19995 0.799909 8.1 0.799909 8C-0.100091 6.2 0.299872 4.09985 1.69987 2.59985C3.29987 0.999853 5.59988 0.799902 7.39988 1.8999L7.29991 1.2998C7.29991 1.0998 7.3999 0.899902 7.5999 0.899902C7.7999 0.899902 7.99986 0.999951 7.99986 1.19995L8.29991 2.7998C8.29991 3.0998 8.19986 3.2999 7.99986 3.3999Z"
                      fill="#631363"
                    />
                    <path
                      d="M7.00037 10.1999C6.40037 10.4999 5.60039 10.6999 4.90039 10.6999C4.00039 10.6999 3.20039 10.4999 2.40039 9.99993L2.50037 10.5998C2.50037 10.7998 2.40038 10.9999 2.20038 10.9999C2.20038 10.9999 2.2004 10.9999 2.1004 10.9999C1.9004 10.9999 1.80038 10.8999 1.70038 10.6999L1.40039 9.09979C1.40039 9.09979 1.40039 9.09993 1.40039 8.99993C1.40039 8.99993 1.40039 8.99983 1.40039 8.89983C1.40039 8.89983 1.40037 8.89983 1.50037 8.89983C1.50037 8.89983 1.5004 8.89983 1.6004 8.89983L3.20038 8.69988C3.40038 8.69988 3.6004 8.79993 3.6004 8.99993C3.6004 9.19993 3.50042 9.39983 3.30042 9.39983L2.6004 9.49993C4.1004 10.4999 6.10039 10.2999 7.40039 8.99993C8.60039 7.79993 8.9004 5.99993 8.1004 4.49993C8.0004 4.29993 8.10042 4.09993 8.30042 3.99993C8.50041 3.89993 8.70042 3.99988 8.80042 4.19988C10.2004 6.19988 9.30037 8.99988 7.00037 10.1999Z"
                      fill="#631363"
                    />
                  </svg>
                </span>
                <label className=" text-[12px] font-bold text-palatinatePurple ml-2">
                  Generate New Link
                </label>
              </div>

              <label className="block text-[12px] mt-[16px] font-bold text-darkSilverColor ml-2">
                One Time Link
              </label>
              <p className="text-[9px] text-darkSilverColor font-normal mt-[7px]">
                Share your availability every time with a unique link that
                expires after a booking, ensuring controlled access.
              </p>
            </div>
          )}

          {activeTab === "Embed Code" && (
            <div>
              <label className="block text-[12px] font-bold text-darkSilverColor ml-2">
                Embed Code
              </label>
              <p className="text-[9px] text-darkSilverColor font-normal mt-[7px] ml-2">
                Share your availability every time with a unique link that
                expires after a booking, ensuring controlled access.
              </p>

              <textarea
                className="w-full min-h-[125px] text-[12px] text-darkSilverColor rounded-lg mt-[21px]  py-[8px] px-[14px]"
                name=""
                id=""
                value='
                            <iframe src="https://api.hubspark.com/
                            widget/booking/Ipzd0K9hFhlK7C3hs9nw" style
                            ="width: 100%;border:none;overflow: hidden;" 
                            scrolling="no" id="Ipzd0K9hFhlK7C3hs9nw_17
                            5372166578"></iframe><br><script src="https:
                            //link.msgsndr.com/js/form_embed.js" type="te
                            xt/javascript"></script>
                            '></textarea>
              <div className="flex justify-end mt-[12px]">
                <button className="bg-limeGreen rounded-2xl font-bold px-3 py-2">
                  Copy
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;
