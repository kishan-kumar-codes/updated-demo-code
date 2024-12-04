"use client";

import LayoutView from "../../layout/page";
import CustomInput from "../../component/customInput";
import CustomSelect from "../../component/customSelect";
import TabNavigation from "../../component/tabNavigation";
import { useClientMediaQuery } from "../../../../utils/srchooksuseClientMediaQuery";
import DesktopAddNewCompany from "../../../../components/crmDesktop/companies/addNewCompany";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSession } from "next-auth/react";
import { ChangeEvent, useEffect, useState } from "react";
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

interface BusinessType {
  id: string;
  name: string;
}

const NewCompanyForm: React.FC = () => {
  const isMobile = useClientMediaQuery("(max-width: 769px)");
  // const { showToast } = useToast();
  const [fileList, setFiles] = useState<File[]>([]);
  const [businessTypes, setBusinessTypes] = useState<BusinessType[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const { data: session } = useSession() as { data: CustomSession | null };
  const router = useRouter();

  useEffect(() => {
    if (session) {
      console.log("Session object:", session);
      setFormData({
        ...formData,
        token: session?.accessToken || "", // Adjust based on actual session structure
        userId: session?.user?.id || "", // Set userId correctly
      });
    }
  }, [session]);

  const [formData, setFormData] = useState({
    token: session?.accessToken,
    name: "",
    business: "",
    size: "",
    address: "",
    city: "",
    zipCode: "",
    state: "",
    website: "",
    linkedin: "",
    logo: "",
    phoneNumber: "",
    accountManager: "",
    userId: session?.user?.id,
  });

  const [formBusinessTypeData, setFormBusinessTypeData] = useState({
    token: session?.accessToken,
    userId: "",
    businessType: "", // For input field
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setFormData({
        ...formData,
      });
    }
  }, []);

  const getAllBusinessTypes = async () => {
    if (!session?.user?.id) {
      console.error("No userId found in session");
      return;
    }

    try {
      const response = await fetch("/api/businessType/get-businessType", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Cache-Control": "no-cache",
        },
        body: JSON.stringify({ userId: session?.user?.id }), // Pass the userId in the request body
      });
      const businessTypeData = await response.json();
      setBusinessTypes(businessTypeData);
    } catch (error) {
      console.error("Error fetching business types:", error);
    }
  };

  useEffect(() => {
    if (session?.user?.id) {
      getAllBusinessTypes();
    }
  }, [session?.user?.id]);

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/businessType/create-businessType", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: session?.accessToken, // Ensure this is correct
          name: formBusinessTypeData.businessType, // Passing correct field name
          userId: session?.user?.id, // Ensure correct user ID is passed
        }),
      });
      console.log("response:", response);
      if (response.ok) {
        alert("added");
        getAllBusinessTypes();
        // showToast(`Business Type added successfully!`, "success");
      } else {
        const errorData = await response.json();
        console.error("Error adding Business Type:", errorData);
        alert("Error adding Business Type.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding Business Type.");
    }
  };

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
      logoBase64 = (await convertFileToBase64(file)) as string;
    }

    const payload = {
      token: session?.accessToken,
      name: formData.name,
      business: formData.business,
      size: formData.size,
      address: formData.address,
      city: formData.city,
      zipCode: formData.zipCode,
      state: formData.state,
      website: formData.website,
      linkedin: formData.linkedin,
      phoneNumber: formData.phoneNumber,
      accountManager: formData.accountManager,
      logo: logoBase64, // Base64 string,
      userId: session?.user?.id,
    };
    console.log("payload:::::::", payload);
    try {
      const response = await fetch("/api/companies/create-companies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseBody = await response.json();
      if (!response.ok) {
        console.error("Error response from server:", responseBody);
        throw new Error("Failed to create company");
      }
      alert("Company created");
      // showToast(`Company added successfully!`, "success");
      router.push("/crm/companies/");
    } catch (error) {
      console.error("Error during company creation:", error);
    }
  };

  const convertFileToBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result?.toString() || "");
      reader.onerror = (error) => reject(error);
    });
  };

  const handleBusineTypechange = (value: any) => {
    setFormData((prev) => ({
      ...prev,
      business: value,
    }));
  };

  const handleBusineSizeChange = (value: any) => {
    setFormData((prev) => ({
      ...prev,
      size: value,
    }));
  };

  const handleAccountManagerChange = (value: any) => {
    setFormData((prev) => ({
      ...prev,
      accountManager: value,
    }));
  };

  const handleAddBusinessType = (e: any) => {
    const dropdown = e.target.closest(`[data-state="open"]`);
    console.log("dropdown", dropdown);
    if (dropdown) dropdown.dispatchEvent(new Event("blur"));
    setShowPopup(true);
  };
  return (
    <LayoutView
      Childrens={
        <div className="relative flex flex-col h-full px-[20px] w-full md:px-14 bg-[#F4F4F4]">
          <div className="w-full mt-4 flex">
            <TabNavigation />
          </div>
          <div className=" overflow-y-scroll rounded-xl pb-[8px] mt-[15px] bg-chinesWhite md:rounded-3xl">
            <div className="w-full rounded-xl bg-palatinatePurple h-[40px] text-white text-[16px] font-bold flex items-center md:h-[67px] md:text-[34px] md:rounded-3xl">
              <h5 className="ml-[14.7px]">Company Profile</h5>
            </div>
            <div className="grid grid-cols-6 gap-1 px-[14px] w-full lg:w-[60%] lg:m-16 lg:gap-3">
              <div className="col-span-6">
                <label
                  htmlFor="name"
                  className="text-darkSilverColor text-[12px] font-bold mb-[6px] md:text-[20px] ">
                  Name
                </label>
                <CustomInput
                  value={formData.name}
                  placeholder=""
                  id="name"
                  className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 md:h-[42px] md:text-[20px] md:mt-2 md:rounded-2xl"
                  type="text"
                  model="name"
                  handleChange={handleChange}
                />
              </div>
              <div className="col-span-3">
                <label
                  htmlFor="name"
                  className="text-darkSilverColor text-[12px] font-bold mb-[6px] md:text-[20px]">
                  Business Type
                </label>
                <Select
                  value={formData.business || ""}
                  onValueChange={handleBusineTypechange}>
                  <SelectTrigger className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 md:h-[42px] md:text-[20px] md:mt-2 md:rounded-2xl">
                    <SelectValue placeholder=" " />
                  </SelectTrigger>
                  <SelectContent className="bg-[#F4F4F4] text-[12px] md:text-[20px]">
                    {businessTypes?.length > 0 ? (
                      businessTypes?.map((type) => (
                        <SelectItem
                          key={type.id || undefined}
                          value={type.name}
                          className="text-[12px] md:text-[20px]">
                          {type.name}
                        </SelectItem>
                      ))
                    ) : (
                      <SelectItem
                        value="No Option Available"
                        className="text-[12px] md:text-[20px]">
                        No Option Available
                      </SelectItem>
                    )}

                    <div
                      // value="Add Business Type"
                      className="text-[12px] md:text-[20px] text-palatinatePurple"
                      onClick={handleAddBusinessType}>
                      + Add Business Type
                    </div>
                  </SelectContent>
                </Select>
                {/* <CustomSelect
                  id="name"
                  name=""
                  className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 md:h-[42px] md:text-[20px] md:mt-2 md:rounded-2xl"
                  childrens={
                    <>
                      <option value="" disabled hidden selected>
                        {" "}
                      </option>
                      <option className="text-darkSilverColor" value="volvo">
                        Communication Services
                      </option>
                      <option className="text-darkSilverColor" value="saab">
                        Consumer Discretionary
                      </option>
                      <option className="text-darkSilverColor" value="mercedes">
                        Consumer Staples
                      </option>
                      <option className="text-darkSilverColor" value="audi">
                        Energy
                      </option>
                      <option className="text-darkSilverColor" value="audi">
                        Financials
                      </option>
                      <option
                        className="text-palatinatePurple font-bold pl-[30px] my-[19px]"
                        value="audi">
                        + Add Business Type
                      </option>
                    </>
                  }
                /> */}
              </div>
              <div className="col-span-3">
                <label
                  htmlFor="name"
                  className="text-darkSilverColor text-[12px] font-bold mb-[6px] md:text-[20px]">
                  Size
                </label>
                <Select
                  value={formData.size || ""}
                  onValueChange={handleBusineSizeChange}>
                  <SelectTrigger className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 md:h-[42px] md:text-[20px] md:mt-2 md:rounded-2xl">
                    <SelectValue placeholder=" " />
                  </SelectTrigger>
                  <SelectContent className="bg-[#F4F4F4] text-[12px] md:text-[20px]">
                    <SelectItem
                      value="1 Employee"
                      className="text-[12px] md:text-[20px]">
                      1 Employee
                    </SelectItem>
                    <SelectItem
                      value="2-9 Employee"
                      className="text-[12px] md:text-[20px]">
                      2-9 Employee
                    </SelectItem>
                    <SelectItem
                      value="10-49 Employee"
                      className="text-[12px] md:text-[20px]">
                      10-49 Employee
                    </SelectItem>
                    <SelectItem
                      value="50-249 Employee"
                      className="text-[12px] md:text-[20px]">
                      50-249 Employee
                    </SelectItem>
                    <SelectItem
                      value="249 or more Employee"
                      className="text-[12px] md:text-[20px]">
                      249 or more Employee
                    </SelectItem>
                  </SelectContent>
                </Select>
                {/* <CustomSelect
                  id="name"
                  name=""
                  className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 md:h-[42px] md:text-[20px] md:mt-2 md:rounded-2xl"
                  childrens={
                    <>
                      <option value="" disabled hidden selected></option>
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </>
                  }
                />{" "} */}
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="name"
                  className="text-darkSilverColor text-[12px] font-bold mb-[6px] md:text-[20px]">
                  Address
                </label>
                <CustomInput
                  placeholder=""
                  id="name"
                  value={formData.address}
                  className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 md:h-[42px] md:text-[20px] md:mt-2 md:rounded-2xl"
                  type="text"
                  model="address"
                  handleChange={handleChange}
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="name"
                  className="text-darkSilverColor text-[12px] font-bold mb-[6px] md:text-[20px]">
                  City
                </label>
                <CustomInput
                  placeholder=""
                  id="name"
                  value={formData.city}
                  className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 md:h-[42px] md:text-[20px] md:mt-2 md:rounded-2xl"
                  type="text"
                  model="city"
                  handleChange={handleChange}
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="name"
                  className="text-darkSilverColor text-[12px] font-bold mb-[6px] md:text-[20px]">
                  Zip Code
                </label>
                <CustomInput
                  placeholder=""
                  value={formData.zipCode}
                  id="name"
                  className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 md:h-[42px] md:text-[20px] md:mt-2 md:rounded-2xl"
                  type="text"
                  model="zipCode"
                  handleChange={handleChange}
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="name"
                  className="text-darkSilverColor text-[12px] font-bold mb-[6px] md:text-[20px]">
                  State
                </label>
                <CustomInput
                  placeholder=""
                  id="name"
                  value={formData.state}
                  className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 md:h-[42px] md:text-[20px] md:mt-2 md:rounded-2xl"
                  type="text"
                  model="state"
                  handleChange={handleChange}
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="name"
                  className="text-darkSilverColor text-[12px] font-bold mb-[6px] md:text-[20px]">
                  Website
                </label>
                <CustomInput
                  placeholder=""
                  id="name"
                  value={formData.website}
                  className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 md:h-[42px] md:text-[20px] md:mt-2 md:rounded-2xl"
                  type="text"
                  model="website"
                  handleChange={handleChange}
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="name"
                  className="text-darkSilverColor text-[12px] font-bold mb-[6px] md:text-[20px] ">
                  Linkedin
                </label>
                <CustomInput
                  placeholder=""
                  id="name"
                  value={formData.linkedin}
                  className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 md:h-[42px] md:text-[20px] md:mt-2 md:rounded-2xl"
                  type="text"
                  model="linkedin"
                  handleChange={handleChange}
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="name"
                  className="text-darkSilverColor text-[12px] font-bold mb-[6px] md:text-[20px]">
                  Logo
                </label>
                <input
                  placeholder=""
                  id="name"
                  value={formData.logo}
                  className="
                        w-full outline-none border-none bg-[#F4F4F4] rounded-2xl h-[27px] text-[12px] px-3 py-1
                        file:mr-5 file:py-0 file:px-2 file:rounded-lg  file:bg-[#6D6D6D] file:text-white 
                        file:text-[8px] file:h-[17px] file:text-center md:file:text-[18px] md:file:px-4 md:file:py-0 first-line:md:p-0
                        md:h-[42px] md:text-[20px] md:mt-2  md:pt-[6px] md:file:h-[30px] md:file:rounded-2xl
                        italic
                        "
                  type="file"
                  onChange={setFile}
                  accept="image/*"
                />
              </div>
              <div className="col-span-3">
                <label
                  htmlFor="name"
                  className="text-darkSilverColor text-[12px] font-bold mb-[6px] md:text-[20px]">
                  Phone Number
                </label>
                <CustomInput
                  placeholder=""
                  id="name"
                  value={formData.phoneNumber}
                  className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 md:h-[42px] md:text-[20px] md:mt-2 md:rounded-2xl"
                  type="number"
                  model="phoneNumber"
                  handleChange={handleChange}
                />
              </div>
              <div className="col-span-3">
                <label
                  htmlFor="name"
                  className="text-darkSilverColor text-[12px] font-bold mb-[6px] md:text-[20px]">
                  Account Manager
                </label>
                <Select
                  value={formData.accountManager || ""}
                  onValueChange={handleAccountManagerChange}>
                  <SelectTrigger className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 md:h-[42px] md:text-[20px] md:mt-2 md:rounded-2xl">
                    <SelectValue placeholder=" " />
                  </SelectTrigger>
                  <SelectContent className="bg-[#F4F4F4] text-[12px] md:text-[20px]">
                    <SelectItem
                      value="me"
                      className="text-[12px] md:text-[20px]">
                      Me
                    </SelectItem>
                    <SelectItem
                      value="other"
                      className="text-[12px] md:text-[20px]">
                      Other
                    </SelectItem>
                  </SelectContent>
                </Select>
                {/* <CustomSelect
                  id="name"
                  name=""
                  className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 md:h-[42px] md:text-[20px] md:mt-2 md:rounded-2xl" 
                  childrens={
                    <>
                      <option value="" disabled hidden selected></option>
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </>
                  }
                /> */}
              </div>
              <div className="col-span-6 mt-[8px] text-right">
                <button
                  onClick={handleSave}
                  className="bg-limeGreen px-[11px] py-[8px] rounded-lg text-[10px] font-bold ripple md:text-[22px] md:rounded-[30px] md:px-9 md:py-3 ">
                  Save Profile
                </button>
              </div>
            </div>
          </div>
          {showPopup && (
            <div className="popup fixed left-0 top-0 h-full w-full bg-black-transparet z-10">
              <div className="popup-content absolute left-0 top-0 h-full w-full  z-20 flex justify-center items-center">
                <div className="bg-white h-[170px] w-[300px]  rounded-lg">
                  <div className="w-full rounded-t-lg bg-palatinatePurple md:py-[14px] py-[8px] text-white md:text-[16px] text-[16px] font-bold flex items-center">
                    <h5 className="ml-[20px] ">Add Business Type</h5>
                  </div>
                  <form onSubmit={handleFormSubmit}>
                    <label>
                      <input
                        type="text"
                        className="w-full mb-5  outline-none border-none bg-[#F4F4F4]  md:h-[42px] h-[27px] md:text-[20px] text-[12px] px-2 mt-0"
                        value={formBusinessTypeData.businessType}
                        placeholder="Enter Business type"
                        onChange={(e) =>
                          setFormBusinessTypeData({
                            ...formBusinessTypeData,
                            businessType: e.target.value,
                          })
                        }
                        required
                      />
                    </label>
                    <div className="d-flex px-4">
                      <button
                        type="submit"
                        className="bg-limeGreen text-btnBlack md:px-[14px] px-[11px] md:py-[9px] py-[12px] rounded-full md:text-[14px] text-[10px] font-bold ripple mr-3 text-white">
                        Submit
                      </button>
                      <button
                        type="button"
                        className="bg-grayX11 text-btnBlack md:px-[14px] px-[11px] md:py-[9px] py-[12px] rounded-full md:text-[14px] text-[10px] font-bold ripple mr-3"
                        onClick={() => setShowPopup(false)}>
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      }
    />
  );
};

export default NewCompanyForm;
