"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import LayoutView from "../../layout/page";
import CustomInput from "../../component/customInput";
import CustomSelect from "../../component/customSelect";
import TabNavigation from "../../component/tabNavigation";
import ToggleSwitch from "../../component/toggleSwitch";
import { useClientMediaQuery } from "../../../../utils/srchooksuseClientMediaQuery";
import DesktopAddNewContact from "../../../../components/crmDesktop/contacts/addNewContact";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface CustomSession {
  user: {
    name: string;
    email: string;
    image?: string;
    id: string;
  };
  accessToken: string;
  expires: string;
}

const AddNewContact: React.FC = () => {
  // const isMobile = useClientMediaQuery("(max-width: 769px)");
  // if(isMobile){
  const [fileList, setFiles] = useState<File[]>([]);
  const [check, setCheck] = useState(false);
  // const { data: session, status } = useSession();
  const { data: session } = useSession() as { data: CustomSession | null };
  const router = useRouter();
  // const { showToast } = useToast();
  const [companiesList, setCompaniesList] = useState([]);
  console.log("session....", session);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    company: "",
    email: "",
    phoneNumber_1: "",
    phoneNumber_2: "",
    background: "",
    avatar: "",
    tag: "",
    hasNewsLetter: false,
    token: session?.accessToken,
    userId: session?.user?.id,
  });

  console.log(fileList, "New file list");
  useEffect(() => {
    if (session) {
      console.log("Session object:", session);
      setFormData({
        ...formData,
        token: session?.accessToken,
        userId: session?.user?.id || "",
      });
    }
  }, [session]);

  const handleChange = (model: any, event: any) => {
    setFormData({
      ...formData,
      [model]: event.target.value,
    });
  };
  const setFile = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      // Convert FileList to Array
      const fileArray = Array.from(files);
      setFiles(fileArray); // Update state with selected files
      console.log("Selected files:", fileArray);
    }
  };

  const handleSave = async () => {
    let logoBase64 = "";

    if (fileList.length > 0) {
      const file = fileList[0];
      logoBase64 = await convertFileToBase64(file); // Convert file to base64
    }

    const payload = {
      token: formData.token,
      firstName: formData.firstName,
      lastName: formData.lastName,
      title: formData.title,
      company: formData.company,
      email: formData.email,
      phoneNumber_1: formData.phoneNumber_1,
      phoneNumber_2: formData.phoneNumber_2,
      background: formData.background,
      logo: logoBase64, // Use base64 string instead of file
      tag: formData.tag,
      hasNewsLetter: check,
      userId: session?.user?.id,
    };

    try {
      console.log("payload", payload);
      const response = await fetch("/api/contact/create-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseBody = await response.json();
      if (!response.ok) {
        console.error("Error response from server:", responseBody);
        throw new Error("Failed to create contact");
      }
      // showToast(`Contact added successfully!`, "success");
      router.push("/crm/contacts?name=Contact");
    } catch (error) {
      console.error("Error during contact creation:", error);
    }
  };

  const handleCheck = (check: boolean) => {
    setCheck(check);
  };

  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result?.toString() || "");
      reader.onerror = (error) => reject(error);
    });
  };

  useEffect(() => {
    if (session?.user?.id) {
      getAllCompanies(); // Call only when session.user.id is available
    }
  }, [session?.user?.id]); // Depend on session.user.id, not session itself

  const getAllCompanies = async () => {
    const userId = session?.user?.id; // Ensure you extract the correct user ID field
    if (!userId) {
      console.error("No user ID found in session.");
      return;
    }

    try {
      const response = await fetch("/api/companies/get-companies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Cache-Control": "no-cache",
        },
        body: JSON.stringify({ userId }), // Pass the userId in the request body
      });

      if (!response.ok) {
        console.error("Failed to fetch companies:", response.statusText);
        return;
      }

      const companies = await response.json();
      console.log("companies", companies);
      setCompaniesList(companies);
      console.log("companies", companies);
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };
  return (
    <LayoutView
      Childrens={
        <div className="relative flex flex-col px-[20px] w-full">
          <div className="w-full mt-4 flex">
            <TabNavigation />
          </div>
          <div className=" pb-[8px] mt-[15px] rounded-xl bg-chinesWhite ">
            <div className="w-full rounded-xl bg-palatinatePurple h-[40px] text-white text-[16px] font-bold flex items-center md:h-[67px] md:text-[32px] md:rounded-3xl">
              <h5 className="ml-[14.7px]">Profile Information</h5>
            </div>
            <div className="grid grid-cols-6 gap-1 px-[14px] lg:w-[60%] lg:m-16 lg:gap-3">
              <div className="col-span-3">
                <label
                  htmlFor="name"
                  className="text-darkSilverColor text-[12px] font-bold mb-[6px] md:text-[20px]">
                  First Name
                </label>
                <CustomInput
                  placeholder=""
                  id="name"
                  className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 md:h-[42px] md:text-[20px] md:mt-2 md:rounded-2xl"
                  type="text"
                  handleChange={handleChange}
                  model="firstName"
                  value={formData.firstName}
                />
              </div>
              <div className="col-span-3">
                <label
                  htmlFor="sector"
                  className="text-darkSilverColor text-[12px] font-bold mb-[6px] md:text-[20px]">
                  Last Name
                </label>
                <CustomInput
                  placeholder=""
                  id="name"
                  className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 md:h-[42px] md:text-[20px] md:mt-2 md:rounded-2xl"
                  type="text"
                  handleChange={handleChange}
                  model="lastName"
                  value={formData.lastName}
                />
              </div>
              <div className="col-span-3">
                <label
                  htmlFor="adress"
                  className="text-darkSilverColor text-[12px] font-bold mb-[6px] md:text-[20px]">
                  Title
                </label>
                <CustomInput
                  placeholder=""
                  id="adress"
                  className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 md:h-[42px] md:text-[20px] md:mt-2 md:rounded-2xl"
                  type="text"
                  handleChange={handleChange}
                  model="title"
                  value={formData.title}
                />
              </div>
              <div className="col-span-3">
                <label
                  htmlFor="size"
                  className="text-darkSilverColor text-[12px] font-bold mb-[6px] md:text-[20px]">
                  Company
                </label>
                <CustomSelect
                  id="size"
                  className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 md:h-[42px] md:text-[20px] md:mt-2 md:rounded-2xl"
                  name=""
                  handleChange={handleChange}
                  model="company"
                  value={formData.company}
                  childrens={
                    <>
                      <option disabled selected hidden>
                        {" "}
                      </option>
                      {companiesList.length > 0 ? (
                        companiesList.map((type) => (
                          <option
                            key={type.id}
                            className="text-darkSilverColor"
                            value={type.id}>
                            {type.name}
                          </option>
                        ))
                      ) : (
                        <option className="text-darkSilverColor font-normal pl-[30px] my-[19px]">
                          No company
                        </option>
                      )}
                    </>
                  }
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="adress"
                  className="text-darkSilverColor text-[12px] font-bold mb-[6px] md:text-[20px]">
                  Email
                </label>
                <CustomInput
                  placeholder=""
                  id="adress"
                  className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 md:h-[42px] md:text-[20px] md:mt-2 md:rounded-2xl"
                  type="text"
                  handleChange={handleChange}
                  model="email"
                  value={formData.email}
                />
              </div>
              <div className="col-span-3">
                <label
                  htmlFor="city"
                  className="text-darkSilverColor text-[12px] font-bold mb-[6px] md:text-[20px]">
                  Phone Number 1
                </label>
                <CustomInput
                  placeholder=""
                  id="city"
                  className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 md:h-[42px] md:text-[20px] md:mt-2 md:rounded-2xl"
                  type="text"
                  handleChange={handleChange}
                  model="phoneNumber_1"
                  value={formData.phoneNumber_1}
                />
              </div>
              <div className="col-span-3">
                <label
                  htmlFor="zipCode"
                  className="text-darkSilverColor text-[12px] font-bold mb-[6px] md:text-[20px]">
                  Phone Number 2
                </label>
                <CustomInput
                  placeholder=""
                  id="zipCode"
                  className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 md:h-[42px] md:text-[20px] md:mt-2 md:rounded-2xl"
                  type="text"
                  handleChange={handleChange}
                  model="phoneNumber_2"
                  value={formData.phoneNumber_2}
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="state"
                  className="text-darkSilverColor text-[12px] font-bold mb-[6px] md:text-[20px]">
                  Background
                </label>
                <CustomInput
                  placeholder=""
                  id="state"
                  className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 md:h-[42px] md:text-[20px] md:mt-2 md:rounded-2xl"
                  type="text"
                  handleChange={handleChange}
                  model="background"
                  value={formData.background}
                />
              </div>
              {/* <div className="col-span-6">
                <label
                  htmlFor="file-upload"
                  className="text-darkSilverColor text-[12px] font-bold mb-[6px] md:text-[20px]">
                  Avatar
                </label>
                <CustomInput
                  placeholder=""
                  id="name"
                  type="file"
                  onChange={setFile}
                  value={formData.avatar}
                  accept="image/*" // Optional: restrict to image files
                  className="
                         w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-3 py-1
                        file:mr-5 file:py-0 file:px-2 file:rounded-lg  file:bg-[#6D6D6D] file:text-white 
                        file:text-[8px] file:h-[17px] file:text-center md:file:text-[18px] md:file:px-4 md:file:py-0 first-line:md:p-0
                        md:h-[42px] md:text-[20px] md:mt-2  md:pt-[6px] md:file:h-[30px] md:file:rounded-xl md:rounded-2xl
                        italic
                        "
                />
              </div> */}
              <div className="col-span-6">
                <label
                  htmlFor="file-upload"
                  className="text-darkSilverColor md:text-[20px] text-[12px] font-bold mb-[6px] ">
                  Avatar
                </label>
                <input
                  placeholder=""
                  id="avtar"
                  className="
                        w-full outline-none border-none text-[#6D6D6D] bg-[#F4F4F4] rounded-full md:h-[42px] h-[44px] md:text-[20px] text-[12px] px-3 py-2
                        file:mr-5 file:py-1 file:px-3 file:rounded-full file:bg-[#6D6D6D] file:text-white 
                        file:text-sm file:font-medium
                        file:text-stone-700
                        italic
                        "
                  type="file"
                  onChange={setFile}
                  value={formData.avatar || fileList?.name}
                  accept="image/*" // Optional: restrict to image files
                />
              </div>
              <div
                onClick={handleSave}
                className="col-span-6 mt-[8px] text-right">
                <button className="bg-limeGreen px-[11px] py-[8px] rounded-lg text-[10px] font-bold ripple md:text-[22px] md:rounded-[30px] md:px-9 md:py-3">
                  Save Profile
                </button>
              </div>
              <div className="ml-[14px] hidden md:block col-span-6">
                <ToggleSwitch check={check} handleCheck={handleCheck} />
                <span className="font-bold text-xs text-darkSilverColor ml-[17px] md:text-[20px]">
                  Has Newsletter
                </span>
              </div>
            </div>
          </div>
          <div className="ml-[14px] mt-[17px] md:hidden">
            <ToggleSwitch />
            <span className="font-bold text-xs text-darkSilverColor ml-[17px]">
              Has Newsletter
            </span>
          </div>
        </div>
      }
    />
  );
};
// else return <DesktopAddNewContact/>;

// };

export default AddNewContact;
