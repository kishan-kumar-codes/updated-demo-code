import React, { useState, ChangeEvent, useEffect } from "react";
import LayoutView from "../layout";

import CustomInput from "../components/customInput";
import CustomSelect from "../components/customSelect";
import ToggleSwitch from "../components/toggleSwitch";
import Footer from "../components/footer";
import TabNavigation from "../components/tabNavigation";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
// import { useToast } from "../../payments/components/toasterProvider";
interface CustomSession {
  user: {
    name: string;
    email: string;
    image?: string;
    id: string;
  };
  accessToken: string;
  expires: string;
  provider: string;
  refreshToken: string;
}

const AddNewContact: React.FC = () => {
  const [fileList, setFiles] = useState<File[]>([]);
  const [check, setCheck] = useState(false);
  // const { data: session, status } = useSession();
  const { data: session } = useSession() as { data: CustomSession | null };
  const router = useRouter();
  // const { showToast } = useToast();
  const [companiesList, setCompaniesList] = useState([]);
  console.log("session....", session);
  const tokenToUse =
    session?.provider === "credentials"
      ? session.refreshToken
      : session?.accessToken;
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
    token: tokenToUse,
    userId: session?.user?.id,
  });

  useEffect(() => {
    if (session) {
      console.log("Session object:", session);
      setFormData({
        ...formData,
        token: tokenToUse,
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
        <div className="relative flex flex-col md:pt-[76px] md:px-[59px] px-[20px] w-full">
          <div className="w-full md:hidden mt-4  flex">
            <TabNavigation />
          </div>
          <div className="bg-chinesWhite rounded-3xl md:mb-[40px] mt-[15px] md:mt-[0px] ">
            <div className="w-full rounded-lg bg-palatinatePurple md:py-[14px] py-[8px] text-white md:text-[32px] text-[16px] font-bold flex items-center">
              <h5 className="md:ml-[50px] ml-[20px] ">Profile Information</h5>
            </div>
            <div className="md:grid md:grid-cols-3 md:pt-[79px] mt-[10px] md:pl-[114px] px-[10px]">
              <div className="2xl:col-span-2 col-span-3">
                <div className="grid grid-cols-6 gap-4 md:pb-[95px] pb-[60px]">
                  <div className="col-span-3">
                    <label
                      htmlFor="name"
                      className="text-darkSilverColor md:text-[20px] text-[12px] font-bold mb-[6px]">
                      First Name
                    </label>
                    <CustomInput
                      placeholder=""
                      id="name"
                      className="w-full outline-none bg-[#F4F4F4] border-none rounded-full md:h-[42px] h-[27px] md:text-[20px] text-[12px] px-2"
                      type="text"
                      handleChange={handleChange}
                      model="firstName"
                      value={formData.firstName}
                    />
                  </div>
                  <div className="col-span-3">
                    <label
                      htmlFor="sector"
                      className="text-darkSilverColor md:text-[20px] text-[12px] font-bold mb-[6px]">
                      Last Name
                    </label>
                    <CustomInput
                      placeholder=""
                      id="name"
                      className="w-full outline-none bg-[#F4F4F4] border-none rounded-full md:h-[42px] h-[27px] md:text-[20px] text-[12px] px-2"
                      type="text"
                      handleChange={handleChange}
                      model="lastName"
                      value={formData.lastName}
                    />
                  </div>
                  <div className="col-span-3">
                    <label
                      htmlFor="adress"
                      className="text-darkSilverColor md:text-[20px] text-[12px] font-bold mb-[6px]">
                      Title
                    </label>
                    <CustomInput
                      placeholder=""
                      id="adress"
                      className="w-full outline-none bg-[#F4F4F4] border-none rounded-full md:h-[42px] h-[27px] md:text-[20px] text-[12px] px-2"
                      type="text"
                      handleChange={handleChange}
                      model="title"
                      value={formData.title}
                    />
                  </div>
                  <div className="col-span-3">
                    <label
                      htmlFor="size"
                      className="text-darkSilverColor md:text-[20px] text-[12px] font-bold mb-[6px]">
                      Company
                    </label>
                    <CustomSelect
                      id="size"
                      className="w-full outline-none bg-[#F4F4F4] border-none rounded-full md:h-[42px] h-[27px] md:text-[20px] text-[12px] px-2"
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
                      className="text-darkSilverColor md:text-[20px] text-[12px] font-bold mb-[6px]">
                      Email
                    </label>
                    <CustomInput
                      placeholder=""
                      id="adress"
                      className="w-full outline-none bg-[#F4F4F4] border-none rounded-full md:h-[42px] h-[27px] md:text-[20px] text-[12px] px-2"
                      type="text"
                      handleChange={handleChange}
                      model="email"
                      value={formData.email}
                    />
                  </div>
                  <div className="col-span-3">
                    <label
                      htmlFor="city"
                      className="text-darkSilverColor md:text-[20px] text-[12px] font-bold mb-[6px]">
                      Phone Number 1
                    </label>
                    <CustomInput
                      placeholder=""
                      id="city"
                      className="w-full outline-none bg-[#F4F4F4] border-none rounded-full md:h-[42px] h-[27px] md:text-[20px] text-[12px] px-2"
                      type="text"
                      handleChange={handleChange}
                      model="phoneNumber_1"
                      value={formData.phoneNumber_1}
                    />
                  </div>
                  <div className="col-span-3">
                    <label
                      htmlFor="zipCode"
                      className="text-darkSilverColor md:text-[20px] text-[12px] font-bold mb-[6px]">
                      Phone Number 2
                    </label>
                    <CustomInput
                      placeholder=""
                      id="zipCode"
                      className="w-full outline-none bg-[#F4F4F4] border-none rounded-full md:h-[42px] h-[27px] md:text-[20px] text-[12px] px-2"
                      type="text"
                      handleChange={handleChange}
                      model="phoneNumber_2"
                      value={formData.phoneNumber_2}
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="state"
                      className="text-darkSilverColor md:text-[20px] text-[12px] font-bold mb-[6px]">
                      Background
                    </label>
                    <CustomInput
                      placeholder=""
                      id="state"
                      className="w-full outline-none bg-[#F4F4F4] border-none rounded-full md:h-[42px] h-[27px] md:text-[20px] text-[12px] px-2"
                      type="text"
                      handleChange={handleChange}
                      model="background"
                      value={formData.background}
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="file-upload"
                      className="text-darkSilverColor md:text-[20px] text-[12px] font-bold mb-[6px] ">
                      Avatar
                    </label>
                    <input
                      placeholder=""
                      id="name"
                      className="
                        w-full outline-none border-none text-[#6D6D6D] bg-[#F4F4F4] rounded-full md:h-[42px] h-[44px] md:text-[20px] text-[12px] px-3 py-2
                        file:mr-5 file:py-1 file:px-3 file:rounded-full file:bg-[#6D6D6D] file:text-white 
                        file:text-sm file:font-medium
                        file:text-stone-700
                        italic
                        "
                      type="file"
                      onChange={setFile}
                      value={formData.avatar}
                      accept="image/*" // Optional: restrict to image files
                    />
                  </div>
                  <div className="col-span-3">
                    <label
                      htmlFor="adress"
                      className="text-darkSilverColor md:text-[20px] text-[12px] font-bold mb-[6px]">
                      Tag
                    </label>
                    <CustomInput
                      placeholder=""
                      id="adress"
                      className="w-full outline-none bg-[#F4F4F4] border-none rounded-full md:h-[42px] h-[27px] md:text-[20px] text-[12px] px-2"
                      type="text"
                      handleChange={handleChange}
                      model="tag"
                      value={formData.tag}
                    />
                  </div>
                  <div className="col-span-6 mt-[8px] text-right">
                    <button
                      onClick={handleSave}
                      className="bg-limeGreen text-btnBlack md:px-[38px] px-[11px] md:py-[18px] py-[8px] rounded-full md:text-[22px] text-[10px] font-bold ripple">
                      Save Profile
                    </button>
                  </div>
                  <div className=" col-span-6 md:mt-[17px]">
                    <ToggleSwitch check={check} handleCheck={handleCheck} />
                    <span className="font-bold md:text-[20px] text-xs text-darkSilverColor ml-[17px]">
                      Has Newsletter
                    </span>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="fixed md:hidden block  bottom-0 z-50 left-0">
            <Footer />
          </div>
        </div>
      }
    />
  );
};

export default AddNewContact;
