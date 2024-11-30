import React, { useState } from 'react';

interface Switch {
    check: boolean;
    handleCheck: (check: boolean) => void
}

const ToggleSwitch: React.FC<Switch> = ({check, handleCheck}) => {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
        handleCheck(checked)
    };

    return (
        <div className="relative inline-block md:w-[53px] w-[27px] md:h-[22px] h-[11px]">
            <input
                type="checkbox"
                id="toggle"
                className="hidden"
                checked={checked}
                onChange={handleChange}
            />
            <label
                htmlFor="toggle"
                className={`flex items-center cursor-pointer  rounded-full py-1 p-0 w-full ${
                    checked ? " bg-limeGreen pl-3" : "bg-white pl-1"
                  }`}
            >
                <div className={`md:w-[18px] w-[9px] md:h-[18px] h-[9px]  rounded-full shadow-md transition-transform 
                ${checked
                      ? "transform translate-x-full bg-white"
                      : " bg-darkSilverColor"
                  }`}></div>
            </label>
        </div>
    );
};

export default ToggleSwitch;
