import {
  AdCreativeState,
  addAdCreative,
} from "@/lib/features/FacebookAds/AdCreativeSlice";
// import { useAppDispatch } from "@/lib/hooks";
import { useAppDispatch } from "@/hooks/hooks";
import { useRef, useState } from "react";
interface Option {
  value: string;
  label: string;
}
export function useAdCreativeHooks() {
  const dispatch = useAppDispatch();
  const fileInputRef = useRef<HTMLInputElement | null>(null); // Reference for file input
  const [imageData, setImageData] = useState<string | null>(null); // Store image data URL
  const [fileName, setFileName] = useState<string | null>(null); // Store file name
  const [adCreativeData, setAdCreativeData] = useState({
    adCreativeName: "",
    adCreativePrimaryText: "",
    adCreativeHeadline: "",
    adCreativebody: "",
    adCreativeObjectUrl: "",
  });

  const [adCreativeStatus, setAdCreativeStatus] = useState<Option | null>(null);
  const [asCreativeSubmit, setAdCreativeSubmit] = useState(false);
  const status = [
    { value: "option1", label: "Active" },
    { value: "option2", label: "Archived" },
    { value: "option3", label: "Deleted" },
    { value: "option4", label: "Paused" },
  ];

  const adCreative: AdCreativeState = {
    adCreativeName: adCreativeData.adCreativeName
      ? adCreativeData.adCreativeName
      : "",
    adCreativePrimaryText: adCreativeData.adCreativePrimaryText
      ? adCreativeData.adCreativePrimaryText
      : "",
    adCreativeHeadline: adCreativeData.adCreativeHeadline
      ? adCreativeData.adCreativeHeadline
      : "",
    adCreativebody: adCreativeData.adCreativebody
      ? adCreativeData.adCreativebody
      : "",
    adCreativeObjectUrl: adCreativeData.adCreativeObjectUrl
      ? adCreativeData.adCreativeObjectUrl
      : "",
    adCreativeImage: fileName ? fileName : "",
    adCreativeStatus: adCreativeStatus ? adCreativeStatus.label : "",
  };

  const handlePreview = () => {
    dispatch(addAdCreative(adCreative));
    setAdCreativeSubmit(true);
    setAdCreativeData({
      adCreativeName: "",
      adCreativePrimaryText: "",
      adCreativeHeadline: "",
      adCreativebody: "",
      adCreativeObjectUrl: "",
    });
    setImageData(null);
    setTimeout(() => {
      setAdCreativeSubmit(false);
    });
  };
  console.log("AdCreative:", adCreative);
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name); // Set file name
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageData(reader.result as string); // Store image data for display
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click(); // Trigger file input click
  };

  return {
    fileInputRef,
    triggerFileUpload,
    handleImageUpload,
    handlePreview,
    imageData,
    fileName,
    adCreativeData,
    adCreativeStatus,
    status,
    asCreativeSubmit,
    setAdCreativeData, setAdCreativeStatus
  };
}
