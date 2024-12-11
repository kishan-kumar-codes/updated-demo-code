"use client";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import MobileNumberInput from "../../../../components/onboarding/MobileNumberInput";
import Layout from "../../layout";
// import ProgressBar from "@/pages/onboarding/layout/progressBar";
import ProgressBar from "../../layout/progressBar";
import { MyContext } from "../../../../utils/MyContext";
import { useClientMediaQuery } from "../../../../utils/srchooksuseClientMediaQuery";
import DesktopOnboardingPhoneNumber from "../../../onboardingDesktop/trials/input-phone-number/page";
import Image from "next/image";
import hubSparkLogo from "@/assets/images/HubSpark New Logo 5.png";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Phone = () => {
  const context = useContext(MyContext);
  // const { contextData, updateContextData } = context;
  const [mobileNumber, setMobileNumber] = React.useState("");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleMobileNumberChange = (mobileNumber: string) => {
    setMobileNumber(mobileNumber);
  };

  const handleSendCode = async () => {
    setIsLoading(true);
    // Validate mobile number
    if (mobileNumber.length < 10) {
      alert("Please enter a valid mobile number.");
      return;
    }
    if (context) {
      context.updateContextData({ phoneNumber: mobileNumber });
    }
    // Send code

    // ... add code to send SMS code

    // router
    //   .push("/onboarding/trials/verify-account?product=")
    //   .catch((error) => console.error("Navigation error:", error));
    setTimeout(async () => {
      try {
        await router.push(
          `/onboarding/trials/verify-account?number=${mobileNumber}&product=`
        );
        // Optionally, handle successful navigation here if needed
      } catch (error) {
        console.error("An error occurred during navigation:", error);
      }
    }, 3000);
  };

  return (
    <Layout
      hHeading=""
      Childrens={
        <div className="flex-1 px-[43px] flex items-center flex-col">
          <ProgressBar count={4} />

          <div className="flex flex-col w-full text-center mt-[27px] ">
            <h1 className="mx-auto text-[22px] w-[60%] leading-7 lg:w-full md:text-3xl lg:text-[45px] text-darkSilverColor font-bold">
              Enter your mobile number
            </h1>
            <div className="mx-auto mt-[20px] lg:mt-[30px] w-full max-w-[70%] md:w-[45%] lg:w-[40%]">
              <MobileNumberInput
                onMobileNumberChange={handleMobileNumberChange}
              />
            </div>
            <Button
              onClick={handleSendCode}
              disabled={isLoading}
              className="mx-auto  text-[16px] md:text-xl lg:text-[36px] font-bold text-white py-[10px] lg:py-8  mt-[14px] lg:mt-[20px] w-[221px] lg:w-[30%]  text-center bg-palatinatePurple rounded-2xl lg:rounded-[35px]">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Send Code"
              )}
            </Button>
          </div>
          <div className="flex flex-col  lg:text-[26px] text-center mt-[21px]">
            <div className="mx-auto md:w-[55%] lg:w-[40%] text-[14px] md:text-lg text-center font-normal lg:text-[26px] tracking-tight leading-normal lg:leading-8 text-darkSilverColor">
              By continuing, you authorize HubSpark to send text messages to the
              mobile number provided. Message/data rates may apply.
            </div>
          </div>
          <div className="absolute lg:hidden transform bottom-14 translate-x-0">
            <Image src={hubSparkLogo} alt="Hub Spark Logo" />
          </div>
        </div>
      }
    />
  );
};

export default Phone;

// "use client";

// import React, { useContext, useState } from "react";
// import { useRouter } from "next/navigation";
// import MobileNumberInput from "@/components/onboarding/MobileNumberInput";
// import Layout from "../../layout";
// import ProgressBar from "../../layout/progressBar";
// import { MyContext } from "@/utils/MyContext";
// import { useClientMediaQuery } from "@/utils/srchooksuseClientMediaQuery";
// import Image from "next/image";
// import hubSparkLogo from "@/assets/images/HubSpark New Logo 5.png";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Loader2 } from "lucide-react";

// const Phone = () => {
//   const context = useContext(MyContext);
//   const [mobileNumber, setMobileNumber] = useState("");
//   const router = useRouter();
//   const isMobile = useClientMediaQuery("(max-width: 769px)");
//   const [isVerificationStep, setIsVerificationStep] = useState(false);
//   const [verificationCode, setVerificationCode] = useState("");
//   const [verifyCode, setVerifyCode] = useState();
//   const [message, setMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   console.log("mobile number", mobileNumber);

//   const handleMobileNumberChange = (mobileNumber: string) => {
//     setMobileNumber(mobileNumber);
//   };

