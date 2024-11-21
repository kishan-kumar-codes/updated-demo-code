"use client";
import React, { useState } from "react";
import HeadBar from "./HeadBar";
import InputBarField from "./InputBarField";
import BusinessDetails from "./BusinessDetails";
import BusinessHours from "./BusinessHours";
import AboutBusiness from "./AboutBusiness";
import CitizanBuilderData from "./CitizanBuilderData";
import BuilderItemCard from "./BuilderItemCard";
import {
  BuilderDataSvg,
  BuilderFourSquareSvg,
  BuilderGpsSvg,
  BuilderNeustarSvg,
  BuilderYPSvg,
  FourSquareSvgs,
} from "@/svgs/seo-screens/svgs";
import { DisableLocationSvgs } from "@/svgs/citations-builder/svgs";
import BuilderFilterCard from "./BuilderFilterCard";
import { InfoTooltip } from "./Tooltip";
import CitationTable from "./ExistingCitationTable";
import AvailableitationTable from "./AvailableitationTable";
import BuilderModel from "./BuilderModel";

const Typography: React.CSSProperties = {
  fontSize: "20px",
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

/**
 * BuilderFiledCard component
 *
 * A comprehensive form and display component for managing citation data.
 * This component includes form fields, item cards, citation tables, and action buttons.
 * It also manages the display of modals and includes various sections for business information.
 *
 * @returns {JSX.Element} The rendered component
 */
const BuilderFiledCard: React.FC = (): JSX.Element => {
  // const [showModal, setShowModal] = useState(false);

  // const openModal = () => setShowModal(true);
  // const closeModal = () => setShowModal(false);

  return (
    <div className="flex flex-col items-center justify-center gap-2 w-full px-4 pt-4">
      {/* Header for the general settings */}
      {/* Client and Location Reference input fields */}
      <div className="w-full hidden md:flex">
        <span className=" md:text-[30px] text-[#6D6D6D] font-[700]">
          Citation Builder
        </span>
      </div>
      <HeadBar title="General Settings" />
      <div className="flex flex-col md:flex-row items-center rounded-3xl -mt-12 z-0 min-h-[160px] md:min-h-fit justify-start px-4 md:px-7 mx-auto w-full bg-[#E0E0E0] py-3">
        <div className="mt-9 flex flex-col md:flex-row md:gap-4 gap-2 w-full">
          <InputBarField
            label="Client"
            value="Jay Rathman"
            readonly={true}
            placeHolder="Show Client Name"
            textCenter="text-left"
          />
          <InputBarField
            label="Unique Location Reference: *"
            placeHolder="Show Client HubSpark Account Number"
            textCenter="text-left"
            readonly={true}
            value="123-456-789"
          />
        </div>
      </div>

      {/* Various sections related to business details */}
      <BusinessDetails />
      <BusinessHours />
      <AboutBusiness />
      <CitizanBuilderData />

      {/* Save, Cancel, and Delete buttons */}
    </div>
  );
};

export default BuilderFiledCard;
