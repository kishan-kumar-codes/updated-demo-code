// CreateFolderInput.tsx
import { FC } from "react";

interface CreateFolderInputProps {
  newFolderName: string;
  setNewFolderName: (value: string) => void;
  onSaveFolderName: () => void;
  onClose: () => void;
}

const CreateFolderInput: FC<CreateFolderInputProps> = ({
  newFolderName,
  setNewFolderName,
  onSaveFolderName,
  onClose,
}) => (
  <div className="flex flex-col px-3 h-full justify-between lg:justify-normal gap-0 lg:gap-10 py-2 lg:px-4 lg:py-8">
    <h3 className="text-xl text-gray-600 font-semibold lg:text-[40px]">
      Create Folder
    </h3>

    <div className="flex flex-col gap-0 lg:gap-4">
      <p className="text-sm font-semibold text-gray-600 lg:text-[22px]">
        Folder name
      </p>
      <input
        type="text"
        placeholder="Enter folder name"
        className="w-full py-2 lg:py-4 outline-none pl-2 text-sm rounded-xl"
        value={newFolderName}
        onChange={(e) => setNewFolderName(e.target.value)}
      />
    </div>

    <div className="flex w-full justify-end gap-3 mb-2 lg:mb-0">
      <button
        onClick={onSaveFolderName}
        className="bg-[#40f440] h-[30px] lg:h-[50px] lg:text-[22px] font-bold py-1 lg:py-2.5 px-3 rounded-md">
        Save
      </button>
      <button
        onClick={onClose}
        className="bg-[#ba0416] text-white lg:h-[50px] lg:text-[22px] py-1 font-bold lg:py-2.5 px-3 h-[30px] rounded-md">
        Cancel
      </button>
    </div>
  </div>
);

export default CreateFolderInput;
