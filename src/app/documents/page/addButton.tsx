import { FC } from "react";

interface AddButtonProps {
  openModal: (type: "document" | "folder") => void;
}

const AddButton: FC<AddButtonProps> = ({ openModal }) => {
  return (
    <div className="w-full px-0 lg:px-10">
      <div className="bg-[#e0e0e0] w-full rounded-xl mt-4 mx-0 flex justify-center p-4 lg:p-10">
        <button
          onClick={() => openModal("document")}
          className="bg-palatinatePurple text-white font-semibold py-2 lg:text-[22px] px-4 lg:px-8 lg:py-4 rounded-xl">
          Add Document
        </button>
      </div>
    </div>
  );
};

export default AddButton;
