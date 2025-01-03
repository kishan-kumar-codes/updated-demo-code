"use client";

import { useState } from "react";
import LayoutView from "../layout";
import CustomSelect from "../components/customSelect";
import MainCalendar from "../components/MainCalendar";

const Calendar12 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectValue, setSelectValue] = useState("Confirm");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <LayoutView
      Childrens={
        <div className="relative flex pb-[30px] h-fit overflow-y-scroll w-full bg-cultured">
          <div className="mx-[18px] w-full md:w-[25%]  mt-[19px] pb-[36px] bg-chinesWhite rounded-lg">
            <div className="bg-palatinatePurple flex pl-[16px] py-[11px] text-[16px] font-bold rounded-lg text-white">
              <h4>Jane Doe</h4>
            </div>

            {/* Contacts Section */}
            <div className="px-[18px]">
              <p className="text-[12px] font-bold text-darkSilverColor mt-[21px]">
                Mon, Jun 17, 2024 2:00 PM - 2:30 PM (EDT)
              </p>
              <button className="px-[14px] py-[7px] bg-palatinatePurple text-[12px] font-bold text-white rounded-xl mt-[10px]">
                Appointment
              </button>
            </div>
            <div className="h-[1px] w-full bg-cultured mt-[10px]"></div>
            <div className="px-[18px]">
              <div className="mt-[12px] flex items-center ">
                <span>
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.49976 8.62019C6.89976 8.62019 5.59961 7.32017 5.59961 5.72017C5.59961 4.12017 6.89976 2.82027 8.49976 2.82027C10.0998 2.82027 11.3997 4.12017 11.3997 5.72017C11.3997 7.32017 10.0998 8.62019 8.49976 8.62019ZM8.49976 3.82027C7.39976 3.82027 6.59961 4.72017 6.59961 5.72017C6.59961 6.82017 7.49976 7.62019 8.49976 7.62019C9.59976 7.62019 10.3997 6.72017 10.3997 5.72017C10.3997 4.72017 9.59976 3.82027 8.49976 3.82027Z"
                      fill="#631363"
                    />
                    <path
                      d="M11.9001 13.4202H5.2002C4.9002 13.4202 4.7002 13.2202 4.7002 12.9202C4.7002 10.8202 6.40024 9.12019 8.50024 9.12019C10.6002 9.12019 12.3 10.8202 12.3 12.9202C12.4 13.2202 12.1001 13.4202 11.9001 13.4202ZM5.7002 12.5202H11.4001C11.2001 11.1202 10.0001 10.1202 8.6001 10.1202C7.2001 10.1202 5.9002 11.1202 5.7002 12.5202Z"
                      fill="#631363"
                    />
                    <path
                      d="M12.4002 6.72017C12.1002 6.72017 11.9002 6.52017 11.9002 6.22017C11.9002 5.92017 12.1002 5.72017 12.4002 5.72017C13.5002 5.72017 14.3001 4.82027 14.3001 3.82027C14.3001 2.82027 13.4002 1.92024 12.4002 1.92024C11.8002 1.92024 11.2002 2.22017 10.9002 2.72017C10.7002 2.92017 10.4003 3.02027 10.2003 2.82027C10.0003 2.62027 9.9002 2.32019 10.1002 2.12019C10.6002 1.42019 11.5002 0.920242 12.4002 0.920242C14.0002 0.920242 15.3001 2.22027 15.3001 3.82027C15.3001 5.42027 13.9002 6.72017 12.4002 6.72017Z"
                      fill="#631363"
                    />
                    <path
                      d="M15.7 11.5202H12.7998C12.4998 11.5202 12.2998 11.3202 12.2998 11.0202C12.2998 10.7202 12.4998 10.5202 12.7998 10.5202H15.2C15 9.12022 13.7999 8.12019 12.3999 8.12019C12.0999 8.12019 11.8999 7.92019 11.8999 7.62019C11.8999 7.32019 12.0999 7.12019 12.3999 7.12019C14.4999 7.12019 16.2 8.82024 16.2 10.9202C16.2 11.3202 16 11.5202 15.7 11.5202Z"
                      fill="#631363"
                    />
                    <path
                      d="M4.69994 6.7202C3.79994 6.7202 2.89989 6.32025 2.39989 5.52025C1.39989 4.22025 1.69999 2.42025 2.99999 1.52025C4.29999 0.520252 6.09999 0.820228 6.99999 2.12023C7.19999 2.32023 7.09989 2.6203 6.89989 2.8203C6.69989 3.0203 6.39994 2.9202 6.19994 2.7202C5.59994 1.9202 4.39999 1.7203 3.49999 2.3203C2.69999 2.9203 2.49984 4.12025 3.09984 5.02025C3.49984 5.52025 3.99984 5.8203 4.59984 5.8203C4.89984 5.8203 5.09984 6.0203 5.09984 6.3203C5.09984 6.6203 4.89994 6.7202 4.69994 6.7202Z"
                      fill="#631363"
                    />
                    <path
                      d="M4.19995 11.5202H1.2998C0.999805 11.5202 0.799805 11.3202 0.799805 11.0202C0.799805 8.92022 2.49985 7.22017 4.59985 7.22017C4.89985 7.22017 5.09985 7.42017 5.09985 7.72017C5.09985 8.02017 4.89985 8.22017 4.59985 8.22017C3.19985 8.22017 1.9998 9.22019 1.7998 10.6202H4.19995C4.49995 10.6202 4.69995 10.8202 4.69995 11.1202C4.69995 11.4202 4.39995 11.5202 4.19995 11.5202Z"
                      fill="#631363"
                    />
                  </svg>
                </span>
                <h5 className="ml-[8px] text-[14px] font-bold text-palatinatePurple">
                  Attendees
                </h5>
              </div>
              <div className="flex items-center mt-[16px] ">
                <div className="w-[37px] h-[37px] rounded-full bg-palatinatePurple flex justify-center items-center text-[18px] font-bold text-white ">
                  JD
                </div>
                <div className="ml-[12px]">
                  <h5 className="text-[16px] font-bold text-darkSilverColor">
                    Jane Doe
                  </h5>
                  <h5 className="text-[16px] text-darkSilverColor">
                    Primary Contact
                  </h5>
                </div>
              </div>
            </div>
            <div className="h-[1px] w-full bg-cultured mt-[10px]"></div>
            <div className="px-[18px]">
              <div className="flex items-center mt-[18px]">
                <span>
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.99951 12.9205C5.59951 12.9205 5.29937 12.7204 5.09937 12.5204C3.49937 10.8204 0.899414 7.52047 0.899414 5.42047C0.899414 2.52047 3.19937 0.120422 6.09937 0.120422C8.99936 0.120422 11.2993 2.52047 11.2993 5.42047C11.2993 7.52047 8.69937 10.8204 7.09937 12.6204C6.69937 12.7204 6.29951 12.8205 5.99951 12.9205ZM5.99951 0.820496C3.59951 0.820496 1.69946 2.8205 1.69946 5.3205C1.69946 6.6205 3.19946 9.12047 5.69946 11.9205C5.89946 12.1205 6.09932 12.1205 6.29932 11.9205C8.79932 9.12047 10.2993 6.7205 10.2993 5.3205C10.2993 2.9205 8.39951 0.920496 5.99951 0.820496Z"
                      fill="#631363"
                    />
                    <path
                      d="M5.99951 7.7204C4.59951 7.7204 3.39941 6.52042 3.39941 5.12042C3.39941 3.72042 4.59951 2.52045 5.99951 2.52045C7.39951 2.52045 8.59937 3.72042 8.59937 5.12042C8.59937 6.52042 7.39951 7.7204 5.99951 7.7204ZM5.99951 3.42047C5.09951 3.42047 4.29932 4.22042 4.29932 5.12042C4.29932 6.02042 5.09951 6.8205 5.99951 6.8205C6.89951 6.8205 7.69946 6.02042 7.69946 5.12042C7.69946 4.22042 6.89951 3.42047 5.99951 3.42047Z"
                      fill="#631363"
                    />
                  </svg>
                </span>
                <h5 className="ml-[11px] text-palatinatePurple text-[14px] font-bold">
                  Location
                </h5>
              </div>
              <div className="flex items-center mt-[18px]">
                <span>
                  <svg
                    width="11"
                    height="13"
                    viewBox="0 0 11 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.19922 10.2202C4.99922 10.4202 4.59917 10.4202 4.39917 10.2202L2.89917 8.72015C2.69917 8.52015 2.69917 8.12023 2.89917 7.92023C3.09917 7.72023 3.49922 7.72023 3.69922 7.92023L4.89917 9.0202L7.19922 6.72015C7.39922 6.52015 7.79927 6.52015 7.99927 6.72015C8.19927 6.92015 8.19927 7.3202 7.99927 7.5202L5.19922 10.2202ZM3.09912 0.420227C3.39912 0.420227 3.69922 0.720203 3.69922 1.0202V2.0202H7.19922V1.0202C7.19922 0.720203 7.49907 0.420227 7.79907 0.420227C8.09907 0.420227 8.39917 0.720203 8.39917 1.0202V2.0202H9.39917C10.2992 2.0202 10.8992 2.7202 10.8992 3.5202V11.2202C10.8992 12.1202 10.1992 12.7202 9.39917 12.7202H1.69922C0.799219 12.7202 0.199219 12.0202 0.199219 11.2202V3.5202C0.199219 2.6202 0.899219 2.0202 1.69922 2.0202H2.69922V1.0202C2.49922 0.620203 2.79912 0.420227 3.09912 0.420227ZM9.69922 5.0202H1.19922V11.2202C1.19922 11.4202 1.39912 11.6202 1.59912 11.6202H9.29907C9.49907 11.6202 9.69922 11.4202 9.69922 11.2202V5.0202Z"
                      fill="#631363"
                    />
                  </svg>
                </span>
                <h5 className="ml-[11px] text-palatinatePurple text-[14px] font-bold">
                  Calendar
                </h5>
              </div>
              <h5 className="ml-[20px] text-darkSilverColor text-[16px] font-bold">
                Jane’s Calendar
              </h5>
              <div className="flex items-center mt-[18px]">
                <span>
                  <svg
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.69897 7.22025C9.49897 7.02025 9.19902 7.02025 8.99902 7.22025C8.79902 7.42025 8.79902 7.72032 8.99902 7.92032C9.79902 8.72032 10.2988 9.9203 10.2988 11.0203C10.2988 11.6203 8.59893 12.5203 5.89893 12.5203C3.19893 12.5203 1.49902 11.6203 1.49902 11.0203C1.49902 9.8203 1.99883 8.72032 2.79883 7.92032C2.99883 7.72032 2.99883 7.42025 2.79883 7.22025C2.59883 7.02025 2.29888 7.02025 2.09888 7.22025C1.09888 8.22025 0.499023 9.6203 0.499023 11.0203C0.499023 12.6203 3.29893 13.5203 5.89893 13.5203C8.49893 13.5203 11.2988 12.6203 11.2988 11.0203C11.2988 9.6203 10.799 8.22025 9.69897 7.22025Z"
                      fill="#631363"
                    />
                    <path
                      d="M5.99878 7.6203C7.89878 7.6203 9.39868 6.12028 9.39868 4.22028C9.39868 2.32028 7.89878 0.820374 5.99878 0.820374C4.09878 0.820374 2.59863 2.32028 2.59863 4.22028C2.59863 6.12028 4.09878 7.6203 5.99878 7.6203ZM5.99878 1.72028C7.39878 1.72028 8.49878 2.82028 8.49878 4.22028C8.49878 5.62028 7.39878 6.72028 5.99878 6.72028C4.59878 6.72028 3.49878 5.62028 3.49878 4.22028C3.49878 2.82028 4.59878 1.72028 5.99878 1.72028Z"
                      fill="#631363"
                    />
                  </svg>
                </span>
                <h5 className="ml-[11px] text-palatinatePurple text-[14px] font-bold">
                  Meeting Owner
                </h5>
              </div>
              <h5 className="ml-[20px] text-darkSilverColor text-[16px] font-bold">
                John Doe
              </h5>
              <div className="h-[1px] w-full bg-cultured mt-[10px]"></div>
              <h5 className="text-[13px] font-bold text-palatinatePurple mt-[18px]">
                Status
              </h5>
              <div className="bg-cultured rounded-xl py-[10px] px-[14px] flex items-center  mt-[12px]">
                {/* <input type="text" className='bg-none outline-none border-none w-full' />
                                <span><svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.19873 4.32037L-0.000976562 0.1203H8.49902L4.19873 4.32037Z" fill="#6D6D6D" />
                                </svg>
                                </span> */}
                <CustomSelect
                  childrens={
                    <>
                      <option
                        onClick={() => setSelectValue("Showed")}
                        className="text-[12px] text-darkSilverColor"
                        value="Showed">
                        Showed{" "}
                        {selectValue === "Showed" && (
                          <span>
                            <svg
                              width="10"
                              height="8"
                              viewBox="0 0 10 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M9.00039 2.1L4.2001 6.89993C3.9001 7.19993 3.4001 7.19993 3.2001 6.89993L0.800195 4.50002C0.500195 4.20002 0.500195 3.80002 0.800195 3.50002C0.900195 3.40002 1.1002 3.29995 1.3002 3.29995C1.5002 3.29995 1.6002 3.40002 1.8002 3.50002L3.7001 5.39993L8.00039 1.1C8.30039 0.8 8.70039 0.8 9.00039 1.1C9.30039 1.4 9.30039 1.8 9.00039 2.1Z"
                                fill="#631363"
                              />
                            </svg>
                          </span>
                        )}{" "}
                      </option>
                      <option
                        className="text-[12px] text-darkSilverColor"
                        value="No Show">
                        No Show{" "}
                        {selectValue === "No Show" && (
                          <span>
                            <svg
                              width="10"
                              height="8"
                              viewBox="0 0 10 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M9.00039 2.1L4.2001 6.89993C3.9001 7.19993 3.4001 7.19993 3.2001 6.89993L0.800195 4.50002C0.500195 4.20002 0.500195 3.80002 0.800195 3.50002C0.900195 3.40002 1.1002 3.29995 1.3002 3.29995C1.5002 3.29995 1.6002 3.40002 1.8002 3.50002L3.7001 5.39993L8.00039 1.1C8.30039 0.8 8.70039 0.8 9.00039 1.1C9.30039 1.4 9.30039 1.8 9.00039 2.1Z"
                                fill="#631363"
                              />
                            </svg>
                          </span>
                        )}{" "}
                      </option>
                      <option
                        className="text-[12px] text-darkSilverColor"
                        value="Cancelled">
                        Cancelled{" "}
                        {selectValue === "Cancelled" && (
                          <span>
                            <svg
                              width="10"
                              height="8"
                              viewBox="0 0 10 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M9.00039 2.1L4.2001 6.89993C3.9001 7.19993 3.4001 7.19993 3.2001 6.89993L0.800195 4.50002C0.500195 4.20002 0.500195 3.80002 0.800195 3.50002C0.900195 3.40002 1.1002 3.29995 1.3002 3.29995C1.5002 3.29995 1.6002 3.40002 1.8002 3.50002L3.7001 5.39993L8.00039 1.1C8.30039 0.8 8.70039 0.8 9.00039 1.1C9.30039 1.4 9.30039 1.8 9.00039 2.1Z"
                                fill="#631363"
                              />
                            </svg>
                          </span>
                        )}{" "}
                      </option>
                      <option
                        className="text-[12px] text-darkSilverColor"
                        value="Invalid">
                        Invalid{" "}
                        {selectValue === "Invalid" && (
                          <span>
                            <svg
                              width="10"
                              height="8"
                              viewBox="0 0 10 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M9.00039 2.1L4.2001 6.89993C3.9001 7.19993 3.4001 7.19993 3.2001 6.89993L0.800195 4.50002C0.500195 4.20002 0.500195 3.80002 0.800195 3.50002C0.900195 3.40002 1.1002 3.29995 1.3002 3.29995C1.5002 3.29995 1.6002 3.40002 1.8002 3.50002L3.7001 5.39993L8.00039 1.1C8.30039 0.8 8.70039 0.8 9.00039 1.1C9.30039 1.4 9.30039 1.8 9.00039 2.1Z"
                                fill="#631363"
                              />
                            </svg>
                          </span>
                        )}{" "}
                      </option>
                      <option
                        className="text-[12px] text-darkSilverColor"
                        value="Confirmed">
                        Confirmed{" "}
                        {selectValue === "Confirmed" && (
                          <span>
                            <svg
                              width="10"
                              height="8"
                              viewBox="0 0 10 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M9.00039 2.1L4.2001 6.89993C3.9001 7.19993 3.4001 7.19993 3.2001 6.89993L0.800195 4.50002C0.500195 4.20002 0.500195 3.80002 0.800195 3.50002C0.900195 3.40002 1.1002 3.29995 1.3002 3.29995C1.5002 3.29995 1.6002 3.40002 1.8002 3.50002L3.7001 5.39993L8.00039 1.1C8.30039 0.8 8.70039 0.8 9.00039 1.1C9.30039 1.4 9.30039 1.8 9.00039 2.1Z"
                                fill="#631363"
                              />
                            </svg>
                          </span>
                        )}{" "}
                      </option>
                    </>
                  }
                  className=" w-full outline-none text-palatinatePurple bg-cultured h-full text-[12px] font-bold"
                  id=""
                  name=""
                />
              </div>
            </div>
          </div>
          <div className="w-[75%] hidden md:block">
            <MainCalendar />
          </div>
        </div>
      }
    />
  );
};

export default Calendar12;
