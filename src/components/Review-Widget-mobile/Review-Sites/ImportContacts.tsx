"use client";
import React, { useState } from "react";
import { CircleX } from "lucide-react";
import Papa from "papaparse";
import { X } from "lucide-react";
import SquareCheckBoxButton from "@/components/citations-builder/SquareCheckBox";
import { TelegramSendSvg } from "@/svgs/Review-Widget-mobile/svgs";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

interface SelectReviewSitesProps {
  setImpContact: React.Dispatch<React.SetStateAction<boolean>>;
  onCloseModal: () => void;
}

interface CsvData {
  "First Name": string;
  "Last Name": string;
  "Email Address": string;
}

const ImportContacts: React.FC<SelectReviewSitesProps> = ({
  setImpContact,
  onCloseModal,
}) => {
  const [fileName, setFileName] = useState<string>("No file chosen");
  const [csvData, setCsvData] = useState<CsvData[]>([]);
  const [uploadedData, setUploadedData] = useState(false);
  const [smsCampaign, setSmsCampaign] = useState(false);
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);

      // Parse the CSV file using PapaParse
      Papa.parse<CsvData>(file, {
        complete: (result) => {
          setCsvData(result.data); // Save the parsed data
        },
        header: true, // Assuming the first row is the header
      });
    } else {
      setFileName("No file chosen");
    }
  };

  const handleSelectReview = () => {
    setImpContact(false);
  };
  //  className={`flex justify-between items-start w-full ${csvData.length > 0 ? "md:pt-[10%] pt-0" : "pt-0"} `}

  return (
    <>
      {!smsCampaign ? (
        !uploadedData ? (
          <div
            className={`w-full gap-3 justify-center p-2 flex flex-col max-h-[620px] ${csvData.length > 0 ? "md:pt-[25%] pt-0" : "pt-0"} overflow-y-auto`}>
            <div className="flex justify-between items-start w-full  ">
              <div className="text-[#6D6D6D] text-xl md:text-[48px] lg:text-[50px] md:font-normal py-1 font-bold leading-normal">
                Import Contacts
              </div>
              <button onClick={onCloseModal} className="text-3xl h-5 w-5">
                <X size={18} color="#6D6D6D" />
              </button>
            </div>

            <span className="text-[#6D6D6D] text-[10px] md:text-[18px] lg:text-xl md:font-normal pr-2 text-wrap font-bold leading-3 md:leading-5 lg:leading-6">
              Please upload a CSV-format list of the people you would like to
              get reviews from. You can use this template CSV to ensure the file
              structure is correct.
            </span>

            <div className="flex my-1 gap-4 justify-start items-center">
              <span className="text-[#6D6D6D] text-[10px] md:text-[18px] lg:text-xl md:font-normal font-bold leading-normal">
                Choose CSV File:
              </span>
              <label className="flex bg-[#6D6D6D] cursor-pointer rounded-md px-2 py-1">
                <span className="text-[#F4F4F4] text-[10px]  md:text-[18px] lg:text-xl md:font-normal font-bold leading-normal">
                  Choose file
                </span>
                <input
                  type="file"
                  className="hidden"
                  accept=".csv"
                  onChange={handleFileChange}
                />
              </label>

              <span className="italic flex text-[10px] md:text-[18px] lg:text-xl md:font-normal font-bold leading-normal">
                {fileName}
              </span>
            </div>

            <span className="text-[#6D6D6D] text-[10px] md:text-[18px] lg:text-xl font-normal leading-normal">
              Before we message these people, please confirm:
            </span>
            <div className="flex gap-2 md:gap-3 items-center w-full">
              <Checkbox className="border border-black roun rounded-sm" />
              <Label className="text-[10px] text-[#6D6D6D] w-full md:w-[50%] pt-0 md:pt-6 md:text-[18px] lg:text-xl md:font-normal font-bold leading-3 md:leading-5 lg:leading-6">
                Yes, I have permissions to contact these people for marketing
                purposes in accordance with the{" "}
                <span className="text-[#631363]">Terms & Conditions*</span>
              </Label>
            </div>
            <div className="flex gap-2 md:gap-3 pt-0 md:pt-8 items-center w-full">
              <Checkbox className="border border-black roun rounded-sm" />
              <Label className="text-[10px] text-[#6D6D6D] w-full md:w-[40%]  md:text-[18px] lg:text-xl md:font-normal font-bold leading-3 md:leading-5 lg:leading-6">
                Yes, I have read and agree with the
                <span className="text-[#631363] pl-1">Privacy Policy*</span>
              </Label>
            </div>
            {/* <SquareCheckBoxButton
              id="checkbox-1"
              label="Yes, I have permissions to contact these people for marketing purposes in accordance with the Terms & Conditions*"
            />
            <SquareCheckBoxButton
              id="checkbox-2"
              label="Yes, I have read and agree with the Privacy Policy*"
            /> */}
            <div className="flex justify-end">
              <button
                className="text-xs font-bold leading-normal md:text-[24px] lg:text-[26px] md:font-normal  my-1 cursor-pointer bg-[#40F440] rounded-2xl px-3 py-2"
                onClick={() => setUploadedData(true)}>
                Upload
              </button>
            </div>

            {/* Display the parsed CSV data */}
            {csvData.length > 0 && (
              <div className="">
                <div className="text-[#6D6D6D] font-bold md:text-[24px] lg:text-[26px] md:font-normal text-xs py-2 md:py-10">
                  Description Of CSV Fields
                </div>
                <div className="w-full flex h-[35px] md:h-[60px] bg-[#631363] rounded-t-xl">
                  <span className="flex text-[10px] text-[#ffffff] md:text-[26px] lg:text-[28px] md:font-normal items-center justify-center text-center flex-1 h-full border-l-[#CCCCCC]">
                    First Name
                  </span>
                  <span className="flex text-[10px] border-l-2 text-[#ffffff] md:text-[26px] lg:text-[28px] md:font-normal items-center justify-center text-center flex-1 h-full border-l-[#CCCCCC]">
                    Last Name
                  </span>
                  <span className="flex text-[10px] border-l-2 text-[#ffffff] md:text-[26px] lg:text-[28px] md:font-normal items-center justify-center text-center flex-1 h-full border-l-[#CCCCCC]">
                    Email Address
                  </span>
                </div>

                {csvData.length - 1 > 0 &&
                  csvData.map((row, index) => (
                    <div
                      className="w-full flex h-[35px] md:h-[60px]"
                      key={index}>
                      <div className="flex text-[10px] text-[#6D6D6D] items-center w-full md:w-[80%] justify-center text-center md:text-[22px] lg:text-[24px] md:font-normal flex-1  border border-[#CCCCCC]">
                        {row["First Name"]}
                      </div>
                      <div className="flex text-[10px] text-[#6D6D6D] items-center justify-center text-center md:text-[22px] lg:text-[24px] md:font-normal flex-1  border border-[#CCCCCC]">
                        {row["Last Name"]}
                      </div>
                      <div className="flex text-[10px] text-[#6D6D6D] items-center justify-center text-center md:text-[22px] lg:text-[24px] md:font-normal flex-1  border border-[#CCCCCC]">
                        {row["Email Address"]}
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        ) : (
          <div className="w-full gap-3 p-2 justify-center flex flex-col px-2 md:px-8 max-h-[620px]  overflow-y-auto">
            <div className="flex justify-between items-start w-full">
              <span className="text-[#6D6D6D] text-xl md:text-[48px] lg:text-[50px] md:font-normal py-2 font-bold leading-normal">
                Import Contacts
              </span>
              <button onClick={onCloseModal} className="text-3xl  h-5 w-5">
                <X size={18} color="#6D6D6D" />
              </button>
            </div>

            <span className="text-[#6D6D6D] text-[10px] md:text-[22px] lg:text-[24px] md:font-normal font-bold leading-normal">
              Uploaded CSV file: {fileName}
            </span>
            <div className="flex w-full gap-2 items-center rounded-2xl py-4 md:py-8 bg-[#C6C6C6]">
              <div className="w-[1.9px] md:w-[3px] h-[25.2px] md:h-[50px] flex justify-start rounded-3xl shrink-0 bg-[#631363]" />
              <div className="text-[#6D6D6D] text-[10px] md:text-[22px] lg:text-[24px] font-normal leading-normal">
                {csvData.length - 1} contacts have been successfully uploaded.
              </div>
            </div>
            <div className="flex justify-end w-full items-center gap-3 px-3 pb-2 md:pb-6">
              <button
                className="text-xs font-bold leading-normal  md:text-[22px] lg:text-[24px] md:font-normal my-1 flex items-center gap-2 cursor-pointer bg-[#40F440] rounded-2xl px-3 py-2"
                onClick={() => setSmsCampaign(true)}>
                Send & Start Campaign <TelegramSendSvg />
              </button>
            </div>
          </div>
        )
      ) : (
        <div className="w-full gap-3 p-2 justify-center flex flex-col px-2 md:px-8 py-2 overflow-y-auto">
          <div className="flex justify-between items-start w-full">
            <span className="text-[#6D6D6D] py-2 text-xl md:text-[36px] lg:text-[38px] md:font-normal font-bold leading-normal">
              Email And SMS Campaigns
            </span>
            <button onClick={onCloseModal} className="text-3xl h-5 w-5">
              <X size={18} color="#6D6D6D" />
            </button>
          </div>

          <div className="flex w-full flex-col p-4 gap-3   items-center justify-center rounded-2xl bg-[#FFFFFF]">
            <span className="text-[#6D6D6D] text-base md:text-[30px] lg:text-[32px] md:font-normal font-bold leading-normal">
              Kiosk Mode URL
            </span>
            <span className="text-[#6D6D6D]  md:text-lg lg:text-[20px] leading-3 md:leading-4 lg:leading-5  flex justify-center px-2 md:px-8 text-center text-[10px] font-normal">
              Kiosk Mode allows you to request feedback from your customers on a
              tablet or kiosk, which serves a dedicated, white-labeled web page.
            </span>
            <span className="text-[#6D6D6D] md:text-lg lg:text-[20px] px-2 md:px-[20%]  leading-3 md:leading-4 lg:leading-5  flex justify-center text-center text-[10px] font-normal ">
              Kiosk Mode is ideal for capturing feedback while the customer is
              still at your business location.
            </span>
            <div className="flex gap-2 items-center w-full mt-2">
              <input
                className="h-full py-2 w-full pl-4 md:py-4 rounded-2xl md:text-[22px] lg:text-[24px] md:font-normal focus:outline-none bg-[#F4F4F4]"
                placeholder="http://bit.ly/2wskECU"
              />
              <button
                onClick={() => router.push("/review-widget/get-reviews")}
                className="text-xs font-bold leading-normal md:text-[22px] lg:text-[24px] my-1  md:font-normal cursor-pointer bg-[#40F440] rounded-lg px-3 py-2">
                Copy
              </button>
            </div>
          </div>
          <div className="flex w-full flex-col p-4 gap-4  items-center justify-center rounded-2xl min-h-[190px] bg-[#FFFFFF]">
            <span className="text-[#6D6D6D] text-base md:text-[30px] lg:text-[32px] md:font-normal font-bold leading-normal">
              Link Mode URL
            </span>
            <span className="text-[#6D6D6D] md:text-lg lg:text-[20px]  px-2 md:px-8  leading-3 md:leading-4 lg:leading-5 flex justify-center text-center text-[10px] font-normal ">
              Link Mode allows you to request feedback and reviews from your
              customers via SMS, email signatures, or even business cards by
              using a dedicated, white-labeled URL.
            </span>
            <span className="text-[#6D6D6D] md:text-lg lg:text-[20px] leading-3 md:leading-4 lg:leading-5  px-2 md:px-[20%]   flex justify-center text-center text-[10px] font-normal ">
              Link Mode is ideal for capturing feedback once the customer has
              left your business location.
            </span>
            <div className="flex gap-2 items-center w-full mt-2">
              <input
                className="h-full py-2 w-full pl-4 md:py-4 rounded-2xl md:text-[22px] lg:text-[24px] md:font-normal focus:outline-none bg-[#F4F4F4]"
                placeholder="http://bit.ly/2wskECU"
              />
              <button
                onClick={() => router.push("/review-widget/get-reviews")}
                className="text-xs font-bold leading-normal md:text-[22px] lg:text-[24px] my-1  md:font-normal cursor-pointer bg-[#40F440] rounded-lg px-3 py-2">
                Copy
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImportContacts;
