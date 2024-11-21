import { CrossReputationSvgs } from "@/svgs/Reputation-mobile/svgs";
import { CircleX } from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import InputBarField from "../citations-builder/InputBarField";
import Image, { StaticImageData } from "next/image";
import ListDropDown from "../citations-builder/ListDropDown";
import { X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const typography: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  lineHeight: "normal",
};

interface ModalProps {
  closeModal: () => void;
  // img: StaticImageData;
  // memoizedSvgRating: React.ReactElement;
  // memoizedTitle: string;
  // memoizedDes: string;
}

/**
 * Model Component
 *
 * This component represents a modal dialog with options to take a photo with the camera,
 * select a photo from the gallery, or cancel.
 *
 * @param {ModalProps} props - The props for the component.
 * @param {() => void} props.closeModal - Function to close the modal.
 * @returns {JSX.Element} The rendered Model component.
 */
const ReputationReplyTemplate: React.FC<ModalProps> = ({
  closeModal,
  // img,
  // memoizedSvgRating,
  // memoizedTitle,
  // memoizedDes,
}: ModalProps): JSX.Element => {
  const modalRef = useRef<HTMLDivElement>(null);

  /**
   * Handles click events outside the modal to close it.
   *
   * @param {MouseEvent} event - The mouse event.
   */
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (event.target !== modalRef.current) {
        closeModal();
      }
    },
    [closeModal]
  );

  const members = [
    { value: "option1", label: "option1" },
    { value: "option2", label: "option2" },
    { value: "option3", label: "option3" },
    { value: "option4", label: "option4" },
    { value: "option5", label: "option5" },
    { value: "option6", label: "option6" },
  ];

  const handleSelect = (option: { label: string; value: string }) => {
    console.log("Selected option:", option);
  };

  // Add event listener to handle clicks outside the modal
  //   useEffect(() => {
  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, [handleClickOutside]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal content */}
      <div
        className="bg-[#F4F4F4] py-2 w-[330px] md:w-[80%] lg:w-[60%] rounded-2xl"
        ref={modalRef}>
        <div className="flex justify-between p-2">
          <span
            className="text-xl md:text-2xl lg:text-[26px] pl-2 py-2 md:py-6"
            style={{ ...typography, fontWeight: 700 }}>
            Create Reply Template
          </span>
          <button onClick={closeModal} className="text-3xl">
            <X size="18" color="#6D6D6D" />
          </button>
        </div>
        <div className="rounded-3xl gap-3 flex-col flex justify-center items-center">
          <div className="px-4 flex gap-2 flex-col w-full ">
            <div className="flex w-full md:gap-3 md:text-2xl lg:text-[26px] text-xs text-[#6D6D6D] rounded-2xl px-2 font-semibold gap-2 bg-white items-center py-1 md:py-2">
              Tags :{" "}
              <span className="font-semibold  text-[#631363]">
                Add First Name
              </span>{" "}
              <span className="font-semibold text-[#631363]">
                Add Business Name
              </span>
            </div>
            <div className="flex w-full text-xs md:text-lg leading-[14px] md:leading-5 lg:leading-6 lg:text-xl text-[#6D6D6D] rounded-2xl px-2 font-normal gap-2 bg-white items-center py-1 md:py-2">
              <span className="w-full md:w-[70%] lg:leading-5 py-2 px-1 md:px-3">
                {" "}
                Thank you First Name, for your support and for being a valued
                customer. We can’t wait to welcome you back soon!
              </span>
            </div>
          </div>

          <div className="w-full flex flex-col font-semibold px-3">
            <InputBarField label="Name Template" textCenter="left" />
            <div className="pt-2">
              <InputBarField label="Link to Client " textCenter="left" />
            </div>
            {/* <InputBarField label="Link to Rating" textCenter="left" />
          
             */}
            <label
              className="text-xs md:text-lg lg:text-xl gap-2 justify-start text-[#6D6D6D] font-semibold pt-2 my-1 ml-2 flex"
              htmlFor="select">
              {" "}
              Link to Rating
            </label>
            <div className="relative flex flex-col w-full">
              <Select>
                <SelectTrigger
                  id="select"
                  className="bg-white rounded-xl text-black">
                  <SelectValue
                    className="font-bold text-black"
                    placeholder={1}
                  />
                </SelectTrigger>
                <SelectContent className="bg-white font-bold text-black">
                  <SelectGroup>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            {/* <ListDropDown options={members} onSelect={handleSelect} /> */}
          </div>
          <div className="flex justify-end items-end gap-2 w-full py-4 px-5 ">
            <div className="flex gap-2">
              <span
                className="flex text-center py-2 text-xs  lg:text-[26px] md:text-xl px-4 bg-[#40F440] cursor-pointer rounded-md"
                style={{ ...typography, color: "#27272D", fontWeight: 700 }}>
                Submit
              </span>
              <span
                className="flex text-center py-2  text-xs lg:text-[26px] md:text-xl px-4 bg-[#BA0416] cursor-pointer rounded-md"
                style={{ ...typography, color: "#FFFFFF", fontWeight: 700 }}
                onClick={closeModal}>
                Cancel
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReputationReplyTemplate;
