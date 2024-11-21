import React from "react";
import SoundIcon from "../../assets/images/sound-icon.svg";
import MicIcon from "../../assets/images/mic-icon.svg";
import HoldIcon from "../../assets/images/hold-icon.svg";
import ReceiverIcon from "../../assets/images/receiver-icon.svg";
import Image from "next/image";

import "../../app/globals.css";
import Link from "next/link";

const OutgoingCall = ({}) => {
  return (
    <div className="h-screen w-screen flex justify-center">
      <div className="container bg-cultured mx-auto overflow-x-hidden sm:container md:container md:mx-auto h-full md:overflow-y-hidden sm:overflow-y-scroll">
        <div className="h-full w-full flex flex-col justify-between items-center">
          <div className="call-timer text-center mt-[17px]">
            <h5 className="text-[22px] text-palatinatePurple">00:26</h5>

            <div className="info mt-[55px]">
              <h5 className="text-[36px] font-bold text-darkSilverColor">
                Lily Brock
              </h5>
              <h5 className="text-[24px] font-bold text-grayX11">
                (305) 555-6789
              </h5>
            </div>
          </div>
          <div className="h-[218px] w-[254px] flex flex-col justify-between items-center rounded-3xl bg-chinesWhite mx-[60PX] mb-[64px] shadow-lg">
            <div className="flex justify-around w-full mt-[36px]">
              <div className="flex flex-col items-center">
                <Image
                  src={SoundIcon}
                  alt="sound"
                  className="h-[27px] w-[30px]"
                />
                <h5 className="text-sm font-arial text-palatinatePurple">
                  Speaker
                </h5>
              </div>
              <div className="flex flex-col items-center">
                <Image src={MicIcon} alt="mute" className="h-[27px] w-[30px]" />
                <h5 className="text-sm font-arial text-palatinatePurple ">
                  Mute
                </h5>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={HoldIcon}
                  alt="hold"
                  className="h-[27px] w-[30px]"
                />
                <h5 className="text-sm font-arial text-palatinatePurple">
                  Hold Call
                </h5>
              </div>
            </div>
            <div className="btn mb-[25px]">
              <Link
                href={{
                  pathname: "/calls",
                  query: { name: "All Calls" },
                }}>
                <button className="bg-red h-[64px] w-[62px] rounded-full ">
                  <Image
                    src={ReceiverIcon}
                    alt="cancel call"
                    className="mx-auto"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutgoingCall;
