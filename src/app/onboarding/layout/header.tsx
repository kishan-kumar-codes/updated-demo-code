import React, { FC, useState } from "react";

interface HeaderProps {
    module: string
}

const Header: FC<HeaderProps> = ({ module }) => {



    return (
        <div
            className=""
            style={{ height: "46px", boxShadow: " 0px 2px 2px 0px #BCBCBC " }}
        >
            <div className="h-full flex justify-center bg-chinesWhite bgChinesWhites p-3">
                <div className="col-span-2 flex justify-center text-xl">
                    <h5 className="select-none text-[22px] text-darkSilverColor font-arial font-bold"> {module}</h5>
                </div>
            </div>
        </div>
    );
};

export default Header;
