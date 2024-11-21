import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePdf,
  faDownload,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

interface Document {
  id: number;
  name: string;
}

interface DocumentListProps {
  documents: Document[];
  setDocuments: (docs: Document[]) => void;
}

const DocumentList: FC<DocumentListProps> = ({ documents, setDocuments }) => {
  const handleDelete = (id: number) => {
    setDocuments(documents.filter((doc) => doc.id !== id));
  };

  return (
    <div className="w-full max-w-md pt-0 lg:pt-10 lg:max-w-full px-0 lg:px-10 mb-[100px]">
      <h2 className="text-gray-600 font-semibold lg:text-[22px] mb-2">
        Recent Files
      </h2>
      <div className="flex flex-col gap-2">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="bg-[#e0e0e0] rounded-xl px-4 py-2 lg:py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faFilePdf}
                size="lg"
                className="text-palatinatePurple"
              />
              <span className="text-gray-700 text-sm lg:text-xl font-bold">
                {doc.name}
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => alert(`Downloading ${doc.name}`)}
                className="py-2 px-3 bg-[#F4F4F4] rounded-lg">
                <FontAwesomeIcon
                  icon={faDownload}
                  size="sm"
                  className="text-gray-600"
                />
              </button>
              <button
                onClick={() => handleDelete(doc.id)}
                className="py-2 px-3 bg-[#F4F4F4] rounded-lg">
                <FontAwesomeIcon
                  icon={faTrash}
                  size="sm"
                  className="text-gray-600"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentList;
