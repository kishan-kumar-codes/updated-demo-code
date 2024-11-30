import Image, { StaticImageData } from "next/image";
import React from "react";

interface ExpansionCardProps {
  logoSrc: StaticImageData;
  description: string;
  quantity: number;
  price: number;
  category: string;
}

const ExpansionCard: React.FC<ExpansionCardProps> = ({
  logoSrc,
  description,
  quantity,
  price,
  category,
}) => {
  return (
    <div className="w-full bg-white h-[83px] flex items-center rounded-xl mt-[10px] ">
      <div className="logo bg-chinesWhite h-[53px] w-[59px] ml-[22px] rounded-full ">
        <Image src={logoSrc} alt={description} width={59} height={53} />
      </div>
      <div className="ml-[11px]">
        <h5 className="text-[14px] text-darkSilverColor font-bold">
          {description}
        </h5>
        <h5 className="text-[10px] text-darkSilverColor">{quantity}</h5>
        <h5 className="text-[10px] text-darkSilverColor">
          ${price} ,{category}
        </h5>
      </div>
    </div>
  );
};

export default ExpansionCard;
