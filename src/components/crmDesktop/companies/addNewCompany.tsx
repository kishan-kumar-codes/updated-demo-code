import LayoutView from "../layout";
import CustomInput from "../components/customInput";
import CustomSelect from "../components/customSelect";
import Header from "../components/header";
import Layout from "../layout";
import { useRouter } from "next/navigation";
// import TabNavigation from "../component/tabNavigation";
import TabNavigation from "../components/tabNavigation";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { MyContext } from "@/utils/MyContext";
import { useSession } from "next-auth/react";
import { useToast } from "../../crmDesktop/components/toasterProvider";
// import { useToast } from "@/components/ui/use-toast";

interface CustomSession {
  user: {
    name: string;
    email: string;
    image?: string;
    id: string;
  };
  accessToken: string;
  expires: string;
  refreshToken: string;
  provider: string;
}

const NewCompanyForm: React.FC = () => {
  const router = useRouter();
  // const context = useContext(MyContext);
  // const { data: session, status } = useSession() ;
  const { data: session } = useSession() as { data: CustomSession | null };
  const { showToast } = useToast();
  // const { updateContextData, contextData, clearContext } = context;
  // const { data: session, status } = useSession();
  const [fileList, setFiles] = useState<File[]>([]);
  const tokenToUse =
    session?.provider === "credentials"
      ? session.refreshToken
      : session?.accessToken;
  // console.log("session?.user?.id", session?.user?.id);
  useEffect(() => {
    if (session) {
      console.log("Session object:", session);
      setFormData({
        ...formData,
        token: session?.expires, // Adjust based on actual session structure
        userId: session?.user?.id || "", // Set userId correctly
      });
    }
  }, [session]);
  const [businessTypes, setBusinessTypes] = useState([]);
  const [formData, setFormData] = useState({
    token: session?.expires,
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
    token: session?.expires,
    userId: "",
    businessType: "", // For input field
  });
  const [showPopup, setShowPopup] = useState(false); // State for popup visibility

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
      console.log("businessTypeData", businessTypeData);
      setBusinessTypes(businessTypeData);
      console.log("Business types fetched:", businessTypeData);
    } catch (error) {
      console.error("Error fetching business types:", error);
    }
  };
  useEffect(() => {
    if (session?.user?.id) {
      getAllBusinessTypes();
    }
  }, [session?.user?.id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/businessType/create-businessType", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: session?.expires, // Ensure this is correct
          name: formBusinessTypeData.businessType, // Passing correct field name
          userId: session?.user?.id, // Ensure correct user ID is passed
        }),
      });
      console.log("response:", response);
      if (response.ok) {
        alert("added");
        showToast(`Business Type added successfully!`, "success");
        setShowPopup(false); // Hide popup
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

  const handleDropdownChange = (model: any, event: any) => {
    if (event.target.value === "addBusinessType") {
      setShowPopup(true); // Show the popup if 'Add Business Type' is selected
    } else {
      setFormData({
        ...formData,
        [model]: event.target.value,
      });
    }
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
      logoBase64 = await convertFileToBase64(file);
    }

    const payload = {
      token: session?.expires,
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
      // alert("Company created")
      showToast(`Company added successfully!`, "success");
      router.push("/crm/companies/");
    } catch (error) {
      console.error("Error during company creation:", error);
    }
  };

  // Utility function to convert file to Base64
  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result?.toString() || "");
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <Layout
      Childrens={
        <>
          <div className="relative flex flex-col h-full md:px-[58px] px-[20px] md:pt-[75px] w-full">
            <div className="w-full md:hidden mt-4  flex">
              <TabNavigation />
            </div>
            <div className="flex-1 p  QAb-[8px] mt-[15px]  mb-[40px] bg-chinesWhite rounded-3xl">
              {/* <div className="w-full rounded-3xl bg-palatinatePurple h-[67px] text-white text-[34px] font-bold flex items-center ">
                <h5 className="ml-[50px] ">Company Profile</h5>
              </div> */}
              <div className="w-full rounded-2xl bg-palatinatePurple md:py-[14px] py-[8px] text-white md:text-[30px] text-[16px] lg:text-[34px] font-bold flex items-center">
                <h5 className="md:ml-[50px] ml-[20px] ">Company Profile</h5>
              </div>
              <div className="grid grid-cols-3 md:pl-[110px] md:pt-[92px] pt-[15px] pb-[27px] gap-4">
                <div className="2xl:col-span-2 col-span-3">
                  <div className="grid grid-cols-6 gap-2 px-[14px]">
                    <div className="col-span-6">
                      <label
                        htmlFor="name"
                        className="text-darkSilverColor md:text-[20px] text-[12px] font-bold mb-[6px]">
                        Name
                      </label>
                      <CustomInput
                        placeholder=""
                        id="name"
                        className="w-full outline-none bg-[#F4F4F4] border-none rounded-full md:h-[42px] h-[27px] md:text-[20px] text-[12px] px-4 mt-2"
                        type="text"
                        value={formData.name}
                        model="name"
                        handleChange={handleChange}
                      />
                    </div>
                    <div className="col-span-3">
                      <label
                        htmlFor="name"
                        className="text-darkSilverColor md:text-[20px] text-[12px] font-bold mb-[6px]">
                        Business Type
                      </label>
                      <CustomSelect
                        id="name"
                        name=""
                        value={formData.business}
                        model="business"
                        handleChange={handleDropdownChange}
                        className="w-full outline-none border-none bg-[#F4F4F4] rounded-full md:h-[42px] h-[27px] md:text-[20px] text-[12px] px-2 mt-2"
                        childrens={
                          <>
                            <option value="" disabled hidden selected></option>
                            {businessTypes.length > 0 ? (
                              businessTypes.map((type) => (
                                <option
                                  key={type.id}
                                  className="text-darkSilverColor"
                                  value={type.id}>
                                  {type.name}
                                </option>
                              ))
                            ) : (
                              <option
                                className="text-palatinatePurple font-normal pl-[30px] my-[19px]"
                                value="addBusinessType">
                                + Add Business Type
                              </option>
                            )}

                            <option
                              className="text-palatinatePurple font-normal pl-[30px] my-[19px]"
                              value="addBusinessType">
                              + Add Business Type
                            </option>
                          </>
                        }
                      />
                    </div>
                    <div className="col-span-3 ">
                      <label
                        htmlFor="name"
                        className="text-darkSilverColor md:text-[20px] text-[12px] font-bold mb-[6px]">
                        Size
                      </label>
                      <CustomSelect
                        id="name"
                        name=""
                        value={formData.size}
                        model="size"
                        handleChange={handleChange}
                        className="w-full outline-none border-none bg-[#F4F4F4] rounded-full md:h-[42px] h-[27px] md:text-[20px] text-[12px] px-2 mt-2"
                        childrens={
                          <>
                            <option value="" disabled hidden selected></option>
                            <option value="1 Employee">1 Employee</option>
                            <option value="2-9 Employees">2-9 Employees</option>
                            <option value="50-249 Employees">
                              50-249 Employees
                            </option>
                            <option value="250 or more Employees">
                              250 or more Employees
                            </option>
                          </>
                        }
                      />{" "}
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="name"
                        className="text-darkSilverColor md:text-[20px] text-[12px] font-bold mb-[6px]">
                        Address
                      </label>
                      <CustomInput
                        placeholder=""
                        id="name"
                        className="w-full outline-none border-none bg-[#F4F4F4] rounded-full md:h-[42px] h-[27px] md:text-[20px] text-[12px] px-2 mt-2"
                        type="text"
                        value={formData.address}
                        model="address"
                        handleChange={handleChange}
                      />
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="text-darkSilverColor md:text-[20px] text-[12px] font-bold mb-[6px]">
                        City
                      </label>
                      <CustomInput
                        placeholder=""
                        id="name"
                        className="w-full outline-none border-none bg-[#F4F4F4] rounded-full md:h-[42px] h-[27px] md:text-[20px] text-[12px] px-2 mt-2"
                        type="text"
                        value={formData.city}
                        model="city"
                        handleChange={handleChange}
                      />
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="text-darkSilverColor md:text-[20px] text-[12px] font-bold mb-[6px]">
                        Zip Code
                      </label>
                      <CustomInput
                        placeholder=""
                        id="name"
                        className="w-full outline-none border-none bg-[#F4F4F4] rounded-full md:h-[42px] h-[27px] md:text-[20px] text-[12px] px-2 mt-2"
                        type="text"
                        value={formData.zipCode}
                        model="zipCode"
                        handleChange={handleChange}
                      />
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="text-darkSilverColor md:text-[20px] text-[12px] font-bold mb-[6px]">
                        State
                      </label>
                      <CustomInput
                        placeholder=""
                        id="name"
                        className="w-full outline-none border-none bg-[#F4F4F4] rounded-full md:h-[42px] h-[27px] md:text-[20px] text-[12px] px-2 mt-2"
                        type="text"
                        value={formData.state}
                        model="state"
                        handleChange={handleChange}
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="name"
                        className="text-darkSilverColor md:text-[20px] text-[12px] font-bold mb-[6px]">
                        Website
                      </label>
                      <CustomInput
                        placeholder=""
                        id="name"
                        className="w-full outline-none border-none bg-[#F4F4F4] rounded-full md:h-[42px] h-[27px] md:text-[20px] text-[12px] px-2 mt-2"
                        type="text"
                        value={formData.website}
                        model="website"
                        handleChange={handleChange}
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="name"
                        className="text-darkSilverColor md:text-[20px] text-[12px] font-bold mb-[6px]">
                        Linkedin
                      </label>
                      <CustomInput
                        placeholder=""
                        id="name"
                        className="w-full outline-none border-none bg-[#F4F4F4] rounded-full md:h-[42px] h-[27px] md:text-[20px] text-[12px] px-2 mt-2"
                        type="text"
                        value={formData.linkedin}
                        model="linkedin"
                        handleChange={handleChange}
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="name"
                        className="text-darkSilverColor md:text-[20px] text-[12px] font-bold mb-[6px]">
                        Logo
                      </label>
                      <input
                        id="logo"
                        className="w-full outline-0 border-none text-[#6D6D6D] bg-[#F4F4F4] rounded-full md:h-[50px] h-[44px] md:text-[18px] text-[12px] px-3 py-2 file:mr-5 file:py-1 file:px-3 file:rounded-full file:bg-[#6D6D6D] file:text-white file:text-sm file:font-medium italic"
                        onChange={setFile}
                        type="file"
                        accept="image/*" // Optional: restrict to image files
                      />
                    </div>
                    <div className="col-span-3">
                      <label
                        htmlFor="name"
                        className="text-darkSilverColor md:text-[20px] text-[12px] font-bold mb-[6px]">
                        Phone Number
                      </label>
                      <CustomInput
                        placeholder=""
                        id="name"
                        className="w-full outline-none border-none bg-[#F4F4F4] rounded-full md:h-[42px] h-[27px] md:text-[20px] text-[12px] px-2 mt-2"
                        type="number"
                        value={formData.phoneNumber}
                        model="phoneNumber"
                        handleChange={handleChange}
                      />
                    </div>
                    <div className="col-span-3">
                      <label
                        htmlFor="name"
                        className="text-darkSilverColor md:text-[20px] text-[12px] font-bold mb-[6px]">
                        Account Manager
                      </label>

                      <CustomSelect
                        id="name"
                        name=""
                        value={formData.accountManager}
                        model="accountManager"
                        handleChange={handleChange}
                        className="w-full outline-none border-none bg-[#F4F4F4] rounded-full md:h-[42px] h-[27px] md:text-[20px] text-[12px] px-2 mt-2"
                        childrens={
                          <>
                            <option value="" disabled hidden selected></option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                          </>
                        }
                      />
                    </div>
                    <div className="col-span-6 mt-[8px] text-right">
                      <button
                        onClick={handleSave}
                        className="bg-limeGreen text-btnBlack md:px-[38px] px-[11px] md:py-[18px] py-[8px] rounded-full md:text-[22px] text-[10px] font-bold ripple">
                        Save Profile
                      </button>
                    </div>
                  </div>
                </div>
                <div className="grid"></div>
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
        </>
      }
    />
  );
};

export default NewCompanyForm;
