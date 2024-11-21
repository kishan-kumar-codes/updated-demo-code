import React from "react";
import Image from "next/image";

const imgStyle: React.CSSProperties = {
    background: "lightgray",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

};

export const GoogleIcon = () => {
    return (
        <Image
            src="google.svg"
            style={imgStyle}
            alt="Google Icon"
            width={55}
            height={55}
        />
    );
};

export const RecentGoogleIcon = () => {
    return (
        <Image
            src="/Rectangle.jpg"
            style={imgStyle}
            alt="Google Icon"
            width={55}
            height={55}
        />
    );
};

export const MarkingFBIcon = () => {
    return (
        <Image
            src="/fb.png"
            className="bg-[#959292]"
            alt="fb Icon"
            width={55}
            height={55}
        />
    );
};
export const MarkingIGIcon = () => {
    return (
        <Image
            src="/ig.png"

            className="bg-[#959292]"
            alt="IG Icon"
            width={55}
            height={55}
        />
    );
};

export const RecentRevIcon = () => {
    return (
        <Image
            src="/rev1.jpg"
            style={imgStyle}
            alt="Google Icon"
            width={55}
            height={55}
        />
    );
};
