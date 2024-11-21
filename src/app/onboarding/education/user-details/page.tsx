import React, { useState, useRef, useContext } from "react";
import { useRouter } from "next/navigation";
import Layout from "../../layout";
import Image from "next/image";
import hubSparkLogo from "@/assets/images/HubSpark New Logo 5.png";
// import ProgressBar from "@/pages/onboarding/layout/progressBar";

import { MyContext } from "../../../../utils/MyContext";

const UploadProfilePhoto = () => {
  // const context = useContext(MyContext);

  //   const [selectedFile, setSelectedFile] = useState<File | null>(null);
  //   const [jobTitle, setJobTitle] = useState<string | null>(null);
  //   const fileInputRef = useRef<HTMLInputElement>(null);
  //   const router = useRouter();

  //   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const file = event.target.files && event.target.files[0];
  //     if (file) {
  //       setSelectedFile(file);
  //     }
  //   };

  //   const handleUpload = () => {
  //     if (!selectedFile) {
  //       alert("Please select a file to upload.");
  //       return;
  //     }

  //     // Handle file upload
  //     // ... add code to upload the file
  //   };

  //   const triggerFileInput = () => {
  //     fileInputRef.current?.click();
  //   };

  //   const handleJobTitleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //     setJobTitle(event.target.value);
  //   };

  //   const handleSkip = (e: React.MouseEvent<HTMLButtonElement>) => {
  //     e.preventDefault(); // Prevent default form submission
  //     router.push("/onboarding/education/industry").catch((error) => console.error("Navigation error:", error));
  //   };

  //   const handleContinue = (e: React.MouseEvent<HTMLButtonElement>) => {
  //     e.preventDefault(); // Prevent default form submission

  //     if (!selectedFile) {
  //       alert("Please select a file to upload.");
  //       return;
  //     }

  //     // Update context data
  //     updateContextData({ selectedFile });
  //     updateContextData({ jobTitle });

  //     // Navigate to the next page
  //     router.push("/onboarding/education/industry").catch((error) => console.error("Navigation error:", error));
  //   };

  return (
    <Layout
      hHeading=""
      Childrens={
        <div className="px-[43px] flex items-center flex-col ">
          {/* <ProgressBar count={7} /> */}
          {/* <div className="text-center">
            <h1 className="text-[22px] text-darkSilverColor font-bold mt-[27px]">
              Upload a photo and select your title.
            </h1>
            <p className="text-[14px] text-darkSilverColor">
              Upload a profile picture. Then, add your job title.
            </p>
            <div>
              <label className="text-[14px] text-darkSilverColor" style={{ fontWeight: "bold" }}>
                Your profile photo
              </label>
            </div>
            <div
              className="mt-[10px]"
              style={{ position: "relative", display: "inline-block" }}
              onClick={triggerFileInput}
            >
              {selectedFile ? (
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Profile Photo"
                  style={{ width: "62px", height: "57px", objectFit: "cover" }}
                />
              ) : (
                <span>
                  <svg
                    width="62"
                    height="57"
                    viewBox="0 0 62 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M54.5001 15.4742C55.1001 15.4742 55.6001 14.9746 55.6001 14.3751V9.17942H60.8001C61.4001 9.17942 61.9001 8.67983 61.9001 8.08033C61.9001 7.48083 61.4001 6.98124 60.8001 6.98124H55.6001V1.7856C55.6001 1.1861 55.1001 0.686508 54.5001 0.686508C53.9001 0.686508 53.4001 1.1861 53.4001 1.7856V6.98124H48.2001C47.6001 6.98124 47.1001 7.48083 47.1001 8.08033C47.1001 8.67983 47.6001 9.17942 48.2001 9.17942H53.4001V14.3751C53.4001 14.9746 53.9001 15.4742 54.5001 15.4742Z"
                      fill="#631363"
                    />
                    <path
                      d="M26.1004 45.9487C32.1004 46.9478 37.2004 41.7522 36.2004 35.7572C35.6004 32.1602 32.7004 29.1627 29.0004 28.5632C23.0004 27.564 17.9004 32.7597 18.9004 38.7547C19.5004 42.4516 22.5004 45.3492 26.1004 45.9487ZM26.2004 30.3617C31.2004 29.3625 35.5004 33.7589 34.6004 38.7547C34.1004 41.5524 31.8004 43.7505 29.0004 44.35C24.0004 45.3492 19.7004 40.9528 20.6004 35.957C21.1004 33.1593 23.4004 30.8613 26.2004 30.3617Z"
                      fill="#6D6D6D"
                    />
                    <path
                      d="M37.2002 33.4591C38.0002 35.5573 38.3002 37.9553 37.5002 40.4532C36.3002 44.1501 33.1002 46.9478 29.2002 47.5473C22.8002 48.4466 17.3002 43.5506 17.3002 37.3558C17.3002 35.957 17.6002 34.6581 18.1002 33.4591H2.3002H0.700195V53.842C0.700195 55.141 1.7002 56.1401 3.0002 56.1401H52.1002C53.4002 56.1401 54.4002 55.141 54.4002 53.842V33.4591H52.8002H37.2002Z"
                      fill="#6D6D6D"
                    />
                    <path
                      d="M52.1004 18.4716H38.9004L36.1004 13.4758C35.7004 12.7764 35.0004 12.3767 34.2004 12.3767H21.1004C20.3004 12.3767 19.6004 12.7764 19.2004 13.4758L16.4004 18.4716H3.20038C1.90038 18.4716 0.900391 19.4708 0.900391 20.7697V31.9603H2.50038H19.0004C20.8004 29.0628 24.1004 27.0644 27.8004 27.0644C31.5004 27.0644 34.8004 29.0628 36.6004 31.9603H53.1004H54.7004V20.7697C54.4004 19.4708 53.4004 18.4716 52.1004 18.4716Z"
                      fill="#6D6D6D"
                    />
                  </svg>
                </span>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              ref={fileInputRef}
              style={{ display: "none" }} // Hide the file input
            />
          </div>
          <div className="flex justify-center">
            <button
              className="text-[16px] font-bold text-white py-[10px] w-[144px] text-center mt-[10px] bg-palatinatePurple rounded-lg"
              onClick={handleUpload}
              style={{ cursor: "pointer" }}
            >
              Upload Photo
            </button>
          </div>
          <div
            className="flex justify-center text-[14px] text-darkSilverColor font-bold"
            style={{ marginTop: "20px" }}
          >
            <label style={{ fontWeight: "bold" }}>
              What&apos;s your job title?
            </label>
          </div>
          <div className="flex justify-center">
            <select
              value={jobTitle || ""}
              onChange={handleJobTitleChange}
              style={{ marginTop: "10px", padding: "5px" }}
              className="w-[137px] bg-white h-[33px] mt-[13px] text-[12px] text-darkSilverColor pl-[18px] py-[10px] rounded-lg"
            >
              <option value="" disabled>
                Choose one
              </option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
             
            </select>
          </div>
          <div className="flex justify-center" style={{ marginTop: "20px" }}>
            <button
              className="text-[16px] font-bold text-white py-[10px] w-[120px] text-center  bg-palatinatePurple rounded-lg"
              onClick={handleSkip}
              style={{ cursor: "pointer" }}
            >
              Skip
            </button>
            <button
              className="ml-[7px] text-[16px] font-bold text-white py-[10px] w-[183px] text-center  bg-palatinatePurple rounded-lg"
              onClick={handleContinue}
              disabled={!selectedFile}
              style={{ cursor: selectedFile ? "pointer" : "not-allowed" }}
            >
              Continue
            </button>
          </div> */}
          <div className="absolute bottom-14 left-[25%] ">
            <Image src={hubSparkLogo} alt="Hub Spark Logo" />
          </div>
        </div>
      }
    />
  );
};

export default UploadProfilePhoto;
