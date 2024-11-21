import React from "react";
import Link from "next/link";
import { LogoSvg } from "@/svgs/logo";

const NavBar = () => {
    return (
        <div className="flex items-center ml-[80px] sm:ml-[45px]  overflow-x-hidden p-4">
            <Link href={"/"}>
                <LogoSvg />
            </Link>
            <div className="flex mx-4 items-center">
        <span>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="51"
              height="70"
              viewBox="0 0 51 86"
              fill="none"
              className="mr-[-12px]"
          >
            <path
                d="M50.8299 85.1097H34.2299L0.419922 -1.32031H17.0099L50.8299 85.1097Z"
                fill="#27272D"
            />
          </svg>
        </span>
                <span>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="51"
              height="70"
              viewBox="0 0 51 86"
              fill="none"
              className="mx-[-12px]"
          >
            <path
                d="M50.7196 85.1097H34.1296L0.30957 -1.32031H16.9096L50.7196 85.1097Z"
                fill="#631363"
            />
          </svg>
        </span>
                <span>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="51"
              height="70"
              viewBox="0 0 51 86"
              fill="none"
              className="ml-[-12px]"
          >
            <path
                d="M50.9998 85.1097H34.3998L0.589844 -1.32031H17.1798L50.9998 85.1097Z"
                fill="#40F440"
            />
          </svg>
        </span>
            </div>
        </div>
    );
};

export default NavBar;
