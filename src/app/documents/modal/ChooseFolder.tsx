// DocumentSaveOptions.tsx
import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCircleCheck,
  faDownload,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";

interface ChooseFolder {
  documentType: string;
  toggleDropDown: boolean;
  onClick: (e: any) => void;
  onToggle: () => void;
  documents: any;
}

const ChooseFolder: FC<ChooseFolder> = ({
  documentType,
  toggleDropDown,
  onClick,
  onToggle,
}) => (
  <div className="flex flex-col w-full  px-5 gap-2">
    <div className="w-full mt-2 lg:mt-8 text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="26"
        height="26"
        fill="#40f440"
        className="mx-auto">
        <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 368c-88.4 0-160-71.6-160-160S167.6 96 256 96s160 71.6 160 160-71.6 160-160 160zm92.7-217.4l-99.1 99.1c-4.7 4.7-12.3 4.7-17 0l-57.1-57.1c-4.7-4.7-4.7-12.3 0-17l17-17c4.7-4.7 12.3-4.7 17 0l40.6 40.6 82.1-82.1c4.7-4.7 12.3-4.7 17 0l17 17c4.7 4.7 4.7 12.3 0 17z" />
      </svg>

      <p className="font-semibold text-sm lg:text-[22px] pt-0 lg:pt-4 mb-2 lg:mb-4 text-gray-600">
        File successfully converted
      </p>
    </div>

    <div className="bg-gray-200 rounded-xl px-4 py-2 lg:py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <FontAwesomeIcon
          icon={faFilePdf}
          size="lg"
          className="text-palatinatePurple"
        />
        <span className="text-[#6D6D6D] text-sm lg:text-lg font-bold">
          Invoice For Customer 1.pdf
        </span>
      </div>
    </div>

    <div className="flex flex-col pt-0 lg:pt-4 gap-2">
      <h4 className="text-sm font-bold text-gray-600 lg:text-lg">
        Choose a folder
      </h4>
      <div className="w-full flex gap-3 items-center">
        <button className="flex items-center gap-1 text-gray-600 text-xs lg:text-lg">
          <div className="w-[10px] h-[10px] rounded-full bg-[#40f440] border border-gray-300"></div>
          <span className="lg:text-lg font-bold">Default Folder</span>
        </button>

        <button className="text-xs lg:text-lg font-bold text-gray-600 flex items-center gap-1">
          <span className="rounded-full h-[10px] w-[10px] flex items-center justify-center bg-gray-300">
            +
          </span>
          Create New Folder
        </button>
      </div>
    </div>
  </div>
);

export default ChooseFolder;
