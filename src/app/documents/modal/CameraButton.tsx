// CameraButton.tsx
import { FC, useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

interface CameraButtonProps {
  onCapture: (imageData: string) => void;
}

const CameraButton: FC<CameraButtonProps> = ({ onCapture }) => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const openCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      setStream(mediaStream);
      setIsCameraOpen(true);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Could not access camera. Please check permissions.");
    }
  };

  const captureImage = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const context = canvas.getContext("2d");

      if (context) {
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const imageData = canvas.toDataURL("image/png");
        onCapture(imageData); // Pass captured image data back to parent component
        closeCamera();
      }
    }
  };

  const closeCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
    setIsCameraOpen(false);
  };

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [stream]);

  return (
    <div className="flex flex-col w-full h-full justify-center items-center gap-4">
      {isCameraOpen ? (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
          <video
            ref={videoRef}
            autoPlay
            className="w-full h-full object-cover"
          />
          <button
            onClick={captureImage}
            className="absolute bottom-20 bg-green-500 text-white px-4 py-2 rounded-xl">
            Capture
          </button>
          <button
            onClick={closeCamera}
            className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-xl">
            Close
          </button>
        </div>
      ) : (
        <button
          onClick={openCamera}
          className="bg-palatinatePurple text-white px-4 py-2 rounded-xl gap-2 flex items-center justify-center">
          <FontAwesomeIcon icon={faCamera} />
          <p className="text-gray-100 font-semibold lg:text-[22px]">
            Take Photo
          </p>
        </button>
      )}
    </div>
  );
};

export default CameraButton;
