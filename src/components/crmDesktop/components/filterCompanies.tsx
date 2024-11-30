import React, { useEffect, useState } from "react";
import Image from "next/image";
import CloseIcon from "../../../assets/images/close-icon.svg";
import FilterIcon from "../../../assets/images/filter-icon.svg";
import BuildingIcon from "../../../assets/images/building.svg";
import VanIcon from "../../../assets/images/van-icon.svg";
import { useSession } from "next-auth/react";

interface FilterMenuProps {
  text: string;
  onClick: () => void;
}

const FilterMenu: React.FC<FilterMenuProps> = ({ text, onClick }) => {
  return (
    <h5
      className="text-darkSilverColor text-[10px] font-bold my-[12px] cursor-pointer hover:text-palatinatePurple"
      onClick={onClick}>
      {text}
    </h5>
  );
};

interface FilterCompaniesProps {
  setShowFilterCard: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedSize: (size: string) => void;
  setSelectedBusinessType: (type: string) => void;
}

const FilterCompanies: React.FC<FilterCompaniesProps> = ({
  setShowFilterCard,
  setSelectedSize,
  setSelectedBusinessType,
}) => {
  const { data: session, status } = useSession();
  const [token, setToken] = useState(session?.user?.id);
  const [businessTypes, setBusinessTypes] = useState([]);
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

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  const handleBusinessTypeClick = (businessType: string) => {
    setSelectedBusinessType(businessType);
  };

  const getAllBusinessTypes = async () => {
    if (!session?.userId) {
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
      console.log("Business types fetched:", businessTypeData);
    } catch (error) {
      console.error("Error fetching business types:", error);
    }
  };

  useEffect(() => {
    if (session?.userId) {
      getAllBusinessTypes(); // Called only once when session.userId is available
    }
  }, [session?.userId]);

  return (
    <div className="absolute top-0 left-0 w-[220px] bg-chinesWhite rounded-r-xl border-palatinatePurple border-2">
      <div className="flex justify-between pl-[14px] pr-[22px] mt-[16px] w-full ">
        <div className="flex">
          <Image src={FilterIcon} alt="filter" className="h-3  w-4" />
          <h5 className="ml-[7px] text-xs text-darkSilverColor font-bold">
            Filters
          </h5>
        </div>
        <div>
          <Image
            src={CloseIcon}
            onClick={() => setShowFilterCard(false)}
            alt="close"
            className="h-3 w-3"
          />
        </div>
      </div>

      <div className="h-[36.8px] w-full bg-palatinatePurple mt-[22px] mr-[10px] flex items-center">
        <Image
          src={BuildingIcon}
          alt="close"
          className="h-[22px] w-[22px] ml-[14px]"
        />
        <h5 className="text-xs font-bold ml-[7px] text-cultured">Size</h5>
      </div>

      <div className="ml-[44px] overflow-y-auto h-40">
        {filteredSizes.map((size) => (
          <FilterMenu
            key={size}
            text={size}
            onClick={() => handleSizeClick(size)} // Pass selected size on click
          />
        ))}
      </div>

      <div className="h-[36.8px] w-full bg-palatinatePurple mt-[22px] mr-[10px] flex items-center">
        <Image
          src={VanIcon}
          alt="close"
          className="h-[22px] w-[22px] ml-[14px]"
        />
        <h5 className="text-xs font-bold ml-[7px] text-cultured">Sector</h5>
      </div>

      <div className="ml-[44px] overflow-y-auto h-60">
        {filteredBusinessTypes && filteredBusinessTypes.length > 0 ? (
          filteredBusinessTypes.map((type) => (
            <FilterMenu
              key={type.name}
              text={type.name}
              onClick={() => handleBusinessTypeClick(type.name)} // Pass selected business type on click
            />
          ))
        ) : (
          <FilterMenu text="No Business Type" onClick={() => {}} />
        )}
      </div>
    </div>
  );
};

export default FilterCompanies;
