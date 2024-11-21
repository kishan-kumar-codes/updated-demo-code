import {
  BizRateReputationSvgs,
  BotwReputationSvgs,
  BrownReputationSvgs,
  BuildZoomSvgs,
  CitySearchReputationSvgs,
  CylexReputationSvgs,
  DexReputationSvgs,
  LoadingReputationSvgs,
  SmallPluxReputationSvgs,
} from "@/svgs/Reputation-mobile/svgs";
import Widget1 from "@/assets/images/hubspark/Widget1 (1).png";
import Widget2 from "@/assets/images/hubspark/Widget1 (2).png";
import Widget4 from "@/assets/images/hubspark/Widget1 (4).png";
import Widget5 from "@/assets/images/hubspark/Widget1 (5).png";
import Widget7 from "@/assets/images/hubspark/Widget1 (7).png";
import Widget8 from "@/assets/images/hubspark/Widget1 (8).png";
import Widget9 from "@/assets/images/hubspark/Widget 9 (1).png";
import Widget10 from "@/assets/images/hubspark/Widget 9 (2).png";
import Image, { StaticImageData } from "next/image";
import { BBBSvgs } from "@/svgs/seo-screens/svgs";
import React, { useCallback, useState } from "react";
import { Plus } from "lucide-react";
import { Pencil } from "lucide-react";
import { Button } from "../ui/button";
import ReputationModel from "./ReputationModels";
import { Checkbox } from "../ui/checkbox";

const typography: React.CSSProperties = {
  color: "#FFF",
  fontFamily: "Arial",
  // fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

const listingTypography: React.CSSProperties = {
  ...typography,
  color: "#6D6D6D",
  fontSize: "10px",
};

interface ListingProps {
  source: string;
  DesktopSvg?: StaticImageData;
  index: number;
  description: string;
  isLoading?: boolean;
  openModal: (description: string, source: string) => void;
}

const Header = () => (
  <div
    className="w-full text-xs md:text-xl gap-1 md:gap-5 lg:text-2xl flex rounded-t-xl py-2 md:py-4 items-center text-white bg-[#631363]"
    style={typography}>
    <div className="min-w-[10%] text-center">
      <Checkbox
        id={""}
        className="border border-[#6D6D6D] rounded-sm"
        // checked={selectedItems.includes(item.id)}
        // onCheckedChange={(checked) => {
        //   handleSelect(item.id);
        // }}
      />
    </div>
    <div className="min-w-[30%] text-start">Source</div>
    <div className="min-w-[30%] text-start">Listings</div>
    <div className="min-w-[30%] text-center">Actions</div>
  </div>
);

const Listing = ({
  source,
  DesktopSvg,
  description,
  isLoading,
  openModal,
  index,
}: ListingProps) => (
  <div
    className="w-full flex md:even:bg-[#E0E0E0] gap-1 md:gap-5 even:bg-[#F4F4F4] py-2 items-center bg-[#FFF]"
    style={listingTypography}>
    <div className="min-w-[10%] text-center">
      <Checkbox
        id={""}
        className="border border-[#6D6D6D] rounded-sm"
        // checked={selectedItems.includes(item.id)}
        // onCheckedChange={(checked) => {
        //   handleSelect(item.id);
        // }}
      />
    </div>
    <div className="flex flex-shrink-0 leading-3 md:leading-tight lg:leading-[1.25rem] items-center text-[9px] md:text-lg lg:text-xl font-bold gap-2 min-w-[30%]">
      {/* <span>
        <SvgComponent />
      </span>{" "}
      <span className="bg-black">{DesktopSvgs && <DesktopSvgs />}</span>{" "} */}
      {DesktopSvg && (
        <Image
          src={DesktopSvg}
          className="w-7 md:w-10 object-contain bg-transparent h-fit"
          alt="Widget"
          width={100}
          height={100}
        />
      )}
      {source}
    </div>
    <div
      className={`min-w-[30%] py-0 md:py-1  font-normal leading-3 md:leading-tight lg:leading-[1.25rem] flex items-center text-[9px] md:text-lg lg:text-xl gap-1 justify-center md:justify-start ${description === "We could not find your business listing." ? "text-red-500" : "text-[#6D6D6D]"}`}>
      {description} {isLoading && <LoadingReputationSvgs />}
    </div>
    <div className="min-w-[30%] flex items-center justify-center">
      <div className="flex items-center py-2 justify-center gap-1 rounded-md cursor-pointer">
        <div className="flex items-center">
          <Button
            className={`px-2 gap-1 bg-[#E0E0E0] ${index % 2 === 0 ? "md:bg-[#FFFFFF] " : "md:bg-[#E0E0E0]"} font-bold text-[#6D6D6D] hover:bg-[#631363] hover:text-white  text-xs md:text-lg lg:text-xl h-fit py-1`}
            variant="outline"
            onClick={() =>
              openModal(
                description === "We could not find your business listing." ||
                  description === "Finding your business listing..."
                  ? ""
                  : description,
                source
              )
            }>
            {description === "We could not find your business listing." ||
            description === "Finding your business listing..." ? (
              <>
                <Plus size={16} />
                Add
              </>
            ) : (
              <>
                <Pencil size={16} />
                Edit
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  </div>
);

const ListingItem = () => {
  const listings = [
    {
      DesktopSvg: Widget1,
      source: "BBB.org",
      description:
        "American Renovation 4400 Pennydale Dr. Greensboro, NC, 27407-3071 (336) 587-5371",
    },
    {
      DesktopSvg: Widget5,
      source: "Bizrate Surveys",
      description: "We could not find your business listing.",
    },
    {
      DesktopSvg: Widget8,
      source: "Best of the Web",
      description: "We could not find your business listing.",
    },
    {
      DesktopSvg: Widget4,
      source: "Brown Book",
      description: "We could not find your business listing.",
    },
    {
      DesktopSvg: Widget10,
      source: "BuildZoom",
      description: "Finding your business listing...",
      isLoading: true,
    },
    {
      DesktopSvg: Widget9,
      source: "Citysearch",
      description: "We could not find your business listing.",
    },
    {
      DesktopSvg: Widget7,
      source: "Cylex",
      description: "Finding your business listing...",
      isLoading: true,
    },
    {
      DesktopSvg: Widget2,
      source: "DexKnows",
      description:
        "American Renovation 4400 Pennydale Dr. Greensboro, NC, 27407 (336) 587-5371",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [modalDescription, setModalDescription] = useState("");
  const [companyName, setCompanyName] = useState("");

  const openModal = (description: string, title: string) => {
    setModalDescription(description);
    setCompanyName(title);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex-col w-full px-2 rounded-lg flex h-full items-center">
      <Header />
      {listings.map((listing, index) => (
        <Listing key={index} index={index} {...listing} openModal={openModal} />
      ))}
      {showModal && (
        <ReputationModel
          closeModal={closeModal}
          companyName={companyName}
          description={modalDescription} // Passing the description to the modal
          setModalDescription={setModalDescription}
        />
      )}
    </div>
  );
};

export default ListingItem;
