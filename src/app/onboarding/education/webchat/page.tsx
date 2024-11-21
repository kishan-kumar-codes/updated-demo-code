"use client";

import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import Layout from "../../layout";
import Image from "next/image";
import hubSparkLogo from "@/assets/images/HubSpark New Logo 5.png";
import overlayWebchat from "@/assets/images/overlay-webchat.png";
import ProgressBar from "../../layout/progressBar";
import { MyContext } from "@/utils/MyContext";
import { Checkbox } from "@/components/ui/checkbox";

const Webchat: React.FC = () => {
  const router = useRouter();
  const context = useContext(MyContext);
  //const initialWebsite = router.query.website as string || '';
  const initialWebsite = "https://digitalhp.com";

  // State to store the website name (excluding the "https://")
  const [websiteName, setWebsiteName] = useState(
    initialWebsite.replace("https://", "")
  );
  // State to store the previous website name
  const [previousWebsite, setPreviousWebsite] = useState("");
  // State to hold the website being previewed
  const [currentPreviewWebsite, setCurrentPreviewWebsite] =
    useState(websiteName);
  // State to control the preview window being displayed
  const [showPreview, setShowPreview] = useState(true);
  // State to control the display of the loading spinner
  const [isLoading, setIsLoading] = useState(true);
  // State to control modal visibility
  const [showModal, setShowModal] = useState(false);
  // State to hold the email input value
  const [email, setEmail] = useState("");
  // State to hold the list of emails
  const [emailList, setEmailList] = useState<string[]>([]);
  // State for the checkbox
  const [sendCopy, setSendCopy] = useState(true);

  const clearInput = () => {
    setWebsiteName("");
  };

  // Toggle the website preview
  const togglePreview = () => {
    if (websiteName !== previousWebsite) {
      setIsLoading(true);
      setShowPreview(true);
      setPreviousWebsite(websiteName);
      setCurrentPreviewWebsite(websiteName);
    }
  };

  // Function to be called when the iframe content has finished loading
  const handleLoad = () => {
    setIsLoading(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addEmail = () => {
    if (email) {
      setEmailList((prevEmails) => [...prevEmails, email]);
      setEmail(""); // Clear email input after adding to the list
    }
  };

  const sendEmail = async () => {
    if (context) {
      context.updateContextData({ emailList });
      context.updateContextData({ businessWebsite: currentPreviewWebsite });
    }
    // router
    //   .push("/onboarding/education/invite-users")
    //   .catch((error) => console.error("Navigation error:", error));
    try {
      await router.push("/onboarding/education/invite-users");
      // Optionally, handle successful navigation here if needed
    } catch (error) {
      console.error("An error occurred during navigation:", error);
    }
  };

  const handleSkip = async () => {
    // router
    //   .push("/onboarding/education/invite-users")
    //   .catch((error) => console.error("Navigation error:", error));
    try {
      await router.push("/onboarding/education/invite-users");
      // Optionally, handle successful navigation here if needed
    } catch (error) {
      console.error("An error occurred during navigation:", error);
    }
  };

  return (
    <Layout
      hHeading=""
      Childrens={
        <div className="flex items-center flex-col px-[43px] h-full overflow-y-auto overflow-x-hidden">
          <ProgressBar count={9} />

          <h1 className="text-[22px] lg:text-[45px] text-darkSilverColor font-bold mt-[22px] text-center">
            Make your website textable.
          </h1>
          {/* <p className="text-[14px] text-darkSilverColor font-bold mt-[21px] text-center">
            Preview your website with Webchat, a tool that lets customers easily
            send you a text via your website.
          </p> */}
          <div className="text-[14px] lg:text-[30px] text-darkSilverColor mt-4 text-center">
            <label>What&apos;s your business website?</label>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10px",
            }}>
            <span className="lg:text-[30px] font-bold text-[#6D6D6D]">
              https://
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: "#fff",
                borderRadius: "0.5rem",
                justifyContent: "center",
                marginRight: "6px",
              }}>
              <input
                type="text"
                value={websiteName}
                onChange={(e) => setWebsiteName(e.target.value)}
                className="w-[229px]   bg-white h-[33px] text-[12px] text-darkSilverColor pl-[18px]  rounded-lg lg:text-[30px]"
                style={{
                  border: "none",
                  outline: "none",
                }}
              />
              {websiteName && (
                <span
                  className="text-[#6D6D6D] text-[16px] lg:text-[30px]"
                  onClick={clearInput}
                  style={{
                    cursor: "pointer",
                    margin: "0 5px",
                  }}>
                  ×
                </span>
              )}
            </div>
          </div>
          <button
            onClick={togglePreview}
            className="text-[16px]  lg:text-[32px] font-bold text-white py-[10px] px-[16px] text-center mt-[14px] bg-palatinatePurple rounded-2xl lg:rounded-3xl"
            style={{ marginLeft: "15px", cursor: "pointer" }}>
            Preview my website
          </button>

          {/* Adding styles for the spin animation */}
          <style jsx global>{`
            @keyframes spin {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
          `}</style>

          {/* Conditionally render the website preview */}
          {showPreview && (
            <div style={{ marginTop: "20px", border: "1px solid #ccc" }}>
              {isLoading && (
                <div className="absolute top-[65%] lg:top-[82%]  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {/* Spinner, can customize this part */}
                  <div
                    className="w-[36px] h-[36px] lg:w-[100px] lg:h-[100px]"
                    style={{
                      border: "4px solid rgba(0, 0, 0, 0.1)",
                      borderRadius: "50%",
                      borderLeft: "4px solid #000",
                      animation: "spin 1s linear infinite",
                    }}></div>
                </div>
              )}
              <div className="relative">
                <iframe
                  className="w-[300px] h-[200px] md:w-[500px] md:h-[300px] lg:w-[904px] lg:h-[397px]"
                  src={`https://${currentPreviewWebsite}`}
                  // width="300px"
                  // height="300px"
                  style={{ border: "none" }}
                  title="Website Preview"
                  onLoad={handleLoad} // Call handleLoad function when the iframe content has finished loading
                />
                <Image
                  src={overlayWebchat}
                  className="absolute right-7 bottom-5"
                  alt="overlay webchat"
                />
              </div>
            </div>
          )}

          <div
            className="w-full justify-center mb-4 text-center"
            style={{ marginTop: "30px", display: "flex" }}>
            <button
              className="text-[16px] font-bold lg:text-[30px] text-white py-[10px] px-[20px] text-center mt-[10px] bg-palatinatePurple rounded-2xl lg:rounded-3xl"
              onClick={handleSkip}
              style={{ cursor: "pointer" }}>
              Skip
            </button>
            <button
              className="text-[16px] font-bold text-white px-2 lg:px-4 lg:text-[30px] py-[10px]  text-center mt-[10px] bg-palatinatePurple rounded-2xl lg:rounded-3xl"
              onClick={openModal}
              style={{ marginLeft: "10px", cursor: "pointer" }}>
              Email setup instructions
            </button>
          </div>

          {/* Modal */}
          {showModal && (
            <div
              className="px-[14px] "
              style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.7)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <div
                className="bg-cultured w-full lg:w-[40%] flex flex-col justify-center items-center lg:rounded-2xl"
                style={{
                  position: "relative", // to contain the absolute positioned close button
                  padding: "20px",
                  borderRadius: "5px",
                  boxShadow: "0px 0px 15px rgba(0,0,0,0.5)",
                }}>
                <span
                  onClick={closeModal}
                  className="md:text-[30px]"
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    cursor: "pointer",
                  }}>
                  ✖
                </span>

                <h3 className="text-[14px] lg:text-[36px] text-darkSilverColor font-bold">
                  Send Webchat installation instructions.
                </h3>
                <p className="text-[14px] lg:text-[30px] pt-2 lg:leading-8 px-2 text-darkSilverColor mt-[11px] text-center">
                  Enter the email address of your website admin along with
                  anyone else who will need the instructions. We&apos;ll send
                  over an email explaining how to add Webchat to your website.
                </p>
                <label
                  className="text-[12px] lg:text-[25px] text-darkSilverColor font-bold mt-[24px] w-full"
                  style={{
                    fontWeight: "bold",
                    display: "block",
                  }}>
                  Email Address
                </label>
                <div
                  className="w-full justify-center mt-2"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}>
                  <input
                    className=" bg-white h-[33px] text-[12px] text-darkSilverColor pl-[18px] py-[10px] lg:py-7 rounded-xl lg:rounded-3xl lg:text-[26px] w-[80%]"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@hello.com"
                    style={{ flex: 1, marginRight: "10px" }}
                  />
                  <button
                    className="text-[16px] rounded-xl lg:rounded-3xl font-bold lg:text-[36px] text-white py-[7px] px-[14px] text-center  bg-palatinatePurple w-[20%]"
                    onClick={addEmail}
                    style={{ marginRight: "10px", fontWeight: "bold" }}>
                    Add
                  </button>
                </div>

                <div
                  className="text-[12px] text-darkSilverColor w-full mt-2"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}>
                  <Checkbox
                    checked={sendCopy}
                    className="border border-slate-600 rounded-sm"
                    onCheckedChange={(checked) => setSendCopy(checked === true)}
                    style={{ marginRight: "10px" }}
                  />
                  <label className=" text-xs  lg:text-[26px]">
                    {" "}
                    Send a copy to yourself
                  </label>
                </div>

                <div className="text-[14px] font-bold lg:pt-16 lg:text-[36px] lg:leading-8 px-2 text-darkSilverColor mt-[11px] text-center">
                  If you would like us to do this for you, free of charge, just
                  click the DFY button
                </div>
                <ul
                  className="lg:text-[26px]"
                  style={{ marginTop: "20px", listStyleType: "none" }}>
                  {emailList.map((e, idx) => (
                    <li key={idx}>{e}</li>
                  ))}
                </ul>
                <div className="flex justify-end w-full">
                  <button
                    className="bg-limeGreen px-3 py-1 font-bold rounded-xl md:text-[36px] md:px-7"
                    onClick={sendEmail}>
                    DFY
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="my-[14px] lg:hidden">
            <Image src={hubSparkLogo} alt="Hub Spark Logo" />
          </div>
        </div>
      }
    />
  );
};

export default Webchat;
