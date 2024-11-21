"use client";
import {
  WebchatSettingAddSvg,
  WebchatSettingAlertRedInfoSvg,
  WebchatSettingDownloadSvg,
  WebchatSettingFaqSvg,
  WebchatSettingGreenInfoSvg,
  WebchatSettingImportSvg,
  WebchatSettingStepCheckSvg,
  WebchatSettingUploadedCheckSvg,
  WebchatSettingUploadFQSvg,
  WebchatSettingUploadSvg,
} from "@/svgs/Webchat-Settings/svgs";
import { Button } from "flowbite-react";
import Link from "next/link";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import * as XLSX from "xlsx"; // Import the XLSX library to handle Excel files
import WebChatFaqTable from "./WebChatFaqTable";

const WebChatFQA = () => {
  const [webChatFaqActive, setWebChatFaqActive] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(1);

  const [showTable, setShowTable] = useState<boolean>(true);

  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  const [startImport, setStartImport] = useState<boolean>(false);
  const [returnToContact, setReturnToContact] = useState<boolean>(false);
  const [uploadStatus, setUploadStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  // Function to handle file upload and parsing
  const handleNextStep = () => setCurrentStep((prevStep) => prevStep + 1);
  const handleCancel = () => setCurrentStep(1);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setUploadedFileName(file?.name || null);
    setUploadStatus("idle"); // Reset the status when starting a new upload

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = e.target?.result;
          const workbook = XLSX.read(data, { type: "binary" });
          const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
          const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

          setUploadStatus("success"); // Mark the upload as successful
        } catch (error) {
          console.error("Error processing file", error);
          setUploadStatus("error"); // Mark the upload as failed
        }
      };
      reader.readAsBinaryString(file);
    }
  };

  const handleReturnTOContact = () => {
    setReturnToContact(true);
  };

  const handleImport = () => {
    setStartImport(true);
    setShowTable(false);
  };
  return (
    <div className="w-full flex flex-col my-4 p-2 ">
      <div className="w-full justify-center items-center pt-4 flex flex-col gap-2">
        <WebchatSettingFaqSvg />
        <div className="text-[#631363] text-sm  lg:text-[30px] font-bold leading-normal">
          Add Your FAQs
        </div>
        <div className="text-[#6D6D6D] w-full lg:text-[22px] text-center text-xs font-bold leading-normal lg:leading-7">
          Automatically answer questions about your business <br />
          and build customer trust.
        </div>

        {webChatFaqActive ? (
          <div className="w-full justify-center items-center pt-6  flex  gap-2">
            <Link href={"/webchat-settings/faq"}>
              <button
                className={`text-white text-xs px-3 py-2 lg:text-[24px] flex items-center gap-1 justify-center font-semibold rounded-2xl leading-normal bg-[#631363]`}>
                <WebchatSettingAddSvg color="white" /> Add An FAQ
              </button>
            </Link>

            <div>
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    className={`text-[#631363] px-3 py-2 flex items-center lg:text-[24px] gap-1 justify-center text-xs font-semibold rounded-2xl leading-normal border border-[#631363]`}>
                    <WebchatSettingImportSvg color="#631363" /> Bulk Import
                  </button>
                </DialogTrigger>
                <div className="flex justify-center w-full">
                  <DialogContent className="w-[90%] flex-col flex rounded-xl bg-[#F4F4F4]">
                    <div className="text-[#6D6D6D] text-xl lg:text-[38px] font-bold leading-normal">
                      Import FAQs
                    </div>
                    <div className="w-full items-center mt-2 h-full flex flex-col">
                      <div className="w-full justify-center items-center flex ">
                        <div className="flex flex-col gap-1 items-center">
                          {uploadStatus === "success" ? (
                            <div
                              className={`text-[#FFF] z-50 bg-[#631363] w-10 lg:w-16 lg:h-16 flex justify-center items-center h-10 rounded-full`}>
                              {" "}
                              <WebchatSettingStepCheckSvg />{" "}
                            </div>
                          ) : (
                            <div
                              className={`text-[#FFF] z-50 bg-[#631363] lg:w-16 lg:h-16 w-10 flex justify-center items-center h-10 rounded-full`}>
                              {" "}
                              1{" "}
                            </div>
                          )}

                          <div className="text-[#6D6D6D] text-xs lg:text-[24px] font-bold leading-normal">
                            Upload
                          </div>
                        </div>
                        <hr className="h-0.5 w-24 flex z-20 -mt-5 lg:-mt-[2.25rem] justify-center items-center bg-[#631363]" />
                        <div className="flex flex-col gap-1 items-center">
                          <div
                            className={` z-50 ${currentStep === 2 ? "bg-[#631363]  text-[#FFF]" : "bg-[#F4F4F4] text-[#6D6D6D] border border-[#631363]"} w-11 flex justify-center items-center h-11 lg:w-[66px] lg:h-[66px]  rounded-full`}>
                            {startImport ? (
                              <div
                                className={`text-[#FFF] z-50 bg-[#631363] w-10 flex justify-center items-center h-10 rounded-full`}>
                                {" "}
                                <WebchatSettingStepCheckSvg />{" "}
                              </div>
                            ) : (
                              <div
                                className={`text-[#631363]  z-50 bg-[#F4F4F4] w-10  lg:w-16 lg:h-16 flex justify-center items-center h-10 rounded-full`}>
                                2
                              </div>
                            )}
                          </div>
                          <div className="text-[#6D6D6D] text-xs font-bold lg:text-[24px] leading-normal">
                            Match
                          </div>
                        </div>
                        <hr className="h-0.5 w-24 lg:w-32 flex z-20 -mt-5 lg:-mt-[2.25rem] justify-center items-center bg-[#631363]" />
                        <div className="flex flex-col gap-1 items-center">
                          <div
                            className={` z-50 ${currentStep === 3 ? "bg-[#631363] text-[#FFF]" : "bg-[#F4F4F4] text-[#6D6D6D] border border-[#631363]"} w-11 flex justify-center items-center h-11 lg:w-[66px] lg:h-[66px] rounded-full`}>
                            {returnToContact ? (
                              <div
                                className={`text-[#FFF] z-50 bg-[#631363] w-10  lg:w-16 lg:h-16 flex justify-center items-center h-10 rounded-full`}>
                                {" "}
                                <WebchatSettingStepCheckSvg />{" "}
                              </div>
                            ) : (
                              <div
                                className={`text-[#631363] z-50 bg-[#F4F4F4] w-10 lg:w-16 lg:h-16 flex justify-center items-center h-10 rounded-full`}>
                                3
                              </div>
                            )}
                          </div>
                          <div className="text-[#6D6D6D] text-xs font-bold lg:text-[24px] leading-normal">
                            Import
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col my-4 gap-2 w-full items-center">
                        {currentStep === 1 && (
                          <>
                            {uploadStatus === "idle" && (
                              <>
                                <label
                                  htmlFor="upload-input"
                                  className="cursor-pointer lg:text-[22px] flex flex-col justify-center items-center gap-2 text-[#6D6D6D] text-sm font-semibold">
                                  <WebchatSettingUploadFQSvg />
                                  <div className="text-[#631363] text-sm lg:text-[26px] font-bold leading-normal">
                                    Upload Spreadsheet
                                  </div>
                                  <input
                                    type="file"
                                    accept=".xlsx, .xls"
                                    onChange={handleFileUpload}
                                    className="hidden text-[#6D6D6D] lg:text-[22px]"
                                    id="upload-input"
                                  />
                                  Drag and drop or upload your FAQs
                                </label>
                                <div className="text-[#6D6D6D] w-[70%] lg:w-full text-center text-[10px] lg:text-[22px] font-bold leading-normal ">
                                  All .xlsx and .xls file types are supported
                                </div>
                                <div className="text-[#6D6D6D] lg:font-normal lg:w-[80%] lg:leading-6 my-5 w-1/2 text-center text-[10px] font-normal leading-normal lg:text-[22px]">
                                  {" "}
                                  Download a
                                  <strong className="text-[#631363] lg:font-normal px-1">
                                    sample spreadsheet
                                  </strong>
                                  to quickly start your import
                                </div>
                              </>
                            )}
                            {/* {uploadStatus === "idle" && <p>Upload here</p>}
                        {uploadStatus === "success" && (
                          <p>File uploaded successfully!</p>
                        )}
                        {uploadStatus === "error" && (
                          <p>Error uploading file. Please try again.</p>
                        )}
                        {showCheck && <p>Showing the uploaded file data...</p>} */}
                            {uploadStatus === "success" && (
                              <>
                                <div className="w-full flex flex-col rounded-t-xl bg-[#F5F5F5]">
                                  <div className="w-full flex justify-center gap-4 items-center">
                                    <div className="text-[#6D6D6D] flex items-center  gap-2  text-center text-sm font-bold leading-normal">
                                      <WebchatSettingUploadSvg />{" "}
                                      {uploadedFileName}
                                    </div>
                                    <div className="text-[#631363] my-5  text-center text-sm font-normal leading-normal">
                                      {" "}
                                      Remove
                                    </div>
                                  </div>
                                </div>
                                <div className="w-full  justify-center items-center h-20 flex flex-col -mt-2 rounded-b-xl bg-[#E0E0E0]">
                                  <WebchatSettingUploadedCheckSvg />
                                </div>
                                <div className="text-[#6D6D6D] my-5 w-1/2 text-center text-[10px] font-normal leading-normal">
                                  {" "}
                                  Download a
                                  <strong className="text-[#631363] px-1">
                                    sample spreadsheet
                                  </strong>
                                  to quickly start your import
                                </div>
                                <div className="text-[#6D6D6D] w-[80%]  w-fulltext-center text-[10px] font-normal leading-normal">
                                  {" "}
                                  Download a spreadsheet with all your existing
                                  FAQs
                                  <strong className="text-[#631363] px-1">
                                    all your existing FAQs
                                  </strong>
                                </div>
                              </>
                            )}

                            <div className="flex justify-end w-full items-center gap-3 px-3">
                              <button
                                className="text-xs font-bold leading-normal w-20 my-1 lg:text-[24px] cursor-pointer bg-[#40F440] rounded-lg px-3 py-2 lg:w-fit"
                                onClick={handleNextStep}
                                type="submit">
                                Next
                              </button>
                              <button
                                className="text-xs font-bold leading-normal w-20 my-1 lg:text-[24px] lg:w-fit text-white cursor-pointer bg-[#BA0416] rounded-lg px-3 py-2"
                                onClick={handleCancel}>
                                Cancel
                              </button>
                            </div>
                          </>
                        )}

                        {currentStep === 2 && (
                          <>
                            <div className="w-full flex-col flex">
                              {showTable && <WebChatFaqTable />}
                              {startImport && (
                                <>
                                  <div className="flex justify-center flex-col pt-0 lg:pt-10 w-full items-center gap-3 lg:gap-2 px-3">
                                    <WebchatSettingUploadFQSvg />
                                    <div className="text-[#631363] text-sm lg:text-[28px] font-bold leading-normal">
                                      We’re Ready To Import
                                    </div>
                                    <div className="flex w-[80%] justify-center items-center gap-2">
                                      <WebchatSettingGreenInfoSvg />
                                      <div className="text-[#6D6D6D] lg:text-[24px] text-sm font-normal lg:font-bold tracking-tight leading-normal">
                                        This might take a few minutes
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex justify-end w-full py-3 lg:py-6 items-center gap-3 px-3">
                                    <button
                                      className="text-xs  lg:text-[24px] font-bold leading-normal w-24 my-1 cursor-pointer bg-[#40F440] rounded-lg lg:w-fit px-3 py-2"
                                      onClick={handleNextStep}
                                      type="submit">
                                      Start Import
                                    </button>
                                    <button className="text-xs  lg:text-[24px] lg:w-fit font-bold leading-normal w-20 my-1 text-white cursor-pointer bg-[#BA0416] rounded-lg px-3 py-2">
                                      Cancel
                                    </button>
                                  </div>
                                </>
                              )}
                              {showTable && (
                                <div className="flex justify-end w-full items-center gap-3 py-0 lg:py-6 px-3">
                                  <button
                                    className="text-xs font-bold leading-normal w-20 lg:text-[24px] lg:w-fit lg:px-6 my-1 cursor-pointer bg-[#40F440] rounded-lg px-3 py-2"
                                    onClick={handleImport}
                                    type="submit">
                                    Next
                                  </button>
                                  <button
                                    className="text-xs font-bold leading-normal w-20 lg:text-[24px] lg:w-fit lg:px-6 my-1 text-white cursor-pointer bg-[#BA0416] rounded-lg px-3 py-2"
                                    onClick={handleCancel}>
                                    Cancel
                                  </button>
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      </div>

                      {currentStep === 3 && (
                        <>
                          {!returnToContact && (
                            <>
                              <div className="flex justify-center flex-col w-full items-center gap-3 px-3">
                                <WebchatSettingUploadFQSvg />
                                <div className="text-[#631363] text-sm lg:text-[28px] font-bold leading-normal">
                                  Your Import Has Started
                                </div>
                                <div className="flex flex-col w-[90%] justify-center items-center gap-0.5">
                                  <div className="flex w-full] justify-center items-center gap-2">
                                    <WebchatSettingGreenInfoSvg />
                                    <div className="text-[#6D6D6D] text-sm lg:font-bold lg:text-[24px] font-normal leading-normal">
                                      This might take a few minutes
                                    </div>
                                  </div>
                                  <div className="text-[#6D6D6D] w-full lg:leading-6 lg:font-bold text-center lg:text-[24px] flex justify-center items-center text-sm font-normal leading-normal">
                                    No need to wait here, we’ll take care of
                                    everything else.
                                  </div>
                                </div>
                              </div>
                              <div className="flex justify-end w-full my-3 items-center gap-3 pt-8 px-3">
                                <button
                                  className="text-xs font-bold leading-normal w-28 lg:w-fit lg:text-[24px] my-1 cursor-pointer bg-[#40F440] rounded-lg px-3 py-2"
                                  onClick={handleReturnTOContact}
                                  type="submit">
                                  Return to FAQs
                                </button>
                              </div>
                            </>
                          )}

                          {returnToContact && (
                            <>
                              <div className="flex justify-center flex-col w-full items-center gap-3 px-3">
                                <WebchatSettingUploadedCheckSvg />
                                <div className="text-[#631363] text-sm lg:text-[22px] font-bold leading-normal">
                                  Your Import Is Complete
                                </div>
                                <div className="flex flex-col w-[90%] justify-center items-center gap-0.5">
                                  <div className="flex w-full justify-center my-4 items-center gap-2">
                                    <WebchatSettingAlertRedInfoSvg />
                                    <div className="text-[#6D6D6D] text-sm font-normal leading-normal">
                                      2 rows were not imported
                                    </div>
                                  </div>
                                  <div className="text-[#6D6D6D] text-sm lg:text-[18px] font-normal lg:font-bold leading-normal">
                                    We couldn’t import any data from your file
                                  </div>
                                  <div className="text-[#6D6D6D] w-full text-center lg:text-[18px] lg:font-bold  flex justify-center items-center text-sm font-normal leading-normal">
                                    2 rows were processed
                                  </div>
                                  <div className="text-[#6D6D6D] w-full text-center flex justify-center lg:text-[18px] lg:leading-6 lg:font-bold items-center text-sm font-normal leading-normal">
                                    No need to wait here, we’ll take care <br />
                                    of everything else.
                                  </div>
                                  <div className="text-[#6D6D6D] w-full text-center curs flex justify-center lg:text-[20px] lg:font-bold gap-1 border-black border bg-[#F4F4F4] rounded-xl p-2 items-center text-sm font-normal leading-normal">
                                    <WebchatSettingDownloadSvg /> Download error
                                    file
                                  </div>
                                </div>
                              </div>
                              <div className="flex justify-end w-full my-3 items-center gap-3 px-3">
                                <button
                                  className="text-xs font-bold leading-normal w-32 lg:w-fit lg:text-[24px] my-1 cursor-pointer bg-[#40F440] rounded-lg px-3 py-2"
                                  onClick={handleReturnTOContact}
                                  type="submit">
                                  Return to Contact
                                </button>
                              </div>
                            </>
                          )}
                        </>
                      )}
                    </div>
                  </DialogContent>
                </div>
              </Dialog>
            </div>
          </div>
        ) : (
          <button
            className="text-white text-xs px-3 py-2 lg:text-[24px] flex items-center gap-1 justify-center font-semibold rounded-2xl leading-normal bg-[#631363]"
            onClick={() => setWebChatFaqActive(true)}>
            Visit FAQs page
          </button>
        )}
      </div>
    </div>
  );
};

export default WebChatFQA;
