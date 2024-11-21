"use client";
import React, { useState } from "react";
import HeadBar from "../citations-builder/HeadBar";
import InputBarField from "../citations-builder/InputBarField";
import SquareCheckBoxButton from "../citations-builder/SquareCheckBox";
import ListDropDown from "../citations-builder/ListDropDown";
const Typography: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
};
const labelStyle: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};
const members = [
  { value: "option1", label: "option1" },
  { value: "option2", label: "option2" },
];
const CompanyProfile = () => {
  const [fileName, setFileName] = useState("No file chosen");
  const [categories, setCategories] = useState("");
  const handleCategoryChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCategories(event.target.value);
  };
  const handleFileChange = (e: any) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("No file chosen");
    }
  };
  const handleSelect = (option: { label: string; value: string }) => {
    console.log("Selected option:", option);
  };

  return (
    <div className=" flex flex-col gap-2  -ml-3 w-[400px] mt-5 m-9 ">
      <HeadBar title="Company Information" />
      <div className="flex rounded-3xl -mt-14 z-10 min-h-[160px]  w-[400px] justify-start px-4 ml-5     bg-[#E0E0E0] py-3">
        <div className="pt-10  w-full">
          <div className="flex flex-col  my-2 ">
            <InputBarField
              direction="flex"
              gap={20}
              width={250}
              label=" Name"
              placeHolder=""
            />
            <InputBarField
              direction="flex"
              gap={20}
              width={250}
              label="Target Keywords"
              placeHolder=""
            />
            <InputBarField
              direction="flex"
              gap={20}
              width={250}
              label="Phone number"
              placeHolder=""
            />
            <div className="flex ml-20 text-center justify-center items-center">
              <span style={Typography}>Visible from your profile page.</span>
            </div>
            <InputBarField
              direction="flex"
              gap={20}
              width={250}
              label="Slogan"
              placeHolder="Enter your unique slogan"
            />
            <InputBarField
              direction="flex"
              gap={20}
              width={250}
              label="Website"
              placeHolder=""
            />
            <div className="flex flex-col gap-3 ml-28 text-center justify-center items-center">
              <span style={Typography}>
                Be sure to add your website. We will link <br /> to it from your
                profile page.
              </span>
              <SquareCheckBoxButton
                label="Suppress Business Schema"
                id="suppressBusinessSchema"
              />
            </div>
            <div className="flex justify-between my-2  gap-12 items-center flex-1">
              <span style={labelStyle}>Settings</span>
              <span style={Typography}>
                {" "}
                Check this only if your website template already provides
                business schema.
              </span>
            </div>
            <InputBarField
              direction="flex"
              gap={20}
              width={250}
              label="Twitter"
              placeHolder=""
              specialChar="@"
            />
            <InputBarField
              direction="flex"
              gap={20}
              width={250}
              label="Google Maps"
              placeHolder=""
              specialChar=" id"
            />
            <div className="flex ml-20 text-center justify-center items-center">
              <span style={Typography}>
                Your Google Maps API Key for displaying <br /> heat-maps, and
                location maps.
              </span>
            </div>
            <InputBarField
              direction="flex"
              gap={20}
              width={250}
              label="Google Place id"
              placeHolder=""
              specialChar=" id"
            />
            <div className="flex ml-20 text-center justify-center items-center">
              <span style={Typography}>
                Your Google Maps API Key for displaying <br /> heat-maps, and
                location maps.
              </span>
            </div>
            <InputBarField
              direction="flex"
              gap={20}
              width={250}
              label="Correspondence Email"
              placeHolder="List email addresses"
            />
            <div className="flex flex-col gap-3 my-5  justify-start items-center">
              <SquareCheckBoxButton
                label="Send e-mail alerts to admins of the location when customers give reviews using HubSpark reviews system."
                id="reviewAlerts"
              />
              <SquareCheckBoxButton
                label="Send e-mail alerts to admins of the location when new reviews received from google."
                id="googleReviewAlerts"
              />
            </div>
            <div className="flex-col   items-center w-24 h-10 flex -ml-1 justify-start ">
              <span
                className="bg-[#40F440]  w-full  flex items-center justify-center  font-semibold text-black p-2  rounded-lg  mt-5"
                style={{ ...Typography, color: "#27272D" }}>
                Save Profile
              </span>
            </div>
          </div>
        </div>
      </div>
      <HeadBar title="Company Logo" />
      <div className="flex flex-col rounded-3xl -mt-14 z-10 min-h-[160px]  w-[400px]  justify-start px-5 ml-5 bg-[#E0E0E0] py-3">
        <div className="flex justify-between pt-5   items-center flex-1">
          <span className="font-semibold">Logo</span>
          <div className="flex justify-center items-center my-5 bg-white rounded-3xl w-[230px] h-28">
            <div className="logo my-10"></div>
          </div>
        </div>
        <div className="flex  w-full justify-between   items-center ">
          <span className="  font-semibold">New Logo</span>
          <div className="flex justify-center items-center  bg-white rounded-3xl w-[237px] h-18">
            <div className="flex my-4 gap-4 justify-start items-center">
              <label className="flex bg-[#6D6D6D] cursor-pointer rounded-md px-2 py-1">
                <span className="text-white">choose file</span>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>

              <span className=" italic flex text-md font-semibold">
                {fileName}
              </span>
            </div>
          </div>
        </div>
        <div className="flex-col my-2  items-center w-24 h-10 flex -ml-1 justify-start ">
          <span
            className="bg-[#40F440]  w-full  flex items-center justify-center  font-semibold text-black p-2  rounded-lg  mt-5"
            style={{ ...Typography, color: "#27272D" }}>
            Upload Logo
          </span>
        </div>
      </div>
      <HeadBar title="Company Location" />
      <div className="flex flex-col rounded-3xl -mt-14 z-10  py-10 min-h-[160px]  w-[400px]  px-5 ml-5 bg-[#E0E0E0] ">
        <div className="flex justify-between w-full  gap-12 items-center pt-5">
          <span style={labelStyle}>Address, City, State, Zip</span>
          <div>
            <input
              type="text"
              id="citations"
              placeholder=""
              className={`py-2 w-[220px] text-center px-3 italic rounded-2xl focus:outline-none`}
            />
            <div className="flex justify-center mt-3 gap-2 ">
              <input
                type="text"
                id="citations"
                placeholder=""
                className={`py-2 w-[70px] text-center px-3 italic rounded-2xl focus:outline-none`}
              />
              <input
                type="text"
                id="citations"
                placeholder=""
                className={`py-2 w-[70px] text-center px-3 italic rounded-2xl focus:outline-none`}
              />
              <input
                type="text"
                id="citations"
                placeholder=""
                className={`py-2 w-[70px] text-center px-3 italic rounded-2xl focus:outline-none`}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between   gap-12 items-center pt-5">
          <span style={labelStyle}>Timezone</span>
          <div className="flex justify-center z-50 w-full">
            <ListDropDown
              options={members}
              onSelect={handleSelect}
              isMobile={true}
            />
          </div>
        </div>
        <div className="flex-col  gap-4  items-center w-32 flex -ml-1 justify-start ">
          <span
            className="bg-[#40F440]  w-full  flex items-center justify-center  font-semibold text-black p-2  rounded-lg  mt-10"
            style={{ ...Typography, color: "#27272D" }}>
            Save Changes
          </span>
        </div>
      </div>
      <HeadBar title="Vertical Markets" />
      <div className="flex flex-col rounded-3xl -mt-14 z-10  py-10 min-h-[260px]  w-[400px] px-5 ml-5 bg-[#E0E0E0] ">
        <div className="flex-col my-4 gap-4 w-full h-[170px] justify-start overflow-y-auto items-start flex -ml-1">
          <SquareCheckBoxButton label="Air Conditioning, Commercial" id="air" />
          <SquareCheckBoxButton
            label="Air Conditioning, Residential"
            id="airconditioning"
          />
          <SquareCheckBoxButton label="Air Duct Cleaning" id="aircondit" />
          <SquareCheckBoxButton label="Air Quality, Indoor" id="quality" />
          <SquareCheckBoxButton
            label="Air Duct Cleaning"
            id="googleReviewAlerts"
          />
          <SquareCheckBoxButton label="Alternative Energy" id="engine" />
          <SquareCheckBoxButton
            label="Send e-mail alerts to admins of the location when new reviews received from google."
            id="googleRevieerts"
          />
          <SquareCheckBoxButton
            label="Send e-mail alerts to admins of the location when new reviews received from google."
            id="googleReewAlerts"
          />
          <SquareCheckBoxButton
            label="Send e-mail alerts to admins of the location when new reviews received from google."
            id="goleReviewAlerts"
          />
        </div>

        <div className="flex-col my-4  items-center w-24 h-10 flex -ml-1 justify-start ">
          <span
            className="bg-[#40F440]  w-full  flex items-center justify-center  font-semibold text-black p-2  rounded-lg  mt-5"
            style={{ ...Typography, color: "#27272D" }}>
            Save Profile
          </span>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
