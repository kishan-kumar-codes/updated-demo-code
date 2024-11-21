import { CrossReputationSvgs } from "@/svgs/Reputation-mobile/svgs";
import { CircleX } from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import InputBarField from "../citations-builder/InputBarField";
import Image, { StaticImageData } from "next/image";
import ReputationReplyTemplate from "./CreateReplyTemplate";
import { X } from "lucide-react";
import { Textarea } from "../ui/textarea";

const typography: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  lineHeight: "normal",
};

interface ModalProps {
  closeModal: () => void;
  img: StaticImageData;
  memoizedSvgRating: React.ReactElement;
  memoizedTitle: string;
  memoizedDes: string;
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
const ReputationReviwModel: React.FC<ModalProps> = ({
  closeModal,
  img,
  memoizedSvgRating,
  memoizedTitle,
  memoizedDes,
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

  const [showReply, setShowReply] = useState<boolean>(false);

  const closeReply = () => setShowReply(false);
  const showModals = () => setShowReply(true);
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
        className="bg-[#F4F4F4] w-[330px] md:w-[80%] lg:w-[60%] rounded-lg md:rounded-3xl"
        ref={modalRef}>
        <div className="flex justify-between p-2 py-0 md:py-4">
          <span
            className="text-xl md:text-2xl lg:text-[26px] pl-2 py-2"
            style={{ ...typography, fontWeight: 700 }}>
            Respond to Review
          </span>
          <button onClick={closeModal} className="text-3xl">
            <X color="#6D6D6D" />
          </button>
        </div>
        <div className="rounded-3xl gap-3 flex-col flex justify-center items-center">
          <div className="px-4 w-full ">
            <div className="flex w-full flex-col gap-1 bg-[#E0E0E0] px-4 py-2 md:py-4 rounded-2xl">
              <div className="flex w-full gap-2 items-center py-1 md:py-2 justify-center md:justify-start">
                <Image className="w-12 md:w-20" alt="Icons" src={img} />
                <div className="w-full flex">
                  {" "}
                  <div className="pl-2 w-[116px] md:w-40 lg:w-56 h-fit">
                    {" "}
                    {memoizedSvgRating}
                  </div>
                </div>
              </div>
              <div className="flex w-full items-end gap-4 ">
                <div className="font-family-Glacial_Indifference-Bold-Helvetica lg:text-xl md:text-sm text-[16px] w-full flex-shrink-0 font-semibold text-[#6D6D6D]">
                  {memoizedTitle}
                </div>
                {/* <div className="w-full hidden md:flex">{memoizedSvgRating}</div> */}
              </div>
              <div className="font-family-Glacial_Indifference-Bold-Helvetica flex items-end justify-start flex-wrap leading-4 md:leading-5 lg:leading-6 text-[10px] lg:text-xl w-full md:w-[90%]  text-xs md:text-base font-normal text-[#6D6D6D] ">
                <div>{memoizedDes}</div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col font-semibold px-4 ">
            <label
              className="text-sm md:text-xl lg:text-[22px] py-1 md:py-4 text-[#6D6D6D] justify-start flex"
              htmlFor="review">
              {" "}
              Respond to Cindy&apos;s Review
            </label>
            <button
              onClick={showModals}
              className="w-fit bg-[#40F440] mt-1 text-xs p-2 md:p-3 lg:text-[26px] text-[10px] md:text-xl rounded-lg">
              + Create Template
            </button>
            <Textarea
              className="rounded-xl my-2 md:my-3 text-[#6D6D6D] font-normal"
              rows={4}
              placeholder="Your reply here..."
            />
          </div>
          <div className="flex justify-end items-center gap-2 w-full my-2 px-5 ">
            <div className="flex py-2 gap-2">
              <span
                className="flex font-bold text-center py-2 text-xs  lg:text-[26px] md:text-xl px-4 bg-[#40F440] cursor-pointer rounded-md"
                style={{ ...typography, color: "#27272D", fontWeight: 700 }}>
                Submit
              </span>
              <span
                className="flex font-bold text-center py-2  lg:text-[26px] md:text-xl text-xs px-4 bg-[#BA0416] cursor-pointer rounded-md"
                style={{ ...typography, color: "#FFFFFF", fontWeight: 700 }}
                onClick={closeModal}>
                Cancel
              </span>
            </div>
          </div>
        </div>
      </div>
      {showReply && <ReputationReplyTemplate closeModal={closeReply} />}
    </div>
  );
};

export default ReputationReviwModel;
