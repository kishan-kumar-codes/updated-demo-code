// ModalContainer.tsx
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

interface ModalContainerProps {
  children: React.ReactNode;
  onClose: () => void;
}

const ModalContainer: FC<ModalContainerProps> = ({ children, onClose }) => (
  <div className="fixed inset-0 bg-black m-auto bg-opacity-70 flex items-center justify-center z-50">
    <div className="bg-[#f4f4f4] rounded-xl h-[170px] lg:h-3/6 w-[300px] lg:w-[480px] max-w-md lg:max-w-xl relative border-2 border-blue-400">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-400 text-lg">
        <FontAwesomeIcon icon={faXmark} />
      </button>
      {children}
    </div>
  </div>
);

export default ModalContainer;
