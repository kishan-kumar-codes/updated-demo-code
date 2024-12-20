import Image from "next/image";
import CloseIcon from "../../../assets/images/close-icon.svg";
import FilterIcon from "../../../assets/images/filter-icon.svg";
import BuildingIcon from "../../../assets/images/building.svg";
import VanIcon from "../../../assets/images/van-icon.svg";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { X } from "lucide-react";

interface FilterMenuProps {
  text: string;
  onClick?: () => void;
  textColor?: boolean;
  onClear?: () => void;
}

const FilterMenu: React.FC<FilterMenuProps> = ({
  text,
  onClick,
  textColor,
  onClear,
}) => {
  return (
    <div className="flex justify-between items-center my-[12px] pr-2 md:pr-4">
      <h5
        onClick={onClick}
        className={` ${textColor ? "text-palatinatePurple" : "text-darkSilverColor"} text-[10px] font-bold  cursor-pointer hover:text-palatinatePurple md:text-[20px]`}>
        {text}
      </h5>
      {textColor && (
        <X
          className=" font-bold  cursor-pointer text-palatinatePurple w-[10px] h-[10px] md:h-[20px] md:w-[20px] "
          onClick={onClear}
        />
      )}
    </div>
  );
};

interface FilterCompaniesProps {
  selectedSize: string | null;
  selectedBusinessType: string | null;
  setShowFilterCard: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedSize: (size: string | null) => void;
  setSelectedBusinessType: (type: string | null) => void;
}

interface FilterData {
  name: string;
}

