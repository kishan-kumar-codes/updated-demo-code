"use client";

import { FC, useState } from "react";
import UploadDocumentModal from "../modal/modal";
import SearchBar from "./searchBar";
import FolderList from "./folderList";
import DocumentList from "./documentList";
import AddButton from "./addButton";
import Header from "./header";
import BottomBar from "./bottomBar";
import CitationNavbar from "@/components/review-dashboard-mobile/ReviewNavbar";

interface Document {
  id: number;
  name: string;
}

const DocumentUI: FC = () => {
  const [documents, setDocuments] = useState<Document[]>([
    { id: 1, name: "Invoice For Customer 1.pdf" },
    { id: 2, name: "Invoice For Customer 2.pdf" },
    { id: 3, name: "Proof Of Delivery 1.pdf" },
  ]);
  const [folders, setFolders] = useState<string[]>(["Default Folder"]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"document" | "folder" | null>(
    null
  );
  const [newFolderName, setNewFolderName] = useState("");

  const openModal = (type: "document" | "folder") => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
    setNewFolderName("");
  };

  const handleCreateFolder = () => {
    if (newFolderName.trim()) {
      setFolders([...folders, newFolderName]);
      closeModal();
    }
  };

  const filteredDocuments = documents.filter((doc) =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen relative px-5 bg-[#f5f5f5] flex flex-col gap-4 items-center">
      <div className="w-full fixed top-0 m-auto z-10">
        <CitationNavbar heading={"Documents"} />
        {/* <Header module={"Documents"} /> */}
      </div>
      <div className="w-full max-w-md lg:max-w-full flex flex-col lg:justify-end lg:items-end lg:w-full mt-[70px]">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <AddButton openModal={openModal} />
      </div>

      <FolderList folders={folders} openModal={openModal} />
      <DocumentList documents={filteredDocuments} setDocuments={setDocuments} />

      <UploadDocumentModal
        isOpen={isModalOpen}
        title={modalType === "document" ? "Add Document" : "Create Folder"}
        onClose={closeModal}
        onSaveFolderName={handleCreateFolder}
        newFolderName={newFolderName}
        setNewFolderName={setNewFolderName}
        folders={folders}
        documents={documents}
        setDocuments={setDocuments}
      />

      <BottomBar />
    </div>
  );
};

export default DocumentUI;
