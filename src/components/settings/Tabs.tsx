"use client";
import React, { useState } from "react";
import MyProfile from "./MyProfile";
import CompanyProfile from "./CompanyProfile";
import SurveySettings from "./SurveySettings";
import Maps from "./Maps";
import Api from "./Api";
import MyPassword from "./MyPassword";
const tabStyle: React.CSSProperties = {
  color: "#3D3D3D",
  fontFamily: "Arial",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal"
};

const TabComponent = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState("tab1");

  // Function to handle tab change
  const handleTabChange = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex  w-[400px]  justify-center flex-col items-center" >
      {/* Tab buttons */}
      <div className="flex flex-col w-[400px]  space-y-3  mb-4  " style={tabStyle}>
        <div className=" grid grid-cols-3 rounded-full bg-[#f1eeeeee]">
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "tab1"
                ? "bg-[#40F440] font-[400] text-[#3D3D3D] rounded-l-full"
                : " text-[#3D3D3D] font-[400]"
            }   duration-300 ease-in-out`}
            onClick={() => handleTabChange("tab1")}
            
          >
            My Profile
          </button>
          <button
            className={`px-4 py-2  font-[400] rounded ${
              activeTab === "tab2"
                ? "bg-[#40F440] text-[#3D3D3D] "
                : " text-[#3D3D3D]"
            }  duration-300 ease-in-out`}
            onClick={() => handleTabChange("tab2")}
          >
            Company Profile
          </button>
          <button
            className={`px-4 py-2  font-[400] rounded ${
              activeTab === "tab3"
                ? "bg-[#40F440] text-[#3D3D3D] rounded-r-full"
                : " text-[#3D3D3D]"
            }  duration-300 ease-in-out`}
            onClick={() => handleTabChange("tab3")}
          >
            Survey Settings
          </button>
        </div>

        <div className=" h-[50px] grid grid-cols-3 rounded-full bg-[#f1eeeeee]">
          <button
            className={`px-4 py-2  font-[400] rounded ${
              activeTab === "tab4"
                ? "bg-[#40F440] text-[#3D3D3D] rounded-l-full"
                : " text-[#3D3D3D]"
            }  duration-300 ease-in-out`}
            onClick={() => handleTabChange("tab4")}
          >
            Maps
          </button>
          <button
            className={`px-4 py-2  font-[400] rounded ${
              activeTab === "tab5"
                ? "bg-[#40F440] text-[#3D3D3D] "
                : " text-[#3D3D3D]"
            }  duration-300 ease-in-out`}
            onClick={() => handleTabChange("tab5")}
          >
            API
          </button>
          <button
            className={`px-4 py-2  font-[400] rounded ${
              activeTab === "tab6"
                ? "bg-[#40F440] text-[#3D3D3D] rounded-r-full"
                : " text-[#3D3D3D]"
            }  duration-300 ease-in-out`}
            onClick={() => handleTabChange("tab6")}
          >
            My Password
          </button>
        </div>
      </div>

      {/* Content based on active tab */}
     <div className="flex -pt-10 flex-col items-center">
     {activeTab === "tab1" && <MyProfile />}
      {activeTab === "tab2" && <CompanyProfile />}
      {activeTab === "tab3" && <SurveySettings />}
      {activeTab === "tab4" && <Maps />}
      {activeTab === "tab5" && <Api />}
      {activeTab === "tab6" && <MyPassword />}
     </div>
    </div>
  );
};

export default TabComponent;