//   const handleSendCode = async () => {
//     if (mobileNumber.length < 10) {
//       setMessage("Please enter a valid mobile number.");
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const response = await fetch(
//         `/api/send-sms?to=${encodeURIComponent(mobileNumber)}`,
//         { method: "POST" }
//       );
//       const data = await response.json();

//       console.log("This is the data", data);

//       setVerifyCode(data.code);

//       if (data.success) {
//         if (context) {
//           context.updateContextData({ phoneNumber: mobileNumber });
//         }
//         setIsVerificationStep(true);
//         setMessage(
//           "SMS sent successfully. Please check your phone for the verification code."
//         );
//       } else {
//         setMessage("Failed to send SMS. Please try again.");
//       }
//     } catch (err) {
//       console.error("Failed to send request:", err);
//       setMessage("An unexpected error occurred. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleVerify = async () => {
//     setIsLoading(true);

//     console.log("Verified code", verifyCode, verificationCode);
//     try {
//       if (verifyCode !== verificationCode) {
//         setMessage("Invalid code");
//       } else {
//         setMessage("Verification Successfull!!");
//         try {
//           await router.push("/onboarding/education/business-goals");
//           // Optionally, handle successful navigation here if needed
//         } catch (error) {
//           console.error("An error occurred during navigation:", error);
//         }
//       }
//       // Navigate to the next step or update the UI as needed
//     } catch (error) {
//       setMessage("Verification failed. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <Layout
//       hHeading=""
//       Childrens={
//         <div className="flex-1 px-[43px] flex items-center flex-col">
//           <ProgressBar count={isVerificationStep ? 5 : 4} />

//           <div className="flex flex-col w-full text-center mt-[27px]">
//             <h1 className="mx-auto text-[22px] w-[60%] leading-7 lg:w-full md:text-3xl lg:text-[45px] text-darkSilverColor font-bold">
//               {isVerificationStep
//                 ? "Perfect! We just texted you a code."
//                 : "Enter your mobile number"}
//             </h1>

//             {!isVerificationStep ? (
//               <>
//                 <div className="mx-auto mt-[20px] lg:mt-[30px] w-full max-w-[70%] md:w-[45%] lg:w-[40%]">
//                   <MobileNumberInput
//                     onMobileNumberChange={handleMobileNumberChange}
//                   />
//                 </div>
//                 <Button
//                   onClick={handleSendCode}
//                   disabled={isLoading}
//                   className="mx-auto  text-[16px] md:text-xl lg:text-[36px] font-bold text-white py-[10px] lg:py-8  mt-[14px] lg:mt-[20px] w-[221px] lg:w-[30%]  text-center bg-palatinatePurple rounded-2xl lg:rounded-[35px]">
//                   {isLoading ? (
//                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                   ) : (
//                     "Send Code"
//                   )}
//                 </Button>
//                 <div className="mx-auto md:w-[55%] lg:w-[40%] text-[14px] md:text-lg text-center font-normal lg:text-[26px] tracking-tight leading-normal lg:leading-8 text-darkSilverColor mt-[21px]">
//                   By continuing, you authorize HubSpark to send text messages to
//                   the mobile number provided. Message/data rates may apply.
//                 </div>
//               </>
//             ) : (
//               <div className="px-[43px] flex items-center flex-col">
//                 <p className="text-[14px] md:text-xl tracking-tight lg:max-w-[55%] lg:leading-8 lg:text-[30px] text-darkSilverColor mt-[24px]">
//                   We sent a 4-digit code to <strong>{mobileNumber}</strong>.
//                   Enter the code to continue setting up
//                 </p>
//                 <Input
//                   type="text"
//                   placeholder="Enter 4-digit code"
//                   value={verificationCode}
//                   onChange={(e) => setVerificationCode(e.target.value)}
//                   className="w-full bg-white md:w-[55%] lg:w-[40%] h-[33px] lg:mt-16 mt-[13px] text-[12px] text-darkSilverColor pl-[18px] py-[10px] md:py-4 lg:py-8 lg:text-[30px] rounded-2xl lg:rounded-3xl"
//                 />
//                 <Button
//                   onClick={handleVerify}
//                   disabled={isLoading || verificationCode.length !== 4}
//                   className="mx-auto text-[16px] md:text-xl lg:text-[36px] font-bold text-white py-[10px] lg:py-8 mt-[14px] lg:mt-[20px] w-[221px] lg:w-[30%] bg-palatinatePurple rounded-2xl lg:rounded-[35px]">
//                   {isLoading ? (
//                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                   ) : (
//                     "Verify"
//                   )}
//                 </Button>
//                 <div className="text-[15px] lg:text-[30px] lg:max-w-[40%] lg:leading-8 mt-6 lg:mt-12 text-darkSilverColor text-center">
//                   Didn&apos;t get the code?{" "}
//                   <Link
//                     href="#"
//                     className="text-palatinatePurple lg:text-[30px] cursor-pointer">
//                     Resend
//                   </Link>{" "}
//                   or{" "}
//                   <Link
//                     href="#"
//                     className="lg:text-[30px] pb-0 lg:pb-10 cursor-pointer">
//                     Update your mobile number
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </div>

//           {message && <p className="mt-4 text-sm text-red-600">{message}</p>}

//           <div className="absolute lg:hidden transform bottom-14 translate-x-0">
//             <Image src={hubSparkLogo} alt="Hub Spark Logo" />
//           </div>
//         </div>
//       }
//     />
//   );
// };

// export default Phone;
