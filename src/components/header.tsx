import React, { FC, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  showDrawer: (isOpen: boolean) => void;
  module: string;
}

const Header: FC<HeaderProps> = ({ showDrawer, module }) => {
  const handleDrawer = () => {
    showDrawer((prev: any) => !prev);
  };

  return (
    <div className="" style={{ height: "46px" }}>
      <div className="h-full grid grid-cols-4 bg-chinesWhite bgChinesWhites">
        <div className="text-sm mb-2 ">
          <div className="w-8 p-2 pl-3" onClick={handleDrawer}>
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faBars}
              size="2xl"
            />
          </div>
        </div>
        <div className="col-span-2 flex justify-center text-xl">
          <h5 className="select-none text-[22px] pt-2 text-darkSilverColor font-arial font-bold">
            {" "}
            {module}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Header;
