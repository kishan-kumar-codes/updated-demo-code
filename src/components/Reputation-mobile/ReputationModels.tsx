import { CrossReputationSvgs } from "@/svgs/Reputation-mobile/svgs";
import { CircleX } from "lucide-react";
import React, { useCallback, useEffect, useRef } from "react";
import InputBarField from "../citations-builder/InputBarField";
import { ChangeEvent } from "react";
import { X } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const typography: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
};

interface ModalProps {
  closeModal: () => void;
  companyName?: string;
  description?: string;
  setModalDescription?: (state: string) => void;
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
const ReputationModel: React.FC<ModalProps> = ({
  closeModal,
  description,
  companyName,
  setModalDescription,
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

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setModalDescription && setModalDescription(e.target.value);
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
        className="bg-[#F4F4F4] w-[350px] md:w-[670px] py-0 md:py-4 rounded-lg"
        ref={modalRef}>
        <div className="flex justify-between p-2 md:p-4">
          <div
            className="text-xl md:text-2xl lg:text-3xl"
            style={{ ...typography, fontWeight: 700 }}>
            Edit URL - {companyName}
          </div>
          <button onClick={closeModal} className="text-3xl">
            <X color="#6D6D6D" />
          </button>
        </div>
        <div className="rounded-3xl gap-3 flex-col flex justify-center items-center">
          <div
            className="text-center p-3 font-normal text-xs md:text-lg lg:text-xl leading-3 md:leading-5 lg:leading-6"
            style={{ ...typography }}>
            You can edit a URL below to update it or you can exclude it, if you
            don&apos;t want this business listing to be used.
          </div>

          <div className="w-full flex flex-col px-3">
            <Label className="text-xs md:text-base lg:text-xl gap-2 justify-start text-[#6D6D6D] font-semibold my-1 ml-2 flex">
              URL:*
            </Label>
            <Input
              className="rounded-xl text-xs md:text-base lg::text-[20px] gap-2 justify-start text-[#6D6D6D] font-normal italic my-1 ml-2 md:py-6 flex"
              onChange={handleChangeValue}
              value={description}
            />
          </div>
          <div className="flex justify-between items-center gap-2 w-full my-2 px-5 ">
            <div className="flex gap-2">
              <span
                className="flex text-center py-2 md:py-3 px-3 md:px-4  text-xs md:text-lg lg:text-xl bg-[#40F440] cursor-pointer rounded-md"
                style={{ ...typography, color: "#27272D", fontWeight: 700 }}>
                Update
              </span>
              <span
                className="flex text-center py-2 md:py-3 px-3 md:px-4  text-xs md:text-lg lg:text-xl bg-[#BA0416] cursor-pointer rounded-md"
                style={{ ...typography, color: "#FFFFFF", fontWeight: 700 }}
                onClick={closeModal}>
                Cancel
              </span>
            </div>
            <div className="flex gap-2">
              <span
                className="flex text-center py-2 md:py-3 px-3 md:px-4 text-xs md:text-lg lg:text-xl bg-[#631363] cursor-pointer rounded-md"
                style={{ ...typography, color: "#FFFFFF", fontWeight: 700 }}>
                Exclude
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReputationModel;
