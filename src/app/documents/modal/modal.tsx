// UploadDocumentModal.tsx
import { FC, useState } from "react";
import ModalContainer from "./modalContainer";
import CameraButton from "./CameraButton";
import DocumentSaveOptions from "./documentSaveOptions";
import CreateFolderInput from "./createFolderInput";
import ChooseFolder from "./ChooseFolder";

interface UploadDocumentModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  onSaveFolderName: () => void;
  newFolderName: string;
  setNewFolderName: (value: string) => void;
  documents: any;
}

const UploadDocumentModal: FC<UploadDocumentModalProps> = ({
  isOpen,
  title,
  onClose,
  onSaveFolderName,
  newFolderName,
  setNewFolderName,
  documents,
}) => {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [documentType, setDocumentType] = useState("PDF");
  const [step, setStep] = useState(1);
  const [toggleDropDown, setToggleDropDown] = useState(false);

  if (!isOpen) return null;

  const handleClick = (e: any) => {
    setDocumentType(e.target.textContent);
    setStep(3);
  };

  const handleCapture = (imageData: string) => {
    setCapturedImage(imageData);
    setStep(2);
  };

  const handleToggle = () => setToggleDropDown(!toggleDropDown);

  return (
    <ModalContainer onClose={onClose}>
      {title === "Add Document" && step === 1 ? (
        <CameraButton onCapture={handleCapture} />
      ) : title === "Add Document" && step === 2 ? (
        <DocumentSaveOptions
          documentType={documentType}
          toggleDropDown={toggleDropDown}
          onClick={handleClick}
          onToggle={handleToggle}
        />
      ) : title === "Add Document" && step === 3 ? (
        <ChooseFolder
          documentType={documentType}
          toggleDropDown={toggleDropDown}
          onClick={handleClick}
          onToggle={handleToggle}
          documents={documents}
        />
      ) : (
        <CreateFolderInput
          newFolderName={newFolderName}
          setNewFolderName={setNewFolderName}
          onSaveFolderName={onSaveFolderName}
          onClose={onClose}
        />
      )}
    </ModalContainer>
  );
};

export default UploadDocumentModal;
