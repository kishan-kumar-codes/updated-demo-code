"use client";
import React, { useState } from "react";
import HeadBar from "../citations-builder/HeadBar";
import InputBarField from "../citations-builder/InputBarField";
import { UserSvgs } from "@/svgs/settings/svgs";
import SquareCheckBoxButton from "../citations-builder/SquareCheckBox";

const Typography: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
};

const textStyle: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};
const MyProfile = () => {
  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (e: any) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("No file chosen");
    }
  };
  return (
    <div className=" flex flex-col gap-2  -ml-3 w-[400px] mt-5 m-9 ">
      <HeadBar title="Profile Settings" />
      <div className="flex rounded-3xl ml-5 -mt-14 z-10 min-h-[160px] w-[400px] justify-start px-5     bg-[#E0E0E0] py-3">
        <div className="my-10">
          <div className="flex pt-3">
            <span
              className="mx-1  px-4 h-[28px] py-2 flex items-center justify-center rounded-lg bg-[#40F440]"
              style={{ ...Typography, color: "#3D3D3D" }}>
              Steven’s Rockstars Public Profile
            </span>
          </div>
          <InputBarField label="First Name" placeHolder="" />
          <InputBarField label="Last Name" placeHolder="" />
          <InputBarField label="Phone" placeHolder="" />
          <InputBarField label="Name For Surveys" placeHolder="" />
          <div className="flex items-center">
            <span style={{ ...Typography, color: "#6D6D6D", fontWeight: 400 }}>
              (optional) The name you&apos;d like to appear on your customer
              survey requests.
            </span>
          </div>
          <div className="flex flex-col my-3 w-16 h-16 m-2 bg-[#8C8C8C] relative">
            <span className="flex text-center  ml-3 items-center justify-center absolute -bottom-[1px]">
              <UserSvgs />
            </span>
          </div>
          <span className="flex" style={Typography}>
            Avatar (optional)
          </span>
          <div className="flex my-4 gap-4 justify-start items-center">
            <label className="flex bg-[#6D6D6D] cursor-pointer rounded-md px-2 py-1">
              <span className="text-white">Choose file</span>
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

          <div className=" flex-col gap-4 flex ml-10 justify-start items-center">
            <span style={textStyle}>
              We use Gravatar as the default avatar. You can upload your own
              photo instead.
            </span>

            <div className="ml-5 flex justify-start items-center">
              <SquareCheckBoxButton
                label="Send e-mail alerts when my customers interact with my review requests."
                id="profile"
                fontWeight={700}
              />
            </div>
          </div>
          <div className="flex-col my-4 gap-4 flex ml-10 justify-start items-centerr">
            <span style={textStyle}>
              E-mail alerts will be sent to your e-mail address.
            </span>
            <div className="ml-5 flex justify-start items-center">
              <SquareCheckBoxButton
                label="Send periodic email reports about my review activity."
                id="email"
                fontWeight={700}
              />
            </div>
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
  );
};

export default MyProfile;