const FilterCompanies: React.FC<FilterCompaniesProps> = ({
  setSelectedSize,
  selectedBusinessType,
  selectedSize,
  setSelectedBusinessType,
  setShowFilterCard,
}) => {
  const { data: session, status } = useSession();

  const [token, setToken] = useState(session?.user?.accessToken);
  const [businessTypes, setBusinessTypes] = useState([]);
  const { toast } = useToast();
  const [filteredBusinessTypes, setFilteredBusinessTypes] = useState<
    FilterData[]
  >([]);
  const [formBusinessTypeData, setFormBusinessTypeData] = useState({
    token: session?.user?.accessToken,
    userId: "",
    businessType: "", // For input field
  });
  const [showPopup, setShowPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // useEffect(()=>{
  //   console.log("selectedBusinessType:",selectedBusinessType);
  //   console.log("selectedSize:",selectedSize);

  // },[selectedSize , selectedBusinessType])

  const employeeSizes = [
    "1 Employee",
    "2-9 Employee",
    "10-49 Employee",
    "50-249 Employee",
    "249 or more Employee",
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

  const clearSizeFilter = () => {
    setSelectedSize(null);
    setSearchQuery("");
  };

  const clearBusinessTypeFilter = () => {
    setSelectedBusinessType(null);
    handleSearchChange(""); // Reset business type search
  };

  return (
    <div className="absolute z-50 top-40 left-0 w-[220px] bg-[#F4F4F4] rounded-r-xl pb-2 border-palatinatePurple border-2 md:static md:w-full md:h-full md:flex md:flex-col md:border-none md:bg-[#FFF]">
      <div className="flex justify-between pl-[14px] pr-[22px] mt-[16px] w-full md:hidden ">
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
      <div className="lg:flex w-full justify-center ">
        <div className=" w-full h-8 hidden md:w-[80%] 2xl:w-[322px] lg:flex lg:h-[43px] px-[17px] border-2 border-[#F4F4F4] bg-white rounded-3xl">
          <label
            htmlFor="searchQuery"
            className="text-PhilippineGray relative px-17px w-full h-full flex items-center">
            <FontAwesomeIcon
              className="cursor-pointer mr-[10px] w-[20px]  lg:w-[25px] h-[20px]  lg:h-[25px]  text-sm"
              icon={faSearch}
              size="1x"
            />

            <input
              className=" w-full text-sm lg:text-[20px] bg-none outline-none"
              type="text"
              placeholder="Search Employee Size"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              id="searchQuery"
            />
          </label>
        </div>
      </div>

      <div className="h-[36.8px] w-full bg-palatinatePurple mt-[7px] mr-[10px] flex items-center justify-between lg:mt-10 md:h-[64px] md:rounded-br-3xl">
        <div className="flex items-center">
          <Image
            src={BuildingIcon}
            alt="close"
            className="h-[22px] w-[22px] ml-[14px] md:h-[41px] md:w-[39px]"
          />
          <h5 className="text-xs font-bold ml-[7px] text-cultured md:text-[20px]">
            Size
          </h5>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[180px] md:w-[80%] h-8 flex lg:hidden my-3 md:h-[43px] px-[17px] border-2 border-[#F4F4F4] bg-white rounded-3xl">
          <label
            htmlFor="searchQuery"
            className="text-PhilippineGray relative px-17px w-full h-full flex items-center">
            <FontAwesomeIcon
              className="cursor-pointer mr-[10px] w-[15px]  md:w-[25px] h-[15px]  md:h-[25px]  text-sm"
              icon={faSearch}
              size="1x"
            />

            <input
              className=" w-full text-[10px] md:text-[20px] bg-none outline-none"
              type="text"
              placeholder="Search Employee Size"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              id="searchQuery"
            />
          </label>
        </div>
      </div>
      <div className="ml-[44px] overflow-y-auto h-40 md:overflow-visible md:h-auto">
        {filteredSizes && filteredSizes.length > 0 ? (
          filteredSizes.map((size) => (
            <FilterMenu
              key={size}
              text={size}
              textColor={selectedSize === size}
              onClick={() => handleSizeClick(size)}
              onClear={clearSizeFilter}
            />
          ))
        ) : (
          <FilterMenu text="No Business Size" />
        )}
        {/* <button
          onClick={clearSizeFilter}
          className="text-darkSilverColor text-[10px] font-bold my-[12px] cursor-pointer hover:text-palatinatePurple md:text-[20px]">
          Clear
        </button> */}
      </div>

      <div className="h-[36.8px] w-full bg-palatinatePurple mt-[22px] mr-[10px] flex items-center justify-between md:mt-5 md:h-[64px] md:rounded-br-3xl">
        <div className="flex items-center">
          <Image
            src={VanIcon}
            alt="close"
            className="h-[22px] w-[22px] ml-[14px]  md:h-[41px] md:w-[39px]"
          />
          <h5 className="text-xs font-bold ml-[7px] text-cultured md:text-[20px]">
            Sector
          </h5>
        </div>
      </div>
      <div className="w-full">
        <div
          onClick={() => {
            setShowPopup(true);
          }}
          className="ml-[44px] text-[#5F1762] text-[10px] font-bold my-[12px] cursor-pointer hover:text-palatinatePurple md:text-[20px] ">
          + ADD BUSINESS TYPE
        </div>
        <div className="w-full flex justify-center">
          <div className="w-[180px] md:w-[80%]  2xl:w-[322px] h-8 md:h-[43px] px-[17px] border-2 border-[#F4F4F4] bg-white rounded-3xl">
            <label
              htmlFor="searchQuery"
              className="text-PhilippineGray relative px-17px w-full h-full flex items-center">
              <FontAwesomeIcon
                className="cursor-pointer mr-[10px] w-[15px]  md:w-[25px] h-[15px]  md:h-[25px]  text-sm"
                icon={faSearch}
                size="1x"
              />

              <input
                className=" w-full  text-[10px] md:text-[20px] bg-none outline-none"
                type="text"
                placeholder="Search Business Type"
                id="searchQuery"
                onChange={(e) => handleSearchChange(e.target.value)}
              />
            </label>
          </div>
        </div>
      </div>

      <div className="ml-[44px] overflow-y-auto h-60 md:h-96">
        {filteredBusinessTypes && filteredBusinessTypes.length > 0 ? (
          filteredBusinessTypes.map((type, key) => (
            <FilterMenu
              key={key}
              text={type.name}
              textColor={selectedBusinessType === type.name}
              onClick={() => handleBusinessTypeClick(type.name)}
              onClear={clearBusinessTypeFilter}
            />
          ))
        ) : (
          <FilterMenu text="No Business Type" />
        )}
        {/* <button
          onClick={clearBusinessTypeFilter}
          className="text-darkSilverColor text-[10px] font-bold my-[12px] cursor-pointer hover:text-palatinatePurple md:text-[20px]">
          Clear
        </button> */}
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
  );
};

export default FilterCompanies;
