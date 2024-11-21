"use client";
import Image from "next/image";
import React, { useState } from "react";
interface FileUploadProps {
  isInfo?: boolean;
}
const typography: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  lineHeight: "normal",
};

const ReviewWidgetFileUpload = ({ isInfo = false }: FileUploadProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const validateFile = (selectedFile: File): boolean => {
    const validTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!validTypes.includes(selectedFile.type)) {
      alert("Invalid file format. Please upload a JPG, PNG, or GIF image.");
      return false;
    }
    if (selectedFile.size > 2 * 1024 * 1024) {
      // 2MB size check
      alert("File size exceeds 2MB.");
      return false;
    }
    return true;
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    console.log(droppedFile);
    if (droppedFile && validateFile(droppedFile)) {
      setFile(droppedFile);
      setImagePreview(URL.createObjectURL(droppedFile));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files![0];
    if (selectedFile && validateFile(selectedFile)) {
      setFile(selectedFile);
      setImagePreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    // Prevent default to avoid triggering the input file click event
    e.preventDefault();
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="w-full flex flex-col rounded-2xl gap-1 p-2 bg-[#F4F4F4] ">
        <div className="flex w-full px-4 justify-between">
          <div
            className="flex text-[12px] font-bold md:text-xl  lg:text-[20px] md:font-normal"
            style={{ ...typography }}>
            Filename
          </div>
          <div className="flex  gap-5 px-2">
            <span
              className="text-[12px] font-bold md:text-xl  lg:text-[20px] md:font-normal"
              style={{ ...typography }}>
              Size
            </span>
            <span
              className="text-[12px] font-bold md:text-xl  lg:text-[20px] md:font-normal"
              style={{ ...typography }}>
              Status
            </span>
          </div>
        </div>
        <hr className="my-1 border-[#E0E0E0] bg-[#E0E0E0]" />

        <div
          className="flex justify-center w-full items-center h-full"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onTouchStart={handleTouchStart}>
          {!file && (
            <div className="flex justify-start w-1/2">
              <label
                className="cursor-pointer text-white px-2 md:px-4 text-[12px] font-bold md:text-xl whitespace-nowrap  lg:text-[20px] md:font-normal py-3 mt-4 md:mt-12 lg:mt-16 rounded-3xl bg-[#00FF00]"
                style={{ ...typography, color: "#27272D" }}>
                Add Files
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/jpeg, image/png, image/gif"
                />
              </label>
            </div>
          )}
          {imagePreview ? (
            <div
              className="rounded-xl flex justify-center items-end"
              style={{
                width: "300px",
                height: "100px",
                position: "relative",
              }}>
              <Image
                src={imagePreview}
                alt="Uploaded File"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          ) : (
            <div
              className="text-gray-600 flex justify-self-center text-[12px] font-bold tracking-tight md:text-lg  lg:text-[20px] md:font-normal pt-0 md:pt-3 pl-1 items-center w-full h-full"
              style={{ ...typography }}>
              Drag Files Here
            </div>
          )}
        </div>
      </div>
      {isInfo && (
        <div className="w-full flex px-2 py-1">
          <span
            className=" flex text-[10px] tracking-tight md:text-lg lg:text-[20px] md:font-normal"
            style={{ ...typography }}>
            jpg/png/gif format only. Max size 2MB. Image will be cropped to fit
            300px x 100px.
          </span>
        </div>
      )}
    </div>
  );
};

export default ReviewWidgetFileUpload;
