"use client";
import React, { useEffect, useState } from "react";
import LayoutView from "../../layout/page";
import SearchBox from "../../component/searchBox/page";
import TabNavigation from "../../component/tabNavigation";
import CustomSelect from "../../component/customSelect";
import CustomInput from "../../component/customInput";
import { useClientMediaQuery } from "../../../../utils/srchooksuseClientMediaQuery";
import DesktopAddNewDeal from "../../../../components/crmDesktop/deals/addNewDeal";
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
  provider?: string;
  refreshToken?: string;
}

const AddNewDeals: React.FC = () => {
  // const isMobile = useClientMediaQuery("(max-width: 769px)");
  // if(isMobile){
  const { data: session } = useSession() as { data: CustomSession | null };
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const tokenToUse =
    session?.provider === "credentials"
      ? session.refreshToken
      : session?.accessToken;
  // const { showToast } = useToast();
  const [companiesList, setCompaniesList] = useState([]);
  const [formData, setFormData] = useState({
    dealName: "",
    description: "",
    company: "",
    startAt: "",
    stage: "",
    type: "",
    amount: null,
    token: session?.expires,
    userId: session?.user?.id,
  });

  const isFormValid = () => {
    return (
      formData.dealName?.trim() !== "" &&
      formData.description?.trim() !== "" &&
      formData.company?.trim() !== "" &&
      // formData.startAt?.trim() !== "" &&
      formData.stage?.trim() !== "" &&
      formData.type?.trim() !== ""
    );
  };

  console.log(
    "Data",
    formData.dealName,
    formData.description,
    formData.company
    // formData.startAt,
    // formData.stage,
    // formData.type
  );

  useEffect(() => {
    if (session) {
      console.log("Session object:", session);
      setFormData({
        ...formData,
        userId: session?.user?.id || "",
        token: session?.expires, // Make sure this path is correct
      });
    }
  }, [session]);

  const handleChange = (model: any, event: any) => {
    let value = event.target.value;

    // Check if the input is for amount, ensure it's a valid numeric string
    if (model === "amount") {
      // Allow only numeric values, decimal, or empty string
      if (value === "" || /^\d*$/.test(value)) {
        setFormData({
          ...formData,
          [model]: value, // Keep value as string for now
        });
      }
    } else {
      setFormData({
        ...formData,
        [model]: value,
      });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setFormData({
        ...formData,
      });
      // getDealByName();
    }
  }, []);

  // const getDealByName = async () => {
  //   const dealName = "asdasdsadasasd"; // Replace with the actual company name you are querying
  //   const response = await fetch(
  //     `/api/deals/get-deals-record?dealName=${encodeURIComponent(dealName)}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //         "Cache-Control": "no-cache",
  //       },
  //     }
  //   );

  //   if (response.ok) {
  //     const data = await response.json();
  //     console.log("Deal data:", data);
  //   } else {
  //     console.error("Error response:", await response.text());
  //   }
  // };

  const handleSave = async () => {
    const payload = {
      token: session?.expires,
      userId: session?.user?.id,
      dealName: formData.dealName || "",
      description: formData.description,
      company: formData.company,
      startAt: formData.startAt,
      stage: formData.stage,
      type: formData.type,
      amount: parseFloat(formData.amount),
    };
    setLoading(true);

    try {
      const response = await fetch("/api/deals/create-deals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseBody = await response.json();
      if (!response.ok) {
        console.error("Error response from server:", responseBody);
        throw new Error("Failed to create Deal");
      }
      // showToast(`Deal added successfully!`, "success");
      router.push("/crm/deals?name=Deals");
    } catch (error) {
      console.error("Error during company creation:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (session?.user?.id) {
      console.log("Session object:", session);
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
      setCompaniesList(companies);
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };
  return (
    <LayoutView
      Childrens={
        <div className="relative  w-full">
          <div className="h-[75%] px-[20px]">
            <div className="w-full mt-4 flex">
              <TabNavigation />
            </div>
            {/* <div className="mt-4 ">
                <SearchBox Component={"Deals"} />
              </div> */}
            <div className="  section relative w-full bg-chinesWhite  rounded-lg md:rounded-3xl md:pb-8 mt-4 md:mt-20">
              <div className="flex pl-[14px] items-center text-[16px] text-white font-bold rounded-lg justify-between cursor-pointer bg-palatinatePurple h-[39px]  md:h-[67px] md:text-[34px] md:rounded-3xl">
                Deal Information
              </div>
              <div className="grid grid-cols-6 gap-1 px-[14px] lg:w-[60%] lg:m-16 lg:gap-3">
                <div className="col-span-6">
                  <label
                    htmlFor="name"
                    className="text-darkSilverColor text-[12px] font-bold mb-[6px] md:text-[20px]">
                    Deal Name*
                  </label>
                  <CustomInput
                    placeholder=""
                    id="name"
                    handleChange={handleChange}
                    className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 md:h-[42px] md:text-[20px] md:mt-2 md:rounded-2xl"
                    type="text"
                    model="dealName"
                    value={formData.dealName}
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="description"
                    className="text-darkSilverColor text-[12px] font-bold mb-[6px] md:text-[20px]">
                    Description
                  </label>
                  <CustomInput
                    placeholder=""
                    model="description"
                    id="description"
                    handleChange={handleChange}
                    value={formData.description}
                    className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[75px] text-[12px] px-2 md:h-[114px] md:text-[20px] md:mt-2 md:rounded-2xl"
                    type="text"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="company"
                    className="text-darkSilverColor text-[12px] font-bold mb-[6px] md:text-[20px]">
                    Company*
                  </label>
                  <CustomSelect
                    id="company"
                    model="company"
                    handleChange={handleChange}
                    className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 md:h-[42px] md:text-[20px] md:mt-2 md:rounded-2xl"
                    name=""
                    childrens={
                      <>
                        <option selected disabled hidden>
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
                    htmlFor="startAt"
                    className="text-darkSilverColor text-[12px] font-bold mb-[6px] md:text-[20px]">
                    Start At
                  </label>
                  <CustomInput
                    placeholder={""}
                    id="startAt"
                    handleChange={handleChange}
                    model="type"
                    value={formData.type}
                    className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2  appearance-none placeholder-transparent md:h-[42px] md:text-[20px] md:mt-2 md:rounded-2xl"
                    type="date"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="stage"
                    className="text-darkSilverColor text-[12px] font-bold mb-[6px] md:text-[20px]">
                    Stage*
                  </label>
                  <CustomSelect
                    id="stage"
                    className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 md:h-[42px] md:text-[20px] md:mt-2 md:rounded-2xl"
                    name=""
                    handleChange={handleChange}
                    model="stage"
                    value={formData.stage}
                    childrens={
                      <>
                        <option selected disabled hidden>
                          {" "}
                        </option>
                        <option value="Opportunity">Opportunity</option>
                        <option value="Proposal Sent">Proposal Sent</option>
                        <option value="In Negotiation">In Negotiation</option>
                        <option value="Won">Won</option>
                        <option value="Lost">Lost</option>
                        <option value="Delayed">Delayed</option>
                      </>
                    }
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="type"
                    className="text-darkSilverColor text-[12px] font-bold mb-[6px] md:text-[20px]">
                    Type
                  </label>
                  <CustomSelect
                    name=""
                    id="type"
                    childrens={
                      <>
                        <option selected disabled hidden>
                          {" "}
                        </option>
                        <option value="Copywriting">Copywriting</option>
                        <option value="Print Project">Print Project</option>
                        <option value="UI Design">UI Design</option>
                        <option value="Website Design">Website Design</option>
                      </>
                    }
                    handleChange={handleChange}
                    model="type"
                    value={formData.type}
                    className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 md:h-[42px] md:text-[20px] md:mt-2 md:rounded-2xl"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="amount"
                    className="text-darkSilverColor text-[12px] font-bold mb-[6px] md:text-[20px]">
                    Amount
                  </label>
                  <CustomInput
                    placeholder=""
                    handleChange={handleChange}
                    model="amount"
                    value={formData.amount}
                    id="amount"
                    className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 md:h-[42px] md:text-[20px] md:mt-2 md:rounded-2xl"
                    type="text"
                  />
                </div>
                <div className="col-span-6 mt-[8px] text-right mb-[9px]">
                  <button
                    onClick={handleSave}
                    className={`bg-limeGreen flex justify-center px-[11px] w-24 lg:w-48 whitespace-nowrap py-[8px] rounded-lg text-[10px] font-bold ripple md:text-[22px] md:rounded-[30px] md:px-9 md:py-4 ${!isFormValid() ? "opacity-50 cursor-not-allowed" : ""}`}>
                    {loading ? (
                      <div className="w-[30px] h-[30px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px] border-4 border-[#631363]/30 border-t-[#631363] rounded-full animate-spin" />
                    ) : (
                      "Save Deals"
                    )}
                  </button>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      }
    />
  );
};

//   else return <DesktopAddNewDeal/>
// };

export default AddNewDeals;
