"use client";
import React, { useState } from "react";
import HeadBar from "./HeadBar";
import BuilderItemCard from "./BuilderItemCard";
import {
  BuilderDataSvg,
  BuilderFourSquareSvg,
  BuilderGpsSvg,
  BuilderNeustarSvg,
  BuilderYPSvg,
} from "@/svgs/seo-screens/svgs";
import { DisableLocationSvgs } from "@/svgs/citations-builder/svgs";
import { InfoTooltip } from "./Tooltip";
import BuilderFilterCard from "./BuilderFilterCard";
import CitationTable from "./ExistingCitationTable";
import AvailableitationTable from "./AvailableitationTable";
import BuilderModel from "./BuilderModel";
import { InfoSvgs } from "@/svgs/seo-screens/svgs";
import { useRouter } from "next/navigation";

const Typography: React.CSSProperties = {
  fontSize: "20px",
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

const CitationFinal: React.FC = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  // const openModal = () => setShowModal(true);
  const openModal = async () => {
    try {
      await router.push("/onboarding/education/final");
      // Optionally, handle successful navigation here if needed
    } catch (error) {
      console.error("An error occurred during navigation:", error);
    }
  };
  const closeModal = () => setShowModal(false);
  return (
    <>
      <div className="w-full px-[5px]">
        {/* Display of item cards */}
        <div className="flex w-full  mt-10 flex-col items-center">
          <div className="hidden md:flex w-full">
            <HeadBar title="Item" />
          </div>
          <div className="flex rounded-3xl -mt-10  min-h-[160px] w-full relative justify-start bg-[#F4F4F4] md:bg-[#E0E0E0] py-3">
            <div className=" text-[#6D6D6D] rounded-full text-[20px] absolute left-5  text-md font-semibold">
              Item
            </div>
            <div className="mt-9 flex flex-col md:flex-row gap-6 w-full">
              <div className="grid grid-cols-1 w-full gap-2 px-2 md:grid-cols-2 lg:grid-cols-3 ">
                <BuilderItemCard
                  label={"Foursquare"}
                  id={"Foursquare"}
                  labelSvg={<BuilderFourSquareSvg />}
                  titleSvg={<DisableLocationSvgs />}
                  message={
                    "Foursquare, is a local search-and-discovery mobile app developed by Foursquare Labs Inc."
                  }
                  isLocation
                />
                <BuilderItemCard
                  label={"Data Axle"}
                  id={"Data Axle"}
                  labelSvg={<BuilderDataSvg />}
                  titleSvg={<DisableLocationSvgs />}
                  message={
                    "Data Axle, formerly Infogroup, is a provider of data, technology and marketing services for salespeople, marketers, and professionals."
                  }
                  isLocation
                />
                <BuilderItemCard
                  label={"Neustar"}
                  id={"Neustar"}
                  labelSvg={<BuilderNeustarSvg />}
                  titleSvg={<DisableLocationSvgs />}
                  message={""}
                  isLocation
                />
                <BuilderItemCard
                  label={"YP Network"}
                  id={"YP Network"}
                  labelSvg={<BuilderYPSvg />}
                  titleSvg={<DisableLocationSvgs />}
                  isLocation
                  message={""}
                />
                <BuilderItemCard
                  label={"GPS Network"}
                  id={"GPS Network"}
                  labelSvg={<BuilderGpsSvg />}
                  titleSvg={<DisableLocationSvgs />}
                  isLocation
                  message={""}
                />

                {/* Existing citations and filter cards */}
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full bg-[#F4F4F4] rounded-3xl mt-2 md:mt-9  md:bg-[#E0E0E0] flex-col">
          <div className="flex w-fit md:hidden md:w-full my-3 gap-1 items-center px-5">
            <span className="" style={{ ...Typography }}>
              Existing Citations (0)
              {/* <InfoSvgs /> */}
            </span>
            <div className="ml-2 -mt-5">
              <InfoTooltip />
            </div>
          </div>
          <div className="hidden md:flex w-full">
            <HeadBar title="Existing Citations (0)" />
          </div>
          <div className="flex rounded-3xl z-10 w-full relative justify-start">
            <div className="flex flex-col md:flex-row gap-6 w-full">
              <div className="grid grid-cols-1 gap-2 px-4 pt-0 md:pt-2 w-full md:grid-cols-3">
                <BuilderFilterCard />
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full md:w-full px-0 md:px-4 py-4 gap-2 flex-col">
            <CitationTable />
          </div>
        </div>
        <div className="flex w-full bg-[#F4F4F4] rounded-3xl mt-0 md:mt-9  md:bg-[#E0E0E0] flex-col">
          <div className="flex w-fit md:hidden md:w-full my-3 gap-1 items-center px-5">
            <span
              className="whitespace-nowrap text-lg"
              style={{ ...Typography }}>
              Available New Citations (141)
            </span>
            <div className="ml-2 -mt-5">
              <InfoTooltip />
            </div>
          </div>
          <div className="hidden md:flex w-full">
            <HeadBar title="  Available New Citations (141)" />
          </div>
          <div className="flex rounded-3xl z-10 w-full relative justify-start">
            <div className="flex flex-col md:flex-row gap-6 w-full">
              <div className="grid grid-cols-1 gap-2 px-4 pt-0 md:pt-2 w-full md:grid-cols-3">
                <BuilderFilterCard />
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full md:w-full py-4 gap-2  px-0 md:px-2 flex-col">
            <AvailableitationTable />
          </div>
        </div>

        <div className="flex justify-end gap-2 w-full py-1">
          <button
            className="bg-[#40F440] px-2 text-xs md:text-xl  font-[700] text-[#3D3D3D] p-2 rounded-2xl mt-5"
            onClick={openModal}>
            Confirm & Continue
          </button>
          <button className=" px-2 font-[700] text-xs md:text-xl border-2 border-[#631363] text-[#631363] p-2 rounded-2xl mt-5">
            Save For Later
          </button>
        </div>

        {showModal && <BuilderModel closeModal={closeModal} />}

        {/* Footer section */}
        <div className="flex md:hidden w-full mt-10 justify-center items-center bg-[#40F440] h-[55px] rounded-t-3xl"></div>
      </div>
    </>
  );
};

export default CitationFinal;
