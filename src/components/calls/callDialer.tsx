import React, { useState } from "react";
import Image from "next/image";
import AddContactIcon from "../../assets/images/add-contact-icon.svg";
import KeypadeIcon from "../../assets/images/keypad-icon.svg";
import StarIcon from "../../assets/images/star-icon.svg";
import ReceiverIcon from "../../assets/images/receiver-icon.svg";
import Link from "next/link";
import "../../app/globals.css";

const CallDialer = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleNumberClick = (number: string) => {
    setPhoneNumber((prevPhoneNumber) => prevPhoneNumber + number);
  };
  const defaultClass =
    "h-[52px] w-[52px] rounded-full bg-palatinatePurple  text-cultured text-[20px] font-arial font-bold ";

  return (
    <div>
      <div className="add-contact-icon float-right pt-[27px] pr-[40px] mb-[55px]">
        <Link href="./createContact">
          <Image src={AddContactIcon} alt="" />
        </Link>
      </div>
      <div className="flex w-full bg-chinesWhite justify-center">
        <input
          className="py-[16px] text-darkSilverColor tex-[21.5px] font-bold w-full bg-chinesWhite text-center outline-none bottom-0 "
          placeholder="(305) 555-6789"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="mt-[65px] mx-[75px]">
        <div className="flex justify-between mt-[40px]">
          <button
            className={`${defaultClass}`}
            onClick={() => handleNumberClick("1")}
          >
            1{" "}
            <span className="block text-[10px]">
              <Image src={KeypadeIcon} alt="icon" className="mx-auto " />
            </span>
          </button>
          <button
            className={`${defaultClass}`}
            onClick={() => handleNumberClick("2")}
          >
            2 <span className="block text-[10px]">abc</span>
          </button>
          <button
            className={`${defaultClass}`}
            onClick={() => handleNumberClick("3")}
          >
            3 <span className="block text-[10px]">def</span>
          </button>
        </div>
        <div className="flex justify-between mt-[40px]">
          <button
            className={`${defaultClass}`}
            onClick={() => handleNumberClick("4")}
          >
            4 <span className="block text-[10px]">ghi</span>
          </button>
          <button
            className={`${defaultClass}`}
            onClick={() => handleNumberClick("5")}
          >
            5 <span className="block text-[10px]">jkl</span>
          </button>
          <button
            className={`${defaultClass}`}
            onClick={() => handleNumberClick("6")}
          >
            6 <span className="block text-[10px]">mno</span>
          </button>
        </div>
        <div className="flex justify-between mt-[40px]">
          <button
            className={`${defaultClass}`}
            onClick={() => handleNumberClick("7")}
          >
            7 <span className="block text-[10px]">pqrs</span>
          </button>
          <button
            className={`${defaultClass}`}
            onClick={() => handleNumberClick("8")}
          >
            8 <span className="block text-[10px]">tuv</span>
          </button>
          <button
            className={`${defaultClass}`}
            onClick={() => handleNumberClick("9")}
          >
            9 <span className="block text-[10px]">wxyz</span>
          </button>
        </div>
        <div className="flex justify-between mt-[40px]">
          <button
            className={`${defaultClass}`}
            onClick={() => handleNumberClick("*")}
          >
            <Image src={StarIcon} alt="*" className="mx-auto" />
          </button>
          <button
            className={`${defaultClass}`}
            onClick={() => handleNumberClick("0")}
          >
            0 <span className="block text-[10px] -mt-1">+</span>
          </button>
          <button
            className={`${defaultClass}`}
            onClick={() => handleNumberClick("#")}
          >
            #{" "}
          </button>
        </div>
      </div>
      <div className="flex w-full justify-center mt-[18px]">
        <div className="h-[52px] w-[52px] ">
          <Link href="./outgoingCall">
            <button className="bg-limeGreen h-full w-full text-white rounded-full text-lg font-bold font-arial shadow-md">
              <Image
                src={ReceiverIcon}
                alt="cancel"
                className="m-auto h-[30px] w-[30px] -rotate-[120deg]"
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallDialer;
