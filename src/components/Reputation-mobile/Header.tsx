import React from "react";
import { MenuIcon } from "@/svgs/checkIn/svgs";

// Centralized Typography style
const Typography: React.CSSProperties = {
  fontFamily: "Arial",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

// CheckInStyle extending Typography
const CheckInStyle: React.CSSProperties = {
  ...Typography,
  color: "#6D6D6D",
  fontSize: "22px",
};

interface HeaderProps {
  title: string;
  displayName?: string;
}

const Header: React.FC<HeaderProps> = React.memo(
  ({ title, displayName }: HeaderProps) => {
    const displayComponentName = displayName || title;
    Header.displayName = displayComponentName; // Set the display name dynamically

    return (
      <div className="flex rounded-b-3xl items-center justify-center w-full h-[60px] bg-[#E0E0E0]">
        <div className="flex px-5 ml-6   py-4">
          <MenuIcon />
        </div>
        <div className="flex -ml-12 justify-center items-center flex-grow">
          <span style={CheckInStyle}>{title}</span>
        </div>
      </div>
    );
  }
);

export default Header;
