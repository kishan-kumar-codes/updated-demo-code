"use client";
import React, { useState } from "react";
import Header from "../Reputation-mobile/Header";
// import { HeaderBarMobile } from "../citations-builder/HeadBar";
import { SearchSvg } from "@/svgs/seo-screens/svgs";
import { DropDownSvg } from "@/svgs/reviews/svgs";
import {
  GerneralCrossSvgs,
  GerneralDropDownSvgs,
  GerneralGreenInfoSvgs,
  GerneralThreeDotsSvgs,
} from "@/svgs/General-Settings-Mobile/svgs";
import UsersTable from "./UsersTable";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "../ui/dialog";
import {
  WebchatSettingEditSvg,
  WebchatSettingGreenInfoSvg,
  WebchatSettingStepCheckSvg,
  WebchatSettingUploadedCheckSvg,
  WebchatSettingUploadFQSvg,
  WebchatSettingUploadSvg,
} from "@/svgs/Webchat-Settings/svgs";
import { Info } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import SquareCheckBoxButton from "../citations-builder/SquareCheckBox";
import ChatDropDown from "../Webchat-Settings/ChatDropDown";
import * as XLSX from "xlsx"; // Import the XLSX library to handle Excel files
import WebChatFaqTable from "../Webchat-Settings/WebChatFaqTable";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const GeneralUsers = () => {
  const [menuTab, setMenuTab] = React.useState(false);
  const [location, setLocation] = React.useState(false);
  const [role, setRole] = React.useState(false);
  const [teams, setTeams] = React.useState(false);
  const [status, setStatus] = React.useState(false);
  const [importUser, setImportUser] = React.useState(false);
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
  const members = [
    { value: "option1", label: "Personalize" },
    { value: "option2", label: "Contact Address" },
    { value: "option3", label: "Order Status" },
    { value: "option4", label: "Order Number" },
  ];

  const weeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const times = [
    "01:00 IST",
    "02:00 IST",
    "03:00 IST",
    "04:00 IST",
    "05:00 IST",
    "06:00 IST",
    "07:00 IST",
    "08:00 IST",
    "09:00 IST",
    "10:00 IST",
    "11:00 IST",
    "12:00 IST",
    "13:00 IST",
    "14:00 IST",
    "15:00 IST",
    "16:00 IST",
    "17:00 IST",
    "18:00 IST",
    "19:00 IST",
    "20:00 IST",
    "21:00 IST",
    "22:00 IST",
    "23:00 IST",
  ];

  // Callback function for handling member selection
  const handleSelect = React.useCallback(
    ({ label, value }: { label: string; value: string }) =>
      console.log("Selected option:", { label, value }),
    []
  );
  return (
    <div className="flex justify-center items-center w-full h-full ">
      <div className="flex flex-col w-full md:w-[430px] justify-center items-center lg:w-[430px] h-full">
        <div className="flex flex-col gap-7 justify-center items-center w-full">
          <Header title={"General Settings"} displayName=" General Settings" />
          <div className="flex flex-col   w-[90%] h-full">
            <div className="flex flex-col w-full  items-center gap-2 min-h-[490px] h-full">
              <div className="flex w-full gap-3 flex-col ">
                <div className="flex rounded-3xl z-10 min-h-[160px] justify-start  w-full bg-[#E0E0E0] pb-10">
                  <div className="flex flex-col w-full gap-2">
                    <div className="w-full rounded-xl text-white text-[16px] font-bold pl-5 py-2.5 bg-[#631363]">
                      Users
                    </div>
                    <span className="text-[#6D6D6D] text-xl font-bold leading-normal px-5">
                      2 Users
                    </span>
                    <div className="w-full flex justify-between items-center pl-5">
                      <div className="flex relative justify-center items-center py-1">
                        <input
                          type="text"
                          className="w-[180px] h-[30px] bg-white text-center text-[#6D6D6D] rounded-full focus:outline-none"
                          placeholder="Search"
                        />
                        <div className="absolute inset-y-0 -left-1 flex justify-center items-center py-2 px-4">
                          <SearchSvg />
                        </div>
                      </div>
                      <div className="flex relative w-[40%] justify-center items-center">
                        <span
                          className="text-[#631363] flex items-center gap-2 font-bold text-xs leading-normal border border-[#631363] rounded-xl px-3 py-2 shadow-sm cursor-pointer"
                          onClick={() => setMenuTab(true)}>
                          Add Users <GerneralDropDownSvgs />
                        </span>

                        {menuTab && (
                          <div className="absolute inset-y-0 w-full h-24 border border-[#631363] rounded-xl  py-2 shadow-sm flex-col gap-1 px-3 flex justify-center items-center bg-[#E0E0E0]">
                            <div className="w-full flex cursor-pointer justify-end text-xs font-bold  hover:text-[#6D6D6D] ">
                              <GerneralDropDownSvgs />
                            </div>
                            <Dialog>
                              <DialogTrigger>
                                <div className="w-full text-[#631363] flex cursor-pointer my-2 text-xs font-bold justify-center hover:text-[#6D6D6D] ">
                                  Add A Single User
                                </div>
                                <div className="w-full flex cursor-pointer text-xs  text-[#631363] font-bold justify-center  hover:text-[#6D6D6D]">
                                  Add Multiple Users
                                </div>
                              </DialogTrigger>
                              <DialogContent
                                className={`w-[90%] rounded-xl flex ${!importUser ? "h-[95%]" : "h-fit"} overflow-y-auto bg-[#F4F4F4] hide-scrollbar`}>
                                <DialogDescription className="w-full flex ">
                                  {!importUser ? (
                                    <div className="flex gap-3  w-full flex-col bg-[#F4F4F4]">
                                      <div className="w-full flex justify-between pt-4 items-center">
                                        <span className="text-[#6D6D6D] text-xl font-bold leading-normal">
                                          Add A User
                                        </span>
                                        <div className="flex gap-5">
                                          <Button
                                            className="bg-[#40F440] text-[#27272D] h-9  py-1 px-5 font-bold rounded-lg"
                                            onClick={() => setImportUser(true)}>
                                            Add
                                          </Button>
                                          <Button className="bg-[#BA0416] text-[#FFF] h-9 px-3 py-1 font-bold rounded-lg">
                                            Cancel
                                          </Button>
                                        </div>
                                      </div>
                                      <div className="flex w-full mt-2 gap-2">
                                        <Input
                                          placeholder="First Name"
                                          className="rounded-2xl text-xs h-10 bg-white"
                                        />
                                        <Input
                                          placeholder="Last Name"
                                          className="rounded-2xl text-xs h-10 bg-white"
                                        />
                                      </div>
                                      <div className="flex w-full  gap-2">
                                        <Input
                                          placeholder="Email"
                                          className="rounded-2xl text-xs h-10 bg-white"
                                        />

                                        <Input
                                          placeholder="Phone Number"
                                          className="rounded-2xl text-xs h-10 bg-white"
                                        />
                                      </div>
                                      <div className="relative">
                                        <div
                                          className="w-full flex rounded-xl  items-center cursor-pointer h-10 bg-[#FFF] p-2 focus:outline-none text-[#6D6D6D] text-xs font-normal leading-normal"
                                          onClick={() =>
                                            setLocation(!location)
                                          }>
                                          {location
                                            ? " Select Locations"
                                            : "  Locations "}
                                        </div>
                                        {location && (
                                          <div className="absolute flex-col w-full  gap-3 z-40 -mt-2 flex rounded-b-xl h-fit bg-[#FFF] p-2 focus:outline-none text-[#6D6D6D] text-xs font-normal leading-normal">
                                            {!status && (
                                              <div className="flex w-full flex-col gap-1.5">
                                                {/* <ChatDropDown
                                                  options={members}
                                                  onSelect={handleSelect}
                                                /> */}
                                                <Select>
                                                  <SelectTrigger className="w-full  text-[#6D6D6D] text-xs  bg-[#F4F4F4] rounded-2xl">
                                                    <SelectValue
                                                      className="bg-white"
                                                      placeholder="Location"
                                                    />
                                                  </SelectTrigger>
                                                  <SelectContent className="bg-white">
                                                    <SelectGroup>
                                                      <SelectItem
                                                        className="text-[#6D6D6D]"
                                                        value="usa">
                                                        All Location
                                                      </SelectItem>
                                                      <SelectItem
                                                        className="text-[#6D6D6D] "
                                                        value="canada">
                                                        Current Location
                                                      </SelectItem>
                                                    </SelectGroup>
                                                  </SelectContent>
                                                </Select>

                                                <div className="flex w-full justify-between py-3 items-center bg-[#F4F4F4] rounded-2xl px-3">
                                                  <span className="text-[#6D6D6D] text-xs font-normal leading-normal">
                                                    2 Locations
                                                  </span>
                                                  <GerneralCrossSvgs />
                                                </div>
                                                <div className="flex justify-end  py-2 gap-5">
                                                  <Button
                                                    className="bg-[#40F440] text-[#27272D] h-9 py-2 px-5 font-bold rounded-lg"
                                                    onClick={() =>
                                                      setStatus(true)
                                                    }>
                                                    Apply
                                                  </Button>
                                                  <Button className="bg-[#BA0416] text-[#FFF] h-9 px-2 py-3 font-bold rounded-lg">
                                                    Cancel
                                                  </Button>
                                                </div>
                                              </div>
                                            )}
                                            {status && (
                                              <>
                                                <div className="flex w-full  gap-1">
                                                  <GerneralGreenInfoSvgs />
                                                  <span className="text-[#6D6D6D] text-xs font-normal leading-normal">
                                                    We did not find a mobile
                                                    number for Amit. Please{" "}
                                                    <span className="text-[#631363] ">
                                                      add a mobile number
                                                    </span>{" "}
                                                    to send text notifications.
                                                  </span>
                                                </div>
                                                <div className="flex w-full  pl-4 ">
                                                  <SquareCheckBoxButton
                                                    label="Do not add to future locations"
                                                    id={
                                                      "Do not add to future locations"
                                                    }
                                                  />
                                                </div>
                                              </>
                                            )}
                                          </div>
                                        )}

                                        <div
                                          className="w-full flex rounded-xl items-center cursor-pointer h-10 bg-[#FFF] p-2 focus:outline-none text-[#6D6D6D] text-xs font-normal leading-normal mt-4"
                                          onClick={() => setRole(!role)}>
                                          Select Role*
                                        </div>
                                        {role && (
                                          <div className="absolute w-full flex-col  z-50 -mt-2 flex rounded-b-xl h-32 bg-[#FFF] p-2 focus:outline-none text-[#6D6D6D] text-xs font-normal leading-normal">
                                            <span className="text-[#6D6D6D] text-[10px] font-bold leading-normal">
                                              Owner
                                            </span>
                                            <span className="text-[#6D6D6D] text-[10px] font-normal leading-normal">
                                              Has full access to the account
                                            </span>
                                            <span className="text-[#6D6D6D] text-[10px] font-normal leading-normal">
                                              eg. business owner of a large
                                              organization
                                            </span>
                                            <span className="text-[#6D6D6D] text-[10px] font-bold leading-normal">
                                              Administration
                                            </span>
                                            <span className="text-[#6D6D6D] text-[10px] font-normal leading-normal">
                                              Has full access to the account
                                            </span>
                                            <span className="text-[#6D6D6D] text-[10px] font-normal leading-normal">
                                              eg. business owner of a large
                                              organization
                                            </span>
                                          </div>
                                        )}
                                        <div
                                          className="w-full flex rounded-xl cursor-pointer  items-center   mt-4 h-10 bg-[#FFF] p-2 focus:outline-none text-[#6D6D6D] text-xs font-normal leading-normal"
                                          onClick={() => setTeams(!teams)}>
                                          Select Teams
                                        </div>
                                        {teams && (
                                          <div className="w-full gap-1 flex rounded-b-xl flex-col -mt-6 h-fit bg-[#FFF] p-2 focus:outline-none text-[#6D6D6D] text-xs font-normal leading-normal">
                                            <div className="flex flex-col gap-1 mt-2">
                                              <div className="flex relative  items-center py-1">
                                                <input
                                                  type="text"
                                                  className="w-full h-[30px] bg-[#f1f1f1] pl-10 text-left text-[#6D6D6D] rounded-full focus:outline-none"
                                                  placeholder="Search"
                                                />
                                                <div className="absolute  left-1 flex justify-center items-center py-2 px-4">
                                                  <SearchSvg />
                                                </div>
                                              </div>
                                              <SquareCheckBoxButton
                                                label="Select All"
                                                id={"Select All"}
                                              />
                                              <SquareCheckBoxButton
                                                label="Inbox Teams"
                                                id={"Inbox Teams"}
                                              />

                                              <SquareCheckBoxButton
                                                label="Hubsparkm"
                                                id={"Hubsparkm"}
                                              />
                                              <SquareCheckBoxButton
                                                label="New Sales"
                                                id={"New Sales"}
                                              />
                                              <SquareCheckBoxButton
                                                label="Hubspark"
                                                id={"Hubspark"}
                                              />
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                      <div className="flex flex-col items-center justify-between w-full">
                                        <div className="w-full  flex justify-between">
                                          <Label
                                            htmlFor="Send-Invitation-Email"
                                            className="text-[#6D6D6D] text-xs font-bold leading-normal">
                                            Send Invitation Email
                                          </Label>
                                          <Switch
                                            id="Send-Invitation-Email"
                                            checked
                                          />
                                        </div>
                                        <span className="text-[#6D6D6D] pt-1 tracking-tight text-xs font-normal leading-normal">
                                          If turned off, a password is required
                                          for this user to log in.
                                        </span>
                                      </div>
                                      <div className="flex w-full mt-2 gap-2">
                                        <Input
                                          placeholder="Password"
                                          className="rounded-2xl text-xs h-10 bg-white"
                                        />
                                        <Input
                                          placeholder="Confirm Password"
                                          className="rounded-2xl text-xs h-10 bg-white"
                                        />
                                      </div>
                                      <span className="text-[#6D6D6D] text-xs font-bold leading-normal">
                                        Notifications
                                      </span>
                                      <div className="flex flex-col gap-1">
                                        <span className="text-[#6D6D6D] text-xs font-bold leading-normal">
                                          Review Emails
                                        </span>
                                        <span className="text-[#6D6D6D] text-[10px] font-normal leading-normal">
                                          Send review emails for{" "}
                                          <span className="text-[#631363] pl-1">
                                            {" "}
                                            All ratings
                                          </span>{" "}
                                          <span className="text-[#631363] pl-2">
                                            {" "}
                                            All reviewes
                                          </span>{" "}
                                        </span>
                                      </div>
                                      <div className="flex flex-col gap-1">
                                        <SquareCheckBoxButton
                                          label="Instantly"
                                          id="Instantly"
                                          fontWeight={400}
                                        />{" "}
                                        <SquareCheckBoxButton
                                          label="Daily"
                                          id="Daily"
                                          fontWeight={400}
                                        />{" "}
                                      </div>
                                      <div className="flex w-2/4">
                                        {/* <ChatDropDown
                                          options={members}
                                          onSelect={handleSelect}
                                          bgColor="#FFF"
                                        /> */}
                                        <Select>
                                          <SelectTrigger className="w-full  text-[#6D6D6D] text-xs  bg-white rounded-2xl">
                                            <SelectValue
                                              className="bg-white"
                                              placeholder="10:00 AM IST"
                                            />
                                          </SelectTrigger>
                                          <SelectContent className="bg-white">
                                            <SelectGroup>
                                              {times.map((state) => (
                                                <SelectItem
                                                  key={state}
                                                  value={state.toLowerCase()}>
                                                  {state}
                                                </SelectItem>
                                              ))}
                                            </SelectGroup>
                                          </SelectContent>
                                        </Select>
                                      </div>
                                      <SquareCheckBoxButton
                                        label="Weekly"
                                        id="Weekly"
                                        fontWeight={400}
                                      />{" "}
                                      <div className="flex w-full gap-2">
                                        {/* <ChatDropDown
                                          options={members}
                                          onSelect={handleSelect}
                                          bgColor="#FFF"
                                        /> */}
                                        <Select>
                                          <SelectTrigger className="w-full  text-[#6D6D6D] text-xs  bg-white rounded-2xl">
                                            <SelectValue
                                              className="bg-white"
                                              placeholder="Select a Day"
                                            />
                                          </SelectTrigger>
                                          <SelectContent className="bg-white">
                                            <SelectGroup>
                                              {weeks.map((state) => (
                                                <SelectItem
                                                  key={state}
                                                  value={state.toLowerCase()}>
                                                  {state}
                                                </SelectItem>
                                              ))}
                                            </SelectGroup>
                                          </SelectContent>
                                        </Select>
                                        <Select>
                                          <SelectTrigger className="w-full  text-[#6D6D6D] text-xs  bg-white rounded-2xl">
                                            <SelectValue
                                              className="bg-white"
                                              placeholder="Select a Time Zone"
                                            />
                                          </SelectTrigger>
                                          <SelectContent className="bg-white">
                                            <SelectGroup>
                                              {times.map((state) => (
                                                <SelectItem
                                                  key={state}
                                                  value={state.toLowerCase()}>
                                                  {state}
                                                </SelectItem>
                                              ))}
                                            </SelectGroup>
                                          </SelectContent>
                                        </Select>
                                        {/* <ChatDropDown
                                          options={members}
                                          onSelect={handleSelect}
                                          bgColor="#FFF"
                                        /> */}
                                      </div>
                                      <div className="flex flex-col9">
                                        <div className="text-[#6D6D6D] text-xs font-bold leading-normal">
                                          Review SMS
                                        </div>
                                        <div className="flex w-full pb-4 gap-1">
                                          <Info color="#40F440" size="28" />
                                          <div className="text-[#6D6D6D] text-xs pt-1 font-normal leading-normal">
                                            We did not find a mobile number for
                                            Amit. Please{" "}
                                            <span className="text-[#631363] ">
                                              add a mobile number
                                            </span>{" "}
                                            to send text notifications.
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="flex flex-col w-full gap-2">
                                      <span className=" text-[#6D6D6D] text-xl font-bold leading-normal">
                                        Import Users
                                      </span>
                                      <div className="w-full justify-center items-center flex pt-4">
                                        <div className="flex flex-col gap-1 items-center">
                                          {uploadStatus === "success" ? (
                                            <span
                                              className={`text-[#FFF] z-50 bg-[#631363] w-10 flex justify-center items-center h-10 rounded-full`}>
                                              {" "}
                                              <WebchatSettingStepCheckSvg />{" "}
                                            </span>
                                          ) : (
                                            <span
                                              className={`text-[#FFF] z-50 bg-[#631363] w-10 flex justify-center items-center h-10 rounded-full`}>
                                              {" "}
                                              1{" "}
                                            </span>
                                          )}

                                          <span className="text-[#6D6D6D] text-xs font-bold leading-normal">
                                            Upload
                                          </span>
                                        </div>

                                        <hr className="h-0.5 w-full flex z-20 -mt-5 justify-center items-center bg-[#631363]" />
                                        <div className="flex flex-col gap-1 items-center">
                                          <span
                                            className={` z-50 ${currentStep === 3 ? "bg-[#631363] text-[#FFF]" : "bg-[#F4F4F4] text-[#6D6D6D] border border-[#631363]"} w-10 flex justify-center items-center h-10 rounded-full`}>
                                            {returnToContact ? (
                                              <span
                                                className={`text-[#FFF] z-50 bg-[#631363] w-10 flex justify-center items-center h-10 rounded-full`}>
                                                {" "}
                                                <WebchatSettingStepCheckSvg />{" "}
                                              </span>
                                            ) : (
                                              <span
                                                className={`text-[#631363] z-50 border border-[#631363] bg-[#F4F4F4] w-10 flex justify-center items-center h-10 rounded-full`}>
                                                2
                                              </span>
                                            )}
                                          </span>
                                          <span className="text-[#6D6D6D] text-xs font-bold leading-normal">
                                            Import
                                          </span>
                                        </div>
                                      </div>
                                      <div className="flex flex-col my-4 gap-2 w-full items-center">
                                        {currentStep === 1 && (
                                          <>
                                            {uploadStatus === "idle" && (
                                              <>
                                                <label
                                                  htmlFor="upload-input"
                                                  className="cursor-pointer flex flex-col justify-center items-center text-[#6D6D6D] text-[10.63px] font-semibold">
                                                  <WebchatSettingUploadFQSvg />
                                                  <span className="text-[#631363] pt-2 text-[13px] font-bold leading-normal">
                                                    Upload Spreadsheet
                                                  </span>
                                                  <input
                                                    type="file"
                                                    accept=".xlsx, .xls"
                                                    onChange={handleFileUpload}
                                                    className="hidden"
                                                    id="upload-input"
                                                  />

                                                  <span className="text-[#6D6D6D] text-center w-[70%] text-[10px] font-bold leading-3">
                                                    {" "}
                                                    Drag and drop or upload your
                                                    All .xlsx and .xls file
                                                    types are supported
                                                  </span>
                                                </label>

                                                <span className="text-[#6D6D6D] my-5 w-2/3 text-center text-[10.63px] font-normal leading-normal">
                                                  {" "}
                                                  Download a{" "}
                                                  <span className="text-[#631363]">
                                                    sample spreadsheet
                                                  </span>
                                                  <span>
                                                    {" "}
                                                    to quickly start your import
                                                  </span>
                                                </span>
                                              </>
                                            )}

                                            {uploadStatus === "success" && (
                                              <>
                                                <div className="w-full flex flex-col rounded-t-xl bg-[#F5F5F5]">
                                                  <div className="w-full flex justify-center gap-4 items-center">
                                                    <span className="text-[#6D6D6D] flex items-center  gap-2  text-center text-sm font-bold leading-normal">
                                                      <WebchatSettingUploadSvg />{" "}
                                                      {uploadedFileName}
                                                    </span>
                                                    <span className="text-[#631363] my-5  text-center text-sm font-normal leading-normal">
                                                      {" "}
                                                      Remove
                                                    </span>
                                                  </div>
                                                </div>
                                                <div className="w-full  justify-center items-center h-20 flex flex-col -mt-2 rounded-b-xl bg-[#E0E0E0]">
                                                  <WebchatSettingUploadedCheckSvg />
                                                </div>
                                                <span className="text-[#6D6D6D] my-5 w-1/2 text-center text-[10px] font-normal leading-normal">
                                                  {" "}
                                                  Download a
                                                  <strong className="text-[#631363] px-1">
                                                    sample spreadsheet
                                                  </strong>
                                                  to quickly start your import
                                                </span>
                                                <span className="text-[#6D6D6D] w-[80%]  w-fulltext-center text-[10px] font-normal leading-normal">
                                                  {" "}
                                                  Download a spreadsheet with
                                                  all your existing FAQs
                                                  <strong className="text-[#631363] px-1">
                                                    all your existing FAQs
                                                  </strong>
                                                </span>
                                              </>
                                            )}

                                            <div className="flex justify-end w-full items-center gap-3 px-3">
                                              <button
                                                className="text-xs font-bold leading-normal w-20 my-1 cursor-pointer bg-[#40F440] rounded-lg px-3 py-2"
                                                onClick={handleNextStep}
                                                type="submit">
                                                Next
                                              </button>
                                              <button
                                                className="text-xs font-bold leading-normal w-20 my-1 text-white cursor-pointer bg-[#BA0416] rounded-lg px-3 py-2"
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
                                                  <div className="flex justify-center flex-col w-full items-center  px-3">
                                                    <WebchatSettingUploadFQSvg />
                                                    <span className="text-[#631363] text-[13px] font-bold pt-2 leading-normal">
                                                      We’re Ready To Import
                                                    </span>
                                                    <div className="flex w-[80%] justify-center items-center gap-2">
                                                      <WebchatSettingGreenInfoSvg />
                                                      <span className="text-[#6D6D6D] text-[10.63px] font-bold pt-1 leading-normal">
                                                        This might take a few
                                                        minutes
                                                      </span>
                                                    </div>
                                                  </div>
                                                  <div className="flex justify-end w-full my-3 items-center gap-3 px-3">
                                                    <button
                                                      className="text-xs font-bold leading-normal w-24 my-1 cursor-pointer bg-[#40F440] rounded-lg px-3 py-2"
                                                      // onClick={handleNextStep}
                                                      type="submit">
                                                      Start Import
                                                    </button>
                                                    <button className="text-xs font-bold leading-normal w-20 my-1 text-white cursor-pointer bg-[#BA0416] rounded-lg px-3 py-2">
                                                      Cancel
                                                    </button>
                                                  </div>
                                                </>
                                              )}
                                              {showTable && (
                                                <div className="flex justify-end w-full items-center gap-3 px-3">
                                                  <button
                                                    className="text-xs font-bold leading-normal w-20 my-1 cursor-pointer bg-[#40F440] rounded-lg px-3 py-2"
                                                    onClick={handleImport}
                                                    type="submit">
                                                    Next
                                                  </button>
                                                  <button
                                                    className="text-xs font-bold leading-normal w-20 my-1 text-white cursor-pointer bg-[#BA0416] rounded-lg px-3 py-2"
                                                    onClick={handleCancel}>
                                                    Cancel
                                                  </button>
                                                </div>
                                              )}
                                            </div>
                                          </>
                                        )}
                                      </div>
                                    </div>
                                  )}
                                </DialogDescription>
                              </DialogContent>
                            </Dialog>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="px-1">
                      <UsersTable />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center mt-10 items-center bg-[#40F440] h-[55px] rounded-t-3xl"></div>
      </div>
    </div>
  );
};

export default GeneralUsers;
