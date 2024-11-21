"use client";
import { CircleX } from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import SelectReviewSites from "./SelectReviewSites";
import SetEmailNotifications from "./SetEmailNotifications";
import EmailSMSCampaigns from "./EmailSMSCampaign";
import ImportContacts from "./ImportContacts";
import SingleContact from "./SingleContact";
import { X } from "lucide-react";

interface ModalProps {
  closeModal: () => void;
}

const ReviewModel: React.FC<ModalProps> = ({
  closeModal,
}: ModalProps): JSX.Element => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [selectReview, setSelectReview] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [emailAndSMSCampaign, setEmailAndSMSCampaign] = useState(false);
  const [impContact, setImpContact] = useState(false);
  const [singleContact, setSingleContact] = useState(false);
  const [contactSelection, setContactSelection] = useState("");

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  console.log("asdmdbsad", impContact);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div
        className="bg-[#F4F4F4] w-[90%] md:w-[750px] lg:w-[950px] rounded-lg"
        ref={modalRef}>
        <div className="flex justify-end flex-col w-full p-2">
          {selectReview && (
            <SelectReviewSites
              setSelectReview={setSelectReview}
              onCloseModal={closeModal}
              setEmailNotifications={setEmailNotifications}
            />
          )}

          {emailNotifications && (
            <SetEmailNotifications
              setEmailAndSMSCampaign={setEmailAndSMSCampaign}
              setEmailNotifications={setEmailNotifications}
              onCloseModal={closeModal}
            />
          )}

          {emailAndSMSCampaign && (
            <EmailSMSCampaigns
              setContactSelection={setContactSelection}
              setEmailAndSMSCampaign={setEmailAndSMSCampaign}
              setImpContact={setImpContact}
              onCloseModal={closeModal}
              setSingleContact={setSingleContact}
            />
          )}
          {singleContact && (
            <SingleContact
              // setImpContact={setImpContact}
              contactSelection={contactSelection}
              onCloseModal={closeModal}
            />
          )}
          {impContact && (
            <ImportContacts
              setImpContact={setImpContact}
              onCloseModal={closeModal}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewModel;
