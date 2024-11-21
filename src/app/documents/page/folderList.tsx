import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen, faPlus } from "@fortawesome/free-solid-svg-icons";

interface FolderListProps {
  folders: string[];
  openModal: (type: "document" | "folder") => void;
}

const FolderList: FC<FolderListProps> = ({ folders, openModal }) => {
  return (
    <div className="w-full px-0 lg:px-10 max-w-md lg:max-w-full mt-4">
      <h2 className="text-gray-600 font-semibold lg:text-[22px] mb-5">
        Folders
      </h2>
      <div className="flex flex-wrap gap-2">
        {folders.map((folderName, index) => (
          <div key={index} className="text-center w-[130px] lg:w-[240px] h-fit">
            <div className="bg-[#e0e0e0] flex flex-col h-[100px] lg:h-[140px] items-center justify-center rounded-xl p-4 w-full">
              <FontAwesomeIcon
                icon={faFolderOpen}
                size="2x"
                className="text-palatinatePurple h-[50px] w-[50px]"
              />
            </div>
            <p className="text-gray-600 text-xs lg:text-[20px] font-bold mt-2">
              {folderName}
            </p>
          </div>
        ))}
        <div className="w-fit h-fit text-center">
          <div
            onClick={() => openModal("folder")}
            className="bg-[#e0e0e0] flex flex-col h-[100px] lg:h-[140px] w-[130px] lg:w-[240px] items-center justify-center rounded-xl p-4 cursor-pointer">
            <div className="bg-white p-2 h-[50px] w-[50px] flex items-center justify-center rounded-full">
              <FontAwesomeIcon
                icon={faPlus}
                size="2x"
                className="text-palatinatePurple"
              />
            </div>
          </div>
          <p className="text-gray-600 lg:text-[20px] font-bold text-xs mt-2">
            Create Custom Folder
          </p>
        </div>
      </div>
    </div>
  );
};

export default FolderList;
