"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import CloseIcon from "../../../assets/images/close-icon.svg";
import FilterIcon from "../../../assets/images/filter-icon.svg";
import BuildingIcon from "../../../assets/images/building.svg";
import VanIcon from "../../../assets/images/van-icon.svg";
import SearchBox from "../components/searchBox";
// import { useToast } from "../../payments/components/toasterProvider";
import { useToast } from "@/components/ui/use-toast";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession } from "next-auth/react";

interface FilterMenuProps {
  text: string;
  onClick?: () => void;
}

const FilterMenu: React.FC<FilterMenuProps> = ({ text, onClick }) => {
  return (
    <h5
      onClick={onClick}
      className="text-darkSilverColor text-[10px] lg:text-[20px] font-bold my-[23px] cursor-pointer hover:text-palatinatePurple">
      {text}
    </h5>
  );
};

interface FilterCompaniesProps {
  setShowFilterCard: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterCompanies: React.FC<{
  setSelectedSize: (size: string) => void;
  setSelectedBusinessType: (type: string) => void;
}> = ({ setSelectedSize, setSelectedBusinessType }) => {
  const { data: session, status } = useSession();

  const [token, setToken] = useState(session?.user?.accessToken);
  const [businessTypes, setBusinessTypes] = useState([]);
  const { toast } = useToast();
  const [filteredBusinessTypes, setFilteredBusinessTypes] = useState([]);
  const [formBusinessTypeData, setFormBusinessTypeData] = useState({
    token: session?.user?.accessToken,
    userId: "",
    businessType: "", // For input field
  });
  const [showPopup, setShowPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const employeeSizes = [
    "1 Employee",
    "2-9 Employees",
    "10-49 Employees",
    "50-249 Employees",
    "250 or more Employees",
  ];

  const filteredSizes = employeeSizes.filter((size) =>
    size.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      setFilteredBusinessTypes(businessTypeData); // No need to fetch again
    } catch (error) {
      console.error("Error fetching business types:", error);
    }
  };

  useEffect(() => {
    if (session?.user?.id) {
      getAllBusinessTypes(); // Called only once when session.userId is available
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
          token: session?.user?.accessToken, // Ensure this is correct
          name: formBusinessTypeData.businessType, // Passing correct field name
          userId: session?.user?.id, // Ensure correct user ID is passed
        }),
      });

      if (response.ok) {
        toast(`Business Type added successfully!`, "success");
        setShowPopup(false);
        getAllBusinessTypes();
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

  const handleSearchChange = (searchValue: string) => {
    const normalizedSearchValue = String(searchValue || "").toLowerCase();

    if (!normalizedSearchValue) {
      // If search input is empty, reset to full list
      setFilteredBusinessTypes(businessTypes);
    } else {
      // Filter business types based on the search query
      const filtered = businessTypes.filter((type) =>
        type.name.toLowerCase().includes(normalizedSearchValue)
      );
      setFilteredBusinessTypes(filtered);
    }
  };

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  const handleBusinessTypeClick = (businessType: string) => {
    setSelectedBusinessType(businessType);
  };

  return (
    <>
      <div className="w-full lg:w-[383px]   h-full overflow-y-auto">
        <div className="2xl:ml-[50px] ml-[0px]">
          <div className=" w-full h-[43px] px-[17px] bg-white rounded-3xl">
            <label
              htmlFor="searchQuery"
              className="text-PhilippineGray relative px-17px w-full h-full flex items-center">
              <FontAwesomeIcon
                className="cursor-pointer mr-[10px]  w-[25px] h-[25px]  text-sm"
                icon={faSearch}
                size="1x"
              />

              <input
                className="border-0 w-full text-[20px] bg-none outline-none"
                type="text"
                placeholder="Search employee size"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                id="searchQuery"
              />
            </label>
          </div>
        </div>
        <div className="h-[64px]  w-full bg-palatinatePurple mt-[43px]  flex items-center rounded-br-3xl">
          <Image
            src={BuildingIcon}
            alt="close"
            className="h-[39px] w-[41px] ml-[25px]"
          />
          <h5 className="text-[12px] lg:text-[20px] font-bold ml-[13px] text-cultured">
            Size
          </h5>
        </div>

        <div className="2xl:ml-[78px] ml-[20px] ">
          {filteredSizes.map((size, key) => (
            <FilterMenu
              key={key}
              text={size}
              onClick={() => handleSizeClick(size)}
            />
          ))}
        </div>

        <div className="h-[64px] w-full bg-palatinatePurple mt-[43px]  flex items-center rounded-br-3xl">
          <Image
            src={VanIcon}
            alt="close"
            className="h-[39px] w-[41px] ml-[25px]"
          />
          <h5 className="text-[20px] font-bold ml-[13px] text-cultured">
            BUSINESS TYPE
          </h5>
        </div>

        <div className="pt-[25px] pl-[20px] 2xl:pl-[45px]">
          <button
            onClick={() => {
              setShowPopup(true);
            }}
            className="text-[20px] font-bold  text-palatinatePurple ">
            + ADD BUSINESS TYPE
          </button>
        </div>
        <div className="mt-[44px]">
          <div className="2xl:ml-[50px] ml-[0px]">
            <div className=" w-full h-[43px] px-[17px] bg-white rounded-3xl">
              <label
                htmlFor="searchQuery"
                className="text-PhilippineGray relative px-17px w-full h-full flex items-center">
                <FontAwesomeIcon
                  className="cursor-pointer mr-[10px]  w-[25px] h-[25px]  text-sm"
                  icon={faSearch}
                  size="1x"
                />

                <input
                  className="border-0 w-full text-[20px] bg-none outline-none"
                  type="text"
                  placeholder="Search"
                  id="searchQuery"
                  onChange={(e) => handleSearchChange(e.target.value)}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="2xl:ml-[78px] pl-[20px] overflow-y-scroll ">
          {filteredBusinessTypes && filteredBusinessTypes.length > 0 ? (
            filteredBusinessTypes.map((type, key) => (
              <FilterMenu
                key={key}
                text={type.name}
                onClick={() => handleBusinessTypeClick(type.name)}
              />
            ))
          ) : (
            <FilterMenu text="No Business Type" />
          )}
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
  );
};

export default FilterCompanies;
