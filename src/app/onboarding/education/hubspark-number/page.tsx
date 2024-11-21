"use client";
import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

const HubSparkNumber: React.FC = () => {
  // You can retrieve or generate the free HubSpark number dynamically
  // through an API or other means. For this example, I'm using a dummy number.
  //const hubSparkNumber = '+1-234-567-8901';
  //const placeholderNumber = '(716) 281-5793';
  const hubSparkNumber = "(716) 281-5793";

  // Function to copy the placeholder number to the clipboard
  const copyToClipboard = useCallback(() => {
    navigator.clipboard
      .writeText(hubSparkNumber)
      .then(() => {
        alert("Number copied to clipboard!");
      })
      .catch((err) => console.error("Could not copy number: ", err));
  }, [hubSparkNumber]);

  // State to manage the checkbox status
  const [isMicrophoneAllowed, setIsMicrophoneAllowed] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [areaCode, setAreaCode] = useState("");
  const [voiceModalOpen, setVoiceModalOpen] = useState(false);
  const router = useRouter();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleAreaCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.length <= 3 && /^[0-9]*$/.test(value)) {
      setAreaCode(value);
    }
  };

  const handleCreateNumber = () => {
    closeModal();
  };

  const openVoiceModal = () => {
    setVoiceModalOpen(true);
  };

  const closeVoiceModal = () => {
    setVoiceModalOpen(false);
  };

  const requestMicrophoneAccess = async () => {
    // Here you'd normally handle the logic for requesting microphone access
    // router
    //   .push("/onboarding/education/schedule-call")
    //   .catch((error) => console.error("Navigation error:", error));
    try {
      await router.push("/onboarding/education/schedule-call");
      // Optionally, handle successful navigation here if needed
    } catch (error) {
      console.error("An error occurred during navigation:", error);
    }
  };

  return (
    <>
      <div>
        <h1>
          Finally, a business number to separate your work-life and
          personal-life.
        </h1>
        <p>
          Here&apos;s your free HubSpark number. Use it to send and receive
          calls and texts from your customers via HubSpark or with the (coming
          soon) HubSpark mobile app. Don&apos;t worry. You can change it in your
          Business Settings.
        </p>
      </div>
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        {/* Displaying the placeholder number with the copy svgs */}
        <div
          style={{ marginTop: "20px", display: "flex", alignItems: "center" }}>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "24px",
              marginRight: "10px",
            }}>
            {hubSparkNumber}
          </span>
          <span onClick={copyToClipboard} style={{ cursor: "pointer" }}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.5 16.5L19.5 4.5L18.75 3.75H9L8.25 4.5L8.25 7.5L5.25 7.5L4.5 8.25V20.25L5.25 21H15L15.75 20.25V17.25H18.75L19.5 16.5ZM15.75 15.75L15.75 8.25L15 7.5L9.75 7.5V5.25L18 5.25V15.75H15.75ZM6 9L14.25 9L14.25 19.5L6 19.5L6 9Z"
                  fill="#000000"></path>
              </g>
            </svg>
          </span>
        </div>
        {/* Svgs for Calls and Texting */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ marginLeft: "-35px" }}>
            <svg
              fill="#000000"
              height="24px"
              width="24px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(-45)">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>phone-volume</title>
                <path d="M19.373 11.831c-0.138-0.154-0.337-0.25-0.559-0.25-0.414 0-0.75 0.336-0.75 0.75 0 0.195 0.074 0.373 0.197 0.506l-0-0.001c0.819 0.92 1.32 2.139 1.32 3.476 0 1.602-0.719 3.035-1.852 3.996l-0.008 0.006c-0.136 0.136-0.22 0.324-0.22 0.531 0 0.415 0.336 0.751 0.751 0.751 0.207 0 0.395-0.084 0.531-0.22v0c1.396-1.251 2.27-3.060 2.27-5.072 0-1.717-0.636-3.285-1.685-4.481l0.007 0.008zM22.428 8.776c-0.138-0.152-0.336-0.247-0.557-0.247-0.414 0-0.75 0.336-0.75 0.75 0 0.194 0.073 0.37 0.194 0.503l-0.001-0.001c1.445 1.629 2.328 3.786 2.328 6.149 0 2.819-1.256 5.345-3.24 7.047l-0.012 0.010c-0.136 0.136-0.22 0.324-0.22 0.531 0 0.415 0.336 0.751 0.751 0.751 0.207 0 0.395-0.084 0.531-0.22v0c2.244-2.002 3.65-4.901 3.65-8.129 0-2.741-1.014-5.245-2.686-7.158l0.011 0.013zM25.273 5.524c-0.137-0.146-0.331-0.236-0.546-0.236-0.414 0-0.75 0.336-0.75 0.75 0 0.198 0.077 0.378 0.202 0.512l-0-0c2.215 2.36 3.575 5.544 3.575 9.046 0 3.986-1.763 7.561-4.551 9.986l-0.016 0.014c-0.136 0.136-0.22 0.324-0.22 0.531 0 0.415 0.336 0.751 0.751 0.751 0.207 0 0.395-0.084 0.531-0.22v0c10.635-10.637 1.121-21.030 1.023-21.134zM12.378 11.725c0 0 0 0 0 0 0.248 0 0.469-0.121 0.605-0.307l0.001-0.002 4.282-5.897c0.090-0.122 0.143-0.275 0.143-0.44 0-0.064-0.008-0.127-0.023-0.187l0.001 0.005c-0.141-0.532-0.367-0.997-0.664-1.407l0.008 0.012c-0.178-0.272-0.374-0.509-0.593-0.723l-0.001-0.001-0.004-0.004c-0.952-0.94-2.261-1.52-3.706-1.52-1.446 0-2.757 0.582-3.71 1.524l0-0c-3.379 3.386-5.468 8.060-5.468 13.222s2.089 9.836 5.469 13.222l-0-0c0.943 0.942 2.245 1.525 3.683 1.525 0.006 0 0.012 0 0.018-0h-0.001c0.003 0 0.007 0 0.010 0 1.445 0 2.754-0.581 3.706-1.522l-0.001 0c0.211-0.203 0.399-0.427 0.56-0.671l0.009-0.015c0.301-0.408 0.536-0.886 0.676-1.404l0.007-0.030c0.014-0.055 0.022-0.117 0.022-0.182 0-0.166-0.054-0.319-0.145-0.443l0.001 0.002-4.282-5.899c-0.138-0.188-0.358-0.309-0.606-0.309v0c-0.798 0.001-1.553 0.187-2.224 0.517l0.030-0.013c-0.599-1.412-0.948-3.055-0.948-4.779s0.348-3.367 0.979-4.862l-0.031 0.082c0.641 0.317 1.396 0.502 2.194 0.504h0.001zM9.652 9.428c-0.216 0.057-0.39 0.202-0.485 0.393l-0.002 0.004c-0.902 1.802-1.43 3.927-1.43 6.174s0.528 4.372 1.467 6.256l-0.037-0.081c0.097 0.195 0.271 0.34 0.481 0.397l0.005 0.001c0.055 0.014 0.118 0.022 0.183 0.022 0.162 0 0.313-0.050 0.438-0.135l-0.003 0.002c0.489-0.351 1.081-0.589 1.723-0.664l0.017-0.002 3.818 5.26c-0.108 0.249-0.232 0.464-0.377 0.662l0.007-0.009c-0.113 0.17-0.237 0.317-0.375 0.45l-0.001 0.001c-0.681 0.674-1.618 1.091-2.652 1.091s-1.969-0.416-2.65-1.089l0 0c-3.108-3.114-5.030-7.413-5.030-12.161s1.922-9.047 5.030-12.161l-0 0c0.673-0.671 1.601-1.086 2.626-1.086 0.005 0 0.010 0 0.014 0h-0.001c0.002 0 0.004 0 0.006 0 1.034 0 1.972 0.415 2.655 1.088l-0-0c0.15 0.146 0.284 0.308 0.399 0.483l0.007 0.011c0.129 0.177 0.244 0.378 0.335 0.592l0.008 0.020-3.818 5.259c-0.659-0.076-1.251-0.315-1.75-0.674l0.011 0.008c-0.12-0.085-0.268-0.136-0.429-0.136-0.067 0-0.132 0.009-0.194 0.025l0.005-0.001z"></path>
              </g>
            </svg>
          </span>
          <span style={{ marginLeft: "20px" }}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              height="24px"
              width="24px"
              xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M17 9C17 12.87 13.64 16 9.5 16L8.57001 17.12L8.02 17.78C7.55 18.34 6.65 18.22 6.34 17.55L5 14.6C3.18 13.32 2 11.29 2 9C2 5.13 5.36 2 9.5 2C12.52 2 15.13 3.67001 16.3 6.07001C16.75 6.96001 17 7.95 17 9Z"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  opacity="0.4"
                  d="M22.0003 12.8598C22.0003 15.1498 20.8203 17.1798 19.0003 18.4598L17.6603 21.4098C17.3503 22.0798 16.4503 22.2098 15.9803 21.6398L14.5003 19.8598C12.0803 19.8598 9.92031 18.7898 8.57031 17.1198L9.50031 15.9998C13.6403 15.9998 17.0003 12.8698 17.0003 8.99982C17.0003 7.94982 16.7503 6.95982 16.3003 6.06982C19.5703 6.81982 22.0003 9.5798 22.0003 12.8598Z"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  opacity="0.4"
                  d="M7 9H12"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
              </g>
            </svg>
          </span>
        </div>

        {/* Added text for enabling audio */}
        <p
          style={{
            marginTop: "30px",
            marginLeft: "-200px",
            fontWeight: "bold",
          }}>
          Enable audio for your web phone.
        </p>
        <p style={{ marginLeft: "-200px" }}>
          Your microphone is pretty important to make and take calls, so
          we&apos;ll need permission to use it.
        </p>
        {/* Microphone access checkbox and accompanying text */}
        <div
          style={{
            marginTop: "20px",
            marginLeft: "-200px",
            display: "flex",
            alignItems: "center",
          }}>
          <input
            type="checkbox"
            checked={isMicrophoneAllowed}
            onChange={() => setIsMicrophoneAllowed(!isMicrophoneAllowed)}
            style={{ cursor: "pointer" }}
          />
          {/* svgs for Microphone and need to make this toggle the checkbox upon clicking */}
          <span style={{ marginLeft: "10px", cursor: "pointer" }}>
            <svg
              height="24px"
              width="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 4.5C10.314 4.5 9 5.80455 9 7.35V12.15C9 13.6955 10.314 15 12 15C13.686 15 15 13.6955 15 12.15L15 7.35C15 5.80455 13.686 4.5 12 4.5ZM7.5 7.35C7.5 4.919 9.54387 3 12 3C14.4561 3 16.5 4.919 16.5 7.35L16.5 12.15C16.5 14.581 14.4561 16.5 12 16.5C9.54387 16.5 7.5 14.581 7.5 12.15V7.35ZM6.75 12.75C6.75 15.1443 9.0033 17.25 12 17.25C14.9967 17.25 17.25 15.1443 17.25 12.75H18.75C18.75 15.9176 16.0499 18.3847 12.75 18.7129V21H11.25V18.7129C7.95007 18.3847 5.25 15.9176 5.25 12.75H6.75Z"
                  fill="#000000"></path>
              </g>
            </svg>
          </span>
          {/* need to make this toggle the checkbox upon clicking */}
          <span style={{ cursor: "pointer" }}>Allow microphone access</span>
        </div>
      </div>
      {/* "Get local area code" and "Continue" buttons */}
      <div>
        <button onClick={openModal} style={{ cursor: "pointer" }}>
          Get local area code
        </button>
        <button
          onClick={openVoiceModal}
          style={{ marginTop: "20px", marginLeft: "10px", cursor: "pointer" }}>
          Continue
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <div
            style={{
              width: "400px",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              position: "relative",
            }}>
            <span
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                cursor: "pointer",
              }}>
              ✖
            </span>
            <h1>Get a local area code.</h1>
            <p>Want a new area code? Change it here.</p>
            <p style={{ fontWeight: "bold", marginBottom: "-5px" }}>
              What&apos;s The Best Area Code For Your Business?
            </p>

            {/* Area code input */}
            <input
              type="text"
              placeholder="Ex: 801"
              value={areaCode}
              onChange={handleAreaCodeChange}
              maxLength={3}
              style={{ width: "96%", marginTop: "10px" }}
            />

            <button
              onClick={handleCreateNumber}
              style={{
                padding: "10px 5px",
                marginTop: "20px",
                marginLeft: "220px",
              }}>
              Create new phone number
            </button>
          </div>
        </div>
      )}

      {/* Voice Modal */}
      {voiceModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <div
            style={{
              width: "400px",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              position: "relative",
            }}>
            <span
              onClick={closeVoiceModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                cursor: "pointer",
              }}>
              ✖
            </span>
            <p style={{ marginBottom: "5px", fontSize: "10px" }}>
              HUBSPARK VOICE
            </p>
            <h2 style={{ marginTop: "0px" }}>
              Big News: now you can make calls!
            </h2>
            <p style={{ marginTop: "-15px" }}>
              On top of texting, you can now call your contacts without ever
              leaving HubSpark. No phone required. Just enable audio settings to
              access your new web phone.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}>
              <button
                onClick={requestMicrophoneAccess}
                style={{ marginTop: "20px" }}>
                Allow microphone access
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HubSparkNumber;
