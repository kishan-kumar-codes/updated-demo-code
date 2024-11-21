import React from "react";
import ReceiverIcon from "../../assets/images/receiver-icon.svg";
import Image from "next/image";
import "../../app/globals.css";

const OutgoingCall = ({}) => {
  return (
    <div className="h-screen w-screen flex justify-center">
      <div className="container bg-cultured mx-auto overflow-x-hidden sm:container md:container md:mx-auto h-full md:overflow-y-hidden sm:overflow-y-scroll">
        <div className="h-full w-full flex flex-col justify-between items-center">
          <div className="call-timer text-center mt-[17px]">
            <h5 className="text-[22px] text-palatinatePurple">Incoming Call</h5>

            <div className="info mt-[55px]">
              <h5 className="text-[36px] font-bold text-darkSilverColor">
                Lily Brock
              </h5>
              <h5 className="text-[24px] font-bold text-grayX11">
                (305) 555-6789
              </h5>
            </div>
          </div>
          <div className="button-content flex justify-around w-full mb-[87px] ">
            <div className="btn-div h-[99px] w-[99px]  p-[14px] rounded-full bg-chinesWhite">
              <button className="bg-limeGreen h-full w-full border-[3px] border-solid border-white  text-white rounded-full text-lg font-bold font-arial shadow-md">
                <Image
                  src={ReceiverIcon}
                  alt="cancel"
                  className="m-auto -rotate-[120deg]"
                />
              </button>
            </div>
            <div className="btn-div h-[99px] w-[99px]  p-[14px] rounded-full bg-chinesWhite">
              <button className="bg-red h-full w-full border-[3px] border-solid border-white  text-white rounded-full text-lg font-bold font-arial shadow-md">
                <Image src={ReceiverIcon} alt="cancel" className="m-auto" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutgoingCall;
