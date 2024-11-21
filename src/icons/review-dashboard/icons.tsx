import Image from "next/image";
import React from "react";

const imgStyle: React.CSSProperties = {
    background: "lightgray",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

};

export const RecentR1Icon = () => {
    return (
        <Image
            src="/Rectangle.png"
            style={imgStyle}
            className="bg-[#959292]"
            alt="Google Icon"
            width={55}
            height={55}
        />
    );
};

export const RecentR2Icon = () => {
    return (
        <Image
            src="/r2.jpg"
            style={imgStyle}
            alt="Google Icon"
            width={55}
            height={55}
        />
    );
};
export const RecentR3Icon = () => {
    return (
        <Image
            src="/r3.jpg"
            style={imgStyle}
            alt="Google Icon"
            width={55}
            height={55}
        />
    );
};

export const RecentR4Icon = () => {
    return (
        <Image
            src="/54.png"
            style={imgStyle}
            alt="Google Icon"
            width={55}
            height={55}
        />
    );
};

export const RecentRev1Icon = () => {
    return <Image src="/3556.png" alt="Google Icon" width={55} height={55} />;
};
