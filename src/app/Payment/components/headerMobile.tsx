import React, { FC, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


interface HeaderProps {
    showDrawer: (isOpen: boolean) => void;
    hHeading: string
}

const Header: React.FC<HeaderProps> = ({ showDrawer, hHeading }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function handleDrawer() {
        setIsOpen(!isOpen);
        showDrawer(isOpen);
    }

    return (
        <div className='header w-full h-[54px] bg-chinesWhite'>
            <div className="h-full flex bg-chinesWhite bgChinesWhites p-3">
                <div className="text-sm mb-2 ">
                    <div className="w-8" onClick={handleDrawer}>
                        <FontAwesomeIcon
                            className="cursor-pointer"
                            icon={faBars}
                            size="2xl"
                        />
                    </div>
                </div>
                <div className="col-span-2 flex justify-center flex-1">
                    <h5 className="select-none text-[22px] text-darkSilverColor font-arial font-bold"> {hHeading}</h5>
                </div>
            </div>
        </div>
    )
}

export default Header