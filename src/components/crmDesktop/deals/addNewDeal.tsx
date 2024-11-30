import React, { useEffect, useState } from "react";
import Layout from "../layout";
import CustomSelect from "../components/customSelect";
import CustomInput from "../components/customInput";
import SearchBox from "../components/searchBoxMobile/page";
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
}

const AddNewDeal: React.FC = () => {
  // const { data: session, status } = useSession();
  const { data: session } = useSession() as { data: CustomSession | null };
  const router = useRouter();
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
    token: session?.accessToken[0],
    userId: session?.user?.id,
  });

  useEffect(() => {
    if (session) {
      console.log("Session object:", session);
      setFormData({
        ...formData,
        userId: session?.user?.id || "",
        token: session?.accessToken[0], // Make sure this path is correct
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
      token: session?.accessToken[0],
      userId: session?.user?.id,
      dealName: formData.dealName || "",
      description: formData.description,
      company: formData.company,
      startAt: formData.startAt,
      stage: formData.stage,
      type: formData.type,
      amount: parseFloat(formData.amount),
    };

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
    <Layout
      Childrens={
        <div className=" md:mx-[58px] mx-[20px] md:mt-[76px] mb-[40px] rounded-3xl">
          <div className="w-full mt-4 flex  md:hidden">
            <TabNavigation />
          </div>
          <div className="mt-4 mb-4 block md:hidden ">
            <SearchBox Component={"Deals"} />
          </div>
          <div className="w-full bg-chinesWhite rounded-3xl">
            <div className="flex md:py-[14px] py-[7px] md:pl-[50px] pl-[14px] items-center 2xl:text-[33px] md:text-[30px] text-[16px] text-white font-bold rounded-3xl justify-between cursor-pointer bg-palatinatePurple">
              Deal Information
            </div>
            <div className="grid grid-cols-3 px-[14px] md:px-[0px] ">
              <div className="md:col-span-2 col-span-3">
                <div className="grid grid-cols-7 gap-1 md:mt-[62px] md:pl-[113px] pb-[27px]">
                  <div className="md:col-span-6 col-span-12">
                    <label
                      htmlFor="name"
                      className="text-darkSilverColor md:text-[20px] text-[12px] font-bold mb-[8px]">
                      Deal Name
                    </label>
                    <CustomInput
                      placeholder=""
                      id="name"
                      className="w-full outline-none bg-[#F4F4F4] border-none rounded-full md:h-[42px] h-[27px] md:text-[20px] text-[12px] px-2 md:mt-2  mb-3"
                      type="text"
                      handleChange={handleChange}
                      model="dealName"
                      value={formData.dealName}
                    />
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <label
                      htmlFor="description"
                      className="text-darkSilverColor md:text-[20px] text-[12px] font-bold mb-[8px]">
                      Description
                    </label>
                    <CustomInput
                      placeholder=""
                      model="description"
                      value={formData.description}
                      id="description"
                      className="w-full outline-none bg-[#F4F4F4] border-none rounded-3xl md:h-[120px] h-[75px] md:text-[20px] text-[12px] px-2 md:mt-2 mb-3"
                      type="text"
                    />
                  </div>
                  <div className="md:col-span-6 col-span-12">
                    <label
                      htmlFor="company"
                      className="text-darkSilverColor md:text-[20px] text-[12px] font-bold mb-[8px]">
                      Company
                    </label>
                    <CustomSelect
                      id="company"
                      handleChange={handleChange}
                      model="company"
                      value={formData.company}
                      className="w-full outline-none bg-[#F4F4F4] border-none rounded-full md:h-[42px] h-[27px] md:text-[20px] text-[12px] px-2 md:mt-2 mb-3"
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
                  <div className="md:col-span-6 col-span-12">
                    <label
                      htmlFor="startAt"
                      className="text-darkSilverColor md:text-[20px] text-[12px] font-bold mb-[8px]">
                      Start At
                    </label>
                    <CustomInput
                      placeholder=""
                      handleChange={handleChange}
                      model="startAt"
                      value={formData.startAt}
                      id="startAt"
                      className="w-full outline-none bg-[#F4F4F4] border-none rounded-full md:h-[42px] h-[27px]  md:text-[20px] text-[12px] px-2 md:mt-2 mb-3"
                      type="date"
                    />
                  </div>
                  <div className="md:col-span-6 col-span-12">
                    <label
                      htmlFor="stage"
                      className="text-darkSilverColor md:text-[20px] text-[12px] font-bold mb-[8px]">
                      Stage
                    </label>
                    <CustomSelect
                      id="stage"
                      className="w-full outline-none bg-[#F4F4F4] border-none rounded-full md:h-[42px] h-[27px] md:text-[20px] text-[12px] px-2 md:mt-2 mb-3"
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
                  <div className="md:col-span-6 col-span-12">
                    <label
                      htmlFor="type"
                      className="text-darkSilverColor md:text-[20px] text-[12px]  font-bold mb-[8px]">
                      Type
                    </label>
                    <CustomSelect
                      name=""
                      id="type"
                      handleChange={handleChange}
                      model="type"
                      value={formData.type}
                      className="w-full outline-none bg-[#F4F4F4] border-none rounded-full md:h-[42px] h-[27px] md:text-[20px] text-[12px] px-2 md:mt-2 mb-3"
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
                    />
                  </div>
                  <div className="md:col-span-6 col-span-12">
                    <label
                      htmlFor="amount"
                      className="text-darkSilverColor md:text-[20px] text-[12px] font-bold mb-[8px]">
                      Amount
                    </label>
                    <CustomInput
                      placeholder=""
                      handleChange={handleChange}
                      model="amount"
                      value={formData.amount}
                      id="amount"
                      className="w-full outline-none bg-[#F4F4F4] border-none rounded-full md:h-[42px] h-[27px] md:text-[20px] text-[12px] px-2 md:mt-2 mb-3"
                      type="text"
                    />
                  </div>
                  <div className="md:col-span-6 col-span-12 mt-[8px] text-right mb-[9px]">
                    <button
                      onClick={handleSave}
                      className="bg-limeGreen md:px-[50px] md:py-[18px] py-[8px] px-[8px] rounded-3xl md:text-[22px] text-[10px] font-bold ripple">
                      Save Deals
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default AddNewDeal;
