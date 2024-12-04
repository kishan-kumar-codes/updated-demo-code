// import React, { useState } from "react";

// const ToggleSwitch: React.FC = () => {
//   const [checked, setChecked] = useState(false);

//   const handleChange = () => {
//     setChecked(!checked);
//   };

//   return (
//     <div className="relative inline-block w-[27px] h-[11px] md:w-[53px] md:h-[23px]">
//       <input
//         type="checkbox"
//         id="toggle"
//         className="hidden"
//         checked={checked}
//         onChange={handleChange}
//       />
//       <label
//         htmlFor="toggle"
//         className={`flex items-center cursor-pointer  rounded-full p-1 w-full ${
//           checked ? " bg-limeGreen" : "bg-white"
//         }`}>
//         <div
//           className={`w-[9px] h-[9px]  rounded-full shadow-md transition-transform md:w-[22px] md:h-[22px] ${
//             checked
//               ? "transform translate-x-full bg-white"
//               : " bg-darkSilverColor"
//           }`}></div>
//       </label>
//     </div>
//   );
// };

// export default ToggleSwitch;

import React, { useState } from "react";

interface ToggleSwitchProps {
  checked?: boolean;
  setChecked?: (checked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked = false,
  setChecked = () => {},
}) => {
  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="relative inline-block w-[27px] h-[11px] md:w-[53px] md:h-[23px]">
      <input
        type="checkbox"
        id="toggle"
        className="hidden"
        checked={checked}
        onChange={handleChange}
      />
      <label
        htmlFor="toggle"
        className={`flex items-center cursor-pointer  rounded-full p-1 w-full ${
          checked ? " bg-limeGreen" : "bg-white"
        }`}>
        <div
          className={`w-[9px] h-[9px]  rounded-full shadow-md transition-transform md:w-[22px] md:h-[22px] ${
            checked
              ? "transform translate-x-full bg-white"
              : " bg-darkSilverColor"
          }`}></div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
