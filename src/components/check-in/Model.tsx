import { CircleX } from "lucide-react";
import React, { useCallback, useEffect, useRef } from "react";

interface ModalProps {
  closeModal: () => void;
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
const Model: React.FC<ModalProps> = ({ closeModal }: ModalProps): JSX.Element => {
  const modalRef = useRef<HTMLDivElement>(null);

  /**
   * Handles click events outside the modal to close it.
   * 
   * @param {MouseEvent} event - The mouse event.
   */
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (event.target !== modalRef.current) {
      closeModal();
    }
  }, [closeModal]);

  // Add event listener to handle clicks outside the modal
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal content */}
      <div className="bg-white w-[330px] h-[220px] rounded-lg" ref={modalRef}>
        <div className="flex justify-end p-2">
          <button onClick={closeModal} className="text-3xl">
            <CircleX />
          </button>
        </div>
        <div className="rounded-3xl gap-3 flex-col flex justify-center items-center">
          <button
            onClick={closeModal}
            className="px-5 py-3 rounded-3xl text-white font-bold bg-[#631363]"
          >
            Take With Camera
          </button>
          <button
            onClick={closeModal}
            className="px-5 py-3 rounded-3xl text-white font-bold bg-[#631363]"
          >
            Select From Gallery
          </button>
          <button
            className="px-5 py-3 rounded-3xl text-white font-bold bg-red-500"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Model;
