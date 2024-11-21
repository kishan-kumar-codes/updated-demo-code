// DocumentSaveOptions.tsx
import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

interface DocumentSaveOptionsProps {
  documentType: string;
  toggleDropDown: boolean;
  onClick: (e: any) => void;
  onToggle: () => void;
}

const DocumentSaveOptions: FC<DocumentSaveOptionsProps> = ({
  documentType,
  toggleDropDown,
  onClick,
  onToggle,
}) => (
  <div className="flex flex-col px-3 w-full h-full">
    <p className="text-xs font-semibold text-gray-600 pb-0 lg:pb-4 mt-[30px] lg:text-[22px]">
      Save as
    </p>
    <div className="w-full py-2 lg:py-4 min-w-[100px] relative flex flex-col px-2 gap-1 rounded-xl outline-none bg-white">
      <span
        className="text-xs cursor-pointer lg:text-[22px] text-gray-700 font-thin"
        onClick={onClick}>
        {documentType}
      </span>
      <div className={`flex-col  gap-1 ${toggleDropDown ? "flex" : "hidden"}`}>
        {["JPEG", "PNG", "DOCX"].map((type) => (
          <span
            key={type}
            className="text-xs lg:text-sm cursor-pointer text-gray-700 font-thin"
            onClick={onClick}>
            {type}
          </span>
        ))}
      </div>
      <button className="absolute end-3 top-1 text-gray-700" onClick={onToggle}>
        <FontAwesomeIcon
          icon={faCaretDown}
          className="ml-2 text-sx text-gray-700"
        />
      </button>
    </div>
  </div>
);

export default DocumentSaveOptions;
